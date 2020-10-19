import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private getUrl = 'http://localhost:8080/addresses';
  private postUrl = 'http://localhost:8080/createaddress';
  constructor(private http:HttpClient) { }

 
  getAddresses(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  createAddress(address: Address): Observable<Object> {
	return this.http.post(`${this.postUrl}`, address);
  }
}
