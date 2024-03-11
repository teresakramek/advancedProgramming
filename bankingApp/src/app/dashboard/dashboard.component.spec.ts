import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../auth.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authService: AuthService;

  beforeEach(async() => {

    await TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [DashboardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    authService.login()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the menu after logging in', () => {
    
    fixture.detectChanges()
    const menu = fixture.debugElement.nativeElement.querySelector('app-menu');
    expect(menu).toBeTruthy();

  });

  it('should hide the menu after logging out', () => {
    authService.logout(); // Zasymuluj wylogowanie
    fixture.detectChanges(); // Zaktualizuj widok
    const menu = fixture.debugElement.nativeElement.querySelector('app-menu');
    expect(menu).toBeFalsy();
  });
});
