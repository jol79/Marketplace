from django.db import models


class Sellers(models.Model):
    """
    Image field will contain the link to the image
    not the image file itself
    """

    name = models.CharField(max_length=65)
    phone = models.IntegerField()
    image = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Products(models.Model):
    """
    Image field will contain the link to the image
    not the image file itself
    """

    name = models.CharField(max_length=65)
    price = models.FloatField(default=0.0)
    description = models.CharField(max_length=245)
    image = models.CharField(max_length=500) 
    seller = models.ForeignKey(Sellers, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
