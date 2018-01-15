webpackJsonp(["bs-element.module"],{

/***/ "../../../../../src/app/layout/bs-element/bs-element-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_element_component__ = __webpack_require__("../../../../../src/app/layout/bs-element/bs-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__bs_element_component__["a" /* BsElementComponent */]
    }
];
var BsElementRoutingModule = (function () {
    function BsElementRoutingModule() {
    }
    BsElementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BsElementRoutingModule);
    return BsElementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/bs-element/bs-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Bootstrap Elements'\" [icon]=\"'fa-desktop'\"></app-page-header>\r\n    <!-- Main jumbotron for a primary marketing message or call to action -->\r\n    <div class=\"jumbotron\">\r\n        <h1>Hello, world!</h1>\r\n        <p>\r\n            This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.\r\n        </p>\r\n        <p>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn more »</a>\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Buttons</h1>\r\n        <hr>\r\n    </div>\r\n    <p>\r\n        <button type=\"button\" class=\"btn btn-lg btn-secondary\">Default</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\r\n    </p>\r\n    <p>\r\n        <button type=\"button\" class=\"btn btn-secondary\">Default</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-link\">Link</button>\r\n    </p>\r\n    <p>\r\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\">Default</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\r\n    </p>\r\n\r\n    <br>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Thumbnails</h1>\r\n        <hr>\r\n    </div>\r\n    <img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Dropdown menus</h1>\r\n        <hr>\r\n    </div>\r\n    <div class=\"dropdown theme-dropdown clearfix\">\r\n        <button class=\"btn btn-secondary\">\r\n            Dropdown\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n        </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Navbars</h1>\r\n    </div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n        <button class=\"navbar-toggler\" type=\"button\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Link</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n    <br>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-3\">\r\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n        <button class=\"navbar-toggler\" type=\"button\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Link</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Alerts</h1>\r\n        <hr>\r\n    </div>\r\n    <div class=\"alert alert-success\">\r\n        <strong>Well done!</strong> You successfully read this important alert message.\r\n    </div>\r\n    <div class=\"alert alert-info\">\r\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n    </div>\r\n    <div class=\"alert alert-warning\">\r\n        <strong>Warning!</strong> Best check yo self, you're not looking too good.\r\n    </div>\r\n    <div class=\"alert alert-danger\">\r\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n    </div>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Progress bars</h1>\r\n        <hr>\r\n    </div>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%; height: 10px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <br>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <br>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <br>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <br>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>List groups</h1>\r\n        <hr>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">Cras justo odio</li>\r\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                <li class=\"list-group-item\">Morbi leo risus</li>\r\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                <li class=\"list-group-item\">Vestibulum at eros</li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"list-group\">\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item active\">Cras justo odio</a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Dapibus ac facilisis in</a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Morbi leo risus</a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Porta ac consectetur ac</a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Vestibulum at eros</a>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"list-group\">\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item active\">\r\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\r\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\r\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\r\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n    </div>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Cards</h1>\r\n        <hr>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-primary mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Primary card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-secondary mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Secondary card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-success mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Success card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-danger mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Danger card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-warning mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Warning card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-info mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Info card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card bg-light mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Light card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-dark mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Dark card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Dark card title</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-element/bs-element.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-element/bs-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsElementComponent = (function () {
    function BsElementComponent() {
    }
    BsElementComponent.prototype.ngOnInit = function () { };
    BsElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bs-element',
            template: __webpack_require__("../../../../../src/app/layout/bs-element/bs-element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/bs-element/bs-element.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], BsElementComponent);
    return BsElementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/bs-element/bs-element.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementModule", function() { return BsElementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_element_routing_module__ = __webpack_require__("../../../../../src/app/layout/bs-element/bs-element-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_element_component__ = __webpack_require__("../../../../../src/app/layout/bs-element/bs-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BsElementModule = (function () {
    function BsElementModule() {
    }
    BsElementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__bs_element_routing_module__["a" /* BsElementRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__bs_element_component__["a" /* BsElementComponent */]]
        })
    ], BsElementModule);
    return BsElementModule;
}());



/***/ })

});
//# sourceMappingURL=bs-element.module.chunk.js.map