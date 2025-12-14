import { TestBed } from '@angular/core/testing';

import { ValidarService } from './validar-service';

describe('ValidarService', () => {
  let service: ValidarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
