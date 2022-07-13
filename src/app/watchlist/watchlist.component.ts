import {Component, OnInit} from '@angular/core';
import {Movie} from "../entities/movie";
import {MovieService} from "../services/movie.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('loggedIn') === null) {
      this.login();
    }
    else if(sessionStorage.getItem('sessionId') === null){
      this.getSession();
    }
    else if(sessionStorage.getItem('accountId') === null){
      this.getAccountId();
    }
    if(sessionStorage.getItem('loggedIn') !== null &&
    sessionStorage.getItem('sessionId') !== null &&
    sessionStorage.getItem('accountId') !== null)
      this.getWatchlist();
  }

  private getWatchlist() {
    this.movieService.getWatchlist()
      .subscribe(
        watchlist => this.watchlist = watchlist
      );
  }

  private async getSession() {
    this.userService.getSession()
      .subscribe(
        sessionId => {
          sessionStorage.setItem('sessionId', sessionId);
          this.getAccountId();
        }

      )
  }

  private async getAccountId() {
    this.userService.getAccountId()
      .subscribe(
        accountId => {
          sessionStorage.setItem('accountId', accountId);
          this.getWatchlist();
        }
      )
  }

  private async login() {
    this.userService.login()
      .subscribe(
        (response: { request_token: string, success: boolean }) => {
          sessionStorage.setItem('loggedIn', String(response.success))
          window.location.assign('https://www.themoviedb.org/authenticate/' +
            response.request_token +
            '?redirect_to=http://localhost:4200/watchlist');
        }
      )
  }
}

