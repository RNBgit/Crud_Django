from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import (TemplateView)
from .models import Members
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView
from django.views.generic.detail import DetailView



class Index(ListView):
     model = Members
     context_object_name = 'list'
     template_name = 'crud/crudbasic.html'
     
class Create(CreateView):
     model = Members
     context_object_name = 'list'
     template_name = 'crud/crudbasic.html'
     fields = ['firstname', 
            'lastname'
    ]

class Detail(DetailView):
    model = Members
    context_object_name = 'list'
    template_name = 'crud/detail.html'
