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
    private usersService: UsersService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      firstname: '',
      password: '',
      mail: '',
      tel: '',
      active: true,
      textSociete: '',
      textSiret: '',
    });

    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if ( id !== '') {
      // tslint:disable-next-line:radix
      this.usersService.find( parseInt(id)).subscribe(
        data => {
          this.user = data;

          this.form = this.formBuilder.group({
            name: this.user.name,
            firstname: this.user.firstname,
            password: this.user.password,
            mail: this.user.mail,
            tel: this.user.tel,
            active: this.user.active,
            textSociete: this.user.textSociete,
            textSiret: this.user.textSiret
          });
      });
    }

    this.returnUrl = this.activeRoutes.snapshot.queryParams['returnUrl'] || '/';
  }

  chooseFunction() {
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if (id === '' ) {
      this.usersService.add(this.form.value).subscribe(
        (user: User) => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        }
      );
    } else {
      // tslint:disable-next-line:radix
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

  getStyle() {
    if (!this.getCheckbox()) {
      document.getElementById('labelSociete').style.display = 'block';
      document.getElementById('labelSiret').style.display = 'block';
    } else {
      document.getElementById('labelSociete').style.display = 'none';
      document.getElementById('labelSiret').style.display = 'none';
    }
  }
}
