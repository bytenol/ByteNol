
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import License, LicenseActivation
from .serializers import (
    LicenseActivationSerializer,
    LicenseDeactivationSerializer,
    LicenseActivationReadSerializer,
    LicenseSerializer,
)
from .services import activate_license, deactivate_license


class LicenseActivateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LicenseActivationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        activation = activate_license(
            license_key=serializer.validated_data["license_key"],
            device_fingerprint=serializer.validated_data[
                "device_fingerprint"
            ],
            device_name=serializer.validated_data.get(
                "device_name", ""
            ),
        )

        return Response(
            {
                "message": "License activated successfully.",
                "activation": LicenseActivationReadSerializer(
                    activation
                ).data,
            },
            status=status.HTTP_200_OK,
        )


class CustomerLicenseListView(generics.ListAPIView):
    serializer_class = LicenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            License.objects
            .filter(customer=self.request.user)
            .select_related("product")
            .prefetch_related("activations")
        )


class CustomerActivationListView(generics.ListAPIView):
    serializer_class = LicenseActivationReadSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            LicenseActivation.objects
            .filter(license__customer=self.request.user)
            .select_related("license")
        )


class LicenseDeactivateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = LicenseDeactivationSerializer(
            data=request.data
        )
        serializer.is_valid(raise_exception=True)

        activation = deactivate_license(
            activation_id=serializer.validated_data["activation_id"],
            customer=request.user,
        )

        return Response(
            {
                "message": "Device deactivated successfully.",
                "activation": LicenseActivationReadSerializer(
                    activation
                ).data,
            },
            status=status.HTTP_200_OK,
        )
