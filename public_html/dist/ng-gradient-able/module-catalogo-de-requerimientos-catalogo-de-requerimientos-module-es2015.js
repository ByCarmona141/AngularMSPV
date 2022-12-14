(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-catalogo-de-requerimientos-catalogo-de-requerimientos-module"],{

/***/ "5cdW":
/*!****************************************************************************************!*\
  !*** ./src/app/module/catalogo-de-requerimientos/catalogo-de-requerimientos.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CatalogoDeRequerimientosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosModule", function() { return CatalogoDeRequerimientosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _catalogo_de_requerimientos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogo-de-requerimientos-routing.module */ "6jLO");
/* harmony import */ var _components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/catalogo-de-requerimientos-create.component */ "j9UN");
/* harmony import */ var _components_read_catalogo_de_requerimientos_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/read/catalogo-de-requerimientos-read.component */ "C4A2");
/* harmony import */ var _components_update_catalogo_de_requerimientos_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/catalogo-de-requerimientos-update.component */ "Ae+u");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class CatalogoDeRequerimientosModule {
}
CatalogoDeRequerimientosModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CatalogoDeRequerimientosModule });
CatalogoDeRequerimientosModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CatalogoDeRequerimientosModule_Factory(t) { return new (t || CatalogoDeRequerimientosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _catalogo_de_requerimientos_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogoDeRequerimientosRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CatalogoDeRequerimientosModule, { declarations: [_components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_3__["CatalogoDeRequerimientosCreateComponent"],
        _components_read_catalogo_de_requerimientos_read_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoDeRequerimientosReadComponent"],
        _components_update_catalogo_de_requerimientos_update_component__WEBPACK_IMPORTED_MODULE_5__["CatalogoDeRequerimientosUpdateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _catalogo_de_requerimientos_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogoDeRequerimientosRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CatalogoDeRequerimientosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_3__["CatalogoDeRequerimientosCreateComponent"],
                    _components_read_catalogo_de_requerimientos_read_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoDeRequerimientosReadComponent"],
                    _components_update_catalogo_de_requerimientos_update_component__WEBPACK_IMPORTED_MODULE_5__["CatalogoDeRequerimientosUpdateComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _catalogo_de_requerimientos_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogoDeRequerimientosRoutingModule"],
                    _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6jLO":
/*!************************************************************************************************!*\
  !*** ./src/app/module/catalogo-de-requerimientos/catalogo-de-requerimientos-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: CatalogoDeRequerimientosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosRoutingModule", function() { return CatalogoDeRequerimientosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/catalogo-de-requerimientos-create.component */ "j9UN");
/* harmony import */ var _components_read_catalogo_de_requerimientos_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/read/catalogo-de-requerimientos-read.component */ "C4A2");
/* harmony import */ var _components_update_catalogo_de_requerimientos_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update/catalogo-de-requerimientos-update.component */ "Ae+u");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guard.service */ "Mbag");








const routes = [
    { path: '',
        component: _components_read_catalogo_de_requerimientos_read_component__WEBPACK_IMPORTED_MODULE_3__["CatalogoDeRequerimientosReadComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 4 }
    },
    { path: 'create',
        component: _components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_2__["CatalogoDeRequerimientosCreateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 1 }
    },
    { path: 'update/:id',
        component: _components_update_catalogo_de_requerimientos_update_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoDeRequerimientosUpdateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 3 }
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class CatalogoDeRequerimientosRoutingModule {
}
CatalogoDeRequerimientosRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CatalogoDeRequerimientosRoutingModule });
CatalogoDeRequerimientosRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CatalogoDeRequerimientosRoutingModule_Factory(t) { return new (t || CatalogoDeRequerimientosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CatalogoDeRequerimientosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CatalogoDeRequerimientosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ae+u":
/*!********************************************************************************************************************!*\
  !*** ./src/app/module/catalogo-de-requerimientos/components/update/catalogo-de-requerimientos-update.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CatalogoDeRequerimientosUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosUpdateComponent", function() { return CatalogoDeRequerimientosUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_catalogo_de_requerimientos_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/catalogo-de-requerimientos-data-form */ "cio4");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/catalogo-de-requerimientos.service */ "jpJ9");
/* harmony import */ var _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../tipo-de-servicio/service/tipo-de-servicio.service */ "1VqA");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");













class CatalogoDeRequerimientosUpdateComponent extends _interface_catalogo_de_requerimientos_data_form__WEBPACK_IMPORTED_MODULE_2__["CatalogoDeRequerimientosDataForm"] {
    constructor(activatedRoute, router, formBuilder, validators, activeModal, service, tipoDeServicioService) {
        super(tipoDeServicioService);
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.tipoDeServicioService = tipoDeServicioService;
        this.loading = true;
        this.register = false;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            TipoDeServicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Requerimiento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Orden: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Requerido: [null, []],
            Catalogo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535)]]
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
        this.form.controls.TipoDeServicio.setValue(this.data.TipoDeServicio);
        this.form.controls.Requerimiento.setValue(this.data.Requerimiento);
        this.form.controls.Orden.setValue(this.data.Orden);
        this.form.controls.Requerido.setValue(this.data.Requerido);
        this.form.controls.Catalogo.setValue(this.data.Catalogo);
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
        this.router.navigate(['/CatalogoDeRequerimientos']).then();
    }
}
CatalogoDeRequerimientosUpdateComponent.??fac = function CatalogoDeRequerimientosUpdateComponent_Factory(t) { return new (t || CatalogoDeRequerimientosUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_7__["CatalogoDeRequerimientosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_8__["TipoDeServicioService"])); };
CatalogoDeRequerimientosUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CatalogoDeRequerimientosUpdateComponent, selectors: [["app-catalogo-de-requerimientos-update"]], inputs: { modal: "modal", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 6, vars: 16, consts: [["title", "CatalogoDeRequerimientos", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]], template: function CatalogoDeRequerimientosUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function CatalogoDeRequerimientosUpdateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function CatalogoDeRequerimientosUpdateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.TipoDeServicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Requerimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Orden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Requerido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Catalogo);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_9__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_10__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CatalogoDeRequerimientosUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalogo-de-requerimientos-update',
                templateUrl: './catalogo-de-requerimientos-update.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_7__["CatalogoDeRequerimientosService"] }, { type: _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_8__["TipoDeServicioService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "C4A2":
/*!****************************************************************************************************************!*\
  !*** ./src/app/module/catalogo-de-requerimientos/components/read/catalogo-de-requerimientos-read.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CatalogoDeRequerimientosReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosReadComponent", function() { return CatalogoDeRequerimientosReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/catalogo-de-requerimientos.service */ "jpJ9");
/* harmony import */ var _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-privileges/service/system-privileges.service */ "TWxV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/shared/table/table.component */ "CfwT");









const _c0 = ["table"];
function CatalogoDeRequerimientosReadComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CatalogoDeRequerimientosReadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
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
function CatalogoDeRequerimientosReadComponent_button_7_Template(rf, ctx) { if (rf & 1) {
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
class CatalogoDeRequerimientosReadComponent {
    constructor(auth, router, service, privilegesService) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.privilegesService = privilegesService;
        this.disabled = true;
        this.serveSource = 'CatalogoDeRequerimientos';
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
            'Tipo De Servicio',
            'Requerimiento',
            'Orden',
            'Requerido',
            'Catalogo'
        ];
        this.privilegesService.getPrivileges('CatalogoDeRequerimientos')
            .subscribe(data => {
            this.privilege = data;
        });
    }
    ngOnInit() {
    }
    update(id) {
        this.router.navigateByUrl('/CatalogoDeRequerimientos/update/' + id);
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
CatalogoDeRequerimientosReadComponent.??fac = function CatalogoDeRequerimientosReadComponent_Factory(t) { return new (t || CatalogoDeRequerimientosReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoDeRequerimientosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"])); };
CatalogoDeRequerimientosReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CatalogoDeRequerimientosReadComponent, selectors: [["app-catalogo-de-requerimientos"]], viewQuery: function CatalogoDeRequerimientosReadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, hostBindings: function CatalogoDeRequerimientosReadComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CatalogoDeRequerimientosReadComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 10, vars: 7, consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]], template: function CatalogoDeRequerimientosReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CatalogoDeRequerimientosReadComponent_button_4_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CatalogoDeRequerimientosReadComponent_button_6_Template, 4, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CatalogoDeRequerimientosReadComponent_button_7_Template, 4, 1, "button", 7);
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CatalogoDeRequerimientosReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalogo-de-requerimientos',
                templateUrl: './catalogo-de-requerimientos-read.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoDeRequerimientosService"] }, { type: _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=module-catalogo-de-requerimientos-catalogo-de-requerimientos-module-es2015.js.map