import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MovieService} from "../services/movie.service/movie.service";
import {of} from "rxjs";
import createSpyObj = jasmine.createSpyObj;

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  const fakeMovieService = createSpyObj<MovieService>('MovieService',
    {
      search:of({page: 1, total_pages: 1, total_results: 1, results: []}),
    })

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(): string {
          return 'hello';
        },
      },
    }
  } as unknown as ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [ SearchResultComponent ],
      providers: [
        {provide: MovieService, useValue: fakeMovieService},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the search method', () => {
    expect(fakeMovieService.search).toHaveBeenCalled();
  });

  it('should assign the results of search to the a variable', () => {
    expect(component.results).toBeDefined();
  });

  it('should process the results of the search method', () => {
    expect(component.results.results).toEqual(component.movies);
  });

  it('should get the parameter from the url', () => {
    expect(component.term).toEqual(fakeActivatedRoute.snapshot.paramMap.get('term'));
  });
});
