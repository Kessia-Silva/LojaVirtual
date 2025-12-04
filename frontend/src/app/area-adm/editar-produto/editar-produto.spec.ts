import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProduto } from './editar-produto';

describe('EditarProduto', () => {
  let component: EditarProduto;
  let fixture: ComponentFixture<EditarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
