import { TestBed } from '@angular/core/testing';

import { IaTripService } from './ia-trip.service';

describe('IaTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaTripService = TestBed.get(IaTripService);
    expect(service).toBeTruthy();
  });
});
