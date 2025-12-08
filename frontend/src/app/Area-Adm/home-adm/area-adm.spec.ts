import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdm } from './area-adm';

describe('AreaAdm', () => {
  let component: AreaAdm;
  let fixture: ComponentFixture<AreaAdm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaAdm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAdm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
