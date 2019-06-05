from googletrans import Translator
import datetime


def get_day_data(dt=None, lg=None):
    if dt:
        if type(dt) == 'str':
            day, month, year = (int(x) for x in dt.split('-'))
            date = datetime.date(year, month, day)
        else:
            date = dt
    else:
        date = datetime.date.today()

    day, day_shortcut, month, month_day_nr = (date.strftime('%' + x) for x in ['A', 'a', 'B', 'd'])
    week_day_nr = date.weekday()

    if lg:
        translator = Translator()
        day, day_shortcut, month, month_day_nr, week_day_nr = (translator.translate(str(x), dest=lg).text for x in
                                                               [day, day_shortcut, month, month_day_nr, week_day_nr])

    data = {'title': day, 'shortcut': day_shortcut, 'month': month, 'month_day_nr': month_day_nr,
            'week_day_nr': week_day_nr}
    return data


def get_calendar(days):
    today = datetime.datetime.today()
    return [get_day_data(today + datetime.timedelta(days=n)) for n in range(days)]