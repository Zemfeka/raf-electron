webpackJsonp(["assessments.module"],{

/***/ "../../../../../src/app/layout/assessments/assessments-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assessments_component__ = __webpack_require__("../../../../../src/app/layout/assessments/assessments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__assessments_component__["a" /* AssessmentsComponent */]
    }
];
var AssessmentsRoutingModule = (function () {
    function AssessmentsRoutingModule() {
    }
    AssessmentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AssessmentsRoutingModule);
    return AssessmentsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/assessments/assessments.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Assessments'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12 col-xs-12\">\r\n            <div class=\"card mb-12\">\r\n                <div class=\"card-header\">\r\n                    Today's Assessments\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Ref#</th>\r\n                                <th>Client Name</th>\r\n                                <th>Claiment First Name</th>\r\n                                <th>Claiment Last Name</th>\r\n                                <th>Booking Date</th>\r\n                                <th>Time</th>\r\n                                <th>Trial date</th>\r\n                                <th>Requested Report Date</th>\r\n                                <th>Notes</th>\r\n                                <th>ShowNoShow</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let assessment of assessments\">\r\n                                <td>{{assessment.Reference}}</td>\r\n                                <td>{{assessment.ClientName}}</td>\r\n                                <td>{{assessment.ClaimentFirstName}}</td>\r\n                                <td>{{assessment.ClaimentLastName}}</td>\r\n                                <td>{{assessment.BookingDate|date}}</td>\r\n                                <td>{{assessment.Time}}</td>\r\n                                <td>{{assessment.TrialDate|date}}</td>\r\n                                <td>{{assessment.RequestedReportDate|date}}</td>\r\n                                <td>{{assessment.Notes}}</td>\r\n                                <td>{{assessment.ShowNoShow}}</td>\r\n                                <td>\r\n                                    <div class=\"btn-group\">\r\n                                        <button class=\"btn mce-btn-small\" (click)=\"open(content,this.assessment, false)\">\r\n                                                <span class=\"fa fa-hand-pointer-o\"></span>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Assessment Details</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Close click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <ngb-tabset>\r\n                <ngb-tab title=\"Details\">\r\n                    <ng-template ngbTabContent>\r\n                        <form role=\"form\">\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"notes\">Notes</label>\r\n                                <textarea name=\"notes\" class=\"form-control\" rows=\"3\" placeholder=\"Enter text\" [(ngModel)]=\"assessment.Notes\"></textarea>\r\n                                <!-- <input name=\"notes\" class=\"form-control\" placeholder=\"Enter text\" [(ngModel)]=\"assessment.Notes\"> -->\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"shownoshow\">ShowNoShow</label>\r\n                                <input type=\"checkbox\" name=\"shownoshow\" class=\"form-control\" placeholder=\"Enter text\" [(ngModel)]=\"assessment.ShowNoShow\">\r\n                            </fieldset>\r\n                        </form>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Documents\">\r\n                    <ng-template ngbTabContent>\r\n                        <app-documents [bookingId]=\"assessment.BookingId\" (uploadClick)=\"uploadDocument($event)\"></app-documents>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveAssessment() && c('Close click')\">Save</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/assessments/assessments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/assessments/assessments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_assessment_service__ = __webpack_require__("../../../../../src/app/services/assessment.service.ts");
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






var AssessmentsComponent = (function () {
    function AssessmentsComponent(assessmentService, modalService, bookingsService) {
        this.assessmentService = assessmentService;
        this.modalService = modalService;
        this.bookingsService = bookingsService;
        this.assessment = this.initialiseAssessment();
        this.documents = [];
    }
    AssessmentsComponent.prototype.initialiseAssessment = function () {
        return { Id: 0, Notes: '', UserId: 0, BookingId: 0, ShowNoShow: false, Reference: '', ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, TrialDate: null, RequestedReportDate: null, Time: null, Date: null, BookingTime: null };
    };
    AssessmentsComponent.prototype.getAssessments = function () {
        var _this = this;
        this.assessmentService.getAssessments()
            .subscribe(function (results) { return _this.assessments = results; }, function (error) { return console.log("Error :: " + error); });
    };
    AssessmentsComponent.prototype.saveAssessment = function () {
        var _this = this;
        this.assessmentService.saveAssessment(this.assessment).subscribe(function (o) {
            //save documents
            if (_this.documents.length > 0) {
                var _loop_1 = function (document_1) {
                    if (document_1.IsNew) {
                        document_1.BookingId = _this.assessment.BookingId;
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
            _this.getAssessments();
        }, function (error) { return console.log("Error :: " + error); });
    };
    AssessmentsComponent.prototype.ngOnInit = function () {
        this.getAssessments();
    };
    AssessmentsComponent.prototype.open = function (content, data, isNew) {
        var _this = this;
        //we need to clear this list everytime we open as the actual list is mained on the child component.
        this.documents = [];
        if (!isNew) {
            this.assessment = data;
        }
        else {
            this.assessment = this.initialiseAssessment();
        }
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AssessmentsComponent.prototype.uploadDocument = function (document) {
        this.documents.push(document);
    };
    AssessmentsComponent.prototype.getDismissReason = function (reason) {
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
    AssessmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assessments',
            template: __webpack_require__("../../../../../src/app/layout/assessments/assessments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/assessments/assessments.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_assessment_service__["a" /* AssessmentService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__services_bookings_service__["a" /* BookingsService */]],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_assessment_service__["a" /* AssessmentService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__services_bookings_service__["a" /* BookingsService */]])
    ], AssessmentsComponent);
    return AssessmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/assessments/assessments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentsModule", function() { return AssessmentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assessments_routing_module__ = __webpack_require__("../../../../../src/app/layout/assessments/assessments-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assessments_component__ = __webpack_require__("../../../../../src/app/layout/assessments/assessments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_documents_documents_module__ = __webpack_require__("../../../../../src/app/layout/components/documents/documents.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AssessmentsModule = (function () {
    function AssessmentsModule() {
    }
    AssessmentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__assessments_routing_module__["a" /* AssessmentsRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__components_documents_documents_module__["a" /* DocumentsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__assessments_component__["a" /* AssessmentsComponent */]]
        })
    ], AssessmentsModule);
    return AssessmentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/assessment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentService; });
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




var AssessmentService = (function () {
    function AssessmentService(http) {
        this.http = http;
        this.assessmentServiceGetURL = "http://localhost:3000/assessments/get";
        this.assesmentServiceAddURL = "http://localhost:3000/assessments/add";
        this.assesmentServiceUpdateURL = "http://localhost:3000/assessments/update";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    AssessmentService.prototype.getAssessments = function () {
        return this.http.get(this.assessmentServiceGetURL)
            .map(function (response) {
            var mapped = response.json();
            return mapped;
        })
            .catch(this.handleError);
    };
    AssessmentService.prototype.saveAssessment = function (assessment) {
        if (assessment.Id == 0 || assessment.Id == null) {
            return this.http.post(this.assesmentServiceAddURL, assessment, this.options)
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.assesmentServiceUpdateURL, assessment, this.options)
                .catch(this.handleError);
        }
    };
    AssessmentService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    AssessmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AssessmentService);
    return AssessmentService;
}());



/***/ })

});
//# sourceMappingURL=assessments.module.chunk.js.map