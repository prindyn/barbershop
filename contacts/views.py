from django.shortcuts import render
from django.views import View


class IndexView(View):
    @classmethod
    def get(cls, request):
        return render(request, 'contacts/index.html', {'title': 'Contacts'})
