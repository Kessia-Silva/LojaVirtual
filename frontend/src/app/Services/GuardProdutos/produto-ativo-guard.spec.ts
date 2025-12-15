import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { produtoAtivoGuard } from './produto-ativo-guard';

describe('produtoAtivoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => produtoAtivoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
