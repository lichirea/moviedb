import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private _loggedIn: boolean = false;

  constructor() { }

  public isAuthenticated(): boolean{
    return this._loggedIn;
  }

  public login(){
    this._loggedIn = true;
  }

  logout() {
    this._loggedIn = false;
  }
}
