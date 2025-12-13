import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { produtosRelacionadosResolverResolver } from './produtos-relacionados-resolver-resolver';

describe('produtosRelacionadosResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => produtosRelacionadosResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
