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

module.exports = "/*\r\n    Slide Menu\r\n*/\r\n.side-menu-container {\r\n\t/* giữ cố định menu khi kéo chuột lên, xuống\r\n\t\tmenu sẽ nằm nổi trên các phần khác */\r\n\tposition: fixed;\r\n\t/* chiều rộng của menu chiếm 100% bề ngang màn hình */\r\n\twidth: 100%;\r\n\t/* thuộc tính này không phản ứng với hành động kích chuột */\r\n\tpointer-events: none;\r\n\t/* thứ tự ưu tiên hiển thị của menu */\r\n\tz-index: 3;\r\n}\r\n.side-menu-container-active {\r\n\t/* thuộc tính này phản ứng với hành động kích chuột */\r\n\tpointer-events: auto;\r\n}\r\n.slide-menu {\r\n\t/* Dịch chuyển theo phương ngang 100% theo chiều âm, để ẩn menu đi */\r\n\ttransform: translateX(-100%);\r\n\t/* Bề rộng của menu */\r\n\twidth: 27rem;\r\n\t/* Màu nền khi ở chế độ sáng */\r\n\tbackground-color: rgb(159, 217, 228);\r\n\t/* Hiển thị theo dạng lưới */\r\n\tdisplay: grid;\r\n\t/* tỉ lệ bề rộng theo mỗi dòng, tùy theo số dòng bên trong */\r\n\tgrid-template-rows: 2fr 4fr 1fr;\r\n}\r\n.slide-menu-active {\r\n\t/* Khi đang active thì không ẩn menu */\r\n\ttransform: none;\r\n}\r\n.slide-menu-active-dark {\r\n\t/* Màu nền khi ở chế độ tối */\r\n\tbackground-color: #2B244D;\r\n}\r\n/* \r\n\tmenu header\r\n*/\r\n.menu-header {\r\n\t/* màu nền của menu header, thay đổi theo hướng từ trái sang phải */\r\n\tbackground: linear-gradient(to right, #00FF9B, #5f84fb);\r\n\t/* hiển thị theo dạng lưới */\r\n\tdisplay: grid;\r\n\t/* tỉ lệ bề rộng theo mỗi hàng, có 3 hàng */\r\n\tgrid-template-rows: 1fr 4fr 1fr;\r\n\t/* sắp xếp bố cục theo lưới, chia làm 2 cột, lấy theo tên khai báo trong .greeting-text */\r\n\t/* class greeting chiếm 2 cột */\r\n\tgrid-template-areas: \"greeting greeting\";\r\n\t/* chữ luôn màu trắng dù ở chế độ sáng hay tối */\r\n\tcolor: white;\r\n}\r\n.menu-header-dark {\r\n\t/* màu nền của menu header khi ở chế độ tối, thay đổi theo hướng từ dưới lên trên */\r\n\tbackground: linear-gradient(to top, #30cfd0, #330867);\r\n}\r\n.greeting-text {\r\n\t/* đặt tên cho class này, để sử dụng trong class cha:\r\n\t.menu-header (trong thuộc tính: grid-template-areas) */\r\n\tgrid-area: greeting;\r\n\tfont-size: 1.25rem;\r\n\tletter-spacing: 0.15rem;\r\n\ttext-transform: uppercase;\r\n\tmargin-top: 1rem;\r\n\t/* định dạng theo nằm ngang thì nằm chính giữa */\r\n\t/* canh giữa chính nó trong class cha */\r\n\tjustify-self: center;\r\n}\r\n.profile-image-container {\r\n\t/* sắp xếp theo chiều dọc thì nằm giữa */\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n\t/* Khoảng cách với lề trái */\r\n\tmargin-left: 2rem;\r\n}\r\n.profile-image {\r\n\t/* chiều rộng của ảnh đại diện */\r\n\twidth: 4rem;\r\n}\r\n.account-details {\r\n\tdisplay: flex;\r\n\t/* sắp xếp các mục theo chiều dọc */\r\n\tflex-direction: column;\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n}\r\n.name-text {\r\n\tfont-size: 1.15rem;\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n.email-text {\r\n\tfont-size: 0.9rem;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n/* \r\nmenu links\r\n*/\r\n.links-container {\r\n\t/* nằm phía trên theo phương dọc so với class cha, đây là mặc định */\r\n\talign-self: start;\r\n}\r\n.menu-links {\r\n\t/* sắp xếp các mục theo chiều dọc */\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* không cho hiển thị dấu chấm trước danh sách */\r\n\tlist-style: none;\r\n}\r\n.menu-links-dark {\r\n\t/* màu chữ khi ở chế độ tối, khi ở chế độ sáng thì màu chữ lấy theo mặc định là màu đen */\r\n\tcolor: white;\r\n}\r\n.link-active {\r\n\t/* link nào active thì tô màu khác và gạch chân */\r\n\tcolor: #495CFC;\r\n\tborder-bottom: 1px solid #495CFC;\r\n}\r\n.menu-link {\r\n\t/* đệm và lề cho các mục trong danh sách */\r\n\tpadding: 1rem 0;\r\n\tmargin: 0.5rem 0;\r\n\tcursor: pointer;\r\n}\r\n.copyright-container {\r\n\t/* được canh giữa theo phương dọc so với class cha */\r\n\talign-self: center;\r\n}\r\n.copyright-text {\r\n\tdisplay: block;\r\n\t/* nằm giữa theo phương ngang */\r\n\ttext-align: center;\r\n\tcolor: white;\r\n}\r\n/* \r\n\tMain\r\n*/\r\n/* style cho nội dung chính ở chế độ tối */\r\n.root-container-dark {\r\n\t/* áp dụng ở chế độ tối: Thay đổi màu nền theo hướng từ dưới lên trên */\r\n\tbackground-image: linear-gradient(to top, #5ee7df, #372865);\r\n}\r\n/* Style cho phần header */\r\n.main-header {\r\n\t/* các mục con hiển thị chính giữa theo phương dọc */\r\n\talign-items: center;\r\n\tdisplay: grid;\r\n\t/* chia bề rộng thành cột, có 3 cột */\r\n\tgrid-template-columns: 1fr 1fr 0.5fr;\r\n\tbackground-color: rgb(169, 205, 226);\r\n\theight: 4rem;\r\n\tjustify-items: center;\r\n}\r\n/* Style cho header khi ở chế độ tối */\r\n.main-header-dark {\r\n\tbackground-color: #2B244D;\r\n\tcolor: white;\r\n}\r\n/*\r\n left section\r\n */\r\n.left-section {\r\n\tdisplay: grid;\r\n\t/* phần bên trái được chia làm 2 cột */\r\n\tgrid-template-columns: 1fr 7fr;\r\n\t/* không cần đặt bề ngang của phần bên trái,\r\n\tsẽ tự động lấy bằng định nghĩa trong .main-header */\r\n}\r\n.hamburger-icon {\r\n\tz-index: 3;\r\n\theight: 1rem;\r\n\t/* Phần đệm của icon menu */\r\n\tpadding: 0.5rem 1.5rem;\r\n}\r\n.logo-icon {\r\n\theight: 2rem;\r\n\twidth: 45%;\r\n}\r\n.logo-text {\r\n\tfill: rgb(160, 14, 75);\r\n\ttransform : translate(210px, 56px);\r\n}\r\n.logo-text-dark {\r\n\tfill: #fff;\r\n}\r\n/* Style cho chữ */\r\n.date-text {\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin: 0.5rem 0;\r\n}\r\n/* Style cho chữ của điều khiển LIGHT và DARK */\r\n.mode-toggle-text {\r\n\tfont-size: 0.75rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n/* Style cho khung chứa thanh và nút */\r\n.toggle-button-container {\r\n\t/* hiển thị bàn tay khi đưa con trỏ vào */\r\n\tcursor: pointer;\r\n\t/* đặt position: relative để những thành phần con lấy tọa độ theo tọa độ của cha */\r\n\tposition: relative;\r\n\tmargin: 0 0.75rem 0 0.25rem;\r\n}\r\n/* Style cho thanh trượt */\r\n.mode-toggle-bg {\r\n\theight: 1rem;\r\n\twidth: 3rem;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: rgba(94, 68, 68, 0.5);\r\n\tdisplay: inline-block;\r\n}\r\n/* Style cho thanh trượt khi chọn (ở chế độ tối)  */\r\n.mode-toggle-bg-checked {\r\n\tbackground-color: #FF0070;\r\n}\r\n/* Style cho nút trượt */\r\n.mode-toggle-circle {\r\n\theight: 1.30rem;\r\n\twidth: 1.30rem;\r\n\tbackground-color: #2B244D;\r\n\tposition: absolute;\r\n\ttop: -0.25rem;\r\n\tborder-radius: 50%;\r\n\t/* nút trượt di chuyển */\r\n\ttransition: left .3s linear;\r\n\tleft: 0rem;\r\n}\r\n/* Style cho nút trượt khi chọn (ở chế độ tối)  */\r\n.mode-toggle-circle-checked {\r\n\tbackground-color: white;\r\n\tleft: 2rem;\r\n}\r\n/* \r\n\tnếu chiều rộng màn hình tối đa là 959px \r\n\tcó nghĩa là khi chiều rộng màn hình <= 959px\r\n\tthì sử dụng các style này\r\n*/\r\n@media screen and (max-width: 959px) {\r\n\t.main-header {\r\n\t\t/* Hiển thị theo dạng lưới (chỉ có 1 cột) */\r\n\t\tgrid-template-columns: 1fr;\r\n\t\t/* canh giữa các thành phần con theo phương ngang */\r\n\t\tpadding: 1rem 0;\r\n\t\theight: 8rem;\r\n\t}\r\n\t\r\n\t.left-section {\r\n\t\t/* Hiển thị theo dạng lưới (có 2 cột, cột đầu tiên có chiều rộng là 0) */\r\n\t\tgrid-template-columns: 0 1fr;\r\n\t\t/* chiếm 100% chiều ngang */\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.logo-icon {\r\n\t\t/* khoảng cách với lề của icon\r\n\t\tcanh giữa icon */\r\n\t\tmargin: 0 auto;\r\n\t\t/* chiếm 50% chiều ngang, nằm giữa */\r\n\t\twidth: 50%;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtDQUNDO3NDQUNxQztDQUNyQyxlQUFlO0NBQ2YscURBQXFEO0NBQ3JELFdBQVc7Q0FDWCwyREFBMkQ7Q0FDM0Qsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLHFEQUFxRDtDQUNyRCxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLG9FQUFvRTtDQUNwRSw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsb0NBQW9DO0NBQ3BDLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsNERBQTREO0NBQzVELCtCQUErQjtBQUNoQztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLDZCQUE2QjtDQUM3Qix5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQztBQUNEO0NBQ0MsbUVBQW1FO0NBQ25FLHVEQUF1RDtDQUN2RCw0QkFBNEI7Q0FDNUIsYUFBYTtDQUNiLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IseUZBQXlGO0NBQ3pGLCtCQUErQjtDQUMvQix3Q0FBd0M7Q0FDeEMsZ0RBQWdEO0NBQ2hELFlBQVk7QUFDYjtBQUVBO0NBQ0MsbUZBQW1GO0NBQ25GLHFEQUFxRDtBQUN0RDtBQUVBO0NBQ0M7dURBQ3NEO0NBQ3RELG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsZ0RBQWdEO0NBQ2hELHVDQUF1QztDQUN2QyxvQkFBb0I7QUFDckI7QUFFQTtDQUNDLHdDQUF3QztDQUN4QyxvREFBb0Q7Q0FDcEQsa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1QixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyxXQUFXO0FBQ1o7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQ0FBbUM7Q0FDbkMsc0JBQXNCO0NBQ3RCLG9EQUFvRDtDQUNwRCxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFFQTs7Q0FFQztBQUNEO0NBQ0Msb0VBQW9FO0NBQ3BFLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZ0RBQWdEO0NBQ2hELGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MseUZBQXlGO0NBQ3pGLFlBQVk7QUFDYjtBQUVBO0NBQ0MsaURBQWlEO0NBQ2pELGNBQWM7Q0FDZCxnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLG9EQUFvRDtDQUNwRCxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGNBQWM7Q0FDZCwrQkFBK0I7Q0FDL0Isa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjtBQUVBOztDQUVDO0FBRUQsMENBQTBDO0FBQzFDO0NBQ0MsdUVBQXVFO0NBQ3ZFLDJEQUEyRDtBQUM1RDtBQUVBLDBCQUEwQjtBQUMxQjtDQUNDLG9EQUFvRDtDQUNwRCxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxvQ0FBb0M7Q0FDcEMsb0NBQW9DO0NBQ3BDLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7QUFFQSxzQ0FBc0M7QUFDdEM7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiO0FBRUE7O0VBRUU7QUFDRjtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsOEJBQThCO0NBQzlCO29EQUNtRDtBQUNwRDtBQUVBO0NBQ0MsVUFBVTtDQUNWLFlBQVk7Q0FDWiwyQkFBMkI7Q0FDM0Isc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osVUFBVTtBQUNYO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0NBQWtDO0FBQ25DO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFFQSxrQkFBa0I7QUFDbEI7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUVBLCtDQUErQztBQUMvQztDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsc0JBQXNCO0FBQ3ZCO0FBRUEsc0NBQXNDO0FBQ3RDO0NBQ0MseUNBQXlDO0NBQ3pDLGVBQWU7Q0FDZixrRkFBa0Y7Q0FDbEYsa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1QjtBQUVBLDBCQUEwQjtBQUMxQjtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLHVDQUF1QztDQUN2QyxxQkFBcUI7QUFDdEI7QUFFQSxtREFBbUQ7QUFDbkQ7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQSx3QkFBd0I7QUFDeEI7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIsMkJBQTJCO0NBQzNCLFVBQVU7QUFDWDtBQUVBLGlEQUFpRDtBQUNqRDtDQUNDLHVCQUF1QjtDQUN2QixVQUFVO0FBQ1g7QUFFQTs7OztDQUlDO0FBQ0Q7Q0FDQztFQUNDLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsbURBQW1EO0VBQ25ELGVBQWU7RUFDZixZQUFZO0NBQ2I7O0NBRUE7RUFDQyx3RUFBd0U7RUFDeEUsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0NBQ1o7O0NBRUE7RUFDQztrQkFDZ0I7RUFDaEIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxVQUFVO0NBQ1g7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIFNsaWRlIE1lbnVcclxuKi9cclxuLnNpZGUtbWVudS1jb250YWluZXIge1xyXG5cdC8qIGdp4buvIGPhu5EgxJHhu4tuaCBtZW51IGtoaSBrw6lvIGNodeG7mXQgbMOqbiwgeHXhu5FuZ1xyXG5cdFx0bWVudSBz4bq9IG7hurFtIG7hu5VpIHRyw6puIGPDoWMgcGjhuqduIGtow6FjICovXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdC8qIGNoaeG7gXUgcuG7mW5nIGPhu6dhIG1lbnUgY2hp4bq/bSAxMDAlIGLhu4EgbmdhbmcgbcOgbiBow6xuaCAqL1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdC8qIHRodeG7mWMgdMOtbmggbsOgeSBraMO0bmcgcGjhuqNuIOG7qW5nIHbhu5tpIGjDoG5oIMSR4buZbmcga8OtY2ggY2h14buZdCAqL1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdC8qIHRo4bupIHThu7EgxrB1IHRpw6puIGhp4buDbiB0aOG7iyBj4bunYSBtZW51ICovXHJcblx0ei1pbmRleDogMztcclxufVxyXG5cclxuLnNpZGUtbWVudS1jb250YWluZXItYWN0aXZlIHtcclxuXHQvKiB0aHXhu5ljIHTDrW5oIG7DoHkgcGjhuqNuIOG7qW5nIHbhu5tpIGjDoG5oIMSR4buZbmcga8OtY2ggY2h14buZdCAqL1xyXG5cdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG4uc2xpZGUtbWVudSB7XHJcblx0LyogROG7i2NoIGNodXnhu4NuIHRoZW8gcGjGsMahbmcgbmdhbmcgMTAwJSB0aGVvIGNoaeG7gXUgw6JtLCDEkeG7gyDhuqluIG1lbnUgxJFpICovXHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHQvKiBC4buBIHLhu5luZyBj4bunYSBtZW51ICovXHJcblx0d2lkdGg6IDI3cmVtO1xyXG5cdC8qIE3DoHUgbuG7gW4ga2hpIOG7nyBjaOG6vyDEkeG7mSBzw6FuZyAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIxNywgMjI4KTtcclxuXHQvKiBIaeG7g24gdGjhu4sgdGhlbyBk4bqhbmcgbMaw4bubaSAqL1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0LyogdOG7iSBs4buHIGLhu4EgcuG7mW5nIHRoZW8gbeG7l2kgZMOybmcsIHTDuXkgdGhlbyBz4buRIGTDsm5nIGLDqm4gdHJvbmcgKi9cclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA0ZnIgMWZyO1xyXG59XHJcblxyXG4uc2xpZGUtbWVudS1hY3RpdmUge1xyXG5cdC8qIEtoaSDEkWFuZyBhY3RpdmUgdGjDrCBraMO0bmcg4bqpbiBtZW51ICovXHJcblx0dHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uc2xpZGUtbWVudS1hY3RpdmUtZGFyayB7XHJcblx0LyogTcOgdSBu4buBbiBraGkg4bufIGNo4bq/IMSR4buZIHThu5FpICovXHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJCMjQ0RDtcclxufVxyXG5cclxuLyogXHJcblx0bWVudSBoZWFkZXJcclxuKi9cclxuLm1lbnUtaGVhZGVyIHtcclxuXHQvKiBtw6B1IG7hu4FuIGPhu6dhIG1lbnUgaGVhZGVyLCB0aGF5IMSR4buVaSB0aGVvIGjGsOG7m25nIHThu6sgdHLDoWkgc2FuZyBwaOG6o2kgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMEZGOUIsICM1Zjg0ZmIpO1xyXG5cdC8qIGhp4buDbiB0aOG7iyB0aGVvIGThuqFuZyBsxrDhu5tpICovXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiB04buJIGzhu4cgYuG7gSBy4buZbmcgdGhlbyBt4buXaSBow6BuZywgY8OzIDMgaMOgbmcgKi9cclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyO1xyXG5cdC8qIHPhuq9wIHjhur9wIGLhu5EgY+G7pWMgdGhlbyBsxrDhu5tpLCBjaGlhIGzDoG0gMiBj4buZdCwgbOG6pXkgdGhlbyB0w6puIGtoYWkgYsOhbyB0cm9uZyAuZ3JlZXRpbmctdGV4dCAqL1xyXG5cdC8qIGNsYXNzIGdyZWV0aW5nIGNoaeG6v20gMiBj4buZdCAqL1xyXG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZ3JlZXRpbmcgZ3JlZXRpbmdcIjtcclxuXHQvKiBjaOG7ryBsdcO0biBtw6B1IHRy4bqvbmcgZMO5IOG7nyBjaOG6vyDEkeG7mSBzw6FuZyBoYXkgdOG7kWkgKi9cclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlci1kYXJrIHtcclxuXHQvKiBtw6B1IG7hu4FuIGPhu6dhIG1lbnUgaGVhZGVyIGtoaSDhu58gY2jhur8gxJHhu5kgdOG7kWksIHRoYXkgxJHhu5VpIHRoZW8gaMaw4bubbmcgdOG7qyBkxrDhu5tpIGzDqm4gdHLDqm4gKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzBjZmQwLCAjMzMwODY3KTtcclxufVxyXG5cclxuLmdyZWV0aW5nLXRleHQge1xyXG5cdC8qIMSR4bq3dCB0w6puIGNobyBjbGFzcyBuw6B5LCDEkeG7gyBz4butIGThu6VuZyB0cm9uZyBjbGFzcyBjaGE6XHJcblx0Lm1lbnUtaGVhZGVyICh0cm9uZyB0aHXhu5ljIHTDrW5oOiBncmlkLXRlbXBsYXRlLWFyZWFzKSAqL1xyXG5cdGdyaWQtYXJlYTogZ3JlZXRpbmc7XHJcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bWFyZ2luLXRvcDogMXJlbTtcclxuXHQvKiDEkeG7i25oIGThuqFuZyB0aGVvIG7hurFtIG5nYW5nIHRow6wgbuG6sW0gY2jDrW5oIGdp4buvYSAqL1xyXG5cdC8qIGNhbmggZ2nhu69hIGNow61uaCBuw7MgdHJvbmcgY2xhc3MgY2hhICovXHJcblx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XHJcblx0Lyogc+G6r3AgeOG6v3AgdGhlbyBjaGnhu4F1IGThu41jIHRow6wgbuG6sW0gZ2nhu69hICovXHJcblx0LyogxJHGsOG7o2MgY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyBzbyB24bubaSBjbGFzcyBjaGEgKi9cclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0LyogS2hv4bqjbmcgY8OhY2ggduG7m2kgbOG7gSB0csOhaSAqL1xyXG5cdG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcblx0LyogY2hp4buBdSBy4buZbmcgY+G7p2Eg4bqjbmggxJHhuqFpIGRp4buHbiAqL1xyXG5cdHdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG4uYWNjb3VudC1kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qIHPhuq9wIHjhur9wIGPDoWMgbeG7pWMgdGhlbyBjaGnhu4F1IGThu41jICovXHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQvKiDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jIHNvIHbhu5tpIGNsYXNzIGNoYSAqL1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hbWUtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAxLjE1cmVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmVtYWlsLXRleHQge1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi8qIFxyXG5tZW51IGxpbmtzXHJcbiovXHJcbi5saW5rcy1jb250YWluZXIge1xyXG5cdC8qIG7hurFtIHBow61hIHRyw6puIHRoZW8gcGjGsMahbmcgZOG7jWMgc28gduG7m2kgY2xhc3MgY2hhLCDEkcOieSBsw6AgbeG6t2MgxJHhu4tuaCAqL1xyXG5cdGFsaWduLXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4ubWVudS1saW5rcyB7XHJcblx0Lyogc+G6r3AgeOG6v3AgY8OhYyBt4bulYyB0aGVvIGNoaeG7gXUgZOG7jWMgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Lyoga2jDtG5nIGNobyBoaeG7g24gdGjhu4sgZOG6pXUgY2jhuqVtIHRyxrDhu5tjIGRhbmggc8OhY2ggKi9cclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubWVudS1saW5rcy1kYXJrIHtcclxuXHQvKiBtw6B1IGNo4buvIGtoaSDhu58gY2jhur8gxJHhu5kgdOG7kWksIGtoaSDhu58gY2jhur8gxJHhu5kgc8OhbmcgdGjDrCBtw6B1IGNo4buvIGzhuqV5IHRoZW8gbeG6t2MgxJHhu4tuaCBsw6AgbcOgdSDEkWVuICovXHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGluay1hY3RpdmUge1xyXG5cdC8qIGxpbmsgbsOgbyBhY3RpdmUgdGjDrCB0w7QgbcOgdSBraMOhYyB2w6AgZ+G6oWNoIGNow6JuICovXHJcblx0Y29sb3I6ICM0OTVDRkM7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OTVDRkM7XHJcbn1cclxuXHJcbi5tZW51LWxpbmsge1xyXG5cdC8qIMSR4buHbSB2w6AgbOG7gSBjaG8gY8OhYyBt4bulYyB0cm9uZyBkYW5oIHPDoWNoICovXHJcblx0cGFkZGluZzogMXJlbSAwO1xyXG5cdG1hcmdpbjogMC41cmVtIDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29weXJpZ2h0LWNvbnRhaW5lciB7XHJcblx0LyogxJHGsOG7o2MgY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyBzbyB24bubaSBjbGFzcyBjaGEgKi9cclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0LyogbuG6sW0gZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBcclxuXHRNYWluXHJcbiovXHJcblxyXG4vKiBzdHlsZSBjaG8gbuG7mWkgZHVuZyBjaMOtbmgg4bufIGNo4bq/IMSR4buZIHThu5FpICovXHJcbi5yb290LWNvbnRhaW5lci1kYXJrIHtcclxuXHQvKiDDoXAgZOG7pW5nIOG7nyBjaOG6vyDEkeG7mSB04buRaTogVGhheSDEkeG7lWkgbcOgdSBu4buBbiB0aGVvIGjGsOG7m25nIHThu6sgZMaw4bubaSBsw6puIHRyw6puICovXHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzVlZTdkZiwgIzM3Mjg2NSk7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBwaOG6p24gaGVhZGVyICovXHJcbi5tYWluLWhlYWRlciB7XHJcblx0LyogY8OhYyBt4bulYyBjb24gaGnhu4NuIHRo4buLIGNow61uaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyAqL1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiBjaGlhIGLhu4EgcuG7mW5nIHRow6BuaCBj4buZdCwgY8OzIDMgY+G7mXQgKi9cclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC41ZnI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjA1LCAyMjYpO1xyXG5cdGhlaWdodDogNHJlbTtcclxuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyBoZWFkZXIga2hpIOG7nyBjaOG6vyDEkeG7mSB04buRaSAqL1xyXG4ubWFpbi1oZWFkZXItZGFyayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJCMjQ0RDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qXHJcbiBsZWZ0IHNlY3Rpb25cclxuICovXHJcbi5sZWZ0LXNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0LyogcGjhuqduIGLDqm4gdHLDoWkgxJHGsOG7o2MgY2hpYSBsw6BtIDIgY+G7mXQgKi9cclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XHJcblx0Lyoga2jDtG5nIGPhuqduIMSR4bq3dCBi4buBIG5nYW5nIGPhu6dhIHBo4bqnbiBiw6puIHRyw6FpLFxyXG5cdHPhur0gdOG7sSDEkeG7mW5nIGzhuqV5IGLhurFuZyDEkeG7i25oIG5naMSpYSB0cm9uZyAubWFpbi1oZWFkZXIgKi9cclxufVxyXG5cclxuLmhhbWJ1cmdlci1pY29uIHtcclxuXHR6LWluZGV4OiAzO1xyXG5cdGhlaWdodDogMXJlbTtcclxuXHQvKiBQaOG6p24gxJHhu4dtIGPhu6dhIGljb24gbWVudSAqL1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG5cdGhlaWdodDogMnJlbTtcclxuXHR3aWR0aDogNDUlO1xyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuXHRmaWxsOiByZ2IoMTYwLCAxNCwgNzUpO1xyXG5cdHRyYW5zZm9ybSA6IHRyYW5zbGF0ZSgyMTBweCwgNTZweCk7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQtZGFyayB7XHJcblx0ZmlsbDogI2ZmZjtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIGNo4buvICovXHJcbi5kYXRlLXRleHQge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuXHRtYXJnaW46IDAuNXJlbSAwO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8gY2jhu68gY+G7p2EgxJFp4buBdSBraGnhu4NuIExJR0hUIHbDoCBEQVJLICovXHJcbi5tb2RlLXRvZ2dsZS10ZXh0IHtcclxuXHRmb250LXNpemU6IDAuNzVyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8ga2h1bmcgY2jhu6lhIHRoYW5oIHbDoCBuw7p0ICovXHJcbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcblx0LyogaGnhu4NuIHRo4buLIGLDoG4gdGF5IGtoaSDEkcawYSBjb24gdHLhu48gdsOgbyAqL1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHQvKiDEkeG6t3QgcG9zaXRpb246IHJlbGF0aXZlIMSR4buDIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBjb24gbOG6pXkgdOG7jWEgxJHhu5kgdGhlbyB04buNYSDEkeG7mSBj4bunYSBjaGEgKi9cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwIDAuNzVyZW0gMCAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBTdHlsZSBjaG8gdGhhbmggdHLGsOG7o3QgKi9cclxuLm1vZGUtdG9nZ2xlLWJnIHtcclxuXHRoZWlnaHQ6IDFyZW07XHJcblx0d2lkdGg6IDNyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDY4LCA2OCwgMC41KTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGNobyB0aGFuaCB0csaw4bujdCBraGkgY2jhu41uICjhu58gY2jhur8gxJHhu5kgdOG7kWkpICAqL1xyXG4ubW9kZS10b2dnbGUtYmctY2hlY2tlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGMDA3MDtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIG7DunQgdHLGsOG7o3QgKi9cclxuLm1vZGUtdG9nZ2xlLWNpcmNsZSB7XHJcblx0aGVpZ2h0OiAxLjMwcmVtO1xyXG5cdHdpZHRoOiAxLjMwcmVtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyQjI0NEQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTAuMjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC8qIG7DunQgdHLGsOG7o3QgZGkgY2h1eeG7g24gKi9cclxuXHR0cmFuc2l0aW9uOiBsZWZ0IC4zcyBsaW5lYXI7XHJcblx0bGVmdDogMHJlbTtcclxufVxyXG5cclxuLyogU3R5bGUgY2hvIG7DunQgdHLGsOG7o3Qga2hpIGNo4buNbiAo4bufIGNo4bq/IMSR4buZIHThu5FpKSAgKi9cclxuLm1vZGUtdG9nZ2xlLWNpcmNsZS1jaGVja2VkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRsZWZ0OiAycmVtO1xyXG59XHJcblxyXG4vKiBcclxuXHRu4bq/dSBjaGnhu4F1IHLhu5luZyBtw6BuIGjDrG5oIHThu5FpIMSRYSBsw6AgOTU5cHggXHJcblx0Y8OzIG5naMSpYSBsw6Aga2hpIGNoaeG7gXUgcuG7mW5nIG3DoG4gaMOsbmggPD0gOTU5cHhcclxuXHR0aMOsIHPhu60gZOG7pW5nIGPDoWMgc3R5bGUgbsOgeVxyXG4qL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG5cdC5tYWluLWhlYWRlciB7XHJcblx0XHQvKiBIaeG7g24gdGjhu4sgdGhlbyBk4bqhbmcgbMaw4bubaSAoY2jhu4kgY8OzIDEgY+G7mXQpICovXHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHRcdC8qIGNhbmggZ2nhu69hIGPDoWMgdGjDoG5oIHBo4bqnbiBjb24gdGhlbyBwaMawxqFuZyBuZ2FuZyAqL1xyXG5cdFx0cGFkZGluZzogMXJlbSAwO1xyXG5cdFx0aGVpZ2h0OiA4cmVtO1xyXG5cdH1cclxuXHRcclxuXHQubGVmdC1zZWN0aW9uIHtcclxuXHRcdC8qIEhp4buDbiB0aOG7iyB0aGVvIGThuqFuZyBsxrDhu5tpIChjw7MgMiBj4buZdCwgY+G7mXQgxJHhuqd1IHRpw6puIGPDsyBjaGnhu4F1IHLhu5luZyBsw6AgMCkgKi9cclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxZnI7XHJcblx0XHQvKiBjaGnhur9tIDEwMCUgY2hp4buBdSBuZ2FuZyAqL1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQubG9nby1pY29uIHtcclxuXHRcdC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIGzhu4EgY+G7p2EgaWNvblxyXG5cdFx0Y2FuaCBnaeG7r2EgaWNvbiAqL1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHQvKiBjaGnhur9tIDUwJSBjaGnhu4F1IG5nYW5nLCBu4bqxbSBnaeG7r2EgKi9cclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG59Il19 */"

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

