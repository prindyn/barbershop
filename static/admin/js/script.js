$(window).on('load', function () {

    var table = $('table#table');

    $('button#remove').on('click', function () {
        var a = table.find('tbody tr.selected').find('td a'),
            token = $('input[name="csrfmiddlewaretoken"]').val(),
            id_list = [],
            data;
        $.each(a, function (k, v) {
            id_list.push(v.attributes['data-id'].value);
        });
        data = JSON.stringify(id_list);
        console.log(data);
        $.ajax({
            url: $(this).attr('data-url'),
            method: 'post',
            dataType: 'json',
            data: {'data': data, 'csrfmiddlewaretoken': token},
            success: function (response) {
                if (response.result > 0) {
                    showSuccessToast(response.message);
                } else {
                    showErrorToast(response.message);
                }
            }
        });
    });

////////////////////////////////////////////

//script for show uploaded files
    var img_btn = $('.box-img').find('input'),
        icon_btn = $('.box-icon').find('input');

    img_btn.change(function (e) {
        var tmp_path = URL.createObjectURL(e.target.files[0]);
        $(this).closest('.box-img').find('img').fadeIn("fast").attr('src', tmp_path);
    });
    icon_btn.change(function (e) {
        var tmp_path = URL.createObjectURL(e.target.files[0]);
        $(this).closest('.box-icon').find('img').fadeIn("fast").attr('src', tmp_path);
    });

//script for save new service
    $('form').submit(function (e) {
        e.preventDefault();

        var formData = new FormData($(this)[0]),
            sender = $(document.activeElement);
        $.ajax({
            url: $(this).attr("action"),
            method: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.result > 0) {
                    showSuccessToast(response.message);
                    if (sender.val() == 'save-and-new') {
                        setTimeout(function () {
                            document.location.href = sender.attr('data-new-url');
                        }, 1000)
                    } else {
                        setTimeout(function () {
                            document.location.href = response.url_success;
                        }, 1000)
                    }
                }
                if (response.result < 0) {
                    show_error_message(response.message);
                }
            }
        });
    });

//script for generate slug
    function generate_slug(str) {
        var $slug = '';
        var trimmed = $.trim(str);
        $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        return $slug.toLowerCase();
    }

    $('.js-slug-source').find('input').keyup(function () {
        $('.js-slug').find('input').val(generate_slug($(this).val()));
    });

//functions to show service save errors
    function show_error_message(data) {
        if (typeof data == 'string' || data instanceof String) {
            showErrorToast(data);
        } else {
            var first = true;
            $.each(data, function (k, v) {
                showErrorToast(v[0]);
                first = false;
                if (first === false) {
                    return false
                }
            })
        }
    }


////////////////////////////////////////////

//script for delete one service record
    var modal = $('div#modal');
    $('button.js-delete').click(function () {
        var token = $('input[name="csrfmiddlewaretoken"]').val(),
            url = $(this).attr('data-url');
        console.log(url);
        $.ajax({
            url: url,
            method: 'post',
            data: {'csrfmiddlewaretoken': token},
            success: function (response) {
                if (response.result > 0) {
                    showSuccessToast(response.message);
                    setTimeout(function () {
                        document.location.href = response.url_success
                    }, 1000);
                } else {
                    showErrorToast(response.message);
                }
            },
        });
    });

});