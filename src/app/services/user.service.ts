import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _tokenResponse: { success: boolean, request_token: string } =
    {success: false, request_token: ''};

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  login() {
    let requestTokenUrl = "https://api.themoviedb.org/3/authentication/token/new?api_key=0c3e7beaa53d68a61d142e6fcb7618bb"
    return this.http.get<any>(requestTokenUrl)
      .pipe(
        tap(tokenResponse => {
          console.log(this.tokenResponse);
        })
      )

  }

  getSession() {
    let sessionIdUrl = 'https://api.themoviedb.org/3/authentication/session/new?api_key=0c3e7beaa53d68a61d142e6fcb7618bb'
    return this.http.post<any>(sessionIdUrl, {request_token: sessionStorage.getItem('requestToken')})
      .pipe(
        tap(sessionIdResponse => {
          console.log('SessionId response: ' + sessionIdResponse);
        })
      )
  }

  getAccountId() {
    let accountIdUrl = 'https://api.themoviedb.org/3/account?api_key=0c3e7beaa53d68a61d142e6fcb7618bb' +
      '&session_id=' + sessionStorage.getItem('sessionId');
    console.log(sessionStorage.getItem('sessionId'));
    return this.http.get<any>(accountIdUrl)
      .pipe(
        tap(accountIdResponse =>
        console.log(accountIdResponse))
      )
  }

  get tokenResponse(): { success: boolean, request_token: string } {
    return this._tokenResponse;
  }

  set tokenResponse(value: { success: boolean, request_token: string }) {
    this._tokenResponse = value;
  }
}
