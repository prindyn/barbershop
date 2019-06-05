"""barbershop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('barbershop.frontend.home.urls')),
    path('about/', include('barbershop.frontend.about.urls')),
    path('service/', include('barbershop.frontend.service.urls')),
    path('blog/', include('barbershop.frontend.blog.urls')),
    path('shop/', include('barbershop.frontend.shop.urls')),
    path('contact/', include('barbershop.frontend.contact.urls')),
]
