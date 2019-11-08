import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaHeaderComponent } from './ia-header.component';

describe('IaHeaderComponent', () => {
  let component: IaHeaderComponent;
  let fixture: ComponentFixture<IaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
