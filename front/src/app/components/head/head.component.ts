import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service'
import { User } from 'src/app/models/user';
import { BehaviorSubject, Observable } from 'rxjs';

const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  appTitle = 'FIND MY TRUCK';

  private currentUserSubject: BehaviorSubject<User>;
  private user;  

  constructor(
    private authservice: AuthService,
    private usersService: UsersService,
  ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  showFiller = false;

  ngOnInit() {
    this.user = this.currentUserSubject.value.id;
  }
    
}
