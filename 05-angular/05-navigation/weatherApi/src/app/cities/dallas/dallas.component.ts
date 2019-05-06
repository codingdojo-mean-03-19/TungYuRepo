import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services';
import { Subscription } from 'rxjs';
import { Weather } from '../../model/weater';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit, OnDestroy{
  weather: Weather;
  sub: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.sub = this.weatherService.getInfo('dallas').subscribe(data => {
      console.log(data);

      this.weather = data;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

}
