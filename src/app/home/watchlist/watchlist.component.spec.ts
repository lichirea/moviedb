import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistComponent } from './watchlist.component';
import {MovieService} from "../services/movie.service/movie.service";
import {of} from "rxjs";
import createSpyObj = jasmine.createSpyObj;
import {UserService} from "../../core/services/user.service/user.service";

describe('WatchlistComponent', () => {
  let component: WatchlistComponent;
  let fixture: ComponentFixture<WatchlistComponent>;

  const fakeMovieService = createSpyObj<MovieService>('MovieService',
    {
      getWatchlist: of({watchlist: true}),
    })

  const fakeUserService = createSpyObj<UserService>('UserService',
    {
      login: of({request_token: 'abc', success: true}),
      getSession: of({session_id: 201}),
      getAccountId: of({id: 2}),
    })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
