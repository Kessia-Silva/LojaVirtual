import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { carrinhoComprasResolver } from './carrinho-compras-resolver';

describe('carrinhoComprasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => carrinhoComprasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
