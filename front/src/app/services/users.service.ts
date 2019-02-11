import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Links } from '../includes/links';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private link: Links,
  ) {}

  API_BASE_URL = this.link.linkCreator();

  add(user: User) {
    return this.http.post(this.API_BASE_URL + '/register', user);
  }

  findById(id: Number): Observable<User> {
    const url = this.API_BASE_URL + '/api/users/' + id;
    return this.http.get<User>(url)
      .pipe( map(res => res) );
  }

  findByName(name: String): Observable<User> {
    const url = this.API_BASE_URL + '/api/user/' + name;
    return this.http.get<User>(url)
      .pipe( map(res => res) );
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.API_BASE_URL + '/api/users/')
      .pipe( map(res => res) );
  }

  update(user: User, id: Number) {
    const url = this.API_BASE_URL + '/api/user/' + id;
    return this.http.put<User>(url, user);
  }

  updateDelete(user: User, id: Number) {
    const url = this.API_BASE_URL + '/api/userdel/' + id;
    return this.http.put<User>(url, user);
  }
}
