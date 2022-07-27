import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {AuthenticationService} from "./admin/services/authentication/authentication.service";
import {AuthGuardService} from "./admin/services/auth-guard/auth-guard.service";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    RouterModule,
    AdminModule,
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
