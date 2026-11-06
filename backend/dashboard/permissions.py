from rest_framework.permissions import BasePermission


class IsStaffOrAdmin(BasePermission):
    """
    Allow access only to staff members and administrators.
    """

    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        return (
            user.is_superuser
            or user.is_staff
            or user.role in ["ADMIN", "STAFF"]
        )