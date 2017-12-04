webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background: #2c3e50 !important;\n    border-bottom: 0.5px solid #d6ac4a !important;\n}\n\n.nav-link {\n    color: white !important;\n}\n.nav-link.active {\n    color: #d6ac4a !important;\n}\n\n.content {\n    margin-top: 70px;\n}\n\n.sign-in {\n    color: #d6ac4a;\n    border-color: #d6ac4a;\n}\n\n.sign-in:hover {\n    color: #fff;\n    background-color: #d6ac4a;\n    border-color: #d6ac4a;\n}\n\n.logo {\n    height: 70px;\n}\n\n.navbar-toggler {\n    margin-top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  <a [routerLink]=\"['home']\" class=\"navbar-brand\"><img class=\"logo\" src=\"./assets/logo/opengrid-logo-white.png\"></a>\n\n  <div class=\"navbar-collapse collapse\" id=\"navbarsExampleDefault\" aria-expanded=\"true\" >\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['home']\" routerLinkActive=\"active\" class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['about']\" routerLinkActive=\"active\" class=\"nav-link\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['get-involved']\" routerLinkActive=\"active\" class=\"nav-link\">Get Involved</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['blog']\" routerLinkActive=\"active\" class=\"nav-link\">Blog</a>\n      </li>\n      <!--li class=\"nav-item\">\n        <a [routerLink]=\"['live']\" routerLinkActive=\"active\" class=\"nav-link\">Live</a>\n      </li-->\n    </ul>\n    <div class=\"my-2 my-lg-0\">\n      <a href=\"https://github.com/opengridcc/opengrid\" class=\"btn sign-in btn-outline-info my-2 my-sm-0\" style=\"margin-right: 20px\">Github</a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row\" style=\"margin-top: 95px !important\">\n\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_sticky__ = __webpack_require__("../../../../ng2-sticky/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_handy_syntax_highlighter__ = __webpack_require__("../../../../ng2-handy-syntax-highlighter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_handy_syntax_highlighter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_handy_syntax_highlighter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_gallery_item_gallery_item_component__ = __webpack_require__("../../../../../src/components/gallery-item/gallery-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_involve_page_involve_page_component__ = __webpack_require__("../../../../../src/pages/involve-page/involve-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_analysis_page_analysis_page_component__ = __webpack_require__("../../../../../src/pages/analysis-page/analysis-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_page_about_page_component__ = __webpack_require__("../../../../../src/pages/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_live_page_live_page_component__ = __webpack_require__("../../../../../src/pages/live-page/live-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_blog_page_blog_page_component__ = __webpack_require__("../../../../../src/pages/blog-page/blog-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';










