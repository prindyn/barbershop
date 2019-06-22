from django.urls import path
from .views import *


urlpatterns = [
    path('barber/', BarberSettingsView.as_view(), name='barber-settings'),
    path('barber/api/calendar/', BarberCalendarView.as_view(), name='barber-settings'),
    path('set-barber-day/', SetDayForBarberApi.as_view(), name='set-barber-working-day'),
    path('get-barber-days/', GetDaysForBarberApi.as_view(), name='get-barber-days'),

    path('calendar/', CalendarSettingsView.as_view(), name='calendar-settings'),
]
