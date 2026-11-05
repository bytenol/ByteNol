import uuid

from django.conf import settings
from django.db import models
from django.db.models import Q

from products.models import Product


class Order(models.Model):

    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        PAID = "PAID", "Paid"
        PROCESSING = "PROCESSING", "Processing"
        COMPLETED = "COMPLETED", "Completed"
        CANCELLED = "CANCELLED", "Cancelled"
        FAILED = "FAILED", "Failed"

    class PaymentStatus(models.TextChoices):
        PENDING = "PENDING", "Pending"
        PAID = "PAID", "Paid"
        FAILED = "FAILED", "Failed"
        REFUNDED = "REFUNDED", "Refunded"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    order_number = models.CharField(
        max_length=30,
        unique=True,
        editable=False
    )

    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="orders"
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING
    )

    payment_status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.PENDING
    )

    currency = models.CharField(
        max_length=3,
        choices=Product.Currency.choices,
        default=Product.Currency.NGN
    )

    subtotal = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    discount_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    total_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    paid_at = models.DateTimeField(
        blank=True,
        null=True
    )

    completed_at = models.DateTimeField(
        blank=True,
        null=True
    )

    cancelled_at = models.DateTimeField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "orders_order"
        ordering = ["-created_at"]

        indexes = [
            models.Index(
                fields=["customer", "created_at"],
                name="order_customer_date_idx"
            ),
            models.Index(
                fields=["status", "created_at"],
                name="order_status_date_idx"
            ),
            models.Index(
                fields=["payment_status"],
                name="order_payment_status_idx"
            ),
        ]

        constraints = [
            models.CheckConstraint(
                condition=Q(subtotal__gte=0),
                name="order_subtotal_nonnegative"
            ),
            models.CheckConstraint(
                condition=Q(discount_amount__gte=0),
                name="order_discount_nonnegative"
            ),
            models.CheckConstraint(
                condition=Q(total_amount__gte=0),
                name="order_total_nonnegative"
            ),
        ]

    def save(self, *args, **kwargs):
        if not self.order_number:
            self.order_number = f"BN-{uuid.uuid4().hex[:12].upper()}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.order_number


class OrderItem(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="items"
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
        related_name="order_items"
    )

    # Product details at the time the order was placed.
    product_name = models.CharField(max_length=200)

    unit_price = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    currency = models.CharField(
        max_length=3,
        choices=Product.Currency.choices
    )

    quantity = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "orders_order_item"
        ordering = ["created_at"]

        constraints = [
            models.CheckConstraint(
                condition=Q(quantity__gte=1),
                name="order_item_quantity_positive"
            ),
            models.CheckConstraint(
                condition=Q(unit_price__gte=0),
                name="order_item_price_nonnegative"
            ),
            models.UniqueConstraint(
                fields=["order", "product"],
                name="unique_product_per_order"
            ),
        ]

    @property
    def line_total(self):
        return self.unit_price * self.quantity

    def __str__(self):
        return f"{self.product_name} ({self.quantity})"