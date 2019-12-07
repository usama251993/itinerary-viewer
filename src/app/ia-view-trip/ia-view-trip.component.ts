import { Component, OnInit } from '@angular/core';

import { IaTripService, tripModel } from '../shared/services/ia-trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { IaViewDialog } from './ia-view-dialog';


@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss'],
})

export class IaViewTripComponent implements OnInit {

  newTrip: tripModel = {} as tripModel;
  dateOptions: {} = {};
  roomOptions: { optionValue: string, optionText: string }[] = [];
  roomValues: {} = {};
  expensesOptions: { optionValue: string, optionText: string }[] = [];
  expensesValues: {} = {};
  today: Date = new Date(Date.now());
  displayedColumns: string[] = [];

  dialogRef: MatDialogRef<IaViewDialog>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tripService: IaTripService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.roomOptions = this.tripService.roomOptions;

    this.roomOptions.forEach((roomOption) => {
      this.roomValues[roomOption.optionValue] = roomOption.optionText;
    });

    let planString: string = '';
    planString = this.tripService.planString;

    if (planString === '') {
      this.router.navigate(['../' + 'home'], { relativeTo: this.route });
    } else {
      let xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.newTrip = JSON.parse(xhr.responseText);
          this.dateOptions = this.tripService.dateOptions;
          this.displayedColumns = this.tripService.displayedColumns;
        }
      }, false);
      xhr.open('GET', './assets/data/upload/Plan ' + planString + '.json', true);
      xhr.send(null);
    }
  }

  getCurrentDate(startDate: Date, dayIndex: number): string {
    let currentDate = new Date(startDate);
    currentDate.setDate(new Date(startDate).getDate() + dayIndex);
    return currentDate.toLocaleDateString('en-IN', this.dateOptions);
  }

  otherDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = this.newTrip.miscellaneous;
    dialogConfig.minWidth = '320px';
    dialogConfig.width = '100vw';

    this.dialogRef = this.dialog.open(IaViewDialog, dialogConfig);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

}
