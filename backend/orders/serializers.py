
from rest_framework import serializers

from .models import Order, OrderItem
from .services import create_order


class OrderItemInputSerializer(serializers.Serializer):
    product_id = serializers.UUIDField()
    quantity = serializers.IntegerField(min_value=1)


class OrderCreateSerializer(serializers.Serializer):
    items = OrderItemInputSerializer(many=True)

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError(
                "An order must contain at least one product."
            )

        product_ids = [item["product_id"] for item in value]

        if len(product_ids) != len(set(product_ids)):
            raise serializers.ValidationError(
                "A product can only appear once in an order."
            )

        return value

    def create(self, validated_data):
        request = self.context["request"]

        return create_order(
            customer=request.user,
            items=validated_data["items"]
        )


class OrderItemSerializer(serializers.ModelSerializer):
    line_total = serializers.DecimalField(
        max_digits=14,
        decimal_places=2,
        read_only=True
    )

    class Meta:
        model = OrderItem
        fields = [
            "id",
            "product",
            "product_name",
            "unit_price",
            "currency",
            "quantity",
            "line_total",
            "created_at",
        ]
        read_only_fields = fields


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "order_number",
            "customer",
            "items",
            "status",
            "payment_status",
            "currency",
            "subtotal",
            "discount_amount",
            "total_amount",
            "paid_at",
            "completed_at",
            "cancelled_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = fields




class OrderStatusUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ["status"]
        
    def validate_status(self, value):
        allowed_statuses = [
            Order.Status.PROCESSING,
            Order.Status.COMPLETED,
            Order.Status.CANCELLED,
        ]

        if value not in allowed_statuses:
            raise serializers.ValidationError(
                "This status cannot be set manually."
            )

        order = self.instance

        allowed_transitions = {
            Order.Status.PENDING: [
                Order.Status.CANCELLED,
            ],
            Order.Status.PAID: [
                Order.Status.PROCESSING,
                Order.Status.CANCELLED,
            ],
            Order.Status.PROCESSING: [
                Order.Status.COMPLETED,
                Order.Status.CANCELLED,
            ],
        }

        if value not in allowed_transitions.get(order.status, []):
            raise serializers.ValidationError(
                f"An order cannot move from {order.status} to {value}."
            )

        return value

    def update(self, instance, validated_data):
        from django.utils import timezone

        new_status = validated_data["status"]
        instance.status = new_status

        if new_status == Order.Status.COMPLETED:
            instance.completed_at = timezone.now()

        elif new_status == Order.Status.CANCELLED:
            instance.cancelled_at = timezone.now()

        instance.save()

        return instance

