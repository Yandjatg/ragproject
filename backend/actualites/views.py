
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .models import Actualite
from .actualiteSerialisers import ActualiteSerializer
from django.http import Http404

from rest_framework import serializers, viewsets


class ActualiteviewSet(viewsets.ViewSet):

    def list(self, request):
        actualite_list = Actualite.objects.all()
        serializer = ActualiteSerializer(actualite_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a actualite instance.
    """

    def get_object(self, pk):
        try:
            return Actualite.objects.get(pk=pk)
        except Actualite.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        actualite = self.get_object(pk)
        serializer = ActualiteSerializer(actualite)
        return Response(serializer.data)
