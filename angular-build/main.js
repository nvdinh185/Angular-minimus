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





// import {AddComponent} from './pages/add/add.component';
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

module.exports = ".root__container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto;\r\n\tgrid-template-rows: 0.5fr auto;\r\n\tposition: relative;\r\n}\r\n\r\n.main__header {\r\n\twidth: 100%;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr 0.25fr;\r\n\tgrid-template-rows: 1fr;\r\n\tbox-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n\theight: 4rem;\r\n\tmargin: 0;\r\n\talign-items: center;\r\n\ttransition: background-color 500ms linear;\r\n\t-webkit-animation: 1s ease-in-out 0ms 1 fadein;\r\n\t        animation: 1s ease-in-out 0ms 1 fadein;\r\n}\r\n\r\n.main__header-dark {\r\n\tbackground-color: #2B244D;\r\n\tcolor: white;\r\n}\r\n\r\n.toggle-button__container {\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n\tmargin: 0 0.5rem;\r\n}\r\n\r\n.mode-toggle__input {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n}\r\n\r\n.mode-toggle__bg {\r\n\theight: 1rem;\r\n\twidth: 2rem;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tdisplay: inline-block;\r\n\ttransition: background-color 300ms linear;\r\n}\r\n\r\n.mode-toggle__circle {\r\n\theight: 1.30rem;\r\n\twidth: 1.30rem;\r\n\tbackground-color: #2B244D;\r\n\tposition: absolute;\r\n\ttop: -0.2rem;\r\n\tborder-radius: 50%;\r\n\tbox-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\r\n\ttransition: left 300ms linear;\r\n\tleft: 0.1rem;\r\n}\r\n\r\n.mode-toggle__circle-checked {\r\n\tbackground-color: white;\r\n\tleft: 1.75rem;\r\n}\r\n\r\n.mode-toggle__bg-checked {\r\n\tbackground-color: #FF0070;\r\n}\r\n\r\n.mode-toggle__text {\r\n\tfont-size: 0.75rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n\r\n.date__text {\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n\tdisplay: inline;\r\n\tmargin: 0.5rem 0;\r\n}\r\n\r\n.main-container__bg {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: -2;\r\n\topacity: 0;\r\n\tbackground: white;\r\n\ttransition: opacity 300ms linear;\r\n}\r\n\r\n.main-container__bg-dark {\r\n\topacity: 1;\r\n\tbackground: linear-gradient(to bottom, #B290FF, #2E1D65);\r\n\ttransition: opacity 300ms linear;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsOEJBQThCO0NBQzlCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHVCQUF1QjtDQUN2Qix5Q0FBeUM7Q0FDekMsWUFBWTtDQUNaLFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIseUNBQXlDO0NBQ3pDLDhDQUFzQztTQUF0QyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsb0NBQW9DO0NBQ3BDLHFCQUFxQjtDQUNyQix5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixzQ0FBc0M7Q0FDdEMsNkJBQTZCO0NBQzdCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixPQUFPO0NBQ1AsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHdEQUF3RDtDQUN4RCxnQ0FBZ0M7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290X19jb250YWluZXIge1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG5cdGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluX19oZWFkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuMjVmcjtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuXHRib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcclxuXHRoZWlnaHQ6IDRyZW07XHJcblx0bWFyZ2luOiAwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBsaW5lYXI7XHJcblx0YW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwbXMgMSBmYWRlaW47XHJcbn1cclxuXHJcbi5tYWluX19oZWFkZXItZGFyayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJCMjQ0RDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uX19jb250YWluZXIge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwIDAuNXJlbTtcclxufVxyXG5cclxuLm1vZGUtdG9nZ2xlX19pbnB1dCB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGUtdG9nZ2xlX19iZyB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG5cdHdpZHRoOiAycmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4ubW9kZS10b2dnbGVfX2NpcmNsZSB7XHJcblx0aGVpZ2h0OiAxLjMwcmVtO1xyXG5cdHdpZHRoOiAxLjMwcmVtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyQjI0NEQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTAuMnJlbTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAyNTUsIDAuNSk7XHJcblx0dHJhbnNpdGlvbjogbGVmdCAzMDBtcyBsaW5lYXI7XHJcblx0bGVmdDogMC4xcmVtO1xyXG59XHJcblxyXG4ubW9kZS10b2dnbGVfX2NpcmNsZS1jaGVja2VkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRsZWZ0OiAxLjc1cmVtO1xyXG59XHJcblxyXG4ubW9kZS10b2dnbGVfX2JnLWNoZWNrZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRjAwNzA7XHJcbn1cclxuXHJcbi5tb2RlLXRvZ2dsZV9fdGV4dCB7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLmRhdGVfX3RleHQge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0bWFyZ2luOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyX19iZyB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAtMjtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJfX2JnLWRhcmsge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0IyOTBGRiwgIzJFMUQ2NSk7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root__container\">\r\n  <header [ngClass]=\"{'main__header-dark': darkModeActive}\" class=\"main__header\">\r\n\r\n    <div></div>\r\n\r\n    <h3 class=\"date__text\">Today</h3>\r\n\r\n    <div>\r\n      <span class=\"mode-toggle__text\">Light</span>\r\n      <label class=\"toggle-button__container\">\r\n        <input (click)=\"modeToggleSwitch()\" type=\"checkbox\" class=\"mode-toggle__input\" />\r\n        <span [ngClass]=\"{'mode-toggle__bg-checked': darkModeActive}\" class=\"mode-toggle__bg\"></span>\r\n        <span [ngClass]=\"{'mode-toggle__circle-checked': darkModeActive}\" class=\"mode-toggle__circle\"></span>\r\n      </label>\r\n      <span class=\"mode-toggle__text\">Dark</span>\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <div class=\"main-container__bg\" [ngClass]=\"{'main-container__bg-dark': darkModeActive}\"></div>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(ui, router) {
        this.ui = ui;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (value) {
            _this.darkModeActive = value;
        });
    };
    ;
    AppComponent.prototype.modeToggleSwitch = function () {
        this.ui.darkModeState.next(!this.darkModeActive);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/weather-card/weather-card.component */ "./src/app/ui/weather-card/weather-card.component.ts");
