import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const LOCAL_STORAGE_CART = 'currentCart';
const LOCAL_STORAGE_COMMANDE = 'currentCommande';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  panier = [];

  private currentQteSubject: BehaviorSubject<number>;
  private currentPriceTotSubject: BehaviorSubject<number>;
  private currentCartSubject: BehaviorSubject<{}>;
  
  public currentQte: Observable<number>;
  public currentPriceTot: Observable<number>;
  public currentCart: Observable<{}>;

  constructor() { 
    this.currentQteSubject = new BehaviorSubject<number>(0);
    this.currentPriceTotSubject = new BehaviorSubject<number>(0);
    this.currentCartSubject = new BehaviorSubject<{}>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART)));

    this.currentQte = this.currentQteSubject.asObservable();
    this.currentPriceTot = this.currentPriceTotSubject.asObservable();
    this.currentCart = this.currentCartSubject.asObservable();
  }

  getCart() {
    for(let prod in this.currentCartSubject.value) {
      this.panier.push(this.currentCartSubject.value[prod]);

      this.currentQteSubject.next(this.currentQteSubject.value + this.currentCartSubject.value[prod].qte);
      this.currentPriceTotSubject.next(this.currentPriceTotSubject.value + 
        (this.currentCartSubject.value[prod].qte * this.currentCartSubject.value[prod].prix));
    }    
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

    this.currentQteSubject.next(this.currentQteSubject.value + 1);
    this.currentPriceTotSubject.next(this.currentPriceTotSubject.value + produit.prix);
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(this.panier));
    this.currentCartSubject.next(this.panier);
  }

  qtemodif(add, id) {
    let operator;

    if(add == "plus") {
      operator = 1;
    }
    else {
      operator = -1;
    }

    for(let prod in this.currentCartSubject.value) {
      if(this.currentCartSubject.value[prod].id == id) {

        this.panier[prod].qte = this.panier[prod].qte + operator;
        localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(this.panier));

        this.currentQteSubject.next(this.currentQteSubject.value + operator);
        this.currentPriceTotSubject.next(this.currentPriceTotSubject.value -
          (this.currentCartSubject.value[prod].qte * this.currentCartSubject.value[prod].prix) +
          ((this.currentCartSubject.value[prod].qte + operator) * this.currentCartSubject.value[prod].prix));
      }
    }
  }

  removeCart(){
    localStorage.removeItem(LOCAL_STORAGE_CART);
    this.currentCartSubject.next(null);
    this.currentQteSubject.next(0);
    this.currentPriceTotSubject.next(0);

    this.panier = [];
  }

  saveCommande(){
    localStorage.setItem(LOCAL_STORAGE_COMMANDE, JSON.stringify(this.panier));
  }
}
