import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.functions import Lower
from .managers import UserManager


class User(AbstractUser):
    """ByteNol account authenticated by a unique, case-insensitive email."""    
    class Role(models.TextChoices):
        CUSTOMER = "CUSTOMER", "Customer"
        ADMIN = "ADMIN", "Administrator"
        STAFF = "STAFF", "Staff"

    username = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField("email address", unique=True)
    phone_number = models.CharField(max_length=30, blank=True)
    profile_image = models.ImageField(upload_to="profiles/%Y/%m/", blank=True, null=True)
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.CUSTOMER)
    is_email_verified = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    class Meta:
        db_table = "accounts_user"
        ordering = ["-date_joined"]
        constraints = [
            models.UniqueConstraint(Lower("email"), name="accounts_user_email_ci_uniq"),
        ]
        indexes = [
            models.Index(fields=["role", "is_active"], name="acct_role_active_idx"),
        ]


    def save(self, *args, **kwargs):
        if self.email:
            self.email = self.email.strip().lower()
        super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.email}"