from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView
from .models import Contact
from .serializers import ContactSerailizer
from rest_framework import permissions


class ContactList(ListCreateAPIView):
    serializer_class = ContactSerailizer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return Contact.objects.filter(owner=self.request.user)

class ContactDetailView(RetrieveUpdateAPIView):
    serializer_class = ContactSerailizer
    permission_classes = (permissions.IsAuthenticated,)

    lookup_field = "id"

    def get_queryset(self):
        return Contact.objects.filter(owner=self.request.user)