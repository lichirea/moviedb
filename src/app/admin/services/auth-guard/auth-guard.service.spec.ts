import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import createSpyObj = jasmine.createSpyObj;
import {AuthenticationService} from "../authentication/authentication.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthguardService', () => {
  let service: AuthGuardService;

  const fakeAuthService = createSpyObj<AuthenticationService>('AuthenticationService', ['isAuthenticated']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {provide: AuthenticationService, useValue: fakeAuthService},
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
