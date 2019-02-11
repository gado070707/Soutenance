import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Truck } from '../models/truck';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://localhost:3000/trucks';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:no-shadowed-variable
  add (Truck: Truck) {
    return this.http.post(API_BASE_URL, Truck);
  }

  find(id: Number): Observable<Truck> {
    const url = API_BASE_URL + '/' + id;
    return this.http.get<Truck>(url)
      .pipe( map(res => res) );
  }

  all(): Observable<Truck[]> {
    return this.http.get<Truck[]>(API_BASE_URL)
      .pipe( map(res => res) );
  }

  delete(id: Number): Observable<{}> {
    const url = API_BASE_URL + '/' + id;
    return this.http.delete(url);
  }

  // tslint:disable-next-line:no-shadowed-variable
  update(Truck: Truck, id: Number) {
    const url = API_BASE_URL + '/' + id;
    return this.http.put<Truck>(url, Truck);
  }
}
