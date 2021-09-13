from django.urls import path

from . import views
# from users import userViews
app_name = 'common'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),



]
