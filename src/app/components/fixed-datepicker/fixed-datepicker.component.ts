import { AfterViewInit, Component, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-fixed-datepicker',
  templateUrl: './fixed-datepicker.component.html',
  styleUrls: ['./fixed-datepicker.component.scss']
})
export class FixedDatepickerComponent  implements AfterViewInit {
 
  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();
 
  @Output()
  selectedDate = moment();
 
  @ViewChild('calendar', {static: false})calendar: MatCalendar<Moment>;
 
  constructor(private renderer: Renderer2) { 
  }
 
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');
 
    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          console.log('Arrow buttons clicked');
        });
      });
    }

  }
 
  monthSelected(date: Moment) {
    console.log('month changed');
  }
 
  dateChanged() {
    this.calendar.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
  }
 
  prevDay() {
    const prevMoment = moment(this.selectedDate).add(-1, 'days');
    this.selectedDate = prevMoment;
    this.dateChanged();
  }
 
  today() {
    this.selectedDate = moment();
    this.dateChanged();
  }
 
  nextDay() {
    const nextMoment = moment(this.selectedDate).add(1, 'days');
    this.selectedDate = nextMoment;
    this.dateChanged();
  }

}
