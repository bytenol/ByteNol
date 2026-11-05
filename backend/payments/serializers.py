
from rest_framework import serializers

from orders.models import Order


class PaymentInitializeSerializer(serializers.Serializer):
    order_id = serializers.UUIDField()

    def validate_order_id(self, value):
        request = self.context["request"]

        try:
            order = Order.objects.get(
                id=value,
                customer=request.user
            )
        except Order.DoesNotExist:
            raise serializers.ValidationError(
                "Order not found."
            )

        if order.payment_status == Order.PaymentStatus.PAID:
            raise serializers.ValidationError(
                "This order has already been paid."
            )

        if order.status in [
            Order.Status.CANCELLED,
            Order.Status.COMPLETED,
            Order.Status.FAILED,
        ]:
            raise serializers.ValidationError(
                "Payment cannot be initiated for this order."
            )

        return value



class PaymentVerifySerializer(serializers.Serializer):
    tx_ref = serializers.CharField(max_length=100)
    transaction_id = serializers.IntegerField(min_value=1)
