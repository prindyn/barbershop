from django.utils.text import slugify


def generate_slug(string):
    return slugify(string, allow_unicode=True)
