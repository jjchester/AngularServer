import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {WorktermsComponent} from './My Work Terms/workterms.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: WorktermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
