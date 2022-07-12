import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../entities/movie";
import {MovieService} from "../services/movie.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  poster: any;

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.getPoster();
  }

  getPoster(): void {
    this.movieService.getPoster(this.movie.poster_path)
      .subscribe(
        (baseImage: any) =>
        {
          let objectUrl = 'data:image/png;base64,' + baseImage.image;
          this.poster = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        }
      )
  }
}
