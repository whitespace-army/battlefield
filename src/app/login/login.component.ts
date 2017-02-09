import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(builder: FormBuilder) {
      this.email = new FormControl('', []);
      this.password = new FormControl('', []);
      this.loginForm = builder.group({
        email: this.email,
        password: this.password
      });
  }

  login() {
    console.log(this.loginForm.value);
  }

  ngOnInit() {
  }

}
