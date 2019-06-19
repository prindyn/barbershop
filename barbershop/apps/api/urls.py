from django.urls import path
from .views import *


urlpatterns = [
    path('service/', ServiceListApi.as_view(), name='services'),
    path('service/save/', SaveServiceApi.as_view(), name='save-service'),
    path('service/remove/', RemoveServiceApi.as_view(), name='remove-service'),

    path('barber/', BarberListApi.as_view(), name='barbers'),
    path('barber/save/', SaveBarberApi.as_view(), name='save-barber'),
    path('barber/remove/', RemoveBarberApi.as_view(), name='remove-barber'),
]
