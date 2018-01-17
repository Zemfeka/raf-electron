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

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Invoices'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n    <div class=\"row\" *ngIf=\"showInvoice\">\r\n\r\n        \r\n        <div class=\"col col-xl-12 col-lg-12 col-xs-12\">\r\n            <div class=\"card mb-12\">\r\n                <div class=\"card-header\">\r\n                    Invoice\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Number</th>\r\n                                <th>Date</th>\r\n                                <th>Total</th>\r\n                                <th>Client Name</th>\r\n                                <th>Claiment First Name</th>\r\n                                <th>Claiment Last Name</th>\r\n                                <th>ref#</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let invoice of invoices\">\r\n                                <td>{{invoice.Number}}</td>\r\n                                <td>{{invoice.InvoiceDate}}</td>\r\n                                <td>{{invoice.Total}}</td>\r\n                                <td>{{invoice.ClientName}}</td>\r\n                                <td>{{invoice.ClaimentFirstName}}</td>\r\n                                <td>{{invoice.ClaimentLastName}}</td>\r\n                                <td>{{invoice.BookingRef}}</td>\r\n                                <td>\r\n                                    <div class=\"btn-group\">\r\n                                        <button class=\"btn mce-btn-small\" (click)=\"open(content,this.invoice, false)\">\r\n                                                <span class=\"fa fa-hand-pointer-o\"></span>\r\n                                        </button>\r\n                                        <button class=\"btn mce-btn-small\" (click)=\"printInvoice(this.invoice.Id)\">\r\n                                            <span class=\"fa fa-print\"></span>\r\n                                    </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\" width=\"1000\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Invoice: {{invoice.Number}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Close click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <!-- <div class=\"modal-body\">\r\n             <p>\r\n                  <b>{{invoice.BusinessName}}</b><br>\r\n                  Reg No:{{invoice.BusinessRegistrationNumber}}<br>\r\n                  Vat No:{{BusinessVatNumber}}\r\n             </p>\r\n             <p>\r\n                    <b>{{invoice.ClientName}}</b><br>\r\n                    \r\n               </p>\r\n        </div> -->\r\n\r\n        <div class=\"modal-body\">\r\n            <ngb-tabset>\r\n                <ngb-tab title=\"Invoice Details\">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addItem()\">Add Item</button>\r\n                        </div>\r\n                        <div class=\"card-body table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>QTY</th>\r\n                                        <th>ITEM</th>\r\n                                        <th>DESCRIPTION</th>\r\n                                        <th>PRICE</th>\r\n                                        <th>SUBTOTAL</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let invoiceItem of invoiceItems\">\r\n                                        <td class=\"text-center\">\r\n                                            <input type=\"number\" name=\"quantity\" class=\"form-control\" placeholder=\"QTY\" [(ngModel)]=\"invoiceItem.Quantity\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" name=\"item\" class=\"form-control\" placeholder=\"Enter text\" [(ngModel)]=\"invoiceItem.Name\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <textarea name=\"description\" class=\"form-control\" rows=\"1\" placeholder=\"Description\" [(ngModel)]=\"invoiceItem.Description\"></textarea>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"number\" name=\"price\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"invoiceItem.Price\">\r\n                                        </td>\r\n                                        <td>\r\n                                            R {{getSub(invoiceItem)}}\r\n                                        </td>\r\n                                        <td>\r\n                                            <!-- <div class=\"btn-group\">\r\n                                                <button class=\"btn mce-btn-small\" (click)=\"deleteInvoiceItem(invoiceItem)\">\r\n                                                                <span class=\"fa fa-remove\"></span>\r\n                                                            </button>\r\n                                            </div> -->\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">Total</td>\r\n                                        <td><strong>{{this.invoice.Total}}</strong></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                \r\n            </ngb-tabset>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveInvoice()\">Calculate</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var now = new Date();
var InvoicesComponent = (function () {
    function InvoicesComponent(invoiceService, modalService, dataService, router) {
        this.invoiceService = invoiceService;
        this.modalService = modalService;
        this.dataService = dataService;
        this.router = router;
        this.invoiceItem = this.initialiseinvoiceitem();
        this.invoice = this.initialiseinvoice();
        this.showDetail = false;
        this.showInvoice = true;
    }
    InvoicesComponent.prototype.initialiseinvoice = function () {
        return { Id: 0, Number: '', InvoiceDate: now, Total: 0, UserId: 0, BookingId: 0, InvoiceBusinessId: 0, BusinessId: 0, BusinessName: '', BusinessRegistrationNumber: '', BusinessVatNumber: '', AttorneyId: 0, AttorneyBookingId: 0, AttorneyClientName: '', AttorneyContactPerson: '', AttorneyPhoneNumber: '', AttorneyEmail: '', ReportId: 0, ReportNotes: '', ReportUserId: 0, ReportBookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: 0, AssessmentShowNoShow: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null, BookingTime: null, BookingRef: '', Items: [] };
    };
    InvoicesComponent.prototype.initialiseinvoiceitem = function () {
        return { "Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": 0 };
    };
    InvoicesComponent.prototype.getInvoices = function () {
        var _this = this;
        this.invoiceService.getInvoices()
            .subscribe(function (results) { return _this.invoices = results; }, function (error) { return console.log("Error :: " + error); });
    };
    InvoicesComponent.prototype.getSum = function () {
        var b = 0;
        console.log(this.invoiceItems);
        if (this.invoiceItems != undefined) {
            for (var i = 0; i < this.invoiceItems.length; i++) {
                b += this.invoiceItems[i].SubTotal;
            }
        }
        return b;
    };
    InvoicesComponent.prototype.getSub = function (invoiceItem) {
        return this.invoiceItem.SubTotal = invoiceItem.Price * invoiceItem.Quantity;
    };
    InvoicesComponent.prototype.toggle = function () {
        this.showDetail == true;
        this.showInvoice == false;
    };
    InvoicesComponent.prototype.saveInvoice = function () {
        var _this = this;
        this.invoice.Items = this.invoiceItems;
        var total = 0;
        for (var _i = 0, _a = this.invoice.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.SubTotal = item.Quantity * item.Price;
            total = total + item.SubTotal;
            this.invoice.Total = total;
        }
        this.invoiceService.saveInvoices(this.invoice, total).subscribe(function (results) {
            //TODO: change the save to return bookingId and then use it.                                       
            //save the attorney details                
            var invoiceid = _this.invoice.Id > 0 ? _this.invoice.Id : results;
            var counter = 0;
            _this.invoice.Id = invoiceid;
            //save invoice items
            if (_this.invoice.Items.length > 0) {
                for (var _i = 0, _a = _this.invoice.Items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.Id == 0) {
                        item.InvoiceId = invoiceid;
                        _this.invoiceService.saveInvoiceItem(item).subscribe(function (d) {
                        }, function (error) { return console.log("Error :: " + error); });
                    }
                    else {
                        item.InvoiceId = invoiceid;
                        _this.invoiceService.updateInvoiceItem(item).subscribe(function (d) {
                        }, function (error) { return console.log("Error :: " + error); });
                    }
                }
            }
            _this.invoiceService.getInvoices().subscribe(function (b) {
                _this.invoices = b;
            }, function (error) { return console.log("Error :: " + error); });
        }, function (error) { return console.log("Error :: " + error); });
    };
    InvoicesComponent.prototype.ngOnInit = function () {
        this.getInvoices();
    };
    InvoicesComponent.prototype.addItem = function () {
        this.invoiceItems.push({ "Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id });
    };
    InvoicesComponent.prototype.deleteInvoiceItem = function (invoiceItem) {
        console.log("went in" + invoiceItem);
        this.invoiceItems.splice(invoiceItem.index, 1);
        // this.bookingsService.deleteBooking(bookingId)
        // .subscribe(o => {
        //     this.bookingsService.deleteAttorney(bookingId).subscribe(a =>{
        //         this.bookingsService.deleteDocumentByBooking(bookingId).subscribe(d => {
        //             this.getBookings().subscribe(results => this._bookings = results,
        //                 error => console.log("Error :: " + error));
        //         })
        //     })
        // });
    };
    InvoicesComponent.prototype.open = function (content, data, isNew) {
        var _this = this;
        if (!isNew) {
            this.invoice = data;
        }
        this.invoiceService.getInvoiceItems(this.invoice.Id)
            .subscribe(function (results) { return _this.invoiceItems = results; }, function (error) { return console.log("Error :: " + error); });
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
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
    InvoicesComponent.prototype.printInvoice = function (invoiceId) {
        this.dataService.setInvoiceId(invoiceId);
        localStorage.setItem('invoiceId', invoiceId);
        console.log(invoiceId);
        this.router.navigate(["/invoiceprint"]);
    };
    InvoicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__("../../../../../src/app/layout/invoices/invoices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/invoices/invoices.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__invoices_routing_module__["a" /* InvoicesRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__invoices_component__["a" /* InvoicesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */]]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ })

});
//# sourceMappingURL=invoices.module.chunk.js.map