from django.db import models

# Create your models here.


class Startup(models.Model):
    image = models.ImageField(max_length=1000)
    title = models.CharField(max_length=100)
    description = models.TextField()

    def get_image(self):
        return self.image

    def __str__(self):
        return self.image

    def get_title(self):
        return self.title

    def __str__(self):
        return self.title

    def get_description(self):
        return self.description

    def __str__(self):
        return self.description