var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'get-involved', component: __WEBPACK_IMPORTED_MODULE_10__pages_involve_page_involve_page_component__["a" /* InvolvePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__pages_about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_14__pages_blog_page_blog_page_component__["a" /* BlogPageComponent */] },
    { path: 'live', component: __WEBPACK_IMPORTED_MODULE_13__pages_live_page_live_page_component__["a" /* LivePageComponent */] },
    { path: 'analysis/:id', component: __WEBPACK_IMPORTED_MODULE_11__pages_analysis_page_analysis_page_component__["a" /* AnalysisPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_gallery_item_gallery_item_component__["a" /* GalleryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_involve_page_involve_page_component__["a" /* InvolvePageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_analysis_page_analysis_page_component__["a" /* AnalysisPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_live_page_live_page_component__["a" /* LivePageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_blog_page_blog_page_component__["a" /* BlogPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ng2_sticky__["Ng2StickyModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_handy_syntax_highlighter__["Ng2HandySyntaxHighlighterModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/gallery-item/gallery-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-wrapper {\n    width: 100%;\n    position: relative;\n    margin: 10px 0;\n    border: 2px solid #2c3e50;\n    cursor: pointer;\n}\n\n.title-wrapper {\n    padding: 10px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(44, 62, 80, 0.8);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    opacity: 0;\n}\n\n.title-wrapper:hover {\n    opacity: 1;\n}\n.title-wrapper:active {\n    opacity: 1;\n}\n\n.title {\n    text-align: center;\n    color: white;\n    font-size: 1.2em;\n}\n\nimg {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/gallery-item/gallery-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-wrapper\">\n  <img [src]=\"'./assets/analyses-img/' + image\" [alt]=\"name\">\n  <div class=\"title-wrapper\">\n    <div class=\"title\">\n      {{name}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/components/gallery-item/gallery-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryItemComponent = (function () {
    function GalleryItemComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    GalleryItemComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.element.nativeElement, 'height', this.element.nativeElement.width);
    };
    return GalleryItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GalleryItemComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GalleryItemComponent.prototype, "name", void 0);
GalleryItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery-item',
        template: __webpack_require__("../../../../../src/components/gallery-item/gallery-item.component.html"),
        styles: [__webpack_require__("../../../../../src/components/gallery-item/gallery-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], GalleryItemComponent);

var _a, _b;
//# sourceMappingURL=gallery-item.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/pages/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-pane {\n    background: #f5f2f0;\n    padding: 1em;\n    margin: .5em 0;\n    color: #2c3e50;\n    text-shadow: 0 1px white;\n    text-align: left;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n    -moz-tab-size: 4;\n      -o-tab-size: 4;\n         tab-size: 4;\n    -webkit-hyphens: none;\n        -ms-hyphens: none;\n            hyphens: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 20px !important\">\n  <div class='col-sm-12 col-md-10 offset-md-1'>\n    <div class=\"about-pane\">\n      <div class=\"row\">\n        <h3>The OpenGrid project</h3>\n      </div>\n      <div class=\"row\">\n        <p>\n          OpenGrid is a collaborative project about energy and building data mining and automation. We believe there is a need for\n          open source tools to analyse utility data, smart meter output, comfort measurements etc. and to gain knowledge\n          from these data streams. This knowledge can then be used to understand consumption patterns, realize energy savings,\n          build smart automation applications, enable demand response, ...\n        </p>\n        <p>\n          The project has two main pillars. The first one consists of brainstorming about possible analyses while the second one focusses\n          on building a python library providing these analyses in an easy fashion.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" style=\"margin-top: 20px !important\">\n  <div class='col-sm-12 col-md-10 offset-md-1'>\n    <div class=\"about-pane\">\n      <div class=\"row\">\n        <h3>Installation</h3>\n      </div>\n      <div class=\"row\">\n        <handy-syntax-highlighter [language]=\"'bash'\" [content]=\"'pip install opengrid'\"></handy-syntax-highlighter>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/pages/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_bash__ = __webpack_require__("../../../../prismjs/components/prism-bash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_bash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_bash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-page',
        template: __webpack_require__("../../../../../src/pages/about-page/about-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/about-page/about-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "../../../../../src/pages/analysis-page/analysis-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sub-header {\n    padding-top: 60px;\n    padding-bottom: 40px;\n    width: 100%;\n    background: #2c3e50 !important;\n    color: white;\n    text-align: center;\n    text-shadow: 0px 0px 1px #d6ac4a;\n    position: relative;\n    margin-bottom: 30px; \n}\n\n.dropdown-container {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%; /* Bottom of button */\n  right: 0;\n  border: 0.5px solid #2c3e50;\n}\n\n.dropdown-toggle {\n    background: transparent;\n    color: white;\n    box-shadow: none;\n    outline: 0 none;\n    cursor: pointer;\n}\n\n.dropdown-item {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 0.9em;\n    color: #2c3e50;\n    text-shadow: none;\n    cursor: pointer;\n}\n.dropdown-item:hover {\n    background: #f5f2f0;\n    color: #07a;\n}\n.dropdown-item.active {\n    background: #f5f2f0;\n    color: #07a;\n}\n\n.steps {\n    position: absolute;\n    bottom: -15px;\n    width: 100%;\n}\n\n.btn-group > .btn {\n    color: #2c3e50;\n    background: #f5f2f0;\n    border-bottom: 0.5px solid #2c3e50;\n    box-shadow: none;\n    outline: 0 none;\n}\n.btn-group > .btn:first-child {\n    border-left: 0.5px solid #2c3e50;\n}\n.btn-group > .btn:last-child {\n    border-right: 0.5px solid #2c3e50;\n}\n\n.btn-group > .btn.active {\n    background: #d6ac4a;\n}\n\ntr {\n    border-bottom: 0.5px solid slategray;\n}\n\nth, td {\n    padding: 15px;\n    text-align: center;\n}\n\ntr:first-child {\n    color: #07a !important;\n}\n\ntable {\n    border-collapse: collapse;\n    margin:10px;\n}\n\n.table-number {\n    color: #905;\n}\n\n.table-timestamp {\n    color: #a67f59;\n}\n\n.download-link {\n    position: absolute;\n    top: 15px;\n    right: 20px;\n}\n\n.download-link > a {\n    cursor: pointer;\n    padding-right: 5px;\n    color: #2c3e50;\n    font-size: 2rem;\n}\n\n.download-link > a:hover {\n    color: #07a;\n}\n\n.description {\n    background: #f5f2f0;\n    padding: 1em;\n    margin: .5em 0;\n    color: #2c3e50;\n    text-shadow: 0 1px white;\n    text-align: left;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n    -moz-tab-size: 4;\n      -o-tab-size: 4;\n         tab-size: 4;\n    -webkit-hyphens: none;\n        -ms-hyphens: none;\n            hyphens: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/analysis-page/analysis-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\n  <div class=\"sub-header\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"dropdown-container\">\n          <h3 *ngIf=\"selectedAnalysis\">\n            {{selectedAnalysis.name}}\n            <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle btn-xs\" type=\"button\" aria-expanded=\"true\">\n              <span class=\"caret\"></span>\n            </button>\n            <ul *ngIf=\"analyses\" class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu3\">\n              <li [ngClass]=\"{'active': analysis.id == selectedAnalysis.id}\" *ngFor=\"let analysis of analyses\" class=\"dropdown-item\" [routerLink]=\"['/analysis', analysis.id]\"\n                (click)=\"reload()\">\n                <a>{{analysis.name}}</a>\n              </li>\n            </ul>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"steps\">\n      <div class=\"btn-group\" role=\"group\">\n        <button [ngClass]=\"{'active': step == 'data'}\" (click)=\"step = 'data'\" type=\"button\" class=\"btn btn-default\">Data</button>\n        <button [ngClass]=\"{'active': step == 'code'}\" (click)=\"step = 'code'\" type=\"button\" class=\"btn btn-default\">Code</button>\n        <button [ngClass]=\"{'active': step == 'result'}\" (click)=\"step = 'result'\" type=\"button\" class=\"btn btn-default\">Result</button>\n      </div>\n    </div>\n  </div>\n\n  <div class='row'>\n    <div class='col-sm-12 col-md-10 offset-md-1' [ngSwitch]=\"step\">\n\n      <div *ngSwitchCase=\"'data'\" style=\"position: relative\">\n        <div class=\"download-link hidden-sm-down\">\n          <a target=\"_self\" [href]=\"'./assets/analyses-data/' + selectedAnalysis.id + '.csv'\" [download]=\"selectedAnalysis.id + '-data.csv'\">\n            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n        <pre class=\"language-python\">\n          <table>\n            <tr *ngFor=\"let x of data\">\n              <td [ngClass]=\"{'table-number': isNumber(y), 'table-timestamp': isValidDate(y)}\" *ngFor=\"let y of x\">{{ y }}</td>\n            </tr>\n          </table>\n        </pre>\n      </div>\n\n      <div *ngSwitchCase=\"'code'\" style=\"position: relative\">\n        <div class=\"download-link hidden-sm-down\">\n          <a target=\"_self\" [href]=\"'./assets/analyses-code/' + selectedAnalysis.id + '.py'\" [download]=\"selectedAnalysis.id + '-code.py'\">\n            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n          </a>\n          <a>\n            <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n        <handy-syntax-highlighter *ngIf=\"code\" [language]=\"'python'\" [content]=\"code\"></handy-syntax-highlighter>\n      </div>\n\n      <div *ngSwitchCase=\"'result'\" class=\"row\">\n        <div class=\"col-md-12 col-lg-4\">\n          <img style=\"width: 100%\" [src]=\"'./assets/analyses-result/img/' + selectedAnalysis.result.image\">\n        </div>\n        <div class=\"col-md-12 col-lg-8 description\">\n          {{ description }}\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/pages/analysis-page/analysis-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_python__ = __webpack_require__("../../../../prismjs/components/prism-python.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_python___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_python__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnalysisPageComponent = (function () {
    function AnalysisPageComponent(route, el, http) {
        this.route = route;
        this.el = el;
        this.http = http;
        this.loaded = false;
        this.step = 'result';
    }
    AnalysisPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            /**
           * Get all the analyses
           */
            _this.http
                .get('./assets/analyses/analyses.json')
                .map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.analyses = res;
                for (var i = 0; i < _this.analyses.length; i++) {
                    if (_this.analyses[i].id == _this.id) {
                        _this.selectedAnalysis = _this.analyses[i];
                        _this.loaded = true;
                        break;
                    }
                }
            }, function (error) { return console.log(error); });
            /**
             * Get the analysis data
             */
            _this.http
                .get('./assets/analyses-data/' + _this.id + '.csv')
                .map(function (res) { return res.text(); }).subscribe(function (res) {
                _this.displayTable(res);
            }, function (error) { return console.log(error); });
            /**
             * Get the analysis code
             */
            _this.http
                .get('./assets/analyses-code/' + _this.id + '.py')
                .map(function (res) { return res.text(); }).subscribe(function (res) {
                _this.code = res;
            }, function (error) { return console.log(error); });
            /**
            * Get the analysis result description
            */
            _this.http
                .get('./assets/analyses-result/description/' + _this.id + '.txt')
                .map(function (res) { return res.text(); }).subscribe(function (res) {
                _this.description = res;
            }, function (error) { return console.log(error); });
        });
    };
    AnalysisPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AnalysisPageComponent.prototype.displayTable = function (allText) {
        // split content based on new line
        var allTextLines = allText.split("\n");
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                var tarr = [];
                for (var j = 0; j < headers.length; j++) {
                    i < 11 ? tarr.push(data[j]) : tarr.push('...');
                }
                lines.push(tarr);
            }
            if (i == 11) {
                break;
            }
        }
        this.data = lines;
    };
    ;
    AnalysisPageComponent.prototype.isNumber = function (text) {
        return parseFloat(text);
    };
    AnalysisPageComponent.prototype.isValidDate = function (dateString) {
        var minDate = new Date('1970-01-01 00:00:01');
        var maxDate = new Date('2100-01-01 00:00:01');
        var date = new Date(dateString);
        return date > minDate && date < maxDate;
    };
    AnalysisPageComponent.prototype.reload = function () {
        this.id = null;
        this.sub = null;
        this.code = null;
        this.data = null;
        this.ngOnInit();
    };
    return AnalysisPageComponent;
}());
AnalysisPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-analysis-page',
        template: __webpack_require__("../../../../../src/pages/analysis-page/analysis-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/analysis-page/analysis-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
], AnalysisPageComponent);

