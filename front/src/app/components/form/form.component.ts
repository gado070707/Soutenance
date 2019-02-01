<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from 'src/app/models/user';
import { User } from 'src/app/models/user';
// import { UsersService } from 'src/app/services/users.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  user: User = {} as User;
  returnUrl: string;
  error: Error;
  private checkboxSocieteSiret = true;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      firstname: '',
      password: '',
      mail: '',
      tel: '',
      active: true
    });

    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if( id !== '') {
      this.usersService.find(parseInt(id)).subscribe(
        data => {
          this.user = data;

          this.form = this.formBuilder.group({
            name: this.user.name,
            firstname: this.user.firstname,
            password: this.user.password,
            mail: this.user.mail,
            tel: this.user.tel,
            active: this.user.active
          });
      });
    }

    this.returnUrl = this.activeRoutes.snapshot.queryParams['returnUrl'] || '/';
  }

  chooseFunction() {
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if ( id === '') {
      this.usersService.add(this.form.value).subscribe(
        (user: User) => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        }
      );
    } else {
      this.usersService.update(this.form.value, parseInt(id)).subscribe(
        (user: User) => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        }
      );
    }
  }
}
=======
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserPro } from 'src/app/models/userpro';
import { UsersProService } from 'src/app/services/userspro.service';
import { UsersService } from 'src/app/services/users.service';

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
  returnUrl: string;
  error: Error;
  public checkboxSocieteSiret = false;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private usersProService: UsersProService
    ) { }

  ngOnInit() {

    //// Formulaire de l'utilisateur
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
      // tslint:disable-next-line:radix
      this.usersService.find(parseInt(id)).subscribe(
        data => {
          this.user = data;

          this.formUser = this.formBuilder.group({
            name: this.user.name,
            firstname: this.user.firstname,
            password: this.user.password,
            mail: this.user.mail,
            tel: this.user.tel,
            active: this.user.active,
          });
        });
    }

    //// Formulaire du food truck
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
            textSociete: this.user.textSociete,
            textSiret: this.user.textSiret,
            name: this.user.name,
            firstname: this.user.firstname,
            password: this.user.password,
            mail: this.user.mail,
            tel: this.user.tel,
            active: this.user.active,
          });
        });
    }
    this.returnUrl = this.activeRoutes.snapshot.queryParams['returnUrl'] || '/';
  }

functionUser() {
  const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

  if (id === '') {
    this.usersService.add(this.formUser.value).subscribe(
      (user: User) => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
      }
    );
  } else {
    // tslint:disable-next-line:radix
    this.usersService.update(this.formUser.value, parseInt(id)).subscribe(
      (user: User) => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
      }
    );
  }
}

foodTruck() {
  const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

  if (id === '') {
    this.usersProService.add(this.formFoodTruck.value).subscribe(
      (user: User) => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
      }
    );
  } else {
    // tslint:disable-next-line:radix
    this.usersProService.update(this.formFoodTruck.value, parseInt(id)).subscribe(
      (userPro: UserPro) => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
      }
    );
  }
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

  // getStyle() {
  //     if (!this.getCheckbox()) {

  //     document.getElementById('labelSiret').style.display = 'block';
  //     document.getElementById('labelSociete').style.display = 'block';
  //     document.getElementById('inputSiret').style.display = 'block';
  //     document.getElementById('inputSociete').style.display = 'block';
  //     document.getElementById('inputmffsiret').style.display = 'block';
  //     document.getElementById('inputmffsociete').style.display = 'block';
  //   } else {
  //     document.getElementById('labelSiret').style.display = 'none';
  //     document.getElementById('labelSociete').style.display = 'none';
  //     document.getElementById('inputSiret').style.display = 'none';
  //     document.getElementById('inputSociete').style.display = 'none';
  //     document.getElementById('inputmffsiret').style.display = 'none';
  //     document.getElementById('inputmffsociete').style.display = 'none';
  //   }
  // }
}
>>>>>>> rudy
