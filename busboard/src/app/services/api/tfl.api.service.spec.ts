import { TestBed } from '@angular/core/testing';

import { TflApiService } from './tfl.api.service';

describe('Tfl.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TflApiService = TestBed.get(TflApiService);
    expect(service).toBeTruthy();
  });
});
