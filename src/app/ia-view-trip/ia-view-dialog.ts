import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IaViewTripComponent } from './ia-view-trip.component';
import { IaTripService } from '../shared/services/ia-trip.service';

@Component({
  templateUrl: './ia-view-dialog.html',
  styleUrls: ['./ia-view-dialog.scss'],
})

export class IaViewDialog implements OnInit {

  tripDetails: {};

  constructor(
    public dialogRef: MatDialogRef<IaViewTripComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: {},
  ) { }

  ngOnInit(): void {
    this.tripDetails = this.dialogData;
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  getDate(dateString: string): string {
    let inputDate = new Date(dateString);
    return inputDate.toLocaleDateString('en-in', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  getTime(dateString: string): string {
    let inputDate = new Date(dateString);
    return inputDate.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: false });
  }

  getDuration(flightDuration: number): string {
    return Math.floor((flightDuration / 60)) + 'h ' + (flightDuration % 60) + 'm';
  }

}