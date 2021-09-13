from django.conf.urls import include
from django.conf.urls import url
#from django.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

import django_js_reverse.views
from rest_framework.routers import DefaultRouter

from common.routes import routes as common_routes

router = DefaultRouter()

routes = common_routes
for route in routes:
    router.register(route['regex'], route['viewset'],
                    basename=route['basename'])

urlpatterns = [
    url("", include("common.urls"), name="common"),
    url("admin/", admin.site.urls, name="admin"),
    url("jsreverse/", django_js_reverse.views.urls_js, name="js_reverse"),

    url("api/", include(router.urls), name="api"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
