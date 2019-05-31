from django.shortcuts import render
from django.views import View


class IndexView(View):
    @classmethod
    def get(cls, request):
        return render(request, 'services/index.html', {'title': 'Services'})


class ChooseServiceView(View):
    @classmethod
    def get(cls, request):
        return render(request, 'services/choose_service.html', {'title': 'Service'})


class ChooseBarberView(View):
    @classmethod
    def get(cls, request):
        return render(request, 'services/choose_barber.html', {'title': 'Barber'})


class ChooseDateView(View):
    @classmethod
    def get(cls, request):
        return render(request, 'services/choose_date.html', {'title': 'Date'})


class BookingFinishView(View):
    @classmethod
    def get(cls, request):
        return render(request, 'services/booking_finish.html', {'title': 'Complete'})
