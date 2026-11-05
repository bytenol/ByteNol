
import uuid

from django.db import models
from django.db.models import Q

from products.models import Product
from orders.models import Order


class Payment(models.Model):

    class Provider(models.TextChoices):
        FLUTTERWAVE = "FLUTTERWAVE", "Flutterwave"

    class Status(models.TextChoices):
        INITIATED = "INITIATED", "Initiated"
        PENDING = "PENDING", "Pending"
        SUCCESSFUL = "SUCCESSFUL", "Successful"
        FAILED = "FAILED", "Failed"
        CANCELLED = "CANCELLED", "Cancelled"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    order = models.ForeignKey(
        Order,
        on_delete=models.PROTECT,
        related_name="payments"
    )

    provider = models.CharField(
        max_length=30,
        choices=Provider.choices,
        default=Provider.FLUTTERWAVE
    )

    # Our unique reference sent to Flutterwave.
    tx_ref = models.CharField(
        max_length=100,
        unique=True,
        editable=False
    )

    # Flutterwave's transaction ID, received after payment.
    provider_transaction_id = models.CharField(
        max_length=100,
        unique=True,
        blank=True,
        null=True
    )

    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    currency = models.CharField(
        max_length=3,
        choices=Product.Currency.choices
    )

    checkout_url = models.URLField(
        max_length=500,
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.INITIATED
    )

    payment_method = models.CharField(
        max_length=50,
        blank=True
    )

    failure_reason = models.TextField(blank=True)

    verified_at = models.DateTimeField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "payments_payment"
        ordering = ["-created_at"]

        indexes = [
            models.Index(
                fields=["order", "created_at"],
                name="payment_order_date_idx"
            ),
            models.Index(
                fields=["status", "created_at"],
                name="payment_status_date_idx"
            ),
        ]

        constraints = [
            models.CheckConstraint(
                condition=Q(amount__gt=0),
                name="payment_amount_positive"
            ),
        ]

    def save(self, *args, **kwargs):
        if not self.tx_ref:
            self.tx_ref = f"BN-PAY-{uuid.uuid4().hex.upper()}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.tx_ref
