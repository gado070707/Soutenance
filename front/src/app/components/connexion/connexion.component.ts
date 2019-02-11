import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  returnUrl: string;
  error: Error;
  badPassword = true;
  test = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.connexionForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status.
    this.authService.logout();

    // Get return url form route parameters or default to '/'.
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.connexionForm.controls;
  }

  isGoodPassword() {
    // console.log(this.connexion());
    const a = this.connexion();
    // console.log(a['isStopped']);
    return a;
  }

  connexion() {
    this.authService.login(this.form.mail.value, this.form.password.value)
      .pipe(first()).subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          //window.location.reload();
          
        },
        err => {
          this.setBadPassword(false);
          this.erreurDeLogin();
          this.error = err.error.message;
        }
    );
  }

  erreurDeLogin() {
    return this.getBadPassword();
  }

  getBadPassword() {
    return this.badPassword;
  }
  setBadPassword(badPassword: boolean) {
    return this.badPassword = badPassword;
  }
}
