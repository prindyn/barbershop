from django.views.generic import ListView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from barbershop.apps.barber.models import Barber
from barbershop.apps.service.models import Service
from .services import WeekDaysMerge as days_merge
from .utils import SetDayForBarberApiMixin, GetDaysForBarberApiMixin
from django.views import View
from django.urls import reverse_lazy
from barbershop.services import error_response, success_response
from barbershop.messages import ErrorMessages as error, SuccessMessages as success
from django.views.generic import FormView
from django.http import JsonResponse
from .forms import CreateEventForm, SelectBarberForm
import json


class BarberSettingsView(LoginRequiredMixin, TemplateView):
    template_name = 'backend/setting/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        barbers = Barber.objects.all()
        services = Service.objects.all()
        days = barbers.first().days.all()
        week_days = days_merge(days).merge()
        context.update({
            'barbers': barbers,
            'select_barber': SelectBarberForm(),
            'services': services,
            'week_days': week_days,
            'form': CreateEventForm()
        })

        return context


class SetDayForBarberApi(LoginRequiredMixin, SetDayForBarberApiMixin):
    """Set or unset working day for barber"""


class GetDaysForBarberApi(LoginRequiredMixin, GetDaysForBarberApiMixin):
    """Get all days and define which from him is working"""


class CalendarSettingsView(LoginRequiredMixin, ListView):
    pass


class BarberCalendarApi(LoginRequiredMixin, View):
    def get(self, request):
        with open('barbershop/apps/setting/barber/api/fullcalendar.json', 'r') as file:
            data = json.load(file)
        return JsonResponse(data, safe=False)


class CreateEventApi(LoginRequiredMixin, FormView):
    form_class = CreateEventForm
    success_url = reverse_lazy('barber-settings')

    def form_valid(self, form):
        if not Barber().find_by_id(pk=form.cleaned_data['barber']):
            return error_response(error.barber_not_found)
        if not Service().find_by_id(pk=form.cleaned_data['service']):
            return error_response(error.barber_not_found)
        if form.cleaned_data['start'] > form.cleaned_data['end']:
            return error_response(error.wrong_time)

        return success_response(success.event_created, url=self.success_url)

    def form_invalid(self, form):
        return error_response(form.errors)
