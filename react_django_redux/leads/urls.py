from rest_framework import routers
from .api import leadViewSet

router = routers.DefaultRouter()
router.register('api/leads',leadViewSet , 'leads')

urlpatterns = router.urls
