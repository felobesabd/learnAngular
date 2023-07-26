import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUser: boolean;

  constructor(private ser: UserAuthService) {
    this.isUser = this.ser.IsUserLogged;
    console.log(this.isUser);
  }

  ngOnInit(): void {
    this.ser.getIsUserSub().subscribe((status) => {
      this.isUser = status;
      console.log(this.isUser);
    });
  }
}
