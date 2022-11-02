import { TestBed } from '@angular/core/testing';

import { PercentServiceService } from './calculator/percent-service.service';

describe('PercentServiceService', () => {
  let service: PercentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
