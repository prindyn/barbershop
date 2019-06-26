# Generated by Django 2.1 on 2019-06-26 09:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('setting', '0002_auto_20190626_0948'),
        ('calendar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Calendar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Nazwa wydarzenia')),
                ('comment', models.CharField(max_length=255, verbose_name='Komentarz klienta')),
                ('start', models.TimeField(verbose_name='Początek wydarzenia')),
                ('end', models.TimeField(verbose_name='Koniec wydarzenia')),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='setting.Status', verbose_name='Status wydarzenia')),
            ],
        ),
        migrations.RemoveField(
            model_name='reservationdate',
            name='barber',
        ),
        migrations.RemoveField(
            model_name='reservationdate',
            name='client',
        ),
        migrations.DeleteModel(
            name='ReservationDate',
        ),
    ]