import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  username: any="";
  @Input() submitted: boolean = false;
  @Input('group') myForm: FormGroup;
  @Input() myFormControlName: string;
  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.myFormControlName === undefined) {
      this.myFormControlName = 'usernameOrigin';
    }

    if (this.myForm === undefined) {
      this.myForm = this.formBuilder.group({
        usernameOrigin: ['', Validators.required]
      })
    }
    this.onValueChange.emit(this.username);

  }

  get f() { return this.myForm.controls; }

  onChange(event) {
    console.log(event);
    console.log(this.username);
    
    this.onValueChange.emit(this.username);
  }

}
