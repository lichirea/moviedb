import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient} from "@angular/common/http";
import createSpyObj = jasmine.createSpyObj;
import {of} from "rxjs";

describe('UserService', () => {
  let service: UserService;
  const httpClientSpy = createSpyObj('HttpClient', ['post', 'get']);
  httpClientSpy.get.and.returnValue(of({status_code: 200, data: {} }))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers:[
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.inject(UserService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
