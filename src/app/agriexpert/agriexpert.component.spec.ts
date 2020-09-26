import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriexpertComponent } from './agriexpert.component';

describe('AgriexpertComponent', () => {
  let component: AgriexpertComponent;
  let fixture: ComponentFixture<AgriexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
