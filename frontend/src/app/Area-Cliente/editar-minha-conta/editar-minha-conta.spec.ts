import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMinhaConta } from './editar-minha-conta';

describe('EditarMinhaConta', () => {
  let component: EditarMinhaConta;
  let fixture: ComponentFixture<EditarMinhaConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMinhaConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMinhaConta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
