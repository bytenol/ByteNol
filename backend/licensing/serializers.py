
from rest_framework import serializers

from .models import License, LicenseActivation


class LicenseActivationSerializer(serializers.Serializer):
    license_key = serializers.CharField(
        max_length=36,
        trim_whitespace=True
    )

    device_fingerprint = serializers.CharField(
        max_length=128,
        trim_whitespace=True
    )

    device_name = serializers.CharField(
        max_length=150,
        required=False,
        allow_blank=True
    )


class LicenseDeactivationSerializer(serializers.Serializer):
    activation_id = serializers.UUIDField()


class LicenseActivationReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = LicenseActivation
        fields = [
            "id",
            "device_fingerprint",
            "device_name",
            "is_active",
            "activated_at",
            "last_seen_at",
            "deactivated_at",
        ]
        read_only_fields = fields


class LicenseSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(
        source="product.name",
        read_only=True
    )

    activations = LicenseActivationReadSerializer(
        many=True,
        read_only=True
    )

    active_activations = serializers.SerializerMethodField()

    class Meta:
        model = License
        fields = [
            "id",
            "product",
            "product_name",
            "key_prefix",
            "status",
            "starts_at",
            "expires_at",
            "max_activations",
            "active_activations",
            "activations",
            "created_at",
        ]
        read_only_fields = fields

    def get_active_activations(self, obj):
        return obj.activations.filter(is_active=True).count()
