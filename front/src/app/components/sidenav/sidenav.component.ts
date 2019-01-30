import {Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SidenavComponent {

  constructor(private authservice: AuthService) { }

  showFiller = false;
}

