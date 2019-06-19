from barbershop.messages import ErrorMessages as error, SuccessMessages as success
from barbershop.services import error_response, success_response
from .services import upload_image, services_json_formatter
from django.contrib.auth.mixins import LoginRequiredMixin
from barbershop.apps.service.forms import ServiceForm
from django.views.generic import FormView
from barbershop.apps.service.models import *
from django.http import JsonResponse
from django.db import IntegrityError
from django.core import serializers
from django.views import View
import json

files_location = 'media/service/'
default_image_path = 'media/no-img.png'


class ServiceListApi(View):
    json_response = {}

    def get(self, request):
        services = serializers.serialize('json', Service.objects.all())
        self.json_response = json.loads(services)
        response = services_json_formatter(self.json_response)

        return JsonResponse(response, safe=False)


class SaveServiceApi(LoginRequiredMixin, FormView):
    form_class = ServiceForm

    def form_valid(self, form):
        has_id = 'id' in self.request.POST

        image = self.request.FILES.get('image')
        icon = self.request.FILES.get('icon')

        if (not image or not icon) and not has_id:
            return error_response(error.uploading_files)

        service = Service() if not has_id else Service.objects.get(id=self.request.POST['id'])
        service.title = form.cleaned_data['title']
        service.slug = form.cleaned_data['slug']
        service.meta_keywords = form.cleaned_data['meta_keywords']
        service.meta_description = form.cleaned_data['meta_description']
        service.description = form.cleaned_data['description']
        service.price = form.cleaned_data['price']
        service.button = form.cleaned_data['button']
        service.status = form.cleaned_data['status']

        if not has_id or image or icon:
            if image:
                service.image = upload_image(image, files_location + 'images') if image else default_image_path
            if icon:
                service.icon = upload_image(icon, files_location + 'icons') if icon else default_image_path
        try:
            service.save()
        except IntegrityError as e:
            return error_response(error.record_save.format(e))

        return success_response(success.record_save)

    def form_invalid(self, form):
        return error_response(form.errors)


class RemoveServiceApi(LoginRequiredMixin, View):
    def post(self, request):
        json_data = request.POST['data']
        data = json.loads(json_data)

        try:
            quantity = Service.objects.filter(id__in=data).delete()
            if quantity[0] == 0:
                return error_response(error.no_objects)
            else:
                rejection = 'Wpis został' if quantity[0] == 1 else 'Wpisy zostały'
        except IntegrityError as e:
            return error_response(error.record_remove.format(e))

        return success_response(success.record_delete.format(rejection))
