from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id','title','author','published_date','isbn','pages', 'image')

class SaveBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('title','author','published_date','isbn','pages', 'image')
