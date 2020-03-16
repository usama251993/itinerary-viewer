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
  MatDialogModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { IaHeaderComponent } from './ia-header/ia-header.component';
import { IaAlternateHomeComponent } from './ia-alternate-home/ia-alternate-home.component';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';

import { IaTripService } from './shared/services/ia-trip.service';
import { IaViewDialog } from './ia-view-trip/ia-view-dialog';
import { IaDatePipe } from './shared/pipes/ia-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IaHeaderComponent,
    IaViewTripComponent,
    IaAlternateHomeComponent,
    IaViewDialog,
    IaDatePipe
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
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    IaTripService,
  ],
  entryComponents: [
    IaViewDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
