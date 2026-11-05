from django.db import IntegrityError, transaction
from django.test import TestCase

from .models import User


class UserModelTests(TestCase):
    def test_create_user_normalizes_email_and_hashes_password(self):
        user = User.objects.create_user(
            email="  CUSTOMER@Example.COM ",
            password="A-Strong-Test-Password-2026!",
            first_name="Test",
            last_name="Customer",
        )
        self.assertEqual(user.email, "customer@example.com")
        self.assertTrue(user.check_password("A-Strong-Test-Password-2026!"))
        self.assertNotEqual(user.password, "A-Strong-Test-Password-2026!")
        self.assertEqual(user.role, User.Role.CUSTOMER)
        self.assertFalse(user.is_staff)

    def test_create_superuser_sets_admin_permissions(self):
        user = User.objects.create_superuser(
            email="admin@example.com",
            password="A-Strong-Admin-Password-2026!",
            first_name="Site",
            last_name="Admin",
        )
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)
        self.assertEqual(user.role, User.Role.ADMIN)

    def test_email_is_case_insensitively_unique(self):
        User.objects.create_user(email="person@example.com", password="Strong-Password-123!")
        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                User.objects.create_user(email="PERSON@example.com", password="Strong-Password-123!")
