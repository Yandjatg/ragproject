from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Startup
from .startupSerializers import StartupSerializer
from django.http import Http404

from rest_framework import viewsets


class StartupviewSet(viewsets.ViewSet):
    def list(self, request):
        startups_list = Startup.objects.all()
        serializer = StartupSerializer(startups_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a Startup instance.
    """

    def get_object(self, pk):
        try:
            return Startup.objects.get(pk=pk)
        except Startup.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        Startup = self.get_object(pk)
        serializer = StartupSerializer(Startup)
        return Response(serializer.data)
