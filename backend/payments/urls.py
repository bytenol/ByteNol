
from django.urls import path

from .views import PaymentInitializeView, PaymentVerifyView


urlpatterns = [
    path(
        "initialize/",
        PaymentInitializeView.as_view(),
        name="payment-initialize"
    ),
    path(
        "verify/",
        PaymentVerifyView.as_view(),
        name="payment-verify"
    ),
]
