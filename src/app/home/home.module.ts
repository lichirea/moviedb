import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieService} from "./services/movie.service/movie.service";
import {MovieComponent} from "./movie/movie.component";
import {RateComponent} from "./rate/rate.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {ReviewComponent} from "./review/review.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {FormTestComponent} from "./form-test/form-test.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    MovieComponent,
    RateComponent,
    ReviewsComponent,
    ReviewComponent,
    SearchResultComponent,
    WatchlistComponent,
    FormTestComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    MovieService,
  ],
  exports: [
    MovieComponent,
  ]
})
export class HomeModule { }
