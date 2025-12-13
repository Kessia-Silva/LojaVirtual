import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { produtoIdResolverResolver } from './produto-id-resolver-resolver';

describe('produtoIdResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => produtoIdResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
