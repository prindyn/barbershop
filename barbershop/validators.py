from django.core.validators import ValidationError, RegexValidator
from django.utils.translation import gettext_lazy as _
import re

list_prohibited_slugs = ['create', 'update', 'delete', 'edit', 'index']
regex_slug = '^[-a-zA-Z0-9_]+$'


def prohibited_slug_validator(slug):
    if slug.lower() in list_prohibited_slugs:
        raise ValidationError(
            _('Korzystanie z tego slagu: "{}" jest zabronione.').format(slug))


def slug_validate(slug):
    pattern = re.compile(regex_slug)
    if not pattern.match(slug):
        raise ValidationError(
            _('Nieprawidłowy format slug.')
        )
