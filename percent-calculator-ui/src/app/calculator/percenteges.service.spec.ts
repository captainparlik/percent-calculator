import { TestBed } from '@angular/core/testing';

import { PercentegesService } from './percenteges.service';

describe('PercentegesService', () => {
  let service: PercentegesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercentegesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