/* harmony import */ var _pages_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/add-card/add-card.component */ "./src/app/pages/add-card/add-card.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
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
                _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_7__["WeatherCardComponent"],
                _pages_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"],
                _pages_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
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

/***/ "./src/app/pages/add-card/add-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-card/add-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add__card {\r\n    background-color: #ffffff;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    width: 19rem;\r\n    height: 30rem;\r\n    justify-items: center;\r\n    cursor: pointer;\r\n    border-radius: 1.75rem;\r\n    -webkit-animation: 1.25s ease-in-out 0ms 1 fadein;\r\n            animation: 1.25s ease-in-out 0ms 1 fadein;\r\n    color: #443282;\r\n  }\r\n  \r\n  .add__card-dark {\r\n    background: linear-gradient(to bottom, #711B86, #00057A);\r\n    color: white;\r\n  }\r\n  \r\n  .card__title {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n  \r\n  .city__illustration {\r\n    width: 20rem;\r\n  }\r\n  \r\n  .body__container {\r\n    align-self: end;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-flow: column;\r\n  }\r\n  \r\n  .add__icon {\r\n    width: 10rem;\r\n    margin-bottom: 1.15rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGlEQUF5QztZQUF6Qyx5Q0FBeUM7SUFDekMsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHdEQUF3RDtJQUN4RCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9hZGQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZF9fY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgd2lkdGg6IDE5cmVtO1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcbiAgICBhbmltYXRpb246IDEuMjVzIGVhc2UtaW4tb3V0IDBtcyAxIGZhZGVpbjtcclxuICAgIGNvbG9yOiAjNDQzMjgyO1xyXG4gIH1cclxuICBcclxuICAuYWRkX19jYXJkLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcxMUI4NiwgIzAwMDU3QSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkX190aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNpdHlfX2lsbHVzdHJhdGlvbiB7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5X19jb250YWluZXIge1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmFkZF9faWNvbiB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjE1cmVtO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/add-card/add-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/add-card/add-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add__card\" routerLink=\"/add\" [ngClass]=\"{'add__card-dark': darkMode}\">\r\n  <div class=\"header__container\">\r\n    <span class=\"card__title\">Add city</span>\r\n  </div>\r\n  <div class=\"body__container\">\r\n    <svg class=\"add__icon\"></svg>\r\n    <svg class=\"city__illustration\"></svg>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/add-card/add-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/add-card/add-card.component.ts ***!
  \******************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCardComponent = /** @class */ (function () {
    function AddCardComponent() {
    }
    AddCardComponent.prototype.ngOnInit = function () {
    };
    AddCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-card',
            template: __webpack_require__(/*! ./add-card.component.html */ "./src/app/pages/add-card/add-card.component.html"),
            styles: [__webpack_require__(/*! ./add-card.component.css */ "./src/app/pages/add-card/add-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-page__wrapper-dark {\r\n    background: linear-gradient(#FC7DB8, #495CFC);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .background-gradient__circle {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n    height: 120%;\r\n  }\r\n  \r\n  .main-weather__card-dark {\r\n    background-color: white;\r\n    height: 85%;\r\n    width: 60%;\r\n    border-radius: 1rem;\r\n    position: relative;\r\n    z-index: 3;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 0.5fr 1.25fr;\r\n    justify-items: center;\r\n  }\r\n  \r\n  .card-header__container-dark {\r\n    width: 100%;\r\n    max-height: 20rem;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .back__button {\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 2.25rem;\r\n    width: 5rem;\r\n    cursor: pointer;\r\n    z-index: 3;\r\n  }\r\n  \r\n  .city__illustration {\r\n    width: 100%;\r\n    border-radius: 1rem 1rem 0 0;\r\n    position: relative;\r\n  }\r\n  \r\n  .header-content__wrapper {\r\n    position: absolute;\r\n    z-index: 2;\r\n    color: white;\r\n    top: 0;\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .temperature__text {\r\n    font-size: 6rem;\r\n    letter-spacing: 0.75rem;\r\n  }\r\n  \r\n  .city-name__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-bottom: 25%;\r\n  }\r\n  \r\n  .city-name__underline {\r\n    background: transparent;\r\n    border-radius: 5px;\r\n    height: 5px;\r\n    box-shadow: 0 3rem 0 0 #ffffff;\r\n  }\r\n  \r\n  .city-name__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.3rem;\r\n    font-size: 1.75rem;\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  .today-weather__container {\r\n    align-self: center;\r\n    justify-self: center;\r\n    display: grid;\r\n    width: 100%;\r\n    grid-template-rows: 3fr 1fr;\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n    grid-gap: 2rem;\r\n  }\r\n  \r\n  .temp-state__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: column;\r\n  }\r\n  \r\n  .weather-state__text {\r\n    letter-spacing: 0.5rem;\r\n    font-size: 1.15rem;\r\n    text-transform: uppercase;\r\n    margin-top: 0.25rem;\r\n  }\r\n  \r\n  .hum-wind__container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -4rem;\r\n  }\r\n  \r\n  .hum-wind__separator {\r\n    margin: 0 2rem;\r\n    width: 2px;\r\n    height: 2.5rem;\r\n    background-color: white;\r\n  }\r\n  \r\n  .hum__text, .wind__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    font-size: 0.8rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .hum__container, .wind__container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  /*\r\n  ================\r\n       BODY\r\n  ================\r\n  */\r\n  \r\n  .body-content__wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1.75fr;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    box-sizing: border-box;\r\n    grid-column-gap: 1rem;\r\n    width: 100%;\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .forecast__container {\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    align-self: center;\r\n    justify-self: center;\r\n  }\r\n  \r\n  .twitter-feed__container {\r\n    margin-top: 1rem;\r\n    width: 100%;\r\n  }\r\n  \r\n  .twitter-feed__text {\r\n    color: #0c1066;\r\n    font-size: 1.25rem;\r\n  }\r\n  \r\n  .twitter__icon {\r\n    width: 1.5rem;\r\n  }\r\n  \r\n  .twitter-feed-tag__text {\r\n    font-size: 0.85rem;\r\n    color: #5f84fb;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .twitter-feed__header {\r\n    display: grid;\r\n    grid-template-rows: 2rem;\r\n    grid-template-columns: 0.5fr 1.5fr 1fr;\r\n    align-items: center;\r\n    justify-items: center;\r\n    width: 100%;\r\n  }\r\n  \r\n  .day-weather__container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    margin: 2rem 1.5rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .day-name__text {\r\n    font-size: 1.5rem;\r\n    color: #39437a;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  .forecast-condition__icon {\r\n    height: 4rem;\r\n  }\r\n  \r\n  .day-temp__text {\r\n    font-size: 1.85rem;\r\n    color: #0c1066;\r\n    letter-spacing: 0.25rem;\r\n    margin: 0.75rem 0;\r\n    text-align: center;\r\n    padding-left: 0.35rem;\r\n  }\r\n  \r\n  .day-state__text {\r\n  \r\n    font-size: 0.65rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    color: #2B244D;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osTUFBTTtJQUNOLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2QsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBOzs7O0dBSUM7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXBhZ2VfX3dyYXBwZXItZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZDN0RCOCwgIzQ5NUNGQyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuYmFja2dyb3VuZC1ncmFkaWVudF9fY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMjAlO1xyXG4gIH1cclxuICBcclxuICAubWFpbi13ZWF0aGVyX19jYXJkLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMS4yNWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXJfX2NvbnRhaW5lci1kYXJrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMjByZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuYmFja19fYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDIuMjVyZW07XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXR5X19pbGx1c3RyYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnRfX3dyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRlbXBlcmF0dXJlX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2l0eS1uYW1lX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXR5LW5hbWVfX3VuZGVybGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcmVtIDAgMCAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2l0eS1uYW1lX190ZXh0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50b2RheS13ZWF0aGVyX19jb250YWluZXIge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAudGVtcC1zdGF0ZV9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlci1zdGF0ZV9fdGV4dCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5odW0td2luZF9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cmVtO1xyXG4gIH1cclxuICBcclxuICAuaHVtLXdpbmRfX3NlcGFyYXRvciB7XHJcbiAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuaHVtX190ZXh0LCAud2luZF9fdGV4dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmh1bV9fY29udGFpbmVyLCAud2luZF9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICA9PT09PT09PT09PT09PT09XHJcbiAgICAgICBCT0RZXHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICovXHJcbiAgXHJcbiAgLmJvZHktY29udGVudF9fd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS43NWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9yZWNhc3RfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50d2l0dGVyLWZlZWRfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50d2l0dGVyLWZlZWRfX3RleHQge1xyXG4gICAgY29sb3I6ICMwYzEwNjY7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50d2l0dGVyX19pY29uIHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50d2l0dGVyLWZlZWQtdGFnX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGNvbG9yOiAjNWY4NGZiO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC50d2l0dGVyLWZlZWRfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxLjVmciAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXktd2VhdGhlcl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMnJlbSAxLjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXktbmFtZV9fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjMzk0MzdhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9yZWNhc3QtY29uZGl0aW9uX19pY29uIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmRheS10ZW1wX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS44NXJlbTtcclxuICAgIGNvbG9yOiAjMGMxMDY2O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMC4zNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmRheS1zdGF0ZV9fdGV4dCB7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgIGNvbG9yOiAjMkIyNDREO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page__wrapper\" [ngClass]=\"{'details-page__wrapper-dark': darkMode}\">\r\n  <div class=\"background-gradient__circle\" [ngClass]=\"{'background-gradient__circle-dark': darkMode}\"></div>\r\n  <svg class=\"back__button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\" tabindex=\"0\">\r\n    <defs>\r\n      <style>\r\n        .a {\r\n          fill: #2b244d;\r\n        }\r\n\r\n        .b {\r\n          fill: rgba(0, 0, 0, 0);\r\n        }\r\n\r\n        .b,\r\n        .c {\r\n          stroke: #fff;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .c {\r\n          fill: none;\r\n        }\r\n\r\n        .d {\r\n          fill: #fff;\r\n          font-size: 15px;\r\n          font-family: SegoeUI, Segoe UI, sans-serif;\r\n          letter-spacing: 0.4em;\r\n        }\r\n      </style>\r\n    </defs>\r\n    <g transform=\"translate(3980)\">\r\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"></circle>\r\n      <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"80\"></line>\r\n      <line class=\"b\" transform=\"translate(123.5 164.5)\" x2=\"26\" y1=\"26\"></line>\r\n      <line class=\"c\" transform=\"translate(123.5 190.5)\" x1=\"26\" y1=\"27\"></line>\r\n      <text class=\"d\" transform=\"translate(117 274)\">\r\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n      </text>\r\n    </g>\r\n  </svg>\r\n  <section class=\"main-weather__card\">\r\n    <section class=\"card-header__container-dark\" [ngSwitch]=\"true\">\r\n      <img class=\"city__illustration\" [src]=\"cityIllustrationPath\" />\r\n      <div class=\"header-content__wrapper\">\r\n        <div class=\"today-weather__container\">\r\n          <div class=\"temp-state__container\">\r\n            <span class=\"temperature__text\">{{temp}}°</span>\r\n            <span class=\"weather-state__text\">{{state}}</span>\r\n          </div>\r\n          <div class=\"hum-wind__container\">\r\n            <div class=\"hum__container\">\r\n              <span class=\"hum__text\">humidity</span>\r\n              <span class=\"hum-value__text\">{{hum}} %</span>\r\n            </div>\r\n            <div class=\"hum-wind__separator\">&nbsp;</div>\r\n            <div class=\"wind__container\">\r\n              <span class=\"wind__text\">wind</span>\r\n              <span class=\"wind-value__text\">{{wind}} K/M</span>\r\n            </div>\r\n            <div class=\"hum-wind__separator\">&nbsp;</div>\r\n            <div class=\"wind__container\">\r\n              <span class=\"wind__text\">Min</span>\r\n              <span class=\"wind-value__text\">{{minTemp}}°</span>\r\n            </div>\r\n            <div class=\"hum-wind__separator\">&nbsp;</div>\r\n            <div class=\"wind__container\">\r\n              <span class=\"wind__text\">Max</span>\r\n              <span class=\"wind-value__text\">{{maxTemp}}°</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"city-name__container\">\r\n          <div class=\"city-name__underline\">\r\n            <span class=\"city-name__text\">{{city}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </section>\r\n</div>\r\n\r\n\r\n<!-- <app-error [message]=\"errorMessage\"></app-error> -->"

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
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
/* harmony import */ var _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/twitter/twitter.service */ "./src/app/services/twitter/twitter.service.ts");






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
        this.activeRouter.paramMap.subscribe(function (route) {
            _this.city = route.params.city;
            switch (_this.city.toLowerCase()) {
                case 'paris':
                    _this.cityIllustrationPath = '../../../assets/cities/france.svg';
                    break;
                case 'doha':
                    _this.cityIllustrationPath = '../../../assets/cities/qatar.svg';
                    break;
                case 'rabat':
                    _this.cityIllustrationPath = '../../../assets/cities/rabat.svg';
                    break;
                case 'tunis':
                    _this.cityIllustrationPath = '../../../assets/cities/tunis.svg';
                    break;
                case 'tokyo':
                    _this.cityIllustrationPath = '../../../assets/cities/japan.svg';
                    break;
                default:
                    _this.cityIllustrationPath = '../../../assets/cities/default.svg';
            }
            _this.sub1 = _this.weather.getWeatherState(_this.city).subscribe(function (state) { return _this.state = state; });
            _this.sub2 = _this.weather.getCurrentTemp(_this.city).subscribe(function (temperature) { return _this.temp = temperature; });
            _this.sub3 = _this.weather.getCurrentHum(_this.city).subscribe(function (humidity) { return _this.hum = humidity; });
            _this.sub4 = _this.weather.getCurrentWind(_this.city).subscribe(function (windspeed) { return _this.wind = windspeed; });
            _this.sub5 = _this.weather.getMaxTemp(_this.city).subscribe(function (maxTemp) { return _this.maxTemp = maxTemp; });
            _this.sub6 = _this.weather.getMinTemp(_this.city).subscribe(function (minTemp) { return _this.minTemp = minTemp; });
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        this.sub6.unsubscribe();
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pages/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_5__["TwitterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"], _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-weather-card *ngFor=\"let city of cities\" [city]=\"city?.name\"></app-weather-card>\r\n  <!-- <app-add-card></app-add-card> -->\r\n</div>"

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
            { name: 'tokyo' },
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseURL = 'https://api.openweathermap.org/data/2.5/weather?appid=1f481fd4fafd2cf9425a51599c8abd7a&units=metric&q=';
        this.appID = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appID;
    }
    WeatherService.prototype.getWeather = function (city) {
        return this.http.get("" + this.baseURL + city + "&units=metric&APPID=" + this.appID).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()));
    };
    WeatherService.prototype.getForecast = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=1f481fd4fafd2cf9425a51599c8abd7a")
            .subscribe(function (weather) {
            dataSubject.next(weather.list);
        });
        return dataSubject;
    };
    WeatherService.prototype.getWeatherState = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1f481fd4fafd2cf9425a51599c8abd7a")
            .subscribe(function (data) {
            dataSubject.next(data['weather'][0].main);
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentTemp = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1f481fd4fafd2cf9425a51599c8abd7a")
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Number(weather.main.temp)));
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentHum = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1f481fd4fafd2cf9425a51599c8abd7a")
            .subscribe(function (weather) {
            dataSubject.next(weather.main.humidity);
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentWind = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1f481fd4fafd2cf9425a51599c8abd7a")
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Math.round(weather.wind.speed)));
        });
        return dataSubject;
    };
    WeatherService.prototype.getMaxTemp = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var max;
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=1f481fd4fafd2cf9425a51599c8abd7a")
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
    WeatherService.prototype.getMinTemp = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var min;
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=1f481fd4fafd2cf9425a51599c8abd7a")
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

