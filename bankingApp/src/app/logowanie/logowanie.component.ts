import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {

  formData = {
    username: '',
    password: ''
  };

  logowanie() {
    if(this.formData.username === 'AlaMaKota' && this.formData.password === 'password') {
      console.log('Zalogowano pomyślnie')
    } else {
      console.log('Błąd logowania sprawdź dane')
    }
  }
}
