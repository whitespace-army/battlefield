import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public loggedIn = false;
  private email = 'admin@admin.admin';
  private password = 'adminadmin';
  private auth_token = 'admin';
  public profile: Object = {
    id: 1,
    name: 'Admin',
    image: '/assets/profiles/admin.png'
  };
  constructor() {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(formData) {
    if (!formData)  {
      return;
    }
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
}
