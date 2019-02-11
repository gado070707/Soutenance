import { Component, OnInit, Output, EventEmitter, ViewChild, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
// import { MatSlideToggle } from '@angular/material';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { TrucksService } from '../../services/trucks.service';
import { Truck } from 'src/app/models/truck';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-truckownerprofile',
  templateUrl: './truckownerprofile.component.html',
  styleUrls: ['./truckownerprofile.component.scss']
})
export class TruckownerprofileComponent implements OnInit {

  currentUser: User;
  states = {
    userForm: false,
    truckForm: false,
    editTruckForm: false
  };
  user: User = {} as User;
  trucks: Truck[] = [];
  formProfilUser: FormGroup;
  formAddTruck: FormGroup;
  returnUrl: string;
  name: string;
  mail: string;

  constructor(
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private usersService: UsersService,
    private trucksService: TrucksService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService
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

    this.trucksService.findById(this.currentUser.id).subscribe(
      data => {
        this.trucks = data;
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
