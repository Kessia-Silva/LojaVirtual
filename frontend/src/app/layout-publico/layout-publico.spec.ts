import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPublico } from './layout-publico';

describe('LayoutPublico', () => {
  let component: LayoutPublico;
  let fixture: ComponentFixture<LayoutPublico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPublico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPublico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
