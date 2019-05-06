import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services';
import { Subscription } from 'rxjs';
import { Weather } from '../../model/weater';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit, OnDestroy {
  weather: Weather;
  sub: Subscription;
  title = 'Burbank CA';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.sub = this.weatherService.getInfo('burbank').subscribe(data => {
      this.weather = data;
    })
  }
  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe();
  }

}
