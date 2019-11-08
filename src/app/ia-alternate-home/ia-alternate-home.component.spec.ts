import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaAlternateHomeComponent } from './ia-alternate-home.component';

describe('IaAlternateHomeComponent', () => {
  let component: IaAlternateHomeComponent;
  let fixture: ComponentFixture<IaAlternateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaAlternateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaAlternateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
