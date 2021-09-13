from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Diaspora
from .diasporaSerializers import DiasporaSerializer
from django.http import Http404

from rest_framework import viewsets


class DiasporaviewSet(viewsets.ViewSet):
    def list(self, request):
        diaspora_list = Diaspora.objects.all()
        serializer = DiasporaSerializer(diaspora_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a Diaspora instance.
    """

    def get_object(self, pk):
        try:
            return Diaspora.objects.get(pk=pk)
        except Diaspora.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        diaspora = self.get_object(pk)
        serializer = DiasporaSerializer(diaspora)
        return Response(serializer.data)
