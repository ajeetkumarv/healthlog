import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/api/v1/patients';
  constructor(private http:HttpClient) { }

 
  getPatientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createPatient(patient: Patient): Observable<Object> {
	return this.http.post(`${this.baseUrl}`, patient);
  }

}
