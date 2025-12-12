import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePedido } from './service-pedido';

describe('ServicePedido', () => {
  let component: ServicePedido;
  let fixture: ComponentFixture<ServicePedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
