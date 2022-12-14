(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-prospectacion-prospectacion-module"],{

/***/ "/RQ4":
/*!************************************************************************************************!*\
  !*** ./src/app/module/tipo-de-servicio/components/create/tipo-de-servicio-create.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TipoDeServicioCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDeServicioCreateComponent", function() { return TipoDeServicioCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_tipo_de_servicio_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/tipo-de-servicio-data-form */ "wXIP");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/tipo-de-servicio.service */ "1VqA");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");












class TipoDeServicioCreateComponent extends _interface_tipo_de_servicio_data_form__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioDataForm"] {
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
            Nombre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Descripcion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535)]],
            Activo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
        this.router.navigate(['/TipoDeServicio']).then();
    }
}
TipoDeServicioCreateComponent.??fac = function TipoDeServicioCreateComponent_Factory(t) { return new (t || TipoDeServicioCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__["TipoDeServicioService"])); };
TipoDeServicioCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TipoDeServicioCreateComponent, selectors: [["app-tipo-de-servicio-create"]], inputs: { modal: "modal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 4, vars: 10, consts: [["title", "TipoDeServicio", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]], template: function TipoDeServicioCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function TipoDeServicioCreateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function TipoDeServicioCreateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Activo);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tipo-de-servicio-create',
                templateUrl: './tipo-de-servicio-create.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__["TipoDeServicioService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "1VqA":
/*!*****************************************************************************!*\
  !*** ./src/app/module/tipo-de-servicio/service/tipo-de-servicio.service.ts ***!
  \*****************************************************************************/
/*! exports provided: TipoDeServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDeServicioService", function() { return TipoDeServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");





class TipoDeServicioService {
    constructor(http) {
        this.http = http;
    }
    create(formData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/TipoDeServicio`, formData, { headers });
    }
    update(formData, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/TipoDeServicio/${id}`, formData, { headers });
    }
    delete(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/TipoDeServicio/${id}`, { headers });
    }
    data(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/TipoDeServicio/${id}`, { headers });
    }
    combo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/TipoDeServicio/combo`, { headers });
    }
}
TipoDeServicioService.??fac = function TipoDeServicioService_Factory(t) { return new (t || TipoDeServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TipoDeServicioService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: TipoDeServicioService, factory: TipoDeServicioService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4p8W":
/*!**********************************************************************!*\
  !*** ./src/app/module/prospectacion/prospectacion-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProspectacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionRoutingModule", function() { return ProspectacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/prospectacion-create.component */ "gQTR");
/* harmony import */ var _components_read_prospectacion_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/read/prospectacion-read.component */ "jflo");
/* harmony import */ var _components_update_prospectacion_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update/prospectacion-update.component */ "Tv93");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guard.service */ "Mbag");








const routes = [
    { path: '',
        component: _components_read_prospectacion_read_component__WEBPACK_IMPORTED_MODULE_3__["ProspectacionReadComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 4 }
    },
    { path: 'create',
        component: _components_create_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_2__["ProspectacionCreateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 1 }
    },
    { path: 'update/:id',
        component: _components_update_prospectacion_update_component__WEBPACK_IMPORTED_MODULE_4__["ProspectacionUpdateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 3 }
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class ProspectacionRoutingModule {
}
ProspectacionRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ProspectacionRoutingModule });
ProspectacionRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ProspectacionRoutingModule_Factory(t) { return new (t || ProspectacionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProspectacionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProspectacionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Tv93":
/*!******************************************************************************************!*\
  !*** ./src/app/module/prospectacion/components/update/prospectacion-update.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProspectacionUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionUpdateComponent", function() { return ProspectacionUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_prospectacion_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/prospectacion-data-form */ "tm0K");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_prospectacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/prospectacion.service */ "VZQM");
/* harmony import */ var _cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cliente/service/cliente.service */ "lMn4");
/* harmony import */ var _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../tipo-de-servicio/service/tipo-de-servicio.service */ "1VqA");
/* harmony import */ var _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../empleado/service/empleado.service */ "lhJC");
/* harmony import */ var _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../system-user/service/system-user.service */ "NAJB");
/* harmony import */ var _status_prospectacion_service_status_prospectacion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../status-prospectacion/service/status-prospectacion.service */ "Db0h");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");

















