import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { UiService } from '../../services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  @Input() set city(city: string) {
    this.cityName = city;

    //Lấy trạng thái thời tiết và nhiệt độ hiện tại
    //từ thông tin thời tiết hiện tại
    this.weather.getWeather(city)
      .subscribe((payload) => {
        this.state = payload.weather[0].main;
        this.temp = Math.ceil(payload.main.temp);
      }, (err) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      });
    //Lấy nhiệt độ cao nhất và thấp nhất cho ngày hiện tại
    //từ thông tin thời tiết dự báo
    this.weather.getForecast(city)
      .subscribe((payload) => {
        this.maxTemp = Math.round(payload[0].main.temp_max);
        this.minTemp = Math.round(payload[0].main.temp_min);
        for (const res of payload) {
          //Lấy nhiệt độ cao nhất và thấp nhất theo dự báo cho ngày hiện tại
          if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
            this.maxTemp = res.main.temp_max > this.maxTemp ? Math.round(res.main.temp_max) : this.maxTemp;
            this.minTemp = res.main.temp_min < this.minTemp ? Math.round(res.main.temp_min) : this.minTemp;
          }
        }
      }, (err) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      });
  }

  @Input() addMode;
  @Output() cityStored = new EventEmitter();
  darkMode: boolean;
  sub1: Subscription;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  errorMessage: string;
  cityName;

  constructor(public weather: WeatherService,
    public router: Router,
    public ui: UiService) {
  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  openDetails() {
    if (!this.addMode) {
      this.router.navigateByUrl('/details/' + this.cityName);
    }
  }

  addCity() {
    // this.fb.addCity(this.cityName).subscribe(() => {
    //   this.cityName = null;
    //   this.maxTemp = null;
    //   this.minTemp = null;
    //   this.state = null;
    //   this.temp = null;
    //   this.cityAdded = true;
    //   this.cityStored.emit();
    //   setTimeout(() => this.cityAdded = false, 2000);
    // });
  }
}