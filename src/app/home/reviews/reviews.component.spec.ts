import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './reviews.component';
import {MovieService} from "../services/movie.service/movie.service";
import {of} from "rxjs";
import createSpyObj = jasmine.createSpyObj;

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  const fakeMovieService = createSpyObj<MovieService>('MovieService',
    {
      currentMovieId: 0,
      getReviews: of({results: []}),
    })


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ],
      providers:[
        {provide: MovieService, useValue: fakeMovieService},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    component.movieId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
