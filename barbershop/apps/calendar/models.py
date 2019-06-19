from .assistants import DayAssistant
from django.utils import timezone
from django.db import models


class Day(models.Model, DayAssistant):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.self_ = self
        self.instance_ = self.__class__

    title = models.CharField(max_length=100, verbose_name='Nazwa dnia')
    date = models.DateField(default=timezone.now, verbose_name='Data dnia')
    is_working = models.BooleanField(default=True, verbose_name='Czy jest roboczy')
    day_settings = models.ForeignKey('setting.BarberDaysSetting', on_delete=models.CASCADE, null=True, verbose_name='Ustawienia dnia')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy dzien')

    def __str__(self):
        return self.title


class Time(models.Model):
    hour = models.TimeField(verbose_name='Godzina')
    day = models.ForeignKey('calendar.Day', on_delete=models.CASCADE, verbose_name='Dzien, ktorego dotyczy gogzina')
    is_busy = models.BooleanField(default=False, verbose_name='Czy godzina jest zajeta')

    def __str__(self):
        return str(self.hour)


class ReservationDate(models.Model):
    date = models.DateTimeField(verbose_name='Data rezerwacji')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy data')
    client = models.ForeignKey('user.Client', on_delete=models.CASCADE, verbose_name='Klient, ktorego dotyczy data')
    confirmed = models.BooleanField(default=True, verbose_name='Czy rezerwacja została potwierdzona')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia')
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany')

    def __str__(self):
        return str(self.date)
