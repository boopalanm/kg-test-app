import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginButtonComponent } from './login-button/login-button.component';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { AppointmentListsComponent } from './appointment-lists/appointment-lists.component';
import { MaterialModule } from '../modules/material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DoctorsDropdownComponent } from './doctors-dropdown/doctors-dropdown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FixedDatepickerComponent } from './fixed-datepicker/fixed-datepicker.component';
import { AddEditSlotsComponent } from './add-edit-slots/add-edit-slots.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    UsernameComponent,
    PasswordComponent,
    LoginButtonComponent,
    AppointmentListsComponent,
    HeaderComponent,
    DoctorsDropdownComponent,
    DatepickerComponent,
    FixedDatepickerComponent,
    AddEditSlotsComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AmazingTimePickerModule
  ],
  exports: [
    UsernameComponent,
    PasswordComponent,
    LoginButtonComponent,
    AppointmentListsComponent,
    HeaderComponent,
    DoctorsDropdownComponent,
    DatepickerComponent,
    FixedDatepickerComponent,
    AddEditSlotsComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DatePipe
  ],
})
export class ComponentsModule { }
