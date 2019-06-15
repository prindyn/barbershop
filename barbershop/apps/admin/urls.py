from django.urls import path, include
from barbershop.apps.service.views import *
from .views import *
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', AdminView.as_view(), name='admin'),
    path('login/', AdminLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('service/', ServiceListView.as_view(), name='service-list'),
    path('service/create/', CreateServiceView.as_view(), name='create-service'),
    path('service/<slug:slug>/edit/', EditServiceView.as_view(), name='edit-service'),
]
