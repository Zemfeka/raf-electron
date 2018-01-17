webpackJsonp(["blank-page.module"],{

/***/ "../../../../../src/app/layout/blank-page/blank-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_component__ = __webpack_require__("../../../../../src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__blank_page_component__["a" /* BlankPageComponent */]
    }
];
var BlankPageRoutingModule = (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/blank-page/blank-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n        <app-page-header [heading]=\"'Invoice'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"padding-10\">\r\n            <br>\r\n            <div class=\"pull-left\">\r\n                <!-- <img src=\"assets/img/logo-blacknwhite.png\" width=\"150\" height=\"32\" alt=\"invoice icon\"> -->\r\n                <address>\r\n                            <br>\r\n                            <strong></strong>\r\n                            <br>\r\n                            231 Ajax Rd,\r\n                            <br>\r\n                            Detroit MI - 48212, USA\r\n                            <br>\r\n                            <abbr title=\"Phone\">P:</abbr> (123) 456-7890\r\n                          </address>\r\n            </div>\r\n            <div class=\"pull-right\">\r\n                <h1 class=\"font-400\">invoice</h1>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <h4 class=\"semi-bold\">Rogers, Inc.</h4>\r\n                    <address>\r\n                              <strong>Mr. Simon Hedger</strong>\r\n                              <br>\r\n                              342 Mirlington Road,\r\n                              <br>\r\n                              Calfornia, CA 431464\r\n                              <br>\r\n                              <abbr title=\"Phone\">P:</abbr> (467) 143-4317\r\n                            </address>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div>\r\n                        <div>\r\n                            <strong>INVOICE NO :</strong>\r\n                            <span class=\"pull-right\"> #AA-454-4113-00 </span>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"font-md\">\r\n                            <strong>INVOICE DATE :</strong>\r\n                            <span class=\"pull-right\"> <i class=\"fa fa-calendar\"></i> 15/02/13 </span>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"well well-sm  bg-color-darken txt-color-white no-border\">\r\n                        <div class=\"fa-lg\">\r\n                            Total Due :\r\n                            <span class=\"pull-right\"> 4,972 USD** </span>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\">QTY</th>\r\n                        <th>ITEM</th>\r\n                        <th>DESCRIPTION</th>\r\n                        <th>PRICE</th>\r\n                        <th>SUBTOTAL</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td class=\"text-center\"><strong>1</strong></td>\r\n                        <td><a (click)=\"(null)\">Print and Web Logo Design</a></td>\r\n                        <td>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam xplicabo.\r\n                        </td>\r\n                        <td>$1,300.00</td>\r\n                        <td>$1,300.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-center\"><strong>1</strong></td>\r\n                        <td><a (click)=\"(null)\">SEO Management</a></td>\r\n                        <td>Sit voluptatem accusantium doloremque laudantium inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\r\n                        </td>\r\n                        <td>$1,400.00</td>\r\n                        <td>$1,400.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-center\"><strong>1</strong></td>\r\n                        <td><a (click)=\"(null)\">Backend Support and Upgrade</a></td>\r\n                        <td>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>\r\n                        <td>$1,700.00</td>\r\n                        <td>$1,700.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">Total</td>\r\n                        <td><strong>$4,400.00</strong></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">HST/GST</td>\r\n                        <td><strong>13%</strong></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"invoice-footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-7\">\r\n                        <!-- <div class=\"payment-methods\">\r\n                            <h5>Payment Methods</h5>\r\n                            <img src=\"assets/img/invoice/paypal.png\" width=\"64\" height=\"64\" alt=\"paypal\">\r\n                            <img src=\"assets/img/invoice/americanexpress.png\" width=\"64\" height=\"64\" alt=\"american express\">\r\n                            <img src=\"assets/img/invoice/mastercard.png\" width=\"64\" height=\"64\" alt=\"mastercard\">\r\n                            <img src=\"assets/img/invoice/visa.png\" width=\"64\" height=\"64\" alt=\"visa\">\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"invoice-sum-total pull-right\">\r\n                            <h3><strong>Total: <span class=\"text-success\">$4,972 USD</span></strong></h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <p class=\"note\">**To avoid any excess penalty charges, please make payments within 30 days of the due date. There will be a 2% interest charge per month on all late invoices.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/blank-page/blank-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/blank-page/blank-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankPageComponent = (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () { };
    BlankPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__("../../../../../src/app/layout/blank-page/blank-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/blank-page/blank-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/blank-page/blank-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_routing_module__ = __webpack_require__("../../../../../src/app/layout/blank-page/blank-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_page_component__ = __webpack_require__("../../../../../src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlankPageModule = (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__blank_page_routing_module__["a" /* BlankPageRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__blank_page_component__["a" /* BlankPageComponent */]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ })

});
//# sourceMappingURL=blank-page.module.chunk.js.map