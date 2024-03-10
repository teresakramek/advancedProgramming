import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogowanieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Logowanie');
  });

  it('should have a form with required fields', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    expect(usernameField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(usernameField.getAttribute('required')).toBe('');
    expect(passwordField.getAttribute('required')).toBe('');
  });

  it('should call logowanie() method when form is submitted', () => {
    spyOn(component, 'logowanie');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.logowanie).toHaveBeenCalled();
  });



  it('should display an error message for invalid login', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');


    usernameField.value = 'exampleUser';
    passwordField.value = 'invalidPassword';

    submitButton.click();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
  });

  it('should log in for valid username and password', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    usernameField.value = 'AlaMaKota';
    passwordField.value = 'password';

    usernameField.dispatchEvent(new Event('input'));
    passwordField.dispatchEvent(new Event('input'));

    submitButton.click();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeFalsy();
  });

});
