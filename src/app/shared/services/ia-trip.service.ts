import { Injectable } from '@angular/core';

export interface tripModel {
  tripStart: {
    sourceCity: string,
    startDate: Date,
  }
  days: {
    places: {
      name: string,
      attractions?: {
        name: string,
        location?: string,
        description?: string
      }[],
      stays?: {
        name: string,
        location?: string,
        contacts: string[],
        rooms: {
          type: string,
          cost: number
        }[]
      }
    }[]
  }[],
  miscellaneous: {
    flights?: {
    },
    hotels?: {
    },
    transition?: {
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class IaTripService {

  displayedColumns: string[] = ['type', 'cost'];
  dateOptions: {} = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  newTrip: tripModel = {} as tripModel;
  roomOptions: { optionValue: string, optionText: string }[] = [
    { optionValue: 'single', optionText: 'Single Occupancy' },
    { optionValue: 'double', optionText: 'Double Occupancy' },
    { optionValue: 'multiple', optionText: 'Multiple Occupancy' },
    { optionValue: 'dormitory', optionText: 'Dormitory' },
    { optionValue: 'perhead', optionText: 'Cost Per Person' },
    { optionValue: 'advance', optionText: 'Advance Paid' },
    { optionValue: 'total', optionText: 'Total Amount' },
    { optionValue: 'balance', optionText: 'Balance Amount' },
    { optionValue: 'others', optionText: 'Others' }
  ];
  expensesOptions = [
    { optionValue: 'individual', optionText: 'Cost paid individually' },
    { optionValue: 'total', optionText: 0 },
    { optionValue: 'advance', optionText: 0 },
    { optionValue: 'perhead', optionText: 0 },
    { optionValue: 'balance', optionText: 0 },
  ]
  planString: string = '';

  constructor() { }
}

