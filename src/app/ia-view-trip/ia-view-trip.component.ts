import { Component, OnInit } from '@angular/core';

import { IaTripService, tripModel } from '../shared/services/ia-trip.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss']
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

  constructor(private tripService: IaTripService,
    private router: Router,
    private route: ActivatedRoute) { }

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

  showExpenses(trip: tripModel) {

  }

}

