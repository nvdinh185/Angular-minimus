import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class WeatherService {

  //đường dẫn để lấy thông tin thời tiết
  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/';
  private readonly appID = environment.appID;

  constructor(public http: HttpClient) {
  }

  /**
   * Lấy thông tin thời tiết hiện tại
   * @param city 
   */
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseURL}weather?&units=metric&q=${city}&appid=${this.appID}`)
  }

  /**
   * Lấy thông tin thời tiết dự báo
   * trong hôm nay và 4 ngày sắp tới
   * @param city 
   */
  getForecast(city: string): Subject<Array<any>> {
    const dataSubject = new Subject<Array<any>>();
    this.http.get(`${this.baseURL}forecast?&units=metric&q=${city}&appid=${this.appID}`)
      .subscribe((weather: any) => {
        dataSubject.next(weather.list);
      }, (err) => {
        dataSubject.next(err.error);
      });
    return dataSubject;
  }

  /**
   * Lấy trạng thái thời tiết hiện tại
   * @param city 
   */
  getWeatherState(city: string): Subject<string> {
    const dataSubject = new Subject<string>();
    this.http.get(`${this.baseURL}weather?&units=metric&q=${city}&appid=${this.appID}`)
      .subscribe((data) => {
        dataSubject.next(data['weather'][0].main);
      });
    return dataSubject;
  }

  /**
   * Lấy nhiệt độ hiện tại
   * @param city 
   */
  getCurrentTemp(city: string): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(`${this.baseURL}weather?&units=metric&q=${city}&appid=${this.appID}`)
      .subscribe((weather: any) => {
        dataSubject.next(Math.ceil(Number(weather.main.temp)));
      });
    return dataSubject;
  }

  /**
   * Lấy độ ẩm hiện tại
   * @param city 
   */
  getCurrentHum(city: string): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(`${this.baseURL}weather?&units=metric&q=${city}&appid=${this.appID}`)
      .subscribe((weather: any) => {
        dataSubject.next(weather.main.humidity);
      });
    return dataSubject;
  }

  /**
   * Lấy tốc độ gió hiện tại
   * @param city 
   */
  getCurrentWind(city: string): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(`${this.baseURL}weather?&units=metric&q=${city}&appid=${this.appID}`)
      .subscribe((weather: any) => {
        dataSubject.next(Math.round(Math.round(weather.wind.speed)));
      });
    return dataSubject;
  }

  /**
   * Trả về giá trị cao nhất của nhiệt độ
   * theo dự báo lấy trong hôm nay và 4 ngày sắp tới
   * @param city 
   */
  getMaxTemp(city: string): Subject<number> {
    const dataSubject = new Subject<number>();
    let max: number;
    this.http.get(`${this.baseURL}forecast?&units=metric&q=${city}&appid=${this.appID}`)
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

  /**
   * Trả về giá trị thấp nhất của nhiệt độ
   * theo dự báo lấy trong hôm nay và 4 ngày sắp tới
   * @param city 
   */
  getMinTemp(city: string): Subject<number> {
    const dataSubject = new Subject<number>();
    let min: number;
    this.http.get(`${this.baseURL}forecast?&units=metric&q=${city}&appid=${this.appID}`)
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

}