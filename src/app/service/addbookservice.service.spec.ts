import { TestBed } from '@angular/core/testing';

import { AddbookserviceService } from './addbookservice.service';

describe('AddbookserviceService', () => {
  let service: AddbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
