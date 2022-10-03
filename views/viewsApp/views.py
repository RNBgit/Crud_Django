from audioop import reverse
from django.views.generic.edit import DeleteView
from django.shortcuts import render
from django.http import HttpResponse
from .models import Info
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView , UpdateView
from django.views.generic.detail import DetailView
from django.urls import reverse_lazy



class viewList(ListView):
    model = Info

class viewCreate(CreateView):
    model = Info
    template_name = 'viewsApp/create.html'
    context_object_name = 'list'
    fields = ['title', 
            'description'
    ]
    success_url = reverse_lazy('view-list')

class viewDetail(DetailView):
    model = Info

class Update(UpdateView):
    model = Info
    template_name = 'viewsApp/update.html'   
    fields = '__all__'
    success_url = reverse_lazy('view-list')

class delete(DeleteView):
    model = Info
    template_name = "viewsApp/delete.html"
    success_url = reverse_lazy('view-list')
  