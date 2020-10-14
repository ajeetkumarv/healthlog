import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { observable } from 'rxjs';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'patients', component: PatientlistComponent },
  { path: 'addPatient', component: AddPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
