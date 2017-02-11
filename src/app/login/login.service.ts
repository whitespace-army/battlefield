import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
  private loggedIn = false;
  public loginSubject: Subject<boolean> = new Subject<boolean>();
  private email: string = 'admin@admin.admin';
  private password: string = 'adminadmin';
  private auth_token: string = 'admin';
  private profile: Object = {
    name: 'Admin',
    image: '/assets/profiles/admin'
  };
  constructor() {
    this.loginSubject.next(!!localStorage.getItem('auth_token'));
  }

  login(formData) {
    if (!formData) return;
    const valid = formData.email === this.email && formData.password === this.password;
    if (valid) {
      localStorage.setItem('auth_token', this.auth_token);
      this.loggedIn = true;
      this.loginSubject.next(this.loggedIn);
    }
    return valid;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loginSubject.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
