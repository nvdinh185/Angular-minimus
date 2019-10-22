- this.darkModeState = new BehaviorSubject<boolean>(false): phát ra một giá trị có kiểu boolean, 
giá trị là false

- this.ui.darkModeState.subscribe((value) => console.log(value)): Nhận lại giá trị vừa phát ra

- this.ui.darkModeState.next(true): tiếp tục phát ra có giá trị là true

- this.sub.unsubscribe(): không cho phép phát ra nữa

- Đối tượng phát ra có thể là thuộc tính hoặc phương thức

- Có thể dùng Observable, Subject để phát phương thức hoặc
BehaviorSubject của lớp 'rxjs' để phát thuộc tính

- Thứ tự thực hiện trong @Input:
	+ constructor
	+ @Input
	+ ngOnInit()
	+ nếu có hàm trả về promise

- new Date() => Mon Oct 21 2019 08:54:46 GMT+0700 (Giờ Đông Dương)
- new Date().toLocaleDateString('en-GB') => 21/10/2019
