import { Injectable, inject } from '@angular/core';
import { LoginRequest } from '../../models/login-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../../models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<AuthUser | undefined>(undefined);

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/api/auth/login`, {
      username: request.username,
      password: request.password
    });
  }

  setUser(authUser: AuthUser): void {
    this.$user.next(authUser);
    localStorage.setItem('username', authUser.username);
    localStorage.setItem('user-roles', authUser.roles.join(','));
  }

  user() : Observable<AuthUser | undefined> {
    return this.$user.asObservable();
  }
}
