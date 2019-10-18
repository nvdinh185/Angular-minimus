import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui/ui.service';
import { TwitterService } from '../../services/twitter/twitter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  darkMode: boolean;
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  maxTemp: number;
  minTemp: number;
  cityIllustrationPath: string;
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;
  sub6: Subscription;

  constructor(public twitter: TwitterService, public activeRouter: ActivatedRoute, public weather: WeatherService, public ui: UiService) { }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.activeRouter.paramMap.subscribe((route: any) => {
      this.city = route.params.city;
      switch (this.city.toLowerCase()) {
        case 'paris':
          this.cityIllustrationPath = '../../../assets/cities/france.svg';
          break;
        case 'doha':
          this.cityIllustrationPath = '../../../assets/cities/qatar.svg';
          break;
        case 'rabat':
          this.cityIllustrationPath = '../../../assets/cities/rabat.svg';
          break;
        case 'tunis':
          this.cityIllustrationPath = '../../../assets/cities/tunis.svg';
          break;
        case 'tokyo':
          this.cityIllustrationPath = '../../../assets/cities/japan.svg';
          break;
        default:
          this.cityIllustrationPath = '../../../assets/cities/default.svg';
      }

      this.sub1 = this.weather.getWeatherState(this.city).subscribe((state) => this.state = state);
      this.sub2 = this.weather.getCurrentTemp(this.city).subscribe((temperature) => this.temp = temperature);
      this.sub3 = this.weather.getCurrentHum(this.city).subscribe((humidity) => this.hum = humidity);
      this.sub4 = this.weather.getCurrentWind(this.city).subscribe((windspeed) => this.wind = windspeed);
      this.sub5 = this.weather.getMaxTemp(this.city).subscribe((maxTemp) => this.maxTemp = maxTemp);
      this.sub6 = this.weather.getMinTemp(this.city).subscribe((minTemp) => this.minTemp = minTemp);
    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
    this.sub6.unsubscribe();
  }

}