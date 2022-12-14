(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-system-role-system-role-module"],{

/***/ "AlO+":
/*!**************************************************************************************!*\
  !*** ./src/app/module/system-role/components/update/system-role-update.component.ts ***!
  \**************************************************************************************/
/*! exports provided: systemRoleUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleUpdateComponent", function() { return systemRoleUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_system_role_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/system-role-data-form */ "xZSi");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_system_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/system-role.service */ "s5+H");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");












class systemRoleUpdateComponent extends _interface_system_role_data_form__WEBPACK_IMPORTED_MODULE_2__["systemRoleDataForm"] {
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
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            active: [null, []]
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
        this.form.controls.active.setValue(this.data.active);
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
        this.router.navigate(['/systemRole']).then();
    }
}
systemRoleUpdateComponent.??fac = function systemRoleUpdateComponent_Factory(t) { return new (t || systemRoleUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_role_service__WEBPACK_IMPORTED_MODULE_7__["systemRoleService"])); };
systemRoleUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: systemRoleUpdateComponent, selectors: [["app-system-role-update"]], inputs: { modal: "modal", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 3, vars: 10, consts: [["title", "systemRole", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]], template: function systemRoleUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function systemRoleUpdateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function systemRoleUpdateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.active);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemRoleUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-role-update',
                templateUrl: './system-role-update.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_system_role_service__WEBPACK_IMPORTED_MODULE_7__["systemRoleService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ifv7":
/*!**********************************************************!*\
  !*** ./src/app/module/system-role/system-role.module.ts ***!
  \**********************************************************/
/*! exports provided: systemRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleModule", function() { return systemRoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _system_role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-role-routing.module */ "dTWk");
/* harmony import */ var _components_create_system_role_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/system-role-create.component */ "qJgE");
/* harmony import */ var _components_read_system_role_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/read/system-role-read.component */ "kPFy");
/* harmony import */ var _components_update_system_role_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/system-role-update.component */ "AlO+");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/privileges/privileges.component */ "tepG");










class systemRoleModule {
}
systemRoleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: systemRoleModule });
systemRoleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function systemRoleModule_Factory(t) { return new (t || systemRoleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _system_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemRoleRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](systemRoleModule, { declarations: [_components_create_system_role_create_component__WEBPACK_IMPORTED_MODULE_3__["systemRoleCreateComponent"],
        _components_read_system_role_read_component__WEBPACK_IMPORTED_MODULE_4__["systemRoleReadComponent"],
        _components_update_system_role_update_component__WEBPACK_IMPORTED_MODULE_5__["systemRoleUpdateComponent"],
        _components_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_8__["PrivilegesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _system_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemRoleRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemRoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_create_system_role_create_component__WEBPACK_IMPORTED_MODULE_3__["systemRoleCreateComponent"],
                    _components_read_system_role_read_component__WEBPACK_IMPORTED_MODULE_4__["systemRoleReadComponent"],
                    _components_update_system_role_update_component__WEBPACK_IMPORTED_MODULE_5__["systemRoleUpdateComponent"],
                    _components_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_8__["PrivilegesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _system_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemRoleRoutingModule"],
                    _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dTWk":
/*!******************************************************************!*\
  !*** ./src/app/module/system-role/system-role-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: systemRoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleRoutingModule", function() { return systemRoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_system_role_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/system-role-create.component */ "qJgE");
/* harmony import */ var _components_read_system_role_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/read/system-role-read.component */ "kPFy");
/* harmony import */ var _components_update_system_role_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update/system-role-update.component */ "AlO+");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guard.service */ "Mbag");
/* harmony import */ var _components_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/privileges/privileges.component */ "tepG");









