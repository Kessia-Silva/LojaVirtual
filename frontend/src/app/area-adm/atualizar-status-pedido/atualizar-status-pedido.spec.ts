import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarStatusPedido } from './atualizar-status-pedido';

describe('AtualizarStatusPedido', () => {
  let component: AtualizarStatusPedido;
  let fixture: ComponentFixture<AtualizarStatusPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarStatusPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarStatusPedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
