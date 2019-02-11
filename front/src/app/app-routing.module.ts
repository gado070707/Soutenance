import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormComponent } from './components/form/form.component';
import { TruckdetailsComponent } from './components/trucks/truckdetails/truckdetails.component';
import { TrucklistComponent } from './components/trucks/trucklist/trucklist.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AccueilComponent } from './components/accueil/accueil.component';

import { WithCredentialInterceptor } from './helpers/with-credentials.interceptor';
import { AuthGuard } from './guards/auth.guard';

const routes: Route[] = [
  { path: '', component: AccueilComponent},
  { path: 'form', component: FormComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'user',
    canActivate: [AuthGuard],
    children: [
      { path: 'profil', component: ProfilComponent},
        // { path: 'list', component: ListComponent, },
        // { path: 'add', component: AddComponent },
        // { path: ':id', component: DetailsComponent },
    ]
  },
  { path: 'trucks/list', component: TrucklistComponent },
  { path: 'trucks/details', component: TruckdetailsComponent },
  { path: 'trucks/commande', canActivate: [AuthGuard], component: TruckdetailsComponent },
  // { path: 'trucks',
  //   component: MainNavComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: 'list', component: TrucklistComponent, },
  //   ]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
