function set_day_active(btn) {
    btn.addClass('text-success');
}

function set_day_not_active(btn) {
    btn.removeClass('text-success');
}

function get_barber() {
    var select = $('select[name="barber"]').next('.select2-container'),
        barber = select.find('span#select2-select_barber-container').text(),
        id = $('#select_barber option:contains(' + barber + ')').val();
    return {
        'name': barber,
        'id': id
    };
}

function get_service() {
    var select = $('#select2-single[name="service"]').next('.select2-container'),
        service = select.find('span#select2-create_event-container').text(),
        id = $('#create_event option:contains(' + service + ')').val();
    return {
        'name': service,
        'id': id
    };
}

function get_url(param) {
    return $('div#data').attr('data-url-' + param);
}

function get_token() {
    return $('input[name="csrfmiddlewaretoken"]').val();
}

function change_barber_days(data) {
    $('#barber-days').html(data);
}

function clear_times() {
    $("#event_start").val("");
    $("#event_end").val("");
}

function clear_event_info() {
    $('.modal-title').html("");
    $('.event-date').html("");
    $('.event-desc').html("");
}

function cancel_js_event() {
    $('form').unbind('submit');
    $("#event-edit").unbind('click');
}

function rerender_calendar() {
    calendar.destroy();
    options.events.url = get_url('calendar') + '?barber=' + get_barber().id;
    calendar = new FullCalendar.Calendar(calendarEl, options);
    calendar.render();
}

function save_event() {
    $('form#save-event').submit(function (e) {
        e.preventDefault();
        calendar.refetchEvents();
        var formData = new FormData($(this)[0]);
        $.ajax({
            url: get_url('create-event'),
            method: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.result > 0) {
                    showSuccessToast(response.message);
                    $("#new-event").modal('hide');
                    clear_times();
                    cancel_js_event();
                } else {
                    show_error_message(response.message);
                }
                calendar.refetchEvents();
            }
        });
    });
}

var button = $('button.md-btn'),
    token = get_token(),
    select = $('#select2-single'),
    data = [],
    calendarEl = document.getElementById('calendar'),
    calendar,
    options;

$('#barber-days').on('click', button, function () {
    var active_btn = $(document.activeElement),
        barber = get_barber(),
        barber_id = barber.id;
    data = {
        barber_id: barber_id,
        barber: barber.name,
        day: active_btn.text()
    };
    data = JSON.stringify(data);
    $.ajax({
        url: get_url('set'),
        method: 'POST',
        data: {'csrfmiddlewaretoken': token, 'data': data},
        success: function (response) {
            if (response.result > 0) {
                data = [];
                if (response.exacted == true) {
                    set_day_not_active(active_btn)
                } else {
                    set_day_active(active_btn);
                }
            } else {
                data = [];
                showErrorToast(response.message);
            }
        },
        error: function (error) {
            data = [];
            console.log(error);
        }
    });
});

