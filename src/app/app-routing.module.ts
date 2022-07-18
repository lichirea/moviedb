import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultComponent} from "./search-result/search-result.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {RateComponent} from "./rate/rate.component";
import {ReviewsComponent} from "./reviews/reviews.component";

const routes: Routes = [
  {path: 'search/:term', component: SearchResultComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'reviews/:id', component:ReviewsComponent, outlet: 'side'},
  {path: 'rate/:id', component: RateComponent},
  {path: '', redirectTo: 'watchlist', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
