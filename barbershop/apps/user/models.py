from django.db import models


class Role(models.Model):
    nr = models.SmallIntegerField(verbose_name='Numer roli')
    role = models.CharField(max_length=50, verbose_name='Rola użytkownika')

    def __str__(self):
        return self.role


class User(models.Model):
    user = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE,
        related_name='user_extras_data',
        verbose_name='Użytkownik, do którego odnoszą się dane'
    )
    image = models.ImageField(upload_to='user/image', verbose_name='Obraz użytkownika')
    birth_day = models.DateField(blank=True, verbose_name='Data urodzenia')
    role = models.ForeignKey('user.Role', on_delete=models.CASCADE, verbose_name='Rola użytkownika')

    def __str__(self):
        return str(self.birth_day)


class Client(models.Model):
    name = models.CharField(max_length=150, blank=False, verbose_name='Pewne imie klienta')
    telephone = models.IntegerField(blank=False, verbose_name='Telefon klienta')
    role = models.ForeignKey('user.Role', on_delete=models.CASCADE, verbose_name='Rola klienta')

    def __str__(self):
        return self.name


class UserSocial(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nazwa linku społecznościowego')
    link = models.URLField(verbose_name='Link społecznościowy')
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, verbose_name='Użytkownik, którego dotyczy link')
