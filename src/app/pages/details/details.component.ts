import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { WeatherService } from '../../services/weather/weather.service';
import { UiService } from '../../services/ui/ui.service';
import { TwitterService } from '../../services/twitter/twitter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  darkMode: boolean;
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  today: string;
  daysForecast: Object;
  cityIllustrationPath: string;
  sub1: Subscription;
  sub2: Subscription;
  errorMessage: string;
  tweets$: Observable<any>;

  constructor(
    public twitter: TwitterService
    , public activeRouter: ActivatedRoute
    , public weather: WeatherService
    , public ui: UiService
  ) { }

  ngOnInit() {

    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      // Gọi service để kiểm tra ở chế độ sáng hay tối
      this.darkMode = isDark;
    });

    const todayNumberInWeek = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.today = days[todayNumberInWeek];
    // Dựa vào tên thành phố, lấy hình ảnh đại diện, thời tiết hiện tại và thời tiết dự báo
    this.sub2 = this.activeRouter.paramMap.pipe(concatMap((route: any) => {
      this.city = route.params.city;
      // lấy hình ảnh đại diện cho thành phố, dựa vào biến city
      switch (this.city.toLowerCase()) {
        case 'paris':
          this.cityIllustrationPath = '../../../assets/cities/france.svg';
          break;
        case 'doha':
          this.cityIllustrationPath = '../../assets/cities/qatar.svg';
          break;
        case 'rabat':
          this.cityIllustrationPath = '../../assets/cities/rabat.svg';
          break;
        case 'tunis':
          this.cityIllustrationPath = '../../assets/cities/tunis.svg';
          break;
        case 'tokyo':
          this.cityIllustrationPath = '../../assets/cities/japan.svg';
          break;
        default:
          this.cityIllustrationPath = '../../assets/cities/default.svg';
      }
      // dùng phương thức forkJoin đợi để lấy thông tin thời tiết hiện tại và thời tiết dự báo
      return forkJoin(this.weather.getWeather(this.city), this.weather.getForecastObject(this.city));
    })
    ).subscribe((payload: any) => {
      // Các giá trị thời tiết hiện tại
      this.state = payload[0].weather[0].main;
      this.temp = Math.ceil(payload[0].main.temp);
      this.hum = payload[0].main.humidity;
      this.wind = Math.round(payload[0].wind.speed);
      const dates = {};
      for (const res of payload[1].list) {
        // Lấy thứ mấy trong tuần, vi du: "Web", "Thu"
        const date = new Date(res.dt_txt).toDateString().split(' ')[0];
        // Đưa các thông tin thời tiết dự báo vào mỗi thuộc tính
        if (dates[date]) {
          dates[date].counter += 1;
          dates[date].temp += res.main.temp;
        } else {
          dates[date] = {
            state: res.weather[0].main,
            temp: res.main.temp,
            counter: 1
          };
        }
      }
      // console.log(dates) => {Thu: {…}, Fri: {…}, Sat: {…}, Sun: {…}, Mon: {…}, Tue: {…}}
      // console.log(dates["Thu"]) => {state: "Rain", temp: 85.82000000000001, counter: 4}
      // console.log(Object.keys(dates)) => ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"]

      Object.keys(dates).forEach((day) => {
        // tính nhiệt độ trung bình
        dates[day].temp = Math.round(dates[day].temp / dates[day].counter);
      });
      // xóa thuộc tính ngày hiện tại ra khỏi thông tin thời tiết dự báo
      delete dates[Object.keys(dates)[0]];
      // chuyển đối tượng dates thành mảng với key và value
      this.daysForecast = Object.entries(dates).map(([key, value]) => ({ key, value }));
    }, (err) => {
      this.errorMessage = err.error.message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 2500);
    });

    this.tweets$ = this.twitter.fetchTweets(this.city);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}