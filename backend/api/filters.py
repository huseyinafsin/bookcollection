import django_filters
from .models import Book
from django.db.models import Q

class BookFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method='filter_by_all_fields')

    class Meta:
        model = Book
        fields = []

    def filter_by_all_fields(self, queryset, name, value):
        return queryset.filter(
            Q(title__icontains=value) |
            Q(author__icontains=value)|
            Q(isbn__icontains=value)
        )
