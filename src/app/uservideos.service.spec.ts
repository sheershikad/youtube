import { TestBed } from '@angular/core/testing';

import { UservideosService } from './uservideos.service';

describe('UservideosService', () => {
  let service: UservideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UservideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
