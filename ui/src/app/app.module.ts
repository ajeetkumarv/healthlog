import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; 
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CalendarComponent } from './calendar/calendar.component';
import { FacilityComponent } from './facility/facility.component';
import { UserComponent } from './user/user.component';
import { AddrBookComponent } from './addr-book/addr-book.component';



FullCalendarModule.registerPlugins([ 
  dayGridPlugin,timeGridPlugin,listPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    PatientDetailComponent,
    PatientlistComponent,
	CalendarComponent,
	FacilityComponent,
	UserComponent,
	AddrBookComponent
  ],
  imports: [
    BrowserModule,
	FullCalendarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