/***/ "./src/app/ui/weather-card/weather-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather__card {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: 1fr 1fr 1fr;\r\n\tbox-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n\tjustify-items: center;\r\n\tpadding: 2rem;\r\n\tmargin: 2rem;\r\n\twidth: 19rem;\r\n\theight: 30rem;\r\n\tcursor: pointer;\r\n\tbackground-color: white;\r\n\tborder-radius: 1.75rem;\r\n\t-webkit-animation: 1.25s ease-in-out 0ms 1 fadein;\r\n\t        animation: 1.25s ease-in-out 0ms 1 fadein;\r\n}\r\n\r\n.weather__card-dark {\r\n\tbackground: linear-gradient(to bottom, #711B86, #00057A);\r\n\tcolor: white;\r\n}\r\n\r\n.city-name__text {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 1.4rem;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.temperature-metric__text {\r\n\ttext-align: start;\r\n\tfont-size: 3rem;\r\n}\r\n\r\n.min-max__container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr;\r\n\tgrid-template-columns: 1fr 1fr;\r\n\talign-items: center;\r\n}\r\n\r\n.min__container,\r\n.max__container {\r\n\tmargin: 1rem 3rem;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.min-arrow__icon,\r\n.max-arrow__icon {\r\n\theight: 1.25rem;\r\n\tmargin: auto;\r\n}\r\n\r\n.max-arrow__icon {\r\n\tmargin-bottom: -0.05rem;\r\n}\r\n\r\n.weather-condition__text {\r\n\tdisplay: block;\r\n\tfont-size: 1rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 0.1rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.max__text {\r\n\tcolor: #FF0070;\r\n}\r\n\r\n.min__text {\r\n\tcolor: #00FF9B;\r\n}\r\n\r\n.max__text,\r\n.min__text {\r\n\tfont-size: 1rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.max-temperature__text,\r\n.min-temperature__text {\r\n\ttext-align: center;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.weather-icon__container {\r\n\twidth: 10rem;\r\n\tmargin-bottom: 2rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n.weather-icon__container>svg {\r\n\twidth: 10rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQiwrQkFBK0I7Q0FDL0IseUNBQXlDO0NBQ3pDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsaURBQXlDO1NBQXpDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLHdEQUF3RDtDQUN4RCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQiwyQkFBMkI7QUFDNUI7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VpL3dlYXRoZXItY2FyZC93ZWF0aGVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyX19jYXJkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XHJcblx0Ym94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0bWFyZ2luOiAycmVtO1xyXG5cdHdpZHRoOiAxOXJlbTtcclxuXHRoZWlnaHQ6IDMwcmVtO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG5cdGFuaW1hdGlvbjogMS4yNXMgZWFzZS1pbi1vdXQgMG1zIDEgZmFkZWluO1xyXG59XHJcblxyXG4ud2VhdGhlcl9fY2FyZC1kYXJrIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzExQjg2LCAjMDAwNTdBKTtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaXR5LW5hbWVfX3RleHQge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGVtcGVyYXR1cmUtbWV0cmljX190ZXh0IHtcclxuXHR0ZXh0LWFsaWduOiBzdGFydDtcclxuXHRmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5taW4tbWF4X19jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5taW5fX2NvbnRhaW5lcixcclxuLm1heF9fY29udGFpbmVyIHtcclxuXHRtYXJnaW46IDFyZW0gM3JlbTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxufVxyXG5cclxuLm1pbi1hcnJvd19faWNvbixcclxuLm1heC1hcnJvd19faWNvbiB7XHJcblx0aGVpZ2h0OiAxLjI1cmVtO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1heC1hcnJvd19faWNvbiB7XHJcblx0bWFyZ2luLWJvdHRvbTogLTAuMDVyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLWNvbmRpdGlvbl9fdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXhfX3RleHQge1xyXG5cdGNvbG9yOiAjRkYwMDcwO1xyXG59XHJcblxyXG4ubWluX190ZXh0IHtcclxuXHRjb2xvcjogIzAwRkY5QjtcclxufVxyXG5cclxuLm1heF9fdGV4dCxcclxuLm1pbl9fdGV4dCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1heC10ZW1wZXJhdHVyZV9fdGV4dCxcclxuLm1pbi10ZW1wZXJhdHVyZV9fdGV4dCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbl9fY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTByZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud2VhdGhlci1pY29uX19jb250YWluZXI+c3ZnIHtcclxuXHR3aWR0aDogMTByZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/weather-card/weather-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"weather__card\" (click)=\"openDetails()\" [ngClass]=\"{'weather__card-dark': darkMode}\">\r\n    <!-- Tên thành phố -->\r\n    <span class=\"city-name__text\">{{cityName}}</span>\r\n    <!-- Hình ảnh mô tả cho các trạng thái thời tiết -->\r\n    <div class=\"weather-icon__container\" [ngSwitch]=\"true\">\r\n        <svg *ngSwitchCase=\"state === 'Sunny' || state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Clouds'\" viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n                <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\"\r\n                    transform=\"translate(2354 -1633)\" />\r\n                <path fill=\"#ffde17\"\r\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                    data-name=\"Subtraction 1\" />\r\n            </g>\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Rain' || state === 'Drizzle' || state === 'Mist'\"\r\n            viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g data-name=\"Rain Icon\">\r\n                <g data-name=\"Water Drops\">\r\n                    <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\" />\r\n                    <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\" />\r\n                </g>\r\n            </g>\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Haze' || state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n            <path fill=\"#12bcff\"\r\n                d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\" />\r\n        </svg>\r\n        <svg *ngSwitchCase=\"state === 'Storm' || state === 'Thunderstorm'\" viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                    transform=\"translate(1529 490.4)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                    transform=\"translate(1569.6 467.8)\" />\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-99\" data-name=\"Ellipse 16\"\r\n                    transform=\"translate(1618.9 476.8)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                    transform=\"translate(1631.8 450)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                    transform=\"translate(1687.1 477.5)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                    transform=\"translate(1709.6 507.3)\" />\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-99\" data-name=\"Ellipse 20\"\r\n                    transform=\"translate(1639.6 500.1)\" />\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                    transform=\"translate(1569.6 507.3)\" />\r\n                <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\" />\r\n                <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                    data-name=\"Path 60\" />\r\n            </g>\r\n        </svg>\r\n    </div>\r\n    <!-- Hiển thị nhiệt độ và trạng thái thời tiết -->\r\n    <div>\r\n        <span class=\"temperature-metric__text\">{{ temp }}°</span>\r\n        <span class=\"weather-condition__text\">{{ state }}</span>\r\n    </div>\r\n    <!-- Nhiệt độ thấp nhất và cao nhất -->\r\n    <section class=\"min-max__container\">\r\n        <div class=\"min__container\">\r\n            <svg class=\"min-arrow__icon\" viewBox=\"188.5 807 21 21\">\r\n                <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" data-name=\"Min Arrow\" />\r\n            </svg>\r\n\r\n            <span class=\"min-temperature__text\">{{ minTemp }}</span>\r\n            <span class=\"min__text\">Min</span>\r\n        </div>\r\n        <div class=\"max__container\">\r\n            <svg class=\"max-arrow__icon\" viewBox=\"449.5 820 21 21\">\r\n                <path fill=\"red\" d=\"M449.5 830.5h21L460 820z\" data-name=\"Max Arrow\" />\r\n            </svg>\r\n            <span class=\"max-temperature__text\">{{ maxTemp }}</span>\r\n            <span class=\"max__text\">Max</span>\r\n        </div>\r\n    </section>\r\n</section>"

