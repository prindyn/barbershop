# Generated by Django 2.1 on 2019-06-16 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0008_auto_20190616_1749'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='title',
            field=models.CharField(max_length=255, verbose_name='Nazwa usługi'),
        ),
    ]