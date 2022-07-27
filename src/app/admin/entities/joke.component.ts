import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div>
      <h3>Featured Message of the Day</h3>
      <h4>{{data.msg}}</h4>
    </div>
  `
})
export class JokeComponent implements AdComponent {
  @Input() data: any;
}
