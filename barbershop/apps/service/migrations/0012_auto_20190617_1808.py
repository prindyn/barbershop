# Generated by Django 2.1 on 2019-06-17 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0011_auto_20190617_1703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='meta_description',
            field=models.CharField(blank=True, max_length=255, verbose_name='Opis SEO'),
        ),
        migrations.AlterField(
            model_name='service',
            name='meta_keywords',
            field=models.CharField(blank=True, max_length=255, verbose_name='Słowa kluczowe SEO'),
        ),
    ]