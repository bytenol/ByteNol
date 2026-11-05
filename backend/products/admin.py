
from django.contrib import admin

from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "slug",
        "is_active",
        "created_at",
    )

    list_filter = ("is_active",)

    search_fields = ("name", "description")

    prepopulated_fields = {
        "slug": ("name",),
    }


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "price",
        "currency",
        "is_active",
        "is_featured",
        "created_at",
    )

    list_filter = (
        "category",
        "currency",
        "is_active",
        "is_featured",
    )

    search_fields = (
        "name",
        "short_description",
        "description",
    )

    prepopulated_fields = {
        "slug": ("name",),
    }

    readonly_fields = (
        "id",
        "created_at",
        "updated_at",
    )
