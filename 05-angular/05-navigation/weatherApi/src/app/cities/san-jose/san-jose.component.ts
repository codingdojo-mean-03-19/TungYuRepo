import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services';
import { Weather } from '../../model/weater';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit, OnDestroy {
  weather: Weather;
  sub: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.sub = this.weatherService.getInfo('san jose').subscribe(data => {
      console.log(data);

      this.weather = data;
    })

  }
  ngOnDestroy() {
    this.sub.unsubscribe;

  }

}
