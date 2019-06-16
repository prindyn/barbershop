from barbershop.messages import ErrorMessages as error
from django.utils.translation import gettext_lazy as _
from django.core.validators import ValidationError
import re

list_prohibited_slugs = ['create', 'update', 'delete', 'edit', 'index']
regex_slug = '^[-a-zA-Z0-9_]+$'


def prohibited_slug_validator(slug):
    if slug.lower() in list_prohibited_slugs:
        raise ValidationError(
            _(error.forbidden_slug).format(slug))


def format_slug_validator(slug):
    pattern = re.compile(regex_slug)
    if not pattern.match(slug):
        raise ValidationError(
            _(error.invalid_format).format('slug')
        )