var _a, _b, _c;
//# sourceMappingURL=analysis-page.component.js.map

/***/ }),

/***/ "../../../../../src/pages/blog-page/blog-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/blog-page/blog-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/pages/blog-page/blog-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPageComponent = (function () {
    function BlogPageComponent() {
    }
    BlogPageComponent.prototype.ngOnInit = function () {
    };
    return BlogPageComponent;
}());
BlogPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-page',
        template: __webpack_require__("../../../../../src/pages/blog-page/blog-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/blog-page/blog-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogPageComponent);

//# sourceMappingURL=blog-page.component.js.map

/***/ }),

/***/ "../../../../../src/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sub-header {\n    padding-top: 60px;\n    padding-bottom: 30px;\n    width: 100%;\n    background: #2c3e50 !important;\n    color: white;\n    text-align: center;\n    text-shadow: 0px 0px 1px #d6ac4a;\n}\n\n.version {\n    font-size: 0.5em;\n    top: -1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-header\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>OpenGrid<sup class=\"version\">v2.0</sup></h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10 offset-sm-1 col-md-6 offset-md-3\">\n      <p>\n        An opensource python library for energy consumption analyses.\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" style=\"margin-top: 10px !important\">\n  <div class='col-sm-12 col-md-4 col-lg-2' *ngFor=\"let analyse of analyses\">\n    <app-gallery-item [routerLink]=\"['/analysis', analyse.id]\" [image]=\"analyse.image\" [name]=\"analyse.name\"></app-gallery-item>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(http) {
        var _this = this;
        this.http = http;
        this.http
            .get('./assets/analyses/analyses.json')
            .map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.analyses = res;
            console.log(_this.analyses);
        }, function (error) { return console.log(error); });
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/pages/involve-page/involve-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".involve-pane {\n    background: #f5f2f0;\n    padding: 1em;\n    margin: .5em 0;\n    color: #2c3e50;\n    text-shadow: 0 1px white;\n    text-align: left;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n    -moz-tab-size: 4;\n      -o-tab-size: 4;\n         tab-size: 4;\n    -webkit-hyphens: none;\n        -ms-hyphens: none;\n            hyphens: none;\n}\n\n.btn-involve {\n    background: #d6ac4a;\n    border: 3px solid #d6ac4a;\n    color: white;\n}\n\n.btn-involve:hover {\n    border-color: #f5f2f0;\n}\n\np > a {\n    color: #07a;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/involve-page/involve-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 20px !important\">\n  <div class='col-sm-12 col-md-5 offset-md-1'>\n    <div class=\"involve-pane\">\n      <div class=\"row\">\n        <h3>Big Ideas</h3>\n      </div>\n      <div class=\"row\">\n        <p>\n          Are you intersested in sustainability and energy efficeïncy? Do you believe knowledge can be gained from smart meter outpu\n          and comfort measurements through detailed analyses? Do you want to discuss possible graphs, analyses or website\n          features?\n        </p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <a href=\"https://groups.google.com/forum/#!forum/opengrid-private\" target=\"_blank\">\n            <button type=\"button\" class=\"btn btn-involve float-right\">Join the discussion</button>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class='col-sm-12 col-md-5'>\n    <div class=\"involve-pane\">\n      <div class=\"row\">\n        <h3>Development</h3>\n      </div>\n      <div class=\"row\">\n        <p>\n          Are you a developer with a passion for opensource software? Do you believe data mining, automation and detailed analyses\n          can contribute to energy savings? Do you want to contribute to the OpenGrid project by writing new or improving\n          existing analyses?\n        </p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <a href=\"https://github.com/opengridcc/opengrid\" target=\"_blank\">\n            <button type=\"button\" class=\"btn btn-involve float-right\">Visit GitHub</button>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" style=\"margin-top: 15px !important\">\n  <div class='col-12 col-md-10 offset-md-1'>\n    <div class=\"involve-pane\">\n      <div class=\"row\">\n        <h3>Share your data</h3>\n      </div>\n      <div class=\"row\">\n        <p>\n          Do you have a smart meter at home and do you want to support the project? By sharing your consumption data with us, we can\n          better test our analyses. There are two ways for sharing your data. Either create a free account on\n          <a href=\"https://www.energieid.be\" target=\"_blank\"> EnergieID </a> and share your data with the OpenGrid integration.\n          Or if you have a <a href=\"https://www.flukso.net\" target=\"_blank\"> Flukso meter </a> fill in the OpenGrid form\n          by clicking the button below.\n        </p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <a href=\"https://docs.google.com/forms/d/e/1FAIpQLScaWGmG2EnBNVtF3VDu5gGs4casSDf5CDuKXy1Dx-zMu2p7xg/viewform?embedded=false\"\n            target=\"_blank\">\n            <button type=\"button\" class=\"btn btn-involve float-right\">Share your Flukso data</button>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/pages/involve-page/involve-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvolvePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvolvePageComponent = (function () {
    function InvolvePageComponent() {
    }
    InvolvePageComponent.prototype.ngOnInit = function () {
    };
    return InvolvePageComponent;
}());
InvolvePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-involve-page',
        template: __webpack_require__("../../../../../src/pages/involve-page/involve-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/involve-page/involve-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InvolvePageComponent);

//# sourceMappingURL=involve-page.component.js.map

/***/ }),

/***/ "../../../../../src/pages/live-page/live-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/live-page/live-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  live-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/pages/live-page/live-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivePageComponent = (function () {
    function LivePageComponent() {
    }
    LivePageComponent.prototype.ngOnInit = function () {
    };
    return LivePageComponent;
}());
LivePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-live-page',
        template: __webpack_require__("../../../../../src/pages/live-page/live-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/live-page/live-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LivePageComponent);

//# sourceMappingURL=live-page.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map