
from django.contrib import admin, messages
from django.utils import timezone

from .models import License, LicenseActivation


class LicenseActivationInline(admin.TabularInline):
    model = LicenseActivation
    extra = 0
    can_delete = False

    fields = [
        "device_fingerprint",
        "device_name",
        "is_active",
        "activated_at",
        "last_seen_at",
        "deactivated_at",
    ]

    readonly_fields = fields

    def has_add_permission(self, request, obj=None):
        return False


@admin.register(License)
class LicenseAdmin(admin.ModelAdmin):

    list_display = [
        "key_prefix",
        "customer",
        "product",
        "status",
        "max_activations",
        "expires_at",
        "created_at",
    ]

    list_filter = [
        "status",
        "product",
        "created_at",
    ]

    search_fields = [
        "key_prefix",
        "customer__email",
        "customer__first_name",
        "customer__last_name",
        "product__name",
        "order__order_number",
    ]

    readonly_fields = [
        "id",
        "key_prefix",
        "key_hash",
        "created_at",
        "updated_at",
    ]

    inlines = [LicenseActivationInline]

    list_select_related = [
        "customer",
        "product",
    ]

    actions = [
        "activate_licenses",
        "suspend_licenses",
        "revoke_licenses",
    ]

    @admin.action(description="Activate selected licenses")
    def activate_licenses(self, request, queryset):
        updated = queryset.exclude(
            status=License.Status.ACTIVE
        ).update(
            status=License.Status.ACTIVE,
            updated_at=timezone.now()
        )

        self.message_user(
            request,
            f"{updated} license(s) activated.",
            messages.SUCCESS
        )

    @admin.action(description="Suspend selected licenses")
    def suspend_licenses(self, request, queryset):
        updated = queryset.exclude(
            status=License.Status.SUSPENDED
        ).update(
            status=License.Status.SUSPENDED,
            updated_at=timezone.now()
        )

        self.message_user(
            request,
            f"{updated} license(s) suspended.",
            messages.SUCCESS
        )

    @admin.action(description="Revoke selected licenses")
    def revoke_licenses(self, request, queryset):
        updated = queryset.exclude(
            status=License.Status.REVOKED
        ).update(
            status=License.Status.REVOKED,
            updated_at=timezone.now()
        )

        self.message_user(
            request,
            f"{updated} license(s) revoked.",
            messages.SUCCESS
        )

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)

        # The original key exists only during initial creation.
        if not change and hasattr(obj, "_plain_key"):
            self.message_user(
                request,
                (
                    "NEW LICENSE KEY — copy it now. "
                    "It cannot be retrieved again: "
                    f"{obj._plain_key}"
                ),
                messages.WARNING
            )


@admin.register(LicenseActivation)
class LicenseActivationAdmin(admin.ModelAdmin):

    list_display = [
        "license",
        "device_name",
        "device_fingerprint",
        "is_active",
        "activated_at",
        "last_seen_at",
    ]

    list_filter = [
        "is_active",
        "activated_at",
    ]

    search_fields = [
        "license__key_prefix",
        "license__customer__email",
        "device_name",
        "device_fingerprint",
    ]

    readonly_fields = [
        "id",
        "license",
        "device_fingerprint",
        "device_name",
        "is_active",
        "activated_at",
        "last_seen_at",
        "deactivated_at",
    ]

    list_select_related = [
        "license",
        "license__customer",
        "license__product",
    ]

    actions = ["deactivate_devices"]

    def has_add_permission(self, request):
        return False

    @admin.action(description="Deactivate selected devices")
    def deactivate_devices(self, request, queryset):
        updated = queryset.filter(
            is_active=True
        ).update(
            is_active=False,
            deactivated_at=timezone.now()
        )

        self.message_user(
            request,
            f"{updated} device(s) deactivated.",
            messages.SUCCESS
        )

    def has_change_permission(self, request, obj=None):
        # Activations are managed through the activation services
        # or the admin bulk action, not by editing individual fields.
        return False
