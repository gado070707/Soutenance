import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../../services/commandes.service';
import { TruckdetailsComponent } from '../trucks/truckdetails/truckdetails.component';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  infoStatus = false;
  commandeText: string;
  commandeText2: string;
  commandeText3: string;

  currentCart;
  currentQte;
  currentPriceTot;

  constructor(
    private commandeservice: CommandesService
  ) {
    this.commandeservice.currentCart.subscribe(data => this.currentCart = data);
    this.commandeservice.currentQte.subscribe(data2 => this.currentQte = data2);
    this.commandeservice.currentPriceTot.subscribe(data3 => this.currentPriceTot = data3);
   }

  ngOnInit() {
  }

  changeStatus(){
    this.infoStatus = !this.infoStatus;
  }

  editText(mode) {
    if(mode == 1) {
      this.commandeText =   "Votre commande a bien été transmise au Food Truck. Vous devrez la régler sur place.";
      this.commandeText2 =  "Rendez-vous dans environ 1h pour récuperer votre commande.";
      this.commandeText3 =  "Nous vous remercions et vous souhaitons une excellente journée.";
    }
    else if(mode == 2) {
      this.commandeText =   "Votre commande a bien été transmise et réglé au Food Truck."; 
      this.commandeText2 =  "Rendez-vous dans environ 1h pour récuperer votre commande."; 
      this.commandeText3 =  "Nous vous remercions et vous souhaitons une excellente journée."
    }
  }
  qtemodif(add, id){
    this.commandeservice.qtemodif(add, id);
  }

  saveCommande() {
    this.commandeservice.saveCommande();
  }

  removeCart(){
    this.commandeservice.removeCart();
  }

}
