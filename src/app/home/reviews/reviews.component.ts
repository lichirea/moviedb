import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../entities/review";
import {MovieService} from "../services/movie.service/movie.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() movieId: number = 0;
  results!: { results: Review[], page: number, total_pages: number, total_results: number };
  reviews?: Review[] = [];
  page: number = 1;

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    this.movieId = this.movieService.currentMovieId;
    this.getReviews(1);
  }

  private getReviews(page: number) {
    this.movieService.getReviews(this.movieId, page)
      .subscribe(
        response => {
          this.results = response;
          this.reviews = response.results;
        }
      )
  }

  nextPage() {
    this.page++;
    this.getReviews(this.page);
  }

  previousPage() {
    this.page--;
    this.getReviews(this.page);
  }
}
