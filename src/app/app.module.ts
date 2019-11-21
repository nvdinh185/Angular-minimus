import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorComponent } from './components/error/error.component';

import { WeatherService } from './services/weather/weather.service';
import { UiService } from './services/ui/ui.service';
import { TwitterService } from './services/twitter/twitter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    DetailsComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    WeatherService,
    UiService,
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }