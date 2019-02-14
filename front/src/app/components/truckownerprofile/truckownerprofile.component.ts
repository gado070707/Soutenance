import { Component, OnInit, Output, EventEmitter, ViewChild, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
// import { MatSlideToggle } from '@angular/material';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { TrucksService } from '../../services/trucks.service';
import { Truck } from 'src/app/models/truck';
import { Truckowner } from 'src/app/models/truckowner';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TrucksOwnerService } from 'src/app/services/truckowner.service';

@Component({
  selector: 'app-truckownerprofile',
  templateUrl: './truckownerprofile.component.html',
  styleUrls: ['./truckownerprofile.component.scss']
})
export class TruckownerprofileComponent implements OnInit {

  currentUser: User;
  states = {
    userForm: false,
    addTruckForm: false,
    cardTruckForm: false,
    editTruckForm: false,
    addTruckProdForm: false,
    editTruckProdForm: false    
  };

  user: User = {} as User;
  trucks: Truck[] = [];
  truck: Truck = {} as Truck;
  truckOwner: Truckowner = {} as Truckowner;
  formProfilUser: FormGroup;
  formAddTruck: FormGroup;
  formEditTruck: FormGroup;
  truckEditId: number = 0;
  returnUrl: string;
  prec: string = "Non";
  prep: string = "Non";

  constructor(
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private usersService: UsersService,
    private trucksService: TrucksService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService,
    private truckownerService: TrucksOwnerService
  ) {
    this.authservice.currentUser.subscribe(user => this.currentUser = user)
   }

  ngOnInit() {
    //  Remplissage des formulaires
    this.usersService.findById(this.currentUser.id).subscribe(
      data => { 
        this.user = data;

        this.formProfilUser = this.formBuilder.group({
          pseudoUser: '',
          name: this.user.name,
          mail: this.user.mail,
          password: '',
          tel: this.user.telephone,
        });
    });

    this.formAddTruck = this.formBuilder.group({
      nametruck: "",
      precom: "",
      prepaie: "",
      logotruck: "",
      imgtruck: "",
      txttruck: "",
    });

    this.formEditTruck = this.formBuilder.group({
      nametruck: "",
      precom: "",
      prepaie: "",
      logotruck: "",
      imgtruck: "",
      txttruck: "",
    });

    this.trucksService.allByOwner(this.currentUser.id).subscribe(
      data => {
        this.trucks = data;

        let i = 0;

        for(let truck in this.trucks) {
          if(this.trucks[truck].precommande) {
            this.prec = "Oui";
          }
          
          if(this.trucks[truck].paiement){
            this.prep = "Oui";
          }

          this.trucks[i]['prec'] = this.prec;
          this.trucks[i]['prep'] = this.prep;

          i++;
        }
    });
    

    //  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  editStatus(element) {
    for(let state in this.states) {
      if(state != element) {
        this.states[state] = false;
      }
      else if(state == element  &&  this.states[state] == true) {
        this.states[state] = false;
      }
      else {
        this.states[state] = true;
      }
    }
  }

  addTruck(){
    this.formAddTruck.value['truckowner'] = this.currentUser.id;

    if(this.formAddTruck.value.precom == ""){
      this.formAddTruck.value.precom = false;
    }

    if(this.formAddTruck.value.prepaie == ""){
      this.formAddTruck.value.prepaie = false;
    }

    this.trucksService.add(this.formAddTruck.value).subscribe(
        data => { 
          this.states.addTruckForm = false;
          this.trucksService.allByOwner(this.currentUser.id).subscribe(
            data => {
              this.trucks = data;

              let i = 0;

              for(let truck in this.trucks) {
                if(this.trucks[truck].precommande) {
                  this.prec = "Oui";
                }
                
                if(this.trucks[truck].paiement){
                  this.prep = "Oui";
                }

                this.trucks[i]['prec'] = this.prec;
                this.trucks[i]['prep'] = this.prep;

                i++;
              }
          });
        },
        err => {}
    );
  }

  getTruck(id){
    this.trucksService.find(id).subscribe(
      data => {
        this.truck = data
        this.truckEditId = id;
        this.formEditTruck = this.formBuilder.group({
          nametruck: this.truck.name,
          precom: this.truck.precommande,
          prepaie: this.truck.paiement,
          logotruck: this.truck.logo,
          imgtruck: this.truck.image,
          txttruck: this.truck.histoire,
        });
      },
      err => {}
    );
  }

  editTruck(id) {
    this.formEditTruck.value['truckowner'] = this.currentUser.id;

    if(this.formEditTruck.value.precom == ""){
      this.formEditTruck.value.precom = false;
    }

    if(this.formEditTruck.value.prepaie == ""){
      this.formEditTruck.value.prepaie = false;
    }

    this.trucksService.update(this.formEditTruck.value, id).subscribe(
        data => {
          this.states.editTruckForm = false;
          this.trucksService.allByOwner(this.currentUser.id).subscribe(
            data => {
              this.trucks = data;

              let i = 0;

              for(let truck in this.trucks) {
                if(this.trucks[truck].precommande) {
                  this.prec = "Oui";
                }
                
                if(this.trucks[truck].paiement){
                  this.prep = "Oui";
                }

                this.trucks[i]['prec'] = this.prec;
                this.trucks[i]['prep'] = this.prep;

                i++;
              }
          });
        },
        err => {}
    );
  }

  updateuser() {
    if (this.formProfilUser.value.password == '') {
      let elements = this.formProfilUser.value;

      this.formProfilUser = this.formBuilder.group({
        name: elements.name,
        mail: elements.mail,
        telephone: elements.tel,
      });
    }

    this.usersService.update(this.formProfilUser.value, this.currentUser.id).subscribe(
      (user: User) => {
        this.user = this.formProfilUser.value;
        this.states.userForm = false;
        this.usersService.findById(this.currentUser.id).subscribe(
          (user: User) => {
            this.authservice.updateUser(user);
          }
        );
      },
      error => {}
    );
  }

  suppruser() {
    this.formProfilUser = this.formBuilder.group({
      active: false
    });

    this.usersService.updateDelete(this.formProfilUser.value, this.currentUser.id).subscribe(
      () => {
        this.authservice.logout();
        this.router.navigate(["/"]);
      },
      error => {}
    );
  }

}
