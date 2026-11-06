from django.contrib.auth import get_user_model
from django.db.models import Count, Sum, Q
from django.utils import timezone

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from products.models import Product
from orders.models import Order
from licensing.models import License

from .permissions import IsStaffOrAdmin


User = get_user_model()


class AdminDashboardOverviewView(APIView):
    permission_classes = [IsAuthenticated, IsStaffOrAdmin]

    def get(self, request):
        today = timezone.localdate()

        # --------------------------------
        # CUSTOMER STATISTICS
        # --------------------------------

        customers = User.objects.filter(role="CUSTOMER")

        customer_stats = customers.aggregate(
            total=Count("id"),
            verified=Count(
                "id",
                filter=Q(is_email_verified=True)
            ),
            unverified=Count(
                "id",
                filter=Q(is_email_verified=False)
            ),
        )

        # --------------------------------
        # PRODUCT STATISTICS
        # --------------------------------

        product_stats = Product.objects.aggregate(
            total=Count("id"),
            active=Count(
                "id",
                filter=Q(is_active=True)
            ),
            inactive=Count(
                "id",
                filter=Q(is_active=False)
            ),
        )

        # --------------------------------
        # ORDER STATISTICS
        # --------------------------------

        order_stats = Order.objects.aggregate(
            total=Count("id"),

            pending=Count(
                "id",
                filter=Q(status="PENDING")
            ),

            paid=Count(
                "id",
                filter=Q(payment_status="PAID")
            ),

            processing=Count(
                "id",
                filter=Q(status="PROCESSING")
            ),

            completed=Count(
                "id",
                filter=Q(status="COMPLETED")
            ),

            cancelled=Count(
                "id",
                filter=Q(status="CANCELLED")
            ),

            failed=Count(
                "id",
                filter=Q(status="FAILED")
            ),

            today=Count(
                "id",
                filter=Q(created_at__date=today)
            ),
        )

        # --------------------------------
        # REVENUE STATISTICS
        # --------------------------------

        revenue_stats = Order.objects.aggregate(
            total_revenue=Sum(
                "total_amount",
                filter=Q(payment_status="PAID")
            ),

            today_revenue=Sum(
                "total_amount",
                filter=Q(
                    payment_status="PAID",
                    paid_at__date=today
                )
            ),
        )

        # --------------------------------
        # LICENSE STATISTICS
        # --------------------------------

        license_stats = License.objects.aggregate(
            total=Count("id"),

            active=Count(
                "id",
                filter=Q(status="ACTIVE")
            ),

            suspended=Count(
                "id",
                filter=Q(status="SUSPENDED")
            ),

            revoked=Count(
                "id",
                filter=Q(status="REVOKED")
            ),

            expired=Count(
                "id",
                filter=Q(status="EXPIRED")
            ),
        )

        # --------------------------------
        # RESPONSE
        # --------------------------------

        return Response({
            "customers": customer_stats,
            "products": product_stats,
            "orders": order_stats,
            "revenue": {
                "total": revenue_stats["total_revenue"] or 0,
                "today": revenue_stats["today_revenue"] or 0,
                "currency_note": (
                    "Revenue totals are not combined across currencies. "
                    "A currency-aware breakdown will be added."
                ),
            },
            "licenses": license_stats,
            "generated_at": timezone.now(),
        })