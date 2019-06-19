from django.shortcuts import reverse


class DayAssistant:
    instance_ = None
    self_ = None

    def define_working_day(self):
        return '' if self.self_.status else 'disabled'
