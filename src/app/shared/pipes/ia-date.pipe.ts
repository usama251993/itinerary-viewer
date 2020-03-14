import { Pipe, PipeTransform } from '@angular/core';
import { ITripDateOptions } from '../services/ia-trip.service';

@Pipe({
  name: 'iaDate'
})
export class IaDatePipe implements PipeTransform {

  dateOptions: ITripDateOptions;

  constructor() {
    this.dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }
  }

  transform(startDate: Date, dayIndex?: number): string {
    let currentDate = new Date(startDate);
    currentDate.setDate(new Date(startDate).getDate() + (dayIndex) ? dayIndex : 0);
    return currentDate.toLocaleDateString('en-IN', this.dateOptions);
  }

}
