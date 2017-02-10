import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService) {
    this.isLoggedIn = loginService.isLoggedIn();
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
  }
}
