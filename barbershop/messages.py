class ErrorMessages:

    uploading_files = u'Wypełnij wszystkie pliki'
    data_save = u'Nie można zapisać danych: {}'
    field_required = u'Pole {} nie może być puste'
    field_unique = u'{} już istnieje'
    forbidden_slug = u'Korzystanie z tego slagu: "{}" jest zabronione'
    invalid_format = u'Nieprawidłowy format {}'

    def __setitem__(self, key, value):
        self[key] = value

    def __getitem__(self, key):
        return self[key]


class SuccessMessages:

    data_save = u'Dane zostały pomyślnie zapisane'

    def __setitem__(self, key, value):
        self[key] = value

    def __getitem__(self, key):
        return self[key]
