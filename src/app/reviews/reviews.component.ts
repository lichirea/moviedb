import { Component, OnInit } from '@angular/core';
import {Review} from "../entities/review";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  movieId: number = 0;
  results!: {results: Review[], page: number, total_pages: number, total_results: number};
  reviews?: Review[] = [];
  page: number = 1;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  private getReviews() {
    this.movieService.getReviews(this.movieId, 1)
      .subscribe(
        response => {
          this.results = response;
          this.reviews = response.results;
        }
      )
  }


}
