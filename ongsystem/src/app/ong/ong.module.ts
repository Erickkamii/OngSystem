import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngRoutingModule } from './ong-routing.module';
import { OngComponent } from './ong.component';


@NgModule({
  declarations: [
    OngComponent
  ],
  imports: [
    CommonModule,
    OngRoutingModule
  ]
})
export class OngModule { }
