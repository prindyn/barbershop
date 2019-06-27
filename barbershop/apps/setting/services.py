from barbershop.apps.calendar.models import Day
from barbershop.apps.barber.models import Barber
import datetime


class WeekDaysMerge:
    days = None
    week_days = None

    def __init__(self, days):
        self.days = days
        self.week_days = {
            'Monday': {'is_working': False},
            'Tuesday': {'is_working': False},
            'Wednesday': {'is_working': False},
            'Thursday': {'is_working': False},
            'Friday': {'is_working': False},
            'Saturday': {'is_working': False},
            'Sunday': {'is_working': False}
        }

    def merge(self):
        for day in self.days:
            self.week_days[day.title]['is_working'] = day.is_working
        return self.week_days


def prepare_writing_data(day):
    data = dict()
    day_ = datetime.date.today()
    while day != day_.strftime('%A'):
        day_ += datetime.timedelta(days=1)
    data.update({
        'title': day_.strftime('%A'),
        'shortcut': day_.strftime('%a'),
        'week_day_nr': day_.weekday(),
        'is_working': True
    })
    return data


def calendar_response_prepare(barber=None, start=None, end=None):
    events = []
    query = Barber().get_by_id(barber).day_set if barber else Day.objects
    days = query.filter(date__range=[start, end])
    for day in days:
        for event in day.calendar_set.all():
            events.append({
                'id': event.id,
                'start': str(day.date) + ' ' + str(event.start),
                'end': str(day.date) + ' ' + str(event.end),
                'title': event.title,
                'comment': event.comment,
                'status': event.status.status_class,
                'participant': [],
                'textColor': event.status.text_color,
                'backgroundColor': event.status.background_color,
                'borderColor': event.status.border_color
            })
    return events

