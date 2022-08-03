import {ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import { AdBannerComponent } from './ad-banner.component';
import createSpyObj = jasmine.createSpyObj;
import {AdDirective} from "../directives/ad/ad.directive";
import {AdItem} from "../entities/aditem";
import {JokeComponent} from "../entities/joke.component";
import {TimeInterval} from "rxjs/internal/operators/timeInterval";




describe('AdBannerComponent', () => {
  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;

  const directiveSpy = createSpyObj('AdDirective', [],['viewContainerRef']);
  // @ts-ignore
  Object.getOwnPropertyDescriptor(directiveSpy, 'viewContainerRef').get.and.returnValue({
    clear: () => {return true;},
    createComponent: () => {return {instance: {data: 'aaa'}}},
  });

  const jokeSpy = createSpyObj('JokeComponent', [], ['data']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBannerComponent,],
      providers: [
        {provide: AdDirective, useValue: directiveSpy},
        {provide: JokeComponent, useValue: jokeSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBannerComponent);
    component = fixture.componentInstance;
    component.adHost = directiveSpy;
    component.ads = [
      new AdItem(jokeSpy,{data: {msg: 'test0'}, component: jokeSpy}),
      new AdItem(jokeSpy,{data: {msg: 'test1'}, component: jokeSpy}),
      new AdItem(jokeSpy,{data: {msg: 'test2'}, component: jokeSpy}),
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set an interval', fakeAsync(() => {
    component.ngOnInit();
    expect(component.interval).toBeInstanceOf(Number);
    discardPeriodicTasks();
  }))

  it('should go through the ads asynchronously', fakeAsync(() => {
    component.ngOnInit();
    expect(component.index).toEqual(1);
    tick(3000);
    expect(component.index).toEqual(2);
    tick(3000);
    expect(component.index).toEqual(0);

    discardPeriodicTasks();
  }))
});
