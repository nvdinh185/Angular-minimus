import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiService {

  darkModeState: BehaviorSubject<boolean>;

  constructor() {
    //Phát ra thuộc tính darkModeState có giá trị là true
    this.darkModeState = new BehaviorSubject<boolean>(true);
  }
}