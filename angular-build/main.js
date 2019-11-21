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

module.exports = "/*\r\n    Slide Menu\r\n*/\r\n.side-menu-container {\r\n\t/* giữ cố định menu khi kéo chuột lên, xuống\r\n\t\tmenu sẽ nằm nổi trên các phần khác */\r\n\tposition: fixed;\r\n\t/* chiều rộng của menu chiếm 100% bề ngang màn hình */\r\n\twidth: 100%;\r\n\t/* thuộc tính này không phản ứng với hành động kích chuột */\r\n\tpointer-events: none;\r\n\t/* thứ tự ưu tiên hiển thị của menu */\r\n\tz-index: 3;\r\n}\r\n.side-menu-container-active {\r\n\t/* thuộc tính này phản ứng với hành động kích chuột */\r\n\tpointer-events: auto;\r\n}\r\n.slide-menu {\r\n\t/* Dịch chuyển theo phương ngang 100% theo chiều âm, để ẩn menu đi */\r\n\ttransform: translateX(-100%);\r\n\t/* Bề rộng của menu */\r\n\twidth: 27rem;\r\n\t/* Màu nền khi ở chế độ sáng */\r\n\tbackground-color: rgb(159, 217, 228);\r\n\t/* Hiển thị theo dạng cột */\r\n\tdisplay: grid;\r\n\t/* tỉ lệ bề rộng theo mỗi dòng, đúng theo số phần tử con bên trong */\r\n\tgrid-template-rows: 2fr 4fr 1fr;\r\n}\r\n.slide-menu-active {\r\n\t/* Khi đang active thì không ẩn menu */\r\n\ttransform: none;\r\n}\r\n.slide-menu-active-dark {\r\n\t/* Màu nền khi ở chế độ tối */\r\n\tbackground-color: #2B244D;\r\n}\r\n/* \r\n\tmenu header\r\n*/\r\n.menu-header {\r\n\t/* màu nền của menu header, thay đổi theo hướng từ trái sang phải */\r\n\tbackground: linear-gradient(to right, #00FF9B, #5f84fb);\r\n\t/* hiển thị theo dạng cột */\r\n\tdisplay: grid;\r\n\t/* tỉ lệ bề rộng theo mỗi hàng, có 3 hàng */\r\n\tgrid-template-rows: 1fr 4fr 1fr;\r\n\t/* sắp xếp bố cục theo lưới, chia làm 2 cột, lấy theo tên khai báo trong .greeting-text */\r\n\t/* class greeting chiếm 2 cột, các thành phần ở sau sẽ tự động sắp xếp cho đủ cột/dòng */\r\n\tgrid-template-areas: \"greeting greeting\";\r\n\t/* chữ luôn màu trắng dù ở chế độ sáng hay tối */\r\n\tcolor: white;\r\n}\r\n.menu-header-dark {\r\n\t/* màu nền của menu header khi ở chế độ tối, thay đổi theo hướng từ dưới lên trên */\r\n\tbackground: linear-gradient(to top, #30cfd0, #330867);\r\n}\r\n.greeting-text {\r\n\t/* đặt tên cho class này, để sử dụng trong class cha:\r\n\t.menu-header (trong thuộc tính: grid-template-areas) */\r\n\tgrid-area: greeting;\r\n\tfont-size: 1.25rem;\r\n\tletter-spacing: 0.15rem;\r\n\ttext-transform: uppercase;\r\n\tmargin-top: 1rem;\r\n\t/* canh giữa chính nó theo phương ngang trong class cha */\r\n\tjustify-self: center;\r\n}\r\n.profile-image-container {\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n\t/* Khoảng cách với lề trái */\r\n\tmargin-left: 2rem;\r\n}\r\n.profile-image {\r\n\t/* chiều rộng của ảnh đại diện */\r\n\twidth: 4rem;\r\n}\r\n.account-details {\r\n\tdisplay: flex;\r\n\t/* sắp xếp các mục theo chiều dọc */\r\n\tflex-direction: column;\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n}\r\n.name-text {\r\n\tfont-size: 1.15rem;\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n.email-text {\r\n\tfont-size: 0.9rem;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n/* \r\nmenu links\r\n*/\r\n.links-container {\r\n\t/* nằm phía trên theo phương dọc so với class cha, đây là mặc định */\r\n\talign-self: start;\r\n}\r\n.menu-links {\r\n\t/* sắp xếp các mục theo chiều dọc */\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* không cho hiển thị dấu chấm trước danh sách */\r\n\tlist-style: none;\r\n}\r\n.menu-links-dark {\r\n\t/* màu chữ khi ở chế độ tối, khi ở chế độ sáng thì màu chữ lấy theo mặc định là màu đen */\r\n\tcolor: white;\r\n}\r\n.link-active {\r\n\t/* link nào active thì tô màu khác và gạch chân */\r\n\tcolor: #495CFC;\r\n\tborder-bottom: 1px solid #495CFC;\r\n}\r\n.menu-link {\r\n\t/* đệm và lề cho các mục trong danh sách */\r\n\tpadding: 1rem 0;\r\n\tmargin: 0.5rem 0;\r\n\tcursor: pointer;\r\n}\r\n.copyright-container {\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n}\r\n.copyright-text {\r\n\tdisplay: block;\r\n\t/* nằm giữa theo phương ngang */\r\n\ttext-align: center;\r\n\tcolor: white;\r\n}\r\n/* \r\n\tMain\r\n*/\r\n/* style cho nội dung chính ở chế độ tối */\r\n.root-container-dark {\r\n\t/* áp dụng ở chế độ tối: Thay đổi màu nền theo hướng từ dưới lên trên */\r\n\tbackground-image: linear-gradient(to top, #5ee7df, #372865);\r\n}\r\n/* Style cho phần header */\r\n.main-header {\r\n\t/* các mục con hiển thị chính giữa theo phương dọc */\r\n\talign-items: center;\r\n\tdisplay: grid;\r\n\t/* chia bề rộng thành cột, có 3 cột */\r\n\tgrid-template-columns: 1fr 1fr 0.5fr;\r\n\tbackground-color: rgb(169, 205, 226);\r\n\theight: 4rem;\r\n\t/* các mục con hiển thị chính giữa theo phương ngang */\r\n\tjustify-items: center;\r\n}\r\n/* Style cho header khi ở chế độ tối */\r\n.main-header-dark {\r\n\tbackground-color: #2B244D;\r\n\tcolor: white;\r\n}\r\n/*\r\n left section\r\n */\r\n.left-section {\r\n\tdisplay: grid;\r\n\t/* phần bên trái được chia làm 2 cột */\r\n\tgrid-template-columns: 1fr 9fr;\r\n}\r\n.hamburger-icon {\r\n\tz-index: 3;\r\n\theight: 1rem;\r\n\t/* Phần đệm của icon menu */\r\n\tpadding: 0.5rem 1.5rem;\r\n}\r\n.logo-icon {\r\n\theight: 2rem;\r\n\twidth: 100%;\r\n}\r\n.logo-text {\r\n\tfill: rgb(160, 14, 75);\r\n\ttransform : translate(210px, 56px);\r\n}\r\n.logo-text-dark {\r\n\tfill: #fff;\r\n}\r\n/* Style cho chữ */\r\n.date-text {\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin: 0.5rem 0;\r\n}\r\n/* Style cho chữ của điều khiển LIGHT và DARK */\r\n.mode-toggle-text {\r\n\tfont-size: 0.75rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n/* Style cho khung chứa thanh và nút */\r\n.toggle-button-container {\r\n\t/* hiển thị bàn tay khi đưa con trỏ vào */\r\n\tcursor: pointer;\r\n\t/* đặt position: relative để những thành phần con lấy tọa độ theo tọa độ của cha */\r\n\tposition: relative;\r\n\tmargin: 0 0.75rem 0 0.25rem;\r\n}\r\n/* Style cho thanh trượt */\r\n.mode-toggle-bg {\r\n\theight: 1rem;\r\n\twidth: 3rem;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: rgba(94, 68, 68, 0.5);\r\n\tdisplay: inline-block;\r\n}\r\n/* Style cho thanh trượt khi chọn (ở chế độ tối)  */\r\n.mode-toggle-bg-checked {\r\n\tbackground-color: #FF0070;\r\n}\r\n/* Style cho nút trượt */\r\n.mode-toggle-circle {\r\n\theight: 1.30rem;\r\n\twidth: 1.30rem;\r\n\tbackground-color: #2B244D;\r\n\tposition: absolute;\r\n\ttop: -0.25rem;\r\n\tborder-radius: 50%;\r\n\t/* nút trượt di chuyển */\r\n\ttransition: left .3s linear;\r\n\tleft: 0rem;\r\n}\r\n/* Style cho nút trượt khi chọn (ở chế độ tối)  */\r\n.mode-toggle-circle-checked {\r\n\tbackground-color: white;\r\n\tleft: 2rem;\r\n}\r\n/* \r\n\tnếu chiều rộng màn hình tối đa là 959px \r\n\tcó nghĩa là khi chiều rộng màn hình <= 959px\r\n\tthì sử dụng các style này\r\n*/\r\n@media screen and (max-width: 959px) {\r\n\t.main-header {\r\n\t\t/* Hiển thị theo dạng lưới (chỉ có 1 cột) */\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tpadding: 1rem 0;\r\n\t\theight: 8rem;\r\n\t}\r\n\t\r\n\t.left-section {\r\n\t\t/* Hiển thị theo dạng lưới (có 2 cột, cột đầu tiên có chiều rộng là 0) */\r\n\t\tgrid-template-columns: 0 1fr;\r\n\t\t/* chiếm 100% chiều ngang */\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.logo-icon {\r\n\t\t/* khoảng cách với lề của icon\r\n\t\tcanh giữa icon */\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtDQUNDO3NDQUNxQztDQUNyQyxlQUFlO0NBQ2YscURBQXFEO0NBQ3JELFdBQVc7Q0FDWCwyREFBMkQ7Q0FDM0Qsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLHFEQUFxRDtDQUNyRCxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLG9FQUFvRTtDQUNwRSw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsb0NBQW9DO0NBQ3BDLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2Isb0VBQW9FO0NBQ3BFLCtCQUErQjtBQUNoQztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLDZCQUE2QjtDQUM3Qix5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQztBQUNEO0NBQ0MsbUVBQW1FO0NBQ25FLHVEQUF1RDtDQUN2RCwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IseUZBQXlGO0NBQ3pGLHdGQUF3RjtDQUN4Rix3Q0FBd0M7Q0FDeEMsZ0RBQWdEO0NBQ2hELFlBQVk7QUFDYjtBQUVBO0NBQ0MsbUZBQW1GO0NBQ25GLHFEQUFxRDtBQUN0RDtBQUVBO0NBQ0M7dURBQ3NEO0NBQ3RELG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIseURBQXlEO0NBQ3pELG9CQUFvQjtBQUNyQjtBQUVBO0NBQ0Msb0RBQW9EO0NBQ3BELGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsV0FBVztBQUNaO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLHNCQUFzQjtDQUN0QixvREFBb0Q7Q0FDcEQsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCO0FBRUE7O0NBRUM7QUFDRDtDQUNDLG9FQUFvRTtDQUNwRSxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGdEQUFnRDtDQUNoRCxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHlGQUF5RjtDQUN6RixZQUFZO0FBQ2I7QUFFQTtDQUNDLGlEQUFpRDtDQUNqRCxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxvREFBb0Q7Q0FDcEQsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7QUFFQTs7Q0FFQztBQUNELDBDQUEwQztBQUMxQztDQUNDLHVFQUF1RTtDQUN2RSwyREFBMkQ7QUFDNUQ7QUFFQSwwQkFBMEI7QUFDMUI7Q0FDQyxvREFBb0Q7Q0FDcEQsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsb0NBQW9DO0NBQ3BDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osc0RBQXNEO0NBQ3RELHFCQUFxQjtBQUN0QjtBQUVBLHNDQUFzQztBQUN0QztDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7QUFFQTs7RUFFRTtBQUNGO0NBQ0MsYUFBYTtDQUNiLHNDQUFzQztDQUN0Qyw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLHNCQUFzQjtBQUN2QjtBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtDQUFrQztBQUNuQztBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBRUEsa0JBQWtCO0FBQ2xCO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFFQSwrQ0FBK0M7QUFDL0M7Q0FDQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtBQUN2QjtBQUVBLHNDQUFzQztBQUN0QztDQUNDLHlDQUF5QztDQUN6QyxlQUFlO0NBQ2Ysa0ZBQWtGO0NBQ2xGLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7QUFFQSwwQkFBMEI7QUFDMUI7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLHFCQUFxQjtDQUNyQix1Q0FBdUM7Q0FDdkMscUJBQXFCO0FBQ3RCO0FBRUEsbURBQW1EO0FBQ25EO0NBQ0MseUJBQXlCO0FBQzFCO0FBRUEsd0JBQXdCO0FBQ3hCO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLDJCQUEyQjtDQUMzQixVQUFVO0FBQ1g7QUFFQSxpREFBaUQ7QUFDakQ7Q0FDQyx1QkFBdUI7Q0FDdkIsVUFBVTtBQUNYO0FBRUE7Ozs7Q0FJQztBQUNEO0NBQ0M7RUFDQywyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixZQUFZO0NBQ2I7O0NBRUE7RUFDQyx3RUFBd0U7RUFDeEUsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0NBQ1o7O0NBRUE7RUFDQztrQkFDZ0I7RUFDaEIsY0FBYztDQUNmO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBTbGlkZSBNZW51XHJcbiovXHJcbi5zaWRlLW1lbnUtY29udGFpbmVyIHtcclxuXHQvKiBnaeG7ryBj4buRIMSR4buLbmggbWVudSBraGkga8OpbyBjaHXhu5l0IGzDqm4sIHh14buRbmdcclxuXHRcdG1lbnUgc+G6vSBu4bqxbSBu4buVaSB0csOqbiBjw6FjIHBo4bqnbiBraMOhYyAqL1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHQvKiBjaGnhu4F1IHLhu5luZyBj4bunYSBtZW51IGNoaeG6v20gMTAwJSBi4buBIG5nYW5nIG3DoG4gaMOsbmggKi9cclxuXHR3aWR0aDogMTAwJTtcclxuXHQvKiB0aHXhu5ljIHTDrW5oIG7DoHkga2jDtG5nIHBo4bqjbiDhu6luZyB24bubaSBow6BuaCDEkeG7mW5nIGvDrWNoIGNodeG7mXQgKi9cclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHQvKiB0aOG7qSB04buxIMawdSB0acOqbiBoaeG7g24gdGjhu4sgY+G7p2EgbWVudSAqL1xyXG5cdHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUtY29udGFpbmVyLWFjdGl2ZSB7XHJcblx0LyogdGh14buZYyB0w61uaCBuw6B5IHBo4bqjbiDhu6luZyB24bubaSBow6BuaCDEkeG7mW5nIGvDrWNoIGNodeG7mXQgKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLnNsaWRlLW1lbnUge1xyXG5cdC8qIEThu4tjaCBjaHV54buDbiB0aGVvIHBoxrDGoW5nIG5nYW5nIDEwMCUgdGhlbyBjaGnhu4F1IMOibSwgxJHhu4Mg4bqpbiBtZW51IMSRaSAqL1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcblx0LyogQuG7gSBy4buZbmcgY+G7p2EgbWVudSAqL1xyXG5cdHdpZHRoOiAyN3JlbTtcclxuXHQvKiBNw6B1IG7hu4FuIGtoaSDhu58gY2jhur8gxJHhu5kgc8OhbmcgKi9cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyMTcsIDIyOCk7XHJcblx0LyogSGnhu4NuIHRo4buLIHRoZW8gZOG6oW5nIGPhu5l0ICovXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiB04buJIGzhu4cgYuG7gSBy4buZbmcgdGhlbyBt4buXaSBkw7JuZywgxJHDum5nIHRoZW8gc+G7kSBwaOG6p24gdOG7rSBjb24gYsOqbiB0cm9uZyAqL1xyXG5cdGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDRmciAxZnI7XHJcbn1cclxuXHJcbi5zbGlkZS1tZW51LWFjdGl2ZSB7XHJcblx0LyogS2hpIMSRYW5nIGFjdGl2ZSB0aMOsIGtow7RuZyDhuqluIG1lbnUgKi9cclxuXHR0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZS1tZW51LWFjdGl2ZS1kYXJrIHtcclxuXHQvKiBNw6B1IG7hu4FuIGtoaSDhu58gY2jhur8gxJHhu5kgdOG7kWkgKi9cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG59XHJcblxyXG4vKiBcclxuXHRtZW51IGhlYWRlclxyXG4qL1xyXG4ubWVudS1oZWFkZXIge1xyXG5cdC8qIG3DoHUgbuG7gW4gY+G7p2EgbWVudSBoZWFkZXIsIHRoYXkgxJHhu5VpIHRoZW8gaMaw4bubbmcgdOG7qyB0csOhaSBzYW5nIHBo4bqjaSAqL1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwRkY5QiwgIzVmODRmYik7XHJcblx0LyogaGnhu4NuIHRo4buLIHRoZW8gZOG6oW5nIGPhu5l0ICovXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiB04buJIGzhu4cgYuG7gSBy4buZbmcgdGhlbyBt4buXaSBow6BuZywgY8OzIDMgaMOgbmcgKi9cclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyO1xyXG5cdC8qIHPhuq9wIHjhur9wIGLhu5EgY+G7pWMgdGhlbyBsxrDhu5tpLCBjaGlhIGzDoG0gMiBj4buZdCwgbOG6pXkgdGhlbyB0w6puIGtoYWkgYsOhbyB0cm9uZyAuZ3JlZXRpbmctdGV4dCAqL1xyXG5cdC8qIGNsYXNzIGdyZWV0aW5nIGNoaeG6v20gMiBj4buZdCwgY8OhYyB0aMOgbmggcGjhuqduIOG7nyBzYXUgc+G6vSB04buxIMSR4buZbmcgc+G6r3AgeOG6v3AgY2hvIMSR4bunIGPhu5l0L2TDsm5nICovXHJcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXCJncmVldGluZyBncmVldGluZ1wiO1xyXG5cdC8qIGNo4buvIGx1w7RuIG3DoHUgdHLhuq9uZyBkw7kg4bufIGNo4bq/IMSR4buZIHPDoW5nIGhheSB04buRaSAqL1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lbnUtaGVhZGVyLWRhcmsge1xyXG5cdC8qIG3DoHUgbuG7gW4gY+G7p2EgbWVudSBoZWFkZXIga2hpIOG7nyBjaOG6vyDEkeG7mSB04buRaSwgdGhheSDEkeG7lWkgdGhlbyBoxrDhu5tuZyB04burIGTGsOG7m2kgbMOqbiB0csOqbiAqL1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzMGNmZDAsICMzMzA4NjcpO1xyXG59XHJcblxyXG4uZ3JlZXRpbmctdGV4dCB7XHJcblx0LyogxJHhurd0IHTDqm4gY2hvIGNsYXNzIG7DoHksIMSR4buDIHPhu60gZOG7pW5nIHRyb25nIGNsYXNzIGNoYTpcclxuXHQubWVudS1oZWFkZXIgKHRyb25nIHRodeG7mWMgdMOtbmg6IGdyaWQtdGVtcGxhdGUtYXJlYXMpICovXHJcblx0Z3JpZC1hcmVhOiBncmVldGluZztcclxuXHRmb250LXNpemU6IDEuMjVyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRtYXJnaW4tdG9wOiAxcmVtO1xyXG5cdC8qIGNhbmggZ2nhu69hIGNow61uaCBuw7MgdGhlbyBwaMawxqFuZyBuZ2FuZyB0cm9uZyBjbGFzcyBjaGEgKi9cclxuXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcclxuXHQvKiDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jIHNvIHbhu5tpIGNsYXNzIGNoYSAqL1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHQvKiBLaG/huqNuZyBjw6FjaCB24bubaSBs4buBIHRyw6FpICovXHJcblx0bWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuXHQvKiBjaGnhu4F1IHLhu5luZyBj4bunYSDhuqNuaCDEkeG6oWkgZGnhu4duICovXHJcblx0d2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbi5hY2NvdW50LWRldGFpbHMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Lyogc+G6r3AgeOG6v3AgY8OhYyBt4bulYyB0aGVvIGNoaeG7gXUgZOG7jWMgKi9cclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC8qIMSRxrDhu6NjIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgZOG7jWMgc28gduG7m2kgY2xhc3MgY2hhICovXHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubmFtZS10ZXh0IHtcclxuXHRmb250LXNpemU6IDEuMTVyZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uZW1haWwtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAwLjlyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLyogXHJcbm1lbnUgbGlua3NcclxuKi9cclxuLmxpbmtzLWNvbnRhaW5lciB7XHJcblx0LyogbuG6sW0gcGjDrWEgdHLDqm4gdGhlbyBwaMawxqFuZyBk4buNYyBzbyB24bubaSBjbGFzcyBjaGEsIMSRw6J5IGzDoCBt4bq3YyDEkeG7i25oICovXHJcblx0YWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIHtcclxuXHQvKiBz4bqvcCB44bq/cCBjw6FjIG3hu6VjIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQvKiBraMO0bmcgY2hvIGhp4buDbiB0aOG7iyBk4bqldSBjaOG6pW0gdHLGsOG7m2MgZGFuaCBzw6FjaCAqL1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzLWRhcmsge1xyXG5cdC8qIG3DoHUgY2jhu68ga2hpIOG7nyBjaOG6vyDEkeG7mSB04buRaSwga2hpIOG7nyBjaOG6vyDEkeG7mSBzw6FuZyB0aMOsIG3DoHUgY2jhu68gbOG6pXkgdGhlbyBt4bq3YyDEkeG7i25oIGzDoCBtw6B1IMSRZW4gKi9cclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rLWFjdGl2ZSB7XHJcblx0LyogbGluayBuw6BvIGFjdGl2ZSB0aMOsIHTDtCBtw6B1IGtow6FjIHbDoCBn4bqhY2ggY2jDom4gKi9cclxuXHRjb2xvcjogIzQ5NUNGQztcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ5NUNGQztcclxufVxyXG5cclxuLm1lbnUtbGluayB7XHJcblx0LyogxJHhu4dtIHbDoCBs4buBIGNobyBjw6FjIG3hu6VjIHRyb25nIGRhbmggc8OhY2ggKi9cclxuXHRwYWRkaW5nOiAxcmVtIDA7XHJcblx0bWFyZ2luOiAwLjVyZW0gMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtY29udGFpbmVyIHtcclxuXHQvKiDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jIHNvIHbhu5tpIGNsYXNzIGNoYSAqL1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvcHlyaWdodC10ZXh0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHQvKiBu4bqxbSBnaeG7r2EgdGhlbyBwaMawxqFuZyBuZ2FuZyAqL1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFxyXG5cdE1haW5cclxuKi9cclxuLyogc3R5bGUgY2hvIG7hu5lpIGR1bmcgY2jDrW5oIOG7nyBjaOG6vyDEkeG7mSB04buRaSAqL1xyXG4ucm9vdC1jb250YWluZXItZGFyayB7XHJcblx0Lyogw6FwIGThu6VuZyDhu58gY2jhur8gxJHhu5kgdOG7kWk6IFRoYXkgxJHhu5VpIG3DoHUgbuG7gW4gdGhlbyBoxrDhu5tuZyB04burIGTGsOG7m2kgbMOqbiB0csOqbiAqL1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1ZWU3ZGYsICMzNzI4NjUpO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8gcGjhuqduIGhlYWRlciAqL1xyXG4ubWFpbi1oZWFkZXIge1xyXG5cdC8qIGPDoWMgbeG7pWMgY29uIGhp4buDbiB0aOG7iyBjaMOtbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgZOG7jWMgKi9cclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0LyogY2hpYSBi4buBIHLhu5luZyB0aMOgbmggY+G7mXQsIGPDsyAzIGPhu5l0ICovXHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuNWZyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDIwNSwgMjI2KTtcclxuXHRoZWlnaHQ6IDRyZW07XHJcblx0LyogY8OhYyBt4bulYyBjb24gaGnhu4NuIHRo4buLIGNow61uaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBuZ2FuZyAqL1xyXG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIGhlYWRlciBraGkg4bufIGNo4bq/IMSR4buZIHThu5FpICovXHJcbi5tYWluLWhlYWRlci1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLypcclxuIGxlZnQgc2VjdGlvblxyXG4gKi9cclxuLmxlZnQtc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiBwaOG6p24gYsOqbiB0csOhaSDEkcaw4bujYyBjaGlhIGzDoG0gMiBj4buZdCAqL1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmcjtcclxufVxyXG5cclxuLmhhbWJ1cmdlci1pY29uIHtcclxuXHR6LWluZGV4OiAzO1xyXG5cdGhlaWdodDogMXJlbTtcclxuXHQvKiBQaOG6p24gxJHhu4dtIGPhu6dhIGljb24gbWVudSAqL1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG5cdGhlaWdodDogMnJlbTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcblx0ZmlsbDogcmdiKDE2MCwgMTQsIDc1KTtcclxuXHR0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoMjEwcHgsIDU2cHgpO1xyXG59XHJcblxyXG4ubG9nby10ZXh0LWRhcmsge1xyXG5cdGZpbGw6ICNmZmY7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBjaOG7ryAqL1xyXG4uZGF0ZS10ZXh0IHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcblx0bWFyZ2luOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIGNo4buvIGPhu6dhIMSRaeG7gXUga2hp4buDbiBMSUdIVCB2w6AgREFSSyAqL1xyXG4ubW9kZS10b2dnbGUtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIGtodW5nIGNo4bupYSB0aGFuaCB2w6AgbsO6dCAqL1xyXG4udG9nZ2xlLWJ1dHRvbi1jb250YWluZXIge1xyXG5cdC8qIGhp4buDbiB0aOG7iyBiw6BuIHRheSBraGkgxJHGsGEgY29uIHRy4buPIHbDoG8gKi9cclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0LyogxJHhurd0IHBvc2l0aW9uOiByZWxhdGl2ZSDEkeG7gyBuaOG7r25nIHRow6BuaCBwaOG6p24gY29uIGzhuqV5IHThu41hIMSR4buZIHRoZW8gdOG7jWEgxJHhu5kgY+G7p2EgY2hhICovXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogMCAwLjc1cmVtIDAgMC4yNXJlbTtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIHRoYW5oIHRyxrDhu6N0ICovXHJcbi5tb2RlLXRvZ2dsZS1iZyB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG5cdHdpZHRoOiAzcmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA2OCwgNjgsIDAuNSk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8gdGhhbmggdHLGsOG7o3Qga2hpIGNo4buNbiAo4bufIGNo4bq/IMSR4buZIHThu5FpKSAgKi9cclxuLm1vZGUtdG9nZ2xlLWJnLWNoZWNrZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRjAwNzA7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBuw7p0IHRyxrDhu6N0ICovXHJcbi5tb2RlLXRvZ2dsZS1jaXJjbGUge1xyXG5cdGhlaWdodDogMS4zMHJlbTtcclxuXHR3aWR0aDogMS4zMHJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0wLjI1cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHQvKiBuw7p0IHRyxrDhu6N0IGRpIGNodXnhu4NuICovXHJcblx0dHJhbnNpdGlvbjogbGVmdCAuM3MgbGluZWFyO1xyXG5cdGxlZnQ6IDByZW07XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBuw7p0IHRyxrDhu6N0IGtoaSBjaOG7jW4gKOG7nyBjaOG6vyDEkeG7mSB04buRaSkgICovXHJcbi5tb2RlLXRvZ2dsZS1jaXJjbGUtY2hlY2tlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0bGVmdDogMnJlbTtcclxufVxyXG5cclxuLyogXHJcblx0buG6v3UgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCB04buRaSDEkWEgbMOgIDk1OXB4IFxyXG5cdGPDsyBuZ2jEqWEgbMOgIGtoaSBjaGnhu4F1IHLhu5luZyBtw6BuIGjDrG5oIDw9IDk1OXB4XHJcblx0dGjDrCBz4butIGThu6VuZyBjw6FjIHN0eWxlIG7DoHlcclxuKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuXHQubWFpbi1oZWFkZXIge1xyXG5cdFx0LyogSGnhu4NuIHRo4buLIHRoZW8gZOG6oW5nIGzGsOG7m2kgKGNo4buJIGPDsyAxIGPhu5l0KSAqL1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblx0XHRwYWRkaW5nOiAxcmVtIDA7XHJcblx0XHRoZWlnaHQ6IDhyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5sZWZ0LXNlY3Rpb24ge1xyXG5cdFx0LyogSGnhu4NuIHRo4buLIHRoZW8gZOG6oW5nIGzGsOG7m2kgKGPDsyAyIGPhu5l0LCBj4buZdCDEkeG6p3UgdGnDqm4gY8OzIGNoaeG7gXUgcuG7mW5nIGzDoCAwKSAqL1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwIDFmcjtcclxuXHRcdC8qIGNoaeG6v20gMTAwJSBjaGnhu4F1IG5nYW5nICovXHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5sb2dvLWljb24ge1xyXG5cdFx0Lyoga2hv4bqjbmcgY8OhY2ggduG7m2kgbOG7gSBj4bunYSBpY29uXHJcblx0XHRjYW5oIGdp4buvYSBpY29uICovXHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Slide Menu-->\r\n<aside class=\"side-menu-container\" [ngClass]=\"{'side-menu-container-active': showMenu}\" (click)=\"toggleMenu()\">\r\n  <!-- phương thức $event.stopImmediatePropagation()\r\n    để ngăn chặn thực hiện hiện hàm toggleMenu khi kích vào menu -->\r\n  <nav class=\"slide-menu\" [ngClass]=\"{'slide-menu-active': showMenu, 'slide-menu-active-dark': darkModeActive}\"\r\n    (click)=\"$event.stopImmediatePropagation();\">\r\n    <section class=\"menu-header\" [ngClass]=\"{'menu-header-dark': darkModeActive}\">\r\n      <span class=\"greeting-text\">Welcome Back</span>\r\n      <div class=\"profile-image-container\">\r\n        <img src=\"https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png\" alt=\"profile-image\"\r\n          class=\"profile-image\">\r\n      </div>\r\n      <div class=\"account-details\">\r\n        <span class=\"name-text\">{{ userEmail }}</span>\r\n        <span class=\"email-text\">Free Plan</span>\r\n      </div>\r\n    </section>\r\n    <section class=\"links-container\">\r\n      <ul class=\"menu-links\" [ngClass]=\"{'menu-links-dark': darkModeActive}\">\r\n        <li class=\"menu-link\" routerLink=\"\" routerLinkActive=\"link-active\" (click)=\"toggleMenu()\">Home</li>\r\n        <li class=\"menu-link\" routerLink=\"/add\" routerLinkActive=\"link-active\" (click)=\"toggleMenu()\">Add City</li>\r\n        <li (click)=\"logout()\" class=\"menu-link\">Logout</li>\r\n      </ul>\r\n    </section>\r\n    <section class=\"copyright-container\">\r\n      <small class=\"copyright-text\">Copyright © 2019 Minimus</small>\r\n    </section>\r\n  </nav>\r\n</aside>\r\n\r\n<main [ngClass]=\"{'root-container-dark': darkModeActive}\">\r\n  <header [ngClass]=\"{'main-header-dark': darkModeActive}\" class=\"main-header\">\r\n\r\n    <div class=\"left-section\">\r\n      <svg (click)=\"toggleMenu()\" class=\"hamburger-icon\" viewBox=\"31.5 30 49.9 32\">\r\n        <defs>\r\n          <style>\r\n            .hamburger-icon-fill {\r\n              fill: rgb(0, 0, 0);\r\n              width: 49.9px;\r\n              height: 4px;\r\n            }\r\n\r\n            .hamburger-icon-fill-dark {\r\n              fill: #fff;\r\n            }\r\n          </style>\r\n        </defs>\r\n        <rect [ngClass]=\"{'hamburger-icon-fill-dark': darkModeActive}\" class=\"hamburger-icon-fill\"\r\n          transform=\"translate(31.5 35)\"></rect>\r\n        <rect [ngClass]=\"{'hamburger-icon-fill-dark': darkModeActive}\" class=\"hamburger-icon-fill\"\r\n          transform=\"translate(31.5 47)\"></rect>\r\n        <rect [ngClass]=\"{'hamburger-icon-fill-dark': darkModeActive}\" class=\"hamburger-icon-fill\"\r\n          transform=\"translate(31.5 58)\"></rect>\r\n      </svg>\r\n\r\n      <svg class=\"logo-icon\" viewBox=\"195.3 22.2 213.7 42.8\">\r\n        <!-- tam giác màu xanh lục -->\r\n        <path fill=\"#00ff9b\" d=\"M150.3 65V22.2L193 65z\"></path>\r\n        <!-- tam giác màu xanh dương -->\r\n        <path fill=\"#003eff\" d=\"M193.1 65h-42.8L193 22.2z\"></path>\r\n        <text [ngClass]=\"{'logo-text-dark': darkModeActive}\" class=\"logo-text\" fill=\"yellow\"\r\n          font-family=\"SegoeUI-Semibold, Segoe UI\" font-size=\"30px\" font-weight=\"bold\" letter-spacing=\"0.1em\"\r\n          transform=\"translate(220 56)\">\r\n          <tspan>Minimus</tspan>\r\n        </text>\r\n      </svg>\r\n    </div>\r\n\r\n    <h3 class=\"date-text\">Today</h3>\r\n\r\n    <div>\r\n      <span class=\"mode-toggle-text\">Light</span>\r\n      <label class=\"toggle-button-container\" (click)=\"modeToggleSwitch()\">\r\n        <span [ngClass]=\"{'mode-toggle-bg-checked': darkModeActive}\" class=\"mode-toggle-bg\"></span>\r\n        <span [ngClass]=\"{'mode-toggle-circle-checked': darkModeActive}\" class=\"mode-toggle-circle\"></span>\r\n      </label>\r\n      <span class=\"mode-toggle-text\">Dark</span>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Main Content -->\r\n  <router-outlet></router-outlet>\r\n</main>"

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
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
/* harmony import */ var _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/twitter/twitter.service */ "./src/app/services/twitter/twitter.service.ts");













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
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [
                _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_10__["WeatherService"],
                _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"],
                _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_12__["TwitterService"]
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

module.exports = ".error-wrapper {\r\n  position: fixed;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translate(-50%, 6rem);\r\n  width: 70%;\r\n  background-color: crimson;\r\n  color: white;\r\n  display: flex;\r\n  padding: 0.5rem 3rem;\r\n}\r\n\r\n.error-wrapper-active {\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n.error-message {\r\n  font-size: 1.25rem;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: capitalize;\r\n  width: 80%;\r\n}\r\n\r\n.error-btn {\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2cmVtKTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyLWFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZXJyb3ItYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-wrapper\" [ngClass]=\"{'error-wrapper-active': message}\">\r\n  <p class=\"error-message\">{{ message }}</p>\r\n  <button class=\"error-btn\">{{ action }}</button>\r\n</div>"

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

module.exports = ".weather-card {\r\n\tdisplay: grid;\r\n\t/* nội dung bên trong class này được canh giữa theo phương ngang */\r\n\tjustify-items: center;\r\n\t/* khoảng cách đệm */\r\n\tpadding: 2rem;\r\n\t/* khoảng cách lề */\r\n\tmargin: 2rem;\r\n\t/* bề rộng và chiều cao do những thành phần bên trong chiếm (nếu không đặt) */\r\n\t/* width: 19rem; */\r\n\t/* chiều cao */\r\n\t/* height: 30rem; */\r\n\tcursor: pointer;\r\n\tbackground-color: rgb(119, 163, 156);\r\n\tborder-radius: 1.75rem;\r\n\t-webkit-animation: 1s ease-in-out slideup, 1.25s ease-in-out fadein;\r\n\t        animation: 1s ease-in-out slideup, 1.25s ease-in-out fadein;\r\n}\r\n\r\n.weather-card-dark {\r\n\t/* màu nền của card khi ở chế độ tối */\r\n\tbackground: linear-gradient(to bottom, #711B86, #00057A);\r\n\tcolor: white;\r\n}\r\n\r\n@-webkit-keyframes slideup {\r\n\t0% {\r\n    \ttransform: translateY(50%);\r\n\t}\r\n\t\r\n\t100% {\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n\r\n@keyframes slideup {\r\n\t0% {\r\n    \ttransform: translateY(50%);\r\n\t}\r\n\t\r\n\t100% {\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes fadein {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.city-name-text {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 1.4rem;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.weather-icon-container {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.weather-icon-container > svg {\r\n\twidth: 15rem;\r\n\theight: 15rem;\r\n}\r\n\r\n.temperature-metric-text {\r\n\tfont-size: 3rem;\r\n}\r\n\r\n.weather-condition-text {\r\n\tdisplay: block;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n\r\n.min-max-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.min-container,\r\n.max-container {\r\n\tmargin: 1rem 3rem;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n/* style cho mũi tên */\r\n\r\n.min-arrow-icon,\r\n.max-arrow-icon {\r\n\theight: 1.25rem;\r\n\tmargin: auto;\r\n}\r\n\r\n.max-arrow-icon {\r\n\tmargin-bottom: -0.05rem;\r\n}\r\n\r\n.max-text {\r\n\tcolor: #FF0070;\r\n}\r\n\r\n.min-text {\r\n\tcolor: #00FF9B;\r\n}\r\n\r\n.max-text,\r\n.min-text {\r\n\ttext-align: center;\r\n}\r\n\r\n.max-temperature-text,\r\n.min-temperature-text {\r\n\tfont-size: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isa0VBQWtFO0NBQ2xFLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osNkVBQTZFO0NBQzdFLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixvQ0FBb0M7Q0FDcEMsc0JBQXNCO0NBQ3RCLG1FQUEyRDtTQUEzRCwyREFBMkQ7QUFDNUQ7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsd0RBQXdEO0NBQ3hELFlBQVk7QUFDYjs7QUFFQTtDQUNDO0tBQ0ksMEJBQTBCO0NBQzlCOztDQUVBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7O0FBUkE7Q0FDQztLQUNJLDBCQUEwQjtDQUM5Qjs7Q0FFQTtFQUNDLHdCQUF3QjtDQUN6QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7QUFDRDs7QUFSQTtDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLCtCQUErQjtBQUNoQzs7QUFFQSxzQkFBc0I7O0FBQ3RCOztDQUVDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXItY2FyZC93ZWF0aGVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLWNhcmQge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0LyogbuG7mWkgZHVuZyBiw6puIHRyb25nIGNsYXNzIG7DoHkgxJHGsOG7o2MgY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBuZ2FuZyAqL1xyXG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHQvKiBraG/huqNuZyBjw6FjaCDEkeG7h20gKi9cclxuXHRwYWRkaW5nOiAycmVtO1xyXG5cdC8qIGtob+G6o25nIGPDoWNoIGzhu4EgKi9cclxuXHRtYXJnaW46IDJyZW07XHJcblx0LyogYuG7gSBy4buZbmcgdsOgIGNoaeG7gXUgY2FvIGRvIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBiw6puIHRyb25nIGNoaeG6v20gKG7hur91IGtow7RuZyDEkeG6t3QpICovXHJcblx0Lyogd2lkdGg6IDE5cmVtOyAqL1xyXG5cdC8qIGNoaeG7gXUgY2FvICovXHJcblx0LyogaGVpZ2h0OiAzMHJlbTsgKi9cclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDExOSwgMTYzLCAxNTYpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcblx0YW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCBzbGlkZXVwLCAxLjI1cyBlYXNlLWluLW91dCBmYWRlaW47XHJcbn1cclxuXHJcbi53ZWF0aGVyLWNhcmQtZGFyayB7XHJcblx0LyogbcOgdSBu4buBbiBj4bunYSBjYXJkIGtoaSDhu58gY2jhur8gxJHhu5kgdOG7kWkgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzExQjg2LCAjMDAwNTdBKTtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGV1cCB7XHJcblx0MCUge1xyXG4gICAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuXHR9XHJcblx0XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcblx0MCUge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0XHJcblx0MTAwJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxufVxyXG5cclxuLmNpdHktbmFtZS10ZXh0IHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbi1jb250YWluZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLWljb24tY29udGFpbmVyID4gc3ZnIHtcclxuXHR3aWR0aDogMTVyZW07XHJcblx0aGVpZ2h0OiAxNXJlbTtcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlLW1ldHJpYy10ZXh0IHtcclxuXHRmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLWNvbmRpdGlvbi10ZXh0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi5taW4tbWF4LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5taW4tY29udGFpbmVyLFxyXG4ubWF4LWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAxcmVtIDNyZW07XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG4vKiBzdHlsZSBjaG8gbcWpaSB0w6puICovXHJcbi5taW4tYXJyb3ctaWNvbixcclxuLm1heC1hcnJvdy1pY29uIHtcclxuXHRoZWlnaHQ6IDEuMjVyZW07XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF4LWFycm93LWljb24ge1xyXG5cdG1hcmdpbi1ib3R0b206IC0wLjA1cmVtO1xyXG59XHJcblxyXG4ubWF4LXRleHQge1xyXG5cdGNvbG9yOiAjRkYwMDcwO1xyXG59XHJcblxyXG4ubWluLXRleHQge1xyXG5cdGNvbG9yOiAjMDBGRjlCO1xyXG59XHJcblxyXG4ubWF4LXRleHQsXHJcbi5taW4tdGV4dCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF4LXRlbXBlcmF0dXJlLXRleHQsXHJcbi5taW4tdGVtcGVyYXR1cmUtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"weather-card\" (click)=\"openDetails()\" [ngClass]=\"{'weather-card-dark': darkMode}\">\r\n    <!-- Tên thành phố -->\r\n    <span class=\"city-name-text\">{{ cityName }}</span>\r\n    <!-- Hình ảnh mô tả cho các trạng thái thời tiết -->\r\n    <div class=\"weather-icon-container\" [ngSwitch]=\"true\">\r\n        <svg *ngSwitchCase=\"state === 'Sunny' || state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" transform=\"translate(2050 -845)\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Clouds'\" viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g transform=\"translate(84 790)\">\r\n                <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" transform=\"translate(2354 -1633)\" />\r\n                <path fill=\"#ffde17\" d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\" />\r\n            </g>\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Rain' || state === 'Drizzle' || state === 'Mist'\"\r\n            viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" />\r\n            <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Haze' || state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n            <path fill=\"#12bcff\" d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Storm' || state === 'Thunderstorm'\" viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g transform=\"translate(1959 -1260.7)\">\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1529 490.4)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 467.8)\" />\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" transform=\"translate(1618.9 476.8)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1631.8 450)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1687.1 477.5)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1709.6 507.3)\" />\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" transform=\"translate(1639.6 500.1)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 507.3)\" />\r\n                <path stroke=\"#fd0\" stroke-width=\"18\" d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" />\r\n                <path stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\" />\r\n            </g>\r\n        </svg>\r\n    </div>\r\n    <!-- Hiển thị nhiệt độ và trạng thái thời tiết hiện tại -->\r\n    <div>\r\n        <span class=\"temperature-metric-text\">{{ temp }}°</span>\r\n        <span class=\"weather-condition-text\">{{ state }}</span>\r\n    </div>\r\n    <!-- Nhiệt độ thấp nhất và cao nhất theo dự báo -->\r\n    <section class=\"min-max-container\">\r\n        <div class=\"min-container\">\r\n            <svg class=\"min-arrow-icon\" viewBox=\"188.5 807 21 21\">\r\n                <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" />\r\n            </svg>\r\n\r\n            <span class=\"min-temperature-text\">{{ minTemp }}</span>\r\n            <span class=\"min-text\">Min</span>\r\n        </div>\r\n        <div class=\"max-container\">\r\n            <svg class=\"max-arrow-icon\" viewBox=\"449.5 820 21 21\">\r\n                <path fill=\"#FF0070\" d=\"M449.5 830.5h21L460 820z\" />\r\n            </svg>\r\n            <span class=\"max-temperature-text\">{{ maxTemp }}</span>\r\n            <span class=\"max-text\">Max</span>\r\n        </div>\r\n    </section>\r\n</section>\r\n\r\n<app-error [message]=\"errorMessage\"></app-error>"

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

module.exports = ".details-page-wrapper {\r\n  background: linear-gradient(to top, #86DBFF 0%, #e0c3fc 100%);\r\n  /* hiển thị theo flex */\r\n  display: flex;\r\n  /* nội dung ở trong được canh giữa theo phương ngang,\r\n  chỉ khi flex theo mặc định (theo phương ngang) */\r\n  justify-content: center;\r\n  /* nội dung ở trong được canh giữa theo phương dọc,\r\n  chỉ khi flex theo mặc định (theo phương ngang) */\r\n  align-items: center;\r\n  /* những phần trong xác định vị trí theo vị trí tương đối */\r\n  position: relative;\r\n  /* đệm trên và dưới */\r\n  padding: 2rem 0;\r\n}\r\n\r\n.details-page-wrapper-dark {\r\n  background: linear-gradient(#495CFC, #FC7DB8);\r\n}\r\n\r\n/* hình tròn làm nền phía sau */\r\n\r\n.background-gradient-circle {\r\n  /* lấy theo tọa độ của class cha: .details-page-wrapper\r\n  class cha phải đặt position: relative; */\r\n  position: absolute;\r\n  /* khoảng cách với cạnh trên (% or px), phải có position */\r\n  top: 50%;\r\n  z-index: 0;\r\n  /* chiều cao chiếm hết màn hình,\r\n  chỉ đặt % khi position cha là relative và con là absolute */\r\n  height: 100%;\r\n  /* bề rộng chiếm hết màn hình,\r\n  đặt % được không phụ thuộc position */\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  background: #FC7DB8;\r\n  /* chuyển đổi màu nền của hình tròn nền trong 4s */\r\n  /* mất 4s để có được màu nền này */\r\n  transition: background 4s ease;\r\n  /* sử dụng hoạt ảnh định nghĩa trong biến scaleup-circle */\r\n  -webkit-animation: scaleup-circle 0.5s ease-in-out forwards;\r\n          animation: scaleup-circle 0.5s ease-in-out forwards;\r\n}\r\n\r\n.background-gradient-circle-dark {\r\n  background: #6676FF;\r\n}\r\n\r\n@-webkit-keyframes scaleup-circle {\r\n  0% {\r\n    transform-origin: top;\r\n    transform: scale(0) translateY(-50%) rotate(0);\r\n  }\r\n  \r\n  100% {\r\n    transform-origin: center;\r\n    transform: scale(1) translateY(-50%) rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes scaleup-circle {\r\n  0% {\r\n    transform-origin: top;\r\n    transform: scale(0) translateY(-50%) rotate(0);\r\n  }\r\n  \r\n  100% {\r\n    transform-origin: center;\r\n    transform: scale(1) translateY(-50%) rotate(360deg);\r\n  }\r\n}\r\n\r\n/* nút BACK */\r\n\r\n.back-button {\r\n  position: absolute;\r\n  /* khoảng cách với cạnh trên,\r\n  nếu không đặt thì lấy theo định nghĩa trong .details-page-wrapper */\r\n  top: 3rem;\r\n  /* khoảng cách với cạnh trái,\r\n  nếu không đặt thì lấy theo định nghĩa trong .details-page-wrapper */\r\n  left: 3.25rem;\r\n  width: 5rem;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  /* lề trên */\r\n  margin-top: 3rem;\r\n}\r\n\r\n/* vùng ghi thông tin thời tiết */\r\n\r\n.main-weather-card {\r\n  position: relative;\r\n  /* màu nền */\r\n  background-color: white;\r\n  /* đặt % chiều ngang không phụ thuộc position,\r\n  chiều cao sẽ do các thành phần bên trong chiếm, không cần đặt */\r\n  width: 75%;\r\n  border-radius: 1rem;\r\n  z-index: 1;\r\n  -webkit-animation: 1s ease-out .3s scaleup, 1.25s ease-out .3s forwards fadein;\r\n          animation: 1s ease-out .3s scaleup, 1.25s ease-out .3s forwards fadein;\r\n}\r\n\r\n@-webkit-keyframes scaleup {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  \r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes scaleup {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  \r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* hình ảnh đại diện thành phố */\r\n\r\n.city-illustration {\r\n  /* chiếm hết bề ngang của class cha */\r\n  width: 100%;\r\n  /* chiều cao luôn là 420px không phụ thuộc vào chiều rộng màn hình */\r\n  height: 420px;\r\n  border-radius: 1rem 1rem 0 0;\r\n  /* chiếm hết diện tích, không có lề trên và dưới */\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n/* vùng ghi thông tin thời tiết hiện tại và tên thành phố đó */\r\n\r\n.header-content-wrapper {\r\n  /* lấy tọa độ dựa vào tọa độ của class cha gần nhất */\r\n  position: absolute;\r\n  z-index: 1;\r\n  color: rgb(255, 255, 255);\r\n  top: 1rem;\r\n  display: grid;\r\n  /* chia làm 2 cột, mỗi cột rộng 1fr */\r\n  grid-template-columns: repeat(2, 1fr);\r\n  /* lưới chiếm 100% chiều rộng */\r\n  width: 100%;\r\n}\r\n\r\n/* vùng ghi nhiệt độ, trạng thái thời tiết, độ ẩm, gió hiện tại */\r\n\r\n.today-weather-container {\r\n  display: grid;\r\n  /* nội dung của nó nằm chính giữa theo phương ngang */\r\n  justify-items: center;\r\n  /* khoảng cách với phần lưới trên */\r\n  grid-gap: 2rem;\r\n}\r\n\r\n/* vùng ghi nhiệt độ và trạng thái thời tiết */\r\n\r\n.temp-state-container {\r\n  display: flex;\r\n  /* sắp xếp các mục theo chiều dọc */\r\n  flex-direction: column;\r\n  /* canh giữa các phần tử ở trong */\r\n  /* align-items: center; */\r\n}\r\n\r\n.temperature-text {\r\n  font-size: 6rem;\r\n  letter-spacing: 0.75rem;\r\n}\r\n\r\n.weather-state-text {\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.15rem;\r\n  text-transform: uppercase;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n/* vùng ghi độ ẩm và gió hiện tại */\r\n\r\n.hum-wind-container {\r\n  /* flex mặc định theo chiều ngang */\r\n  display: flex;\r\n  /* canh giữa theo phương dọc */\r\n  align-items: center;\r\n}\r\n\r\n.hum-container, .wind-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.hum-text, .wind-text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  font-size: 0.8rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.hum-wind-separator {\r\n  margin: 0 2rem;\r\n  width: 2px;\r\n  height: 2.5rem;\r\n  background-color: white;\r\n}\r\n\r\n/* vùng ghi thành phố */\r\n\r\n.city-name-container {\r\n  display: flex;\r\n  /* canh giữa theo phương ngang */\r\n  justify-content: center;\r\n  /* canh giữa theo phương dọc */\r\n  align-items: center;\r\n  padding-bottom: 20%;\r\n}\r\n\r\n.city-name-underline {\r\n  border-radius: 5px;\r\n  height: 5px;\r\n  box-shadow: 0 3rem 0 0 #ffffff;\r\n}\r\n\r\n.city-name-text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.3rem;\r\n  font-size: 1.75rem;\r\n}\r\n\r\n/*\r\n================\r\n     BODY\r\n================\r\n*/\r\n\r\n.body-content-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1.5fr;\r\n  /* khoảng cách giữa 2 cột */\r\n  grid-gap: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n/* phần twitter */\r\n\r\n.twitter-feed-container {\r\n  margin-top: 1rem;\r\n  /* width: 100%; */\r\n}\r\n\r\n.twitter-feed-body {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-flow: column;\r\n}\r\n\r\n.twitter-loader {\r\n  border: 3px solid hsla(185, 100%, 62%, 0.2);\r\n  border-top-color: #3cefff;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  -webkit-animation: spin 1s linear infinite;\r\n          animation: spin 1s linear infinite;\r\n  justify-self: center;\r\n  align-self: center;\r\n  margin-top: 3rem;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.twitter-no-tweets-text {\r\n  margin-top: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.twitter-feed-text {\r\n  color: #0c1066;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.twitter-icon {\r\n  width: 1.5rem;\r\n}\r\n\r\n.twitter-feed-tag-text {\r\n  font-size: 0.85rem;\r\n  color: #5f84fb;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.twitter-feed-header {\r\n  display: grid;\r\n  grid-template-rows: 2rem;\r\n  grid-template-columns: 0.5fr 1.5fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-tweet-container {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.tweet-user-wrapper {\r\n  display: flex;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tweet-avatar-image {\r\n  margin-right: 0.5rem;\r\n  border-radius: 50%;\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\n.tweet-username-text {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n.tweet-text {\r\n  margin-top: 0\r\n}\r\n\r\n/* forecast-container */\r\n\r\n.forecast-container {\r\n  /* hiển thị dạng flex (hàng ngang) */\r\n  display: flex;\r\n  justify-content: center;\r\n  /* tự động xuống hàng nếu chiếm hết bề ngang */\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.day-weather-container {\r\n  display: flex;\r\n  /* hiển thị theo cột (hàng dọc) */\r\n  flex-flow: column;\r\n  margin: 2rem 1.5rem;\r\n  /* canh giữa các phần tử ở trong */\r\n  align-items: center;\r\n}\r\n\r\n.day-name-text {\r\n  font-size: 1.5rem;\r\n  color: #39437a;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.forecast-condition-icon {\r\n  height: 4rem;\r\n}\r\n\r\n.day-temp-text {\r\n  font-size: 1.85rem;\r\n  color: #0c1066;\r\n  letter-spacing: 0.25rem;\r\n  margin: 0.75rem 0;\r\n  padding-left: 0.35rem;\r\n}\r\n\r\n.day-state-text {\r\n  font-size: 0.65rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  color: #2B244D;\r\n}\r\n\r\n/* khi chiều rộng màn hình <= 1279px */\r\n\r\n@media screen and (max-width: 1279px) {\r\n  \r\n  .back-button {\r\n    /* khoảng cách với cạnh trên */\r\n    top: 2rem;\r\n    /* lề trên */\r\n    margin-top: 2rem;\r\n  }\r\n  \r\n  .main-weather-card {\r\n    /* chiều ngang chiếm 80% */\r\n    width: 80%;\r\n  }\r\n  \r\n  .body-content-wrapper {\r\n    /* hiển thị theo cột */\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* khi chiều rộng màn hình <= 959px */\r\n\r\n@media screen and (max-width: 959px) {\r\n\r\n  .details-page-wrapper {\r\n    /* sắp xếp hiển thị theo chiều dọc */\r\n    flex-flow: column;\r\n    /* canh giữa theo phương ngang\r\n      (chỉ khi hiển thị theo chiều dọc) */\r\n    align-items: center;\r\n    /* nội dung ở trong được canh giữa theo phương dọc,\r\n      (chỉ khi hiển thị theo chiều dọc) */\r\n    justify-content: center;\r\n    padding-bottom: 25%;\r\n  }\r\n\r\n  .back-button {\r\n    /* khi ở kích thước màn hình này thì button không dùng position */\r\n    position: static;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .header-content-wrapper {\r\n    /* hiển thị theo chiều dọc */\r\n    grid-template-columns: 1fr;\r\n    /* chiều cao của 2 hàng */\r\n    grid-template-rows: 2fr 1fr;\r\n    grid-gap: 2rem;\r\n  }\r\n\r\n  .city-name-container {\r\n    /* đệm dưới bằng 0 */\r\n    padding-bottom: 0;\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBNkQ7RUFDN0QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYjtrREFDZ0Q7RUFDaEQsdUJBQXVCO0VBQ3ZCO2tEQUNnRDtFQUNoRCxtQkFBbUI7RUFDbkIsMkRBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0U7MENBQ3dDO0VBQ3hDLGtCQUFrQjtFQUNsQiwwREFBMEQ7RUFDMUQsUUFBUTtFQUNSLFVBQVU7RUFDVjs2REFDMkQ7RUFDM0QsWUFBWTtFQUNaO3VDQUNxQztFQUNyQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QiwwREFBMEQ7RUFDMUQsMkRBQW1EO1VBQW5ELG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtREFBbUQ7RUFDckQ7QUFDRjs7QUFWQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtREFBbUQ7RUFDckQ7QUFDRjs7QUFFQSxhQUFhOztBQUNiO0VBQ0Usa0JBQWtCO0VBQ2xCO3FFQUNtRTtFQUNuRSxTQUFTO0VBQ1Q7cUVBQ21FO0VBQ25FLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QjtpRUFDK0Q7RUFDL0QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsOEVBQXNFO1VBQXRFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsZ0NBQWdDOztBQUNoQztFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsb0VBQW9FO0VBQ3BFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsa0RBQWtEO0VBQ2xELG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUEsOERBQThEOztBQUM5RDtFQUNFLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQSxpRUFBaUU7O0FBQ2pFO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUEsOENBQThDOztBQUM5QztFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBLHNDQUFzQzs7QUFDdEM7O0VBRUU7SUFDRSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBLHFDQUFxQzs7QUFDckM7O0VBRUU7SUFDRSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCO3lDQUNxQztJQUNyQyxtQkFBbUI7SUFDbkI7eUNBQ3FDO0lBQ3JDLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpRUFBaUU7SUFDakUsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtcGFnZS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjODZEQkZGIDAlLCAjZTBjM2ZjIDEwMCUpO1xyXG4gIC8qIGhp4buDbiB0aOG7iyB0aGVvIGZsZXggKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIG7hu5lpIGR1bmcg4bufIHRyb25nIMSRxrDhu6NjIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcsXHJcbiAgY2jhu4kga2hpIGZsZXggdGhlbyBt4bq3YyDEkeG7i25oICh0aGVvIHBoxrDGoW5nIG5nYW5nKSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIG7hu5lpIGR1bmcg4bufIHRyb25nIMSRxrDhu6NjIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgZOG7jWMsXHJcbiAgY2jhu4kga2hpIGZsZXggdGhlbyBt4bq3YyDEkeG7i25oICh0aGVvIHBoxrDGoW5nIG5nYW5nKSAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogbmjhu69uZyBwaOG6p24gdHJvbmcgeMOhYyDEkeG7i25oIHbhu4sgdHLDrSB0aGVvIHbhu4sgdHLDrSB0xrDGoW5nIMSR4buRaSAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiDEkeG7h20gdHLDqm4gdsOgIGTGsOG7m2kgKi9cclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXBhZ2Utd3JhcHBlci1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQ5NUNGQywgI0ZDN0RCOCk7XHJcbn1cclxuXHJcbi8qIGjDrG5oIHRyw7JuIGzDoG0gbuG7gW4gcGjDrWEgc2F1ICovXHJcbi5iYWNrZ3JvdW5kLWdyYWRpZW50LWNpcmNsZSB7XHJcbiAgLyogbOG6pXkgdGhlbyB04buNYSDEkeG7mSBj4bunYSBjbGFzcyBjaGE6IC5kZXRhaWxzLXBhZ2Utd3JhcHBlclxyXG4gIGNsYXNzIGNoYSBwaOG6o2kgxJHhurd0IHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyoga2hv4bqjbmcgY8OhY2ggduG7m2kgY+G6oW5oIHRyw6puICglIG9yIHB4KSwgcGjhuqNpIGPDsyBwb3NpdGlvbiAqL1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgLyogY2hp4buBdSBjYW8gY2hp4bq/bSBo4bq/dCBtw6BuIGjDrG5oLFxyXG4gIGNo4buJIMSR4bq3dCAlIGtoaSBwb3NpdGlvbiBjaGEgbMOgIHJlbGF0aXZlIHbDoCBjb24gbMOgIGFic29sdXRlICovXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIGLhu4EgcuG7mW5nIGNoaeG6v20gaOG6v3QgbcOgbiBow6xuaCxcclxuICDEkeG6t3QgJSDEkcaw4bujYyBraMO0bmcgcGjhu6UgdGh14buZYyBwb3NpdGlvbiAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkM3REI4O1xyXG4gIC8qIGNodXnhu4NuIMSR4buVaSBtw6B1IG7hu4FuIGPhu6dhIGjDrG5oIHRyw7JuIG7hu4FuIHRyb25nIDRzICovXHJcbiAgLyogbeG6pXQgNHMgxJHhu4MgY8OzIMSRxrDhu6NjIG3DoHUgbuG7gW4gbsOgeSAqL1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNHMgZWFzZTtcclxuICAvKiBz4butIGThu6VuZyBob+G6oXQg4bqjbmggxJHhu4tuaCBuZ2jEqWEgdHJvbmcgYmnhur9uIHNjYWxldXAtY2lyY2xlICovXHJcbiAgYW5pbWF0aW9uOiBzY2FsZXVwLWNpcmNsZSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1ncmFkaWVudC1jaXJjbGUtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzY2NzZGRjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZXVwLWNpcmNsZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBuw7p0IEJBQ0sgKi9cclxuLmJhY2stYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyoga2hv4bqjbmcgY8OhY2ggduG7m2kgY+G6oW5oIHRyw6puLFxyXG4gIG7hur91IGtow7RuZyDEkeG6t3QgdGjDrCBs4bqleSB0aGVvIMSR4buLbmggbmdoxKlhIHRyb25nIC5kZXRhaWxzLXBhZ2Utd3JhcHBlciAqL1xyXG4gIHRvcDogM3JlbTtcclxuICAvKiBraG/huqNuZyBjw6FjaCB24bubaSBj4bqhbmggdHLDoWksXHJcbiAgbuG6v3Uga2jDtG5nIMSR4bq3dCB0aMOsIGzhuqV5IHRoZW8gxJHhu4tuaCBuZ2jEqWEgdHJvbmcgLmRldGFpbHMtcGFnZS13cmFwcGVyICovXHJcbiAgbGVmdDogMy4yNXJlbTtcclxuICB3aWR0aDogNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxuICAvKiBs4buBIHRyw6puICovXHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLyogdsO5bmcgZ2hpIHRow7RuZyB0aW4gdGjhu51pIHRp4bq/dCAqL1xyXG4ubWFpbi13ZWF0aGVyLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBtw6B1IG7hu4FuICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLyogxJHhurd0ICUgY2hp4buBdSBuZ2FuZyBraMO0bmcgcGjhu6UgdGh14buZYyBwb3NpdGlvbixcclxuICBjaGnhu4F1IGNhbyBz4bq9IGRvIGPDoWMgdGjDoG5oIHBo4bqnbiBiw6puIHRyb25nIGNoaeG6v20sIGtow7RuZyBj4bqnbiDEkeG6t3QgKi9cclxuICB3aWR0aDogNzUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgei1pbmRleDogMTtcclxuICBhbmltYXRpb246IDFzIGVhc2Utb3V0IC4zcyBzY2FsZXVwLCAxLjI1cyBlYXNlLW91dCAuM3MgZm9yd2FyZHMgZmFkZWluO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxldXAge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBow6xuaCDhuqNuaCDEkeG6oWkgZGnhu4duIHRow6BuaCBwaOG7kSAqL1xyXG4uY2l0eS1pbGx1c3RyYXRpb24ge1xyXG4gIC8qIGNoaeG6v20gaOG6v3QgYuG7gSBuZ2FuZyBj4bunYSBjbGFzcyBjaGEgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBjaGnhu4F1IGNhbyBsdcO0biBsw6AgNDIwcHgga2jDtG5nIHBo4bulIHRodeG7mWMgdsOgbyBjaGnhu4F1IHLhu5luZyBtw6BuIGjDrG5oICovXHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xyXG4gIC8qIGNoaeG6v20gaOG6v3QgZGnhu4duIHTDrWNoLCBraMO0bmcgY8OzIGzhu4EgdHLDqm4gdsOgIGTGsOG7m2kgKi9cclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogdsO5bmcgZ2hpIHRow7RuZyB0aW4gdGjhu51pIHRp4bq/dCBoaeG7h24gdOG6oWkgdsOgIHTDqm4gdGjDoG5oIHBo4buRIMSRw7MgKi9cclxuLmhlYWRlci1jb250ZW50LXdyYXBwZXIge1xyXG4gIC8qIGzhuqV5IHThu41hIMSR4buZIGThu7FhIHbDoG8gdOG7jWEgxJHhu5kgY+G7p2EgY2xhc3MgY2hhIGfhuqduIG5o4bqldCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyogY2hpYSBsw6BtIDIgY+G7mXQsIG3hu5dpIGPhu5l0IHLhu5luZyAxZnIgKi9cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIC8qIGzGsOG7m2kgY2hp4bq/bSAxMDAlIGNoaeG7gXUgcuG7mW5nICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHbDuW5nIGdoaSBuaGnhu4d0IMSR4buZLCB0cuG6oW5nIHRow6FpIHRo4budaSB0aeG6v3QsIMSR4buZIOG6qW0sIGdpw7MgaGnhu4duIHThuqFpICovXHJcbi50b2RheS13ZWF0aGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBu4buZaSBkdW5nIGPhu6dhIG7DsyBu4bqxbSBjaMOtbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyoga2hv4bqjbmcgY8OhY2ggduG7m2kgcGjhuqduIGzGsOG7m2kgdHLDqm4gKi9cclxuICBncmlkLWdhcDogMnJlbTtcclxufVxyXG5cclxuLyogdsO5bmcgZ2hpIG5oaeG7h3QgxJHhu5kgdsOgIHRy4bqhbmcgdGjDoWkgdGjhu51pIHRp4bq/dCAqL1xyXG4udGVtcC1zdGF0ZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogc+G6r3AgeOG6v3AgY8OhYyBt4bulYyB0aGVvIGNoaeG7gXUgZOG7jWMgKi9cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIGNhbmggZ2nhu69hIGPDoWMgcGjhuqduIHThu60g4bufIHRyb25nICovXHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLnRlbXBlcmF0dXJlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcclxufVxyXG5cclxuLndlYXRoZXItc3RhdGUtdGV4dCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiB2w7luZyBnaGkgxJHhu5kg4bqpbSB2w6AgZ2nDsyBoaeG7h24gdOG6oWkgKi9cclxuLmh1bS13aW5kLWNvbnRhaW5lciB7XHJcbiAgLyogZmxleCBt4bq3YyDEkeG7i25oIHRoZW8gY2hp4buBdSBuZ2FuZyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5odW0tY29udGFpbmVyLCAud2luZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaHVtLXRleHQsIC53aW5kLXRleHQge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaHVtLXdpbmQtc2VwYXJhdG9yIHtcclxuICBtYXJnaW46IDAgMnJlbTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiB2w7luZyBnaGkgdGjDoG5oIHBo4buRICovXHJcbi5jaXR5LW5hbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lLXVuZGVybGluZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3JlbSAwIDAgI2ZmZmZmZjtcclxufVxyXG5cclxuLmNpdHktbmFtZS10ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09XHJcbiAgICAgQk9EWVxyXG49PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG4uYm9keS1jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XHJcbiAgLyoga2hv4bqjbmcgY8OhY2ggZ2nhu69hIDIgY+G7mXQgKi9cclxuICBncmlkLWdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4vKiBwaOG6p24gdHdpdHRlciAqL1xyXG4udHdpdHRlci1mZWVkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLnR3aXR0ZXItbG9hZGVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDE4NSwgMTAwJSwgNjIlLCAwLjIpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMzY2VmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50d2l0dGVyLW5vLXR3ZWV0cy10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZC10ZXh0IHtcclxuICBjb2xvcjogIzBjMTA2NjtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWljb24ge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtdGFnLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogIzVmODRmYjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50d2l0dGVyLXR3ZWV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnR3ZWV0LXVzZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi50d2VldC1hdmF0YXItaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50d2VldC11c2VybmFtZS10ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR3ZWV0LXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDBcclxufVxyXG5cclxuLyogZm9yZWNhc3QtY29udGFpbmVyICovXHJcbi5mb3JlY2FzdC1jb250YWluZXIge1xyXG4gIC8qIGhp4buDbiB0aOG7iyBk4bqhbmcgZmxleCAoaMOgbmcgbmdhbmcpICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiB04buxIMSR4buZbmcgeHXhu5FuZyBow6BuZyBu4bq/dSBjaGnhur9tIGjhur90IGLhu4EgbmdhbmcgKi9cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kYXktd2VhdGhlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogaGnhu4NuIHRo4buLIHRoZW8gY+G7mXQgKGjDoG5nIGThu41jKSAqL1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG1hcmdpbjogMnJlbSAxLjVyZW07XHJcbiAgLyogY2FuaCBnaeG7r2EgY8OhYyBwaOG6p24gdOG7rSDhu58gdHJvbmcgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGF5LW5hbWUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMzOTQzN2E7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1jb25kaXRpb24taWNvbiB7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4uZGF5LXRlbXAtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjg1cmVtO1xyXG4gIGNvbG9yOiAjMGMxMDY2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gIHBhZGRpbmctbGVmdDogMC4zNXJlbTtcclxufVxyXG5cclxuLmRheS1zdGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gIGNvbG9yOiAjMkIyNDREO1xyXG59XHJcblxyXG4vKiBraGkgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCA8PSAxMjc5cHggKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgXHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIGPhuqFuaCB0csOqbiAqL1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgLyogbOG7gSB0csOqbiAqL1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4td2VhdGhlci1jYXJkIHtcclxuICAgIC8qIGNoaeG7gXUgbmdhbmcgY2hp4bq/bSA4MCUgKi9cclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5LWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAvKiBoaeG7g24gdGjhu4sgdGhlbyBj4buZdCAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBraGkgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCA8PSA5NTlweCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG5cclxuICAuZGV0YWlscy1wYWdlLXdyYXBwZXIge1xyXG4gICAgLyogc+G6r3AgeOG6v3AgaGnhu4NuIHRo4buLIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAvKiBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nXHJcbiAgICAgIChjaOG7iSBraGkgaGnhu4NuIHRo4buLIHRoZW8gY2hp4buBdSBk4buNYykgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBu4buZaSBkdW5nIOG7nyB0cm9uZyDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jLFxyXG4gICAgICAoY2jhu4kga2hpIGhp4buDbiB0aOG7iyB0aGVvIGNoaeG7gXUgZOG7jWMpICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgLyoga2hpIOG7nyBrw61jaCB0aMaw4bubYyBtw6BuIGjDrG5oIG7DoHkgdGjDrCBidXR0b24ga2jDtG5nIGTDuW5nIHBvc2l0aW9uICovXHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLyogaGnhu4NuIHRo4buLIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAvKiBjaGnhu4F1IGNhbyBj4bunYSAyIGjDoG5nICovXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jaXR5LW5hbWUtY29udGFpbmVyIHtcclxuICAgIC8qIMSR4buHbSBkxrDhu5tpIGLhurFuZyAwICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page-wrapper\" [ngClass]=\"{'details-page-wrapper-dark': darkMode}\">\r\n  <div class=\"background-gradient-circle\" [ngClass]=\"{'background-gradient-circle-dark': darkMode}\"></div>\r\n  <svg class=\"back-button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\">\r\n    <defs>\r\n      <style>\r\n        .a {\r\n          fill: #2b244d;\r\n        }\r\n\r\n        .b {\r\n          stroke: #fff;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .c {\r\n          fill: #fff;\r\n          font-size: 15px;\r\n          font-family: SegoeUI, Segoe UI, sans-serif;\r\n          letter-spacing: 0.4em;\r\n        }\r\n      </style>\r\n    </defs>\r\n    <g transform=\"translate(3980)\">\r\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"></circle>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"80\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 164.5)\" x2=\"26\" y1=\"26\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"26\" y1=\"27\"></line>\r\n      <text class=\"c\" transform=\"translate(117 274)\">\r\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n      </text>\r\n    </g>\r\n  </svg>\r\n  <section class=\"main-weather-card\">\r\n    <section>\r\n      <img class=\"city-illustration\" [src]=\"cityIllustrationPath\" />\r\n      <div class=\"header-content-wrapper\">\r\n        <div class=\"today-weather-container\">\r\n          <div class=\"temp-state-container\">\r\n            <span>{{ today }}</span>\r\n            <span class=\"temperature-text\">{{ temp }}°</span>\r\n            <span class=\"weather-state-text\">{{ state }}</span>\r\n          </div>\r\n          <div class=\"hum-wind-container\">\r\n            <div class=\"hum-container\">\r\n              <span class=\"hum-text\">humidity</span>\r\n              <span>{{ hum }} %</span>\r\n            </div>\r\n            <div class=\"hum-wind-separator\">&nbsp;</div>\r\n            <div class=\"wind-container\">\r\n              <span class=\"wind-text\">wind</span>\r\n              <span>{{ wind }} K/M</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"city-name-container\">\r\n          <div class=\"city-name-underline\">\r\n            <span class=\"city-name-text\">{{ city }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <main class=\"body-content-wrapper\">\r\n      <section class=\"twitter-feed-container\">\r\n        <div class=\"twitter-feed-header\">\r\n          <svg class=\"twitter-icon\" viewBox=\"4332 625.812 30 24.375\">\r\n            <defs>\r\n              <style>\r\n                .twitter-icon-fill {\r\n                  fill: #03a9f4;\r\n                }\r\n              </style>\r\n            </defs>\r\n            <path class=\"twitter-icon-fill\"\r\n              d=\"M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z\"\r\n              transform=\"translate(4332 577.812)\" />\r\n          </svg>\r\n          <span class=\"twitter-feed-text\">Twitter Feed</span>\r\n          <span class=\"twitter-feed-tag-text\">#{{city}}</span>\r\n        </div>\r\n        <div class=\"twitter-feed-body\">\r\n          <ng-container *ngIf=\"tweets$ | async as tweets; else loadingTweets\">\r\n            <p *ngIf=\"tweets && tweets.length === 0\" class=\"twitter-no-tweets-text\">No Tweets Found</p>\r\n            <div class=\"twitter-tweet-container\" *ngFor=\"let tweet of tweets\">\r\n              <div class=\"tweet-user-wrapper\">\r\n                <img [src]=\"tweet.user.photo\" alt=\"avatar\" class=\"tweet-avatar-image\">\r\n                <div>\r\n                  <span class=\"tweet-username-text\">{{tweet.user.name}}</span>\r\n                  <span class=\"tweet-handle-text\">{{tweet.user.handle}}</span>\r\n                </div>\r\n              </div>\r\n              <p class=\"tweet-text\">{{tweet.text}}</p>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-template #loadingTweets>\r\n            <div class=\"twitter-loader\"></div>\r\n          </ng-template>\r\n\r\n        </div>\r\n      </section>\r\n      <section class=\"forecast-container\">\r\n        <div class=\"day-weather-container\" [ngSwitch]=\"true\" *ngFor=\"let day of daysForecast\">\r\n          <span class=\"day-name-text\">{{ day.key }}</span>\r\n          <svg class=\"forecast-condition-icon\" *ngSwitchCase=\"day.value.state === 'Clouds'\"\r\n            viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" transform=\"translate(2354 -1633)\" />\r\n              <path fill=\"#ffde17\"\r\n                d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\" *ngSwitchCase=\"day.value.state === 'Haze' || day.value.state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n            <path fill=\"#12bcff\"\r\n              d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\" />\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Rain' || day.value.state === 'Drizzle'\"\r\n            viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g>\r\n              <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" />\r\n              <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Storm' || day.value.state === 'Thunderstorm'\"\r\n            viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1529 490.4)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 467.8)\" />\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" transform=\"translate(1618.9 476.8)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1631.8 450)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1687.1 477.5)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1709.6 507.3)\" />\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" transform=\"translate(1639.6 500.1)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 507.3)\" />\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" />\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Sunny' || day.value.state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" transform=\"translate(2050 -845)\" />\r\n          </svg>\r\n\r\n          <span class=\"day-temp-text\">{{ day.value.temp }}°</span>\r\n          <span class=\"day-state-text\">{{ day.value.state }}</span>\r\n        </div>\r\n      </section>\r\n    </main>\r\n  </section>\r\n</div>\r\n\r\n<app-error [message]=\"errorMessage\"></app-error>"

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
            // Gọi service để kiểm tra ở chế độ sáng hay tối
            _this.darkMode = isDark;
        });
        var todayNumberInWeek = new Date().getDay();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.today = days[todayNumberInWeek];
        // Dựa vào tên thành phố, lấy hình ảnh đại diện, thời tiết hiện tại và thời tiết dự báo
        this.sub2 = this.activeRouter.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (route) {
            _this.city = route.params.city;
            // lấy hình ảnh đại diện cho thành phố, dựa vào biến city
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
            // dùng phương thức forkJoin đợi để lấy thông tin thời tiết hiện tại và thời tiết dự báo
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(_this.weather.getWeather(_this.city), _this.weather.getForecastObject(_this.city));
        })).subscribe(function (payload) {
            // Các giá trị thời tiết hiện tại
            _this.state = payload[0].weather[0].main;
            _this.temp = Math.ceil(payload[0].main.temp);
            _this.hum = payload[0].main.humidity;
            _this.wind = Math.round(payload[0].wind.speed);
            var dates = {};
            for (var _i = 0, _a = payload[1].list; _i < _a.length; _i++) {
                var res = _a[_i];
                // Lấy thứ mấy trong tuần, vi du: "Web", "Thu"
                var date = new Date(res.dt_txt).toDateString().split(' ')[0];
                // Đưa các thông tin thời tiết dự báo vào mỗi thuộc tính
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
            // console.log(dates) => {Thu: {…}, Fri: {…}, Sat: {…}, Sun: {…}, Mon: {…}, Tue: {…}}
            // console.log(dates["Thu"]) => {state: "Rain", temp: 85.82000000000001, counter: 4}
            // console.log(Object.keys(dates)) => ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"]
            Object.keys(dates).forEach(function (day) {
                // tính nhiệt độ trung bình
                dates[day].temp = Math.round(dates[day].temp / dates[day].counter);
            });
            // xóa thuộc tính ngày hiện tại ra khỏi thông tin thời tiết dự báo
            delete dates[Object.keys(dates)[0]];
            // chuyển đối tượng dates thành mảng với key và value
            _this.daysForecast = Object.entries(dates).map(function (_a) {
                var key = _a[0], value = _a[1];
                return ({ key: key, value: value });
            });
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