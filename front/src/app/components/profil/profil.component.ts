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

  role: Number;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.activeRoutes.snapshot.paramMap.get('id');

    this.usersService.findById(parseInt(id)).subscribe(
      data => { console.log(id)
        this.user = data;
        this.role = this.user.role;
    }); 
  }

}
