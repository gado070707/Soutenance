import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { MarkersService } from '../../services/markers.service';
//import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  currentPosition: Position;
  lat: number;
  lng: number;
  zoom: number = 14;
  markers: [];
  km: number = 8;

  constructor(private markersService: MarkersService) { }

  ngOnInit() {

    const that = this;
    window.navigator.geolocation.getCurrentPosition(function (position) {
      that.currentPosition = position;
      that.lat = that.currentPosition.coords.latitude;
      that.lng = that.currentPosition.coords.longitude;
      
      that.markers = {
        {
          "jour": 1,
          "marker": {
            "lat":  "50.633396N",
            "lng":  "3.021728E"
          },
          "trucks": {
            {
              "id": 1,
              "name": "Le comptoir volant"
            },
            {
              "id": 2,
              "name": "L'asiatique croustillant"
            },
            {
              "id": 3,
              "name": "Les Bruger delicieux"
            }
          }
        },
        {
          "jour": 2,
          "marker": {
            "lat":  "50.633396",
            "lng":  "3.021728"
          },
          "trucks": {
            {
              "id": 4,
              "name": "Le mignon"
            },
            {
              "id": 5,
              "name": "Resto Do"
            },
            {
              "id": 6,
              "name": "Salad'Bar"
            }
          }
        }
      };
      // that.markersService.all(that.lng, that.lat, that.km).subscribe(
      //   (data: Marker[]) => {
      //      console.log(data);
      //     that.markers = data;
      //     console.log(that.markers);
      //   }
      // );
    });
  }

}
