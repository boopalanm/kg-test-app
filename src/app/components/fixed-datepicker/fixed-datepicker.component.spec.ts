import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDatepickerComponent } from './fixed-datepicker.component';

describe('FixedDatepickerComponent', () => {
  let component: FixedDatepickerComponent;
  let fixture: ComponentFixture<FixedDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
