import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "https://hoodapplication.herokuapp.com";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/login/', 
    {headers: this.httpHeaders},
    );
  }
  loginHere(user): Observable<any> {
    return this.http.post(this.baseurl + '/login/',  user);
  }

  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/users/' + id,
      { headers: this.httpHeaders }
    );
  }

  updateUser(user): Observable<any> {
    const body = { username: '', email: '' };
    return this.http.put(this.baseurl + '/users/' + user.id + '/', body);
  }

  AddUser(user): Observable<any> {
    return this.http.post(this.baseurl + '/register/', user,
      { headers: this.httpHeaders })
  }
}