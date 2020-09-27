import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { CommonService } from 'src/app/services/common/common.service';

export interface DialogData {
  sessiontype: number;
  doctorid: number;
  date:string;
}

@Component({
  selector: 'app-add-edit-slots',
  templateUrl: './add-edit-slots.component.html',
  styleUrls: ['./add-edit-slots.component.scss']
})
export class AddEditSlotsComponent {
  inputData: any;
  sessionType: any;
  fromtime: any ;
  totime: any;
  constructor(
    public dialogRef: MatDialogRef<AddEditSlotsComponent>, public commonService: CommonService,
    public snackBar: MatSnackBar,
    private atp: AmazingTimePickerService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.inputData = data;
    console.log(this.inputData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTimeSlots() {
    if ([null, undefined, ''].includes(this.fromtime)) {
      this.snackMessage('From Time is missing');
    } else if ([null, undefined, ''].includes(this.totime)) {
      this.snackMessage('To Time is missing');
    } else if (this.totime === this.fromtime) {
      this.snackMessage('Both Cannot be same');
    } else if (this.totime <= this.fromtime) {
      this.snackMessage('To time cannot be smaller than from time');
    } else {
      if(this.inputData.sessiontype === 1){
        this.validationMorning();
      }else{
        this.validationEvening();
      }
    }
  }

  validationMorning(){
    console.log('i am morning');
    
    if(this.fromtime < '09:00'){
      this.snackMessage('From Time should above 09.00 AM');
    } else if(this.fromtime > '12:00'){
      this.snackMessage('From Time should below 12.00 PM');
    }else if(this.totime < '09:00'){
      this.snackMessage('To Time should above 09.00 AM');
    } else if(this.totime > '12:00'){
      this.snackMessage('To Time should below 12.00 PM');
    } else {
      const data = {
        fromtime: this.fromtime,
        totime: this.totime,
        date: this.inputData.date,
        session: this.inputData.sessiontype,
        doctorid: this.inputData.doctorid,
      };
      this.commonService.submitTimeSlot(data).subscribe((res) => {
        this.snackMessage('Time slot added successfully');
        this.closeDialog();
        console.log(res);
      }, error => {
        this.snackMessage('Time slot Exist error');
      });
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

  validationEvening(){
    console.log('i am evening');
    
    if(this.fromtime < '17:00'){
      this.snackMessage('From Time should above 05.00 PM');
    } else if(this.fromtime > '21:00'){
      this.snackMessage('From Time should below 09.00 PM');
    }else if(this.totime < '17:00'){
      this.snackMessage('To Time should above 05.00 PM');
    } else if(this.totime > '21:00'){
      this.snackMessage('To Time should below 09.00 PM');
    } else {
      const data = {
        fromtime: this.fromtime,
        totime: this.totime,
        date: this.inputData.date,
        session: this.inputData.sessiontype,
        doctorid: this.inputData.doctorid,
      };
      this.commonService.submitTimeSlot(data).subscribe((res) => {
        this.snackMessage('Time slot added successfully');
        this.closeDialog();
        console.log(res);
      }, error => {
        this.snackMessage(error.message);
      });
    }
  }

  snackMessage(message) {
    this.openSnackBar(message, 'pizza-party');
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }

  open(ev: any, bindType) {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
      if(bindType == 'from'){
        this.fromtime = time;
      }else{
        this.totime = time;
      }
    });
  }
}
