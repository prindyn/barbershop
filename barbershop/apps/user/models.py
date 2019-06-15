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
    img = models.ImageField(upload_to='media/backend/images', verbose_name='Obraz użytkownika')
    birth_day = models.DateField(blank=True, verbose_name='Data urodzenia')
    role = models.ForeignKey(Role, on_delete=models.CASCADE, verbose_name='Rola użytkownika')

    def __str__(self):
        return str(self.birth_day)
