import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { first, map } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?appid=1f481fd4fafd2cf9425a51599c8abd7a&units=metric&q=';
  private readonly forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private readonly appID = environment.appID;

  constructor(public http: HttpClient) {
  }

  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`).pipe((first()));
  }

  /* getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.forcastURL}${city}&units=${metric}&APPID=${this.appID}`)
      .pipe(first(), map((weather) => weather['list']));
  } */

  getCityWeatherByName(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<string> {
    const dataSub = new Subject<string>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((data) => {
        dataSub.next(data['weather']);
      }, (err) => {
        console.log(err);
      });
    return dataSub;
  }

  getCitiesWeathersByNames(cities: Array<string>, metric: 'metric' | 'imperial' = 'metric'): Subject<any> {
    const citiesSubject = new Subject();
    cities.forEach((city) => {
      citiesSubject.next(this.http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`));
    });
    return citiesSubject;
  }

  getWeatherState(city: string): Subject<string> {
    const dataSubject = new Subject<string>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((data) => {
        dataSubject.next(data['weather'][0].main);
      });
    return dataSubject;
  }

  getCurrentTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((weather: any) => {
        dataSubject.next(Math.round(Number(weather.main.temp)));
      });
    return dataSubject;
  }


  getCurrentHum(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((weather: any) => {
        console.log(weather);
        dataSubject.next(weather.main.humidity);
      });
    return dataSubject;
  }


  getCurrentWind(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((weather: any) => {
        dataSubject.next(Math.round(Math.round(weather.wind.speed)));
      });
    return dataSubject;
  }


  getMaxTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
    const dataSubject = new Subject<number>();
    let max: number;
    this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((weather: any) => {
        max = weather.list[0].main.temp;
        weather.list.forEach((value) => {
          if (max < value.main.temp) {
            max = value.main.temp;
          }
        });
        dataSubject.next(Math.round(max));
      });
    return dataSubject;
  }

  getMinTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
    const dataSubject = new Subject<number>();
    let min: number;
    this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((weather: any) => {
        min = weather.list[0].main.temp;
        weather.list.forEach((value) => {
          if (min > value.main.temp) {
            min = value.main.temp;
          }
        });
        dataSubject.next(Math.round(min));
      });
    return dataSubject;
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<Array<any>> {
    const dataSubject = new Subject<Array<any>>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&appid=1f481fd4fafd2cf9425a51599c8abd7a`)
      .subscribe((weather: any) => {
        dataSubject.next(weather.list);
      });
    return dataSubject;
  }

}