import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MovieComponent} from './movie.component';
import {MovieService} from "../services/movie.service/movie.service";
import {async, of} from "rxjs";
import createSpyObj = jasmine.createSpyObj;
import {DomSanitizer} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  const fakeMovieService = createSpyObj<MovieService>('MovieService',
    {
      isOnWatchlist: of({watchlist: true}),
      changeWatchList: of({status_code: 201}),
    })


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [MovieComponent],
      providers: [
        {provide: MovieService, useValue: fakeMovieService},
        {provide: RouterTestingModule},
        {provide: DomSanitizer},
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    component.movie = {
      id: 0,
      original_title: 'Avatar',
      title: 'Avatar',
      release_date: '2009-12-10',
      adult: false,
      overview: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      vote_average: 7.5,
      vote_count: 25679,
      poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a movie from parent', () => {
    expect(component.movie).toBeDefined();
  });

  it('should call isOnWatchList for that movie', () => {
    expect(fakeMovieService.isOnWatchlist).toHaveBeenCalledWith(component.movie.id);
  });

  it('should set onWatchList', () => {
    expect(component.onWatchlist).toEqual(true);
  });

  it('should reverse onWatchList when changeWatchList returns success', () => {
    component.changeWatchList();
    expect(component.onWatchlist).toEqual(false);
  });
});