/***/ }),

/***/ "./src/app/ui/weather-card/weather-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.ts ***!
  \***********************************************************/
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var WeatherCardComponent = /** @class */ (function () {
    function WeatherCardComponent(weather, router, ui) {
        this.weather = weather;
        this.router = router;
        this.ui = ui;
        this.cityStored = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(WeatherCardComponent.prototype, "city", {
        set: function (city) {
            var _this = this;
            this.cityName = city;
            this.weather.getWeather(city)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (payload) {
                _this.state = payload.weather[0].main;
                _this.temp = Math.ceil(payload.main.temp);
            }, function (err) {
                _this.errorMessage = err.error.message;
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 3000);
            });
            this.weather.getForecast(city)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (payload) {
                _this.maxTemp = Math.round(payload[0].main.temp);
                _this.minTemp = Math.round(payload[0].main.temp);
                for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
                    var res = payload_1[_i];
                    if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
                        _this.maxTemp = res.main.temp > _this.maxTemp ? Math.round(res.main.temp) : _this.maxTemp;
                        _this.minTemp = res.main.temp < _this.minTemp ? Math.round(res.main.temp) : _this.minTemp;
                    }
                }
            }, function (err) {
                _this.errorMessage = err.error.message;
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 3000);
            });
        },
        enumerable: true,
        configurable: true
    });
    WeatherCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub1 = this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
    };
    WeatherCardComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    WeatherCardComponent.prototype.openDetails = function () {
        if (!this.addMode) {
            this.router.navigateByUrl('/details/' + this.cityName);
        }
    };
    WeatherCardComponent.prototype.addCity = function () {
        // this.fb.addCity(this.cityName).subscribe(() => {
        //   this.cityName = null;
        //   this.maxTemp = null;
        //   this.minTemp = null;
        //   this.state = null;
        //   this.temp = null;
        //   this.cityAdded = true;
        //   this.cityStored.emit();
        //   setTimeout(() => this.cityAdded = false, 2000);
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], WeatherCardComponent.prototype, "city", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherCardComponent.prototype, "addMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherCardComponent.prototype, "cityStored", void 0);
    WeatherCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-card',
            template: __webpack_require__(/*! ./weather-card.component.html */ "./src/app/ui/weather-card/weather-card.component.html"),
            styles: [__webpack_require__(/*! ./weather-card.component.css */ "./src/app/ui/weather-card/weather-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]])
    ], WeatherCardComponent);
    return WeatherCardComponent;
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
    appID: '',
    gKey: '',
    config: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
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

module.exports = __webpack_require__(/*! C:\Users\DinhNV\Desktop\minimus2\angular-minimus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map