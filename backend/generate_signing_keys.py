
import base64

from pathlib import Path

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import (
    Ed25519PrivateKey,
)


# Generate a new Ed25519 key pair.
private_key = Ed25519PrivateKey.generate()
public_key = private_key.public_key()

# Serialize private key as unencrypted PEM.
private_pem = private_key.private_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PrivateFormat.PKCS8,
    encryption_algorithm=serialization.NoEncryption(),
)

# Serialize public key as PEM.
public_pem = public_key.public_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PublicFormat.SubjectPublicKeyInfo,
)

# Base64-encode the PEM files for environment variables.
private_b64 = base64.b64encode(private_pem).decode("ascii")
public_b64 = base64.b64encode(public_pem).decode("ascii")

# Save the public key to a file for distribution.
Path("licensing_public_key.pem").write_bytes(public_pem)

print("\nPRIVATE KEY (keep secret; store in Render environment):")
print(private_b64)

print("\nPUBLIC KEY (safe to distribute with ExamSuite):")
print(public_b64)

print("\nKEY GENERATION COMPLETED.")
