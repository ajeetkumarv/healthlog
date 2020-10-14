import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { INITIAL_EVENTS, createEventId } from '../util/event-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  {
  // references the #calendar in the template
  @ViewChild('calendarMonthComponent') calendarMonthComponent: FullCalendarComponent;
  @ViewChild('calendarDayComponent') calendarDayComponent: FullCalendarComponent;

  title = 'CalendarTest';

  showModal : boolean;
  desc    : string;
  
  calendarOptionsMonth: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    fixedWeekCount: false,
    allDaySlot: false,
    displayEventTime: true,
    editable: true,
    lazyFetching: false,
    nowIndicator: true,
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    dateClick: this.dateClick.bind(this),
    events: []
  };
  calendarOptionsDay: CalendarOptions = {
    initialView: 'timeGridDay',
    allDaySlot: false,
    displayEventTime: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    lazyFetching: false,
    nowIndicator: true,
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    events: []
  };
  currentEvents: EventApi[] = [];

  ngOnInit(): void {
  }

  dateClick(dateClicked) {
    let calendarApi = this.calendarDayComponent.getApi();
    calendarApi.gotoDate(dateClicked.dateStr);
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const calendarApi = selectInfo.view.calendar;
    this.showModal = true; 
    
    
    //const title = prompt('Please enter a new title for your event');
    const title="Patient Id"

    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
    // let calendar = this.calendarMonthComponent.getApi();
    // calendar.addEventSource(INITIAL_EVENTS);
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
}

