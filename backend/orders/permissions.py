from rest_framework.permissions import BasePermission


class IsOrderManager(BasePermission):
    """
    Only administrators and staff can manage orders.
    """

    def has_permission(self, request, view):
        user = request.user

        return (
            user.is_authenticated
            and (
                user.is_superuser
                or user.is_staff
                or user.role in ["ADMIN", "STAFF"]
            )
        )