import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VolunteerComponent } from './volunteer.component';


const routes: Routes = [
  { path: '', component: VolunteerComponent }
];

@NgModule({
  declarations: [
    VolunteerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VolunteerModule { }
