import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginStatus:boolean = false;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: Router
  ) {
  }

  ngOnInit() {
    this.formInit()
  }

  formInit()
  {
    this.loginForm = this.formBuilder.group({
      usernameField: this.formBuilder.group({
        usernameOrigin: ['', Validators.required]
      }),
      passwordField: this.formBuilder.group({
        passwordOrigin: ['', Validators.required]
      }),
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }else{
        this.loginStatus = true;
        this.route.navigateByUrl(`/dashboard`);
      }

      this.loading = true;
  }

  onUsernameValue(event){
    console.log(event);
  }

  onPasswordValue(event){
    console.log(event);
  }

}
