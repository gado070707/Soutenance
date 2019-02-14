import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserPro } from 'src/app/models/userpro';
import { Truckowner } from 'src/app/models/truckowner';
import { UsersProService } from 'src/app/services/userspro.service';
import { UsersService } from 'src/app/services/users.service';
import { TrucksOwnerService } from 'src/app/services/truckowner.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private formUser: FormGroup;
  private formFoodTruck: FormGroup;
  user: User = {} as User;
  userPro: UserPro = {} as UserPro;
  truckOwner: Truckowner = {} as Truckowner;
  returnUrl: string;

  public checkboxSocieteSiret = false;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private usersProService: UsersProService,
    private truckownerService: TrucksOwnerService
    ) { }

  ngOnInit() {
//    Formulaire de l'utilisateur
    this.formUser = this.formBuilder.group({
      name: '',
      firstname: '',
      password: '',
      mail: '',
      tel: '',
      active: true,
    });

    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if (id !== '') {
      this.usersService.findById(parseInt(id)).subscribe(
        data => {
          this.user = data;

          this.formUser = this.formBuilder.group({
            name: this.user.name,
            firstname: this.user.firstname,
            password: this.user.password,
            mail: this.user.mail,
            tel: this.user.telephone,
            active: this.user.active,
            role: this.user.role,
          });
        });
    }

//    Formulaire du food truck

    this.formFoodTruck = this.formBuilder.group({
      textSociete: '',
      textSiret: '',
      name: '',
      firstname: '',
      password: '',
      mail: '',
      tel: '',
      active: true,
    });
    if (id !== '') {
      // tslint:disable-next-line:radix
      this.usersProService.find(parseInt(id)).subscribe(
        data => {
          this.userPro = data;
          this.formFoodTruck = this.formBuilder.group({
            textSociete: this.userPro.society,
            textSiret: this.userPro.siret,
            name: this.userPro.name,
            firstname: this.userPro.firstname,
            password: this.userPro.password,
            mail: this.userPro.email,
            tel: this.userPro.tel,
            active: this.userPro.active,
          });
      });
    }
    this.returnUrl = this.activeRoutes.snapshot.queryParams['returnUrl'] || '/';
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //// Route de l'utilisateur
functionUser(numRole) {
  const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

  if (id === '') {

    this.formUser.value['role'] = numRole;

    this.usersService.add(this.formUser.value).subscribe(
      (user: User) => {
        this.router.navigate([this.returnUrl]);
      },
      error => {}
    );
  } else {
    this.usersService.update(this.formUser.value, parseInt(id)).subscribe(
      (user: User) => {
        this.router.navigate([this.returnUrl]);
      },
      error => {}
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Route de du foodtruck
  foodTruck(numRole) {
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if (id === '') {
      this.formFoodTruck.value['role'] = numRole;

      this.usersProService.add(this.formFoodTruck.value).subscribe(
        (user: UserPro) => {
          this.formFoodTruck.value['id'] = user.id;
          this.truckownerService.add(this.formFoodTruck.value).subscribe(
            (truckOwner: Truckowner) => {  
              this.router.navigate([this.returnUrl]);
            });
        },
        error => {}
      );
    } else {
      // tslint:disable-next-line:radix
      this.usersProService.update(this.formFoodTruck.value, parseInt(id)).subscribe(
        (userPro: UserPro) => {
          this.router.navigate([this.returnUrl]);
        },
        error => {}
      );
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Fonction toogle
  changeRole(num) {
    console.log(num)
  }

  societe() {
    if (this.getCheckbox() === false) {
      this.setCheckbox(true);
    } else {
      this.setCheckbox(false);
    }
  }

  getCheckbox(): boolean {
    return this.checkboxSocieteSiret;
  }

  setCheckbox(checkboxSocieteSiret: boolean) {
    this.checkboxSocieteSiret = checkboxSocieteSiret;
  }
}