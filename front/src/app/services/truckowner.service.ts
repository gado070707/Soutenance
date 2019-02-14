import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Truckowner } from '../models/truckowner';
import { Links } from '../includes/links';

@Injectable({
  providedIn: 'root'
})
export class TrucksOwnerService {

  constructor( 
    private http: HttpClient,
    private link: Links,
    ) {}
  
  API_BASE_URL = this.link.linkCreator();

  add(Truckowner: Truckowner) {
    return this.http.post(this.API_BASE_URL+ "/api/truckowner", Truckowner);
  }
}