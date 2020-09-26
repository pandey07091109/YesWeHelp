import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaizeComponent } from './maize.component';

describe('MaizeComponent', () => {
  let component: MaizeComponent;
  let fixture: ComponentFixture<MaizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
