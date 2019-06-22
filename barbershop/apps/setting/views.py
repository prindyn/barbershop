from django.views.generic import ListView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from barbershop.apps.barber.models import Barber
from .services import WeekDaysMerge as days_merge
from .utils import SetDayForBarberApiMixin, GetDaysForBarberApiMixin
from django.views import View
from django.http import JsonResponse
import json


class BarberSettingsView(LoginRequiredMixin, TemplateView):
    template_name = 'backend/setting/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        barbers = Barber.objects.all()
        days = barbers.first().days.all()
        week_days = days_merge(days).merge()
        context.update({
            'barbers': barbers,
            'week_days': week_days
        })

        return context


class SetDayForBarberApi(LoginRequiredMixin, SetDayForBarberApiMixin):
    """Set or unset working day for barber"""


class GetDaysForBarberApi(LoginRequiredMixin, GetDaysForBarberApiMixin):
    """Get all days and define which from him is working"""


class CalendarSettingsView(LoginRequiredMixin, ListView):
    pass


class BarberCalendarView(View):
    def get(self, request):
        with open('barbershop/apps/setting/barber/api/fullcalendar.json') as file:
            data = json.load(file)
        return JsonResponse(data, safe=False)
