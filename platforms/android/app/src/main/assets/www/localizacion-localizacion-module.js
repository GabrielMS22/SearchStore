(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["localizacion-localizacion-module"],{

/***/ "./src/app/localizacion/localizacion.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/localizacion/localizacion.module.ts ***!
  \*****************************************************/
/*! exports provided: LocalizacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacionPageModule", function() { return LocalizacionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _localizacion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localizacion.page */ "./src/app/localizacion/localizacion.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _localizacion_page__WEBPACK_IMPORTED_MODULE_5__["LocalizacionPage"]
    }
];
var LocalizacionPageModule = /** @class */ (function () {
    function LocalizacionPageModule() {
    }
    LocalizacionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_localizacion_page__WEBPACK_IMPORTED_MODULE_5__["LocalizacionPage"]]
        })
    ], LocalizacionPageModule);
    return LocalizacionPageModule;
}());



/***/ }),

/***/ "./src/app/localizacion/localizacion.page.html":
/*!*****************************************************!*\
  !*** ./src/app/localizacion/localizacion.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/Departamentos'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Localización</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h2> Solicita la asistencia de un trabajador </h2>\n    <div class='centerImg'>\n      <img src='assets/img/trabajador.jpg'>\n    </div>\n\n    <div class='center downBtn'>\n\n      <ion-button shape='round' color='tertiary' (click)=\"load()\">\n        <ion-icon name='wifi'></ion-icon>Solicitar\n      </ion-button>\n\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/localizacion/localizacion.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/localizacion/localizacion.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerImg {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYWxpemFjaW9uL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFVBQkNcXFNlYXJjaFN0b3JlXFxTZWFyY2hTdG9yZS9zcmNcXGFwcFxcbG9jYWxpemFjaW9uXFxsb2NhbGl6YWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9jYWxpemFjaW9uL2xvY2FsaXphY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVySW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/localizacion/localizacion.page.ts":
/*!***************************************************!*\
  !*** ./src/app/localizacion/localizacion.page.ts ***!
  \***************************************************/
/*! exports provided: LocalizacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacionPage", function() { return LocalizacionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_comentarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/comentarios.service */ "./src/app/services/comentarios.service.ts");
/* harmony import */ var _providers_provlocali_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/provlocali.service */ "./src/app/providers/provlocali.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalizacionPage = /** @class */ (function () {
    function LocalizacionPage(loadMessage, solicitud, localizacion) {
        this.loadMessage = loadMessage;
        this.solicitud = solicitud;
        this.localizacion = localizacion;
    }
    LocalizacionPage.prototype.ngOnInit = function () {
    };
    LocalizacionPage.prototype.load = function () {
        this.loadMessage.presentLoading('Buscando trabajador, porfavor espere');
        this.solicitud.requestTrabajador();
        this.response = this.localizacion.sendNotification();
        console.log(this.response);
    };
    LocalizacionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-localizacion',
            template: __webpack_require__(/*! ./localizacion.page.html */ "./src/app/localizacion/localizacion.page.html"),
            styles: [__webpack_require__(/*! ./localizacion.page.scss */ "./src/app/localizacion/localizacion.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"],
            _services_comentarios_service__WEBPACK_IMPORTED_MODULE_2__["ComentariosService"],
            _providers_provlocali_service__WEBPACK_IMPORTED_MODULE_3__["ProvlocaliService"]])
    ], LocalizacionPage);
    return LocalizacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=localizacion-localizacion-module.js.map