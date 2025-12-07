import { TestBed } from '@angular/core/testing';

import { GerenciarGeneroMusicalService } from './gerenciar-genero-musical-service';

describe('GerenciarGeneroMucicalService', () => {
  let service: GerenciarGeneroMusicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciarGeneroMusicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
