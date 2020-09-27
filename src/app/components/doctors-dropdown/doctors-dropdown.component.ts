import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CommonService } from 'src/app/services/common/common.service';


@Component({
  selector: 'app-doctors-dropdown',
  templateUrl: './doctors-dropdown.component.html',
  styleUrls: ['./doctors-dropdown.component.scss']
})
export class DoctorsDropdownComponent implements OnInit {

  myControl = new FormControl();
  _dID: any;
  @Input() set doctorId(res:any){
    this._dID = res;
  }

  options: any[] = [];
  filteredOptions: Observable<any[]>;
  @Output() optionSelected = new EventEmitter();
  
  constructor(public commonService: CommonService){
    this.getDoctorList()
  }

  ngOnInit() {
    setTimeout(() => {
      this.listfilter();
    }, 1200);
  }

  listfilter(){
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.fullname),
      map(fullname => fullname ? this._filter(fullname) : this.options.slice())
    );
  }

  displayFn(user: any): string {
    return user && user.fullname ? user.fullname : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.fullname.toLowerCase().indexOf(filterValue) === 0);
  }

  getDoctorList() {
    this.commonService.getDoctors().subscribe((resp: any) => {
      console.log(resp);
      this.options = resp.doctors;
    }, error => {
      console.log(error);
    })
  }

  onSelectionChanged(event: any) {
    console.log('event: option selected is ', event);
    this.optionSelected.emit(event);
  }

}
