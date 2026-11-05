
import base64
import json

from datetime import datetime, timezone

from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import (
    Ed25519PublicKey,
)


class LicenseVerificationError(Exception):
    """Raised when an offline license is invalid."""


def base64url_decode(value):
    padding = "=" * (-len(value) % 4)

    try:
        return base64.urlsafe_b64decode(value + padding)
    except Exception as exc:
        raise LicenseVerificationError(
            "Invalid license encoding."
        ) from exc


def load_public_key(public_key_path):
    """
    Load the public signing key.

    This file can be distributed with ExamSuite.
    """

    try:
        with open(public_key_path, "rb") as file:
            public_key_data = file.read()

        public_key = serialization.load_pem_public_key(
            public_key_data
        )

    except (OSError, ValueError, TypeError) as exc:
        raise LicenseVerificationError(
            "Unable to load the license verification key."
        ) from exc

    if not isinstance(public_key, Ed25519PublicKey):
        raise LicenseVerificationError(
            "Unsupported public key type."
        )

    return public_key


def verify_offline_license(
    *,
    signed_license,
    public_key_path,
    expected_product_slug
):
    """
    Verify a signed license without internet access.

    Returns the verified license payload.
    """

    if not isinstance(signed_license, str):
        raise LicenseVerificationError("Invalid license document.")

    try:
        payload_part, signature_part = signed_license.split(".")
    except ValueError as exc:
        raise LicenseVerificationError(
            "Invalid license document format."
        ) from exc

    payload_bytes = base64url_decode(payload_part)
    signature = base64url_decode(signature_part)

    public_key = load_public_key(public_key_path)

    # Verify signature before trusting the payload.
    try:
        public_key.verify(signature, payload_bytes)
    except InvalidSignature as exc:
        raise LicenseVerificationError(
            "License signature is invalid."
        ) from exc

    try:
        payload = json.loads(payload_bytes.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise LicenseVerificationError(
            "Invalid license payload."
        ) from exc

    if not isinstance(payload, dict):
        raise LicenseVerificationError("Invalid license payload.")

    if payload.get("version") != 1:
        raise LicenseVerificationError(
            "Unsupported license document version."
        )

    if payload.get("status") != "ACTIVE":
        raise LicenseVerificationError(
            "This license is not active."
        )

    if payload.get("product_slug") != expected_product_slug:
        raise LicenseVerificationError(
            "This license belongs to another product."
        )

    try:
        starts_at = datetime.fromisoformat(
            payload["starts_at"].replace("Z", "+00:00")
        )

        expires_at = (
            datetime.fromisoformat(
                payload["expires_at"].replace("Z", "+00:00")
            )
            if payload.get("expires_at")
            else None
        )

    except (KeyError, TypeError, ValueError) as exc:
        raise LicenseVerificationError(
            "Invalid license dates."
        ) from exc

    if starts_at.tzinfo is None:
        raise LicenseVerificationError(
            "Invalid license start timezone."
        )

    if expires_at is not None and expires_at.tzinfo is None:
        raise LicenseVerificationError(
            "Invalid license expiration timezone."
        )

    now = datetime.now(timezone.utc)

    if starts_at > now:
        raise LicenseVerificationError(
            "This license is not yet active."
        )

    if expires_at is not None and expires_at <= now:
        raise LicenseVerificationError(
            "This license has expired."
        )

    if not isinstance(payload.get("max_activations"), int):
        raise LicenseVerificationError(
            "Invalid activation limit."
        )

    if payload["max_activations"] < 1:
        raise LicenseVerificationError(
            "Invalid activation limit."
        )

    if not payload.get("license_id"):
        raise LicenseVerificationError(
            "License ID is missing."
        )

    return payload
