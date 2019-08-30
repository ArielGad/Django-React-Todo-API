from django.test import TestCase

from .models import Todo

class TodoModelsTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title='My first todo')
        Todo.objects.create(description='Practice model test')

    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = todo.title
        self.assertEquals(expected_object_name, 'My first todo')

    def test_description_content(self):
        todo = Todo.objects.get(id=2)
        expected_object_description = todo.description
        self.assertEquals(expected_object_description, 'Practice model test')
