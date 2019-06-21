from barbershop.messages import ErrorMessages as error, SuccessMessages as success
from barbershop.services import error_response, success_response
from .services import prepare_writing_data, WeekDaysMerge as days_merge
from django.shortcuts import render_to_response
from django.views import View
from barbershop.apps.setting.models import BarberDaysSetting
from barbershop.apps.barber.models import Barber
import json


class SetDayForBarberApiMixin(View):
    def post(self, request):
        json_data = request.POST.get('data')
        data = json.loads(json_data)
        if not data or len(data) == 0:
            return error_response(error.record_data)
        barber = Barber().find_by_id(data['barber_id'])

        if barber.has_barber_this_day(data['day']):
            day = barber.get_barber_day(data['day'])
            day.is_working = False if day.is_working else True
        else:
            data_day = prepare_writing_data(data['day'])
            data_day.update({
                'barber': barber
            })
            day = BarberDaysSetting(**data_day)
        try:
            exacted = False if day.is_working else True
            day.save()
        except IndentationError as e:
            return error_response(error.record_save.format(e))

        return success_response(success.record_save, exacted=exacted)


class GetDaysForBarberApiMixin(View):
    template_name = 'backend/setting/_days.html'

    def post(self, request):
        json_data = request.POST.get('data')
        data = json.loads(json_data)
        barber = Barber().find_by_id(data['barber_id'])
        days = barber.days.all()
        week_days = days_merge(days).merge()

        return render_to_response(self.template_name, context={'week_days': week_days})
