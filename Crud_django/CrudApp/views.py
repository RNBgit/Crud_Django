from re import template
from urllib import request
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Information
from django.urls import reverse

# Create your views here.
def index(request):
  info = Information.objects.all().values()
  template = loader.get_template('CrudApp/Exercise#4.html')
  context = {
    'infos': info,
  }
  return HttpResponse(template.render(context, request))

def addrecord(request):
  fname = request.POST['fname']
  lname = request.POST['lname']
  addr = request.POST['address']
  ag = request.POST['age']
  bdate = request.POST['bdate']
  info = Information(firstname = fname, lastname = lname, address = addr, age = ag, Birthday = bdate)
  info.save()
  return HttpResponseRedirect(reverse(index))

def delete(request, id):
  member = Information.objects.get(id=id)
  member.delete()
  return HttpResponseRedirect(reverse('index'))

def update(request, id):
  inf = Information.objects.get(id=id)
  info = Information.objects.all().values()
  template = loader.get_template('CrudApp/update.html')
  context = {
    'infos': inf,
    'info': info,
  }
  return HttpResponse(template.render(context, request))

  

def updaterecord(request, id):
  fname = request.POST['fname']
  lname = request.POST['lname']
  addr = request.POST['address']
  ag = request.POST['age']
  bdate = request.POST['bdate']
  info = Information.objects.get(id=id)
  info.firstname = fname
  info.lastname = lname
  info.address = addr
  info.age = ag
  info.Birthday = bdate
  info.save()
  return HttpResponseRedirect(reverse('index'))