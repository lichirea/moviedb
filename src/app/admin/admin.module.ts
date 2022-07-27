import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthTestComponent} from "./auth-test/auth-test.component";
import {SecretComponent} from "./secret/secret.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AdDirective} from './directives/ad/ad.directive';
import {AdBannerComponent} from './ad-banner/ad-banner.component';
import {JokeComponent} from "./entities/joke.component";


@NgModule({
  declarations: [
    AuthTestComponent,
    SecretComponent,
    AdDirective,
    AdBannerComponent,
    JokeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],

})
export class AdminModule {
}
