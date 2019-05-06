import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services';
import { Subscription } from 'rxjs';
import { Weather } from '../../model/weater';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: Weather;
  sub: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.sub = this.weatherService.getInfo('chicago').subscribe(data => {
      console.log(data);
      this.weather = data;
    })
  }
  ngOnDestroy() {
    console.log('deleting');
    this.sub.unsubscribe();
  }
}
