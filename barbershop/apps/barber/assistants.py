from django.shortcuts import reverse


class BarberAssistant:
    instance_ = None
    self_ = None

    def has_id(self):
        return True if self.self_.id else False

    def find_by_id(self, pk):
        return self.instance_.objects.filter(id=pk)

    def find_by_title(self, title):
        return self.instance_.objects.filter(title__iexact=title)

    def find_by_slug(self, slug):
        return self.instance_.objects.filter(slug__iexact=slug)

    def get_absolute_url(self):
        return reverse('edit-barber', kwargs={'slug': self.self_.slug})
