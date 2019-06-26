(function ($) {
	"use strict";
	var activ_event;
  var popover,
  option = {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'moment' ],
    header: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    events: {
      url: 'api/calendar'
    },
    defaultDate: moment().format('YYYY-MM-DD'),
    editable: true,
    eventLimit: 5,
    timeFormat: 'H:mm',
    locale: 'pl',
    allDaySlot: false,
    slotEventOverlap: true,
    slotLabelFormat: 'H:mm',
    minTime: '09:00:00',
    selectable: true,
    select: function(info){console.log(info.toString()  );},
    // dateClick: function(info){alert('Clicked on: ' + info.resource.id);},
    eventRender: function(event, element, view) {
      if(event.status){
        $(element).find('.fc-content').prepend('<span class="badge badge-xs mr-1 '+event.status+'"></span>');
      }
      var el = $(element).find('.fc-event');
      el.prevObject.attr("data-toggle", "modal").attr("data-target", "#event-info");
    },
    eventClick: function(event, jsEvent) {
      activ_event = event;
      var that = $(jsEvent.target);
      var el = that.is('.fc-event') ? that : that.closest('.fc-event');
      
      var event_date = '<div><i class="fa fa-fw fa-calendar-o text-muted"></i> '+moment(event.start).format("dddd D")+'</div>';
      var event_time = '<div><i class="fa fa-fw fa-clock-o text-muted"></i> '+moment(event.start).format("HH:mm")+ (event.end ? ' - '+moment(event.end).format("HH:mm") : '' )+'</div>';
      var participant = '';
      $.each(event.participant, function (index, value) {
        participant += '<a href="profile.html" class="avatar w-24 mr-1"><img src="static/images/a'+value+'.jpg"></a>';
      });
      var content = {
          id: event.id,
          title: event.title,
          date: event_date + event_time,
          description: '<div class="text-muted mb-2">'+event.description+'</div>' + '<div class="d-flex my-2">' + participant + '</div>',
          html: true,
          container: '#calendar',
      };
      $('.modal-title').html(content.title);
      $('.event-date').prepend(content.date);
      $('.event-desc').prepend(content.description);
      $('#event-delete').attr("data-id", content.id);
    }
  };

  $(document).on('click', '#dayview', function() {
    $('#calendar').fullCalendar('changeView', 'agendaDay')
  });

  $(document).on('click', '#weekview', function() {
    $('#calendar').fullCalendar('changeView', 'agendaWeek')
  });

  $(document).on('click', '#monthview', function() {
    $('#calendar').fullCalendar('changeView', 'month')
  });

  $(document).on('click', '#todayview', function() {
    $('#calendar').fullCalendar('today')
  });
  $(document).on('click', '.close', function() {
    $('.modal-title').html("");
    $('.event-date').html("");
    $('.event-desc').html("");
  });
  $(document).on('click', '#event-delete', function() {
    var id = $('#event-delete').attr("data-id");
    activ_event.title = 'asdasdasdsa';
    console.log(activ_event);
    var event = $('#calendar').fullCalendar('getEventSourceById', id );
    console.log(event);
  });


  var init = function(){
    $.ajax('api/calendar').done(function(data){
      option.events = data;
      $('#calendar').fullCalendar(option);
    });

  };

  // for ajax to init again
  $.fn.fullCalendar.init = init;

})(jQuery);
