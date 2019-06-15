# Generated by Django 2.1 on 2019-06-14 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0004_auto_20190614_1619'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='icon',
            field=models.ImageField(blank=True, upload_to='service/icon/', verbose_name='Ikona usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='image',
            field=models.ImageField(blank=True, upload_to='service/image/', verbose_name='Zdjecie usługi'),
        ),
    ]
