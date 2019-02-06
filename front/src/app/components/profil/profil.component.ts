import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  form: FormGroup;
  user: User = {} as User;

  id: Number;
  role: Number;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
  ) { }

  ngOnInit() {
    const username = this.activeRoutes.snapshot.paramMap.get('name') || '';

    this.usersService.findByName(username).subscribe(
      data => {
        this.user = data;

        this.id = this.user.id;
        this.role = this.user.role;
    }); 
  }

}
