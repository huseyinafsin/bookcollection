from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .filters import BookFilter 
from .serializers import BookSerializer
from .models import Book




class BookList(generics.ListCreateAPIView):
    ''' List all snippets or create a new snippet '''
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = BookFilter


class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    ''' Retrieve, update or delete a snippet instance '''
    queryset = Book.objects.all()
    serializer_class = BookSerializer