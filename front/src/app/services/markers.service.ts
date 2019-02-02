import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_BASE_URL = "https://localhost:3000/markers/";

@Injectable({
    providedIn: 'root'
})

export class MarkersService {

    constructor(private http: HttpClient) {}

    all(lng: number, lat: number, km: number): Observable<Object[]>{    
         
        return this.http.get<Object[]>(API_BASE_URL, {params: { lat: lat.toString(), lng: lng.toString(), km: km.toString() }})
        .pipe(
          map(res=> res)          
          );
         
      }

}