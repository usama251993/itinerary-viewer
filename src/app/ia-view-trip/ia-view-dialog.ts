import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IaViewTripComponent } from './ia-view-trip.component';

@Component({
  templateUrl: './ia-view-dialog.html',
  styleUrls: ['./ia-view-dialog.scss'],
})

export class IaViewDialog implements OnInit {

  tripDetails: {};

  constructor(
    public dialogRef: MatDialogRef<IaViewTripComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: {}
  ) { }

  ngOnInit(): void {
    this.tripDetails = this.dialogData;
    console.log(this.tripDetails);

  }

  closeDialog(): void {
    this.dialogRef.close()
  }

}