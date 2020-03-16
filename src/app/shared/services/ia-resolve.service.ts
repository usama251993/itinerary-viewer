import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IaTripService, ITripModel, ITripAssetsModel } from './ia-trip.service';

@Injectable({
  providedIn: 'root'
})
export class IaResolveService implements Resolve<Observable<any>> {

  constructor(
    private tripService: IaTripService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<{ tripData: ITripModel | string, tripAsset: ITripAssetsModel | string }> {

    return forkJoin([
      this.tripService.getResource('./assets/tripData/' + route.params['place'] + '.json'),
      this.tripService.getAssets('./assets/components/tripAssets.json')
    ]).pipe(
      map((responses: [ITripModel | string, ITripAssetsModel | string]) => {
        return {
          tripData: responses[0],
          tripAsset: responses[1]
        }
      })
    );
  }

}
