import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorcropComponent } from './majorcrop.component';

describe('MajorcropComponent', () => {
  let component: MajorcropComponent;
  let fixture: ComponentFixture<MajorcropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorcropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
