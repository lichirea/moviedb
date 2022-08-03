import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import createSpyObj = jasmine.createSpyObj;
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('MovieService', () => {
  let service: MovieService;
  const httpClientSpy = createSpyObj('HttpClient', ['post', 'get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.inject(MovieService);
    httpClientSpy.get.and.returnValue(of({status_code: 200, data: {} }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data for search endpoint', () => {
    service.search('test', 1).subscribe(data => expect(data.status_code).toBe(200));
  });

});
