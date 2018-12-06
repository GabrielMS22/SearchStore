(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["departamentos-departamentos-module"],{

/***/ "./src/app/departamentos/departamentos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/departamentos/departamentos.module.ts ***!
  \*******************************************************/
/*! exports provided: DepartamentosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentosPageModule", function() { return DepartamentosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _departamentos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departamentos.page */ "./src/app/departamentos/departamentos.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _departamentos_page__WEBPACK_IMPORTED_MODULE_5__["DepartamentosPage"]
    }
];
var DepartamentosPageModule = /** @class */ (function () {
    function DepartamentosPageModule() {
    }
    DepartamentosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_departamentos_page__WEBPACK_IMPORTED_MODULE_5__["DepartamentosPage"]]
        })
    ], DepartamentosPageModule);
    return DepartamentosPageModule;
}());



/***/ }),

/***/ "./src/app/departamentos/departamentos.page.html":
/*!*******************************************************!*\
  !*** ./src/app/departamentos/departamentos.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Departamentos </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-fab class='animated infinite pulse' vertical=\"bottom\" horizontal=\"start\" id=\"fab4\" slot=\"fixed\">\n  <ion-fab-button mini (click)=\"clickMainFAB('fab4')\" id='fabBtn' [color]=\"selectedFab == true ? 'danger' : 'tertiary' \">\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"end\">\n    <ion-fab-button color='tertiary' (click)=\"openSocial('facebook', 'fab4')\">\n      <ion-icon name=\"logo-facebook\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button color='secondary' (click)=\"openSocial('twitter', 'fab4')\">\n      <ion-icon name=\"logo-twitter\"></ion-icon>\n    </ion-fab-button>\n   \n    <ion-fab-button color='medium' (click)=\"openSocial('instagram', 'fab4')\">\n      <ion-icon name=\"logo-instagram\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n  <h1 class='center'> Departamento</h1>\n    <ion-slides  pager=\"true\">\n      <ion-slide *ngFor='let departamento of Departamentos' style='display: block'>\n        \n        <ion-spinner name=\"dots\" color='tertiary'></ion-spinner>\n\n        <ion-item>\n          <h3> {{ departamento.Nombre }} </h3><br />\n          <ion-icon name=\"locate\" slot=\"end\" color='primary'></ion-icon>\n\n          <ion-button href='/tabs/tabs/{{departamento.id}}/(home:home/{{departamento.id}})' shape='round' color='tertiary' slot=\"end\"> Ubicación</ion-button>\n\n        </ion-item>\n        <img [ngClass]=\"{'animated rubberBand ': kappa==true}\" src='/{{departamento.img}}' style='width:430px; height: 310px;'>\n        <br />\n\n\n      </ion-slide>\n    </ion-slides>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/departamentos/departamentos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/departamentos/departamentos.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containSlide {\n  margin: auto; }\n\n.slide-zoom {\n  height: 100%; }\n\n.fab {\n  color: yellow; }\n\nion-slides {\n  --bullet-background-active: var(--ion-color-tertiary) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0YW1lbnRvcy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxVQUJDXFxTZWFyY2hTdG9yZVxcU2VhcmNoU3RvcmUvc3JjXFxhcHBcXGRlcGFydGFtZW50b3NcXGRlcGFydGFtZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0EsYUFBWSxFQUNYOztBQUVEO0VBQ0csY0FBYSxFQUNmOztBQUVEO0VBQ00saUVBQTJCLEVBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZGVwYXJ0YW1lbnRvcy9kZXBhcnRhbWVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluU2xpZGV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZS16b29tIHtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmFie1xyXG4gICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG5pb24tc2xpZGVze1xyXG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/departamentos/departamentos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/departamentos/departamentos.page.ts ***!
  \*****************************************************/
/*! exports provided: DepartamentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentosPage", function() { return DepartamentosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socialsharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/socialsharing.service */ "./src/app/services/socialsharing.service.ts");
/* harmony import */ var _services_Departamentos_departamentos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Departamentos/departamentos.service */ "./src/app/services/Departamentos/departamentos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepartamentosPage = /** @class */ (function () {
    function DepartamentosPage(socialshare, depart, platform, route, location) {
        this.socialshare = socialshare;
        this.depart = depart;
        this.platform = platform;
        this.route = route;
        this.location = location;
        //Fab seleccionado
        this.selectedFab = false;
    }
    DepartamentosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Departamentos = this.depart.getDepartamentos();
        //Atrapamos eventos de backbutton
        this.platform.backButton.subscribeWithPriority(9999, function () {
            _this.url = _this.route.url;
            console.log(_this.url);
            if (_this.url == '/Departamentos' || _this.url == '/login') { }
            else {
                _this.location.back();
            }
            console.log('nothing');
        });
    };
    DepartamentosPage.prototype.openSocial = function (network, container) {
        var message = 'Share in ' + network;
        console.log(message);
        //Llamamos a servicio para compartir
        this.socialshare.socialShare(network);
        this.toggleLists(container);
    };
    DepartamentosPage.prototype.clickMainFAB = function (container) {
        var message = 'Clicked open social menu';
        this.selectedFab = !this.selectedFab;
        this.toggleLists(container);
    };
    DepartamentosPage.prototype.toggleLists = function (container) {
        var fabButton = document.getElementById(container).querySelector('ion-fab-button');
        var fabLists = document.getElementById(container).querySelectorAll('ion-fab-list');
        fabButton.activated = !fabButton.activated;
        for (var i = 0; i < fabLists.length; i++) {
            fabLists[i].activated = !fabLists[i].activated;
        }
    };
    DepartamentosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-departamentos',
            template: __webpack_require__(/*! ./departamentos.page.html */ "./src/app/departamentos/departamentos.page.html"),
            styles: [__webpack_require__(/*! ./departamentos.page.scss */ "./src/app/departamentos/departamentos.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_socialsharing_service__WEBPACK_IMPORTED_MODULE_1__["SocialsharingService"],
            _services_Departamentos_departamentos_service__WEBPACK_IMPORTED_MODULE_2__["DepartamentosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], DepartamentosPage);
    return DepartamentosPage;
}());



/***/ })

}]);
//# sourceMappingURL=departamentos-departamentos-module.js.map