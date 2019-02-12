import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrucksService } from 'src/app/services/trucks.service';
import { Truck } from 'src/app/models/truck';

@Component({
  selector: 'app-truckdetails',
  templateUrl: './truckdetails.component.html',
  styleUrls: ['./truckdetails.component.css']
})
export class TruckdetailsComponent implements OnInit {
  truck = {} as Truck;
  constructor(
    private route: ActivatedRoute,
    private truckService: TrucksService
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.truckService.find(id)
      .subscribe(
        (truck: Truck) => {
          this.truck = truck;
          console.log(this.truck);
        }
      );
  }

}
