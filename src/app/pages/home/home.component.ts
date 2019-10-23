import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cities;

  constructor() {
  }

  ngOnInit() {
    this.cities = [
      { name: 'danang' },
      { name: 'paris' },
      { name: 'doha' },
      { name: 'rabat' },
      { name: 'tunis' }
    ];
  }
}