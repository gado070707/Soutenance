import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WithCredentialInterceptor } from './helpers/with-credentials.interceptor';
import { AuthGuard } from './guards/auth.guard';

import { BasketComponent } from './components/basket/basket.component';
import { PremierFoodTruckComponent } from './components/trucks/listeDeTrucks/premier-food-truck/premier-food-truck.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormComponent } from './components/form/form.component';
import { TruckdetailsComponent } from './components/trucks/truckdetails/truckdetails.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CommandeComponent } from './components/commande/commande.component';

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
  { path: 'trucks/details/:id', component: TruckdetailsComponent },
  { path: 'trucks/commande', canActivate: [AuthGuard], component: TruckdetailsComponent },
  { path: 'commander', canActivate: [AuthGuard], component: CommandeComponent },
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
