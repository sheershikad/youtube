import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginFormGroup!:FormGroup;
  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    this.loginFormGroup=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
    })
  }
  getEmailErrorMessage() {
    if (this.loginFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.loginFormGroup.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginFormGroup.get('password')?.hasError('minlength') ? 'Password contains atleast 6 Characters' : '';
  }

  login(): void {
    if (this.loginFormGroup?.value) {
      const email = this.loginFormGroup.get('email');
      const password = this.loginFormGroup.get('password');
      if (email && password) {
        this.loginService.updateLoginUser(email.value, password.value);
      }
    }
  }


}
