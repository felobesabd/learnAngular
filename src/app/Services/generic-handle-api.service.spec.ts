import { TestBed } from '@angular/core/testing';

import { GenericHandleApiService } from './generic-handle-api.service';

describe('GenericHandleApiService', () => {
  let service: GenericHandleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericHandleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