module.exports = ".error-wrapper {\r\n  position: fixed;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translate(-50%, 6rem);\r\n  width: 70%;\r\n  background-color: crimson;\r\n  color: white;\r\n  display: flex;\r\n  padding: 0.5rem 3rem;\r\n}\r\n\r\n.error-wrapper-active {\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n.error-message {\r\n  font-size: 1.25rem;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: capitalize;\r\n  width: 80%;\r\n}\r\n\r\n.error-btn {\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2cmVtKTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyLWFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZXJyb3ItYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

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

module.exports = ".weather-card {\r\n\tdisplay: grid;\r\n\t/* nội dung bên trong class này được canh giữa theo phương ngang */\r\n\tjustify-items: center;\r\n\t/* khoảng cách đệm */\r\n\tpadding: 2rem;\r\n\t/* khoảng cách lề */\r\n\tmargin: 2rem;\r\n\t/* bề rộng và chiều cao do những thành phần bên trong chiếm (nếu không đặt) */\r\n\t/* width: 19rem; */\r\n\t/* chiều cao */\r\n\t/* height: 30rem; */\r\n\tcursor: pointer;\r\n\tbackground-color: rgb(119, 163, 156);\r\n\tborder-radius: 1.75rem;\r\n\t-webkit-animation: 1s ease-in-out slideup, 1.25s ease-in-out fadein;\r\n\t        animation: 1s ease-in-out slideup, 1.25s ease-in-out fadein;\r\n}\r\n\r\n.weather-card-dark {\r\n\t/* màu nền của card khi ở chế độ tối */\r\n\tbackground: linear-gradient(to bottom, #711B86, #00057A);\r\n\tcolor: white;\r\n}\r\n\r\n@-webkit-keyframes slideup {\r\n\t0% {\r\n    \ttransform: translateY(50%);\r\n\t}\r\n\t\r\n\t100% {\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n\r\n@keyframes slideup {\r\n\t0% {\r\n    \ttransform: translateY(50%);\r\n\t}\r\n\t\r\n\t100% {\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes fadein {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.city-name-text {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 1.4rem;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.weather-icon-container {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.weather-icon-container > svg {\r\n\twidth: 15rem;\r\n}\r\n\r\n.temperature-metric-text {\r\n\tfont-size: 3rem;\r\n}\r\n\r\n.weather-condition-text {\r\n\tdisplay: block;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n\r\n.min-max-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.min-container,\r\n.max-container {\r\n\tmargin: 1rem 3rem;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n/* style cho mũi tên */\r\n\r\n.min-arrow-icon,\r\n.max-arrow-icon {\r\n\theight: 1.25rem;\r\n\tmargin: auto;\r\n}\r\n\r\n.max-arrow-icon {\r\n\tmargin-bottom: -0.05rem;\r\n}\r\n\r\n.max-text {\r\n\tcolor: #FF0070;\r\n}\r\n\r\n.min-text {\r\n\tcolor: #00FF9B;\r\n}\r\n\r\n.max-text,\r\n.min-text {\r\n\ttext-align: center;\r\n}\r\n\r\n.max-temperature-text,\r\n.min-temperature-text {\r\n\tfont-size: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isa0VBQWtFO0NBQ2xFLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osNkVBQTZFO0NBQzdFLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixvQ0FBb0M7Q0FDcEMsc0JBQXNCO0NBQ3RCLG1FQUEyRDtTQUEzRCwyREFBMkQ7QUFDNUQ7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsd0RBQXdEO0NBQ3hELFlBQVk7QUFDYjs7QUFFQTtDQUNDO0tBQ0ksMEJBQTBCO0NBQzlCOztDQUVBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7O0FBUkE7Q0FDQztLQUNJLDBCQUEwQjtDQUM5Qjs7Q0FFQTtFQUNDLHdCQUF3QjtDQUN6QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7QUFDRDs7QUFSQTtDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBOztDQUVDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsK0JBQStCO0FBQ2hDOztBQUVBLHNCQUFzQjs7QUFDdEI7O0NBRUMsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXRoZXItY2FyZCB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvKiBu4buZaSBkdW5nIGLDqm4gdHJvbmcgY2xhc3MgbsOgeSDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nICovXHJcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdC8qIGtob+G6o25nIGPDoWNoIMSR4buHbSAqL1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0Lyoga2hv4bqjbmcgY8OhY2ggbOG7gSAqL1xyXG5cdG1hcmdpbjogMnJlbTtcclxuXHQvKiBi4buBIHLhu5luZyB2w6AgY2hp4buBdSBjYW8gZG8gbmjhu69uZyB0aMOgbmggcGjhuqduIGLDqm4gdHJvbmcgY2hp4bq/bSAobuG6v3Uga2jDtG5nIMSR4bq3dCkgKi9cclxuXHQvKiB3aWR0aDogMTlyZW07ICovXHJcblx0LyogY2hp4buBdSBjYW8gKi9cclxuXHQvKiBoZWlnaHQ6IDMwcmVtOyAqL1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCAxNjMsIDE1Nik7XHJcblx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcclxuXHRhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IHNsaWRldXAsIDEuMjVzIGVhc2UtaW4tb3V0IGZhZGVpbjtcclxufVxyXG5cclxuLndlYXRoZXItY2FyZC1kYXJrIHtcclxuXHQvKiBtw6B1IG7hu4FuIGPhu6dhIGNhcmQga2hpIOG7nyBjaOG6vyDEkeG7mSB04buRaSAqL1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3MTFCODYsICMwMDA1N0EpO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZXVwIHtcclxuXHQwJSB7XHJcbiAgICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG5cdH1cclxuXHRcclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuXHQwJSB7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHRcclxuXHQxMDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG59XHJcblxyXG4uY2l0eS1uYW1lLXRleHQge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1pY29uLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbi1jb250YWluZXIgPiBzdmcge1xyXG5cdHdpZHRoOiAxNXJlbTtcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlLW1ldHJpYy10ZXh0IHtcclxuXHRmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLWNvbmRpdGlvbi10ZXh0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi5taW4tbWF4LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5taW4tY29udGFpbmVyLFxyXG4ubWF4LWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAxcmVtIDNyZW07XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG4vKiBzdHlsZSBjaG8gbcWpaSB0w6puICovXHJcbi5taW4tYXJyb3ctaWNvbixcclxuLm1heC1hcnJvdy1pY29uIHtcclxuXHRoZWlnaHQ6IDEuMjVyZW07XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF4LWFycm93LWljb24ge1xyXG5cdG1hcmdpbi1ib3R0b206IC0wLjA1cmVtO1xyXG59XHJcblxyXG4ubWF4LXRleHQge1xyXG5cdGNvbG9yOiAjRkYwMDcwO1xyXG59XHJcblxyXG4ubWluLXRleHQge1xyXG5cdGNvbG9yOiAjMDBGRjlCO1xyXG59XHJcblxyXG4ubWF4LXRleHQsXHJcbi5taW4tdGV4dCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF4LXRlbXBlcmF0dXJlLXRleHQsXHJcbi5taW4tdGVtcGVyYXR1cmUtdGV4dCB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG59Il19 */"

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

