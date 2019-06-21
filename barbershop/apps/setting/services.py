import datetime




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
