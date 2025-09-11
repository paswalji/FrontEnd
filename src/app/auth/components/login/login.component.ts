import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  login() {
    // For testing, show an alert
    if (this.username && this.password) {
      alert(`Username: ${this.username}\nPassword: ${this.password}`);
      this.error = '';
    } else {
      this.error = 'Please enter username and password';
    }
  }
}
