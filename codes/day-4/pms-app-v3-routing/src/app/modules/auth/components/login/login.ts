import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../shared/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {
  private builder = inject(FormBuilder)
  private authSvc = inject(AuthService)
  private tokenSvc = inject(TokenService)
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)

  private loginSubscription?: Subscription;

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
    const user = this.loginForm.value
    this.loginSubscription = this.authSvc.login(user as User).subscribe({
      next: (apiResponse) => {
        if (apiResponse.data !== null) {
          //save the token in signal
          this.tokenSvc.getTokenStore().set(apiResponse.data)

          //redirect
          const snapshot = this.currentRoute.snapshot;
          const queryParams = snapshot.queryParams;
          const returnUrl = queryParams["returnUrl"]
          if (returnUrl) {
            this.router.navigate([returnUrl])
          } else
            this.router.navigate(['/products'])
        } else {
          window.alert('invalid user')
        }
      },
      error: (err) => {
        window.alert(err.message)
      },
      complete: () => { }
    })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
}
