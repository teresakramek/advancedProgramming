import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {

  formData = {
    username: '',
    password: ''
  };

  public errors: Array<string> = [];

  constructor(private authService: AuthService, private router: Router) {}

  logowanie() {
    if(this.formData.username === 'AlaMaKota' && this.formData.password === 'password') {
      this.errors = [];
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      this.errors = ['invalid password of username'];
      console.log('Błąd logowania sprawdź dane')
    }
  }
}
