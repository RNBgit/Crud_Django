from optparse import Option
from django.db import models

class Information(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  address = models.CharField(max_length=255)
  age = models.CharField(max_length=255)
  Birthday = models.CharField(max_length=255)