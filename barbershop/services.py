from django.utils.text import slugify
from django.http import JsonResponse

url_success_save_service = '/admin/service'


def generate_slug(string):
    return slugify(string, allow_unicode=True)


def error_response(message):
    return JsonResponse({'result': -1, 'message': message})


def success_response(message):
    return JsonResponse({'result': 1, 'message': message, 'url_success': url_success_save_service})
