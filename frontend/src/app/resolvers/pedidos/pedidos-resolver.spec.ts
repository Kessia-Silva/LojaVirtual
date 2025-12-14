import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { pedidosResolver } from './pedidos-resolver';

describe('pedidosResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => pedidosResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
