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
        labels = {
            'title': 'Tytuł',
            'slug': 'Slug',
            'meta_keywords': 'Słowa kluczowe SEO',
            'meta_description': 'Opis SEO',
            'description': 'Opis',
            'price': 'Cena',
            'button': 'Napis na przycisku',
            'image': 'Zdjęcie',
            'icon': 'Ikona',
            'status': 'Wyświetlane na stronie',
        }
        widgets = {

            'title': forms.TextInput(attrs={
                'class': 'form-control',
                'id': 'input_title',
                'placeholder': 'Nazwa usługi'
            }),
            'slug': forms.TextInput(attrs={
                'class': 'form-control',
                'id': 'input_slug',
                'placeholder': 'Wyrażenie do wyświetlenia w url usługi'
            }),
            'meta_keywords': forms.TextInput(attrs={
                'class': 'form-control',
                'id': 'input_meta_keywords',
                'placeholder': 'Słowa kluczowe dla SEO (wprowadź przez przecinek)'
            }),
            'meta_description': forms.Textarea(attrs={
                'class': 'form-control',
                'id': 'input_meta_description',
                'placeholder': 'Krótki opis dla SEO (maksymalnie 255 znaków)',
                'rows': '5'
            }),
            'description': forms.Textarea(attrs={
                'class': 'form-control',
                'id': 'input_description',
                'placeholder': 'Opis usługi',
                'rows': '10'
            }),
            'price': forms.NumberInput(attrs={
                'class': 'form-control',
                'id': 'input_price',
                'placeholder': 'Cena usługi'
            }),
            'button': forms.TextInput(attrs={
                'class': 'form-control',
                'id': 'input_button',
                'placeholder': 'Napis na przycisku'
            }),
            'image': forms.FileInput(attrs={
                'class': 'form-control',
                'id': 'input_image'
            }),
            'icon': forms.FileInput(attrs={
                'class': 'form-control',
                'id': 'input_icon'
            }),
            'status': widgets.CheckboxInputWidget(attrs={
                'id': 'checkbox_status',
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
            'button': {
                'required': error.field_required.format('"Napis na przycisku"')
            }
        }
