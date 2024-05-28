import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://192.168.1.25:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addUser(user: any): Observable<any>{
    return this.http.post(this.apiUrl, user);
  }
}
