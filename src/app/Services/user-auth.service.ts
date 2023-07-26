import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isUserSub: BehaviorSubject<boolean>;

  constructor() {
    this.isUserSub = new BehaviorSubject<boolean>(this.IsUserLogged);
  }

  login(userName: string, password: string) {
    let userToken: string = '123456789';
    localStorage.setItem('token', userToken);
    this.isUserSub.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserSub.next(false);
  }

  get IsUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getIsUserSub(): Observable<boolean> {
    return this.isUserSub.asObservable();
  }
}
