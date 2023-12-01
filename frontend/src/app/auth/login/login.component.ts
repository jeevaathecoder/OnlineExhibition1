import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        alert("Login successful!");
        console.log(response);
        // You may want to handle the successful login, such as storing user information in a service.
        // For now, navigate to the login page.
        this.router.navigate(['/home/user-home']);
      },
      error: (error) => {
        alert("Login failed!");
        console.error(error);
      }
    });
  }
}
