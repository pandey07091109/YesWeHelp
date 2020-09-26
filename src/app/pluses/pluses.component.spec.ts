import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusesComponent } from './pluses.component';

describe('PlusesComponent', () => {
  let component: PlusesComponent;
  let fixture: ComponentFixture<PlusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
