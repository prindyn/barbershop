

class DayAssistant:
    instance_ = None
    self_ = None

    def define_working_day(self):
        return '' if self.self_.status else 'disabled'

    def get_by_id(self, pk):
        return self.instance_.objects.get(id=pk)

    def find_by_id(self, pk):
        return self.instance_.objects.filter(id=pk).first()

    def get_by_title(self, title):
        return self.instance_.objects.get(title__iexact=title)

    def find_by_title(self, title):
        return self.instance_.objects.filter(title__iexact=title)

    def has_id(self):
        return True if self.self_.id else False


class CalendarAssistant:
    instance_ = None
    self_ = None

    def get_by_id(self, pk):
        return self.instance_.objects.get(id=pk)

    def find_by_id(self, pk):
        return self.instance_.objects.filter(id=pk).first()
