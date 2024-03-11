import { AfterContentInit, Component, OnChanges } from '@angular/core';
import { MenuComponent } from "./../menu/menu.component"
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterContentInit { 

    public isLoggedIn: boolean = true;  
  
    constructor(private authService: AuthService) {
      this.isLoggedIn = this.authService.isLoggedIn;
    }
    // ponowne sprawdzanie gdy widok jest wywolywany po logowaniu
    // poprawna implementacja przy pomocy Observable ?
    ngAfterContentInit() {
      this.isLoggedIn = this.authService.isLoggedIn;
    }
}
