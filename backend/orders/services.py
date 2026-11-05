
from decimal import Decimal

from django.db import transaction
from rest_framework.exceptions import ValidationError

from products.models import Product
from .models import Order, OrderItem


@transaction.atomic
def create_order(*, customer, items):
    """
    Create an order using product prices stored in the database.

    Expected items format:
    [
        {"product_id": "UUID", "quantity": 2},
        {"product_id": "UUID", "quantity": 1},
    ]
    """

    if not items:
        raise ValidationError({
            "items": "An order must contain at least one product."
        })

    # Reject duplicate products in the same order.
    product_ids = [item["product_id"] for item in items]

    if len(product_ids) != len(set(product_ids)):
        raise ValidationError({
            "items": "A product can only appear once in an order."
        })

    # Validate quantities.
    for item in items:
        quantity = item.get("quantity")

        if (
            isinstance(quantity, bool)
            or not isinstance(quantity, int)
            or quantity < 1
        ):
            raise ValidationError({
                "items": "Each product quantity must be a positive integer."
            })

    # Retrieve and lock products to protect price snapshots
    # while the order is being created.
    products = Product.objects.select_for_update().filter(
        id__in=product_ids,
        is_active=True,
        category__is_active=True
    )

    products_by_id = {
        str(product.id): product for product in products
    }

    if len(products_by_id) != len(product_ids):
        raise ValidationError({
            "items": "One or more products do not exist or are unavailable."
        })

    # All products in one order must use the same currency.
    currencies = {
        product.currency for product in products_by_id.values()
    }

    if len(currencies) != 1:
        raise ValidationError({
            "items": "All products in an order must have the same currency."
        })

    currency = currencies.pop()

    subtotal = Decimal("0.00")
    order_items = []

    for item in items:
        product = products_by_id[str(item["product_id"])]
        quantity = item["quantity"]

        unit_price = product.price
        line_total = unit_price * quantity

        subtotal += line_total

        order_items.append(
            OrderItem(
                product=product,
                product_name=product.name,
                unit_price=unit_price,
                currency=product.currency,
                quantity=quantity
            )
        )

    # No discount system yet, so total equals subtotal.
    discount_amount = Decimal("0.00")
    total_amount = subtotal - discount_amount

    order = Order.objects.create(
        customer=customer,
        currency=currency,
        subtotal=subtotal,
        discount_amount=discount_amount,
        total_amount=total_amount
    )

    # Attach the order to each item and save them together.
    for order_item in order_items:
        order_item.order = order

    OrderItem.objects.bulk_create(order_items)

    return order
