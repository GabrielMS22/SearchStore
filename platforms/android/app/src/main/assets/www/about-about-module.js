(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
/* harmony import */ var _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../expandable/expandable.component */ "./src/app/expandable/expandable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"] }])
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_6__["ExpandableComponent"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button goBack defaultHref='/Departamentos'></ion-back-button>\n    </ion-buttons>\n    <ion-title> Preguntas frecuentes </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <h3>FAQ</h3>\n\n<a  id='how1' (click)=\"faqSHOW(1)\" class='button faq' >¿Cómo utilizar la app?</a>\n<div class='animated delay-0.4s bounceInRight' id=\"myDIV1\" style='display:none;'>\n  <img src='assets/videos/howto.gif'>\n  <br/><br />\n\n  <a (click)='cerrarFaq(1)' class='cerrarFaq'>Cerrar</a>\n</div>\n<a id='how2' (click)=\"faqSHOW(2)\" class='button faq'>¿Tiene algun costo?</a>\n<div class='animated delay-0.4s bounceInRight' id=\"myDIV2\" style='display:none;'>\n  No <br/><br />\n\n\n<a  (click)='cerrarFaq(2)' class='cerrarFaq'>Cerrar</a>\n</div>\n<a id='how3' (click)=\"faqSHOW(3)\" class='button faq'>¿Cómo puedo compartir la app con mis amigos?</a>\n<div class='animated delay-0.4s bounceInRight' id=\"myDIV3\" style='display:none;'>\n  <img src='assets/videos/social.gif'>\n   <br/><br />\n\n  <a (click)='cerrarFaq(3)' class='cerrarFaq'>Cerrar</a>\n</div>\n\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faq {\n  color: #212121;\n  margin-top: 30px;\n  display: block;\n  cursor: pointer;\n  padding: 10px;\n  opacity: 1;\n  transition: 1s linear !important;\n  border-radius: 15px 5px; }\n\n.cerrarFaq {\n  color: #212121;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 10px;\n  border-radius: 15px 5px; }\n\na {\n  background-color: rgba(104, 180, 245, 0.5); }\n\nimg {\n  width: 380px;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcVUFCQ1xcU2VhcmNoU3RvcmVcXFNlYXJjaFN0b3JlL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsV0FBVTtFQUNWLGlDQUFnQztFQUNoQyx3QkFBdUIsRUFFMUI7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGNBQWE7RUFDYix3QkFBdUIsRUFFMUI7O0FBRUQ7RUFDSywyQ0FBd0MsRUFDNUM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXF7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDVweDtcclxuICAgXHJcbn1cclxuXHJcbi5jZXJyYXJGYXF7XHJcbiAgICBjb2xvcjojMjEyMTIxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggNXB4O1xyXG5cclxufVxyXG5cclxuYXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwxODAsMjQ1LDAuNTApO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    //Queda a implementar con render y element si queda tiempo
    //Sin embargo, los proximos componentes creados se utilizara Renderer y ElementRef
    function AboutPage(render, element) {
        this.render = render;
        this.element = element;
    }
    AboutPage.prototype.faqSHOW = function (id) {
        document.getElementById("myDIV1").style.display = 'none';
        document.getElementById("myDIV2").style.display = 'none';
        document.getElementById("myDIV3").style.display = 'none';
        document.getElementById("how1").style.opacity = '1';
        document.getElementById("how2").style.opacity = '1';
        document.getElementById("how3").style.opacity = '1';
        document.getElementById('how' + id).style.opacity = '0';
        var x = document.getElementById("myDIV" + id);
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    };
    AboutPage.prototype.cerrarFaq = function (id) {
        document.getElementById("myDIV" + id).style.display = 'none';
        document.getElementById("how" + id).style.opacity = '1';
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/expandable/expandable.component.html":
/*!******************************************************!*\
  !*** ./src/app/expandable/expandable.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper style='display:block'>\n  <h1>Vuelve pronto!</h1>\n</div>"

/***/ }),

/***/ "./src/app/expandable/expandable.component.scss":
/*!******************************************************!*\
  !*** ./src/app/expandable/expandable.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/expandable/expandable.component.ts":
/*!****************************************************!*\
  !*** ./src/app/expandable/expandable.component.ts ***!
  \****************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent() {
    }
    ExpandableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'expandable',
            template: __webpack_require__(/*! ./expandable.component.html */ "./src/app/expandable/expandable.component.html"),
            styles: [__webpack_require__(/*! ./expandable.component.scss */ "./src/app/expandable/expandable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableComponent);
    return ExpandableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map