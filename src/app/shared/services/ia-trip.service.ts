import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

export interface ITripModel {
  tripStart: {
    sourceCity: string,
    startDate: Date,
  }
  days: {
    places: {
      name: string,
      attractions?: {
        name: string,
        location?: {
          label: string,
          map?: string
        },
        descriptions?: string[]
      }[],
      stays?: {
        name: string,
        location?: {
          label: string,
          map?: string
        },
        contacts: string[],
        rooms: {
          type: string,
          cost: number
        }[]
      }
    }[]
  }[],
  miscellaneous: {
    flights?: {},
    hotels?: {},
    transition?: {}
  }
}

export interface ITripDateOptions {
  year: string,
  month: string,
  day: string,
  weekday: string
}

export interface ITripSelectOption {
  key: string,
  text?: string,
  value?: number
}

export interface ITripAssetsModel {
  dateOptions?: ITripDateOptions,
  options?: ITripSelectOption[],
  displayedColumns?: ['type', 'cost']
}

@Injectable({
  providedIn: 'root'
})
export class IaTripService {

  newTrip: ITripModel;
  tripAssets: ITripAssetsModel;
  planString: string = '';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<string> {

    if (error.error instanceof ErrorEvent) {
      console.log('Client Network Error!');
      console.error(error.error.message);
    } else {
      console.log('Server Error!');
      console.error(error.error);
    }

    return throwError('Unknown Error!');
  }

  getResource(sResourceURL: string): Observable<any> {
    return this.http.get<any>(sResourceURL, { observe: 'body' }).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAssets(sAssetURL: string): Observable<any> {
    return this.http.get<any>(sAssetURL, { observe: 'body' }).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}