class ProspectacionUpdateComponent extends _interface_prospectacion_data_form__WEBPACK_IMPORTED_MODULE_2__["ProspectacionDataForm"] {
    constructor(activatedRoute, router, formBuilder, validators, activeModal, service, clienteService, tipoDeServicioService, empleadoService, usuarioService, statusService) {
        super(clienteService, tipoDeServicioService, empleadoService, usuarioService, statusService);
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.clienteService = clienteService;
        this.tipoDeServicioService = tipoDeServicioService;
        this.empleadoService = empleadoService;
        this.usuarioService = usuarioService;
        this.statusService = statusService;
        this.loading = true;
        this.register = false;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            Cliente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            FechaYHora: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TipoDeServicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DescripcionDelServicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Usuario: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Empleado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Status: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Canalizado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
        this.form.controls.Cliente.setValue(this.data.Cliente);
        this.form.controls.FechaYHora.setValue(this.data.FechaYHora);
        this.form.controls.TipoDeServicio.setValue(this.data.TipoDeServicio);
        this.form.controls.DescripcionDelServicio.setValue(this.data.DescripcionDelServicio);
        this.form.controls.Usuario.setValue(this.data.Usuario);
        this.form.controls.Empleado.setValue(this.data.Empleado);
        this.form.controls.Status.setValue(this.data.Status);
        this.form.controls.Canalizado.setValue(this.data.Canalizado);
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
        this.router.navigate(['/Prospectacion']).then();
    }
}
ProspectacionUpdateComponent.??fac = function ProspectacionUpdateComponent_Factory(t) { return new (t || ProspectacionUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_prospectacion_service__WEBPACK_IMPORTED_MODULE_7__["ProspectacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_9__["TipoDeServicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_10__["EmpleadoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_status_prospectacion_service_status_prospectacion_service__WEBPACK_IMPORTED_MODULE_12__["StatusProspectacionService"])); };
ProspectacionUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProspectacionUpdateComponent, selectors: [["app-prospectacion-update"]], inputs: { modal: "modal", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 9, vars: 22, consts: [["title", "Prospectacion", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]], template: function ProspectacionUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ProspectacionUpdateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function ProspectacionUpdateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.FechaYHora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.TipoDeServicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.DescripcionDelServicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Empleado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Canalizado);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProspectacionUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prospectacion-update',
                templateUrl: './prospectacion-update.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_prospectacion_service__WEBPACK_IMPORTED_MODULE_7__["ProspectacionService"] }, { type: _cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"] }, { type: _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_9__["TipoDeServicioService"] }, { type: _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_10__["EmpleadoService"] }, { type: _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"] }, { type: _status_prospectacion_service_status_prospectacion_service__WEBPACK_IMPORTED_MODULE_12__["StatusProspectacionService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VZQM":
/*!***********************************************************************!*\
  !*** ./src/app/module/prospectacion/service/prospectacion.service.ts ***!
  \***********************************************************************/
/*! exports provided: ProspectacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionService", function() { return ProspectacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");





class ProspectacionService {
    constructor(http) {
        this.http = http;
    }
    create(formData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/Prospectacion`, formData, { headers });
    }
    update(formData, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/Prospectacion/${id}`, formData, { headers });
    }
    delete(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/Prospectacion/${id}`, { headers });
    }
    data(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/Prospectacion/${id}`, { headers });
    }
    combo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/Prospectacion/combo`, { headers });
    }
}
ProspectacionService.??fac = function ProspectacionService_Factory(t) { return new (t || ProspectacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProspectacionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProspectacionService, factory: ProspectacionService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProspectacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gQTR":
/*!******************************************************************************************!*\
  !*** ./src/app/module/prospectacion/components/create/prospectacion-create.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProspectacionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionCreateComponent", function() { return ProspectacionCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_prospectacion_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/prospectacion-data-form */ "tm0K");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_prospectacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/prospectacion.service */ "VZQM");
/* harmony import */ var _cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cliente/service/cliente.service */ "lMn4");
/* harmony import */ var _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../tipo-de-servicio/service/tipo-de-servicio.service */ "1VqA");
/* harmony import */ var _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../empleado/service/empleado.service */ "lhJC");
/* harmony import */ var _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../system-user/service/system-user.service */ "NAJB");
/* harmony import */ var _status_prospectacion_service_status_prospectacion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../status-prospectacion/service/status-prospectacion.service */ "Db0h");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");

















