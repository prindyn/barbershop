from django.urls import path
from .views import *

urlpatterns = [
    path('', IndexView.as_view(), name='service'),
    path('choose-service/', ChooseServiceView.as_view(), name='choose_service'),
    path('choose-barber/', ChooseBarberView.as_view(), name='choose_barber'),
    path('choose-date/', ChooseDateView.as_view(), name='choose_date'),
    path('booking-finish/', BookingFinishView.as_view(), name='booking_finish'),
]