import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable, Subject, tap } from 'rxjs';
import { LoginResult } from './login-result';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenKey: string = 'jwt-token';
  roleKey: string = "jwt-role";
  private _authStatus = new Subject<boolean>();

  public authStatus = this._authStatus.asObservable();

  init(): void {
    if (this.isAuthenticated()) {
      this.setAuthStatus(true);
    }
  }

  setAuthStatus(isAuthenticated: boolean) {
    this._authStatus.next(isAuthenticated);
  }

  constructor(protected http: HttpClient) { }

  isAuthenticated() : boolean {
    return this.getToken() != null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  login(item: LoginRequest): Observable<LoginResult> {
    var url = environment.baseUrl + 'api/Account';
    return this.http.post<LoginResult>(url, item).pipe(tap((_loginResult: LoginResult) =>{
      if(_loginResult.success && _loginResult.token){
            localStorage.setItem(this.tokenKey, _loginResult.token);
            localStorage.setItem(this.roleKey, _loginResult.message);
            this.setAuthStatus(true);
    }
    }));
    }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.setAuthStatus(false);
  }
}
// function loginResult(value: LoginResult): void {
//   throw new Error('Function not implemented.');
// }

