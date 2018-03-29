import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SignUpService } from '../sign-up/sign-up.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  constructor(
      private loginService: LoginService,
      private signUpService: SignUpService,
  ) {}

  ngOnInit() { }

  logout() {
    this.loginService.logout();
  }
}

