import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { gerenciarGeneroMusicalResolver } from './gerenciar-genero-musical-resolver';

describe('gerenciarGeneroMusicalResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => gerenciarGeneroMusicalResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
