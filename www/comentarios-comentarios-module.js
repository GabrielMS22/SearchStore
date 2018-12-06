(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comentarios-comentarios-module"],{

/***/ "./src/app/comentarios/comentarios.module.ts":
/*!***************************************************!*\
  !*** ./src/app/comentarios/comentarios.module.ts ***!
  \***************************************************/
/*! exports provided: ComentariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosPageModule", function() { return ComentariosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _comentarios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentarios.page */ "./src/app/comentarios/comentarios.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _comentarios_page__WEBPACK_IMPORTED_MODULE_5__["ComentariosPage"]
    }
];
var ComentariosPageModule = /** @class */ (function () {
    function ComentariosPageModule() {
    }
    ComentariosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_comentarios_page__WEBPACK_IMPORTED_MODULE_5__["ComentariosPage"]]
        })
    ], ComentariosPageModule);
    return ComentariosPageModule;
}());



/***/ }),

/***/ "./src/app/comentarios/comentarios.page.html":
/*!***************************************************!*\
  !*** ./src/app/comentarios/comentarios.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/Departamentos'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Comentarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n <!-- Mensaje de Gracias-->\n <span #gracias id='gracias' class='messageAfter animated delay-1s bounceIn center' *ngIf='message == true'>\n   <h1>Gracias por tu comentario!</h1> <br/>\n   <img src='assets/img/guiño.png' class='imag'>\n  </span>\n\n  <!-- Boton regresar-->\n  <span  *ngIf='btnBack == true'>\n    <div class='center' ><ion-button color='danger' class='animated delay-2s bounceIn btnBack' (click)='moveBack()'> Regresar </ion-button> </div>\n  </span>\n\n<!-- Envio de comentarios-->\n<form>\n  <div #comment class='comment' >\n    <img src='assets/img/comentarios.jpg'> \n    <h2>En SearchStore tus comentarios cuentan</h2>\n    <div class='fo'>\n      <ion-textarea type='text' [(ngModel)]=\"dataComment.comment\" name='comment' placeholder=\"Escriba su comentario aqui!\"> </ion-textarea> <br/>\n\n        <span *ngIf='!stateMessage' class='animated bounceInRight delay-1s center'>\n          Porfavor, escriba su comentario en el campo de arriba <br/>\n        </span>\n\n      <ion-button  (click)='sendComment()' color='tertiary' >  Enviar comentario</ion-button>\n    </div>\n\n </div>\n\n</form>\n\n  \n\n \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/comentarios/comentarios.page.scss":
/*!***************************************************!*\
  !*** ./src/app/comentarios/comentarios.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background-color: rgba(104, 180, 245, 0.5);\n  color: black; }\n\n.fo {\n  margin-top: 60px;\n  text-align: center; }\n\n.comment {\n  opacity: 1;\n  transition: 1s linear !important; }\n\n.messageAfter {\n  position: absolute;\n  top: 135px; }\n\n.btnBack {\n  position: relative;\n  z-index: 999;\n  top: 180px !important;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tZW50YXJpb3MvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcVUFCQ1xcU2VhcmNoU3RvcmVcXFNlYXJjaFN0b3JlL3NyY1xcYXBwXFxjb21lbnRhcmlvc1xcY29tZW50YXJpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssMkNBQXdDO0VBQ3pDLGFBQVksRUFDZjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsaUNBQWdDLEVBQ25DOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osc0JBQW9CO0VBQ3BCLGdCQUFlLEVBR2xCIiwiZmlsZSI6InNyYy9hcHAvY29tZW50YXJpb3MvY29tZW50YXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhe1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LDE4MCwyNDUsMC41MCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mb3tcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21tZW50e1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IDFzIGxpbmVhciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZUFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMzVweDtcclxufVxyXG5cclxuLmJ0bkJhY2t7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6MTgwcHggIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/comentarios/comentarios.page.ts":
/*!*************************************************!*\
  !*** ./src/app/comentarios/comentarios.page.ts ***!
  \*************************************************/
/*! exports provided: ComentariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosPage", function() { return ComentariosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comentarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/comentarios.service */ "./src/app/services/comentarios.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComentariosPage = /** @class */ (function () {
    function ComentariosPage(comentarios, element, render, nav) {
        this.comentarios = comentarios;
        this.element = element;
        this.render = render;
        this.nav = nav;
        this.dataComment = {
            name: 'Customer',
            comment: ''
        };
        this.message = false;
        this.btnBack = false;
        this.stateMessage = true;
    }
    ComentariosPage.prototype.ngOnInit = function () {
    };
    ComentariosPage.prototype.moveBack = function () {
        this.nav.moveBack();
    };
    ComentariosPage.prototype.sendComment = function () {
        var _this = this;
        if (this.dataComment.comment != '') {
            this.stateMessage = true;
            //Agregamos el comentario a la BD
            this.comentarios.addComentario(this.dataComment).then(function () {
                //Animaciones after
                _this.render.setStyle(_this.myContainer.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.message = true;
                    setTimeout(function () {
                        var element = document.getElementById('gracias');
                        _this.render.removeClass(element, 'bounceIn');
                        _this.render.addClass(element, 'bounceOut');
                        _this.btnBack = true;
                        setTimeout(function () {
                        }, 1000);
                    }, 3000);
                }, 1000);
            });
        }
        else {
            this.stateMessage = false;
            setTimeout(function () {
                _this.stateMessage = true;
            }, 3000);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('comment', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ComentariosPage.prototype, "myContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gracias'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComentariosPage.prototype, "afterM", void 0);
    ComentariosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comentarios',
            template: __webpack_require__(/*! ./comentarios.page.html */ "./src/app/comentarios/comentarios.page.html"),
            styles: [__webpack_require__(/*! ./comentarios.page.scss */ "./src/app/comentarios/comentarios.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_comentarios_service__WEBPACK_IMPORTED_MODULE_1__["ComentariosService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], ComentariosPage);
    return ComentariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=comentarios-comentarios-module.js.map