import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarMeuEndereco } from './mudar-meu-endereco';

describe('MudarMeuEndereco', () => {
  let component: MudarMeuEndereco;
  let fixture: ComponentFixture<MudarMeuEndereco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MudarMeuEndereco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MudarMeuEndereco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
