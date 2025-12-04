import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPublico } from './navbar-publico';

describe('NavbarPublico', () => {
  let component: NavbarPublico;
  let fixture: ComponentFixture<NavbarPublico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPublico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPublico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
