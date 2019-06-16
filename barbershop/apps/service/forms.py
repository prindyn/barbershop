from barbershop.messages import ErrorMessages as error
from barbershop.validators import prohibited_slug_validator
from barbershop.services import generate_slug
from django.utils.text import gettext_lazy as _
from django.core.validators import ValidationError
from barbershop import widgets
from .models import Service
from django import forms


class ServiceForm(forms.ModelForm):
    def clean_slug(self):
        if self.is_valid():
            has_id = 'id' in self.data

            new_slug = self.cleaned_data['slug'].lower()
            if not new_slug:
                new_slug = generate_slug(self.cleaned_data['title'])

            prohibited_slug_validator(new_slug)

            similar_obj = Service().find_by_slug(new_slug).first()

            if not has_id and similar_obj:
                raise ValidationError(_(error.field_unique.format('Slug')))
            if has_id and similar_obj:
                if int(self.data['id']) != int(similar_obj.id):
                    raise ValidationError(_(error.field_unique.format('Slug')))

            return new_slug

    class Meta:
        model = Service
        fields = '__all__'
        widgets = {

            'title': forms.TextInput(attrs={
                    'class': 'form-control',
                    'id': 'inputTitle',
                    'placeholder': 'Tytuł'
            }),
            'slug': forms.TextInput(attrs={
                'class': 'form-control',
                'id': 'inputSlug',
                'placeholder': 'Slug'
            }),
            'description': forms.Textarea(attrs={
                'class': 'form-control',
                'id': 'inputDescription',
                'placeholder': 'Opis usługi',
                'rows': '10'
            }),
            'price': forms.NumberInput(attrs={
                'class': 'form-control',
                'id': 'inputPrice',
                'placeholder': 'Cena'
            }),
            'image': forms.FileInput(attrs={
                'class': 'form-control',
                'id': 'inputImage'
            }),
            'icon': forms.FileInput(attrs={
                'class': 'form-control',
                'id': 'inputIcon'
            }),
            'status': widgets.CheckboxInputWidget(attrs={
                'id': 'checkboxStatus',
            }),
        }
        error_messages = {
            'title': {
                'required': error.field_required.format('"Tytuł"'),
                'unique': error.field_unique.format('Tytuł '),
            },
            'slug': {
                'required': error.field_required.format('"Slug"'),
                'unique': error.field_unique.format('Ten slug')
            },
            'description': {
                'required': error.field_required.format('"Opis"')
            },
            'price': {
                'required': error.field_required.format('"Cena"')
            },
        }
