
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from orders.models import Order
from .serializers import PaymentInitializeSerializer
from .services import initialize_payment


from .serializers import PaymentVerifySerializer
from .services import verify_payment


class PaymentInitializeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PaymentInitializeSerializer(
            data=request.data,
            context={"request": request}
        )

        serializer.is_valid(raise_exception=True)

        order = Order.objects.get(
            id=serializer.validated_data["order_id"],
            customer=request.user
        )

        payment = initialize_payment(
            order=order,
            customer=request.user
        )

        return Response(
            {
                "message": "Payment initialized successfully.",
                "payment": {
                    "id": str(payment.id),
                    "tx_ref": payment.tx_ref,
                    "amount": str(payment.amount),
                    "currency": payment.currency,
                    "status": payment.status,
                    "checkout_url": payment.checkout_url,
                },
            },
            status=status.HTTP_201_CREATED
        )




class PaymentVerifyView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PaymentVerifySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        payment = verify_payment(
            tx_ref=serializer.validated_data["tx_ref"],
            transaction_id=serializer.validated_data["transaction_id"],
            customer=request.user,
        )

        response_data = {
            "message": (
                "Payment verified successfully."
                if payment.status == "SUCCESSFUL"
                else "Payment has not been confirmed yet."
            ),
            "payment": {
                "id": str(payment.id),
                "tx_ref": payment.tx_ref,
                "provider_transaction_id": (
                    payment.provider_transaction_id
                ),
                "amount": str(payment.amount),
                "currency": payment.currency,
                "status": payment.status,
            },
            "order": {
                "id": str(payment.order.id),
                "order_number": payment.order.order_number,
                "status": payment.order.status,
                "payment_status": payment.order.payment_status,
            },
        }

        response_status = (
            status.HTTP_200_OK
            if payment.status == "SUCCESSFUL"
            else status.HTTP_202_ACCEPTED
        )

        return Response(response_data, status=response_status)
