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
- Number("123") => chuyển chuỗi "123" thành kiểu số, giống hàm ParseInt
- let a = 2019-11-20 09:00:00
- new Date(a) => Wed Nov 20 2019 09:00:00 GMT+0700 (Giờ Đông Dương)
- new Date(a).toDateString() => Wed Nov 20 2019
- new Date(a).toDateString().split(' ')[0] => Wed

* Phương thức Object.keys(object1) : chuyển một đối tượng thành mảng,
giá trị của mảng là các thuộc tính của đối tượng
- const object1 = {
			a: 'somestring',
			b: 42,
			c: false
		};
- let a = Object.keys(object1)
- console.log(a) =>  ["a", "b", "c"]
- a.forEach((day) => {
        console.log(day)
		// => a b c
        console.log(object1[day])
		// => somestring 42 false
      })
- xóa 1 thuộc tính của 1 đối tượng
vd:  	var Employee = {
		  firstname: "John",
		  lastname: "Doe"
		}
delete Employee.firstname;
console.log(Employee); => { lastname: "Doe" }
- file HTML: pipe keyvalue: Chuyển một đối tượng thành một mảng với key và value
vd: {Fri: {…}, Sat: {…}, Sun: {…}, Mon: {…}, Tue: {…}} => [ { "key": "Fri", "value": { "state": "Rain", "temp": 19, "counter": 8 } }, { "key": "Sat", "value": { ... } }, { "key": "Sun", "value": { ... } }, { "key": "Mon", "value": { ... } }, { "key": "Tue", "value": { ... } } ]

- file ts: Chuyển một đối tượng thành mảng với key và value
var data = { firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com' }
var output = Object.entries(data).map(([key, value]) => ({key,value}));
console.log(output); => [{…}, {…}, {…}]

========================================================================
- File app.module.ts: Khai báo các module, component, service
- File app.routing.module.ts: Khai báo các đường dẫn Router của dự án
- File app.component.ts:
	+ Nhận lại giá trị của đối tượng darkModeState phát ra, gán cho biến darkModeActive để hiện thị chế độ sáng/tối
	+ Phương thức để thay đổi giá trị showMenu: Hiện hoặc ẩn menu
	+ Phương thức để thay đổi chế độ sáng/tối
	+ Khi thoát khỏi trang này thì hủy đối tượng darkModeState để giải phóng bộ nhớ
- File app.component.html: Hiển thị giao diện ban đầu
	+ Có menu chọn ở góc trên bên trái
	+ có logo ở góc trên bên trái
	+ có button chọn để thay đổi chế độ sáng/tối
	+ Render <router-outlet></router-outlet> là trang root khai báo trong file app.routing.module.ts
- File app.component.css: Định nghĩa các style cho các class
- Trong thư mục pages có các trang:
	+ home:
		- Khai báo biến cities là mảng chứa danh sách các thành phố
		- Render <weather-card> để hiển thị thông tin nhiệt độ hiện tại của các thành phố
	+ detail: Sử dụng this.activeRouter.paramMap.subscribe() để nhận dữ liệu chuyển hướng sang,
		hiển thị chi tiết nhiệt độ cho một thành phố
- Trong thư mục components có chứa các component:
	+ weather-card:
	- Lấy trạng thái thời tiết và nhiệt độ hiện tại
	- Lấy nhiệt độ cao nhất và thấp nhất cho ngày hiện tại
	- Nếu xảy ra lỗi trong quá trình lấy dữ liệu thì
	sử dụng component <error> để hiển thị lỗi
	- Khi kích vào một thành phố thì chuyển hướng sang trang detail
	 để hiển thị thông tin chi tiết của thành phố đó
	 (sử dụng this.router.navigateByUrl để thực hiện chuyển hướng)
	 
	+ error: Dùng để hiển thị thông báo lỗi
- Trong thư mục service: các dịch vụ
	+ ui.service.ts: dùng BehaviorSubject để phát ra thuộc tính darkModeState có giá trị true
	+ weather.service.ts: Lấy các thông tin thời tiết hiện tại và dự báo