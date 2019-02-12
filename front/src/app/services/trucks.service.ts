import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Truck } from '../models/truck';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Links } from '../includes/links';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor( 
    private http: HttpClient,
    private link: Links,
    ) {}
  
  API_BASE_URL = this.link.linkCreator();

  add(Truck: Truck) {
    return this.http.post(this.API_BASE_URL+ "/api/trucks", Truck);
  }

  find(id: Number): Observable<Truck> {
    const url = this.API_BASE_URL + '/api/trucks/' + id;
    return this.http.get<Truck>(url)
      .pipe( map(res => res) );
  }

  all(): Observable<Truck[]> {
    return this.http.get<Truck[]>(this.API_BASE_URL)
      .pipe( map(res => res) );
  }

  allByOwner(id: Number): Observable<Truck[]> {
    const url = this.API_BASE_URL + '/api/trucksByOwner/' + id;
    return this.http.get<Truck[]>(url)
      .pipe( map(res => res) );
  }

  delete(id: Number): Observable<{}> {
    const url = this.API_BASE_URL + '/' + id;
    return this.http.delete(url);
  }

  // tslint:disable-next-line:no-shadowed-variable
  update(Truck: Truck, id: Number) {
    const url = this.API_BASE_URL + '/api/trucks/' + id;
    return this.http.put<Truck>(url, Truck);
  }
}
