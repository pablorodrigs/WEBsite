import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  onRegister() {
    const registrationSuccess = this.authService.register(this.email, this.password);
    if (registrationSuccess) {
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Email already in use.';
      this.successMessage = '';
    }
  }
 

  goToLogin() {
    this.router.navigate(['login']);
  }
}
