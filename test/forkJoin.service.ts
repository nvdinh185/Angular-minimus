import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  public requestDataFromMultipleSources(): Observable<any[]> {
    let response1 = this.http.get("https://api.openweathermap.org/data/2.5/weather?appid=1f481fd4fafd2cf9425a51599c8abd7a&units=metric&q=paris");
    let response2 = this.http.get("https://api.openweathermap.org/data/2.5/weather?appid=1f481fd4fafd2cf9425a51599c8abd7a&units=metric&q=saigon");
    let response3 = this.http.get("https://api.openweathermap.org/data/2.5/weather?appid=1f481fd4fafd2cf9425a51599c8abd7a&units=metric&q=hanoi");
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1, response2, response3]);
  }
}