# Generated by Django 5.0.2 on 2024-03-10 20:44

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meetsphere', '0002_calendar_contact_meeting'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendar',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='calendar', to=settings.AUTH_USER_MODEL),
        ),
    ]
