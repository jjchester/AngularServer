import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorktermsComponent } from './My Work Terms/workterms.component';
import { FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { Wt1Component } from './My Work Terms/wt1/wt1.component';
import { Wt2Component } from './My Work Terms/wt2/wt2.component';
import { Wt3Component } from './My Work Terms/wt3/wt3.component';
import { Wt4Component } from './My Work Terms/wt4/wt4.component';
import { Wt5Component } from './My Work Terms/wt5/wt5.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorktermsComponent,
    Wt1Component,
    Wt2Component,
    Wt3Component,
    Wt4Component,
    Wt5Component,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
