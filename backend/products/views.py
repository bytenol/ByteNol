from django.db import models
from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Count

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from .permissions import IsStaffOrReadOnly


class ProductPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "page_size"
    max_page_size = 100


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny, IsStaffOrReadOnly]

    lookup_field = "slug"

    def get_queryset(self):
        queryset = Category.objects.annotate(
            product_count=Count(
                "products",
                filter=models.Q(products__is_active=True),
            )
        )

        user = self.request.user

        if (
            user.is_authenticated
            and (
                user.is_superuser
                or user.is_staff
                or user.role in ["ADMIN", "STAFF"]
            )
        ):
            return queryset

        return queryset.filter(is_active=True)


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny, IsStaffOrReadOnly]

    pagination_class = ProductPagination
    lookup_field = "slug"

    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]

    filterset_fields = [
        "category__slug",
        "currency",
        "is_featured",
    ]

    search_fields = [
        "name",
        "short_description",
        "description",
        "category__name",
    ]

    ordering_fields = [
        "name",
        "price",
        "created_at",
    ]

    ordering = ["-created_at"]

    def get_queryset(self):
        queryset = Product.objects.select_related("category")

        user = self.request.user

        if (
            user.is_authenticated
            and (
                user.is_superuser
                or user.is_staff
                or user.role in ["ADMIN", "STAFF"]
            )
        ):
            return queryset

        return queryset.filter(
            is_active=True,
            category__is_active=True,
        )
