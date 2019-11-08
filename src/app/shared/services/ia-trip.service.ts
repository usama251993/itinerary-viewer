import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IaTripService {

  displayedColumns: string[] = ["type", "cost"];
  tripURL: string = "assets\\data\\generated\\trip 2019-06-14T11_20_13.689Z.json";
  dateOptions: {} = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  export: { fileURI: string, fileName: string } = { fileURI: "", fileName: "trip " + new Date(Date.now()).toISOString() + ".json" };
  newTrip: {} = { tripStart: { sourceCity: "", startDate: new Date(Date.now()) }, days: [] };
  editFlag: boolean = false;

  planString: string = '';

  constructor() { }

  getTrip() {
    return this.newTrip;
  }

  createNewTrip(formData: FormData): void {
    this.newTrip = formData;
  }
}

