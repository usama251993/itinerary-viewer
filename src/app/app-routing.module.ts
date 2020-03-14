import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';
import { IaAlternateHomeComponent } from './ia-alternate-home/ia-alternate-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IaAlternateHomeComponent },
  { path: 'view/:place', component: IaViewTripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
