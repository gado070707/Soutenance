import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandesService } from '../../services/commandes.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit {
  appTitle = 'FIND MY TRUCK';

  currentUser: User;
  currentCart;
  currentQte;
  currentPriceTot;
  qtecart: number = 0;
  panierStatus= false;
 

  constructor(
    private router: Router,
    private authservice: AuthService,
    private commandeservice: CommandesService
  ) { 
      this.authservice.currentUser.subscribe(user => this.currentUser = user);
      this.commandeservice.currentCart.subscribe(data => this.currentCart = data);
      this.commandeservice.currentQte.subscribe(data2 => this.currentQte = data2);
      this.commandeservice.currentPriceTot.subscribe(data3 => this.currentPriceTot = data3);
   }

  ngOnInit() {
    this.commandeservice.getCart();
  }
    
  logout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }

  changePanierStatus(){
    this.panierStatus = !this.panierStatus;
  }

  qtemodif(add, id){
    this.commandeservice.qtemodif(add, id);
  }

  removeCart(){
    this.commandeservice.removeCart();
  }
}
