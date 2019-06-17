from barbershop.validators import prohibited_slug_validator, format_slug_validator
from .assistants import ServiceAssistant, DayAssistant
from django.utils import timezone
from django.db import models


class Service(models.Model, ServiceAssistant):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.self_ = self
        self.instance_ = self.__class__

    title = models.CharField(max_length=255, verbose_name='Nazwa usługi')
    slug = models.CharField(
        max_length=255,
        validators=[prohibited_slug_validator, format_slug_validator],
        blank=True,
        verbose_name='Slug usługi',
    )
    meta_keywords = models.CharField(max_length=255, blank=True, verbose_name='Słowa kluczowe SEO')
    meta_description = models.CharField(max_length=255, blank=True, verbose_name='Opis SEO')
    description = models.CharField(max_length=255, verbose_name='Opis usługi')
    price = models.FloatField(max_length=10, null=True, verbose_name='Cena usługi')
    image = models.ImageField(upload_to='service/image/', blank=True, verbose_name='Zdjecie usługi')
    icon = models.ImageField(upload_to='service/icon/', blank=True, verbose_name='Ikona usługi')
    status = models.BooleanField(default=False, verbose_name='Czy opublikowana usługa')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia usługi')
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany usługi')

    def __str__(self):
        return self.title


class Barber(models.Model):
    full_name = models.CharField(max_length=150, blank=False, verbose_name='Pewne imie fryziera')
    description = models.TextField(blank=True, verbose_name='Opis fryzjera')
    big_img = models.ImageField(default='', upload_to='barber/image/', verbose_name='Duze zdjecie fryzjera')
    small_img = models.ImageField(default='', upload_to='barber/icon/', verbose_name='Male zdjecie fryzjera')
    social = models.CharField(max_length=150, blank=True, verbose_name='Linki fryzjera')

    def __str__(self):
        return self.full_name


class BarberDaysSetting(models.Model):
    title = models.CharField(max_length=100, verbose_name='Dzien')
    shortcut = models.CharField(max_length=10, verbose_name='Skrot')
    week_day_nr = models.SmallIntegerField(default=0, verbose_name='Numer dnia w tygodniu')
    status = models.SmallIntegerField(default=0, verbose_name='Czy jest roboczy')
    barber = models.ForeignKey('service.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy dzien')

    def __str__(self):
        return self.title


class Day(models.Model, DayAssistant):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.self_ = self
        self.instance_ = self.__class__

    title = models.CharField(max_length=100, verbose_name='Dzien')
    shortcut = models.CharField(max_length=10, verbose_name='Skrot')
    date = models.DateField(default=timezone.now, verbose_name='Data dnia')
    week_day_nr = models.SmallIntegerField(default=0, verbose_name='Numer dnia w tygodniu')
    status = models.SmallIntegerField(verbose_name='Czy jest roboczy')
    day_settings = models.ForeignKey('service.BarberDaysSetting', on_delete=models.CASCADE, null=True, verbose_name='Ustawienia dnia')
    barber = models.ForeignKey('service.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy dzien')

    def __str__(self):
        return self.title


class Time(models.Model):
    hour = models.TimeField(verbose_name='Godzina')
    day = models.ForeignKey('service.Day', on_delete=models.CASCADE, verbose_name='Dzien, ktorego dotyczy gogzina')
    status = models.SmallIntegerField(default=1, verbose_name='Czy nie jest zajeta')

    def __str__(self):
        return str(self.hour)


class Client(models.Model):
    full_name = models.CharField(max_length=150, blank=False, verbose_name='Pewne imie clienta')
    telephone = models.IntegerField(blank=False, verbose_name='Telefon clienta')

    def __str__(self):
        return self.full_name


class ReservationDate(models.Model):
    date = models.DateTimeField(blank=False, verbose_name='Data rezerwacji')
    barber = models.ForeignKey('service.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, ktorego dotyczy data')
    client = models.ForeignKey('service.Client', on_delete=models.CASCADE, verbose_name='Client, ktorego dotyczy data')
    status = models.SmallIntegerField(default=0, verbose_name='Status rezervacji')
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany')

    def __str__(self):
        return str(self.date)


class Setting(models.Model):
    show_working_days = models.SmallIntegerField(default=7, verbose_name='Nazwa usługi')