module.exports = ".details-page-wrapper {\r\n  background: linear-gradient(to top, #86DBFF 0%, #e0c3fc 100%);\r\n  /* hiển thị theo flex */\r\n  display: flex;\r\n  /* nội dung ở trong được canh giữa theo phương ngang,\r\n  chỉ khi flex theo mặc định (theo phương ngang) */\r\n  justify-content: center;\r\n  /* nội dung ở trong được canh giữa theo phương dọc,\r\n  chỉ khi flex theo mặc định (theo phương ngang) */\r\n  align-items: center;\r\n  /* những phần trong xác định vị trí theo vị trí tương đối */\r\n  position: relative;\r\n  /* đệm trên và dưới */\r\n  padding: 2rem 0;\r\n}\r\n\r\n.details-page-wrapper-dark {\r\n  background: linear-gradient(#495CFC, #FC7DB8);\r\n}\r\n\r\n/* hình tròn làm nền phía sau */\r\n\r\n.background-gradient-circle {\r\n  /* lấy theo tọa độ của class cha: .details-page-wrapper\r\n  class cha phải đặt position: relative; */\r\n  position: absolute;\r\n  /* khoảng cách với cạnh trên (% or px), phải có position */\r\n  top: 50%;\r\n  z-index: 0;\r\n  /* chiều cao chiếm hết màn hình,\r\n  chỉ đặt % khi position cha là relative và con là absolute */\r\n  height: 100%;\r\n  /* bề rộng chiếm hết màn hình,\r\n  đặt % được không phụ thuộc position */\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  background: #FC7DB8;\r\n  /* chuyển đổi màu nền của hình tròn nền trong 4s */\r\n  /* mất 4s để có được màu nền này */\r\n  transition: background 4s ease;\r\n  /* sử dụng hoạt ảnh định nghĩa trong biến scaleup-circle */\r\n  -webkit-animation: scaleup-circle 0.5s ease-in-out forwards;\r\n          animation: scaleup-circle 0.5s ease-in-out forwards;\r\n}\r\n\r\n.background-gradient-circle-dark {\r\n  background: #6676FF;\r\n}\r\n\r\n@-webkit-keyframes scaleup-circle {\r\n  0% {\r\n    transform-origin: top;\r\n    transform: scale(0) translateY(-50%) rotate(0);\r\n  }\r\n  \r\n  100% {\r\n    transform-origin: center;\r\n    transform: scale(1) translateY(-50%) rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes scaleup-circle {\r\n  0% {\r\n    transform-origin: top;\r\n    transform: scale(0) translateY(-50%) rotate(0);\r\n  }\r\n  \r\n  100% {\r\n    transform-origin: center;\r\n    transform: scale(1) translateY(-50%) rotate(360deg);\r\n  }\r\n}\r\n\r\n/* nút BACK */\r\n\r\n.back-button {\r\n  position: absolute;\r\n  /* khoảng cách với cạnh trên */\r\n  top: 3rem;\r\n  left: 3.25rem;\r\n  width: 5rem;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  /* lề trên */\r\n  margin-top: 3rem;\r\n}\r\n\r\n/* vùng ghi thông tin thời tiết */\r\n\r\n.main-weather-card {\r\n  position: relative;\r\n  /* màu nền */\r\n  background-color: white;\r\n  /* đặt % chiều ngang không phụ thuộc position,\r\n  chiều cao sẽ do các thành phần bên trong chiếm, không cần đặt */\r\n  width: 75%;\r\n  border-radius: 1rem;\r\n  z-index: 1;\r\n  -webkit-animation: 1s ease-out .3s scaleup, 1.25s ease-out .3s forwards fadein;\r\n          animation: 1s ease-out .3s scaleup, 1.25s ease-out .3s forwards fadein;\r\n}\r\n\r\n@-webkit-keyframes scaleup {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  \r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes scaleup {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  \r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* hình ảnh đại diện thành phố */\r\n\r\n.city-illustration {\r\n  /* chiếm hết bề ngang của class cha */\r\n  width: 100%;\r\n  /* chiều cao luôn là 420px không phụ thuộc vào chiều rộng màn hình */\r\n  height: 420px;\r\n  border-radius: 1rem 1rem 0 0;\r\n  /* chiếm hết diện tích, không có lề trên và dưới */\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n/* vùng ghi thông tin thời tiết hiện tại và tên thành phố đó */\r\n\r\n.header-content-wrapper {\r\n  position: absolute;\r\n  z-index: 1;\r\n  color: rgb(255, 255, 255);\r\n  top: 1rem;\r\n  display: grid;\r\n  /* chia làm 2 cột, mỗi cột rộng 1fr */\r\n  grid-template-columns: repeat(2, 1fr);\r\n  /* lưới chiếm 100% chiều rộng */\r\n  width: 100%;\r\n}\r\n\r\n/* vùng ghi nhiệt độ, trạng thái thời tiết, độ ẩm, gió */\r\n\r\n.today-weather-container {\r\n  display: grid;\r\n  /* nội dung của nó nằm chính giữa theo phương ngang */\r\n  justify-items: center;\r\n  /* khoảng cách với phần lưới trên */\r\n  grid-gap: 2rem;\r\n}\r\n\r\n/* vùng ghi nhiệt độ và trạng thái thời tiết */\r\n\r\n.temp-state-container {\r\n  display: flex;\r\n  /* sắp xếp các mục theo chiều dọc */\r\n  flex-direction: column;\r\n  /* canh giữa các phần tử ở trong */\r\n  /* align-items: center; */\r\n}\r\n\r\n.temperature-text {\r\n  font-size: 6rem;\r\n  letter-spacing: 0.75rem;\r\n}\r\n\r\n.weather-state-text {\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.15rem;\r\n  text-transform: uppercase;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n/* vùng ghi độ ẩm và gió */\r\n\r\n.hum-wind-container {\r\n  /* flex mặc định theo chiều ngang */\r\n  display: flex;\r\n  /* canh giữa theo phương dọc */\r\n  align-items: center;\r\n}\r\n\r\n.hum-container, .wind-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.hum-text, .wind-text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  font-size: 0.8rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.hum-wind-separator {\r\n  margin: 0 2rem;\r\n  width: 2px;\r\n  height: 2.5rem;\r\n  background-color: white;\r\n}\r\n\r\n/* vùng ghi thành phố */\r\n\r\n.city-name-container {\r\n  display: flex;\r\n  /* canh giữa theo phương ngang */\r\n  justify-content: center;\r\n  /* canh giữa theo phương dọc */\r\n  align-items: center;\r\n  padding-bottom: 20%;\r\n}\r\n\r\n.city-name-underline {\r\n  border-radius: 5px;\r\n  height: 5px;\r\n  box-shadow: 0 3rem 0 0 #ffffff;\r\n}\r\n\r\n.city-name-text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.3rem;\r\n  font-size: 1.75rem;\r\n}\r\n\r\n/*\r\n================\r\n     BODY\r\n================\r\n*/\r\n\r\n.body-content-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1.5fr;\r\n  /* khoảng cách giữa 2 cột */\r\n  grid-gap: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n/* phần twitter */\r\n\r\n.twitter-feed-container {\r\n  margin-top: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-feed-body {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-flow: column;\r\n}\r\n\r\n.twitter-loader {\r\n  border: 3px solid hsla(185, 100%, 62%, 0.2);\r\n  border-top-color: #3cefff;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  -webkit-animation: spin 1s linear infinite;\r\n          animation: spin 1s linear infinite;\r\n  justify-self: center;\r\n  align-self: center;\r\n  margin-top: 3rem;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.twitter-no-tweets-text {\r\n  margin-top: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.twitter-feed-text {\r\n  color: #0c1066;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.twitter-icon {\r\n  width: 1.5rem;\r\n}\r\n\r\n.twitter-feed-tag-text {\r\n  font-size: 0.85rem;\r\n  color: #5f84fb;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.twitter-feed-header {\r\n  display: grid;\r\n  grid-template-rows: 2rem;\r\n  grid-template-columns: 0.5fr 1.5fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-tweet-container {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.tweet-user-wrapper {\r\n  display: flex;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tweet-avatar-image {\r\n  margin-right: 0.5rem;\r\n  border-radius: 50%;\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\n.tweet-username-text {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n.tweet-text {\r\n  margin-top: 0\r\n}\r\n\r\n/* forecast-container */\r\n\r\n.forecast-container {\r\n  /* hiển thị dạng flex (hàng ngang) */\r\n  display: flex;\r\n  justify-content: center;\r\n  /* tự động xuống hàng nếu chiếm hết bề ngang */\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.day-weather-container {\r\n  display: flex;\r\n  /* hiển thị theo cột (hàng dọc) */\r\n  flex-flow: column;\r\n  margin: 2rem 1.5rem;\r\n  /* canh giữa các phần tử ở trong */\r\n  align-items: center;\r\n}\r\n\r\n.day-name-text {\r\n  font-size: 1.5rem;\r\n  color: #39437a;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.forecast-condition-icon {\r\n  height: 4rem;\r\n}\r\n\r\n.day-temp-text {\r\n  font-size: 1.85rem;\r\n  color: #0c1066;\r\n  letter-spacing: 0.25rem;\r\n  margin: 0.75rem 0;\r\n  padding-left: 0.35rem;\r\n}\r\n\r\n.day-state-text {\r\n  font-size: 0.65rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  color: #2B244D;\r\n}\r\n\r\n/* khi chiều rộng màn hình <= 1279px */\r\n\r\n@media screen and (max-width: 1279px) {\r\n  \r\n  .back-button {\r\n    /* khoảng cách với cạnh trên */\r\n    top: 2rem;\r\n    /* lề trên */\r\n    margin-top: 2rem;\r\n  }\r\n  \r\n  .main-weather-card {\r\n    /* chiều ngang chiếm 80% */\r\n    width: 80%;\r\n  }\r\n  \r\n  .body-content-wrapper {\r\n    /* hiển thị theo cột */\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* khi chiều rộng màn hình <= 959px */\r\n\r\n@media screen and (max-width: 959px) {\r\n\r\n  .details-page-wrapper {\r\n    /* sắp xếp hiển thị theo chiều dọc */\r\n    flex-flow: column;\r\n    /* canh giữa theo phương ngang\r\n      (chỉ khi hiển thị theo chiều dọc) */\r\n    align-items: center;\r\n    /* nội dung ở trong được canh giữa theo phương dọc,\r\n      (chỉ khi hiển thị theo chiều dọc) */\r\n    justify-content: center;\r\n    padding-bottom: 25%;\r\n  }\r\n\r\n  .back-button {\r\n    /* khi ở kích thước màn hình này thì button không dùng position */\r\n    position: static;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .header-content-wrapper {\r\n    /* hiển thị theo chiều dọc */\r\n    grid-template-columns: 1fr;\r\n    /* chiều cao của 2 hàng */\r\n    grid-template-rows: 2fr 1fr;\r\n    grid-gap: 2rem;\r\n  }\r\n\r\n  .city-name-container {\r\n    /* đệm dưới bằng 0 */\r\n    padding-bottom: 0;\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBNkQ7RUFDN0QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYjtrREFDZ0Q7RUFDaEQsdUJBQXVCO0VBQ3ZCO2tEQUNnRDtFQUNoRCxtQkFBbUI7RUFDbkIsMkRBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0U7MENBQ3dDO0VBQ3hDLGtCQUFrQjtFQUNsQiwwREFBMEQ7RUFDMUQsUUFBUTtFQUNSLFVBQVU7RUFDVjs2REFDMkQ7RUFDM0QsWUFBWTtFQUNaO3VDQUNxQztFQUNyQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QiwwREFBMEQ7RUFDMUQsMkRBQW1EO1VBQW5ELG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtREFBbUQ7RUFDckQ7QUFDRjs7QUFWQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtREFBbUQ7RUFDckQ7QUFDRjs7QUFFQSxhQUFhOztBQUNiO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUEsaUNBQWlDOztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCO2lFQUMrRDtFQUMvRCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViw4RUFBc0U7VUFBdEUsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVJBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxvRUFBb0U7RUFDcEUsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrREFBa0Q7RUFDbEQsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQSw4REFBOEQ7O0FBQzlEO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsU0FBUztFQUNULGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUEsd0RBQXdEOztBQUN4RDtFQUNFLGFBQWE7RUFDYixxREFBcUQ7RUFDckQscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBLDhDQUE4Qzs7QUFDOUM7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7QUFDRjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQSxzQ0FBc0M7O0FBQ3RDOztFQUVFO0lBQ0UsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQSxxQ0FBcUM7O0FBQ3JDOztFQUVFO0lBQ0Usb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQjt5Q0FDcUM7SUFDckMsbUJBQW1CO0lBQ25CO3lDQUNxQztJQUNyQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUVBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXBhZ2Utd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzg2REJGRiAwJSwgI2UwYzNmYyAxMDAlKTtcclxuICAvKiBoaeG7g24gdGjhu4sgdGhlbyBmbGV4ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBu4buZaSBkdW5nIOG7nyB0cm9uZyDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nLFxyXG4gIGNo4buJIGtoaSBmbGV4IHRoZW8gbeG6t2MgxJHhu4tuaCAodGhlbyBwaMawxqFuZyBuZ2FuZykgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBu4buZaSBkdW5nIOG7nyB0cm9uZyDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jLFxyXG4gIGNo4buJIGtoaSBmbGV4IHRoZW8gbeG6t2MgxJHhu4tuaCAodGhlbyBwaMawxqFuZyBuZ2FuZykgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIG5o4buvbmcgcGjhuqduIHRyb25nIHjDoWMgxJHhu4tuaCB24buLIHRyw60gdGhlbyB24buLIHRyw60gdMawxqFuZyDEkeG7kWkgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogxJHhu4dtIHRyw6puIHbDoCBkxrDhu5tpICovXHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG59XHJcblxyXG4uZGV0YWlscy1wYWdlLXdyYXBwZXItZGFyayB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0OTVDRkMsICNGQzdEQjgpO1xyXG59XHJcblxyXG4vKiBow6xuaCB0csOybiBsw6BtIG7hu4FuIHBow61hIHNhdSAqL1xyXG4uYmFja2dyb3VuZC1ncmFkaWVudC1jaXJjbGUge1xyXG4gIC8qIGzhuqV5IHRoZW8gdOG7jWEgxJHhu5kgY+G7p2EgY2xhc3MgY2hhOiAuZGV0YWlscy1wYWdlLXdyYXBwZXJcclxuICBjbGFzcyBjaGEgcGjhuqNpIMSR4bq3dCBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIGPhuqFuaCB0csOqbiAoJSBvciBweCksIHBo4bqjaSBjw7MgcG9zaXRpb24gKi9cclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAwO1xyXG4gIC8qIGNoaeG7gXUgY2FvIGNoaeG6v20gaOG6v3QgbcOgbiBow6xuaCxcclxuICBjaOG7iSDEkeG6t3QgJSBraGkgcG9zaXRpb24gY2hhIGzDoCByZWxhdGl2ZSB2w6AgY29uIGzDoCBhYnNvbHV0ZSAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBi4buBIHLhu5luZyBjaGnhur9tIGjhur90IG3DoG4gaMOsbmgsXHJcbiAgxJHhurd0ICUgxJHGsOG7o2Mga2jDtG5nIHBo4bulIHRodeG7mWMgcG9zaXRpb24gKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI0ZDN0RCODtcclxuICAvKiBjaHV54buDbiDEkeG7lWkgbcOgdSBu4buBbiBj4bunYSBow6xuaCB0csOybiBu4buBbiB0cm9uZyA0cyAqL1xyXG4gIC8qIG3huqV0IDRzIMSR4buDIGPDsyDEkcaw4bujYyBtw6B1IG7hu4FuIG7DoHkgKi9cclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDRzIGVhc2U7XHJcbiAgLyogc+G7rSBk4bulbmcgaG/huqF0IOG6o25oIMSR4buLbmggbmdoxKlhIHRyb25nIGJp4bq/biBzY2FsZXVwLWNpcmNsZSAqL1xyXG4gIGFuaW1hdGlvbjogc2NhbGV1cC1jaXJjbGUgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxufVxyXG5cclxuLmJhY2tncm91bmQtZ3JhZGllbnQtY2lyY2xlLWRhcmsge1xyXG4gIGJhY2tncm91bmQ6ICM2Njc2RkY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGV1cC1jaXJjbGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogbsO6dCBCQUNLICovXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIGPhuqFuaCB0csOqbiAqL1xyXG4gIHRvcDogM3JlbTtcclxuICBsZWZ0OiAzLjI1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIC8qIGzhu4EgdHLDqm4gKi9cclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4vKiB2w7luZyBnaGkgdGjDtG5nIHRpbiB0aOG7nWkgdGnhur90ICovXHJcbi5tYWluLXdlYXRoZXItY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIG3DoHUgbuG7gW4gKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiDEkeG6t3QgJSBjaGnhu4F1IG5nYW5nIGtow7RuZyBwaOG7pSB0aHXhu5ljIHBvc2l0aW9uLFxyXG4gIGNoaeG7gXUgY2FvIHPhur0gZG8gY8OhYyB0aMOgbmggcGjhuqduIGLDqm4gdHJvbmcgY2hp4bq/bSwga2jDtG5nIGPhuqduIMSR4bq3dCAqL1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgLjNzIHNjYWxldXAsIDEuMjVzIGVhc2Utb3V0IC4zcyBmb3J3YXJkcyBmYWRlaW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGV1cCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGjDrG5oIOG6o25oIMSR4bqhaSBkaeG7h24gdGjDoG5oIHBo4buRICovXHJcbi5jaXR5LWlsbHVzdHJhdGlvbiB7XHJcbiAgLyogY2hp4bq/bSBo4bq/dCBi4buBIG5nYW5nIGPhu6dhIGNsYXNzIGNoYSAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGNoaeG7gXUgY2FvIGx1w7RuIGzDoCA0MjBweCBraMO0bmcgcGjhu6UgdGh14buZYyB2w6BvIGNoaeG7gXUgcuG7mW5nIG3DoG4gaMOsbmggKi9cclxuICBoZWlnaHQ6IDQyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XHJcbiAgLyogY2hp4bq/bSBo4bq/dCBkaeG7h24gdMOtY2gsIGtow7RuZyBjw7MgbOG7gSB0csOqbiB2w6AgZMaw4bubaSAqL1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4vKiB2w7luZyBnaGkgdGjDtG5nIHRpbiB0aOG7nWkgdGnhur90IGhp4buHbiB04bqhaSB2w6AgdMOqbiB0aMOgbmggcGjhu5EgxJHDsyAqL1xyXG4uaGVhZGVyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBjaGlhIGzDoG0gMiBj4buZdCwgbeG7l2kgY+G7mXQgcuG7mW5nIDFmciAqL1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgLyogbMaw4bubaSBjaGnhur9tIDEwMCUgY2hp4buBdSBy4buZbmcgKi9cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogdsO5bmcgZ2hpIG5oaeG7h3QgxJHhu5ksIHRy4bqhbmcgdGjDoWkgdGjhu51pIHRp4bq/dCwgxJHhu5kg4bqpbSwgZ2nDsyAqL1xyXG4udG9kYXktd2VhdGhlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyogbuG7mWkgZHVuZyBj4bunYSBuw7MgbuG6sW0gY2jDrW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nICovXHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIHBo4bqnbiBsxrDhu5tpIHRyw6puICovXHJcbiAgZ3JpZC1nYXA6IDJyZW07XHJcbn1cclxuXHJcbi8qIHbDuW5nIGdoaSBuaGnhu4d0IMSR4buZIHbDoCB0cuG6oW5nIHRow6FpIHRo4budaSB0aeG6v3QgKi9cclxuLnRlbXAtc3RhdGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIHPhuq9wIHjhur9wIGPDoWMgbeG7pWMgdGhlbyBjaGnhu4F1IGThu41jICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBjYW5oIGdp4buvYSBjw6FjIHBo4bqnbiB04butIOG7nyB0cm9uZyAqL1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi50ZW1wZXJhdHVyZS10ZXh0IHtcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLXN0YXRlLXRleHQge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLyogdsO5bmcgZ2hpIMSR4buZIOG6qW0gdsOgIGdpw7MgKi9cclxuLmh1bS13aW5kLWNvbnRhaW5lciB7XHJcbiAgLyogZmxleCBt4bq3YyDEkeG7i25oIHRoZW8gY2hp4buBdSBuZ2FuZyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogY2FuaCBnaeG7r2EgdGhlbyBwaMawxqFuZyBk4buNYyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5odW0tY29udGFpbmVyLCAud2luZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaHVtLXRleHQsIC53aW5kLXRleHQge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaHVtLXdpbmQtc2VwYXJhdG9yIHtcclxuICBtYXJnaW46IDAgMnJlbTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiB2w7luZyBnaGkgdGjDoG5oIHBo4buRICovXHJcbi5jaXR5LW5hbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGNhbmggZ2nhu69hIHRoZW8gcGjGsMahbmcgbmdhbmcgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lLXVuZGVybGluZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3JlbSAwIDAgI2ZmZmZmZjtcclxufVxyXG5cclxuLmNpdHktbmFtZS10ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09XHJcbiAgICAgQk9EWVxyXG49PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG4uYm9keS1jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XHJcbiAgLyoga2hv4bqjbmcgY8OhY2ggZ2nhu69hIDIgY+G7mXQgKi9cclxuICBncmlkLWdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4vKiBwaOG6p24gdHdpdHRlciAqL1xyXG4udHdpdHRlci1mZWVkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLnR3aXR0ZXItbG9hZGVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDE4NSwgMTAwJSwgNjIlLCAwLjIpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMzY2VmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50d2l0dGVyLW5vLXR3ZWV0cy10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZC10ZXh0IHtcclxuICBjb2xvcjogIzBjMTA2NjtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWljb24ge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtdGFnLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogIzVmODRmYjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50d2l0dGVyLXR3ZWV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnR3ZWV0LXVzZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi50d2VldC1hdmF0YXItaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50d2VldC11c2VybmFtZS10ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR3ZWV0LXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDBcclxufVxyXG5cclxuLyogZm9yZWNhc3QtY29udGFpbmVyICovXHJcbi5mb3JlY2FzdC1jb250YWluZXIge1xyXG4gIC8qIGhp4buDbiB0aOG7iyBk4bqhbmcgZmxleCAoaMOgbmcgbmdhbmcpICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiB04buxIMSR4buZbmcgeHXhu5FuZyBow6BuZyBu4bq/dSBjaGnhur9tIGjhur90IGLhu4EgbmdhbmcgKi9cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kYXktd2VhdGhlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogaGnhu4NuIHRo4buLIHRoZW8gY+G7mXQgKGjDoG5nIGThu41jKSAqL1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG1hcmdpbjogMnJlbSAxLjVyZW07XHJcbiAgLyogY2FuaCBnaeG7r2EgY8OhYyBwaOG6p24gdOG7rSDhu58gdHJvbmcgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGF5LW5hbWUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMzOTQzN2E7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1jb25kaXRpb24taWNvbiB7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4uZGF5LXRlbXAtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjg1cmVtO1xyXG4gIGNvbG9yOiAjMGMxMDY2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gIHBhZGRpbmctbGVmdDogMC4zNXJlbTtcclxufVxyXG5cclxuLmRheS1zdGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gIGNvbG9yOiAjMkIyNDREO1xyXG59XHJcblxyXG4vKiBraGkgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCA8PSAxMjc5cHggKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgXHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIC8qIGtob+G6o25nIGPDoWNoIHbhu5tpIGPhuqFuaCB0csOqbiAqL1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgLyogbOG7gSB0csOqbiAqL1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4td2VhdGhlci1jYXJkIHtcclxuICAgIC8qIGNoaeG7gXUgbmdhbmcgY2hp4bq/bSA4MCUgKi9cclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5LWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAvKiBoaeG7g24gdGjhu4sgdGhlbyBj4buZdCAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBraGkgY2hp4buBdSBy4buZbmcgbcOgbiBow6xuaCA8PSA5NTlweCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG5cclxuICAuZGV0YWlscy1wYWdlLXdyYXBwZXIge1xyXG4gICAgLyogc+G6r3AgeOG6v3AgaGnhu4NuIHRo4buLIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAvKiBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIG5nYW5nXHJcbiAgICAgIChjaOG7iSBraGkgaGnhu4NuIHRo4buLIHRoZW8gY2hp4buBdSBk4buNYykgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBu4buZaSBkdW5nIOG7nyB0cm9uZyDEkcaw4bujYyBjYW5oIGdp4buvYSB0aGVvIHBoxrDGoW5nIGThu41jLFxyXG4gICAgICAoY2jhu4kga2hpIGhp4buDbiB0aOG7iyB0aGVvIGNoaeG7gXUgZOG7jWMpICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgLyoga2hpIOG7nyBrw61jaCB0aMaw4bubYyBtw6BuIGjDrG5oIG7DoHkgdGjDrCBidXR0b24ga2jDtG5nIGTDuW5nIHBvc2l0aW9uICovXHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLyogaGnhu4NuIHRo4buLIHRoZW8gY2hp4buBdSBk4buNYyAqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAvKiBjaGnhu4F1IGNhbyBj4bunYSAyIGjDoG5nICovXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jaXR5LW5hbWUtY29udGFpbmVyIHtcclxuICAgIC8qIMSR4buHbSBkxrDhu5tpIGLhurFuZyAwICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page-wrapper\" [ngClass]=\"{'details-page-wrapper-dark': darkMode}\">\r\n  <div class=\"background-gradient-circle\" [ngClass]=\"{'background-gradient-circle-dark': darkMode}\"></div>\r\n  <svg class=\"back-button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\">\r\n    <defs>\r\n      <style>\r\n        .a {\r\n          fill: #2b244d;\r\n        }\r\n\r\n        .b {\r\n          stroke: #fff;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .c {\r\n          fill: #fff;\r\n          font-size: 15px;\r\n          font-family: SegoeUI, Segoe UI, sans-serif;\r\n          letter-spacing: 0.4em;\r\n        }\r\n      </style>\r\n    </defs>\r\n    <g transform=\"translate(3980)\">\r\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"></circle>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"80\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 164.5)\" x2=\"26\" y1=\"26\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"26\" y1=\"27\"></line>\r\n      <text class=\"c\" transform=\"translate(117 274)\">\r\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n      </text>\r\n    </g>\r\n  </svg>\r\n  <section class=\"main-weather-card\">\r\n    <section>\r\n      <img class=\"city-illustration\" [src]=\"cityIllustrationPath\" />\r\n      <div class=\"header-content-wrapper\">\r\n        <div class=\"today-weather-container\">\r\n          <div class=\"temp-state-container\">\r\n            <span>{{ today }}</span>\r\n            <span class=\"temperature-text\">{{ temp }}°</span>\r\n            <span class=\"weather-state-text\">{{ state }}</span>\r\n          </div>\r\n          <div class=\"hum-wind-container\">\r\n            <div class=\"hum-container\">\r\n              <span class=\"hum-text\">humidity</span>\r\n              <span>{{ hum }} %</span>\r\n            </div>\r\n            <div class=\"hum-wind-separator\">&nbsp;</div>\r\n            <div class=\"wind-container\">\r\n              <span class=\"wind-text\">wind</span>\r\n              <span>{{ wind }} K/M</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"city-name-container\">\r\n          <div class=\"city-name-underline\">\r\n            <span class=\"city-name-text\">{{ city }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <main class=\"body-content-wrapper\">\r\n      <section class=\"twitter-feed-container\">\r\n        <div class=\"twitter-feed-header\">\r\n          <svg class=\"twitter-icon\" viewBox=\"4332 625.812 30 24.375\">\r\n            <defs>\r\n              <style>\r\n                .twitter-icon-fill {\r\n                  fill: #03a9f4;\r\n                }\r\n              </style>\r\n            </defs>\r\n            <path class=\"twitter-icon-fill\"\r\n              d=\"M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z\"\r\n              transform=\"translate(4332 577.812)\" />\r\n          </svg>\r\n          <span class=\"twitter-feed-text\">Twitter Feed</span>\r\n          <span class=\"twitter-feed-tag-text\">#{{city}}</span>\r\n        </div>\r\n        <div class=\"twitter-feed-body\">\r\n\r\n          <ng-container *ngIf=\"tweets$ | async as tweets; else loadingTweets\">\r\n            <p *ngIf=\"tweets && tweets.length === 0\" class=\"twitter-no-tweets-text\">No Tweets Found</p>\r\n            <div class=\"twitter-tweet-container\" *ngFor=\"let tweet of tweets\">\r\n              <div class=\"tweet-user-wrapper\">\r\n                <img [src]=\"tweet.user.photo\" alt=\"avatar\" class=\"tweet-avatar-image\">\r\n                <div>\r\n                  <span class=\"tweet-username-text\">{{tweet.user.name}}</span>\r\n                  <span class=\"tweet-handle-text\">{{tweet.user.handle}}</span>\r\n                </div>\r\n              </div>\r\n              <p class=\"tweet-text\">{{tweet.text}}</p>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-template #loadingTweets>\r\n            <div class=\"twitter-loader\"></div>\r\n          </ng-template>\r\n\r\n        </div>\r\n      </section>\r\n      <section class=\"forecast-container\">\r\n        <div class=\"day-weather-container\" [ngSwitch]=\"true\" *ngFor=\"let day of daysForecast | keyvalue\">\r\n          <span class=\"day-name-text\">{{ day.key }}</span>\r\n          <svg class=\"forecast-condition-icon\" *ngSwitchCase=\"day.value.state === 'Clouds'\"\r\n            viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" transform=\"translate(2354 -1633)\" />\r\n              <path fill=\"#ffde17\"\r\n                d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\" />\r\n            </g>\r\n          </svg>\r\n          <svg *ngSwitchCase=\"day.value.state === 'Haze' || day.value.state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n            <path fill=\"#12bcff\"\r\n              d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\" />\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Rain' || day.value.state === 'Drizzle'\"\r\n            viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g>\r\n              <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" />\r\n              <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Storm' || day.value.state === 'Thunderstorm'\"\r\n            viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1529 490.4)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 467.8)\" />\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" transform=\"translate(1618.9 476.8)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1631.8 450)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1687.1 477.5)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1709.6 507.3)\" />\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" transform=\"translate(1639.6 500.1)\" />\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" rx=\"55.3\" ry=\"51.7\" transform=\"translate(1569.6 507.3)\" />\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" />\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\" />\r\n            </g>\r\n          </svg>\r\n          <svg class=\"forecast-condition-icon\"\r\n            *ngSwitchCase=\"day.value.state === 'Sunny' || day.value.state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" transform=\"translate(2050 -845)\" />\r\n          </svg>\r\n\r\n          <span class=\"day-temp-text\">{{ day.value.temp }}°</span>\r\n          <span class=\"day-state-text\">{{ day.value.state }}</span>\r\n        </div>\r\n      </section>\r\n    </main>\r\n  </section>\r\n</div>\r\n\r\n<app-error [message]=\"errorMessage\"></app-error>"

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