class ProspectacionCreateComponent extends _interface_prospectacion_data_form__WEBPACK_IMPORTED_MODULE_2__["ProspectacionDataForm"] {
    constructor(router, formBuilder, validators, activeModal, service, clienteService, tipoDeServicioService, empleadoService, usuarioService, statusService) {
        super(clienteService, tipoDeServicioService, empleadoService, usuarioService, statusService);
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.clienteService = clienteService;
        this.tipoDeServicioService = tipoDeServicioService;
        this.empleadoService = empleadoService;
        this.usuarioService = usuarioService;
        this.statusService = statusService;
        this.register = false;
        this.loading = true;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            Cliente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            FechaYHora: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TipoDeServicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DescripcionDelServicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Usuario: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Empleado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Status: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Canalizado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
        this.router.navigate(['/Prospectacion']).then();
    }
}
ProspectacionCreateComponent.??fac = function ProspectacionCreateComponent_Factory(t) { return new (t || ProspectacionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_prospectacion_service__WEBPACK_IMPORTED_MODULE_7__["ProspectacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_9__["TipoDeServicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_10__["EmpleadoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_status_prospectacion_service_status_prospectacion_service__WEBPACK_IMPORTED_MODULE_12__["StatusProspectacionService"])); };
ProspectacionCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProspectacionCreateComponent, selectors: [["app-prospectacion-create"]], inputs: { modal: "modal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 9, vars: 20, consts: [["title", "Prospectacion", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]], template: function ProspectacionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ProspectacionCreateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function ProspectacionCreateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.FechaYHora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.TipoDeServicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.DescripcionDelServicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Empleado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Canalizado);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProspectacionCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prospectacion-create',
                templateUrl: './prospectacion-create.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_prospectacion_service__WEBPACK_IMPORTED_MODULE_7__["ProspectacionService"] }, { type: _cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"] }, { type: _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_9__["TipoDeServicioService"] }, { type: _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_10__["EmpleadoService"] }, { type: _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"] }, { type: _status_prospectacion_service_status_prospectacion_service__WEBPACK_IMPORTED_MODULE_12__["StatusProspectacionService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jflo":
/*!**************************************************************************************!*\
  !*** ./src/app/module/prospectacion/components/read/prospectacion-read.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProspectacionReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionReadComponent", function() { return ProspectacionReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_prospectacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/prospectacion.service */ "VZQM");
/* harmony import */ var _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-privileges/service/system-privileges.service */ "TWxV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/shared/table/table.component */ "CfwT");









const _c0 = ["table"];
function ProspectacionReadComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProspectacionReadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
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
function ProspectacionReadComponent_button_7_Template(rf, ctx) { if (rf & 1) {
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
class ProspectacionReadComponent {
    constructor(auth, router, service, privilegesService) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.privilegesService = privilegesService;
        this.disabled = true;
        this.serveSource = 'Prospectacion';
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
            'Cliente',
            'Fecha Y Hora',
            'Tipo De Servicio',
            'Descripcion Del Servicio',
            'Usuario',
            'Empleado',
            'Status',
            'Canalizado'
        ];
        this.privilegesService.getPrivileges('Prospectacion')
            .subscribe(data => {
            this.privilege = data;
        });
    }
    ngOnInit() {
    }
    update(id) {
        this.router.navigateByUrl('/Prospectacion/update/' + id);
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
ProspectacionReadComponent.??fac = function ProspectacionReadComponent_Factory(t) { return new (t || ProspectacionReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_prospectacion_service__WEBPACK_IMPORTED_MODULE_4__["ProspectacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"])); };
ProspectacionReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProspectacionReadComponent, selectors: [["app-prospectacion"]], viewQuery: function ProspectacionReadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, hostBindings: function ProspectacionReadComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProspectacionReadComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 10, vars: 7, consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]], template: function ProspectacionReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProspectacionReadComponent_button_4_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ProspectacionReadComponent_button_6_Template, 4, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ProspectacionReadComponent_button_7_Template, 4, 1, "button", 7);
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProspectacionReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prospectacion',
                templateUrl: './prospectacion-read.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_prospectacion_service__WEBPACK_IMPORTED_MODULE_4__["ProspectacionService"] }, { type: _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "n3kb":
/*!**************************************************************!*\
  !*** ./src/app/module/prospectacion/prospectacion.module.ts ***!
  \**************************************************************/
/*! exports provided: ProspectacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionModule", function() { return ProspectacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _prospectacion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prospectacion-routing.module */ "4p8W");
/* harmony import */ var _components_create_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/prospectacion-create.component */ "gQTR");
/* harmony import */ var _components_read_prospectacion_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/read/prospectacion-read.component */ "jflo");
/* harmony import */ var _components_update_prospectacion_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/prospectacion-update.component */ "Tv93");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class ProspectacionModule {
}
ProspectacionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ProspectacionModule });
ProspectacionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ProspectacionModule_Factory(t) { return new (t || ProspectacionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _prospectacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProspectacionRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProspectacionModule, { declarations: [_components_create_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_3__["ProspectacionCreateComponent"],
        _components_read_prospectacion_read_component__WEBPACK_IMPORTED_MODULE_4__["ProspectacionReadComponent"],
        _components_update_prospectacion_update_component__WEBPACK_IMPORTED_MODULE_5__["ProspectacionUpdateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _prospectacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProspectacionRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProspectacionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_create_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_3__["ProspectacionCreateComponent"],
                    _components_read_prospectacion_read_component__WEBPACK_IMPORTED_MODULE_4__["ProspectacionReadComponent"],
                    _components_update_prospectacion_update_component__WEBPACK_IMPORTED_MODULE_5__["ProspectacionUpdateComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _prospectacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProspectacionRoutingModule"],
                    _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tm0K":
/*!***************************************************************************!*\
  !*** ./src/app/module/prospectacion/interface/prospectacion-data-form.ts ***!
  \***************************************************************************/
/*! exports provided: ProspectacionDataForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectacionDataForm", function() { return ProspectacionDataForm; });
/* harmony import */ var _cliente_components_create_cliente_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cliente/components/create/cliente-create.component */ "exct");
/* harmony import */ var _empleado_components_create_empleado_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../empleado/components/create/empleado-create.component */ "nJsA");
/* harmony import */ var _tipo_de_servicio_components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tipo-de-servicio/components/create/tipo-de-servicio-create.component */ "/RQ4");
/* harmony import */ var _system_user_components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system-user/components/create/system-user-create.component */ "m+Nj");
/* harmony import */ var _status_prospectacion_components_create_status_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../status-prospectacion/components/create/status-prospectacion-create.component */ "tsN5");





