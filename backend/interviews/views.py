from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Interview
from .interviewSerializers import InterviewSerializer

from django.http import Http404
from rest_framework import viewsets


class InterviewviewSet(viewsets.ViewSet):
    def list(self, request):
        interview_list = Interview.objects.all()
        serializer = InterviewSerializer(interview_list, many=True)
        return Response(serializer.data)
    """
    Retrieve, update or delete a Interview instance.
    """

    def get_object(self, pk):
        try:
            return Interview.objects.get(pk=pk)
        except Interview.DoesNotExist:
            raise Http404

    def retrieve(self, request, pk, format=None):
        Interview = self.get_object(pk)
        serializer = InterviewSerializer(Interview)
        return Response(serializer.data)
