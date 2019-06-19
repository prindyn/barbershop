from django.views.generic import TemplateView, DetailView, CreateView, DeleteView
from barbershop.messages import ErrorMessages as error, SuccessMessages as success
from barbershop.services import error_response, success_response
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db import IntegrityError
from .forms import BarberForm
from .models import Barber


class BarberListView(LoginRequiredMixin, TemplateView):
    template_name = 'backend/barber/barber_list.html'


class CreateBarberView(LoginRequiredMixin, CreateView):
    model = Barber
    template_name = 'backend/barber/create_barber.html'
    fields = '__all__'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'form': BarberForm()
        })
        return context


class EditBarberView(LoginRequiredMixin, DetailView):
    model = Barber
    template_name = 'backend/barber/edit_barber.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        barber = {
            'id': context['barber'].id,
            'image': context['barber'].image,
            'icon': context['barber'].icon,
        }
        context.update({
            'barber': barber,
            'form': BarberForm(instance=context['barber']),
        })
        return context


class DeleteBarberView(LoginRequiredMixin, DeleteView):
    model = Barber

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        try:
            self.object.delete()
        except IntegrityError as e:
            return error_response(error.record_remove.format(e))

        return success_response(success.record_delete.format('Wpis został'), 'barber')
