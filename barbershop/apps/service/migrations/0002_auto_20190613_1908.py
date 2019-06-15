# Generated by Django 2.1 on 2019-06-13 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='barber',
            name='big_img',
            field=models.ImageField(default='', upload_to='barber/image/', verbose_name='Duze zdjecie fryzjera'),
        ),
        migrations.AlterField(
            model_name='barber',
            name='small_img',
            field=models.ImageField(default='', upload_to='barber/icon/', verbose_name='Male zdjecie fryzjera'),
        ),
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
