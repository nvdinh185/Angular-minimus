- this.darkModeState = new BehaviorSubject<boolean>(false): phóng ra một giá trị có kiểu boolean, giá trị là false

- this.ui.darkModeState.subscribe((value) => console.log(value)): Nhận lại giá trị vừa phóng ra

- this.ui.darkModeState.next(true): tiếp tục phóng giá trị có giá trị là true

- new Date() => Mon Oct 21 2019 08:54:46 GMT+0700 (Giờ Đông Dương)
- new Date().toLocaleDateString('en-GB') => 21/10/2019
