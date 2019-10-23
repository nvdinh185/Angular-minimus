import { Component } from '@angular/core';
import { UiService } from './services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  darkModeActive: boolean;
  sub: Subscription;

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    //Nhận lại đối tượng darkModeState phát ra
    //gán cho biến darkModeActive
    this.sub = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    })
  };

  modeToggleSwitch() {
    //Tiếp tục phát ra đối tượng darkModeState
    //ở đâu có thuộc tính subscribe sẽ nhận lại được
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  /**
   * Khi thoát khỏi trang này thì hủy đối tượng darkModeState
   * để giải phóng bộ nhớ
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}