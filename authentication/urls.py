from django.urls import path, include
from .views import RegisterView , LoginView

urlpatterns = [
    path('apiproject/register/', RegisterView.as_view()),
    path('apiproject/login/', LoginView.as_view()),
]
