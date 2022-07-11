import {Component, OnInit} from '@angular/core';
import {Movie} from "../entities/movie";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Result} from "../entities/result";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results!: Result;
  movies?: Movie[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const term = this.route.snapshot.paramMap.get('term');
    if (term !== null) {
      this.searchMovies(term);
    }
  }

  searchMovies(term: string): void {
    this.movieService.search(term.trim())
      .subscribe(results => this.processResponse(results));
  }

  private processResponse(results: Result) {
    this.results = results;
    this.movies = results.results;
  }
}
