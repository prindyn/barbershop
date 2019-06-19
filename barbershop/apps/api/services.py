from django.core.files.storage import FileSystemStorage

default_image_location = 'media/uploads/images/'


def upload_image(image, location=default_image_location):
    if image.content_type not in ('image/png', 'image/jpeg', 'image/gif', 'image/ico'):
        return None

    fs = FileSystemStorage(location=location, base_url='/' + location)
    filename = fs.save(image.name, image)
    return fs.url(filename)
