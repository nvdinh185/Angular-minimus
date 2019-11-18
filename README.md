- this.darkModeState = new BehaviorSubject<boolean>(false): phát ra một thuộc tính có kiểu boolean, 
giá trị là false

- this.ui.darkModeState.subscribe((value) => console.log(value)): Nhận lại giá trị vừa phát ra

- this.ui.darkModeState.next(true): tiếp tục phát ra có giá trị là true

- this.sub.unsubscribe(): hủy bỏ đối tượng sub, để không cho phát ra nữa, giải phóng bộ nhớ

- Đối tượng phát ra có thể là thuộc tính hoặc phương thức

- Có thể dùng Observable, Subject của lớp 'rxjs' để phát phương thức hoặc
BehaviorSubject để phát thuộc tính

- Thứ tự thực hiện trong @Input:
	+ constructor
	+ @Input
	+ ngOnInit()
	+ nếu có hàm trả về promise

- new Date() => Mon Oct 21 2019 08:54:46 GMT+0700 (Giờ Đông Dương)
- new Date().toLocaleDateString('en-GB') => 21/10/2019

========================================================================
- File app.module.ts: Khai báo các module, component, service
- File app.routing.module.ts: Khai báo các đường dẫn Router của dự án
- File app.component.ts: 
	+ Nhận lại giá trị của đối tượng darkModeState phát ra
	+ Gán cho biến darkModeActive để hiện thị chế độ sáng/tối
	+ Phương thức để thay đổi chế độ sáng/tối
	+ Phương thức để thay đổi giá trị showMenu: Hiện hoặc ẩn menu
	+ Khi thoát khỏi trang này thì hủy đối tượng darkModeState để giải phóng bộ nhớ
- File app.component.html:
	Hiển thị giao diện ban đầu
	+ Có menu chọn ở góc trên bên trái
	+ có logo ở góc trên bên trái
	+ có button chọn để thay đổi chế độ sáng/tối
	+ Render <router-outlet></router-outlet> là trang root
	khai báo trong file app.routing.module.ts
- File app.component.css: Định nghĩa các style cho các class
- Trong thư mục pages có các trang:
	+ home: Render <weather-card> để hiển thị thông tin nhiệt độ hiện tại
	của các thành phố
	+ detail: Sử dụng this.activeRouter.paramMap.subscribe() để nhận dữ liệu chuyển hướng sang
- Trong thư mục components có chứa các component:
	+ weather-card:
	- Lấy trạng thái thời tiết và nhiệt độ hiện tại
	- Lấy nhiệt độ cao nhất và thấp nhất cho ngày hiện tại
	- Nếu xảy ra lỗi trong quá trình lấy dữ liệu thì
	sử dụng component <error> để hiển thị lỗi
	- Khi kích vào một thành phố thì chuyển hướng sang trang detail
	 để hiển thị thông tin chi tiết của thành phố đó
	 (sử dụng this.router.navigateByUrl để thực hiện chuyển hướng)
	 
	sử dụng component error để hiển thị thông báo lỗi
	+ error: Nếu có lỗi thì hiển thị thông báo lỗi
- Trong thư mục service: các dịch vụ
	+ ui.service.ts: dùng BehaviorSubject để phát ra giá trị true
	+ weather.service.ts: Lấy các thông tin thời tiết hiện tại và dự báo	