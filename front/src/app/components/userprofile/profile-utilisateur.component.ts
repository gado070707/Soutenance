import { Component, OnInit, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MatSlideToggle } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupopComponent } from '../popup/popupop.component';
import { UsersService } from '../../services/users.service'
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

export interface DialogData {
}

@Component({
  selector: 'app-profile-utilisateur',
  templateUrl: './profile-utilisateur.component.html',
  styleUrls: ['./profile-utilisateur.component.scss']
})
export class ProfileUtilisateurComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  form: FormGroup;

  user: User = {} as User;

  private boutonPseudo = !false;
  private boutonNom = !false;
  private boutonEmail = !false;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
    ) {}

  ngOnInit() {
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    this.usersService.find(parseInt(id)).subscribe(
      data => {
        this.user = data;

        this.form = this.formBuilder.group({
          pseudoUser: "",
          nomUser: this.user.name,
          emailUser: this.user.mail,
        });
    });
  }
  
  @Output()
    toggleChange: EventEmitter<void>;

  @ViewChild('slide')
    matSlideToggle: MatSlideToggle;

  validerFormulaire() {
    const id = this.activeRoutes.snapshot.paramMap.get('id') || '';

    this.usersService.update(this.form.value, parseInt(id)).subscribe(
      (user: User) => {
        this.router.navigate(['/users/userprofil/'+id]);
      },
      () => {}
    );
  }

  toggleTest() {
    // this.matSlideToggle.toggle();
  }

  toogle1() {
    if (this.boutonPseudo === false) {
      this.boutonPseudo = true;
    } else {
      this.boutonPseudo = false;
    }
  }
  toogle2() {
    if (this.boutonNom === false) {
      this.boutonNom = true;
    } else {
      this.boutonNom = false;
    }
  }
  toogle3() {
    if (this.boutonEmail === false) {
      this.boutonEmail = true;
    } else {
      this.boutonEmail = false;
    }
  }

  getBoutonPseudo() {
    return this.boutonPseudo;
  }

  setBoutonPseudo(boutonPseudo) {
    this.boutonPseudo = boutonPseudo;
  }
  getBoutonNom() {
    return this.boutonNom;
  }

  setBoutonNom(boutonNom) {
    this.boutonNom = boutonNom;
  }
  getBoutonEmail() {
    return this.boutonEmail;
  }

  setBoutonEmail(boutonEmail) {
    this.boutonEmail = boutonEmail;
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


