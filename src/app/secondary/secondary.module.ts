import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolComponent } from './cool/cool.component';



@NgModule({
  declarations: [
    CoolComponent
  ],
  exports: [
    CoolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecondaryModule { }
