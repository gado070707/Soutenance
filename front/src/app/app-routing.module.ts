import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormComponent } from './components/form/form.component';
import { TruckdetailsComponent } from './components/trucks/truckdetails/truckdetails.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AccueilComponent } from './components/accueil/accueil.component';

import { WithCredentialInterceptor } from './helpers/with-credentials.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { BasketComponent } from './components/basket/basket.component';
import { PremierFoodTruckComponent } from './components/trucks/listeDeTrucks/premier-food-truck/premier-food-truck.component';
import { DeuxiemeFoodTruckComponent } from './components/trucks/listeDeTrucks/deuxieme-food-truck/deuxieme-food-truck.component';
import { TroisiemeFoodTruckComponent } from './components/trucks/listeDeTrucks/troisieme-food-truck/troisieme-food-truck.component';
import { QuatriemeFoodTruckComponent } from './components/trucks/listeDeTrucks/quatrieme-food-truck/quatrieme-food-truck.component';
import { CinquiemeFoodTruckComponent } from './components/trucks/listeDeTrucks/cinquieme-food-truck/cinquieme-food-truck.component';
import { SixiemeFoodTruckComponent } from './components/trucks/listeDeTrucks/sixieme-food-truck/sixieme-food-truck.component';

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
  { path: 'trucks/details', component: TruckdetailsComponent },
  { path: 'trucks/commande', canActivate: [AuthGuard], component: TruckdetailsComponent },
  { path: 'trucks/foodtruck/premier', component: PremierFoodTruckComponent },
  { path: 'trucks/foodtruck/deuxieme', component: DeuxiemeFoodTruckComponent },
  { path: 'trucks/foodtruck/troisieme', component: TroisiemeFoodTruckComponent },
  { path: 'trucks/foodtruck/quatrieme', component: QuatriemeFoodTruckComponent },
  { path: 'trucks/foodtruck/cinquieme', component: CinquiemeFoodTruckComponent },
  { path: 'trucks/foodtruck/sixieme', component: SixiemeFoodTruckComponent },
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