$('#select_barber').on('select2:select', function (e) {
    var data = {
        'barber': get_barber().name,
        'barber_id': get_barber().id
    };
    rerender_calendar();
    data = JSON.stringify(data);
    $.ajax({
        url: get_url('get'),
        method: 'POST',
        data: {'csrfmiddlewaretoken': token, 'data': data},
        success: function (response) {
            change_barber_days(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
});


//fullCalendar
document.addEventListener('DOMContentLoaded', function () {

    options = {
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        plugins: ['dayGrid', 'timeGrid', 'interaction'],
        defaultView: 'dayGridMonth',
        timeZone: 'local',
        events: {
            url: get_url('calendar') + '?barber=' + get_barber().id,
        },
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
        },
        displayEventEnd: false,
        firstDay: 1,
        showNonCurrentDates: false,
        // editable: true,
        // selectable: true,
        slotDuration: '00:30:00',
        slotLabelInterval: {hours: 1},
        slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            meridiem: 'short'
        },
        eventLimit: 5,
        locale: 'pl',
        allDaySlot: false,
        slotEventOverlap: true,
        minTime: '09:00:00',
        eventRender: function (info) {
            var event = $(info.el),
                status = info.event.extendedProps.status;
            if (status) {
                event.find(".fc-content").prepend('<span class="badge badge-xs mr-1 ' + status + '"></span>');
            }
            event.attr("data-toggle", "modal").attr("data-target", "#event-info");
        },
        eventClick: function (info) {
            var event_date = '<div><i class="fa fa-fw fa-calendar-o text-muted"></i> ' + moment(info.event.start).format("dddd D") + '</div>',
                event_time = '<div><i class="fa fa-fw fa-clock-o text-muted"></i> ' + moment(info.event.start).format("HH:mm") + (info.event.end ? ' - ' + moment(info.event.end).format("HH:mm") : '') + '</div>',
                participant = '',
                comment = info.event.extendedProps.comment;

            $.each(info.event.extendedProps.participant, function (index, value) {
                participant += '<a href="profile.html" class="avatar w-24 mr-1"><img src="/static/images/a' + value + '.jpg"></a>';
            });

            var content = {
                id: info.event.id,
                title: info.event.title,
                date: event_date + event_time,
                comment: '<div class="text-muted mb-2">' + comment + '</div>' + '<div class="d-flex my-2">' + participant + '</div>',
                html: true,
                container: '#calendar',
            };

            $('.modal-title').html(content.title);
            $('.event-date').prepend(content.date);
            $('.event-desc').prepend(content.comment);
            $('#event-delete').attr("data-id", content.id);

            $("#event-edit").on("click", function () {
                $("#event-info").modal('hide');
                clear_event_info();
                content.title = 'Zmiany w wydarzeniu';
                $('.modal-title').html(content.title);
                $("#select2-create_event-container").attr('title', info.event.title).html(info.event.title);
                $("form#save-event .modal-body").prepend('<input type="hidden" name="id" value="' + info.event.id + '">');
                $('#barber').attr('value', get_barber().id);
                $('#event_date').attr('value', moment(info.event.start).format("Y-M-D"));
                $('#event_start').val(moment(info.event.start).format("HH:mm"));
                $('#event_end').val(moment(info.event.end).format("HH:mm"));
                $("#new-event").modal('show');
                save_event();
                calendar.refetchEvents();
            });
        },
        dateClick: function (info) {

            var day = $(info.dayEl),
                content = {
                    title: 'Utwórz nowe wydarzenie',
                };

            if (day.is(".fc-past")) {
                showErrorToast('Nie możesz utworzyć wydarzenia przed ostatnią datą');
            } else {
                $('.modal-title').html(content.title);
                $('#barber').attr('value', get_barber().id);
                $('#event_date').attr('value', info.dateStr);
                $('#new-event').modal('show');
                save_event();
            }
        }
    };

    $(document).ready(function () {
        calendar = new FullCalendar.Calendar(calendarEl, options);
        calendar.render();
    });

    $(document).on('click', '#dayview', function () {
        calendar.changeView('timeGridDay');
    });

    $(document).on('click', '#weekview', function () {
        calendar.changeView('timeGridWeek');
    });

    $(document).on('click', '#monthview', function () {
        calendar.changeView('dayGridMonth');
    });

    $(document).on('click', '#todayview', function () {
        calendar.today();
    });
    $(document).on('click', '.close', function () {
        var model_id = $(this).closest(".modal").attr("id");
        cancel_js_event();
        clear_event_info();
    });
    $(document).on('click', '#event-delete', function () {
        var id = $('#event-delete').attr("data-id");
        $.ajax({
            url: get_url('remove-event'),
            method: 'post',
            data: {'csrfmiddlewaretoken': token, 'id': id},
            success: function (response) {
                if (response.result > 0) {
                    showSuccessToast(response.message);
                    $("#event-info").modal('hide');
                    clear_event_info();
                } else {
                    show_error_message(response.message);
                }
                calendar.refetchEvents();
            }
        });
    });

    $('#event_start').datetimepicker({
        format: 'HH:mm',
        useCurrent: false,
    });
    $('#event_end').datetimepicker({
        format: 'HH:mm',
        useCurrent: false,
    });
});
