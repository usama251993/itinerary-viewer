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
    let offsetDate = (dayIndex === undefined) ? 0 : dayIndex;
    currentDate.setDate(new Date(startDate).getDate() + offsetDate);
    return currentDate.toLocaleDateString('en-IN', this.dateOptions);
  }

}
