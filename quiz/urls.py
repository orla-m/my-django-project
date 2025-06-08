from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='quiz'), 
    path('leaderboard/', views.leaderboard, name='leaderboard'),
    path('submit/', views.submit_score, name='submit_score'),
]
