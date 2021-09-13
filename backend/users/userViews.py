from django.shortcuts import render  # noqa

from django.views import generic

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer

User = get_user_model()


class UserviewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='get-users',
    )
    def list_users(self, request):

        users_list = User.objects.all()
        serializer = UserSerializer(users_list, many=True)
        return Response(serializer.data)
