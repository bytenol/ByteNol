
import requests

from decimal import Decimal

from django.conf import settings
from django.db import transaction
from django.utils import timezone

from rest_framework.exceptions import APIException, ValidationError, NotFound

from orders.models import Order
from .models import Payment

from decimal import Decimal, InvalidOperation
from django.utils import timezone


FLUTTERWAVE_CHECKOUT_URL = "https://api.flutterwave.com/v3/payments"


class PaymentInitializationError(APIException):
    status_code = 502
    default_detail = "Unable to initialize payment. Please try again later."
    default_code = "payment_initialization_failed"


def initialize_payment(*, order, customer):

    secret_key = getattr(settings, "FLUTTERWAVE_SECRET_KEY", None)

    if not secret_key:
        raise PaymentInitializationError(
            "Flutterwave secret key is not configured."
        )

    # Lock the order while creating a payment attempt.
    with transaction.atomic():
        locked_order = (
            Order.objects
            .select_for_update()
            .get(pk=order.pk)
        )

        if locked_order.customer_id != customer.pk:
            raise ValidationError(
                "You cannot pay for another customer's order."
            )

        if locked_order.payment_status == Order.PaymentStatus.PAID:
            raise ValidationError("This order has already been paid.")

        if locked_order.status in [
            Order.Status.CANCELLED,
            Order.Status.COMPLETED,
        ]:
            raise ValidationError(
                "Payment cannot be initiated for this order."
            )

        if locked_order.total_amount <= Decimal("0.00"):
            raise ValidationError(
                "This order does not have a payable amount."
            )

        payment = Payment.objects.create(
            order=locked_order,
            amount=locked_order.total_amount,
            currency=locked_order.currency,
            status=Payment.Status.INITIATED,
        )

    # Prepare customer details.
    customer_name = customer.get_full_name().strip() or customer.email

    customer_details = {
        "email": customer.email,
        "name": customer_name,
    }

    if customer.phone_number:
        customer_details["phone_number"] = customer.phone_number

    payload = {
        "tx_ref": payment.tx_ref,
        "amount": str(payment.amount),
        "currency": payment.currency,
        "redirect_url": (
            f"{settings.FRONTEND_URL.rstrip('/')}/payment/complete"
        ),
        "customer": customer_details,
        "customizations": {
            "title": "ByteNol Payment",
            "description": f"Payment for order {locked_order.order_number}",
        },
        "meta": {
            "order_id": str(locked_order.id),
            "order_number": locked_order.order_number,
        },
    }

    headers = {
        "Authorization": f"Bearer {secret_key}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    try:
        response = requests.post(
            FLUTTERWAVE_CHECKOUT_URL,
            json=payload,
            headers=headers,
            timeout=30,
        )

        response.raise_for_status()
        response_data = response.json()

        checkout_url = response_data.get("data", {}).get("link")

        if (
            response_data.get("status") != "success"
            or not checkout_url
        ):
            raise PaymentInitializationError()

        payment.checkout_url = checkout_url
        payment.status = Payment.Status.PENDING
        payment.save(
            update_fields=["checkout_url", "status", "updated_at"]
        )

        return payment

    except requests.RequestException as exc:
        payment.status = Payment.Status.FAILED
        payment.failure_reason = "Unable to connect to Flutterwave."
        payment.save(
            update_fields=[
                "status",
                "failure_reason",
                "updated_at",
            ]
        )

        raise PaymentInitializationError() from exc

    except (ValueError, AttributeError) as exc:
        payment.status = Payment.Status.FAILED
        payment.failure_reason = "Invalid response from Flutterwave."
        payment.save(
            update_fields=[
                "status",
                "failure_reason",
                "updated_at",
            ]
        )

        raise PaymentInitializationError() from exc




FLUTTERWAVE_VERIFY_URL = "https://api.flutterwave.com/v3/transactions"


class PaymentVerificationError(APIException):
    status_code = 502
    default_detail = "Unable to verify payment with Flutterwave."
    default_code = "payment_verification_failed"


def verify_payment(*, tx_ref, transaction_id, customer):
    """
    Verify a Flutterwave transaction and update its payment/order
    records only after successful server-side verification.
    """

    secret_key = getattr(settings, "FLUTTERWAVE_SECRET_KEY", None)

    if not secret_key:
        raise PaymentVerificationError(
            "Flutterwave secret key is not configured."
        )

    try:
        payment = Payment.objects.select_related(
            "order",
            "order__customer"
        ).get(
            tx_ref=tx_ref,
            order__customer=customer
        )
    except Payment.DoesNotExist:
        raise NotFound("Payment transaction not found.")

    # An already verified payment must remain idempotent.
    if payment.status == Payment.Status.SUCCESSFUL:
        if payment.provider_transaction_id == str(transaction_id):
            return payment

        raise ValidationError(
            "This payment has already been verified."
        )

    if payment.status in [
        Payment.Status.FAILED,
        Payment.Status.CANCELLED,
    ]:
        raise ValidationError(
            "This payment attempt is no longer valid."
        )

    headers = {
        "Authorization": f"Bearer {secret_key}",
        "Accept": "application/json",
    }

    try:
        response = requests.get(
            f"{FLUTTERWAVE_VERIFY_URL}/{transaction_id}/verify",
            headers=headers,
            timeout=30,
        )

        response.raise_for_status()
        response_data = response.json()

    except (requests.RequestException, ValueError) as exc:
        raise PaymentVerificationError() from exc

    if response_data.get("status") != "success":
        raise ValidationError(
            "Flutterwave could not verify this transaction."
        )

    transaction_data = response_data.get("data")

    if not isinstance(transaction_data, dict):
        raise PaymentVerificationError(
            "Flutterwave returned an invalid verification response."
        )

    # Confirm that the returned transaction is the one we expect.
    if str(transaction_data.get("id")) != str(transaction_id):
        raise ValidationError("Transaction ID mismatch.")

    if transaction_data.get("tx_ref") != payment.tx_ref:
        raise ValidationError("Transaction reference mismatch.")

    if transaction_data.get("currency") != payment.currency:
        raise ValidationError("Payment currency mismatch.")

    provider_status = transaction_data.get("status", "").lower()

    # Handle verified unsuccessful transactions.
    if provider_status != "successful":

        if provider_status in ["failed", "cancelled"]:
            with transaction.atomic():
                locked_payment = Payment.objects.select_for_update().get(
                    pk=payment.pk
                )

                if locked_payment.status != Payment.Status.SUCCESSFUL:
                    locked_payment.status = (
                        Payment.Status.FAILED
                        if provider_status == "failed"
                        else Payment.Status.CANCELLED
                    )

                    locked_payment.failure_reason = (
                        f"Flutterwave transaction status: {provider_status}"
                    )

                    locked_payment.save(
                        update_fields=[
                            "status",
                            "failure_reason",
                            "updated_at",
                        ]
                    )

        return Payment.objects.select_related("order").get(
            pk=payment.pk
        )

    # Validate the amount using Decimal, not floating-point arithmetic.
    try:
        received_amount = Decimal(str(transaction_data["amount"]))
    except (KeyError, InvalidOperation, TypeError, ValueError) as exc:
        raise PaymentVerificationError(
            "Flutterwave returned an invalid transaction amount."
        ) from exc

    # We require an exact match because our current implementation
    # does not yet support automatic refunds for overpayments.
    if received_amount != payment.amount:
        raise ValidationError("Payment amount mismatch.")

    # Lock the payment and order before updating their statuses.
    with transaction.atomic():
        locked_payment = Payment.objects.select_for_update().get(
            pk=payment.pk
        )

        locked_order = (
            locked_payment.order.__class__.objects
            .select_for_update()
            .get(pk=locked_payment.order_id)
        )

        # Another request may have verified this payment meanwhile.
        if locked_payment.status == Payment.Status.SUCCESSFUL:
            if locked_payment.provider_transaction_id == str(transaction_id):
                return locked_payment

            raise ValidationError(
                "This payment has already been verified."
            )

        if locked_payment.status in [
            Payment.Status.FAILED,
            Payment.Status.CANCELLED,
        ]:
            raise ValidationError(
                "This payment attempt is no longer valid."
            )

        # Prevent a second payment attempt from paying an order twice.
        if locked_order.payment_status == Order.PaymentStatus.PAID:
            raise ValidationError(
                "This order has already been paid."
            )

        locked_payment.provider_transaction_id = str(transaction_id)
        locked_payment.status = Payment.Status.SUCCESSFUL
        locked_payment.payment_method = transaction_data.get(
            "payment_type", ""
        )
        locked_payment.verified_at = timezone.now()

        locked_payment.save(
            update_fields=[
                "provider_transaction_id",
                "status",
                "payment_method",
                "verified_at",
                "updated_at",
            ]
        )

        locked_order.payment_status = Order.PaymentStatus.PAID
        locked_order.status = Order.Status.PAID
        locked_order.paid_at = timezone.now()

        locked_order.save(
            update_fields=[
                "payment_status",
                "status",
                "paid_at",
                "updated_at",
            ]
        )

    return Payment.objects.select_related("order").get(
        pk=payment.pk
    )
