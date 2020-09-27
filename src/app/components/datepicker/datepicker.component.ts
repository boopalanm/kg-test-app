import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Output() dateSelected = new EventEmitter();
  date = new FormControl(new Date());
  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChanged(event: any) {
    console.log('event: option selected is ', event);
    this.dateSelected.emit(event);
  }

}
