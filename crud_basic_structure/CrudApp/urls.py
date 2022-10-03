from importlib.resources import path
from django.urls import path
from .import views

urlpatterns = [
    path('', views.Index.as_view()),
    path('create/', views.Create.as_view()),
    path('detail/<pk>/', views.Detail.as_view())
]