import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';
import { IaAlternateHomeComponent } from './ia-alternate-home/ia-alternate-home.component';
import { IaResolveService } from './shared/services/ia-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IaAlternateHomeComponent },
  {
    path: 'view/:place', component: IaViewTripComponent, resolve: {
      resolvedData: IaResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IaResolveService]
})
export class AppRoutingModule { }
