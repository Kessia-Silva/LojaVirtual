import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoLoja } from './card-produto-loja';

describe('CardProdutoLoja', () => {
  let component: CardProdutoLoja;
  let fixture: ComponentFixture<CardProdutoLoja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdutoLoja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProdutoLoja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
