import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuteComponent } from './jute.component';

describe('JuteComponent', () => {
  let component: JuteComponent;
  let fixture: ComponentFixture<JuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