class ProspectacionDataForm {
    constructor(clienteService, tipoDeServicioService, empleadoService, usuarioSevice, statusService) {
        this.Cliente = {
            field: 'Cliente',
            type: 'select',
            label: 'Cliente',
            message: 'Ingrese un Cliente'
        };
        this.FechaYHora = {
            field: 'FechaYHora',
            type: 'datetime-local',
            label: 'Fecha Y Hora',
            message: 'Ingrese una fecha'
        };
        this.TipoDeServicio = {
            field: 'TipoDeServicio',
            type: 'select',
            label: 'Tipo De Servicio',
            message: 'Ingrese un numero'
        };
        this.DescripcionDelServicio = {
            field: 'DescripcionDelServicio',
            type: 'text',
            label: 'Descripci??n Del Servicio',
            message: 'Ingrese minimo 1 letra y maximo 65535'
        };
        this.Usuario = {
            field: 'Usuario',
            type: 'select',
            label: 'Usuario',
            message: 'Ingrese un numero'
        };
        this.Empleado = {
            field: 'Empleado',
            type: 'select',
            label: 'Empleado',
            message: 'Ingrese un Empleado'
        };
        this.Status = {
            field: 'Status',
            type: 'select',
            label: 'Status',
            message: 'Ingrese un numero'
        };
        this.Canalizado = {
            field: 'Canalizado',
            type: 'number',
            label: 'Canalizado',
            message: 'Ingrese un numero'
        };
        // Select de Cliente
        this.Cliente.items = clienteService.combo();
        this.Cliente.empty = true;
        this.Cliente.add = true;
        this.Cliente.component = _cliente_components_create_cliente_create_component__WEBPACK_IMPORTED_MODULE_0__["ClienteCreateComponent"];
        // Select de Tipo de Servicio
        this.TipoDeServicio.items = tipoDeServicioService.combo();
        this.TipoDeServicio.empty = true;
        this.TipoDeServicio.add = true;
        this.TipoDeServicio.component = _tipo_de_servicio_components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioCreateComponent"];
        // Select de Empleado
        this.Empleado.items = empleadoService.combo();
        this.Empleado.empty = true;
        this.Empleado.add = true;
        this.Empleado.component = _empleado_components_create_empleado_create_component__WEBPACK_IMPORTED_MODULE_1__["EmpleadoCreateComponent"];
        // Select de Usuario
        this.Usuario.items = usuarioSevice.combo();
        this.Usuario.empty = true;
        this.Usuario.add = true;
        this.Usuario.component = _system_user_components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__["systemUserCreateComponent"];
        // Select de Status
        this.Status.items = statusService.combo();
        this.Status.empty = true;
        this.Status.add = true;
        this.Status.component = _status_prospectacion_components_create_status_prospectacion_create_component__WEBPACK_IMPORTED_MODULE_4__["StatusProspectacionCreateComponent"];
    }
}


/***/ }),

/***/ "wXIP":
/*!*********************************************************************************!*\
  !*** ./src/app/module/tipo-de-servicio/interface/tipo-de-servicio-data-form.ts ***!
  \*********************************************************************************/
/*! exports provided: TipoDeServicioDataForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDeServicioDataForm", function() { return TipoDeServicioDataForm; });
class TipoDeServicioDataForm {
    constructor() {
        this.Nombre = {
            field: 'Nombre',
            type: 'text',
            label: 'Nombre',
            message: 'Ingrese minimo 1 letra y maximo 64'
        };
        this.Descripcion = {
            field: 'Descripcion',
            type: 'text',
            label: 'Descripci??n',
            message: 'Ingrese minimo 1 letra y maximo 65535'
        };
        this.Activo = {
            field: 'Activo',
            type: 'number',
            label: 'Activo',
            message: 'Ingrese un numero'
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=module-prospectacion-prospectacion-module-es2015.js.map