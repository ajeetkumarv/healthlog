import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router'
import { PatientService } from '../../service/patient.service'
import { Patient } from 'src/app/Patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

	patient = new Patient();
	submitted = false;

	constructor(private patientService: PatientService, private router: Router) { }

	ngOnInit(): void {}

	newPatient(): void {
		this.submitted = false;
		this.patient = new Patient();
	}
	
	save() {
		this.patientService.createPatient(this.patient)
		.subscribe(data => console.log(data), error => console.log(error));
		this.patient = new Patient();
		this.gotoList();
	}
	
	onSubmit() {
		this.submitted = true;
		this.save();
	}
	
	gotoList() {
		this.router.navigate(['/patients'])
	}

}
