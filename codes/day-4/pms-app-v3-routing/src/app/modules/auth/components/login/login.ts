import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private builder = inject(FormBuilder)
  
  loginForm = this.builder.group({
    username: ['enter user name', [Validators.required, Validators.email]],
    password: ['enter password', Validators.required]
  })

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  submit() {
    
  }
}
