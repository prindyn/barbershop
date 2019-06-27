import datetime


def get_day_data(date=None, reverse=None):
    if date:
        if type(date) == str:
            date = date.split('-')
            date.reverse() if reverse else date
            day, month, year = (int(x) for x in date)
            date = datetime.date(year, month, day)
        else:
            date = date
    else:
        date = datetime.date.today()

    day, shortcut, month, month_day_nr, year = (date.strftime('%' + x) for x in ['A', 'a', 'B', 'd', 'Y'])
    week_day_nr = date.weekday()

    data = {'title': day, 'shortcut': shortcut, 'month': month, 'month_day_nr': int(month_day_nr),
            'week_day_nr': int(week_day_nr), 'year': int(year), 'date': date}
    return data


def get_calendar(days):
    today = datetime.datetime.today()
    return [get_day_data(today + datetime.timedelta(days=n)) for n in range(days)]
