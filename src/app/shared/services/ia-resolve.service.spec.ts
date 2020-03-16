import { TestBed } from '@angular/core/testing';

import { IaResolveService } from './ia-resolve.service';

describe('IaResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaResolveService = TestBed.get(IaResolveService);
    expect(service).toBeTruthy();
  });
});
