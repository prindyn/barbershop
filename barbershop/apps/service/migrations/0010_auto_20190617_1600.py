# Generated by Django 2.1 on 2019-06-17 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0009_auto_20190616_1753'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='meta_description',
            field=models.TextField(blank=True, verbose_name='Opis CEO'),
        ),
        migrations.AddField(
            model_name='service',
            name='meta_keywords',
            field=models.CharField(blank=True, max_length=255, verbose_name='Tytuł CEO'),
        ),
    ]
