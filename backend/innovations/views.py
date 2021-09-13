from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Innovation
from .innovationSerializers import InnovationSerializer
from django.http import Http404

from rest_framework import viewsets


class InnovationviewSet(viewsets.ViewSet):
    def list(self, request):
        innovation_list = Innovation.objects.all()
        serializer = InnovationSerializer(innovation_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a Innovation instance.
    """

    def get_object(self, pk):
        try:
            return Innovation.objects.get(pk=pk)
        except Innovation.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        innovation = self.get_object(pk)
        serializer = InnovationSerializer(innovation)
        return Response(serializer.data)
