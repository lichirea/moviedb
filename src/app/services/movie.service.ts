import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Movie} from "../entities/movie";

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

  search(term: string): Observable<Movie[]> {
    let searchUrl = 'https://api.themoviedb.org/3/search/movie?' +
      'api_key=<0c3e7beaa53d68a61d142e6fcb7618bb' +
      '&query=' + term +
      '&language=en-US' +
      '&page=1' +
      '&include_adult=false';
    return this.http.get<any>(searchUrl)
      .pipe(
        //tap?
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
