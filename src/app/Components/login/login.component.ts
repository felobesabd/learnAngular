import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isUser: boolean = false;

  constructor(private ser: UserAuthService) {}

  ngOnInit(): void {
    this.isUser = this.ser.IsUserLogged;
  }

  login() {
    this.ser.login('userName', '123456789');
    this.isUser = this.ser.IsUserLogged;
  }

  logout() {
    this.ser.logout();
    this.isUser = this.ser.IsUserLogged;
  }
}
