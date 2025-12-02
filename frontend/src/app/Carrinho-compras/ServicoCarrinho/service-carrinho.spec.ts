import { TestBed } from '@angular/core/testing';

import { ServiceCarrinho } from './service-carrinho';

describe('ServiceCarrinho', () => {
  let service: ServiceCarrinho;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCarrinho);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
