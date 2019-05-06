import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromCities from './cities';

import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent, ...fromCities.components
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
