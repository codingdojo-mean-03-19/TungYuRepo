import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services';
import { Weather } from '../../model/weater';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather: Weather;
  sub: Subscription;
  title = 'Washington DC';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.sub = this.weatherService.getInfo('washington').subscribe(data => {
      console.log(data);

      this.weather = data;
    })

  }
  ngOnDestroy() {
    this.sub.unsubscribe;

  }
}
