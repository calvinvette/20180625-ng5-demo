import { TestBed, inject } from '@angular/core/testing';

import { CustomerLocalStorageService } from './customer-local-storage.service';

describe('CustomerLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerLocalStorageService]
    });
  });

  it('should be created', inject([CustomerLocalStorageService], (service: CustomerLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
