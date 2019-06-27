from django.shortcuts import reverse


class ServiceAssistant:
    instance_ = None
    self_ = None

    def find_by_id(self, pk):
        return self.instance_.objects.filter(id=pk).first()

    def get_by_id(self, pk):
        return self.instance_.objects.get(id=pk)

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

    def define_block_class(self):
        block_class = 'box-service-dark box-service-reverse' if self.self_.id % 2 != 0 else ''
        return block_class

    def get_absolute_url(self):
        return reverse('edit-service', kwargs={'slug': self.self_.slug})
