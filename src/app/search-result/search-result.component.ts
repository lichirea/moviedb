import {Component, OnInit} from '@angular/core';
import {Movie} from "../entities/movie";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Result} from "../entities/result";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results!: Result;
  movies?: Movie[];
  term: string | null = null;
  page: number = 1;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.term = this.route.snapshot.paramMap.get('term');
    if (this.term !== null) {
      this.searchMovies(this.term, 1);
    }
  }

  searchMovies(term: string, page: number): void {
    this.movieService.search(term.trim(), page)
      .subscribe(results => this.processResponse(results));
  }

  private processResponse(results: Result) {
    this.results = results;
    this.movies = results.results;
  }

  nextPage() {
    if (this.term !== null) {
      this.page++;
      this.searchMovies(this.term, this.page);
    }
  }

  previousPage() {
    if (this.term !== null) {
      this.page--;
      this.searchMovies(this.term, this.page);
    }
  }
}
