import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser: User;

  role: Number;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private authservice: AuthService
  ) {
    this.authservice.currentUser.subscribe(user => this.currentUser = user)
   }

  ngOnInit() {
    this.role = this.currentUser.role; 
  }

}
