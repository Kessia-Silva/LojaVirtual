import { TestBed } from '@angular/core/testing';

import { ValidarAdm } from './validar-adm';

describe('ValidarAdm', () => {
  let service: ValidarAdm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarAdm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
