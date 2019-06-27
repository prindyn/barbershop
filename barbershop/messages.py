class ErrorMessages:

    uploading_files = u'Wypełnij wszystkie pliki'
    record_data = u'Błąd podczas zapisywania danych'
    no_objects = u'Nie wybrano żadnych obiektów'
    record_save = u'Nie można zapisać danych: {}'
    event_remove = u'Błąd usuwania wydarzenia'
    record_remove = u'Nie można usunąć danych: {}'
    field_required = u'Pole {} nie może być puste'
    field_unique = u'{} już istnieje'
    forbidden_slug = u'Korzystanie z tego slagu: "{}" jest zabronione'
    invalid_format = u'Nieprawidłowy format {}'
    create_event = u'Błąd podczas tworzenia zdarzenia',
    barber_not_found = u'Nie wybrano fryzjera'
    service_not_found = u'Nie wybrano usługe'
    wrong_time = u'Czas zakończenia nie może być wcześniejszy niż czas rozpoczęcia'
    wrong_date = u'Nie wybrano daty'

    def __setitem__(self, key, value):
        self[key] = value

    def __getitem__(self, key):
        return self[key]


class SuccessMessages:

    record_save = u'Dane zostały pomyślnie zapisane'
    record_delete = u'{} pomyślnie usunięto'
    event_created = u'Wydarzenie zostało pomyślnie zarejestrowane'

    def __setitem__(self, key, value):
        self[key] = value

    def __getitem__(self, key):
        return self[key]
