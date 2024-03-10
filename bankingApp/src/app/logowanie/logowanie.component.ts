import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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

  logowanie() {
    if(this.formData.username === 'AlaMaKota' && this.formData.password === 'password') {
      this.errors = [];
      console.log('Zalogowano pomyślnie')
    } else {
      this.errors = ['invalid password of username'];
      console.log('Błąd logowania sprawdź dane')
    }
  }
}
