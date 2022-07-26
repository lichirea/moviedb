import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {HttpClientModule, HttpClient, HttpHeaders} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieComponent} from './movie/movie.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./services/in-memory-data.service";
import { WatchlistComponent } from './watchlist/watchlist.component';
import { RateComponent } from './rate/rate.component';
import { HighlightWhiteDirective } from './directives/highlight-white.directive';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './review/review.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { FormTestComponent } from './form-test/form-test.component';
import { AuthTestComponent } from './auth-test/auth-test.component';
import { SecretComponent } from './secret/secret.component';
import {SecondaryModule} from "./secondary/secondary.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchResultComponent,
    MovieComponent,
    WatchlistComponent,
    RateComponent,
    HighlightWhiteDirective,
    ReviewsComponent,
    ReviewComponent,
    WriteReviewComponent,
    FormTestComponent,
    AuthTestComponent,
    SecretComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpClientInMemoryWebApiModule.forRoot(
        //   InMemoryDataService, {dataEncapsulation: false}
        // )
        SecondaryModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
