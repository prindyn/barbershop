from django.contrib import admin
from .models import *

admin.site.register(Service)
admin.site.register(ReservationDate)
admin.site.register(Client)
admin.site.register(Barber)
admin.site.register(Day)
admin.site.register(Time)
admin.site.register(BarberDaysSetting)
admin.site.register(Setting)
