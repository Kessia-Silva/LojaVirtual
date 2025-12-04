import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDetalhesPedido } from './visualizar-detalhes-pedido';

describe('VisualizarDetalhesPedido', () => {
  let component: VisualizarDetalhesPedido;
  let fixture: ComponentFixture<VisualizarDetalhesPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarDetalhesPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarDetalhesPedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
