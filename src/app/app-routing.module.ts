import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';
import { IaAlternateHomeComponent } from './ia-alternate-home/ia-alternate-home.component';

const routes: Routes = [

  // For Deployment
  { path: "", redirectTo: "home", pathMatch: "full" },

  //For Deployment
  { path: "view", component: IaViewTripComponent },
  { path: "home", component: IaAlternateHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
