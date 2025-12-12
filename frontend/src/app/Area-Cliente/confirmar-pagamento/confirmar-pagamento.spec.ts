import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPagamento } from './confirmar-pagamento';

describe('ConfirmarPagamento', () => {
  let component: ConfirmarPagamento;
  let fixture: ComponentFixture<ConfirmarPagamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarPagamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarPagamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
