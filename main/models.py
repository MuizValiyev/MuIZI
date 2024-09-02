from django.db import models

class Projects(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to='projects/%Y/%m/%d',blank=True)    
    link = models.CharField(max_length=50, default='https://')
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title