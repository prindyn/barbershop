from .assistants import BarberDaysSettingAssistants, StatusAssistants
from django.db import models


class CalendarSetting(models.Model):
    title = models.CharField(default=7, max_length=255, verbose_name='Ustawienia kalendarza')
    value = models.IntegerField(default=0, verbose_name='Znaczenie ustawienia')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia ustawienia')
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany ustawienia')

    def __str__(self):
        return self.title


class Status(models.Model, StatusAssistants):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.instance_ = self.__class__
        self.self_ = self

    title = models.CharField(max_length=50, verbose_name='Nazwa statusu')
    number = models.IntegerField(verbose_name='Numer statusu')
    status_class = models.CharField(max_length=50, verbose_name='Style statusu')
    text_color = models.CharField(max_length=50, verbose_name='Kolor nadpisu')
    background_color = models.CharField(max_length=50, verbose_name='Kolor tła')
    border_color = models.CharField(max_length=50, verbose_name='Kolor ramki')

    def __str__(self):
        return self.title


class BarberDaysSetting(models.Model, BarberDaysSettingAssistants):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.instance_ = self.__class__
        self.self_ = self

    title = models.CharField(max_length=100, verbose_name='Dzien')
    shortcut = models.CharField(max_length=10, verbose_name='Skrot')
    week_day_nr = models.SmallIntegerField(default=0, verbose_name='Numer dnia w tygodniu')
    is_working = models.BooleanField(default=False, blank=True, verbose_name='Czy jest roboczy')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy dzien')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia ustawienia')
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany ustawienia')

    def __str__(self):
        return self.title
