import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPro } from 'src/app/models/userpro';
import { UsersProService } from 'src/app/services/userspro.service';

@Component({
  selector: 'app-register',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  userpro: UserPro = {} as UserPro;
  returnUrl: string;
  error: Error;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private router: Router,
    private usersProService: UsersProService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      society:'',
      truckname:'',
      siret: '',
      name: '',
      fistname: '',
      password: '',
      email: '',
      tel: '',
      active: true
    });

    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if(id !== "") {
      this.usersProService.find(parseInt(id)).subscribe(
        data => {
          this.userpro = data;
          
          this.form = this.formBuilder.group({
            society: this.userpro.society,
            // truckname: this.userpro.truckname,
            siret: this.userpro.siret,
            name: this.userpro.name,
            firstname: this.userpro.firstname,
            password: this.userpro.password,
            email: this.userpro.email,
            tel: this.userpro.tel,
            active: this.userpro.active
          });
      });      
    }

    this.returnUrl = this.activeRoutes.snapshot.queryParams['returnUrl'] || '/';
  }

  chooseFunction(){
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    if(id === "") {
      this.usersProService.add(this.form.value).subscribe( 
        (userpro: UserPro) => { console.log("ok form comp");
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        }
      );
    }
    else {
      this.usersProService.update(this.form.value, parseInt(id)).subscribe(
        (userpro: UserPro) => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        }
      );
    }
  }
}
