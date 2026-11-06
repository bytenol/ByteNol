from django.urls import path

from .views import AdminDashboardOverviewView


urlpatterns = [
    path(
        "admin/overview/",
        AdminDashboardOverviewView.as_view(),
        name="admin-dashboard-overview"
    ),
]