from django.urls import path
from .views import art

urlpatterns = [
    path('art/<str:region>/', art, name='art_by_region'),
]