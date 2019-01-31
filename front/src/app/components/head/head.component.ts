import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  appTitle = 'FIND MY TRUCK';

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
    
}
