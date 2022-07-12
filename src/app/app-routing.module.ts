import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultComponent} from "./search-result/search-result.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";

const routes: Routes = [
  {path: 'search/:term', component: SearchResultComponent},
  {path: '', redirectTo: 'watchlist', pathMatch: 'full'},
  {path: 'watchlist', component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
