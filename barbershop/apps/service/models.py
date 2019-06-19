from barbershop.validators import prohibited_slug_validator, format_slug_validator
from .assistants import ServiceAssistant
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
    button = models.CharField(max_length=20, verbose_name='Napis na przycisku')
    image = models.ImageField(upload_to='service/image/', blank=True, verbose_name='Zdjecie usługi')
    icon = models.ImageField(upload_to='service/icon/', blank=True, verbose_name='Ikona usługi')
    status = models.BooleanField(default=False, verbose_name='Czy wyświetlone na stronie')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia usługi')
    updated_date = models.DateTimeField(auto_now=True, verbose_name='Data zmiany usługi')

    def __str__(self):
        return self.title
