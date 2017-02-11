import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public loggedIn = false;
  private email: string = 'admin@admin.admin';
  private password: string = 'adminadmin';
  private auth_token: string = 'admin';
  private profile: Object = {
    name: 'Admin',
    image: '/assets/profiles/admin'
  };
  constructor() {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(formData) {
    if (!formData) return;
    const valid = formData.email === this.email && formData.password === this.password;
    if (valid) {
      localStorage.setItem('auth_token', this.auth_token);
      this.loggedIn = true;
    }
    return valid;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
