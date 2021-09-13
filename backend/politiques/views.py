from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Politique
from .politiqueSerializers import PolitiqueSerializer
from django.http import Http404
from rest_framework import viewsets


class PolitiqueviewSet(viewsets.ViewSet):
    def list(self, request):
        politique_list = Politique.objects.all()
        serializer = PolitiqueSerializer(politique_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a Politique instance.
    """

    def get_object(self, pk):
        try:
            return Politique.objects.get(pk=pk)
        except Politique.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        Politique = self.get_object(pk)
        serializer = PolitiqueSerializer(Politique)
        return Response(serializer.data)
