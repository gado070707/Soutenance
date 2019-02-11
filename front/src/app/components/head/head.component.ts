import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit {
  appTitle = 'FIND MY TRUCK';

  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService
  ) { 
      this.authservice.currentUser.subscribe(user => this.currentUser = user)
   }

  ngOnInit() {

  }
    
  logout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }
}
