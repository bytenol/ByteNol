
from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsStaffOrReadOnly(BasePermission):
    """
    Anyone can read public resources.
    Only staff and administrators can modify them.
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        user = request.user

        return (
            user.is_authenticated
            and (
                user.is_superuser
                or user.is_staff
                or user.role in ["ADMIN", "STAFF"]
            )
        )
