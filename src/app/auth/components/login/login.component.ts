import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';   // ✅ correct path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (!this.userName || !this.password) {
      this.error = 'Please fill all fields';
      return;
    }

    this.authService.login({ userName: this.userName, password: this.password })
      .subscribe({
        next: (res) => {
          console.log('Login successful:', res);
          alert('Login Successful ✅');
        },
        error: (err) => {
          console.error(err);
          this.error = 'Invalid email or password';
        }
      });
  }
}
