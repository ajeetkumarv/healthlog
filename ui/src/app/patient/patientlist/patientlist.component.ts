import { from, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {PatientDetailComponent} from "../patient-detail/patient-detail.component"
import {PatientService} from '../../service/patient.service'
import {Patient} from '../../Patient'

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  patients : Observable<Patient[]>;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
   this.patients= this.patientService.getPatientList();
    }  
  
  }

