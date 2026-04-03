import { Injectable } from '@angular/core';

const AUTH_KEY = 'phgroup_admin_auth';
const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'P@ssword123';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {
    this.checkStoredAuth();
  }

  private checkStoredAuth(): void {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored === 'true') {
      this.isLoggedIn = true;
    }
  }

  login(username: string, password: string): boolean {
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      this.isLoggedIn = true;
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(AUTH_KEY);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string {
    return DEFAULT_USERNAME;
  }
}
