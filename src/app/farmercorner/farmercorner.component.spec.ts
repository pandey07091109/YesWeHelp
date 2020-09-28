import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmercornerComponent } from './farmercorner.component';

describe('FarmercornerComponent', () => {
  let component: FarmercornerComponent;
  let fixture: ComponentFixture<FarmercornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmercornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmercornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
