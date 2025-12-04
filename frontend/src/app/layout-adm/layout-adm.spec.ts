import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdm } from './layout-adm';

describe('LayoutAdm', () => {
  let component: LayoutAdm;
  let fixture: ComponentFixture<LayoutAdm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAdm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAdm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
