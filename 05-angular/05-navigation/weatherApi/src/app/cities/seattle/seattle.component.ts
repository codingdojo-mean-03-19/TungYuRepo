import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services';
import { Weather } from '../../model/weater';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit, OnDestroy {
  weather: Weather;
  sub: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.sub = this.weatherService.getInfo('seattle').subscribe(data => {
      console.log(data);

      this.weather = data;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

}
