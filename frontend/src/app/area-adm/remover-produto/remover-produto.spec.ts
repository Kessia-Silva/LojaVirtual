import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverProduto } from './remover-produto';

describe('RemoverProduto', () => {
  let component: RemoverProduto;
  let fixture: ComponentFixture<RemoverProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoverProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
