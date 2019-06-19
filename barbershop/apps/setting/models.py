from django.db import models


class CalendarSetting(models.Model):
    show_working_days = models.SmallIntegerField(default=7, verbose_name='Nazwa usługi')


class BarberDaysSetting(models.Model):
    title = models.CharField(max_length=100, verbose_name='Dzien')
    shortcut = models.CharField(max_length=10, verbose_name='Skrot')
    week_day_nr = models.SmallIntegerField(default=0, verbose_name='Numer dnia w tygodniu')
    is_working = models.BooleanField(default=False, verbose_name='Czy jest roboczy')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy dzien')

    def __str__(self):
        return self.title
