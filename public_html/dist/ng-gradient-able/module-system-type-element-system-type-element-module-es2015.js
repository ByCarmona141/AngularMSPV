(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-system-type-element-system-type-element-module"],{

/***/ "CQO7":
/*!**************************************************************************************************!*\
  !*** ./src/app/module/system-type-element/components/read/system-type-element-read.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: systemTypeElementReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemTypeElementReadComponent", function() { return systemTypeElementReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_system_type_element_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/system-type-element.service */ "5OkV");
/* harmony import */ var _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-privileges/service/system-privileges.service */ "TWxV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/shared/table/table.component */ "CfwT");









const _c0 = ["table"];
function systemTypeElementReadComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function systemTypeElementReadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r1.selected.length == 0);
} }
function systemTypeElementReadComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r2.selected.length == 0);
} }
class systemTypeElementReadComponent {
    constructor(auth, router, service, privilegesService) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.privilegesService = privilegesService;
        this.disabled = true;
        this.serveSource = 'systemTypeElement';
        this.serverFunction = 'readDataTable';
        this.selected = [];
        this.privilege = {
            create: false,
            update: false,
            delete: false
        };
        this.params = {};
        this.fields = [
            '#',
            'name'
        ];
        this.privilegesService.getPrivileges('systemTypeElement')
            .subscribe(data => {
            this.privilege = data;
        });
    }
    ngOnInit() {
    }
    update(id) {
        this.router.navigateByUrl('/systemTypeElement/update/' + id);
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: `??Estas seguro de eliminar el registro ${id}?`,
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then((result) => {
            if (!result.dismiss) {
                this.service.delete(id).subscribe(resp => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Eliminado', 'El registro se elimino correctamente!', 'error');
                    this.table.refreshTable();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('ERROR!', 'Hubo un error al eliminar, intente de nuevo', 'error');
                });
            }
        });
    }
    onClick(ev) {
        let input = ev.target;
        if (input.tagName !== 'A') {
            input = input.parentNode;
        }
        const classTag = input.className;
        if (classTag.includes('edit')) {
            this.update(input.attributes.index.value);
        }
        if (classTag.includes('delete')) {
            this.delete(input.attributes.index.value);
        }
    }
}
systemTypeElementReadComponent.??fac = function systemTypeElementReadComponent_Factory(t) { return new (t || systemTypeElementReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_type_element_service__WEBPACK_IMPORTED_MODULE_4__["systemTypeElementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"])); };
systemTypeElementReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: systemTypeElementReadComponent, selectors: [["app-system-type-element"]], viewQuery: function systemTypeElementReadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, hostBindings: function systemTypeElementReadComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function systemTypeElementReadComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 10, vars: 7, consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]], template: function systemTypeElementReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, systemTypeElementReadComponent_button_4_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, systemTypeElementReadComponent_button_6_Template, 4, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, systemTypeElementReadComponent_button_7_Template, 4, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.privilege.create);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.privilege.update);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.privilege.delete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("serveSource", ctx.serveSource)("serveFunction", ctx.serverFunction)("params", ctx.params)("fields", ctx.fields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemTypeElementReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-type-element',
                templateUrl: './system-type-element-read.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_system_type_element_service__WEBPACK_IMPORTED_MODULE_4__["systemTypeElementService"] }, { type: _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "hY/k":
/*!**************************************************************************!*\
  !*** ./src/app/module/system-type-element/system-type-element.module.ts ***!
  \**************************************************************************/
/*! exports provided: systemTypeElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemTypeElementModule", function() { return systemTypeElementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _system_type_element_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-type-element-routing.module */ "kWS1");
/* harmony import */ var _components_create_system_type_element_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/system-type-element-create.component */ "E7E4");
/* harmony import */ var _components_read_system_type_element_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/read/system-type-element-read.component */ "CQO7");
/* harmony import */ var _components_update_system_type_element_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/system-type-element-update.component */ "r1o0");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class systemTypeElementModule {
}
systemTypeElementModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: systemTypeElementModule });
systemTypeElementModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function systemTypeElementModule_Factory(t) { return new (t || systemTypeElementModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _system_type_element_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemTypeElementRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](systemTypeElementModule, { declarations: [_components_create_system_type_element_create_component__WEBPACK_IMPORTED_MODULE_3__["systemTypeElementCreateComponent"],
        _components_read_system_type_element_read_component__WEBPACK_IMPORTED_MODULE_4__["systemTypeElementReadComponent"],
        _components_update_system_type_element_update_component__WEBPACK_IMPORTED_MODULE_5__["systemTypeElementUpdateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _system_type_element_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemTypeElementRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemTypeElementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_create_system_type_element_create_component__WEBPACK_IMPORTED_MODULE_3__["systemTypeElementCreateComponent"],
                    _components_read_system_type_element_read_component__WEBPACK_IMPORTED_MODULE_4__["systemTypeElementReadComponent"],
                    _components_update_system_type_element_update_component__WEBPACK_IMPORTED_MODULE_5__["systemTypeElementUpdateComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _system_type_element_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemTypeElementRoutingModule"],
                    _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kWS1":
/*!**********************************************************************************!*\
  !*** ./src/app/module/system-type-element/system-type-element-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: systemTypeElementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemTypeElementRoutingModule", function() { return systemTypeElementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_system_type_element_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/system-type-element-create.component */ "E7E4");
/* harmony import */ var _components_read_system_type_element_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/read/system-type-element-read.component */ "CQO7");
/* harmony import */ var _components_update_system_type_element_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update/system-type-element-update.component */ "r1o0");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guard.service */ "Mbag");








const routes = [
    { path: '',
        component: _components_read_system_type_element_read_component__WEBPACK_IMPORTED_MODULE_3__["systemTypeElementReadComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 4 }
    },
    { path: 'create',
        component: _components_create_system_type_element_create_component__WEBPACK_IMPORTED_MODULE_2__["systemTypeElementCreateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 1 }
    },
    { path: 'update/:id',
        component: _components_update_system_type_element_update_component__WEBPACK_IMPORTED_MODULE_4__["systemTypeElementUpdateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 3 }
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class systemTypeElementRoutingModule {
}
systemTypeElementRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: systemTypeElementRoutingModule });
systemTypeElementRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function systemTypeElementRoutingModule_Factory(t) { return new (t || systemTypeElementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](systemTypeElementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemTypeElementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "r1o0":
/*!******************************************************************************************************!*\
  !*** ./src/app/module/system-type-element/components/update/system-type-element-update.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: systemTypeElementUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemTypeElementUpdateComponent", function() { return systemTypeElementUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_system_type_element_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/system-type-element-data-form */ "j0cn");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_system_type_element_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/system-type-element.service */ "5OkV");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");












class systemTypeElementUpdateComponent extends _interface_system_type_element_data_form__WEBPACK_IMPORTED_MODULE_2__["systemTypeElementDataForm"] {
    constructor(activatedRoute, router, formBuilder, validators, activeModal, service) {
        super();
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.loading = true;
        this.register = false;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]]
        });
        if (typeof this.id !== "undefined") {
            this.service.data(this.id).subscribe(data => this.initForm(data), () => this.return);
        }
        else {
            this.activatedRoute.params.subscribe(params => {
                this.id = params.id;
                this.service.data(this.id).subscribe(data => this.initForm(data), () => this.return);
            });
        }
    }
    initForm(data) {
        this.data = data;
        this.form.controls.name.setValue(this.data.name);
        this.loading = false;
    }
    submit(values) {
        this.register = true;
        if (this.form.valid) {
            this.service.update(values, this.id)
                .subscribe(() => {
                if (this.modal) {
                    this.activeModal.close(this.id);
                }
                this.return();
                this.register = false;
            }, error => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Error',
                    type: 'error',
                    text: 'Ocurri?? un error'
                }).then(() => {
                    console.log(error);
                    this.register = false;
                });
            });
        }
        else {
            this.form.markAllAsTouched();
            this.register = false;
        }
    }
    return() {
        if (this.modal) {
            this.activeModal.dismiss('cancel');
            return;
        }
        this.router.navigate(['/systemTypeElement']).then();
    }
}
systemTypeElementUpdateComponent.??fac = function systemTypeElementUpdateComponent_Factory(t) { return new (t || systemTypeElementUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_type_element_service__WEBPACK_IMPORTED_MODULE_7__["systemTypeElementService"])); };
systemTypeElementUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: systemTypeElementUpdateComponent, selectors: [["app-system-type-element-update"]], inputs: { modal: "modal", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 2, vars: 8, consts: [["title", "systemTypeElement", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]], template: function systemTypeElementUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function systemTypeElementUpdateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function systemTypeElementUpdateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.name);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemTypeElementUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-type-element-update',
                templateUrl: './system-type-element-update.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_system_type_element_service__WEBPACK_IMPORTED_MODULE_7__["systemTypeElementService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=module-system-type-element-system-type-element-module-es2015.js.map