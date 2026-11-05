
import hashlib
import secrets

import uuid

from django.conf import settings
from django.db import models
from django.db.models import F, Q
from django.utils import timezone

from products.models import Product
from orders.models import Order


class License(models.Model):

    class Status(models.TextChoices):
        ACTIVE = "ACTIVE", "Active"
        SUSPENDED = "SUSPENDED", "Suspended"
        REVOKED = "REVOKED", "Revoked"
        EXPIRED = "EXPIRED", "Expired"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="licenses"
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
        related_name="licenses"
    )

    order = models.ForeignKey(
        Order,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="licenses"
    )

    # Only the hash is stored in the database.
    key_prefix = models.CharField(
        max_length=12,
        db_index=True,
        editable=False
    )

    key_hash = models.CharField(
        max_length=64,
        unique=True,
        editable=False
    )

    signed_license = models.TextField(
        blank=True,
        editable=False
    )

    signing_key_id = models.CharField(
        max_length=50,
        blank=True,
        editable=False
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.ACTIVE
    )

    starts_at = models.DateTimeField(default=timezone.now)

    expires_at = models.DateTimeField(
        null=True,
        blank=True
    )

    max_activations = models.PositiveSmallIntegerField(default=1)

    notes = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "licensing_license"
        ordering = ["-created_at"]

        indexes = [
            models.Index(
                fields=["customer", "status"],
                name="license_customer_status_idx"
            ),
            models.Index(
                fields=["product", "status"],
                name="license_product_status_idx"
            ),
            models.Index(
                fields=["expires_at"],
                name="license_expiry_idx"
            ),
        ]

        constraints = [
            models.CheckConstraint(
                condition=Q(max_activations__gte=1),
                name="license_min_activations"
            ),
            models.CheckConstraint(
                condition=(
                    Q(expires_at__isnull=True)
                    | Q(expires_at__gt=F("starts_at"))
                ),
                name="license_valid_date_range"
            ),
        ]

    def save(self, *args, **kwargs):

        if not self.key_hash:
            raw_key = f"BNL-{secrets.token_hex(16).upper()}"

            self.key_prefix = raw_key[:12]

            self.key_hash = hashlib.sha256(
                raw_key.encode("utf-8")
            ).hexdigest()

            # Available only immediately after creation.
            # It is never stored in the database.
            self._plain_key = raw_key

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.product.name} - {self.key_prefix}"


class LicenseActivation(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    license = models.ForeignKey(
        License,
        on_delete=models.CASCADE,
        related_name="activations"
    )

    device_fingerprint = models.CharField(max_length=128)

    device_name = models.CharField(
        max_length=150,
        blank=True
    )

    is_active = models.BooleanField(default=True)

    activated_at = models.DateTimeField(auto_now_add=True)

    last_seen_at = models.DateTimeField(
        null=True,
        blank=True
    )

    deactivated_at = models.DateTimeField(
        null=True,
        blank=True
    )

    class Meta:
        db_table = "licensing_license_activation"
        ordering = ["-activated_at"]

        indexes = [
            models.Index(
                fields=["license", "is_active"],
                name="activation_license_active_idx"
            ),
        ]

        constraints = [
            models.UniqueConstraint(
                fields=["license", "device_fingerprint"],
                name="unique_license_device"
            ),
        ]

    def __str__(self):
        return f"{self.license.key_prefix} - {self.device_name or self.device_fingerprint}"
