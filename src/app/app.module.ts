import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatListModule,
  MatExpansionModule,
  MatTableModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IaHeaderComponent } from './ia-header/ia-header.component';
import { IaAlternateHomeComponent } from './ia-alternate-home/ia-alternate-home.component';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';

import { IaTripService } from './shared/services/ia-trip.service';

@NgModule({
  declarations: [
    AppComponent,
    IaHeaderComponent,
    IaViewTripComponent,
    IaAlternateHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [
    IaTripService,
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
