from django.shortcuts import render, redirect
from .models import Score

def leaderboard(request):
    scores = Score.objects.order_by('-score', 'timestamp')[:10]  # top 10 scores
    return render(request, 'quiz/leaderboard.html', {'scores': scores})

def submit_score(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        score_str = request.POST.get('score', '0').strip()
        try:
            score = int(score_str)
        except ValueError:
            score = 0  # fallback if conversion fails
        Score.objects.create(name=name, score=score)
        return redirect('leaderboard')
    return redirect('quiz/index.html')


def home(request):
    return render(request, 'quiz/index.html')
