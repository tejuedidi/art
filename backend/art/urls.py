from django.urls import path
from .views import art

urlpatterns = [
    path('art/', art)
]