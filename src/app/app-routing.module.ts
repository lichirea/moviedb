import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultComponent} from "./search-result/search-result.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {RateComponent} from "./rate/rate.component";
import {ReviewsComponent} from "./reviews/reviews.component";

const routes: Routes = [
  {path: 'search/:term', component: SearchResultComponent},
  {path: '', redirectTo: 'watchlist', pathMatch: 'full'},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'rate/:id', component: RateComponent},
  {path: 'reviews/:id', component: ReviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
