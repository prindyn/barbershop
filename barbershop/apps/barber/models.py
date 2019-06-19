from barbershop.validators import prohibited_slug_validator, format_slug_validator
from .assistants import BarberAssistant
from django.db import models


class Barber(models.Model, BarberAssistant):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.self_ = self
        self.instance_ = self.__class__

    title = models.CharField(max_length=150, verbose_name='Pewne imie fryziera')
    slug = models.CharField(
        max_length=150,
        blank=True,
        validators=[prohibited_slug_validator, format_slug_validator],
        verbose_name='Slug fryziera'
    )
    meta_keywords = models.CharField(max_length=255, blank=True, verbose_name='Słowa kluczowe SEO')
    meta_description = models.CharField(max_length=255, blank=True, verbose_name='Opis SEO')
    description = models.TextField(verbose_name='Opis fryzjera')
    image = models.ImageField(upload_to='barber/image/', blank=True, verbose_name='Duze zdjecie fryzjera')
    icon = models.ImageField(upload_to='barber/icon/', blank=True, verbose_name='Male zdjecie fryzjera')
    status = models.BooleanField(default=False, verbose_name='Czy wyświetlone na stronie')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia fryzjera')
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany fryzjera')

    def __str__(self):
        return self.title


class BarberSocial(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nazwa linku społecznościowego')
    link = models.URLField(verbose_name='Link społecznościowy')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, którego dotyczy link')

    def __str__(self):
        return self.title


class BarberSkills(models.Model):
    title = models.CharField(max_length=150, verbose_name='Nazwa umiejętności fryzjera')
    level = models.PositiveIntegerField(default=0, verbose_name='Poziom umiejętności')
    barber = models.ForeignKey('barber.Barber', on_delete=models.CASCADE, verbose_name='Fryzjer, którego dotyczy nawyk')

    def __str__(self):
        return self.title
