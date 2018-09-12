import { TestBed } from '@angular/core/testing';

import { ArrivalsService } from './arrivals.service';

describe('ArrivalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrivalsService = TestBed.get(ArrivalsService);
    expect(service).toBeTruthy();
  });
});
