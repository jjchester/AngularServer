import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {WorktermsComponent} from './My Work Terms/workterms.component';
import {Wt1Component} from './My Work Terms/wt1/wt1.component';
import {Wt2Component} from './My Work Terms/wt2/wt2.component';
import {Wt3Component} from './My Work Terms/wt3/wt3.component';
import {Wt4Component} from './My Work Terms/wt4/wt4.component';
import {Wt5Component} from './My Work Terms/wt5/wt5.component';
import {AboutmeComponent} from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'workterms', component: WorktermsComponent},
  { path: 'WT1', component: Wt1Component },
  { path: 'WT2', component: Wt2Component },
  { path: 'WT3', component: Wt3Component },
  { path: 'WT4', component: Wt4Component },
  { path: 'WT5', component: Wt5Component },
  { path: 'aboutme', component: AboutmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
