import { TestBed } from '@angular/core/testing';

import { ProdutoStateService } from './produto-state.service';

describe('ProdutoStateService', () => {
  let service: ProdutoStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
