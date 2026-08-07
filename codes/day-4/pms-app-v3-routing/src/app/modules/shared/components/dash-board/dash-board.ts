import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-dash-board',
  imports: [RouterLink],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard {
  private tokenSvc = inject(TokenService)
  private router = inject(Router)
  tokenStore = this.tokenSvc.getTokenStore()

  login() {
    if (this.tokenStore()) {
      this.tokenStore.set(undefined)
    }
    this.router.navigate(['/login'])
  }
}
