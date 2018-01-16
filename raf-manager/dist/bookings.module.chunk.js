webpackJsonp(["bookings.module"],{

/***/ "../../../../../src/app/layout/bookings/bookings-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings_component__ = __webpack_require__("../../../../../src/app/layout/bookings/bookings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__bookings_component__["a" /* BookingsComponent */]
    }
];
var BookingsRoutingModule = (function () {
    function BookingsRoutingModule() {
    }
    BookingsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BookingsRoutingModule);
    return BookingsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/bookings/bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Bookings'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12 col-xs-12\">\r\n            <div class=\"card mb-12\">\r\n                <div class=\"card-header\">\r\n                    Upcoming bookings\r\n                    <button class=\"btn btn-primary pull-right\" (click)=\"open(content, this.booking, true)\">New Booking</button>\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Ref#</th>\r\n                                <th>Client Name</th>\r\n                                <th>Claiment First Name</th>\r\n                                <th>Claiment Last Name</th>\r\n                                <th>Booking date</th>\r\n                                <th>Time</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let booking of _bookings\">\r\n                                <td>{{booking.Reference}}</td>\r\n                                <td>{{booking.ClientName}}</td>\r\n                                <td>{{booking.ClaimentFirstName}}</td>\r\n                                <td>{{booking.ClaimentLastName}}</td>\r\n                                <td>{{booking.BookingDate|date}}</td>\r\n                                <td>{{booking.Time}}</td>\r\n                                <td>\r\n                                    <div class=\"btn-group\">\r\n                                        <button class=\"btn mce-btn-small\" (click)=\"open(content,this.booking, false)\">\r\n                                            <span class=\"fa fa-hand-pointer-o\"></span>\r\n                                        </button>\r\n                                        <button class=\"btn mce-btn-small\" (click)=\"deleteBooking(this.booking.Id)\">\r\n                                            <span class=\"fa fa-remove\"></span>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Booking Details</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Close click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <ngb-tabset>\r\n                <ngb-tab title=\"Booking\">\r\n                    <ng-template ngbTabContent>\r\n                        <form role=\"form\">\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"clientname\">Client Name/Attorney</label>\r\n                                <input name=\"clientname\" class=\"form-control\" placeholder=\"Enter client name\" [(ngModel)]=\"booking.ClientName\">\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"claimentfirstname\">Claiment First Name</label>\r\n                                <input name=\"claimentfirstname\" class=\"form-control\" placeholder=\"Enter claiment first name\" [(ngModel)]=\"booking.ClaimentFirstName\">\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"claimentlastname\">Claiment Last Name</label>\r\n                                <input name=\"claimentlastname\" class=\"form-control\" placeholder=\"Enter claiment last name\" [(ngModel)]=\"booking.ClaimentLastName\">\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"bookingdate\">Booking Date</label>\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"bookingdate\" [(ngModel)]=\"booking.Date\" ngbDatepicker #b=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"b.toggle()\">\r\n                                        <span class=\"fa fa-calendar\"></span>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div class=\"row\">\r\n                                <fieldset class=\"form-group col col-xl-6 col-lg-6 col-xs-6\">\r\n                                    <label for=\"bookingtime\">Booking Time</label>\r\n                                    <ngb-timepicker [(ngModel)]=\"booking.BookingTime\" name=\"bookingtime\"></ngb-timepicker>\r\n                                </fieldset>\r\n                                <fieldset class=\"form-group col col-xl-6 col-lg-6 col-xs-6\">\r\n                                    <label for=\"bookingreference\">Reference</label>\r\n                                    <input name=\"bookingreference\" class=\"form-control\" placeholder=\"Enter Booking Reference\" [(ngModel)]=\"booking.Reference\">\r\n                                </fieldset>\r\n\r\n                            </div>\r\n                        </form>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Attorney\">\r\n                    <ng-template ngbTabContent>\r\n                        <form role=\"form\">\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"contactperson\">Contact Person</label>\r\n                                <input name=\"contactperson\" class=\"form-control\" placeholder=\"Name of contact person\" [(ngModel)]=\"attorney.ContactPerson\">\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"contactnumber\">Phone Number</label>\r\n                                <input name=\"contactnumber\" class=\"form-control\" placeholder=\"Phone number of contact person\" [(ngModel)]=\"attorney.PhoneNumber\">\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"contactemail\">Email</label>\r\n                                <input name=\"contactemail\" class=\"form-control\" placeholder=\"Email of contact person\" [(ngModel)]=\"attorney.Email\">\r\n                            </fieldset>\r\n                        </form>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"more\">\r\n                    <ng-template ngbTabContent>\r\n                        <form role=\"form\">\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"trialdate\">Trial Date</label>\r\n                                <!-- <input name=\"trialdate\" class=\"form-control\" placeholder=\"Trial date\" [(ngModel)]=\"booking.ClientName\"> -->\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"trialdate\" [(ngModel)]=\"booking.TDate\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                        <span class=\"fa fa-calendar\"></span>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset class=\"form-group\">\r\n                                <label for=\"requestedreportdate\">Requested Report Date</label>\r\n                                <!-- <input name=\"requestedreportdate\" class=\"form-control\" placeholder=\"Report Date\" [(ngModel)]=\"booking.ClientName\"> -->\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"requestedreportdate\" [(ngModel)]=\"booking.RDate\" ngbDatepicker #e=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"e.toggle()\">\r\n                                        <span class=\"fa fa-calendar\"></span>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </form>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Documents\">\r\n                    <ng-template ngbTabContent>\r\n                        <app-documents [bookingId]=\"booking.Id\"></app-documents>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveBooking()\">Save</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/bookings/bookings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bookings/bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bookings_service__ = __webpack_require__("../../../../../src/app/services/bookings.service.ts");
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





var now = new Date();
var BookingsComponent = (function () {
    function BookingsComponent(bookingsService, modalService) {
        this.bookingsService = bookingsService;
        this.modalService = modalService;
        this.documents = [];
        this.attorney = this.initialiseAttorney();
    }
    BookingsComponent.prototype.getBookings = function () {
        return this.bookingsService.getBookings();
    };
    BookingsComponent.prototype.initialiseBooking = function () {
        return { Id: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: now, TrialDate: null, RequestedReportDate: null, Reference: '', Time: null, BookingTime: { hour: 0, minute: 0 }, Date: { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }, TDate: { year: null, month: null, day: null }, RDate: { year: null, month: null, day: null } };
    };
    BookingsComponent.prototype.initialiseAttorney = function () {
        return { Id: 0, BookingId: 0, ClientName: '', ContactPerson: '', PhoneNumber: '', Email: '' };
    };
    // initialiseDocument() {
    //     return {Id:0,BookingId:0, DocumentType: '',DocumentName: '',DocumentExtension: '', Contents: {}, IsNew: true}
    // }
    BookingsComponent.prototype.getRandomArbitrary = function (min, max) {
        return this.booking.ClientName + Math.random() * (max - min) + min;
    };
    BookingsComponent.prototype.saveBooking = function () {
        var _this = this;
        if (this.booking.Date != null) {
            this.booking.BookingDate = new Date(this.booking.Date.year, this.booking.Date.month - 1, this.booking.Date.day, this.booking.BookingTime.hour, this.booking.BookingTime.minute, 0, 0);
        }
        if (this.booking.TDate != null) {
            this.booking.TrialDate = new Date(this.booking.TDate.year, this.booking.TDate.month - 1, this.booking.TDate.day + 1, 0, 0, 0, 0);
        }
        if (this.booking.RDate != null) {
            this.booking.RequestedReportDate = new Date(this.booking.RDate.year, this.booking.RDate.month - 1, this.booking.RDate.day + 1, 0, 0, 0, 0);
        }
        this.booking.Time = this.booking.BookingTime.hour + ":0" + this.booking.BookingTime.minute + ":0" + this.booking.BookingTime.second;
        this.bookingsService.saveBooking(this.booking).subscribe(function (results) {
            //TODO: change the save to return bookingId and then use it.                                       
            //save the attorney details                
            var bookingId = _this.booking.Id > 0 ? _this.booking.Id : results;
            var counter = 0;
            if (_this.attorney.ContactPerson != null || _this.attorney.ContactPerson != '') {
                _this.attorney.BookingId = bookingId;
                _this.attorney.ClientName = _this.booking.ClientName;
                _this.bookingsService.saveAttorney(_this.attorney).subscribe(function (a) {
                }, function (error) { return console.log("Error :: " + error); });
            }
            _this.getBookings().subscribe(function (bookings) {
                _this._bookings = bookings;
            }, function (error) { return console.log("Error :: " + error); });
        }, function (error) { return console.log("Error :: " + error); });
    };
    BookingsComponent.prototype.deleteBooking = function (bookingId) {
        var _this = this;
        this.bookingsService.deleteBooking(bookingId)
            .subscribe(function (o) {
            _this.bookingsService.deleteAttorney(bookingId).subscribe(function (a) {
                _this.bookingsService.deleteDocumentByBooking(bookingId).subscribe(function (d) {
                    _this.getBookings().subscribe(function (results) { return _this._bookings = results; }, function (error) { return console.log("Error :: " + error); });
                });
            });
        });
    };
    // deleteDocument(Id) {
    //     this.bookingsService.deleteDocument(Id)
    //     .subscribe(o => {
    //         this.getDocuments(this.booking.Id);
    //     },error => console.log("Error :: " + error))
    // }
    BookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBookings().subscribe(function (results) { return _this._bookings = results; }, function (error) { return console.log("Error :: " + error); });
    };
    BookingsComponent.prototype.open = function (content, data, isNew) {
        var _this = this;
        //we need to clear this list everytime we open as the actual list is mained on the child component.
        this.documents = [];
        if (!isNew) {
            this.booking = data;
            //get the attorney details
            this.bookingsService.getAttorney(data.Id).subscribe(function (result) {
                if (result != null)
                    _this.attorney = result;
                else
                    _this.attorney = _this.initialiseAttorney();
            }, function (error) { return console.log("Error :: " + error); });
        }
        else {
            this.booking = this.initialiseBooking();
            this.booking.Reference = this.getRandomArbitrary(100, 200);
            this.attorney = this.initialiseAttorney();
        }
        var date = new Date(this.booking.BookingDate);
        this.booking.Date = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        if (this.booking.TrialDate != null) {
            var tdate = new Date(this.booking.TrialDate);
            this.booking.TDate = { year: tdate.getFullYear(), month: tdate.getMonth() + 1, day: tdate.getDate() };
        }
        if (this.booking.RequestedReportDate != null) {
            var tdate = new Date(this.booking.RequestedReportDate);
            this.booking.RDate = { year: tdate.getFullYear(), month: tdate.getMonth() + 1, day: tdate.getDate() };
        }
        if (this.booking.Time != null)
            this.booking.BookingTime = { hour: this.booking.Time.toString().substr(0, 2), minute: this.booking.Time.toString().substr(3, 2) };
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BookingsComponent.prototype.uploadDocument = function (document) {
        this.documents.push(document);
    };
    // getDocuments(bookingId) {
    //     this.bookingsService.getDocuments(bookingId)
    //         .subscribe(results => this.documents = results,
    //             error => console.log("Error :: " + error));
    // }
    // onFileChange(event) {
    //     let reader = new FileReader();
    //     if(event.target.files && event.target.files.length > 0) {
    //       let file = event.target.files[0];          
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         this.document.DocumentName = file.name;
    //         this.document.DocumentExtension = file.type;
    //         this.document.Contents = reader.result.split(',')[1];
    //       };          
    //     }
    //   }
    BookingsComponent.prototype.getDismissReason = function (reason) {
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
    BookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__("../../../../../src/app/layout/bookings/bookings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/bookings/bookings.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_bookings_service__["a" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */]],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_bookings_service__["a" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/bookings/bookings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsModule", function() { return BookingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookings_routing_module__ = __webpack_require__("../../../../../src/app/layout/bookings/bookings-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookings_component__ = __webpack_require__("../../../../../src/app/layout/bookings/bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_documents_documents_module__ = __webpack_require__("../../../../../src/app/layout/components/documents/documents.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BookingsModule = (function () {
    function BookingsModule() {
    }
    BookingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__bookings_routing_module__["a" /* BookingsRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__components_documents_documents_module__["a" /* DocumentsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__bookings_component__["a" /* BookingsComponent */]]
        })
    ], BookingsModule);
    return BookingsModule;
}());



/***/ })

});
//# sourceMappingURL=bookings.module.chunk.js.map