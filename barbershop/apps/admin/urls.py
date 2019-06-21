from django.contrib.auth.views import LogoutView
from barbershop.apps.service.views import *
from barbershop.apps.barber.views import *
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', AdminView.as_view(), name='admin'),
    path('login/', AdminLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('service/', ServiceListView.as_view(), name='service-list'),
    path('service/create/', CreateServiceView.as_view(), name='create-service'),
    path('service/<slug:slug>/edit', EditServiceView.as_view(), name='edit-service'),
    path('service/<int:pk>/delete', DeleteServiceView.as_view(), name='delete-service'),

    path('barber/', BarberListView.as_view(), name='barber-list'),
    path('barber/create/', CreateBarberView.as_view(), name='create-barber'),
    path('barber/<slug:slug>/edit', EditBarberView.as_view(), name='edit-barber'),
    path('barber/<int:pk>/delete', DeleteBarberView.as_view(), name='delete-barber'),

    path('settings/', include('barbershop.apps.setting.urls')),
]
