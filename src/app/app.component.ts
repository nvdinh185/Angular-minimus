import { Component } from '@angular/core';
import { UiService } from './services/ui/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  darkModeActive: boolean;

  constructor(public ui: UiService, public router: Router) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    })
  };

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

}
