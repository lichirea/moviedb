import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdBannerComponent } from './ad-banner.component';
import {AdDirective} from "../directives/ad/ad.directive";
import {Mock, MockDirective} from "ng-mocks";
import {TestViewContainerRef} from "../directives/ad/ad.directive.spec";



describe('AdBannerComponent', () => {
  let component: AdBannerComponent;
  let fixture: ComponentFixture<AdBannerComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBannerComponent, MockDirective(AdDirective) ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBannerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.adHost).toBeDefined();
  });
});
