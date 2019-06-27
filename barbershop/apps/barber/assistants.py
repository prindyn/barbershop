from django.shortcuts import reverse


class BarberAssistant:
    instance_ = None
    self_ = None

    def get_by_id(self, pk):
        return self.instance_.objects.get(id=pk)

    def find_by_id(self, pk):
        return self.instance_.objects.filter(id=pk).first()

    def get_by_title(self, title):
        return self.instance_.objects.get(title__iexact=title)

    def find_by_title(self, title):
        return self.instance_.objects.filter(title__iexact=title)

    def get_by_slug(self, slug):
        return self.instance_.objects.get(slug__iexact=slug)

    def find_by_slug(self, slug):
        return self.instance_.objects.filter(slug__iexact=slug)

    def has_id(self):
        return True if self.self_.id else False

    def has_this_title_day(self, day):
        return True if self.self_.barberdayssetting_set.filter(title__iexact=day) else False

    def get_day_setting(self, day):
        return self.self_.barberdayssetting_set.filter(title__iexact=day).first()

    def find_setting_days(self, day):
        return self.self_.barberdayssetting_set.filter(title__iexact=day)

    def get_absolute_url(self):
        return reverse('edit-barber', kwargs={'slug': self.self_.slug})
