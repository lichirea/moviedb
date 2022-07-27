import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultComponent} from "./home/search-result/search-result.component";
import {WatchlistComponent} from "./home/watchlist/watchlist.component";
import {RateComponent} from "./home/rate/rate.component";
import {ReviewsComponent} from "./home/reviews/reviews.component";
import {FormTestComponent} from "./home/form-test/form-test.component";
import {AuthTestComponent} from "./admin/auth-test/auth-test.component";
import {SecretComponent} from "./admin/secret/secret.component";
import {AuthGuardService} from "./admin/services/auth-guard/auth-guard.service";

const routes: Routes = [
  {path: 'search/:term', component: SearchResultComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'reviews/:id', component: ReviewsComponent, outlet: 'side'},
  {path: 'rate/:id', component: RateComponent},
  {path: 'form-test', component: FormTestComponent,  canActivate: [AuthGuardService]},
  {path: 'secret', component: SecretComponent, canActivate: [AuthGuardService]},
  {path: 'auth-test', component: AuthTestComponent},
  {path: '', redirectTo: 'watchlist', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
