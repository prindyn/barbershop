from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from barbershop.apps.admin.forms import AdminAuthenticationForm
from django.views import View
from django.contrib.auth import views
from django.http import JsonResponse
import json


class AdminView(LoginRequiredMixin, View):
    template_name = 'backend/admin/index.html'

    def get(self, request):
        return render(request, self.template_name, context={})


class AdminLoginView(views.LoginView):
    form_class = AdminAuthenticationForm
    template_name = 'backend/registration/login.html'
