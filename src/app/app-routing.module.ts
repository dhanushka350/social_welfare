import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalInformationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
