from django.urls import path
from .views import *


urlpatterns = [
    path('barber/calendar/create-event/', CreateEventApi.as_view(), name='create-event'),
    path('barber/calendar/', BarberCalendarApi.as_view(), name='barber-calendar'),
    path('barber/set-barber-day/', SetDayForBarberApi.as_view(), name='set-barber-working-day'),
    path('barber/get-barber-days/', GetDaysForBarberApi.as_view(), name='get-barber-days'),
    path('barber/', BarberSettingsView.as_view(), name='barber-settings'),

    path('calendar/', CalendarSettingsView.as_view(), name='calendar-settings'),
]
