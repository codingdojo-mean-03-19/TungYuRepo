import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Weather } from '../model/weater';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }
  getInfo(location: string){
    const key = '90064096377aef8f2e8de78a487eb7c0';
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},us&appid=${key}`)
    .pipe(map(data => {
      console.log(data);
      const { temp, humidity, temp_min, temp_max} = (data as any).main;
      const description  = (data as any).weather[0].description;
      const name = (data as any).name;
      // const { speed: wind } = (data as any).wind;
      return new Weather(temp, humidity, temp_max, temp_min, description, name);
    }));
  }
}
