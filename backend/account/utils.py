
from urllib.parse import urlencode

from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode


def send_verification_email(user):
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = default_token_generator.make_token(user)

    frontend_url = getattr(
        settings,
        "FRONTEND_URL",
        "http://localhost:5173",
    ).rstrip("/")

    query_string = urlencode({
        "uid": uid,
        "token": token,
    })

    verification_url = (
        f"{frontend_url}/verify-email/?{query_string}"
    )

    subject = "Verify your ByteNol account"

    message = f"""
Hello {user.first_name or "there"},

Thank you for registering with ByteNol Tech. & Academy.

Please verify your email address by opening the link below:

{verification_url}

If you did not create this account, you can ignore this email.

Regards,
ByteNol Team
"""

    send_mail(
        subject=subject,
        message=message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        fail_silently=False,
    )
