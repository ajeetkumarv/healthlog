import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facility } from 'src/app/Facility';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private getUrl = 'http://localhost:8080/facilities';
  private postUrl = 'http://localhost:8080/createfacility';
  constructor(private http: HttpClient) { }

  getFacilities(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  createFacility(facility: Facility): Observable<Object> {
    return this.http.post(`${this.postUrl}`, facility);
  }
}
