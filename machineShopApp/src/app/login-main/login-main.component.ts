import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})

export class LoginMainComponent {
  isAuthenticated = false;
  isLoginMode = false;
  isLoading = false;
  error: string = null;
  private userSub: Subscription;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !user ? false : true;
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    this.isLoading = true;
    if (this.isLoginMode) {
      //...
    }
    else {
      this.authService.login(form.value.email, form.value.password).subscribe(
        resData => {
          form.reset;
          this.router.navigate(['/userprofile']);
          this.isLoading = false;
        },
        errorMessage => {
          this.error = errorMessage;
          form.reset;
          this.isLoading = false;
        }
      );
    }
  
    }
}
