from django.contrib import admin
from .models import *


class ServiceAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Service._meta.fields]
    list_filter = ["title"]
    search_fields = ["title"]

    class Meta:
        model = Service


admin.site.register(Service, ServiceAdmin)
admin.site.register(ReservationDate)
admin.site.register(Client)
admin.site.register(Barber)
admin.site.register(Day)
admin.site.register(Time)
admin.site.register(BarberDaysSetting)
admin.site.register(Setting)
