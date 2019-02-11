import { Component, OnInit, Output, EventEmitter, ViewChild, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MatSlideToggle } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Component({
  selector: 'app-profile-utilisateur',
  templateUrl: './profile-utilisateur.component.html',
  styleUrls: ['./profile-utilisateur.component.scss']
})
export class ProfileUtilisateurComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  @Input() id;

  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  formProfilUser: FormGroup;

  user: User = {} as User;

  name: string;
  mail: string;
  returnUrl: string;

  active: boolean = false;

  formuserstatus = false;

  private boutonPseudo = !false;
  private boutonNom = !false;
  private boutonEmail = !false;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService
    ) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)));
      this.currentUser = this.currentUserSubject.asObservable();
    }

  @Output()
    toggleChange: EventEmitter<void>;

  @ViewChild('slide')
    matSlideToggle: MatSlideToggle;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.usersService.findById(parseInt(id)).subscribe(
      data => {
        this.user = data;

        this.name = this.user.name;
        this.mail = this.user.mail;

        this.formProfilUser = this.formBuilder.group({
          pseudoUser: '',
          name: this.user.name,
          mail: this.user.mail,
          password: '',
          tel: this.user.telephone,
        });
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  showformuser() {
    this.formuserstatus = !this.formuserstatus;
  }

  updateuser() {
    const id = this.route.snapshot.paramMap.get('id');

    if (this.formProfilUser.value.password == '') {
      let elements = this.formProfilUser.value;

      this.formProfilUser = this.formBuilder.group({
        name: elements.name,
        mail: elements.mail,
        telephone: elements.tel,
      });
    }

    this.usersService.update(this.formProfilUser.value, parseInt(id)).subscribe(
      (user: User) => {
        this.usersService.findById(parseInt(this.id)).subscribe(
          (user: User) => {
            window.location.reload();
          });
      },
      error => {}
    );
  }

  suppruser() {
    const id = this.route.snapshot.paramMap.get('id');

    this.formProfilUser = this.formBuilder.group({
      active: false
    });

    this.usersService.updateDelete(this.formProfilUser.value, parseInt(id)).subscribe(
      () => {
        this.authservice.logout();
        this.router.navigate(["/"]);
      },
      error => {}
    );
  }

    // popup(): void {
    //   const dialogRef = this.dialog.open(PopupComponent, {
    //     width: '250px',
    //     data: {name: this.name, animal: this.animal}
    //   });

    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.animal = result;
    //   });
    // }
  }


