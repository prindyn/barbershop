from django.shortcuts import reverse


class BarberDaysSettingAssistants:
    instance_ = None
    self_ = None

    def get_absolute_url(self):
        return reverse('edit-barber', kwargs={'slug': self.self_.slug})

