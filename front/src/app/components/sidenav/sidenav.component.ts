import {Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service'
import { User } from 'src/app/models/user';
import { BehaviorSubject, Observable } from 'rxjs';

const LOCAL_STORAGE_USER_KEY = 'currentItem';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SidenavComponent {
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

