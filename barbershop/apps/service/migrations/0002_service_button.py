# Generated by Django 2.1 on 2019-06-18 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='button',
            field=models.CharField(default=2, max_length=20, verbose_name='Napis na przycisku'),
            preserve_default=False,
        ),
    ]
