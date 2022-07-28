import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {HighlightWhiteDirective} from "./directives/highlight-white/highlight-white.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent,
    HighlightWhiteDirective,

  ],
  exports: [
    NavbarComponent,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],

})
export class SharedModule { }
