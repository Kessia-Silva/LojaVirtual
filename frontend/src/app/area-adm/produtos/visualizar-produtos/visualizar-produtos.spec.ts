import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProdutos } from './visualizar-produtos';

describe('VisualizarProdutos', () => {
  let component: VisualizarProdutos;
  let fixture: ComponentFixture<VisualizarProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
