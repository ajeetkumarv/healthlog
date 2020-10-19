import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUrl = 'http://localhost:8080/users';
  private postUrl = 'http://localhost:8080/createuser';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.postUrl}`, user);
  }
}
