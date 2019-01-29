import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserPro } from '../models/userpro';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Links } from '../includes/links';

@Injectable({
  providedIn: 'root'
})
export class UsersProService {

  constructor( 
    private http: HttpClient,
    private link: Links
  ) { }

  API_BASE_URL = this.link.linkCreator();

  add(userpro: UserPro) {
    return this.http.post(this.API_BASE_URL + '/register', userpro);
  }

  find(id: Number): Observable<UserPro> {
    const url = this.API_BASE_URL + '/' + id;
    return this.http.get<UserPro>(url)
      .pipe( map(res => res) );
  }

  all(): Observable<UserPro[]> {
    return this.http.get<UserPro[]>(this.API_BASE_URL)
      .pipe( map(res => res) );
  }

  delete(id: Number): Observable<{}> {
    const url = this.API_BASE_URL + '/' + id;
    return this.http.delete(url);
  }

  update(userpro: UserPro, id: Number) {
    const url = this.API_BASE_URL + '/' + id;
    return this.http.put<UserPro>(url, userpro);
  }
}
  