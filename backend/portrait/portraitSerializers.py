from rest_framework import serializers
from .models import Portrait


class PortraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portrait
        fields = '__all__'
