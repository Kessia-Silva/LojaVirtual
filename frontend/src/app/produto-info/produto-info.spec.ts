import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoInfo } from './produto-info';

describe('ProdutoInfo', () => {
  let component: ProdutoInfo;
  let fixture: ComponentFixture<ProdutoInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