const routes = [
    { path: '',
        component: _components_read_system_role_read_component__WEBPACK_IMPORTED_MODULE_3__["systemRoleReadComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 4 }
    },
    { path: 'create',
        component: _components_create_system_role_create_component__WEBPACK_IMPORTED_MODULE_2__["systemRoleCreateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 1 }
    },
    { path: 'update/:id',
        component: _components_update_system_role_update_component__WEBPACK_IMPORTED_MODULE_4__["systemRoleUpdateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 3 }
    },
    { path: 'privileges/:id',
        component: _components_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_6__["PrivilegesComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 3 }
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class systemRoleRoutingModule {
}
systemRoleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: systemRoleRoutingModule });
systemRoleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function systemRoleRoutingModule_Factory(t) { return new (t || systemRoleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](systemRoleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemRoleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kPFy":
/*!**********************************************************************************!*\
  !*** ./src/app/module/system-role/components/read/system-role-read.component.ts ***!
  \**********************************************************************************/
/*! exports provided: systemRoleReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleReadComponent", function() { return systemRoleReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_system_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/system-role.service */ "s5+H");
/* harmony import */ var _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-privileges/service/system-privileges.service */ "TWxV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/shared/table/table.component */ "CfwT");









const _c0 = ["table"];
function systemRoleReadComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function systemRoleReadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
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
function systemRoleReadComponent_button_7_Template(rf, ctx) { if (rf & 1) {
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
class systemRoleReadComponent {
    constructor(auth, router, service, privilegesService) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.privilegesService = privilegesService;
        this.disabled = true;
        this.serveSource = 'systemRole';
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
            'Nombre',
            'Activo',
            'Privilegios'
        ];
        this.privilegesService.getPrivileges('systemRole')
            .subscribe(data => {
            this.privilege = data;
        });
    }
    ngOnInit() {
    }
    update(id) {
        this.router.navigateByUrl('/systemRole/update/' + id);
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
        if (classTag.includes('privileges')) {
            this.router.navigateByUrl('/systemRole/privileges/' + input.attributes.index.value).then();
        }
    }
}
systemRoleReadComponent.??fac = function systemRoleReadComponent_Factory(t) { return new (t || systemRoleReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_role_service__WEBPACK_IMPORTED_MODULE_4__["systemRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"])); };
systemRoleReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: systemRoleReadComponent, selectors: [["app-system-role"]], viewQuery: function systemRoleReadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, hostBindings: function systemRoleReadComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function systemRoleReadComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 10, vars: 7, consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]], template: function systemRoleReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, systemRoleReadComponent_button_4_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, systemRoleReadComponent_button_6_Template, 4, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, systemRoleReadComponent_button_7_Template, 4, 1, "button", 7);
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemRoleReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-role',
                templateUrl: './system-role-read.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_system_role_service__WEBPACK_IMPORTED_MODULE_4__["systemRoleService"] }, { type: _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "qJgE":
/*!**************************************************************************************!*\
  !*** ./src/app/module/system-role/components/create/system-role-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: systemRoleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleCreateComponent", function() { return systemRoleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_system_role_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/system-role-data-form */ "xZSi");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_system_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/system-role.service */ "s5+H");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");












