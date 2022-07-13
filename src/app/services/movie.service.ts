import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Movie} from "../entities/movie";
import {Result} from "../entities/result";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Allow': ''})
  };

  constructor(
    private http: HttpClient
  ) {
  }

  search(term: string, page: number): Observable<Result> {
    let searchUrl = 'https://api.themoviedb.org/3/search/movie?' +
      'api_key=0c3e7beaa53d68a61d142e6fcb7618bb' +
      '&query=' + term +
      '&language=en-US' +
      '&page=' + page +
      '&include_adult=false';
    return this.http.get<any>(searchUrl)
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError<any>('searchMovies', []))
      );
  }

  getWatchlist() {
    let watchlistUrl = 'https://api.themoviedb.org/3/account/' +
      sessionStorage.getItem('accountId') +
      '/watchlist/movies?api_key=0c3e7beaa53d68a61d142e6fcb7618bb' +
      '&language=en-US&' +
      'session_id=' + sessionStorage.getItem('sessionId') +
      '&sort_by=created_at.asc&page=1'
    return this.http.get<{result: Movie[]}>(watchlistUrl)
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError<any>('getWatchlist', []))
      )
  }

  getPoster(poster_path: string | null) {
    let imageUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
    return this.http.get<any>(imageUrl)
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError<any>('getPoster', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error: ' + operation);
      console.log(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
