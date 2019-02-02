import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormComponent } from './components/form/form.component';
import { TrucklistComponent } from './components/trucks/trucklist/trucklist.component';
import { TruckdetailsComponent } from './components/trucks/truckdetails/truckdetails.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileUtilisateurComponent } from './components/userprofile/profile-utilisateur.component';
import { PopupopComponent } from './components/popup/popupop.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    ConnexionComponent,
    FormComponent,
    TrucklistComponent,
    TruckdetailsComponent,
    SidenavComponent,
    ProfileUtilisateurComponent,
    PopupopComponent,
    AccueilComponent,
    MapComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatDialogModule,
    AgmCoreModule.forRoot({'apiKey': 'AIzaSyAJPAVVutBcSJld0TDDIeRSkEhNLyKQfvI'}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
