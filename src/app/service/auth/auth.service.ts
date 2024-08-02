import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string, password:string) : boolean {
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticate(): boolean {
    return localStorage.getItem('user') != null;
  }
}
