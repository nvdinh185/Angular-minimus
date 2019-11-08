(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");





var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'details/:city', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n    Slide Menu\r\n*/\r\n.side-menu_container {\r\n\t/* giữ cố định menu khi kéo chuột lên, xuống */\r\n\tposition: fixed;\r\n\t/* chiều rộng của menu chiếm 100% bề ngang màn hình */\r\n\twidth: 100%;\r\n\t/* thuộc tính này không phản ứng với hành động kích chuột */\r\n\tpointer-events: none;\r\n\t/* thứ tự ưu tiên hiển thị của menu */\r\n\tz-index: 3;\r\n}\r\n.side-menu_container-active {\r\n\t/* thuộc tính này phản ứng với hành động kích chuột */\r\n\tpointer-events: auto;\r\n}\r\n.slide-menu {\r\n\t/* Dịch chuyển theo phương ngang 100% theo chiều âm, để ẩn menu đi */\r\n\ttransform: translateX(-100%);\r\n\t/* Bề rộng của menu */\r\n\twidth: 30rem;\r\n\t/* Màu nền khi ở chế độ sáng */\r\n\tbackground-color: rgb(159, 217, 228);\r\n\t/* Hiển thị theo dạng lưới */\r\n\tdisplay: grid;\r\n\t/* tỉ lệ bề rộng theo mỗi dòng, tùy theo số dòng bên trong */\r\n\tgrid-template-rows: 2fr 4fr 1fr;\r\n}\r\n.slide-menu-active {\r\n\t/* Khi đang active thì không ẩn menu */\r\n\ttransform: none;\r\n}\r\n.slide-menu-active-dark {\r\n\t/* Màu nền khi ở chế độ tối */\r\n\tbackground-color: #2B244D;\r\n}\r\n/* \r\n\tmenu header\r\n*/\r\n.menu-header {\r\n\t/* màu nền của menu header, thay đổi theo hướng từ trái sang phải */\r\n\tbackground: linear-gradient(to right, #00FF9B, #5f84fb);\r\n\t/* hiển thị theo dạng lưới */\r\n\tdisplay: grid;\r\n\t/* tỉ lệ bề rộng theo mỗi hàng, có 3 hàng */\r\n\tgrid-template-rows: 1fr 4fr 1fr;\r\n\t/* sắp xếp bố cục theo lưới, chia làm 2 cột, lấy theo tên khai báo trong .greeting_text */\r\n\t/* class greeting chiếm 2 cột */\r\n\tgrid-template-areas: \"greeting greeting\";\r\n\t/* chữ luôn màu trắng dù ở chế độ sáng hay tối */\r\n\tcolor: white;\r\n}\r\n.menu-header-dark {\r\n\t/* màu nền của menu header khi ở chế độ tối, thay đổi theo hướng từ dưới lên trên */\r\n\tbackground: linear-gradient(to top, #30cfd0, #330867);\r\n}\r\n.greeting_text {\r\n\t/* đặt tên cho class này, để sử dụng trong class cha:\r\n\t.menu-header (trong thuộc tính: grid-template-areas) */\r\n\tgrid-area: greeting;\r\n\tfont-size: 1.25rem;\r\n\tletter-spacing: 0.15rem;\r\n\ttext-transform: uppercase;\r\n\tmargin-top: 1rem;\r\n\t/* định dạng theo nằm ngang thì nằm chính giữa */\r\n\t/* canh giữa chính nó trong class cha */\r\n\tjustify-self: center;\r\n}\r\n.profile-image_container {\r\n\t/* sắp xếp theo chiều dọc thì nằm giữa */\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n\t/* Khoảng cách với lề trái */\r\n\tmargin-left: 2rem;\r\n}\r\n.profile_image {\r\n\t/* chiều rộng của ảnh đại diện */\r\n\twidth: 4rem;\r\n}\r\n.account-details {\r\n\tdisplay: flex;\r\n\t/* sắp xếp các mục theo chiều dọc */\r\n\tflex-direction: column;\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n}\r\n.name_text {\r\n\tfont-size: 1.15rem;\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n.email_text {\r\n\tfont-size: 0.9rem;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n/* \r\nmenu links\r\n*/\r\n.links_container {\r\n\t/* nằm phía trên theo phương dọc so với class cha, đây là mặc định */\r\n\talign-self: start;\r\n}\r\n.menu-links {\r\n\t/* sắp xếp các mục theo chiều dọc */\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* không cho hiển thị dấu chấm trước danh sách */\r\n\tlist-style: none;\r\n}\r\n.menu-links-dark {\r\n\t/* màu chữ khi ở chế độ tối, khi ở chế độ sáng thì màu chữ lấy theo mặc định là màu đen */\r\n\tcolor: white;\r\n}\r\n.link-active {\r\n\t/* link nào active thì tô màu khác và gạch chân */\r\n\tcolor: #495CFC;\r\n\tborder-bottom: 1px solid #495CFC;\r\n}\r\n.menu-link {\r\n\t/* đệm và lề cho các mục trong danh sách */\r\n\tpadding: 1rem 0;\r\n\tmargin: 0.5rem 0;\r\n}\r\n.copyright_container {\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n}\r\n.copyright_text {\r\n\tdisplay: block;\r\n\t/* nằm giữa theo phương ngang */\r\n\ttext-align: center;\r\n\tcolor: white;\r\n}\r\n/* \r\n\tMain\r\n*/\r\n/* style cho nội dung chính ở chế độ tối */\r\n.root_container-dark {\r\n\t/* áp dụng ở chế độ tối: Thay đổi màu nền theo hướng từ dưới lên trên */\r\n\tbackground-image: linear-gradient(to top, #5ee7df, #372865);\r\n}\r\n/* Style cho phần header */\r\n.main_header {\r\n\t/* các mục con hiển thị chính giữa theo phương dọc */\r\n\talign-items: center;\r\n\tdisplay: grid;\r\n\t/* chia bề rộng thành cột, có 3 cột */\r\n\tgrid-template-columns: 1fr 1fr 0.5fr;\r\n\tbackground-color: rgb(169, 205, 226);\r\n\theight: 4rem;\r\n}\r\n/* Style cho header khi ở chế độ tối */\r\n.main_header-dark {\r\n\tbackground-color: #2B244D;\r\n\tcolor: white;\r\n}\r\n/*\r\n left section\r\n */\r\n.left_section {\r\n\tdisplay: grid;\r\n\t/* phần bên trái được chia làm 2 cột */\r\n\tgrid-template-columns: 1fr 1fr;\r\n\t/* bề ngang của phần bên trái */\r\n\twidth: 6rem;\r\n}\r\n.hamburger_icon {\r\n\tz-index: 3;\r\n\theight: 1rem;\r\n\t/* Phần đệm của icon menu */\r\n\tpadding: 0.5rem 1.5rem;\r\n}\r\n.logo_icon {\r\n\theight: 2rem;\r\n\tmargin-left: 1rem;\r\n}\r\n.logo_text {\r\n\tfill: rgb(160, 14, 75);\r\n\ttransform : translate(210px, 56px);\r\n}\r\n.logo_text-dark {\r\n\tfill: #fff;\r\n}\r\n/* Style cho chữ */\r\n.date_text {\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin: 0.5rem 0;\r\n}\r\n/* Style cho chữ của điều khiển LIGHT và DARK */\r\n.mode-toggle_text {\r\n\tfont-size: 0.75rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n/* Style cho khung chứa thanh và nút */\r\n.toggle-button_container {\r\n\t/* hiển thị bàn tay khi đưa con trỏ vào */\r\n\tcursor: pointer;\r\n\t/* đặt position: relative để những thành phần con lấy tọa độ theo tọa độ của cha */\r\n\tposition: relative;\r\n\tmargin: 0 0.75rem 0 0.25rem;\r\n}\r\n/* Style cho thanh trượt */\r\n.mode-toggle_bg {\r\n\theight: 1rem;\r\n\twidth: 3rem;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: rgba(94, 68, 68, 0.5);\r\n\tdisplay: inline-block;\r\n}\r\n/* Style cho thanh trượt khi chọn (ở chế độ tối)  */\r\n.mode-toggle_bg-checked {\r\n\tbackground-color: #FF0070;\r\n}\r\n/* Style cho nút trượt */\r\n.mode-toggle_circle {\r\n\theight: 1.30rem;\r\n\twidth: 1.30rem;\r\n\tbackground-color: #2B244D;\r\n\tposition: absolute;\r\n\ttop: -0.25rem;\r\n\tborder-radius: 50%;\r\n\t/* nút trượt di chuyển */\r\n\t-webkit-transition: left .3s linear;\r\n\tleft: 0rem;\r\n}\r\n/* Style cho nút trượt khi chọn (ở chế độ tối)  */\r\n.mode-toggle_circle-checked {\r\n\tbackground-color: white;\r\n\tleft: 2rem;\r\n}\r\n/* \r\n\tnếu chiều rộng màn hình tối đa là 959px \r\n\tcó nghĩa là khi chiều rộng màn hình <= 959px\r\n\tthì sử dụng các style này\r\n*/\r\n@media screen and (max-width: 959px) {\r\n\t.main_header {\r\n\t\t/* Hiển thị theo dạng lưới (chỉ có 1 cột) */\r\n\t\tgrid-template-columns: 1fr;\r\n\t\t/* canh giữa các thành phần con theo phương ngang */\r\n\t\tjustify-items: center;\r\n\t\tpadding: 1rem 0;\r\n\t\theight: 8rem;\r\n\t}\r\n\t\r\n\t.left_section {\r\n\t\t/* Hiển thị theo dạng lưới (có 2 cột, cột đầu tiên có chiều rộng là 0) */\r\n\t\tgrid-template-columns: 0 1fr;\r\n\t\t/* chiếm 100% chiều ngang */\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.logo_icon {\r\n\t\t/* khoảng cách với lề của icon */\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtDQUNDLDhDQUE4QztDQUM5QyxlQUFlO0NBQ2YscURBQXFEO0NBQ3JELFdBQVc7Q0FDWCwyREFBMkQ7Q0FDM0Qsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLHFEQUFxRDtDQUNyRCxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLG9FQUFvRTtDQUNwRSw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsb0NBQW9DO0NBQ3BDLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsNERBQTREO0NBQzVELCtCQUErQjtBQUNoQztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLDZCQUE2QjtDQUM3Qix5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQztBQUNEO0NBQ0MsbUVBQW1FO0NBQ25FLHVEQUF1RDtDQUN2RCw0QkFBNEI7Q0FDNUIsYUFBYTtDQUNiLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IseUZBQXlGO0NBQ3pGLCtCQUErQjtDQUMvQix3Q0FBd0M7Q0FDeEMsZ0RBQWdEO0NBQ2hELFlBQVk7QUFDYjtBQUVBO0NBQ0MsbUZBQW1GO0NBQ25GLHFEQUFxRDtBQUN0RDtBQUVBO0NBQ0M7dURBQ3NEO0NBQ3RELG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsZ0RBQWdEO0NBQ2hELHVDQUF1QztDQUN2QyxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLHdDQUF3QztDQUN4QyxvREFBb0Q7Q0FDcEQsa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1QixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyxXQUFXO0FBQ1o7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQ0FBbUM7Q0FDbkMsc0JBQXNCO0NBQ3RCLG9EQUFvRDtDQUNwRCxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFFQTs7Q0FFQztBQUNEO0NBQ0Msb0VBQW9FO0NBQ3BFLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZ0RBQWdEO0NBQ2hELGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MseUZBQXlGO0NBQ3pGLFlBQVk7QUFDYjtBQUVBO0NBQ0MsaURBQWlEO0NBQ2pELGNBQWM7Q0FDZCxnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxvREFBb0Q7Q0FDcEQsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7QUFFQTs7Q0FFQztBQUVELDBDQUEwQztBQUMxQztDQUNDLHVFQUF1RTtDQUN2RSwyREFBMkQ7QUFDNUQ7QUFFQSwwQkFBMEI7QUFDMUI7Q0FDQyxvREFBb0Q7Q0FDcEQsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsb0NBQW9DO0NBQ3BDLG9DQUFvQztDQUNwQyxZQUFZO0FBQ2I7QUFFQSxzQ0FBc0M7QUFDdEM7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiO0FBRUE7O0VBRUU7QUFDRjtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQixXQUFXO0FBQ1o7QUFFQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLHNCQUFzQjtBQUN2QjtBQUVBO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtDQUFrQztBQUNuQztBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBRUEsa0JBQWtCO0FBQ2xCO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFFQSwrQ0FBK0M7QUFDL0M7Q0FDQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtBQUN2QjtBQUVBLHNDQUFzQztBQUN0QztDQUNDLHlDQUF5QztDQUN6QyxlQUFlO0NBQ2Ysa0ZBQWtGO0NBQ2xGLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7QUFFQSwwQkFBMEI7QUFDMUI7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLHFCQUFxQjtDQUNyQix1Q0FBdUM7Q0FDdkMscUJBQXFCO0FBQ3RCO0FBRUEsbURBQW1EO0FBQ25EO0NBQ0MseUJBQXlCO0FBQzFCO0FBRUEsd0JBQXdCO0FBQ3hCO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLG1DQUFtQztDQUNuQyxVQUFVO0FBQ1g7QUFFQSxpREFBaUQ7QUFDakQ7Q0FDQyx1QkFBdUI7Q0FDdkIsVUFBVTtBQUNYO0FBRUE7Ozs7Q0FJQztBQUNEO0NBQ0M7RUFDQywyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLG1EQUFtRDtFQUNuRCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLHdFQUF3RTtFQUN4RSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGdDQUFnQztFQUNoQyxjQUFjO0NBQ2Y7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIFNsaWRlIE1lbnVcclxuKi9cclxuLnNpZGUtbWVudV9jb250YWluZXIge1xyXG5cdC8qIGdp4buvIGPhu5EgxJHhu4tuaCBtZW51IGtoaSBrw6lvIGNodeG7mXQgbMOqbiwgeHXhu5FuZyAqL1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHQvKiBjaGnhu4F1IHLhu5luZyBj4bunYSBtZW51IGNoaeG6v20gMTAwJSBi4buBIG5nYW5nIG3DoG4gaMOsbmggKi9cclxuXHR3aWR0aDogMTAwJTtcclxuXHQvKiB0aHXhu5ljIHTDrW5oIG7DoHkga2jDtG5nIHBo4bqjbiDhu6luZyB24bubaSBow6BuaCDEkeG7mW5nIGvDrWNoIGNodeG7mXQgKi9cclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHQvKiB0aOG7qSB04buxIMawdSB0acOqbiBoaeG7g24gdGjhu4sgY+G7p2EgbWVudSAqL1xyXG5cdHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnVfY29udGFpbmVyLWFjdGl2ZSB7XHJcblx0LyogdGh14buZYyB0w61uaCBuw6B5IHBo4bqjbiDhu6luZyB24bubaSBow6BuaCDEkeG7mW5nIGvDrWNoIGNodeG7mXQgKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLnNsaWRlLW1lbnUge1xyXG5cdC8qIEThu4tjaCBjaHV54buDbiB0aGVvIHBoxrDGoW5nIG5nYW5nIDEwMCUgdGhlbyBjaGnhu4F1IMOibSwgxJHhu4Mg4bqpbiBtZW51IMSRaSAqL1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcblx0LyogQuG7gSBy4buZbmcgY+G7p2EgbWVudSAqL1xyXG5cdHdpZHRoOiAzMHJlbTtcclxuXHQvKiBNw6B1IG7hu4FuIGtoaSDhu58gY2jhur8gxJHhu5kgc8OhbmcgKi9cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyMTcsIDIyOCk7XHJcblx0LyogSGnhu4NuIHRo4buLIHRoZW8gZOG6oW5nIGzGsOG7m2kgKi9cclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdC8qIHThu4kgbOG7hyBi4buBIHLhu5luZyB0aGVvIG3hu5dpIGTDsm5nLCB0w7l5IHRoZW8gc+G7kSBkw7JuZyBiw6puIHRyb25nICovXHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgNGZyIDFmcjtcclxufVxyXG5cclxuLnNsaWRlLW1lbnUtYWN0aXZlIHtcclxuXHQvKiBLaGkgxJFhbmcgYWN0aXZlIHRow6wga2jDtG5nIOG6qW4gbWVudSAqL1xyXG5cdHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlLW1lbnUtYWN0aXZlLWRhcmsge1xyXG5cdC8qIE3DoHUgbuG7gW4ga2hpIOG7nyBjaOG6vyDEkeG7mSB04buRaSAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyQjI0NEQ7XHJcbn1cclxuXHJcbi8qIFxyXG5cdG1lbnUgaGVhZGVyXHJcbiovXHJcbi5tZW51LWhlYWRlciB7XHJcblx0LyogbcOgdSBu4buBbiBj4bunYSBtZW51IGhlYWRlciwgdGhheSDEkeG7lWkgdGhlbyBoxrDhu5tuZyB04burIHRyw6FpIHNhbmcgcGjhuqNpICovXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBGRjlCLCAjNWY4NGZiKTtcclxuXHQvKiBoaeG7g24gdGjhu4sgdGhlbyBk4bqhbmcgbMaw4bubaSAqL1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0LyogdOG7iSBs4buHIGLhu4EgcuG7mW5nIHRoZW8gbeG7l2kgaMOgbmcsIGPDsyAzIGjDoG5nICovXHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDFmcjtcclxuXHQvKiBz4bqvcCB44bq/cCBi4buRIGPhu6VjIHRoZW8gbMaw4bubaSwgY2hpYSBsw6BtIDIgY+G7mXQsIGzhuqV5IHRoZW8gdMOqbiBraGFpIGLDoW8gdHJvbmcgLmdyZWV0aW5nX3RleHQgKi9cclxuXHQvKiBjbGFzcyBncmVldGluZyBjaGnhur9tIDIgY+G7mXQgKi9cclxuXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcImdyZWV0aW5nIGdyZWV0aW5nXCI7XHJcblx0LyogY2jhu68gbHXDtG4gbcOgdSB0cuG6r25nIGTDuSDhu58gY2jhur8gxJHhu5kgc8OhbmcgaGF5IHThu5FpICovXHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItZGFyayB7XHJcblx0LyogbcOgdSBu4buBbiBj4bunYSBtZW51IGhlYWRlciBraGkg4bufIGNo4bq/IMSR4buZIHThu5FpLCB0aGF5IMSR4buVaSB0aGVvIGjGsOG7m25nIHThu6sgZMaw4bubaSBsw6puIHRyw6puICovXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzMwY2ZkMCwgIzMzMDg2Nyk7XHJcbn1cclxuXHJcbi5ncmVldGluZ190ZXh0IHtcclxuXHQvKiDEkeG6t3QgdMOqbiBjaG8gY2xhc3MgbsOgeSwgxJHhu4Mgc+G7rSBk4bulbmcgdHJvbmcgY2xhc3MgY2hhOlxyXG5cdC5tZW51LWhlYWRlciAodHJvbmcgdGh14buZYyB0w61uaDogZ3JpZC10ZW1wbGF0ZS1hcmVhcykgKi9cclxuXHRncmlkLWFyZWE6IGdyZWV0aW5nO1xyXG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcblx0LyogxJHhu4tuaCBk4bqhbmcgdGhlbyBu4bqxbSBuZ2FuZyB0aMOsIG7hurFtIGNow61uaCBnaeG7r2EgKi9cclxuXHQvKiBjYW5oIGdp4buvYSBjaMOtbmggbsOzIHRyb25nIGNsYXNzIGNoYSAqL1xyXG5cdGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZV9jb250YWluZXIge1xyXG5cdC8qIHPhuq9wIHjhur9wIHRoZW8gY2hp4buBdSBk4buNYyB0aMOsIG7hurFtIGdp4buvYSAqL1xyXG5cdC8qIMSRxrDhu6NjIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgZOG7jWMgc28gduG7m2kgY2xhc3MgY2hhICovXHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdC8qIEtob+G6o25nIGPDoWNoIHbhu5tpIGzhu4EgdHLDoWkgKi9cclxuXHRtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnByb2ZpbGVfaW1hZ2Uge1xyXG5cdC8qIGNoaeG7gXUgcuG7mW5nIGPhu6dhIOG6o25oIMSR4bqhaSBkaeG7h24gKi9cclxuXHR3aWR0aDogNHJlbTtcclxufVxyXG5cclxuLmFjY291bnQtZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQvKiBz4bqvcCB44bq/cCBjw6FjIG3hu6VjIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LyogxJHGsOG7o2MgY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyBzbyB24bubaSBjbGFzcyBjaGEgKi9cclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYW1lX3RleHQge1xyXG5cdGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5lbWFpbF90ZXh0IHtcclxuXHRmb250LXNpemU6IDAuOXJlbTtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG59XHJcblxyXG4vKiBcclxubWVudSBsaW5rc1xyXG4qL1xyXG4ubGlua3NfY29udGFpbmVyIHtcclxuXHQvKiBu4bqxbSBwaMOtYSB0csOqbiB0aGVvIHBoxrDGoW5nIGThu41jIHNvIHbhu5tpIGNsYXNzIGNoYSwgxJHDonkgbMOgIG3hurdjIMSR4buLbmggKi9cclxuXHRhbGlnbi1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLm1lbnUtbGlua3Mge1xyXG5cdC8qIHPhuq9wIHjhur9wIGPDoWMgbeG7pWMgdGhlbyBjaGnhu4F1IGThu41jICovXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC8qIGtow7RuZyBjaG8gaGnhu4NuIHRo4buLIGThuqV1IGNo4bqlbSB0csaw4bubYyBkYW5oIHPDoWNoICovXHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUtbGlua3MtZGFyayB7XHJcblx0LyogbcOgdSBjaOG7ryBraGkg4bufIGNo4bq/IMSR4buZIHThu5FpLCBraGkg4bufIGNo4bq/IMSR4buZIHPDoW5nIHRow6wgbcOgdSBjaOG7ryBs4bqleSB0aGVvIG3hurdjIMSR4buLbmggbMOgIG3DoHUgxJFlbiAqL1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmstYWN0aXZlIHtcclxuXHQvKiBsaW5rIG7DoG8gYWN0aXZlIHRow6wgdMO0IG3DoHUga2jDoWMgdsOgIGfhuqFjaCBjaMOibiAqL1xyXG5cdGNvbG9yOiAjNDk1Q0ZDO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk1Q0ZDO1xyXG59XHJcblxyXG4ubWVudS1saW5rIHtcclxuXHQvKiDEkeG7h20gdsOgIGzhu4EgY2hvIGPDoWMgbeG7pWMgdHJvbmcgZGFuaCBzw6FjaCAqL1xyXG5cdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRtYXJnaW46IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uY29weXJpZ2h0X2NvbnRhaW5lciB7XHJcblx0LyogxJHGsOG7o2MgY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyBzbyB24bubaSBjbGFzcyBjaGEgKi9cclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHRfdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0LyogbuG6sW0gZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBcclxuXHRNYWluXHJcbiovXHJcblxyXG4vKiBzdHlsZSBjaG8gbuG7mWkgZHVuZyBjaMOtbmgg4bufIGNo4bq/IMSR4buZIHThu5FpICovXHJcbi5yb290X2NvbnRhaW5lci1kYXJrIHtcclxuXHQvKiDDoXAgZOG7pW5nIOG7nyBjaOG6vyDEkeG7mSB04buRaTogVGhheSDEkeG7lWkgbcOgdSBu4buBbiB0aGVvIGjGsOG7m25nIHThu6sgZMaw4bubaSBsw6puIHRyw6puICovXHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzVlZTdkZiwgIzM3Mjg2NSk7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBwaOG6p24gaGVhZGVyICovXHJcbi5tYWluX2hlYWRlciB7XHJcblx0LyogY8OhYyBt4bulYyBjb24gaGnhu4NuIHRo4buLIGNow61uaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyAqL1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiBjaGlhIGLhu4EgcuG7mW5nIHRow6BuaCBj4buZdCwgY8OzIDMgY+G7mXQgKi9cclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC41ZnI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjA1LCAyMjYpO1xyXG5cdGhlaWdodDogNHJlbTtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIGhlYWRlciBraGkg4bufIGNo4bq/IMSR4buZIHThu5FpICovXHJcbi5tYWluX2hlYWRlci1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLypcclxuIGxlZnQgc2VjdGlvblxyXG4gKi9cclxuLmxlZnRfc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiBwaOG6p24gYsOqbiB0csOhaSDEkcaw4bujYyBjaGlhIGzDoG0gMiBj4buZdCAqL1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHQvKiBi4buBIG5nYW5nIGPhu6dhIHBo4bqnbiBiw6puIHRyw6FpICovXHJcblx0d2lkdGg6IDZyZW07XHJcbn1cclxuXHJcbi5oYW1idXJnZXJfaWNvbiB7XHJcblx0ei1pbmRleDogMztcclxuXHRoZWlnaHQ6IDFyZW07XHJcblx0LyogUGjhuqduIMSR4buHbSBj4bunYSBpY29uIG1lbnUgKi9cclxuXHRwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG59XHJcblxyXG4ubG9nb19pY29uIHtcclxuXHRoZWlnaHQ6IDJyZW07XHJcblx0bWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5sb2dvX3RleHQge1xyXG5cdGZpbGw6IHJnYigxNjAsIDE0LCA3NSk7XHJcblx0dHJhbnNmb3JtIDogdHJhbnNsYXRlKDIxMHB4LCA1NnB4KTtcclxufVxyXG5cclxuLmxvZ29fdGV4dC1kYXJrIHtcclxuXHRmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8gY2jhu68gKi9cclxuLmRhdGVfdGV4dCB7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG5cdG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBjaOG7ryBj4bunYSDEkWnhu4F1IGtoaeG7g24gTElHSFQgdsOgIERBUksgKi9cclxuLm1vZGUtdG9nZ2xlX3RleHQge1xyXG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBraHVuZyBjaOG7qWEgdGhhbmggdsOgIG7DunQgKi9cclxuLnRvZ2dsZS1idXR0b25fY29udGFpbmVyIHtcclxuXHQvKiBoaeG7g24gdGjhu4sgYsOgbiB0YXkga2hpIMSRxrBhIGNvbiB0cuG7jyB2w6BvICovXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdC8qIMSR4bq3dCBwb3NpdGlvbjogcmVsYXRpdmUgxJHhu4Mgbmjhu69uZyB0aMOgbmggcGjhuqduIGNvbiBs4bqleSB04buNYSDEkeG7mSB0aGVvIHThu41hIMSR4buZIGPhu6dhIGNoYSAqL1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW46IDAgMC43NXJlbSAwIDAuMjVyZW07XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyB0aGFuaCB0csaw4bujdCAqL1xyXG4ubW9kZS10b2dnbGVfYmcge1xyXG5cdGhlaWdodDogMXJlbTtcclxuXHR3aWR0aDogM3JlbTtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgNjgsIDY4LCAwLjUpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIHRoYW5oIHRyxrDhu6N0IGtoaSBjaOG7jW4gKOG7nyBjaOG6vyDEkeG7mSB04buRaSkgICovXHJcbi5tb2RlLXRvZ2dsZV9iZy1jaGVja2VkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDcwO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8gbsO6dCB0csaw4bujdCAqL1xyXG4ubW9kZS10b2dnbGVfY2lyY2xlIHtcclxuXHRoZWlnaHQ6IDEuMzByZW07XHJcblx0d2lkdGg6IDEuMzByZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJCMjQ0RDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMC4yNXJlbTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0LyogbsO6dCB0csaw4bujdCBkaSBjaHV54buDbiAqL1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAuM3MgbGluZWFyO1xyXG5cdGxlZnQ6IDByZW07XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBuw7p0IHRyxrDhu6N0IGtoaSBjaOG7jW4gKOG7nyBjaOG6vyDEkeG7mSB04buRaSkgICovXHJcbi5tb2RlLXRvZ2dsZV9jaXJjbGUtY2hlY2tlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0bGVmdDogMnJlbTtcclxufVxyXG5cclxuLyogXHJcblx0buG6v3UgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCB04buRaSDEkWEgbMOgIDk1OXB4IFxyXG5cdGPDsyBuZ2jEqWEgbMOgIGtoaSBjaGnhu4F1IHLhu5luZyBtw6BuIGjDrG5oIDw9IDk1OXB4XHJcblx0dGjDrCBz4butIGThu6VuZyBjw6FjIHN0eWxlIG7DoHlcclxuKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuXHQubWFpbl9oZWFkZXIge1xyXG5cdFx0LyogSGnhu4NuIHRo4buLIHRoZW8gZOG6oW5nIGzGsOG7m2kgKGNo4buJIGPDsyAxIGPhu5l0KSAqL1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblx0XHQvKiBjYW5oIGdp4buvYSBjw6FjIHRow6BuaCBwaOG6p24gY29uIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuXHRcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRcdGhlaWdodDogOHJlbTtcclxuXHR9XHJcblx0XHJcblx0LmxlZnRfc2VjdGlvbiB7XHJcblx0XHQvKiBIaeG7g24gdGjhu4sgdGhlbyBk4bqhbmcgbMaw4bubaSAoY8OzIDIgY+G7mXQsIGPhu5l0IMSR4bqndSB0acOqbiBjw7MgY2hp4buBdSBy4buZbmcgbMOgIDApICovXHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMWZyO1xyXG5cdFx0LyogY2hp4bq/bSAxMDAlIGNoaeG7gXUgbmdhbmcgKi9cclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmxvZ29faWNvbiB7XHJcblx0XHQvKiBraG/huqNuZyBjw6FjaCB24bubaSBs4buBIGPhu6dhIGljb24gKi9cclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Slide Menu-->\r\n<aside class=\"side-menu_container\" [ngClass]=\"{'side-menu_container-active': showMenu}\" (click)=\"toggleMenu()\">\r\n  <!-- phương thức $event.stopImmediatePropagation()\r\n    để ngăn chặn thực hiện hiện hàm toggleMenu khi kích vào menu -->\r\n  <nav class=\"slide-menu\" [ngClass]=\"{'slide-menu-active': showMenu, 'slide-menu-active-dark': darkModeActive}\"\r\n    (click)=\"$event.stopImmediatePropagation();\">\r\n    <section class=\"menu-header\" [ngClass]=\"{'menu-header-dark': darkModeActive}\">\r\n      <span class=\"greeting_text\">Welcome Back</span>\r\n      <div class=\"profile-image_container\">\r\n        <img src=\"https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png\" alt=\"profile-image\"\r\n          class=\"profile_image\">\r\n      </div>\r\n      <div class=\"account-details\">\r\n        <span class=\"name_text\">{{ userEmail }}</span>\r\n        <span class=\"email_text\">Free Plan</span>\r\n      </div>\r\n    </section>\r\n    <section class=\"links_container\">\r\n      <ul class=\"menu-links\" [ngClass]=\"{'menu-links-dark': darkModeActive}\">\r\n        <li class=\"menu-link\" routerLink=\"\" routerLinkActive=\"link-active\"\r\n          (click)=\"toggleMenu()\">Home</li>\r\n        <li class=\"menu-link\" routerLink=\"/add\" routerLinkActive=\"link-active\"\r\n          (click)=\"toggleMenu()\">Add City</li>\r\n        <li (click)=\"logout()\" class=\"menu-link\">Logout</li>\r\n      </ul>\r\n    </section>\r\n    <section class=\"copyright_container\">\r\n      <small class=\"copyright_text\">Copyright © 2019 Minimus</small>\r\n    </section>\r\n  </nav>\r\n</aside>\r\n\r\n<main [ngClass]=\"{'root_container-dark': darkModeActive}\">\r\n  <header [ngClass]=\"{'main_header-dark': darkModeActive}\" class=\"main_header\">\r\n\r\n    <div class=\"left_section\">\r\n      <svg (click)=\"toggleMenu()\" class=\"hamburger_icon\" viewBox=\"31.5 30 49.9 32\">\r\n        <defs>\r\n          <style>\r\n            .hamburger_icon_fill {\r\n              fill: rgb(0, 0, 0);\r\n              width: 49.9px;\r\n              height: 4px;\r\n            }\r\n\r\n            .hamburger_icon_fill-dark {\r\n              fill: #fff;\r\n            }\r\n          </style>\r\n        </defs>\r\n        <rect [ngClass]=\"{'hamburger_icon_fill-dark': darkModeActive}\"\r\n        class=\"hamburger_icon_fill\" transform=\"translate(31.5 30)\"></rect>\r\n        <rect [ngClass]=\"{'hamburger_icon_fill-dark': darkModeActive}\"\r\n        class=\"hamburger_icon_fill\" transform=\"translate(31.5 44)\"></rect>\r\n        <rect [ngClass]=\"{'hamburger_icon_fill-dark': darkModeActive}\"\r\n          class=\"hamburger_icon_fill\" transform=\"translate(31.5 58)\"></rect>\r\n      </svg>\r\n\r\n      <svg class=\"logo_icon\" viewBox=\"150.3 22.2 213.7 42.8\">\r\n        <!-- tam giác màu xanh lục -->\r\n        <path fill=\"#00ff9b\" d=\"M150.3 65V22.2L193 65z\"></path>\r\n        <!-- tam giác màu xanh dương -->\r\n        <path fill=\"#003eff\" d=\"M193.1 65h-42.8L193 22.2z\"></path>\r\n        <text [ngClass]=\"{'logo_text-dark': darkModeActive}\" class=\"logo_text\" fill=\"yellow\"\r\n          font-family=\"SegoeUI-Semibold, Segoe UI\" font-size=\"30px\" font-weight=\"bold\" letter-spacing=\"0.1em\"\r\n          transform=\"translate(220 56)\">\r\n          <tspan>Minimus</tspan>\r\n        </text>\r\n      </svg>\r\n    </div>\r\n\r\n    <h3 class=\"date_text\">Today</h3>\r\n\r\n    <div>\r\n      <span class=\"mode-toggle_text\">Light</span>\r\n      <label class=\"toggle-button_container\" (click)=\"modeToggleSwitch()\">\r\n        <span [ngClass]=\"{'mode-toggle_bg-checked': darkModeActive}\" class=\"mode-toggle_bg\"></span>\r\n        <span [ngClass]=\"{'mode-toggle_circle-checked': darkModeActive}\" class=\"mode-toggle_circle\"></span>\r\n      </label>\r\n      <span class=\"mode-toggle_text\">Dark</span>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Main Content -->\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(ui) {
        this.ui = ui;
        this.showMenu = false;
        this.userEmail = 'nvdinh0766777123@gmail.com';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Nhận lại thuộc tính darkModeState phát ra
        //gán cho biến darkModeActive
        this.sub = this.ui.darkModeState.subscribe(function (value) {
            _this.darkModeActive = value;
        });
    };
    ;
    AppComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    AppComponent.prototype.modeToggleSwitch = function () {
        //Tiếp tục phát ra đối tượng darkModeState
        //ở đâu có thuộc tính subscribe sẽ nhận lại được
        this.ui.darkModeState.next(!this.darkModeActive);
    };
    /**
     * Khi thoát khỏi trang này thì hủy đối tượng darkModeState
     * để giải phóng bộ nhớ
     */
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/weather-card/weather-card.component */ "./src/app/components/weather-card/weather-card.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire-lite */ "./node_modules/angularfire-lite/fesm5/angularfire-lite.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/twitter/twitter.service */ "./src/app/services/twitter/twitter.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_7__["WeatherCardComponent"],
                _pages_details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angularfire_lite__WEBPACK_IMPORTED_MODULE_12__["AngularFireLite"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].config),
            ],
            providers: [
                _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_9__["WeatherService"],
                _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"],
                _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_14__["TwitterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-wrapper {\r\n  position: fixed;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translate(-50%, 6rem);\r\n  width: 70%;\r\n  background-color: crimson;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.5rem 3rem;\r\n}\r\n\r\n.error-wrapper-active {\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n.error-message {\r\n  font-size: 1.25rem;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: capitalize;\r\n  width: 80%;\r\n}\r\n\r\n.error-btn {\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Itd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNnJlbSk7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyLWFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZXJyb3ItYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-wrapper\" [ngClass]=\"{'error-wrapper-active': message}\">\r\n  <span class=\"error-message\">{{ message }}</span>\r\n  <button class=\"error-btn\">{{ action }}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.action = 'GOT IT';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorComponent.prototype, "action", void 0);
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather_card {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 2fr 1fr 1fr;\r\n\t/* nội dung bên trong class này được canh giữa theo phương ngang */\r\n\tjustify-items: center;\r\n\t/* khoảng cách đệm */\r\n\tpadding: 2rem;\r\n\t/* khoảng cách lề */\r\n\tmargin: 2rem;\r\n\t/* bề rộng */\r\n\twidth: 19rem;\r\n\t/* chiều cao */\r\n\theight: 30rem;\r\n\tcursor: pointer;\r\n\tbackground-color: rgb(119, 163, 156);\r\n\tborder-radius: 1.75rem;\r\n}\r\n\r\n.weather_card-dark {\r\n\t/* màu nền của card khi ở chế độ tối */\r\n\tbackground: linear-gradient(to bottom, #711B86, #00057A);\r\n\tcolor: white;\r\n}\r\n\r\n.city-name_text {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 1.4rem;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.weather-icon_container {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.weather-icon_container > svg {\r\n\twidth: 15rem;\r\n    height: 15rem;\r\n}\r\n\r\n.temperature-metric_text {\r\n\tfont-size: 3rem;\r\n}\r\n\r\n.weather-condition_text {\r\n\tdisplay: block;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n\r\n.min-max_container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.min_container,\r\n.max_container {\r\n\tmargin: 1rem 3rem;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n/* style cho mũi tên */\r\n\r\n.min-arrow_icon,\r\n.max-arrow_icon {\r\n\theight: 1.25rem;\r\n\tmargin: auto;\r\n}\r\n\r\n.max-arrow_icon {\r\n\tmargin-bottom: -0.05rem;\r\n}\r\n\r\n.max_text {\r\n\tcolor: #FF0070;\r\n}\r\n\r\n.min_text {\r\n\tcolor: #00FF9B;\r\n}\r\n\r\n.max_text,\r\n.min_text {\r\n\ttext-align: center;\r\n}\r\n\r\n.max-temperature_text,\r\n.min-temperature_text {\r\n\tfont-size: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLGtFQUFrRTtDQUNsRSxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFlBQVk7Q0FDWixZQUFZO0NBQ1osY0FBYztDQUNkLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysb0NBQW9DO0NBQ3BDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHNDQUFzQztDQUN0Qyx3REFBd0Q7Q0FDeEQsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtJQUNULGFBQWE7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBOztDQUVDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsK0JBQStCO0FBQ2hDOztBQUVBLHNCQUFzQjs7QUFDdEI7O0NBRUMsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXRoZXJfY2FyZCB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyIDFmcjtcclxuXHQvKiBu4buZaSBkdW5nIGLDqm4gdHJvbmcgY2xhc3MgbsOgeSDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nICovXHJcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdC8qIGtob+G6o25nIGPDoWNoIMSR4buHbSAqL1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0Lyoga2hv4bqjbmcgY8OhY2ggbOG7gSAqL1xyXG5cdG1hcmdpbjogMnJlbTtcclxuXHQvKiBi4buBIHLhu5luZyAqL1xyXG5cdHdpZHRoOiAxOXJlbTtcclxuXHQvKiBjaGnhu4F1IGNhbyAqL1xyXG5cdGhlaWdodDogMzByZW07XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTksIDE2MywgMTU2KTtcclxuXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG59XHJcblxyXG4ud2VhdGhlcl9jYXJkLWRhcmsge1xyXG5cdC8qIG3DoHUgbuG7gW4gY+G7p2EgY2FyZCBraGkg4bufIGNo4bq/IMSR4buZIHThu5FpICovXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcxMUI4NiwgIzAwMDU3QSk7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lX3RleHQge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1pY29uX2NvbnRhaW5lciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbl9jb250YWluZXIgPiBzdmcge1xyXG5cdHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbn1cclxuXHJcbi50ZW1wZXJhdHVyZS1tZXRyaWNfdGV4dCB7XHJcblx0Zm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1jb25kaXRpb25fdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG59XHJcblxyXG4ubWluLW1heF9jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG4ubWluX2NvbnRhaW5lcixcclxuLm1heF9jb250YWluZXIge1xyXG5cdG1hcmdpbjogMXJlbSAzcmVtO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxufVxyXG5cclxuLyogc3R5bGUgY2hvIG3FqWkgdMOqbiAqL1xyXG4ubWluLWFycm93X2ljb24sXHJcbi5tYXgtYXJyb3dfaWNvbiB7XHJcblx0aGVpZ2h0OiAxLjI1cmVtO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1heC1hcnJvd19pY29uIHtcclxuXHRtYXJnaW4tYm90dG9tOiAtMC4wNXJlbTtcclxufVxyXG5cclxuLm1heF90ZXh0IHtcclxuXHRjb2xvcjogI0ZGMDA3MDtcclxufVxyXG5cclxuLm1pbl90ZXh0IHtcclxuXHRjb2xvcjogIzAwRkY5QjtcclxufVxyXG5cclxuLm1heF90ZXh0LFxyXG4ubWluX3RleHQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1heC10ZW1wZXJhdHVyZV90ZXh0LFxyXG4ubWluLXRlbXBlcmF0dXJlX3RleHQge1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"weather_card\" (click)=\"openDetails()\" [ngClass]=\"{'weather_card-dark': darkMode}\">\r\n    <!-- Tên thành phố -->\r\n    <span class=\"city-name_text\">{{ cityName }}</span>\r\n    <!-- Hình ảnh mô tả cho các trạng thái thời tiết -->\r\n    <div class=\"weather-icon_container\" [ngSwitch]=\"true\">\r\n        <svg *ngSwitchCase=\"state === 'Sunny' || state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" transform=\"translate(2050 -845)\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Clouds'\" viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g transform=\"translate(84 790)\">\r\n                <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" transform=\"translate(2354 -1633)\" />\r\n                <path fill=\"#ffde17\" d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\" />\r\n            </g>\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Rain' || state === 'Drizzle' || state === 'Mist'\"\r\n            viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" />\r\n            <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Haze' || state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n            <path fill=\"#12bcff\" d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Storm' || state === 'Thunderstorm'\" viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g transform=\"translate(1959 -1260.7)\">\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1529 490.4)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 467.8)\" />\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" transform=\"translate(1618.9 476.8)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1631.8 450)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1687.1 477.5)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1709.6 507.3)\" />\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" transform=\"translate(1639.6 500.1)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 507.3)\" />\r\n                <path stroke=\"#fd0\" stroke-width=\"18\" d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" />\r\n                <path stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\" />\r\n            </g>\r\n        </svg>\r\n    </div>\r\n    <!-- Hiển thị nhiệt độ và trạng thái thời tiết hiện tại -->\r\n    <div>\r\n        <span class=\"temperature-metric_text\">{{ temp }}°</span>\r\n        <span class=\"weather-condition_text\">{{ state }}</span>\r\n    </div>\r\n    <!-- Nhiệt độ thấp nhất và cao nhất theo dự báo -->\r\n    <section class=\"min-max_container\">\r\n        <div class=\"min_container\">\r\n            <svg class=\"min-arrow_icon\" viewBox=\"188.5 807 21 21\">\r\n                <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" />\r\n            </svg>\r\n\r\n            <span class=\"min-temperature_text\">{{ minTemp }}</span>\r\n            <span class=\"min_text\">Min</span>\r\n        </div>\r\n        <div class=\"max_container\">\r\n            <svg class=\"max-arrow_icon\" viewBox=\"449.5 820 21 21\">\r\n                <path fill=\"#FF0070\" d=\"M449.5 830.5h21L460 820z\" />\r\n            </svg>\r\n            <span class=\"max-temperature_text\">{{ maxTemp }}</span>\r\n            <span class=\"max_text\">Max</span>\r\n        </div>\r\n    </section>\r\n</section>\r\n\r\n<app-error [message]=\"errorMessage\"></app-error>"

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");





var WeatherCardComponent = /** @class */ (function () {
    function WeatherCardComponent(weather, router, ui) {
        this.weather = weather;
        this.router = router;
        this.ui = ui;
    }
    Object.defineProperty(WeatherCardComponent.prototype, "city", {
        set: function (city) {
            var _this = this;
            this.cityName = city;
            //Lấy trạng thái thời tiết và nhiệt độ hiện tại
            //từ thông tin thời tiết hiện tại
            this.sub = this.weather.getWeather(city)
                .subscribe(function (payload) {
                _this.state = payload.weather[0].main;
                _this.temp = Math.ceil(payload.main.temp);
            }, function (err) {
                _this.errorMessage = err.error.message;
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 3000);
            });
            //Lấy nhiệt độ cao nhất và thấp nhất cho ngày hiện tại
            //từ thông tin thời tiết dự báo
            this.sub = this.weather.getForecast(city)
                .subscribe(function (payload) {
                if (payload.cod === '404') {
                    _this.errorMessage = payload.message;
                    setTimeout(function () {
                        _this.errorMessage = '';
                    }, 3000);
                }
                else {
                    _this.maxTemp = Math.round(payload[0].main.temp_max);
                    _this.minTemp = Math.round(payload[0].main.temp_min);
                    for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
                        var res = payload_1[_i];
                        //Lấy nhiệt độ cao nhất và thấp nhất theo dự báo cho ngày hiện tại
                        if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
                            _this.maxTemp = res.main.temp_max > _this.maxTemp ? Math.round(res.main.temp_max) : _this.maxTemp;
                            _this.minTemp = res.main.temp_min < _this.minTemp ? Math.round(res.main.temp_min) : _this.minTemp;
                        }
                    }
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    WeatherCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
    };
    WeatherCardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WeatherCardComponent.prototype.openDetails = function () {
        this.router.navigateByUrl('/details/' + this.cityName);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], WeatherCardComponent.prototype, "city", null);
    WeatherCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-card',
            template: __webpack_require__(/*! ./weather-card.component.html */ "./src/app/components/weather-card/weather-card.component.html"),
            styles: [__webpack_require__(/*! ./weather-card.component.css */ "./src/app/components/weather-card/weather-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]])
    ], WeatherCardComponent);
    return WeatherCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-page_wrapper {\r\n  background: linear-gradient(to top, #86DBFF 0%, #e0c3fc 100%);\r\n  /* hiển thị theo flex */\r\n  display: flex;\r\n  /* nội dung ở trong được canh giữa theo phương ngang */\r\n  justify-content: center;\r\n  /* những phần trong xác định vị trí theo vị trí tương đối */\r\n  position: relative;\r\n  /* min-height: 110vh; */\r\n  /* đệm trên và dưới */\r\n  padding: 2rem 0;\r\n}\r\n\r\n.details-page_wrapper-dark {\r\n  background: linear-gradient(#495CFC, #FC7DB8);\r\n}\r\n\r\n/* định dạng cho hình tròn làm nền phía sau */\r\n\r\n.background-gradient_circle {\r\n  position: absolute;\r\n  top: 0%;\r\n  right: 0%;\r\n  z-index: 0;\r\n  /* chiều cao chiếm hết màn hình */\r\n  height: 100%;\r\n  /* bề rộng chiếm hết màn hình */\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  background: #FC7DB8;\r\n  /* chuyển đổi màu nền của hình tròn nền trong 4s */\r\n  /* mất 4s để có được màu nền này */\r\n  transition: background 4s ease;\r\n}\r\n\r\n.background-gradient_circle-dark {\r\n  background: #6676FF;\r\n  /* chuyển đổi màu nền của hình tròn nền trong 2s */\r\n  /* mất 2s để có được màu nền này */\r\n  transition: background 2s ease;\r\n}\r\n\r\n/* định dạng cho nút BACK ở chế độ mặc định */\r\n\r\n.back_button {\r\n  position: absolute;\r\n  top: 3rem;\r\n  left: 3.25rem;\r\n  width: 5rem;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.main-weather_card {\r\n  position: relative;\r\n  /* màu nền */\r\n  background-color: white;\r\n  height: 80%;\r\n  width: 75%;\r\n  border-radius: 1rem;\r\n  z-index: 1;\r\n}\r\n\r\n/* định dạng cho hình ảnh đại diện thành phố */\r\n\r\n.city_illustration {\r\n  width: 100%;\r\n  height: 420px;\r\n  border-radius: 1rem 1rem 0 0;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n/* định dạng cho vùng ghi thông tin thời tiết hiện tại */\r\n\r\n.header-content_wrapper {\r\n  position: absolute;\r\n  z-index: 1;\r\n  color: white;\r\n  top: 3rem;\r\n  display: grid;\r\n  /* chia làm 2 cột, mỗi cột rộng 1fr */\r\n  grid-template-columns: repeat(2, 1fr);\r\n  /* lưới chiếm 100% chiều rộng */\r\n  width: 100%;\r\n}\r\n\r\n/* định dạng cho vùng ghi thông tin thời tiết */\r\n\r\n.today-weather_container {\r\n  display: grid;\r\n  grid-template-rows: 3fr 1fr;\r\n  /* nội dung của nó nằm chính giữa theo phương ngang */\r\n  justify-items: center;\r\n  /* khoảng cách với phần lưới trên */\r\n  grid-gap: 2rem;\r\n}\r\n\r\n/* vùng ghi nhiệt độ và độ ẩm */\r\n\r\n.temp-state_container {\r\n  display: flex;\r\n  /* sắp xếp các mục theo chiều dọc */\r\n\tflex-direction: column;\r\n}\r\n\r\n.temperature_text {\r\n  font-size: 6rem;\r\n  letter-spacing: 0.75rem;\r\n}\r\n\r\n.weather-state_text {\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.15rem;\r\n  text-transform: uppercase;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n/* vùng ghi độ ẩm và gió */\r\n\r\n.hum-wind_container {\r\n  display: flex;\r\n  /* canh giữa theo phương dọc */\r\n  align-items: center;\r\n  /* lề trái là -4rem */\r\n  margin-left: -4rem;\r\n}\r\n\r\n.hum_text, .wind_text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  font-size: 0.8rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.hum_container, .wind_container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.hum-wind_separator {\r\n  margin: 0 2rem;\r\n  width: 2px;\r\n  height: 2.5rem;\r\n  background-color: white;\r\n}\r\n\r\n.city-name_container {\r\n  display: flex;\r\n  /* canh giữa theo phương ngang */\r\n  justify-content: center;\r\n  /* canh giữa theo phương dọc */\r\n  align-items: center;\r\n  padding-bottom: 25%;\r\n}\r\n\r\n.city-name_underline {\r\n  border-radius: 5px;\r\n  height: 5px;\r\n  box-shadow: 0 3rem 0 0 #ffffff;\r\n}\r\n\r\n.city-name_text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.3rem;\r\n  font-size: 1.75rem;\r\n}\r\n\r\n/*\r\n================\r\n     BODY\r\n================\r\n*/\r\n\r\n.body-content_wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1.5fr;\r\n  /* khoảng cách giữa 2 cột */\r\n  grid-gap: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n/* phần twitter */\r\n\r\n.twitter-feed_container {\r\n  margin-top: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-feed_body {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-flow: column;\r\n}\r\n\r\n.twitter_loader {\r\n  border: 3px solid hsla(185, 100%, 62%, 0.2);\r\n  border-top-color: #3cefff;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  -webkit-animation: spin 1s linear infinite;\r\n          animation: spin 1s linear infinite;\r\n  justify-self: center;\r\n  align-self: center;\r\n  margin-top: 3rem;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.twitter-no-tweets_text {\r\n  margin-top: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.twitter-feed_text {\r\n  color: #0c1066;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.twitter_icon {\r\n  width: 1.5rem;\r\n}\r\n\r\n.twitter-feed-tag_text {\r\n  font-size: 0.85rem;\r\n  color: #5f84fb;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.twitter-feed_header {\r\n  display: grid;\r\n  grid-template-rows: 2rem;\r\n  grid-template-columns: 0.5fr 1.5fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-tweet_container {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.tweet-user_wrapper {\r\n  display: flex;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tweet-avatar_image {\r\n  margin-right: 0.5rem;\r\n  border-radius: 50%;\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\n.tweet-username_text {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n.tweet_text {\r\n  margin-top: 0\r\n}\r\n\r\n/* forecast_container */\r\n\r\n.forecast_container {\r\n  display: flex;\r\n  margin-left: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.day-weather_container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  margin: 2rem 1.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.day-name_text {\r\n  font-size: 1.5rem;\r\n  color: #39437a;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.forecast-condition_icon {\r\n  height: 4rem;\r\n}\r\n\r\n.day-temp_text {\r\n  font-size: 1.85rem;\r\n  color: #0c1066;\r\n  letter-spacing: 0.25rem;\r\n  margin: 0.75rem 0;\r\n  padding-left: 0.35rem;\r\n}\r\n\r\n.day-state_text {\r\n  font-size: 0.65rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  color: #2B244D;\r\n}\r\n\r\n/* khi chiều rộng màn hình <= 1279px */\r\n\r\n@media screen and (max-width: 1279px) {\r\n  .back_button {\r\n    top: 1rem;\r\n  }\r\n  \r\n  .main-weather_card {\r\n    width: 80%;\r\n  }\r\n  \r\n  .body-content_wrapper {\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n/* khi chiều rộng màn hình <= 959px */\r\n\r\n@media screen and (max-width: 959px) {\r\n  .header-content_wrapper {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 2fr 1fr;\r\n  }\r\n\r\n  .back_button {\r\n    position: static;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .details-page_wrapper {\r\n    flex-flow: column;\r\n    align-items: center;\r\n    padding-bottom: 25%;\r\n  }\r\n\r\n  .hum-wind_container, .temp-state_container {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .city-name_container {\r\n    padding-bottom: 0;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBNkQ7RUFDN0QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzREFBc0Q7RUFDdEQsdUJBQXVCO0VBQ3ZCLDJEQUEyRDtFQUMzRCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0RBQWtEO0VBQ2xELGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0RBQWtEO0VBQ2xELGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUEsNkNBQTZDOztBQUM3QztFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQSx3REFBd0Q7O0FBQ3hEO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUEsK0NBQStDOztBQUMvQztFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IscURBQXFEO0VBQ3JELHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztDQUNwQyxzQkFBc0I7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUpBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQSxzQ0FBc0M7O0FBQ3RDO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXBhZ2Vfd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzg2REJGRiAwJSwgI2UwYzNmYyAxMDAlKTtcclxuICAvKiBoaeG7g24gdGjhu4sgdGhlbyBmbGV4ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBu4buZaSBkdW5nIOG7nyB0cm9uZyDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogbmjhu69uZyBwaOG6p24gdHJvbmcgeMOhYyDEkeG7i25oIHbhu4sgdHLDrSB0aGVvIHbhu4sgdHLDrSB0xrDGoW5nIMSR4buRaSAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBtaW4taGVpZ2h0OiAxMTB2aDsgKi9cclxuICAvKiDEkeG7h20gdHLDqm4gdsOgIGTGsOG7m2kgKi9cclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXBhZ2Vfd3JhcHBlci1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQ5NUNGQywgI0ZDN0RCOCk7XHJcbn1cclxuXHJcbi8qIMSR4buLbmggZOG6oW5nIGNobyBow6xuaCB0csOybiBsw6BtIG7hu4FuIHBow61hIHNhdSAqL1xyXG4uYmFja2dyb3VuZC1ncmFkaWVudF9jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB6LWluZGV4OiAwO1xyXG4gIC8qIGNoaeG7gXUgY2FvIGNoaeG6v20gaOG6v3QgbcOgbiBow6xuaCAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBi4buBIHLhu5luZyBjaGnhur9tIGjhur90IG3DoG4gaMOsbmggKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI0ZDN0RCODtcclxuICAvKiBjaHV54buDbiDEkeG7lWkgbcOgdSBu4buBbiBj4bunYSBow6xuaCB0csOybiBu4buBbiB0cm9uZyA0cyAqL1xyXG4gIC8qIG3huqV0IDRzIMSR4buDIGPDsyDEkcaw4bujYyBtw6B1IG7hu4FuIG7DoHkgKi9cclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDRzIGVhc2U7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWdyYWRpZW50X2NpcmNsZS1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiAjNjY3NkZGO1xyXG4gIC8qIGNodXnhu4NuIMSR4buVaSBtw6B1IG7hu4FuIGPhu6dhIGjDrG5oIHRyw7JuIG7hu4FuIHRyb25nIDJzICovXHJcbiAgLyogbeG6pXQgMnMgxJHhu4MgY8OzIMSRxrDhu6NjIG3DoHUgbuG7gW4gbsOgeSAqL1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMnMgZWFzZTtcclxufVxyXG5cclxuLyogxJHhu4tuaCBk4bqhbmcgY2hvIG7DunQgQkFDSyDhu58gY2jhur8gxJHhu5kgbeG6t2MgxJHhu4tuaCAqL1xyXG4uYmFja19idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDNyZW07XHJcbiAgbGVmdDogMy4yNXJlbTtcclxuICB3aWR0aDogNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4ubWFpbi13ZWF0aGVyX2NhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBtw6B1IG7hu4FuICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIMSR4buLbmggZOG6oW5nIGNobyBow6xuaCDhuqNuaCDEkeG6oWkgZGnhu4duIHRow6BuaCBwaOG7kSAqL1xyXG4uY2l0eV9pbGx1c3RyYXRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogxJHhu4tuaCBk4bqhbmcgY2hvIHbDuW5nIGdoaSB0aMO0bmcgdGluIHRo4budaSB0aeG6v3QgaGnhu4duIHThuqFpICovXHJcbi5oZWFkZXItY29udGVudF93cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdG9wOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyogY2hpYSBsw6BtIDIgY+G7mXQsIG3hu5dpIGPhu5l0IHLhu5luZyAxZnIgKi9cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIC8qIGzGsOG7m2kgY2hp4bq/bSAxMDAlIGNoaeG7gXUgcuG7mW5nICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIMSR4buLbmggZOG6oW5nIGNobyB2w7luZyBnaGkgdGjDtG5nIHRpbiB0aOG7nWkgdGnhur90ICovXHJcbi50b2RheS13ZWF0aGVyX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XHJcbiAgLyogbuG7mWkgZHVuZyBj4bunYSBuw7MgbuG6sW0gY2jDrW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nICovXHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIHBo4bqnbiBsxrDhu5tpIHRyw6puICovXHJcbiAgZ3JpZC1nYXA6IDJyZW07XHJcbn1cclxuXHJcbi8qIHbDuW5nIGdoaSBuaGnhu4d0IMSR4buZIHbDoCDEkeG7mSDhuqltICovXHJcbi50ZW1wLXN0YXRlX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBz4bqvcCB44bq/cCBjw6FjIG3hu6VjIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50ZW1wZXJhdHVyZV90ZXh0IHtcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLXN0YXRlX3RleHQge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLyogdsO5bmcgZ2hpIMSR4buZIOG6qW0gdsOgIGdpw7MgKi9cclxuLmh1bS13aW5kX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBs4buBIHRyw6FpIGzDoCAtNHJlbSAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAtNHJlbTtcclxufVxyXG5cclxuLmh1bV90ZXh0LCAud2luZF90ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmh1bV9jb250YWluZXIsIC53aW5kX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5odW0td2luZF9zZXBhcmF0b3Ige1xyXG4gIG1hcmdpbjogMCAycmVtO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaXR5LW5hbWVfY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lX3VuZGVybGluZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3JlbSAwIDAgI2ZmZmZmZjtcclxufVxyXG5cclxuLmNpdHktbmFtZV90ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09XHJcbiAgICAgQk9EWVxyXG49PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG4uYm9keS1jb250ZW50X3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XHJcbiAgLyoga2hv4bqjbmcgY8OhY2ggZ2nhu69hIDIgY+G7mXQgKi9cclxuICBncmlkLWdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4vKiBwaOG6p24gdHdpdHRlciAqL1xyXG4udHdpdHRlci1mZWVkX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZF9ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLnR3aXR0ZXJfbG9hZGVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDE4NSwgMTAwJSwgNjIlLCAwLjIpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMzY2VmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50d2l0dGVyLW5vLXR3ZWV0c190ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZF90ZXh0IHtcclxuICBjb2xvcjogIzBjMTA2NjtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyX2ljb24ge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtdGFnX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogIzVmODRmYjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWRfaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50d2l0dGVyLXR3ZWV0X2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnR3ZWV0LXVzZXJfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi50d2VldC1hdmF0YXJfaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50d2VldC11c2VybmFtZV90ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR3ZWV0X3RleHQge1xyXG4gIG1hcmdpbi10b3A6IDBcclxufVxyXG5cclxuLyogZm9yZWNhc3RfY29udGFpbmVyICovXHJcbi5mb3JlY2FzdF9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZGF5LXdlYXRoZXJfY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG1hcmdpbjogMnJlbSAxLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRheS1uYW1lX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjMzk0MzdhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uZm9yZWNhc3QtY29uZGl0aW9uX2ljb24ge1xyXG4gIGhlaWdodDogNHJlbTtcclxufVxyXG5cclxuLmRheS10ZW1wX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMS44NXJlbTtcclxuICBjb2xvcjogIzBjMTA2NjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XHJcbn1cclxuXHJcbi5kYXktc3RhdGVfdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICBjb2xvcjogIzJCMjQ0RDtcclxufVxyXG5cclxuLyoga2hpIGNoaeG7gXUgcuG7mW5nIG3DoG4gaMOsbmggPD0gMTI3OXB4ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gIC5iYWNrX2J1dHRvbiB7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLXdlYXRoZXJfY2FyZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICBcclxuICAuYm9keS1jb250ZW50X3dyYXBwZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBraGkgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCA8PSA5NTlweCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5oZWFkZXItY29udGVudF93cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tfYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtcGFnZV93cmFwcGVyIHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuaHVtLXdpbmRfY29udGFpbmVyLCAudGVtcC1zdGF0ZV9jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2l0eS1uYW1lX2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page_wrapper\" [ngClass]=\"{'details-page_wrapper-dark': darkMode}\">\r\n  <div class=\"background-gradient_circle\" [ngClass]=\"{'background-gradient_circle-dark': darkMode}\"></div>\r\n  <svg class=\"back_button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\">\r\n    <defs>\r\n      <style>\r\n        .a {\r\n          fill: #2b244d;\r\n        }\r\n\r\n        .b {\r\n          stroke: #fff;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .c {\r\n          fill: #fff;\r\n          font-size: 15px;\r\n          font-family: SegoeUI, Segoe UI, sans-serif;\r\n          letter-spacing: 0.4em;\r\n        }\r\n      </style>\r\n    </defs>\r\n    <g transform=\"translate(3980)\">\r\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"></circle>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"80\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 164.5)\" x2=\"26\" y1=\"26\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"26\" y1=\"27\"></line>\r\n      <text class=\"c\" transform=\"translate(117 274)\">\r\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n      </text>\r\n    </g>\r\n  </svg>\r\n  <section class=\"main-weather_card\">\r\n    <section>\r\n      <img class=\"city_illustration\" [src]=\"cityIllustrationPath\" />\r\n      <div class=\"header-content_wrapper\">\r\n        <div class=\"today-weather_container\">\r\n          <div class=\"temp-state_container\">\r\n            <span>{{ today }}</span>\r\n            <span class=\"temperature_text\">{{ temp }}°</span>\r\n            <span class=\"weather-state_text\">{{ state }}</span>\r\n          </div>\r\n          <div class=\"hum-wind_container\">\r\n            <div class=\"hum_container\">\r\n              <span class=\"hum_text\">humidity</span>\r\n              <span>{{ hum }} %</span>\r\n            </div>\r\n            <div class=\"hum-wind_separator\">&nbsp;</div>\r\n            <div class=\"wind_container\">\r\n              <span class=\"wind_text\">wind</span>\r\n              <span>{{ wind }} K/M</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"city-name_container\">\r\n          <div class=\"city-name_underline\">\r\n            <span class=\"city-name_text\">{{ city }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <main class=\"body-content_wrapper\">\r\n      <section class=\"twitter-feed_container\">\r\n        <div class=\"twitter-feed_header\">\r\n          <svg class=\"twitter_icon\" viewBox=\"4332 625.812 30 24.375\">\r\n            <defs>\r\n              <style>\r\n                .twitter-icon-fill {\r\n                  fill: #03a9f4;\r\n                }\r\n              </style>\r\n            </defs>\r\n            <path class=\"twitter-icon-fill\"\r\n              d=\"M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z\"\r\n              transform=\"translate(4332 577.812)\" />\r\n          </svg>\r\n          <span class=\"twitter-feed_text\">Twitter Feed</span>\r\n          <span class=\"twitter-feed-tag_text\">#{{city}}</span>\r\n        </div>\r\n        <div class=\"twitter-feed_body\">\r\n\r\n          <ng-container *ngIf=\"tweets$ | async as tweets; else loadingTweets\">\r\n            <p *ngIf=\"tweets && tweets.length === 0\" class=\"twitter-no-tweets_text\">No Tweets Found</p>\r\n            <div class=\"twitter-tweet_container\" *ngFor=\"let tweet of tweets\">\r\n              <div class=\"tweet-user_wrapper\">\r\n                <img [src]=\"tweet.user.photo\" alt=\"avatar\" class=\"tweet-avatar_image\">\r\n                <div>\r\n                  <span class=\"tweet-username_text\">{{tweet.user.name}}</span>\r\n                  <span class=\"tweet-handle_text\">{{tweet.user.handle}}</span>\r\n                </div>\r\n              </div>\r\n              <p class=\"tweet_text\">{{tweet.text}}</p>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-template #loadingTweets>\r\n            <div class=\"twitter_loader\"></div>\r\n          </ng-template>\r\n\r\n        </div>\r\n      </section>\r\n      <section class=\"forecast_container\">\r\n        <div class=\"day-weather_container\" [ngSwitch]=\"true\" *ngFor=\"let day of daysForecast | keyvalue\">\r\n          <span class=\"day-name_text\">{{ day.key }}</span>\r\n          <svg class=\"forecast-condition_icon\" *ngSwitchCase=\"day.value.state === 'Clouds'\"\r\n            viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" transform=\"translate(2354 -1633)\" />\r\n              <path fill=\"#ffde17\"\r\n                d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\" />\r\n            </g>\r\n          </svg>\r\n          <svg *ngSwitchCase=\"day.value.state === 'Haze' || day.value.state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n            <path fill=\"#12bcff\"\r\n              d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\" />\r\n          </svg>\r\n          <svg class=\"forecast-condition_icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Rain' || day.value.state === 'Drizzle'\"\r\n            viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g>\r\n              <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" />\r\n              <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition_icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Storm' || day.value.state === 'Thunderstorm'\"\r\n            viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1529 490.4)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 467.8)\" />\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" transform=\"translate(1618.9 476.8)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1631.8 450)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1687.1 477.5)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1709.6 507.3)\" />\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" transform=\"translate(1639.6 500.1)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 507.3)\" />\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" />\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition_icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Sunny' || day.value.state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" transform=\"translate(2050 -845)\" />\r\n          </svg>\r\n\r\n          <span class=\"day-temp_text\">{{ day.value.temp }}°</span>\r\n          <span class=\"day-state_text\">{{ day.value.state }}</span>\r\n        </div>\r\n      </section>\r\n    </main>\r\n  </section>\r\n</div>\r\n\r\n<app-error [message]=\"errorMessage\"></app-error>"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
/* harmony import */ var _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/twitter/twitter.service */ "./src/app/services/twitter/twitter.service.ts");








var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(twitter, activeRouter, weather, ui) {
        this.twitter = twitter;
        this.activeRouter = activeRouter;
        this.weather = weather;
        this.ui = ui;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub1 = this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
        var todayNumberInWeek = new Date().getDay();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.today = days[todayNumberInWeek];
        this.sub2 = this.activeRouter.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (route) {
            _this.city = route.params.city;
            switch (_this.city.toLowerCase()) {
                case 'paris':
                    _this.cityIllustrationPath = '../../../assets/cities/france.svg';
                    break;
                case 'doha':
                    _this.cityIllustrationPath = '../../assets/cities/qatar.svg';
                    break;
                case 'rabat':
                    _this.cityIllustrationPath = '../../assets/cities/rabat.svg';
                    break;
                case 'tunis':
                    _this.cityIllustrationPath = '../../assets/cities/tunis.svg';
                    break;
                case 'tokyo':
                    _this.cityIllustrationPath = '../../assets/cities/japan.svg';
                    break;
                default:
                    _this.cityIllustrationPath = '../../assets/cities/default.svg';
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(_this.weather.getWeather(_this.city), _this.weather.getForecastObject(_this.city));
        })).subscribe(function (payload) {
            _this.state = payload[0].weather[0].main;
            _this.temp = Math.ceil(Number(payload[0].main.temp));
            _this.hum = payload[0].main.humidity;
            _this.wind = Math.round(Math.round(payload[0].wind.speed));
            var dates = {};
            for (var _i = 0, _a = payload[1].list; _i < _a.length; _i++) {
                var res = _a[_i];
                var date = new Date(res.dt_txt).toDateString().split(' ')[0];
                if (dates[date]) {
                    dates[date].counter += 1;
                    dates[date].temp += res.main.temp;
                }
                else {
                    dates[date] = {
                        state: res.weather[0].main,
                        temp: res.main.temp,
                        counter: 1
                    };
                }
            }
            Object.keys(dates).forEach(function (day) {
                dates[day].temp = Math.round(dates[day].temp / dates[day].counter);
            });
            delete dates[Object.keys(dates)[0]];
            _this.daysForecast = dates;
        }, function (err) {
            _this.errorMessage = err.error.message;
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2500);
        });
        this.tweets$ = this.twitter.fetchTweets(this.city);
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pages/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_7__["TwitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"],
            _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Home Layout */\r\n.main_container {\r\n    display: flex;\r\n    /* hiển thị nội dung chính giữa theo phương ngang */\r\n    justify-content: center;\r\n    /* thực hiện xuống hàng nếu chiếm hết bề ngang */\r\n    flex-wrap: wrap;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksYUFBYTtJQUNiLG1EQUFtRDtJQUNuRCx1QkFBdUI7SUFDdkIsZ0RBQWdEO0lBQ2hELGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhvbWUgTGF5b3V0ICovXHJcbi5tYWluX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogaGnhu4NuIHRo4buLIG7hu5lpIGR1bmcgY2jDrW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIHRo4buxYyBoaeG7h24geHXhu5FuZyBow6BuZyBu4bq/dSBjaGnhur9tIGjhur90IGLhu4EgbmdhbmcgKi9cclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_container\">\r\n  <app-weather-card *ngFor=\"let city of cities\" [city]=\"city?.name\"></app-weather-card>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.cities = [
            { name: 'danang' },
            { name: 'paris' },
            { name: 'doha' },
            { name: 'rabat' },
            { name: 'tunis' }
        ];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/twitter/twitter.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/twitter/twitter.service.ts ***!
  \*****************************************************/
/*! exports provided: TwitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function() { return TwitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
    }
    TwitterService.prototype.fetchTweets = function (city) {
        return this.http.post('https://us-central1-minimus-weather.cloudfunctions.net/tweets', {
            data: { q: city + " Weather" }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res && res.result ? res.result.statuses : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (tweets) { return tweets.map(function (tweet) { return tweet.text && tweet.text.match(/weather/g); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tweets) { return tweets.map(function (tweet) { return ({
            text: tweet.text,
            date: tweet.created_at,
            user: {
                name: tweet.user.name,
                photo: tweet.user.profile_image_url_https,
                handle: tweet.user.screen_name
            }
        }); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tweets) { return tweets.slice(0, 4); }));
    };
    TwitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TwitterService);
    return TwitterService;
}());



/***/ }),

/***/ "./src/app/services/ui/ui.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ui/ui.service.ts ***!
  \*******************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UiService = /** @class */ (function () {
    function UiService() {
        //Phát ra thuộc tính darkModeState có giá trị là true
        this.darkModeState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
    UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/app/services/weather/weather.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/weather/weather.service.ts ***!
  \*****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        //đường dẫn để lấy thông tin thời tiết
        this.baseURL = 'https://api.openweathermap.org/data/2.5/';
        this.appID = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appID;
    }
    /**
     * Lấy thông tin thời tiết hiện tại
     * @param city
     */
    WeatherService.prototype.getWeather = function (city) {
        return this.http.get(this.baseURL + "weather?&units=metric&q=" + city + "&appid=" + this.appID);
    };
    /**
     * Lấy thông tin thời tiết dự báo
     * trong hôm nay và 4 ngày sắp tới
     * trả về mảng kết quả
     * @param city
     */
    WeatherService.prototype.getForecast = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get(this.baseURL + "forecast?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (weather) {
            dataSubject.next(weather.list);
        }, function (err) {
            dataSubject.next(err.error);
        });
        return dataSubject;
    };
    /**
     * Lấy thông tin thời tiết dự báo
     * trong hôm nay và 4 ngày sắp tới
     * trả về đối tượng kết quả
     * @param city
     */
    WeatherService.prototype.getForecastObject = function (city) {
        return this.http.get(this.baseURL + "forecast?&units=metric&q=" + city + "&appid=" + this.appID);
    };
    /**
     * Lấy trạng thái thời tiết hiện tại
     * @param city
     */
    WeatherService.prototype.getWeatherState = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get(this.baseURL + "weather?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (data) {
            dataSubject.next(data['weather'][0].main);
        }, function (err) {
            dataSubject.next(err.error);
        });
        return dataSubject;
    };
    /**
     * Lấy nhiệt độ hiện tại
     * @param city
     */
    WeatherService.prototype.getCurrentTemp = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get(this.baseURL + "weather?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (weather) {
            dataSubject.next(Math.ceil(Number(weather.main.temp)));
        });
        return dataSubject;
    };
    /**
     * Lấy độ ẩm hiện tại
     * @param city
     */
    WeatherService.prototype.getCurrentHum = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get(this.baseURL + "weather?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (weather) {
            dataSubject.next(weather.main.humidity);
        });
        return dataSubject;
    };
    /**
     * Lấy tốc độ gió hiện tại
     * @param city
     */
    WeatherService.prototype.getCurrentWind = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get(this.baseURL + "weather?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Math.round(weather.wind.speed)));
        });
        return dataSubject;
    };
    /**
     * Trả về giá trị cao nhất của nhiệt độ
     * theo dự báo lấy trong hôm nay và 4 ngày sắp tới
     * @param city
     */
    WeatherService.prototype.getMaxTemp = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var max;
        this.http.get(this.baseURL + "forecast?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (weather) {
            max = weather.list[0].main.temp;
            weather.list.forEach(function (value) {
                if (max < value.main.temp) {
                    max = value.main.temp;
                }
            });
            dataSubject.next(Math.round(max));
        });
        return dataSubject;
    };
    /**
     * Trả về giá trị thấp nhất của nhiệt độ
     * theo dự báo lấy trong hôm nay và 4 ngày sắp tới
     * @param city
     */
    WeatherService.prototype.getMinTemp = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var min;
        this.http.get(this.baseURL + "forecast?&units=metric&q=" + city + "&appid=" + this.appID)
            .subscribe(function (weather) {
            min = weather.list[0].main.temp;
            weather.list.forEach(function (value) {
                if (min > value.main.temp) {
                    min = value.main.temp;
                }
            });
            dataSubject.next(Math.round(min));
        });
        return dataSubject;
    };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    appID: '1f481fd4fafd2cf9425a51599c8abd7a',
    gKey: '',
    config: {
        apiKey: 'AIzaSyCN1KjTNyB20fE3ERrCWYmA103Ng6ZdZ1A',
        authDomain: '2',
        databaseURL: '3',
        projectId: '4',
        storageBucket: '',
        messagingSenderId: ''
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DINHNV\MyData\LapTrinhDiDong\Angular\angular-minimus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map