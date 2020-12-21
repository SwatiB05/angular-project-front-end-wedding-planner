import { TestBed } from '@angular/core/testing';

import { VenueFacilitiesService } from './venue-facilities.service';

describe('VenueFacilitiesService', () => {
  let service: VenueFacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenueFacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
