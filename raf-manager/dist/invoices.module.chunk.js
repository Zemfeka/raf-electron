webpackJsonp(["invoices.module"],{

/***/ "../../../../../src/app/layout/invoices/invoices-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__invoices_component__["a" /* InvoicesComponent */]
    }
];
var InvoicesRoutingModule = (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Invoices'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n    <div class=\"row\" *ngIf=\"showInvoice\">\r\n\r\n        <input [(ngModel)]=\"showInvoice\" />\r\n        <div class=\"col col-xl-12 col-lg-12 col-xs-12\">\r\n            <div class=\"card mb-12\">\r\n                <div class=\"card-header\">\r\n                    Invoice\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Number</th>\r\n                                <th>Date</th>\r\n                                <th>Total</th>\r\n                                <th>Client Name</th>\r\n                                <th>Claiment First Name</th>\r\n                                <th>Claiment Last Name</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let invoice of invoices\" (click)=\"toggle()\">\r\n                                <td>{{invoice.Number}}</td>\r\n                                <td>{{invoice.InvoiceDate}}</td>\r\n                                <td>{{invoice.Total}}</td>\r\n                                <td>{{invoice.ClientName}}</td>\r\n                                <td>{{invoice.ClaimentFirstName}}</td>\r\n                                <td>{{invoice.ClaimentLastName}}</td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <input [(ngModel)]=\"showDetail\" />\r\n    <div class=\"row\" *ngIf=\"showDetail\">\r\n        <div class=\"padding-10\">\r\n            <br>\r\n            <div class=\"pull-left\">\r\n                <img src=\"assets/img/logo-blacknwhite.png\" width=\"150\" height=\"32\" alt=\"invoice icon\">\r\n                <address>\r\n                            <br>\r\n                            <strong>SmartAdmin, Inc.</strong>\r\n                            <br>\r\n                            231 Ajax Rd,\r\n                            <br>\r\n                            Detroit MI - 48212, USA\r\n                            <br>\r\n                            <abbr title=\"Phone\">P:</abbr> (123) 456-7890\r\n                          </address>\r\n            </div>\r\n            <div class=\"pull-right\">\r\n                <h1 class=\"font-400\">invoice</h1>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <h4 class=\"semi-bold\">Rogers, Inc.</h4>\r\n                    <address>\r\n                              <strong>Mr. Simon Hedger</strong>\r\n                              <br>\r\n                              342 Mirlington Road,\r\n                              <br>\r\n                              Calfornia, CA 431464\r\n                              <br>\r\n                              <abbr title=\"Phone\">P:</abbr> (467) 143-4317\r\n                            </address>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div>\r\n                        <div>\r\n                            <strong>INVOICE NO :</strong>\r\n                            <span class=\"pull-right\"> #AA-454-4113-00 </span>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"font-md\">\r\n                            <strong>INVOICE DATE :</strong>\r\n                            <span class=\"pull-right\"> <i class=\"fa fa-calendar\"></i> 15/02/13 </span>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"well well-sm  bg-color-darken txt-color-white no-border\">\r\n                        <div class=\"fa-lg\">\r\n                            Total Due :\r\n                            <span class=\"pull-right\"> 4,972 USD** </span>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\">QTY</th>\r\n                        <th>ITEM</th>\r\n                        <th>DESCRIPTION</th>\r\n                        <th>PRICE</th>\r\n                        <th>SUBTOTAL</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td class=\"text-center\"><strong>1</strong></td>\r\n                        <td><a (click)=\"(null)\">Print and Web Logo Design</a></td>\r\n                        <td>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam xplicabo.\r\n                        </td>\r\n                        <td>$1,300.00</td>\r\n                        <td>$1,300.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-center\"><strong>1</strong></td>\r\n                        <td><a (click)=\"(null)\">SEO Management</a></td>\r\n                        <td>Sit voluptatem accusantium doloremque laudantium inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\r\n                        </td>\r\n                        <td>$1,400.00</td>\r\n                        <td>$1,400.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-center\"><strong>1</strong></td>\r\n                        <td><a (click)=\"(null)\">Backend Support and Upgrade</a></td>\r\n                        <td>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>\r\n                        <td>$1,700.00</td>\r\n                        <td>$1,700.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">Total</td>\r\n                        <td><strong>$4,400.00</strong></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">HST/GST</td>\r\n                        <td><strong>13%</strong></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"invoice-footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-7\">\r\n                        <div class=\"payment-methods\">\r\n                            <h5>Payment Methods</h5>\r\n                            <img src=\"assets/img/invoice/paypal.png\" width=\"64\" height=\"64\" alt=\"paypal\">\r\n                            <img src=\"assets/img/invoice/americanexpress.png\" width=\"64\" height=\"64\" alt=\"american express\">\r\n                            <img src=\"assets/img/invoice/mastercard.png\" width=\"64\" height=\"64\" alt=\"mastercard\">\r\n                            <img src=\"assets/img/invoice/visa.png\" width=\"64\" height=\"64\" alt=\"visa\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"invoice-sum-total pull-right\">\r\n                            <h3><strong>Total: <span class=\"text-success\">$4,972 USD</span></strong></h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <p class=\"note\">**To avoid any excess penalty charges, please make payments within 30 days of the due date. There will be a 2% interest charge per month on all late invoices.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_invoice_service__ = __webpack_require__("../../../../../src/app/services/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoicesComponent = (function () {
    function InvoicesComponent(invoiceService, modalService) {
        this.invoiceService = invoiceService;
        this.modalService = modalService;
        this.invoice = this.initialiseinvoice();
        this.showDetail = false;
        this.showInvoice = true;
    }
    InvoicesComponent.prototype.initialiseinvoice = function () {
        return { Id: 0, Number: '', InvoiceDate: null, Total: 0, UserId: 0, BookingId: 0, InvoiceBusinessId: 0, BusinessId: 0, BusinessName: '', BusinessRegistrationNumber: '', BusinessVatNumber: '', AttorneyId: 0, AttorneyBookingId: 0, AttorneyClientName: '', AttorneyContactPerson: '', AttorneyPhoneNumber: '', AttorneyEmail: '', ReportId: 0, ReportNotes: '', ReportUserId: 0, ReportBookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: 0, AssessmentShowNoShow: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null, BookingTime: null };
    };
    InvoicesComponent.prototype.getInvoices = function () {
        var _this = this;
        this.invoiceService.getInvoices()
            .subscribe(function (results) { return _this.invoices = results; }, function (error) { return console.log("Error :: " + error); });
    };
    InvoicesComponent.prototype.toggle = function () {
        console.log('in');
        this.showDetail == true; // ? false : true;
        this.showInvoice == false; // ? false : true;
    };
    InvoicesComponent.prototype.saveReport = function () {
        var _this = this;
        this.invoiceService.saveInvoices(this.invoice).subscribe(function (o) { return _this.getInvoices(); }, function (error) { return console.log("Error :: " + error); });
    };
    InvoicesComponent.prototype.ngOnInit = function () {
        this.getInvoices();
    };
    InvoicesComponent.prototype.open = function (content, data, isNew) {
        var _this = this;
        if (!isNew) {
            this.invoice = data;
        }
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    InvoicesComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    InvoicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/invoices/invoices.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/invoices/invoices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_routing_module__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_component__ = __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InvoicesModule = (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__invoices_routing_module__["a" /* InvoicesRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__invoices_component__["a" /* InvoicesComponent */]]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceService = (function () {
    function InvoiceService(http) {
        this.http = http;
        this.invoiceServiceGetURL = "http://localhost:3000/invoices/get";
        this.invoiceServiceAddURL = "http://localhost:3000/invoices/add";
        this.invoiceServiceUpdateURL = "http://localhost:3000/invoices/update";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    InvoiceService.prototype.getInvoices = function () {
        return this.http.get(this.invoiceServiceGetURL)
            .map(function (response) {
            var mapped = response.json();
            return mapped;
        })
            .catch(this.handleError);
    };
    InvoiceService.prototype.saveInvoices = function (invoice) {
        if (invoice.Id == 0 || invoice.Id == null) {
            return this.http.post(this.invoiceServiceAddURL, invoice, this.options)
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.invoiceServiceUpdateURL, invoice, this.options)
                .catch(this.handleError);
        }
    };
    InvoiceService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ })

});
//# sourceMappingURL=invoices.module.chunk.js.map