import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaViewTripComponent } from './ia-view-trip.component';

describe('IaViewTripComponent', () => {
  let component: IaViewTripComponent;
  let fixture: ComponentFixture<IaViewTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaViewTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaViewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
