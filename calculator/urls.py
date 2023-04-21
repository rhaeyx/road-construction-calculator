from django.urls import path
from . import views

urlpatterns = [
    path('asphalt', views.asphalt, name="asphalt"),
    path('bitumen-prime', views.asphalt, name="bitumen-prime"),
    path('bitumen-tack', views.asphalt, name="bitumen-tack"),
    path('cement', views.asphalt, name="cement"),
]