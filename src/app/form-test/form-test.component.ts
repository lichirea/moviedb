import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  movieForm = new FormGroup({
    original_title: new FormControl(''),
    title: new FormControl('', [
      Validators.required,
    ]),
    release_date: new FormControl(''),
    adult: new FormControl('false'),
    overview: new FormControl(''),
    vote_average: new FormControl(0),
    vote_count: new FormControl(0),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
