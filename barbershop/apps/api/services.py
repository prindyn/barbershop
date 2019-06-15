from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse

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
