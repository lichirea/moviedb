import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {HighlightWhiteDirective} from "./directives/highlight-white/highlight-white.directive";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavbarComponent,
    HighlightWhiteDirective,
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
