import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication/authentication.service";

@Component({
  selector: 'app-auth-test',
  templateUrl: './auth-test.component.html',
  styleUrls: ['./auth-test.component.css']
})
export class AuthTestComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
