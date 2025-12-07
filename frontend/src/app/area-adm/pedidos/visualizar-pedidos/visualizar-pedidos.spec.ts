import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPedidos } from './visualizar-pedidos';

describe('VisualizarPedidos', () => {
  let component: VisualizarPedidos;
  let fixture: ComponentFixture<VisualizarPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPedidos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
