import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InMemoryDataService} from "./services/in-memory-data.service/in-memory-data.service";
import {UserService} from "./services/user.service/user.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    InMemoryDataService,
    UserService,
  ]
})
export class CoreModule { }
