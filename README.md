- this.darkModeState = new BehaviorSubject<boolean>(false): phóng ra một giá trị có kiểu boolean, giá trị là false

- this.ui.darkModeState.subscribe((value) => console.log(value)): Nhận lại giá trị vừa phóng ra

- this.ui.darkModeState.next(true): tiếp tục phóng giá trị có giá trị là true