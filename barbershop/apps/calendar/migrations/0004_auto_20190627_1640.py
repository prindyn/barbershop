# Generated by Django 2.1 on 2019-06-27 16:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('calendar', '0003_auto_20190626_0953'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='calendar',
            name='barber',
        ),
        migrations.AddField(
            model_name='calendar',
            name='day',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='calendar.Day', verbose_name='Dzien, ktorego dotyczy wydarzenie'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='calendar',
            name='comment',
            field=models.CharField(blank=True, max_length=255, verbose_name='Komentarz klienta'),
        ),
    ]
