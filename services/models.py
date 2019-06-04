from django.db import models
from django.utils import timezone


class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    img = models.ImageField(upload_to='static/images/')
    icon = models.ImageField(upload_to='static/images/')
    price = models.FloatField(max_length=10)

    def __str__(self):
        return self.title

    def define_block_class(self):
        block_class = 'box-service-dark box-service-reverse' if self.id % 2 != 0 else ''
        return block_class


class Barber(models.Model):
    full_name = models.CharField(max_length=150, blank=False)
    description = models.TextField(blank=True)
    big_img = models.ImageField(default='', upload_to='static/images/')
    small_img = models.ImageField(default='', upload_to='static/images/')
    social = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.full_name


class ReservationDate(models.Model):
    date = models.DateTimeField(blank=False)
    barbers = models.ManyToManyField(Barber)
    status = models.SmallIntegerField(default=0)
    created_date = models.DateTimeField(timezone.now(), auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.date)


class BarberDaysSetting(models.Model):
    title = models.CharField(max_length=100)
    shortcut = models.CharField(max_length=10)
    week_day_nr = models.SmallIntegerField(default=0)
    status = models.SmallIntegerField(default=0)
    barber = models.ForeignKey(Barber, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Day(models.Model):
    title = models.CharField(max_length=100)
    shortcut = models.CharField(max_length=10)
    date = models.DateField(default=timezone.now)
    week_day_nr = models.SmallIntegerField(default=0)
    status = models.SmallIntegerField()
    day_settings = models.ForeignKey(BarberDaysSetting, on_delete=models.CASCADE, null=True)
    barber = models.ForeignKey(Barber, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def define_working_day(self):
        return '' if self.status else 'disabled'


class Time(models.Model):
    hour = models.TimeField()
    day = models.ForeignKey(Day, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)

    def __str__(self):
        return str(self.hour)


class Client(models.Model):
    full_name = models.CharField(max_length=150, blank=False)
    telephone = models.IntegerField(blank=False)
    reservation_days = models.ManyToManyField(ReservationDate)
    barbers = models.ManyToManyField(Barber)

    def __str__(self):
        return self.full_name


class Setting(models.Model):
    show_working_days = models.SmallIntegerField(default=7)
