import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrucksService } from 'src/app/services/trucks.service';
import { Truck } from 'src/app/models/truck';
import datas from '../../../listetruck/trucks.json';
import { CommandesService } from '../../../services/commandes.service';

@Component({
  selector: 'app-truckdetails',
  templateUrl: './truckdetails.component.html',
  styleUrls: ['./truckdetails.component.scss']
})
export class TruckdetailsComponent implements OnInit {
  truck = {} as Truck;
  trucks;
  id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  currentCart;
  currentQte;

  // currentCart: User;
  constructor(
    private route: ActivatedRoute,
    private truckService: TrucksService,
    private commandeservice: CommandesService
  ) {
    this.commandeservice.currentCart.subscribe(data => this.currentCart = data);
    this.commandeservice.currentQte.subscribe(data2 => this.currentQte = data2);
  }

  ngOnInit() {
    this.id = this.id - 1;
    // this.truckService.find(id)
    //   .subscribe(
    //     (truck: Truck) => {
    //       this.truck = truck;
    //       console.log(this.truck);
    //     }
    //   );

    this.trucks = datas;
  }

  
  addCart(produit){
    this.commandeservice.addCart(produit);
  }
}
