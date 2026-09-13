from .models import Contact


def createContactService(*, data: dict):
    try:
        contact = Contact.objects.create(
            first_name = data["first_name"],
            last_name = data["last_name"],
            email = data["email"],
            phone = data["phone"],
            choice = data["choice"],
            content = data["content"]
        )

        return contact, ""
    except Exception as e:
        return False, "something went wrong"