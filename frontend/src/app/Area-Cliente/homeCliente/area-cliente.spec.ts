import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCliente } from './area-cliente';

describe('AreaCliente', () => {
  let component: AreaCliente;
  let fixture: ComponentFixture<AreaCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
