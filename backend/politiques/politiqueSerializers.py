from rest_framework import serializers
from .models import Politique


class PolitiqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Politique
        fields = '__all__'
