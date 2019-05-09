import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouteTreeService } from './services';

import * as fromRoutTree from './routeTree';
import * as fromProducts from './routeTree/products';
import * as fromReviews from './routeTree/reviews';


@NgModule({
  declarations: [
    AppComponent,
    ...fromRoutTree.components,
    ...fromProducts.components,
    ...fromReviews.components,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RouteTreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
