from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from barbershop.apps.service.models import Service

default_image_location = 'media/uploads/images/'
url_success_save_service = '/admin/service'


def error_response(message):
    return JsonResponse({'result': -1, 'message': message})


def success_response(message):
    return JsonResponse({'result': 1, 'message': message, 'url_success': url_success_save_service})


def upload_image(image, location=default_image_location):
    if image.content_type not in ('image/png', 'image/jpeg', 'image/gif', 'image/ico'):
        return None

    fs = FileSystemStorage(location=location, base_url='/' + location)
    filename = fs.save(image.name, image)
    return fs.url(filename)


def services_json_formatter(json):
    response = []
    for t in json:
        service = Service.objects.get(slug__iexact=t['fields']['slug'])
        response.append({
            'id': service.id,
            'edit_url': service.get_absolute_url(),
            'detail': {k: t['fields'][k] for k in t['fields']}
        })
    return response
