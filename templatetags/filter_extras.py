from django.utils.html import escape
from django import template
import datetime
import requests

register = template.Library()


@register.filter(name='get_request_value')
def get_request_value(obj, input_name):
    return obj[input_name]


@register.filter(name='index')
def index(obj, i):
    return obj[i]


@register.filter(name='increase')
def increase(time, n):
    dt = datetime.datetime.combine(datetime.datetime.today(), time)
    dt += datetime.timedelta(hours=n)
    return dt

