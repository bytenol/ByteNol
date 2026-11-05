
import os

from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth import get_user_model
from django.conf import settings


class Command(BaseCommand):
    help = "Create the default ByteNol administrator if one does not exist."

    def handle(self, *args, **options):
        User = get_user_model()

        email = settings.ADMIN_EMAIL
        password = settings.ADMIN_PASSWORD

        if not email or not password:
            raise CommandError(
                "ADMIN_EMAIL and ADMIN_PASSWORD must be set."
            )

        email = email.strip().lower()

        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                "first_name": "ByteNol",
                "last_name": "Administrator",
                "role": "ADMIN",
                "is_staff": True,
                "is_superuser": True,
                "is_active": True,
            },
        )

        if created:
            user.set_password(password)
            user.save()
            self.stdout.write(
                self.style.SUCCESS(f"Default admin created: {email}")
            )
        else:
            self.stdout.write(
                self.style.WARNING(
                    f"Admin account already exists: {email}. No changes made."
                )
            )
