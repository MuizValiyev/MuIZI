from django.shortcuts import render
from .models import Projects

def home(request):
    project = Projects.objects.order_by('-date')[:6]
    return render(request, 'home.html', {'project':project})