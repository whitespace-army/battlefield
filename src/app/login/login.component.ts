import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(builder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = builder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])]
    });
  }

  login() {
    const isLogged = this.loginService.login(this.loginForm.value);
    if (isLogged) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() { }

}
