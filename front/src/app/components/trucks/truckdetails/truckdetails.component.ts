import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrucksService } from 'src/app/services/trucks.service';
import { Truck } from 'src/app/models/truck';
import datas from '../../../listetruck/trucks.json';

@Component({
  selector: 'app-truckdetails',
  templateUrl: './truckdetails.component.html',
  styleUrls: ['./truckdetails.component.scss']
})
export class TruckdetailsComponent implements OnInit {
  truck = {} as Truck;
  trucks;
  panier = [];
  constructor(
    private route: ActivatedRoute,
    private truckService: TrucksService
  ) { }

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    // this.truckService.find(id)
    //   .subscribe(
    //     (truck: Truck) => {
    //       this.truck = truck;
    //       console.log(this.truck);
    //     }
    //   );

    this.trucks = datas;
  }

  addCart(produit) {
    let found = 0;

    if(this.panier.length == 0) {
      produit['qte'] = 1;
      this.panier.push(produit);
    }
    else {
      for(let pan in this.panier) {
        if(this.panier[pan].id == produit.id) {
          this.panier[pan]['qte'] = this.panier[pan]['qte'] + 1;
          found = 1;
          break;
        }
      }

      if(found == 0) {
        produit['qte'] = 1;
        this.panier.push(produit);
      }
    }

    console.log(this.panier)
  }
}
