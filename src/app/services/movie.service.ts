import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Movie} from "../entities/movie";
import {Result} from "../entities/result";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', })
  };

  constructor(
    private http: HttpClient
  ) { }

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
