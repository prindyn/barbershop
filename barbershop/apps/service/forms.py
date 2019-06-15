from django import forms
from .models import Service
from barbershop import widgets


class ServiceForm(forms.ModelForm):

    class Meta:
        model = Service
        fields = ['id', 'title', 'slug', 'description', 'image', 'icon', 'price', 'status']
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
