from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin

from .models import User


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    ordering = ("email",)
    list_display = ("email", "first_name", "last_name", "role", "is_active", "is_email_verified", "is_staff")
    list_filter = ("role", "is_active", "is_staff", "is_email_verified")
    search_fields = ("email", "first_name", "last_name", "phone_number")
    readonly_fields = ("id", "date_joined", "last_login")

    fieldsets = (
        (None, {"fields": ("id", "email", "password")}),
        ("Personal information", {"fields": ("first_name", "last_name", "phone_number", "profile_image")}),
        ("Permissions", {"fields": ("role", "is_active", "is_staff", "is_superuser", "is_email_verified", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (None, {"classes": ("wide",), "fields": ("email", "first_name", "last_name", "password1", "password2", "role")}),
    )
