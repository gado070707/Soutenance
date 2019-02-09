import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user';

const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit {
  appTitle = 'FIND MY TRUCK';

  id: Number;

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private authservice: AuthService) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)));
   }

  ngOnInit() {
    this.id = this.currentUserSubject.value.id;
  }
    
}
