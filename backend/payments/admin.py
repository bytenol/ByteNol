
from django.contrib import admin

from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        "tx_ref",
        "order",
        "amount",
        "currency",
        "provider",
        "status",
        "created_at",
    )

    list_filter = (
        "provider",
        "status",
        "currency",
        "created_at",
    )

    search_fields = (
        "tx_ref",
        "provider_transaction_id",
        "order__order_number",
        "order__customer__email",
    )

    readonly_fields = (
        "id",
        "tx_ref",
        "provider_transaction_id",
        "order",
        "amount",
        "currency",
        "checkout_url",
        "status",
        "verified_at",
        "created_at",
        "updated_at",
    )
