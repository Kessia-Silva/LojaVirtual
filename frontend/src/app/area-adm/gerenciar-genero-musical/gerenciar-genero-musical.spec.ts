import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarGeneroMusical } from './gerenciar-genero-musical';

describe('GerenciarGeneroMusical', () => {
  let component: GerenciarGeneroMusical;
  let fixture: ComponentFixture<GerenciarGeneroMusical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarGeneroMusical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarGeneroMusical);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
