import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  password: any;
  @Input() submitted: boolean = false;
  @Input('group') myForm: FormGroup;
  @Input() myFormControlName: string;
  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.myFormControlName === undefined) {
      this.myFormControlName = 'passwordOrigin';
    }

    if (this.myForm === undefined) {
      this.myForm = this.formBuilder.group({
        passwordOrigin: ['', Validators.required]
      })
    }
  }

  get f() { return this.myForm.controls; }


  onChange() {
    this.onValueChange.emit(this.password);
  }
}
