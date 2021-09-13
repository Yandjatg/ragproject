from rest_framework import serializers
from .models import Diaspora


class DiasporaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diaspora
        fields = '__all__'
