import { TestBed } from '@angular/core/testing';

import { PostcodesApiService } from './postcodes.api.service';

describe('Postcodes.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostcodesApiService = TestBed.get(PostcodesApiService);
    expect(service).toBeTruthy();
  });
});
