import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroplossComponent } from './croploss.component';

describe('CroplossComponent', () => {
  let component: CroplossComponent;
  let fixture: ComponentFixture<CroplossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroplossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroplossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
