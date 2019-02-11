import { Component, OnInit, Output, EventEmitter, ViewChild, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MatSlideToggle } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-truckownerprofile',
  templateUrl: './truckownerprofile.component.html',
  styleUrls: ['./truckownerprofile.component.scss']
})
export class TruckownerprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
