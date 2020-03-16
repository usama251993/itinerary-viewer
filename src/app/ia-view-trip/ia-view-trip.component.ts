import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

import { ITripModel, ITripAssetsModel } from '../shared/services/ia-trip.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MatTabGroup, MatTabChangeEvent } from '@angular/material';
import { IaViewDialog } from './ia-view-dialog';


@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss'],
})

export class IaViewTripComponent implements OnInit {

  @ViewChild('tabGroup', { static: true }) matTabGroup: MatTabGroup;

  tripData: ITripModel;
  roomValues: { [key: string]: string };
  tripAssets: ITripAssetsModel;
  bIsDataLoaded: boolean;
  dialogRef: MatDialogRef<IaViewDialog>;

  tabLabelContainer: Element;
  // SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2) { }

  ngOnInit(): void {

    this.roomValues = {};

    this.route.data.subscribe((guardObject: { resolvedData: { tripData: ITripModel, tripAsset: ITripAssetsModel } }) => {
      this.tripData = guardObject.resolvedData.tripData;
      this.tripAssets = guardObject.resolvedData.tripAsset;
      this.tripAssets.options.forEach((roomOption) => {
        this.roomValues[roomOption.key] = roomOption.text;
      });
    });

  }

  otherDetails(): void {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.closeOnNavigation = true;
    // dialogConfig.data = this.tripData.miscellaneous;
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

  doNothing(tabGroupElement: MatTabGroup): void {
    // let matTabList = (tabGroupElement._elementRef.nativeElement as HTMLElement).querySelectorAll('mat-tab-header mat-tab-label-container mat-tab-list')[0]
    let tabLabelContainerDiv: Element = (tabGroupElement._elementRef.nativeElement as HTMLElement).querySelectorAll('mat-tab-header div.mat-tab-label-container')[0];
    let tabLabelsDiv: Element = tabLabelContainerDiv.children[0];
    this.renderer.removeAttribute(tabLabelsDiv, 'style');

  }

}
