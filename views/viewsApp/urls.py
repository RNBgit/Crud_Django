from django.urls import path
from . import views
from .views import Update

urlpatterns = [
    path('', views.viewList.as_view(), name='view-list'),
    path('create/', views.viewCreate.as_view(), name='view-create'),
    path('<int:pk>/', views.viewDetail.as_view(), name='view-detail'),
    path('update/<int:pk>/', Update.as_view(), name = 'update'), 
    path('<pk>/delete/', views.delete.as_view(), name="delete")
    
]