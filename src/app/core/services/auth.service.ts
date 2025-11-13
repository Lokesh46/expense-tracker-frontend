import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { API_BASE_URL } from '../tokens/api-base-url.token';
import { AuthRequest, AuthResponse, RegisterRequest } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  authenticate(payload: AuthRequest, options?: { rememberMe?: boolean }): Observable<AuthResponse> {
    const rememberMe = options?.rememberMe ?? true;
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/authenticate`, payload)
      .pipe(tap((response) => this.persistToken(response.token, rememberMe)));
  }

  register(payload: RegisterRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/register`, payload);
  }

  private persistToken(token: string, rememberMe: boolean): void {
    if (!token) {
      return;
    }

    const storage = rememberMe ? localStorage : sessionStorage;
    const otherStorage = rememberMe ? sessionStorage : localStorage;

    storage.setItem('auth_token', token);
    otherStorage.removeItem('auth_token');
  }
}
