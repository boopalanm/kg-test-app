import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeSlotsComponent } from './time-slots/time-slots.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, TimeSlotsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MaterialModule,
    MatNativeDateModule
  ],
  exports: [LoginComponent, DashboardComponent, TimeSlotsComponent],
  providers: [DatePipe]
})
export class PagesModule { }
