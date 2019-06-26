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

function clear_modal() {
    $('.modal-title').html("");
    $('.event-date').html("");
    $('.event-desc').html("");
}

function cancel_new_event(){
    $('form').unbind('submit');
}

var button = $('button.md-btn'),
    token = get_token(),
    select = $('#select2-single'),
    data = [],
    create_event_is_loaded = 0;

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
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        plugins: ['dayGrid', 'timeGrid', 'interaction'],
        defaultView: 'dayGridMonth',
        events: {
            url: get_url('calendar')
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
        dayRender: function (info) {
            var day = $(info.el);
            if (day.hasClass('fc-future') || day.hasClass('fc-today')) {

            }
        },
        eventRender: function (info) {
            var event = $(info.el),
                status = info.event.extendedProps.status;
            if (status) {
                event.find(".fc-content").prepend('<span class="badge badge-xs mr-1 ' + status + '"></span>');
            }
            event.attr("data-toggle", "modal").attr("data-target", "#event-info");
        },
        eventClick: function (info) {
            var that = $(info.jsEvent.target);
            var el = that.is('.fc-event') ? that : that.closest('.fc-event');

            var event_date = '<div><i class="fa fa-fw fa-calendar-o text-muted"></i> ' + moment(info.event.start).format("dddd D") + '</div>';
            var event_time = '<div><i class="fa fa-fw fa-clock-o text-muted"></i> ' + moment(info.event.start).format("HH:mm") + (info.event.end ? ' - ' + moment(info.event.end).format("HH:mm") : '') + '</div>';
            var participant = '';
            var desc = info.event.extendedProps.description;
            $.each(info.event.extendedProps.participant, function (index, value) {
                participant += '<a href="profile.html" class="avatar w-24 mr-1"><img src="/static/images/a' + value + '.jpg"></a>';
            });
            var content = {
                id: info.event.id,
                title: info.event.title,
                date: event_date + event_time,
                description: '<div class="text-muted mb-2">' + desc + '</div>' + '<div class="d-flex my-2">' + participant + '</div>',
                html: true,
                container: '#calendar',
            };
            $('.modal-title').html(content.title);
            $('.event-date').prepend(content.date);
            $('.event-desc').prepend(content.description);
            $('#event-delete').attr("data-id", content.id);
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

                $('form').submit(function (e) {
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
                                cancel_new_event();
                            } else {
                                show_error_message(response.message);
                            }
                            calendar.refetchEvents();
                        }
                    });
                });
            }
        }
    });

    calendar.render();

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
        cancel_new_event();
        clear_modal();
    });
    $(document).on('click', '#event-delete', function () {
        var id = $('#event-delete').attr("data-id");
        var event = calendar.getEventById(id);
        event.remove();
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
