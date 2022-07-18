import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../entities/movie";
import {MovieService} from "../services/movie.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  poster: any;
  onWatchlist: boolean = false;
  rated: boolean = false;

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.isOnWatchlist();
    //this.getPoster();
  }

  getPoster(): void {
    this.movieService.getPoster(this.movie.poster_path)
      .subscribe(
        (baseImage: any) => {
          let objectUrl = 'data:image/png;base64,' + baseImage.image;
          this.poster = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        }
      )
  }


  isOnWatchlist(): void {
    this.movieService.isOnWatchlist(this.movie.id)
      .subscribe(
        result => this.onWatchlist = result.watchlist
      )
  }

  changeWatchList() {
    this.movieService.changeWatchList(this.movie.id, !this.onWatchlist)
      .subscribe(
        response => {
          response.status_code === 201 ? this.onWatchlist = !this.onWatchlist : 0;
          this.ngOnInit();
        }
      )
  }

  getReviews() {
    this.movieService.currentMovieId = this.movie.id;
    this.router.navigate([{outlets: {side: ['reviews', this.movie.id]}}]);
  }
}
