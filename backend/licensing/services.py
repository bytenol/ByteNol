
from datetime import datetime
import hashlib
from .signing import sign_license

from django.db import transaction
from django.utils import timezone

from rest_framework.exceptions import ValidationError

from products.models import Product
from orders.models import Order

from .models import License, LicenseActivation

from django.db.models import Count
from django.core.exceptions import ValidationError as DjangoValidationError


@transaction.atomic
def create_license(
    *,
    customer,
    product,
    expires_at=None,
    max_activations=1,
    order=None,
    notes=""
):
    """
    Generate a new license for a customer.

    The original license key is returned only once.
    Only its SHA-256 hash is stored in the database.
    """

    if not customer or not customer.is_authenticated:
        raise ValidationError("A valid customer is required.")

    if not isinstance(product, Product):
        raise ValidationError("A valid product is required.")

    product = Product.objects.select_for_update().filter(
        pk=product.pk,
        is_active=True,
        category__is_active=True
    ).first()

    if product is None:
        raise ValidationError("This product is unavailable.")

    if isinstance(max_activations, bool) or not isinstance(max_activations, int):
        raise ValidationError("Maximum activations must be a whole number.")

    if max_activations < 1:
        raise ValidationError("A license must allow at least one activation.")

    starts_at = timezone.now()

    if expires_at is not None:
        if not isinstance(expires_at, datetime):
            raise ValidationError("Invalid license expiration date.")

        if timezone.is_naive(expires_at):
            raise ValidationError(
                "Expiration date must include timezone information."
            )

        if expires_at <= starts_at:
            raise ValidationError(
                "Expiration date must be in the future."
            )

    if order is not None:
        if not isinstance(order, Order):
            raise ValidationError("Invalid order.")

        if order.customer_id != customer.pk:
            raise ValidationError(
                "The order does not belong to this customer."
            )

        if order.payment_status != Order.PaymentStatus.PAID:
            raise ValidationError(
                "A license cannot be linked to an unpaid order."
            )

        if not order.items.filter(product=product).exists():
            raise ValidationError(
                "The order does not contain this product."
            )

    license_instance = License.objects.create(
        customer=customer,
        product=product,
        order=order,
        starts_at=starts_at,
        expires_at=expires_at,
        max_activations=max_activations,
        notes=notes
    )

    signed_license = sign_license(license_instance)

    return {
       "license": license_instance,
        "license_key": license_instance._plain_key,
        "signed_license": signed_license,
    }




def validate_license_key(*, license_key, product=None):
    """
    Validate a license key.

    Returns the license record if valid.
    Raises ValidationError if invalid.
    """

    if not isinstance(license_key, str) or not license_key.strip():
        raise ValidationError("A license key is required.")

    license_key = license_key.strip().upper()

    if len(license_key) != 36 or not license_key.startswith("BNL-"):
        raise ValidationError("Invalid license key.")

    key_hash = hashlib.sha256(
        license_key.encode("utf-8")
    ).hexdigest()

    queryset = License.objects.select_related(
        "customer",
        "product",
        "product__category"
    )

    try:
        license_instance = queryset.get(key_hash=key_hash)
    except License.DoesNotExist:
        raise ValidationError("Invalid license key.")

    if product is not None:
        if license_instance.product_id != product.pk:
            raise ValidationError(
                "This license does not belong to the requested product."
            )

    if license_instance.status != License.Status.ACTIVE:
        raise ValidationError(
            f"This license is {license_instance.status.lower()}."
        )

    now = timezone.now()

    if license_instance.starts_at > now:
        raise ValidationError("This license is not yet active.")

    if (
        license_instance.expires_at is not None
        and license_instance.expires_at <= now
    ):
        raise ValidationError("This license has expired.")

    if not license_instance.product.is_active:
        raise ValidationError("This product is currently unavailable.")

    if not license_instance.product.category.is_active:
        raise ValidationError("This product category is unavailable.")

    return license_instance




@transaction.atomic
def activate_license(
    *,
    license_key,
    device_fingerprint,
    device_name=""
):
    """
    Activate a license on a device.

    A device fingerprint identifies an installation.
    The same device cannot consume multiple activation slots.
    """

    if not isinstance(device_fingerprint, str):
        raise ValidationError("Invalid device fingerprint.")

    device_fingerprint = device_fingerprint.strip()

    if not device_fingerprint or len(device_fingerprint) > 128:
        raise ValidationError("Invalid device fingerprint.")

    if not isinstance(device_name, str):
        raise ValidationError("Invalid device name.")

    device_name = device_name.strip()[:150]

    if not isinstance(license_key, str) or not license_key.strip():
        raise ValidationError("A license key is required.")

    license_key = license_key.strip().upper()

    if len(license_key) != 36 or not license_key.startswith("BNL-"):
        raise ValidationError("Invalid license key.")

    key_hash = hashlib.sha256(
        license_key.encode("utf-8")
    ).hexdigest()

    try:
        license_instance = (
            License.objects
            .select_for_update()
            .select_related("product", "product__category")
            .get(key_hash=key_hash)
        )
    except License.DoesNotExist:
        raise ValidationError("Invalid license key.")

    now = timezone.now()

    if license_instance.status != License.Status.ACTIVE:
        raise ValidationError(
            f"This license is {license_instance.status.lower()}."
        )

    if license_instance.starts_at > now:
        raise ValidationError("This license is not yet active.")

    if (
        license_instance.expires_at is not None
        and license_instance.expires_at <= now
    ):
        raise ValidationError("This license has expired.")

    if not license_instance.product.is_active:
        raise ValidationError("This product is unavailable.")

    if not license_instance.product.category.is_active:
        raise ValidationError("This product category is unavailable.")

    activation = LicenseActivation.objects.filter(
        license=license_instance,
        device_fingerprint=device_fingerprint
    ).first()

    # Existing active device: refresh its last-seen timestamp.
    if activation and activation.is_active:
        activation.last_seen_at = now
        activation.device_name = device_name
        activation.save(
            update_fields=["last_seen_at", "device_name"]
        )

        return activation

    # Count currently active devices.
    active_count = LicenseActivation.objects.filter(
        license=license_instance,
        is_active=True
    ).count()

    if active_count >= license_instance.max_activations:
        raise ValidationError(
            "This license has reached its maximum activation limit."
        )

    # Reactivate an existing inactive device.
    if activation:
        activation.is_active = True
        activation.device_name = device_name
        activation.activated_at = now
        activation.last_seen_at = now
        activation.deactivated_at = None

        activation.save(
            update_fields=[
                "is_active",
                "device_name",
                "activated_at",
                "last_seen_at",
                "deactivated_at"
            ]
        )

        return activation

    # Register a new device.
    activation = LicenseActivation.objects.create(
        license=license_instance,
        device_fingerprint=device_fingerprint,
        device_name=device_name,
        is_active=True,
        last_seen_at=now
    )

    return activation


@transaction.atomic
def deactivate_license(*, activation_id, customer):
    """
    Deactivate a device belonging to the authenticated customer.
    """

    try:
        activation = (
            LicenseActivation.objects
            .select_for_update()
            .select_related("license")
            .get(
                id=activation_id,
                license__customer=customer
            )
        )
    except LicenseActivation.DoesNotExist:
        raise ValidationError("Device activation not found.")

    if not activation.is_active:
        raise ValidationError("This device is already deactivated.")

    activation.is_active = False
    activation.deactivated_at = timezone.now()

    activation.save(
        update_fields=["is_active", "deactivated_at"]
    )

    return activation
