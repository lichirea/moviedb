import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from "../entities/aditem";
import {AdDirective} from "../directives/ad/ad.directive";
import {AdComponent} from "../entities/ad.component";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  index = -1;
  interval:number | undefined;

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  private loadComponent() {
    if(this.ads.length){
      this.index = (this.index + 1) % this.ads.length;
      const adItem = this.ads[this.index];

      const viewContainerRef = this.adHost!.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
      componentRef.instance.data = adItem.data;
    }
  }

  private getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
