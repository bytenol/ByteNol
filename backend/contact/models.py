from django.db import models


class Contact(models.Model):

    class ContactChoice(models.TextChoices):
        LEARN = "LEARN", "Learn"
        BUILD = "BUILD", "Build"
        AUTOMATE = "AUTOMATE", "Automate"
        SOLUTION = "SOLUTION", "Solution"
        GENERAL = "GENERAL", "General"

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    choice = models.CharField(max_length=10, choices=ContactChoice.choices)
    content = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.first_name} asks about {self.choice}"
