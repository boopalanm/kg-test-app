import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListsComponent } from './appointment-lists.component';

describe('AppointmentListsComponent', () => {
  let component: AppointmentListsComponent;
  let fixture: ComponentFixture<AppointmentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
