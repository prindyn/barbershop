from django import template
import datetime

register = template.Library()


@register.filter(name='index')
def index(obj, i):
    return obj[i]


@register.filter(name='increase')
def increase(time, n):
    dt = datetime.datetime.combine(datetime.datetime.today(), time)
    dt += datetime.timedelta(hours=n)
    return dt
