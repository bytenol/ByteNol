
import base64
import json

from datetime import timezone as datetime_timezone

from django.conf import settings
from django.utils import timezone

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import (
    Ed25519PrivateKey,
)


def base64url_encode(value):
    return base64.urlsafe_b64encode(value).rstrip(b"=").decode("ascii")


def get_private_key():
    encoded_key = settings.LICENSING_PRIVATE_KEY_B64

    if not encoded_key:
        raise RuntimeError(
            "LICENSING_PRIVATE_KEY_B64 is not configured."
        )

    try:
        pem_data = base64.b64decode(encoded_key, validate=True)

        private_key = serialization.load_pem_private_key(
            pem_data,
            password=None
        )

    except (ValueError, TypeError) as exc:
        raise RuntimeError(
            "The configured licensing private key is invalid."
        ) from exc

    if not isinstance(private_key, Ed25519PrivateKey):
        raise RuntimeError(
            "The licensing private key must use Ed25519."
        )

    return private_key


def build_license_payload(license_instance):
    product = license_instance.product

    payload = {
        "version": 1,
        "license_id": str(license_instance.id),
        "product_id": str(product.id),
        "product_slug": product.slug,
        "status": license_instance.status,
        "issued_at": timezone.now().astimezone(
            datetime_timezone.utc
        ).isoformat(),
        "starts_at": license_instance.starts_at.astimezone(
            datetime_timezone.utc
        ).isoformat(),
        "expires_at": (
            license_instance.expires_at.astimezone(
                datetime_timezone.utc
            ).isoformat()
            if license_instance.expires_at
            else None
        ),
        "max_activations": license_instance.max_activations,
    }

    return payload


def sign_license(license_instance):
    private_key = get_private_key()

    payload = build_license_payload(license_instance)

    # Canonical JSON ensures deterministic serialization.
    payload_bytes = json.dumps(
        payload,
        sort_keys=True,
        separators=(",", ":")
    ).encode("utf-8")

    signature = private_key.sign(payload_bytes)

    token = (
        f"{base64url_encode(payload_bytes)}."
        f"{base64url_encode(signature)}"
    )

    license_instance.signed_license = token
    license_instance.signing_key_id = settings.LICENSING_KEY_ID

    license_instance.save(
        update_fields=[
            "signed_license",
            "signing_key_id",
            "updated_at"
        ]
    )

    return token
