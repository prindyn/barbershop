from django.shortcuts import render, redirect
from django.views import View
from .models import *
from .forms import ServiceForm
from barbershop.utils import get_calendar, get_day_data
from django.views.generic import TemplateView, DetailView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin


class IndexView(View):
    @classmethod
    def get(cls, request):
        services = Service.objects.all()
        return render(request, 'frontend/service/index.html', {
            'title': 'Service',
            'services': services
        })


class ChooseServiceView(View):
    @classmethod
    def get(cls, request):
        services = Service.objects.all()
        return render(request, 'frontend/service/choose_service.html', {
            'title': 'Service',
            'services': services
        })


class ChooseBarberView(View):
    @classmethod
    def get(cls, request):
        if request.session.has_key('service_id'):
            barbers = Barber.objects.all()
            # request.session.flush()
            return render(request, 'frontend/service/choose_barber.html', {
                'title': 'Barber',
                'barbers': barbers
            })

        else:
            return redirect('choose_service')

    @classmethod
    def post(cls, request):
        if request.POST.get('service_id'):
            request.session['service_id'] = request.POST['service_id']
            return redirect('choose_barber')
        else:
            return redirect('choose_service')


class ChooseDateView(View):
    @classmethod
    def get(cls, request):
        if request.session.has_key('barber_id'):
            calendar = get_calendar(31)
            day_settings = BarberDaysSetting.objects.filter(barber_id=request.session['barber_id'])
            working_days = list(d for x in day_settings.all() for d in x.day_set.all())
            return render(request, 'frontend/service/choose_date.html', {
                'title': 'Date',
                'calendar': calendar,
                'working_days': working_days,
            })
        else:
            return redirect('choose_barber')

    @classmethod
    def post(cls, request):
        if request.POST.get('barber_id'):
            request.session['barber_id'] = request.POST.get('barber_id')
            return redirect('choose_date')
        else:
            return redirect('choose_barber')


class BookingFinishView(View):
    @classmethod
    def get(cls, request):
        if request.session.has_key('time_id'):
            service = Service.objects.get(id=request.session['service_id']).title
            barber = Barber.objects.get(id=request.session['barber_id']).full_name
            time = Time.objects.get(id=request.session['time_id'])
            day = get_day_data(Day.objects.get(id=time.day_id).date)
            reservation = {
                'service': service,
                'barber': barber,
                'month': day['month'],
                'day': day['month_day_nr'],
                'time': time.hour
            }
            return render(request, 'frontend/service/booking_finish.html', {
                'title': 'Complete',
                'reservation': reservation
            })
        else:
            return redirect('choose_date')

    @classmethod
    def post(cls, request):
        if request.POST['time_id']:
            request.session['time_id'] = request.POST['time_id']
            return redirect('booking_finish')
        else:
            return redirect('choose_date')


class ServiceListView(LoginRequiredMixin, TemplateView):
    template_name = 'backend/service/service_list.html'


class CreateServiceView(LoginRequiredMixin, CreateView):
    model = Service
    template_name = 'backend/service/create_service.html'
    fields = '__all__'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'form': ServiceForm()
        })
        return context


class EditServiceView(LoginRequiredMixin, DetailView):
    model = Service
    template_name = 'backend/service/edit_service.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'id': context['service'].id,
            'form': ServiceForm(instance=context['service']),
        })
        return context
