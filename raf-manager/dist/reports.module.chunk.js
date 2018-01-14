webpackJsonp(["reports.module"],{

/***/ "../../../../../src/app/layout/reports/reports-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_component__ = __webpack_require__("../../../../../src/app/layout/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */]
    }
];
var ReportsRoutingModule = (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Reports'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12 col-xs-12\">\r\n            <div class=\"card mb-12\">\r\n                <div class=\"card-header\">\r\n                    Reports\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Client Name</th>\r\n                                <th>Claiment First Name</th>\r\n                                <th>Claiment Last Name</th>\r\n                                <th>Booking date</th>\r\n                                <th>Time</th>\r\n                                <th>Assessment Notes</th>\r\n                                <th>ShowNoShow</th>\r\n                                <th>Report Notes</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let report of reports\">\r\n                                <td>{{report.ClientName}}</td>\r\n                                <td>{{report.ClaimentFirstName}}</td>\r\n                                <td>{{report.ClaimentLastName}}</td>\r\n                                <td>{{report.BookingDate|date}}</td>\r\n                                <td>{{report.Time}}</td>\r\n                                <td>{{report.AssessmentNotes}}</td>\r\n                                <td>{{report.AssessmentShowNoShow}}</td>\r\n                                <td>{{report.Notes}}</td>\r\n                                <td>\r\n                                    <div class=\"btn-group\">\r\n                                        <button class=\"btn mce-btn-small\" (click)=\"open(content,this.report, false)\">\r\n                                                <span class=\"fa fa-hand-pointer-o\"></span>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Report Details</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Close click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <ngb-tabset>\r\n                <ngb-tab title=\"Details\">\r\n                    <ng-template ngbTabContent>\r\n                        <form role=\"form\">\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"notes\">Notes</label>\r\n                                <textarea name=\"notes\" class=\"form-control\" rows=\"3\" placeholder=\"Enter text\" [(ngModel)]=\"report.Notes\"></textarea>\r\n                            </fieldset>\r\n                        </form>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Documents\">\r\n                    <ng-template ngbTabContent>\r\n                        <app-documents [bookingId]=\"report.BookingId\" (uploadClick)=\"uploadDocument($event)\"></app-documents>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveReport() && c('Close click')\">Save</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/reports/reports.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookings_service__ = __webpack_require__("../../../../../src/app/services/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsComponent = (function () {
    function ReportsComponent(reportService, modalService, bookingsService) {
        this.reportService = reportService;
        this.modalService = modalService;
        this.bookingsService = bookingsService;
        this.report = this.initialiseReport();
        this.documents = [];
    }
    ReportsComponent.prototype.initialiseReport = function () {
        return { Id: 0, Notes: '', UserId: 0, BookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: false, AssessmentShowNoShow: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null, BookingTime: null };
    };
    ReportsComponent.prototype.getReports = function () {
        var _this = this;
        this.reportService.getReports()
            .subscribe(function (results) { return _this.reports = results; }, function (error) { return console.log("Error :: " + error); });
    };
    ReportsComponent.prototype.saveReport = function () {
        var _this = this;
        this.reportService.saveReport(this.report).subscribe(function (o) {
            //save documents
            if (_this.documents.length > 0) {
                var _loop_1 = function (document_1) {
                    if (document_1.IsNew) {
                        document_1.BookingId = _this.report.BookingId;
                        _this.bookingsService.saveDocument(document_1).subscribe(function (d) {
                            document_1.IsNew = false;
                        }, function (error) { return console.log("Error :: " + error); });
                    }
                };
                for (var _i = 0, _a = _this.documents; _i < _a.length; _i++) {
                    var document_1 = _a[_i];
                    _loop_1(document_1);
                }
            }
            _this.getReports();
        }, function (error) { return console.log("Error :: " + error); });
    };
    ReportsComponent.prototype.ngOnInit = function () {
        this.getReports();
    };
    ReportsComponent.prototype.open = function (content, data, isNew) {
        var _this = this;
        //we need to clear this list everytime we open as the actual list is mained on the child component.
        this.documents = [];
        if (!isNew) {
            this.report = data;
        }
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ReportsComponent.prototype.uploadDocument = function (document) {
        this.documents.push(document);
    };
    ReportsComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/layout/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/reports/reports.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__services_bookings_service__["a" /* BookingsService */]],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__services_bookings_service__["a" /* BookingsService */]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/reports-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_component__ = __webpack_require__("../../../../../src/app/layout/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_documents_documents_module__ = __webpack_require__("../../../../../src/app/layout/components/documents/documents.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ReportsModule = (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__reports_routing_module__["a" /* ReportsRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__components_documents_documents_module__["a" /* DocumentsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__reports_component__["a" /* ReportsComponent */]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
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




var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.reportServiceGetURL = "http://localhost:3000/reports/get";
        this.reportServiceAddURL = "http://localhost:3000/reports/add";
        this.reportServiceUpdateURL = "http://localhost:3000/reports/update";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ReportService.prototype.getReports = function () {
        return this.http.get(this.reportServiceGetURL)
            .map(function (response) {
            var mapped = response.json();
            return mapped;
        })
            .catch(this.handleError);
    };
    ReportService.prototype.saveReport = function (report) {
        if (report.Id == 0 || report.Id == null) {
            return this.http.post(this.reportServiceAddURL, report, this.options)
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.reportServiceUpdateURL, report, this.options)
                .catch(this.handleError);
        }
    };
    ReportService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ReportService);
    return ReportService;
}());



/***/ })

});
//# sourceMappingURL=reports.module.chunk.js.map