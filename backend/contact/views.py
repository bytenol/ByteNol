from rest_framework.views import APIView, Response

from .services import createContactService

from .serializers import ContactSerializer

from .throttle import ContactThrottle


class ContactCreateView(APIView):
    permission_classes = []
    throttle_classes = [ContactThrottle]

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        _, err = createContactService(data=serializer.validated_data)
  
        if len(err) > 0: return Response({ "error": err })
        return Response({ "data": "Contact sent successfully" }) 