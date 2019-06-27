from .assistants import DayAssistant, CalendarAssistant
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
    day_settings = models.ForeignKey('setting.BarberDaysSetting', on_delete=models.CASCADE, verbose_name='Ustawienia dnia')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy dzien')

    def __str__(self):
        return self.title


class Time(models.Model):
    hour = models.TimeField(verbose_name='Godzina')
    day = models.ForeignKey('calendar.Day', on_delete=models.CASCADE, verbose_name='Dzien, ktorego dotyczy gogzina')
    is_busy = models.BooleanField(default=False, verbose_name='Czy godzina jest zajeta')

    def __str__(self):
        return str(self.hour)


class Calendar(models.Model, CalendarAssistant):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.self_ = self
        self.instance_ = self.__class__

    title = models.CharField(max_length=255, verbose_name='Nazwa wydarzenia')
    comment = models.CharField(max_length=255, blank=True, verbose_name='Komentarz klienta')
    start = models.TimeField(verbose_name='Początek wydarzenia')
    end = models.TimeField(verbose_name='Koniec wydarzenia')
    status = models.ForeignKey('setting.Status', on_delete=models.CASCADE, verbose_name='Status wydarzenia')
    day = models.ForeignKey('calendar.Day', on_delete=models.CASCADE, verbose_name='Dzien, ktorego dotyczy wydarzenie')
    service = models.ForeignKey('service.Service', on_delete=models.CASCADE, verbose_name='Usluga, ktorej dotyczy wydarzenie')

    def __str__(self):
        return str(self.title)
