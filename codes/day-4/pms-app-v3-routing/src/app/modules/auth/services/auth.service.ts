import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiResponse } from '../../products/models/api-response';
import { AUTH_API_URL } from '../../../config/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient)

  login(user: User) {
    return this._http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
  }
}
