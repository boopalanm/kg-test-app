import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDropdownComponent } from './doctors-dropdown.component';

describe('DoctorsDropdownComponent', () => {
  let component: DoctorsDropdownComponent;
  let fixture: ComponentFixture<DoctorsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
