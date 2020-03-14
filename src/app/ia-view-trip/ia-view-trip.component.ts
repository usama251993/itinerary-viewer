import { Component, OnInit, ViewChild } from '@angular/core';

import { IaTripService, ITripModel, ITripAssetsModel } from '../shared/services/ia-trip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MatTabGroup } from '@angular/material';
import { IaViewDialog } from './ia-view-dialog';


@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss'],
})

export class IaViewTripComponent implements OnInit {

  @ViewChild('tabGroup', { static: true }) matTabGroup: MatTabGroup;

  newTrip: ITripModel;
  roomValues: { [key: string]: string };
  tripAssets: ITripAssetsModel;
  bIsDataLoaded: boolean;
  dialogRef: MatDialogRef<IaViewDialog>;

  // SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tripService: IaTripService) { }

  ngOnInit(): void {
    this.bIsDataLoaded = false
    this.roomValues = {};

    let sAssetsURL = './assets/components/tripAssets.json';
    this.tripService.getAssets(sAssetsURL).pipe().subscribe((assetsData: ITripAssetsModel) => {
      this.tripAssets = assetsData;
      this.tripAssets.options.forEach((roomOption) => {
        this.roomValues[roomOption.key] = roomOption.text;
      });
    });

    let planString: string = '';
    planString = this.tripService.planString;

    if (planString === '') {
      this.router.navigate(['../../' + 'home'], { relativeTo: this.route });
    } else {
      let sResourceURL = './assets/tripData/' + planString + '.json'
      this.tripService.getResource(sResourceURL).pipe().subscribe((tripData: ITripModel) => {
        this.newTrip = tripData;
        this.bIsDataLoaded = true;
      });
    }
  }

  otherDetails(): void {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.closeOnNavigation = true;
    // dialogConfig.data = this.newTrip.miscellaneous;
    // dialogConfig.minWidth = '320px';
    // dialogConfig.width = '100vw';

    // this.dialogRef = this.dialog.open(IaViewDialog, dialogConfig);

    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.dialogRef = null;
    // });
    console.log('Details disabled for now');

  }

  mapToLocation(mapCode: string): void {
    if (mapCode !== undefined) {
      console.log(mapCode);
    }
  }

  swipe(): void {
    // console.log(matTabGroup, eventData);
  }

}
