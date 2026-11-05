
from django.urls import path

from .views import (
    LicenseActivateView,
    CustomerLicenseListView,
    CustomerActivationListView,
    LicenseDeactivateView,
)

urlpatterns = [
    path(
        "activate/",
        LicenseActivateView.as_view(),
        name="license-activate"
    ),
    path(
        "",
        CustomerLicenseListView.as_view(),
        name="license-list"
    ),
    path(
        "activations/",
        CustomerActivationListView.as_view(),
        name="license-activation-list"
    ),
    path(
        "deactivate/",
        LicenseDeactivateView.as_view(),
        name="license-deactivate"
    ),
]
