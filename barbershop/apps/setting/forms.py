from django import forms
from barbershop.messages import ErrorMessages as error
from barbershop.apps.service.models import Service
from barbershop.apps.barber.models import Barber
from django_select2.forms import Select2Widget
from tempus_dominus.widgets import TimePicker

SERVICE_CHOICES = ((service.id, service.title) for service in Service.objects.all())
BARBER_CHOICES = ((barber.id, barber.title) for barber in Barber.objects.all())


class CreateEventForm(forms.Form):
    service = forms.ChoiceField(choices=SERVICE_CHOICES, widget=Select2Widget(attrs={
        'id': 'create_event',
        'style': 'width:100%;'
    }), label='Wubierz usluge', error_messages={
        'required': error.service_not_found
    })
    barber = forms.CharField(widget=forms.HiddenInput(attrs={
        'id': 'barber'
    }), error_messages={
        'required': error.barber_not_found
    })
    date = forms.CharField(widget=forms.HiddenInput(attrs={
        'id': 'event_date'
    }), error_messages={
        'required': error.wrong_date
    })
    start = forms.TimeField(widget=TimePicker(attrs={
        'id': 'event_start',
        'placeholder': 'Początek',
        'autocomplete': 'off'
    }), label='Początek', error_messages={
        'required': error.field_required.format('początek')
    })
    end = forms.TimeField(widget=TimePicker(attrs={
        'id': 'event_end',
        'placeholder': 'Koniec',
        'autocomplete': 'off'
    }), label='Koniec', error_messages={
        'required': error.field_required.format('koniec')
    })


class SelectBarberForm(forms.Form):
    barber = forms.ChoiceField(choices=BARBER_CHOICES, widget=Select2Widget(attrs={
        'id': 'select_barber',
        'class': 'django-select2 form-control'
    }), label='Wybierz fryzjera')
