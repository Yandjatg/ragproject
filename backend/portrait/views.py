from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Portrait
from .portraitSerializers import PortraitSerializer
from django.http import Http404

from rest_framework import viewsets


class PortraitviewSet(viewsets.ViewSet):
    def list(self, request):
        portrait_list = Portrait.objects.all()
        serializer = PortraitSerializer(portrait_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a Portrait instance.
    """

    def get_object(self, pk):
        try:
            return Portrait.objects.get(pk=pk)
        except Portrait.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        Portrait = self.get_object(pk)
        serializer = PortraitSerializer(Portrait)
        return Response(serializer.data)
