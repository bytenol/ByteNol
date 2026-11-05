
from django.db.models import Prefetch

from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Order, OrderItem
from .permissions import IsOrderManager
from .serializers import (
    OrderCreateSerializer,
    OrderSerializer,
    OrderStatusUpdateSerializer,
)


class OrderViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer
    lookup_field = "id"

    def is_order_manager(self):
        user = self.request.user

        return (
            user.is_superuser
            or user.is_staff
            or user.role in ["ADMIN", "STAFF"]
        )

    def get_queryset(self):
        queryset = Order.objects.all()

        if not self.is_order_manager():
            queryset = queryset.filter(customer=self.request.user)

        return queryset.prefetch_related(
            Prefetch(
                "items",
                queryset=OrderItem.objects.select_related("product")
            )
        )

    def get_serializer_class(self):
        if self.action == "create":
            return OrderCreateSerializer

        if self.action == "update_status":
            return OrderStatusUpdateSerializer

        return OrderSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        order = serializer.save()

        response_serializer = OrderSerializer(
            order,
            context=self.get_serializer_context()
        )

        return Response(
            response_serializer.data,
            status=status.HTTP_201_CREATED
        )

    @action(
        detail=True,
        methods=["patch"],
        url_path="update-status",
        permission_classes=[IsAuthenticated, IsOrderManager]
    )
    def update_status(self, request, id=None):
        order = self.get_object()

        serializer = self.get_serializer(
            order,
            data=request.data
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        response_serializer = OrderSerializer(
            order,
            context=self.get_serializer_context()
        )

        return Response(response_serializer.data)
