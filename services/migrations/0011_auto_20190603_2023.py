# Generated by Django 2.2.1 on 2019-06-03 20:23

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0010_auto_20190603_2023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservationdate',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name=datetime.datetime(2019, 6, 3, 20, 23, 9, 165113, tzinfo=utc)),
        ),
    ]
