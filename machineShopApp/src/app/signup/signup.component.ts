import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoginMode = false;
  isLoading = false;
  error: string = null;


  constructor(private authService: AuthService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    console.log('hitting submit');
    if (!form.valid) {
      return;
    }
    else if (form.value.password1 != form.value.password2) {
      console.log('hit password checker')
      this.error = 'Passwords must match.'
      return;
    }

    const email = form.value.email;
    const password1 = form.value.password1;

    this.isLoading = true;
    if (this.isLoginMode) {
      //...
    } 
    else {
      this.authService.signup(email, password1).subscribe(
        resData => {
          form.reset;
          this.router.navigate(['']);
          this.isLoading = false;
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }
    
  }
}
