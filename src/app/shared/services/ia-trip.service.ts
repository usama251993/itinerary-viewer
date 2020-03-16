import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  handleError(error: HttpErrorResponse): Observable<string> {

    if (error.error instanceof ErrorEvent) {
      console.log('Client Network Error!');
      console.error(error.error.message);
    } else {
      console.log('Server Error!');
      console.log('Unable to fetch data at : ' + error.url);
      console.log('Redirecting to home page')
      this.router.navigate(['/home']);
    }
    return throwError('Unknown Error!');
  }

  getResource(sResourceURL: string): Observable<ITripModel | string> {
    return this.http.get<ITripModel>(sResourceURL, { observe: 'body' }).pipe(
      map((response: ITripModel) => response),
      retry(2),
      catchError(this.handleError)
    );
  }

  getAssets(sAssetURL: string): Observable<ITripAssetsModel | string> {
    return this.http.get<ITripAssetsModel>(sAssetURL, { observe: 'body' }).pipe(
      map((response: ITripAssetsModel) => response),
      retry(2),
      catchError(this.handleError)
    );
  }

}

