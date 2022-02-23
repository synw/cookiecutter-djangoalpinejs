from django.apps import AppConfig


class {{ cookiecutter.project_name }}Config(AppConfig):
    name = "{{ cookiecutter.project_name }}"
    verbose_name = "{{ cookiecutter.project_name }}"
    default_auto_field = "django.db.models.AutoField"
