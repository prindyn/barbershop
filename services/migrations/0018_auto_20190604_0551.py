# Generated by Django 2.2.1 on 2019-06-04 05:51

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0017_auto_20190604_0543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservationdate',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name=datetime.datetime(2019, 6, 4, 5, 51, 17, 8262, tzinfo=utc)),
        ),
    ]