class systemRoleCreateComponent extends _interface_system_role_data_form__WEBPACK_IMPORTED_MODULE_2__["systemRoleDataForm"] {
    constructor(router, formBuilder, validators, activeModal, service) {
        super();
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.register = false;
        this.loading = true;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            active: [null, []]
        });
        this.loading = false;
    }
    submit(values) {
        this.register = true;
        if (this.form.valid) {
            this.service.create(values)
                .subscribe(resp => {
                if (this.modal) {
                    let id = resp['@id'].split('/');
                    id = parseInt(id[id.length - 1]);
                    this.activeModal.close(id);
                    return;
                }
                this.return();
                this.register = false;
            }, error => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Error',
                    type: 'error',
                    text: 'Ocurri?? un error' + error.message
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
        this.router.navigate(['/systemRole']).then();
    }
}
systemRoleCreateComponent.??fac = function systemRoleCreateComponent_Factory(t) { return new (t || systemRoleCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_role_service__WEBPACK_IMPORTED_MODULE_7__["systemRoleService"])); };
systemRoleCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: systemRoleCreateComponent, selectors: [["app-system-role-create"]], inputs: { modal: "modal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 3, vars: 8, consts: [["title", "systemRole", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]], template: function systemRoleCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function systemRoleCreateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function systemRoleCreateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.active);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemRoleCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-role-create',
                templateUrl: './system-role-create.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_system_role_service__WEBPACK_IMPORTED_MODULE_7__["systemRoleService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "s5+H":
/*!*******************************************************************!*\
  !*** ./src/app/module/system-role/service/system-role.service.ts ***!
  \*******************************************************************/
/*! exports provided: systemRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleService", function() { return systemRoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");





class systemRoleService {
    constructor(http) {
        this.http = http;
    }
    create(formData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole`, formData, { headers });
    }
    update(formData, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole/${id}`, formData, { headers });
    }
    delete(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole/${id}`, { headers });
    }
    data(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole/${id}`, { headers });
    }
    combo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole/combo`, { headers });
    }
    privilegesRole(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole/${id}/privileges`, { headers });
    }
    setSystemRolePrivileges(formValue, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/systemRole/${id}/privileges`, { formValue }, { headers });
    }
}
systemRoleService.??fac = function systemRoleService_Factory(t) { return new (t || systemRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
systemRoleService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: systemRoleService, factory: systemRoleService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemRoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tepG":
/*!**********************************************************************************!*\
  !*** ./src/app/module/system-role/components/privileges/privileges.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PrivilegesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegesComponent", function() { return PrivilegesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_system_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/system-role.service */ "s5+H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PrivilegesComponent_header_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Privilegios del rol: ", ctx_r0.rol, "");
} }
function PrivilegesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PrivilegesComponent_div_5_th_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function PrivilegesComponent_div_5_th_19_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r7.allPrivilegesPrivilege($event.target, i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const privilege_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", privilege_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](privilege_r5.name);
} }
function PrivilegesComponent_div_5_tr_21_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const privilegeForm_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", privilegeForm_r11);
} }
function PrivilegesComponent_div_5_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function PrivilegesComponent_div_5_tr_21_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const formPrivilege_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r12.allPrivilegesForm($event.target, formPrivilege_r9.id + "-" + formPrivilege_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, PrivilegesComponent_div_5_tr_21_td_10_Template, 3, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const formPrivilege_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](formPrivilege_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](formPrivilege_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](formPrivilege_r9.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.form.get(formPrivilege_r9.id + "-" + formPrivilege_r9.name).controls);
} }
function PrivilegesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ruta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Todos los");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "privilegios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function PrivilegesComponent_div_5_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.allPrivileges($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, PrivilegesComponent_div_5_th_19_Template, 6, 2, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, PrivilegesComponent_div_5_tr_21_Template, 11, 4, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.data.privileges);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.data.privilegesRole);
} }
const _c0 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class PrivilegesComponent {
    constructor(activatedRoute, router, formBuilder, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.load = true;
        this.register = false;
        this.rol = '';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.form = this.formBuilder.group({});
            this.service.privilegesRole(this.id)
                .subscribe(resp => {
                this.data = resp;
                this.rol = resp.name;
                this.initForm();
                this.load = false;
            }, error => this.router.navigateByUrl('/systemRole'));
        });
    }
    initForm() {
        //console.log(this.data);
        this.data.privilegesRole.forEach(item => {
            console.log(item);
            console.log(this.form);
            this.form.addControl(item.id + '-' + item.name, this.formBuilder.array([]));
            item.privileges.forEach(privilege => {
                console.log(item.id + '-' + item.name);
                // @ts-ignore
                this.form.get(item.id + '-' + item.name).controls.push(this.formBuilder.control(privilege, []));
            });
        });
    }
    submit() {
        this.register = true;
        const formValue = [];
        Object.keys(this.form.controls).forEach(key => {
            const control = this.form.get(key);
            const privileges = [];
            // @ts-ignore
            for (const item of control.controls) {
                privileges.push(item.value);
            }
            formValue.push({
                form: key,
                privileges
            });
        });
        if (this.form.valid) {
            this.service.setSystemRolePrivileges(formValue, this.id)
                .subscribe(() => {
                this.router.navigateByUrl('/systemRole');
                this.register = false;
            }, error => {
                this.register = false;
            });
        }
        else {
            Object.values(this.form.controls).forEach(control => control.markAllAsTouched());
            this.register = false;
        }
    }
    allPrivilegesForm(target, formPrivilege) {
        const input = target;
        // @ts-ignore
        const controls = this.form.get(formPrivilege).controls;
        controls.forEach(control => {
            control.patchValue(input.checked);
        });
    }
    allPrivilegesPrivilege(target, i) {
        const input = target;
        for (const key of Object.keys(this.form.controls)) {
            const control = this.form.get(key);
            // @ts-ignore
            control.controls[i].patchValue(input.checked);
        }
    }
    allPrivileges(target) {
        const input = target;
        for (const key of Object.keys(this.form.controls)) {
            const control = this.form.get(key);
            // @ts-ignore
            control.controls.forEach(item => {
                item.patchValue(input.checked);
            });
        }
    }
}
PrivilegesComponent.??fac = function PrivilegesComponent_Factory(t) { return new (t || PrivilegesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_role_service__WEBPACK_IMPORTED_MODULE_3__["systemRoleService"])); };
PrivilegesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PrivilegesComponent, selectors: [["app-privileges"]], decls: 14, vars: 10, consts: [[1, "card", "animated", "fadeIn"], ["autocomplete", "off", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["class", "card-header", 4, "ngIf"], [1, "card-body"], [4, "ngIf"], [1, "card-footer"], [1, "row", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fa", 3, "ngClass"], ["type", "reset", "routerLink", "CelaRol", 1, "btn", "btn-danger", "ml-2", 3, "disabled"], [1, "fa", "fa-window-close"], [1, "card-header"], [1, "card-actions"], ["href", "#", "data-card-toggle", "", 1, "card-action", "card-action-toggle"], [1, "card-title"], [1, "row", "text-center", "animated", "fadeIn", "fast"], [1, "col"], [1, "fa", "fa-spinner", "fa-5x", "fa-spin"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], ["title", "Selecciona todos los privilegios"], [1, "text-center"], ["type", "checkbox", 3, "change"], [3, "title", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "title"], ["type", "checkbox", 3, "formControl"]], template: function PrivilegesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function PrivilegesComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PrivilegesComponent_header_2_Template, 5, 1, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PrivilegesComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, PrivilegesComponent_div_5_Template, 22, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](7, _c0, !ctx.register, ctx.register));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.register);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2aWxlZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrivilegesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privileges',
                templateUrl: './privileges.component.html',
                styleUrls: ['./privileges.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _service_system_role_service__WEBPACK_IMPORTED_MODULE_3__["systemRoleService"] }]; }, null); })();


/***/ }),

/***/ "xZSi":
/*!***********************************************************************!*\
  !*** ./src/app/module/system-role/interface/system-role-data-form.ts ***!
  \***********************************************************************/
/*! exports provided: systemRoleDataForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRoleDataForm", function() { return systemRoleDataForm; });
class systemRoleDataForm {
    constructor() {
        this.name = {
            field: 'name',
            type: 'text',
            label: 'Name',
            message: 'Ingrese minimo 1 letra y maximo 128'
        };
        this.active = {
            field: 'active',
            type: 'number',
            label: 'Active',
            message: 'Ingrese un numero'
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=module-system-role-system-role-module-es2015.js.map