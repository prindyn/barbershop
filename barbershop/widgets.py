from django.forms.widgets import CheckboxInput


class CheckboxInputWidget(CheckboxInput):
    template_name = 'forms/widgets/checkbox.html'
