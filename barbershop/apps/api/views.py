from .utils import ObjectListApiMixin, SaveObjectApiMixin, RemoveObjectApiMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from barbershop.apps.service.forms import ServiceForm
from barbershop.apps.barber.forms import BarberForm
from barbershop.apps.service.models import Service
from barbershop.apps.barber.models import Barber
from django.urls import reverse_lazy


class ServiceListApi(LoginRequiredMixin, ObjectListApiMixin):
    model = Service


class SaveServiceApi(LoginRequiredMixin, SaveObjectApiMixin):
    model = Service
    form_class = ServiceForm
    url_success = reverse_lazy('service-list')
    files_location = 'media/service/'

    def prescribe_data(self, form):
        self.obj.title = form.cleaned_data['title']
        self.obj.slug = form.cleaned_data['slug']
        self.obj.meta_keywords = form.cleaned_data['meta_keywords']
        self.obj.meta_description = form.cleaned_data['meta_description']
        self.obj.description = form.cleaned_data['description']
        self.obj.price = form.cleaned_data['price']
        self.obj.button = form.cleaned_data['button']
        self.obj.status = form.cleaned_data['status']

        return self.obj


class RemoveServiceApi(LoginRequiredMixin, RemoveObjectApiMixin):
    model = Service
    url_success = reverse_lazy('service-list')


class BarberListApi(LoginRequiredMixin, ObjectListApiMixin):
    model = Barber


class SaveBarberApi(LoginRequiredMixin, SaveObjectApiMixin):
    model = Barber
    form_class = BarberForm
    url_success = reverse_lazy('barber-list')
    files_location = 'media/barber/'

    def prescribe_data(self, form):
        self.obj.title = form.cleaned_data['title']
        self.obj.slug = form.cleaned_data['slug']
        self.obj.meta_keywords = form.cleaned_data['meta_keywords']
        self.obj.meta_description = form.cleaned_data['meta_description']
        self.obj.description = form.cleaned_data['description']
        self.obj.status = form.cleaned_data['status']

        return self.obj


class RemoveBarberApi(LoginRequiredMixin, RemoveObjectApiMixin):
    model = Barber
    url_success = reverse_lazy('barber-list')

