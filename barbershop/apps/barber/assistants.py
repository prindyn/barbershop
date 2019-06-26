from django.shortcuts import reverse


class BarberAssistant:
    instance_ = None
    self_ = None

    def find_by_id(self, pk):
        return self.instance_.objects.filter(id=pk).first()

    def find_by_title(self, title):
        return self.instance_.objects.filter(title__iexact=title)

    def find_by_slug(self, slug):
        return self.instance_.objects.filter(slug__iexact=slug)

    def has_id(self):
        return True if self.self_.id else False

    def has_barber_this_day(self, day):
        return True if self.self_.days.filter(title__iexact=day) else False

    def get_barber_day(self, day):
        return self.self_.days.filter(title__iexact=day).first()

    def get_absolute_url(self):
        return reverse('edit-barber', kwargs={'slug': self.self_.slug})
