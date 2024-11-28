import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OngComponent } from './ong.component';


const routes: Routes = [
  { path: '', component: OngComponent }
];

@NgModule({
  declarations: [
    OngComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OngModule { }
