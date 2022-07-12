import { Component, OnInit } from '@angular/core';
import {Movie} from "../entities/movie";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: Movie[] = [];

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getWatchlist();
  }

  private getWatchlist() {
    this.movieService.getWatchlist()
      .subscribe(
        watchlist => this.watchlist = watchlist
      );
  }

}
