import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';  // ✅ correct path

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  role: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (!this.userName || !this.email || !this.password || !this.confirmPassword || !this.firstName || !this.lastName || !this.role) {
      this.error = 'Please fill all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    const payload = {
      userName: this.userName,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role
    };

    this.authService.register(payload).subscribe({
      next: (res) => {
        alert('Registration successful!');
        console.log(res);
      },
      error: (err) => {
        this.error = 'Registration failed!';
        console.error(err);
      }
    });
  }
}
