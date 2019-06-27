from django.views.generic import ListView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from barbershop.apps.barber.models import Barber
from barbershop.apps.service.models import Service
from .services import WeekDaysMerge as days_merge, calendar_response_prepare
from .utils import SetDayForBarberApiMixin, GetDaysForBarberApiMixin
from django.views import View
from barbershop.utils import get_day_data
from django.urls import reverse_lazy
from barbershop.services import error_response, success_response
from barbershop.messages import ErrorMessages as error, SuccessMessages as success
from django.views.generic import FormView
from django.http import JsonResponse
from barbershop.apps.setting.models import Status, BarberDaysSetting
from barbershop.apps.calendar.models import Calendar, Day
from .forms import CreateEventForm, SelectBarberForm
from django.db import IntegrityError


class BarberSettingsView(LoginRequiredMixin, TemplateView):
    template_name = 'backend/setting/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        barbers = Barber.objects.all()
        services = Service.objects.all()
        days = barbers.first().barberdayssetting_set.all()
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
        barber, start, end = (request.GET.get(key) for key in ['barber', 'start', 'end'])
        start = get_day_data(start[:10], reverse=True)['date'] if start else ''
        end = get_day_data(end[:10], reverse=True)['date'] if end else ''
        calendar = calendar_response_prepare(barber, start, end)
        return JsonResponse(calendar, safe=False)


class CreateEventApi(LoginRequiredMixin, FormView):
    form_class = CreateEventForm
    success_url = reverse_lazy('barber-settings')
    default_status = 3

    def form_valid(self, form):
        has_id = 'id' in self.request.POST
        barber, service = Barber().find_by_id(form.cleaned_data['barber']),\
                          Service().find_by_id(form.cleaned_data['service'])
        if not barber:
            return error_response(error.barber_not_found)
        if not service:
            return error_response(error.barber_not_found)
        if form.cleaned_data['start'] > form.cleaned_data['end']:
            return error_response(error.wrong_time)

        pk = form.cleaned_data['status'] if 'status' in self.request.POST else self.default_status
        status = Status().get_by_id(pk)
        comment = form.cleaned_data['comment'] if 'comment' in self.request.POST else ''

        if 'date' not in self.request.POST:
            error_response(error.wrong_date)

        date = form.cleaned_data['date']
        date_data = get_day_data(date, reverse=True)

        setting_day, created = BarberDaysSetting.objects.get_or_create(
            title=date_data['title'],
            shortcut=date_data['shortcut'],
            week_day_nr=date_data['week_day_nr'],
            barber=barber,
        )

        try:
            day = Day.objects.get(date=date_data['date'], barber=barber.id)
        except Day.DoesNotExist:
            day = Day(
                title=date_data['title'],
                date=date_data['date'],
                is_working=True,
                day_settings=setting_day,
                barber=barber
            )
            day.save()

        event = Calendar() if not has_id else Calendar().find_by_id(int(self.request.POST['id']))
        event.title = service.title
        event.comment = comment
        event.start = form.cleaned_data['start']
        event.end = form.cleaned_data['end']
        event.status = status
        event.day = day
        event.service = service

        try:
            event.save()
        except IntegrityError as e:
            return error_response(error.record_save.format(e))

        return success_response(success.event_created, url=self.success_url)

    def form_invalid(self, form):
        return error_response(form.errors)


class RemoveEventApi(LoginRequiredMixin, View):
    def post(self, request):
        if 'id' not in request.POST:
            return error_response(error.event_remove)

        event = Calendar().find_by_id(request.POST['id'])

        if not event:
            return error_response(error.event_remove)

        try:
            event.delete()
        except Calendar.DoesNotExist:
            return error_response(error.event_remove)

        return success_response(success.record_delete.format('Wydarzenie'))
