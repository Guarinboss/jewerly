import { TestBed } from '@angular/core/testing';

import { ExclusiiveProductsServiceService } from './exclusiive-products-service.service';

describe('ExclusiiveProductsServiceService', () => {
  let service: ExclusiiveProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclusiiveProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
