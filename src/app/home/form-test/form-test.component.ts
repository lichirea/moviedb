import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Movie} from "../entities/movie";


@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  movies: Movie[] = [];

  movieForm = new FormGroup({
    original_title: new FormControl(''),
    title: new FormControl('', [
      Validators.required,
    ]),
    release_date: new FormControl('', [
      Validators.required,
    ]),
    adult: new FormControl('false'),
    overview: new FormControl(''),
    vote_average: new FormControl(0),
    vote_count: new FormControl(0),
  })

  get title() {return this.movieForm.get('title');}
  get original_title() {return this.movieForm.get('original_title');}
  get release_date() {return this.movieForm.get('release_date');}
  get adult() {return this.movieForm.get('adult');}
  get overview() {return this.movieForm.get('overview');}
  get vote_average() {return this.movieForm.get('vote_average');}
  get vote_count() {return this.movieForm.get('vote_count');}


  constructor() { }

  ngOnInit(): void {
  }

  addMovie() {
    const newMovie: Movie = {
      original_title: this.original_title!.value!,
      title: this.title!.value!,
      adult: this.adult!.value! == 'true',
      release_date: this.release_date!.value!,
      overview: this.overview!.value!,
      vote_count: this.vote_count!.value!,
      vote_average: this.vote_average!.value!,
      poster_path: '',
      id: 1,
    }
    this.movies.push(newMovie);
  }
}
