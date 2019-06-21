# Generated by Django 2.1 on 2019-06-20 05:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('barber', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BarberDaysSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Dzien')),
                ('shortcut', models.CharField(max_length=10, verbose_name='Skrot')),
                ('week_day_nr', models.SmallIntegerField(default=0, verbose_name='Numer dnia w tygodniu')),
                ('is_working', models.BooleanField(default=False, verbose_name='Czy jest roboczy')),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia ustawienia')),
                ('updated_date', models.DateTimeField(auto_now=True, verbose_name='Data zmiany ustawienia')),
                ('barber', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='barber.Barber', verbose_name='Fryzjer, ktorego dotyczy dzien')),
            ],
        ),
        migrations.CreateModel(
            name='CalendarSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default=7, max_length=255, verbose_name='Ustawienia kalendarza')),
                ('value', models.IntegerField(default=0, verbose_name='Znaczenie ustawienia')),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='Data utworzenia ustawienia')),
                ('updated_date', models.DateTimeField(auto_now=True, verbose_name='Data zmiany ustawienia')),
            ],
        ),
    ]
