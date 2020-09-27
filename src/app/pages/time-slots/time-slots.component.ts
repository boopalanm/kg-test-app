import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditSlotsComponent } from 'src/app/components/add-edit-slots/add-edit-slots.component';
import { CommonService } from 'src/app/services/common/common.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-time-slots',
  templateUrl: './time-slots.component.html',
  styleUrls: ['./time-slots.component.scss']
})
export class TimeSlotsComponent implements OnInit {
  animal: string;
  name: string;
  doctorid = 1;
  date = new Date();
  timeslots: any[];
  constructor(public dialog: MatDialog, public commonService: CommonService, public datepipe: DatePipe) {
    this.getTimeSlotList()
  }

  ngOnInit(): void {
    
  }

  openAddSlots(type): void {
    console.log('I am enter');

    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');

    const dialogRef = this.dialog.open(AddEditSlotsComponent, {
      width: '350px',
      data: { sessiontype: type, date: latest_date, doctorid: this.doctorid }
      ,disableClose: true
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getTimeSlotList();
    });
  }

  getTimeSlotList() {
    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.commonService.getTimeSlots(latest_date, 1).subscribe((resp: any) => {
      console.log(resp.timeslots);
      this.timeslots = resp.timeslots;
      // this.dataSource = new MatTableDataSource(resp.appointments);
    }, error => {
      console.log(error);
    })
  }

  parseTime(time) {
    let timeInt = parseInt(time);
    let minutes = time.substring(3, 5);

    // you could then add or subtract time here as needed

    if (time > '12:00') {
      return `${timeInt - 12}:${minutes} PM`;
    } else {
      return `${timeInt}:${minutes} AM`;
    }
  }

  onSelected(ev){
    this.date = ev;
  }

}
