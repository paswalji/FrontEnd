import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private loggedInUser: User | null = null;

  constructor(private router: Router) {}

  register(user: User): boolean {
    if (this.users.find(u => u.username === user.username)) {
      return false; // username already exists
    }
    this.users.push(user);
    return true;
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }
}
