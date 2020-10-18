import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { observable } from 'rxjs';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { FacilityComponent } from './facility/facility.component';
import { AddrBookComponent } from './addr-book/addr-book.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'patients', component: PatientlistComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'facility', component: FacilityComponent },
  { path: 'user', component: UserComponent },
  { path: 'addrbook', component: AddrBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
