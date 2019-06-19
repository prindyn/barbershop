from barbershop.messages import ErrorMessages as error, SuccessMessages as success
from barbershop.services import error_response, success_response
from django.views.generic import FormView
from django.http import JsonResponse
from django.db import IntegrityError
from django.core import serializers
from .services import upload_image
from django.views import View
import json


class ObjectListApiMixin(View):
    model = None
    json_response = {}

    def get(self, request):
        obj = serializers.serialize('json', self.model.objects.all())
        self.json_response = json.loads(obj)
        response = self.prepare_response()

        return JsonResponse(response, safe=False)

    def prepare_response(self):
        response = []
        for t in self.json_response:
            obj = self.model.objects.get(slug__iexact=t['fields']['slug'])
            response.append({
                'id': obj.id,
                'edit_url': obj.get_absolute_url(),
                'detail': {k: t['fields'][k] for k in t['fields']}
            })
        return response


class SaveObjectApiMixin(FormView):
    obj = None
    fields = []
    model = None
    form_class = None
    url_success = None
    files_location = None
    default_image = 'media/no-img.png'

    def form_valid(self, form):
        has_id = 'id' in self.request.POST

        image = self.request.FILES.get('image')
        icon = self.request.FILES.get('icon')

        if (not image or not icon) and not has_id:
            return error_response(error.uploading_files)

        self.obj = self.model() if not has_id else self.model.objects.get(id=self.request.POST['id'])

        self.obj = self.prescribe_data(form)

        if not has_id or image or icon:
            if image:
                self.obj.image = upload_image(image, self.files_location + 'images') if image else self.default_image
            if icon:
                self.obj.icon = upload_image(icon, self.files_location + 'icons') if icon else self.default_image
        try:
            self.obj.save()
        except IntegrityError as e:
            return error_response(error.record_save.format(e))

        return success_response(success.record_save, self.url_success)

    def form_invalid(self, form):
        return error_response(form.errors)

    def prescribe_data(self, form):
        return self.obj


class RemoveObjectApiMixin(View):
    model = None
    url_success = None

    def post(self, request):
        json_data = request.POST['data']
        data = json.loads(json_data)

        try:
            quantity = self.model.objects.filter(id__in=data).delete()
            if quantity[0] == 0:
                return error_response(error.no_objects)
            else:
                rejection = 'Wpis został' if quantity[0] == 1 else 'Wpisy zostały'
        except IntegrityError as e:
            return error_response(error.record_remove.format(e))

        return success_response(success.record_delete.format(rejection), self.url_success)
