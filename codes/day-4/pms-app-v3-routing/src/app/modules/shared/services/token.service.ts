import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenStore = signal<string | undefined>(undefined)

  getTokenStore() {
    return this.tokenStore
  }
  // removeToken() {

  // }
}
