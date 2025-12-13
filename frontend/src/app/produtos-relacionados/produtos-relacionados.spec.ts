import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosRelacionados } from './produtos-relacionados';

describe('ProdutosRelacionados', () => {
  let component: ProdutosRelacionados;
  let fixture: ComponentFixture<ProdutosRelacionados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosRelacionados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosRelacionados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
