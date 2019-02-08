import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { MarkersService } from '../../services/markers.service';
//import { MapService } from '../../services/map.service';
import * as data from '../../listetruck/trucks.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  data = JSON.stringify(data);
  currentPosition: Position;
  lat: number;
  lng: number;
  zoom: number = 16;
  markers: any[];
  km: number = 8;

  constructor(private markersService: MarkersService) { }

  ngOnInit() {

    const that = this;
    window.navigator.geolocation.getCurrentPosition(function (position) {
      that.currentPosition = position;
      that.lat = that.currentPosition.coords.latitude;
      that.lng = that.currentPosition.coords.longitude;
      
      that.markers = [
        {
          "marker": {
            "lat":  50.633803, 
            "lng":  3.020398
          },
          "truck": data[0]
        },
        {
          "marker": {
            "lat":  50.633364,
            "lng":  3.020868
          },
          "truck": data[4]
        }
      ];
    });
  }
}
