from django.urls import path
from .views import *

urlpatterns = [
    path('', homePage, name="home"),
    path('item', itemPage, name="item")
]