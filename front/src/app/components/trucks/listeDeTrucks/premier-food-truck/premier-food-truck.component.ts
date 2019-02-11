import { Component, OnInit } from '@angular/core';
import datas from '../../../../listetruck/trucks.json';

@Component({
  selector: 'app-premier-food-truck',
  templateUrl: './premier-food-truck.component.html',
  styleUrls: ['./premier-food-truck.component.scss']
})
export class PremierFoodTruckComponent implements OnInit {
trucks: { "id": number; "name": string; "image": string; "routes": string; }[];
  constructor() { this.trucks = datas;}
  ngOnInit() {
    
  }

}