import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { observable } from 'rxjs';
import {PatientlistComponent} from './patient/patientlist/patientlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
