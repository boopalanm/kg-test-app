import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common/common.service';


@Component({
  selector: 'app-appointment-lists',
  templateUrl: './appointment-lists.component.html',
  styleUrls: ['./appointment-lists.component.scss']
})
export class AppointmentListsComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'patientname', 'contactphone',  'fromtime', 'totime', 'totalmins', 'status'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  _doctorId: number;
  _date = new Date();

  @Input() set doctorId(res:any){
    this._doctorId = res;
  }

  @Input() set date(res:any){
    this._date = res;
  }

  constructor(public commonService: CommonService, public datepipe: DatePipe) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
    this.getPickersList()
  }

  ngOnChanges(changes) {
    this.getPickersList();
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngon

  pagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPickersList() {
    let latest_date =this.datepipe.transform(this._date, 'yyyy-MM-dd');

    this.commonService.getAppointments(latest_date, this._doctorId).subscribe((resp: any) => {
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp.appointments);
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

  wantedTime(start, end) {
      start = start.split(":");
      end = end.split(":");
      var startDate = new Date(0, 0, 0, start[0], start[1], 0);
      var endDate = new Date(0, 0, 0, end[0], end[1], 0);
      var diff = endDate.getTime() - startDate.getTime();
      var hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      var minutes = Math.floor(diff / 1000 / 60);
      
      return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
  }
}

