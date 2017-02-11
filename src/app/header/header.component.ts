import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  loginSubject: Subscription;
  constructor(private loginService: LoginService) {
    this.isLoggedIn = loginService.isLoggedIn();
    this.loginSubject = loginService.loginSubject.subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loginSubject.unsubscribe();
  }

  logout() {
    this.loginService.logout();
  }
}

