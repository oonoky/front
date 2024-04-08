import { TestBed } from '@angular/core/testing';

import { WServiceService } from './w-service.service';

describe('WServiceService', () => {
  let service: WServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
