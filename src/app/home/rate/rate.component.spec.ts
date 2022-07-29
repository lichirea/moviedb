import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { RateComponent } from './rate.component';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MovieService} from "../services/movie.service/movie.service";
import {of} from "rxjs";
import createSpyObj = jasmine.createSpyObj;
import {By} from "@angular/platform-browser";

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;
  let router: Router;

  const fakeMovieService = createSpyObj<MovieService>('MovieService',
    {
      rate:of({}),
    })


  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(): string {
          return '10';
        },
      },
    }
  } as unknown as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: RouterTestingModule},
        {provide: MovieService, useValue: fakeMovieService},
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the id from the url', () => {
    expect(component.id).toEqual(Number(fakeActivatedRoute.snapshot.paramMap.get('id')));
  });

  it('should call rate with rating given', fakeAsync(() => {
    spyOn(component, 'rate');
    let buttons = fixture.debugElement.queryAll(By.css('button'));
    let button1 = buttons[0];
    let button2 = buttons[1];
    let button3 = buttons[2];
    let button4 = buttons[3];
    let button5 = buttons[4];

    let i = 1;
    buttons.forEach( (b) => {
      b.nativeElement.click();
      tick();
      expect(component.rate).toHaveBeenCalledWith(i * 2);
      i++;
    })
  }));

  it('should navigate back after rating', () => {
      const navigateSpy = spyOn(router, 'navigate');
      component.rate(2);
      expect(router.navigate).toHaveBeenCalledWith(['/watchlist']);
  });
});
