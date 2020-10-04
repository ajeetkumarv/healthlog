import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    PatientDetailComponent,
    PatientlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
