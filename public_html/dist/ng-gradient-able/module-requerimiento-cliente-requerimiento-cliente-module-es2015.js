(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-requerimiento-cliente-requerimiento-cliente-module"],{

/***/ "0IRT":
/*!***************************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/service/requerimiento-cliente.service.ts ***!
  \***************************************************************************************/
/*! exports provided: RequerimientoClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteService", function() { return RequerimientoClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");





class RequerimientoClienteService {
    constructor(http) {
        this.http = http;
    }
    create(formData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/RequerimientoCliente`, formData, { headers });
    }
    update(formData, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/RequerimientoCliente/${id}`, formData, { headers });
    }
    delete(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/RequerimientoCliente/${id}`, { headers });
    }
    data(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/RequerimientoCliente/${id}`, { headers });
    }
    combo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/RequerimientoCliente/combo`, { headers });
    }
}
RequerimientoClienteService.??fac = function RequerimientoClienteService_Factory(t) { return new (t || RequerimientoClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequerimientoClienteService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RequerimientoClienteService, factory: RequerimientoClienteService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequerimientoClienteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "3F05":
/*!**********************************************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/components/update/requerimiento-cliente-update.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RequerimientoClienteUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteUpdateComponent", function() { return RequerimientoClienteUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_requerimiento_cliente_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/requerimiento-cliente-data-form */ "CrSz");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/requerimiento-cliente.service */ "0IRT");
/* harmony import */ var _cliente_persona_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cliente-persona/service/cliente-persona.service */ "S89g");
/* harmony import */ var _persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../persona/service/persona.service */ "EX6T");
/* harmony import */ var _catalogo_de_requerimientos_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../catalogo-de-requerimientos/service/catalogo-de-requerimientos.service */ "jpJ9");
/* harmony import */ var _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../system-user/service/system-user.service */ "NAJB");
/* harmony import */ var _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../empleado/service/empleado.service */ "lhJC");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");

















class RequerimientoClienteUpdateComponent extends _interface_requerimiento_cliente_data_form__WEBPACK_IMPORTED_MODULE_2__["RequerimientoClienteDataForm"] {
    constructor(activatedRoute, router, formBuilder, validators, activeModal, service, clientePersonaService, personaService, requerimientoService, SystemUserService, empleadoService) {
        super(clientePersonaService, personaService, requerimientoService, SystemUserService, empleadoService);
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.clientePersonaService = clientePersonaService;
        this.personaService = personaService;
        this.requerimientoService = requerimientoService;
        this.SystemUserService = SystemUserService;
        this.empleadoService = empleadoService;
        this.loading = true;
        this.register = false;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            Cliente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Fecha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Status: [null, []],
            Valor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Solicitante: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Requerimiento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(222)]],
            UsuarioRegistro: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EmpleadoElaboro: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
        this.form.controls.Fecha.setValue(this.data.Fecha);
        this.form.controls.Status.setValue(this.data.Status);
        this.form.controls.Valor.setValue(this.data.Valor);
        this.form.controls.Solicitante.setValue(this.data.Solicitante);
        this.form.controls.Requerimiento.setValue(this.data.Requerimiento);
        this.form.controls.UsuarioRegistro.setValue(this.data.UsuarioRegistro);
        this.form.controls.EmpleadoElaboro.setValue(this.data.EmpleadoElaboro);
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
        this.router.navigate(['/RequerimientoCliente']).then();
    }
}
RequerimientoClienteUpdateComponent.??fac = function RequerimientoClienteUpdateComponent_Factory(t) { return new (t || RequerimientoClienteUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_7__["RequerimientoClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cliente_persona_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_8__["ClientePersonaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__["PersonaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_catalogo_de_requerimientos_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_10__["CatalogoDeRequerimientosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_12__["EmpleadoService"])); };
RequerimientoClienteUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RequerimientoClienteUpdateComponent, selectors: [["app-requerimiento-cliente-update"]], inputs: { modal: "modal", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 9, vars: 22, consts: [["title", "RequerimientoCliente", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]], template: function RequerimientoClienteUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function RequerimientoClienteUpdateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function RequerimientoClienteUpdateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Solicitante);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Requerimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.UsuarioRegistro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.EmpleadoElaboro);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequerimientoClienteUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requerimiento-cliente-update',
                templateUrl: './requerimiento-cliente-update.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_7__["RequerimientoClienteService"] }, { type: _cliente_persona_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_8__["ClientePersonaService"] }, { type: _persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__["PersonaService"] }, { type: _catalogo_de_requerimientos_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_10__["CatalogoDeRequerimientosService"] }, { type: _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"] }, { type: _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_12__["EmpleadoService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "CrSz":
/*!*******************************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/interface/requerimiento-cliente-data-form.ts ***!
  \*******************************************************************************************/
/*! exports provided: RequerimientoClienteDataForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteDataForm", function() { return RequerimientoClienteDataForm; });
/* harmony import */ var _cliente_persona_components_create_cliente_persona_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cliente-persona/components/create/cliente-persona-create.component */ "F7FM");
/* harmony import */ var _persona_components_create_persona_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../persona/components/create/persona-create.component */ "fHnu");
/* harmony import */ var _empleado_components_create_empleado_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../empleado/components/create/empleado-create.component */ "nJsA");
/* harmony import */ var _system_user_components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system-user/components/create/system-user-create.component */ "m+Nj");
/* harmony import */ var _catalogo_de_requerimientos_components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../catalogo-de-requerimientos/components/create/catalogo-de-requerimientos-create.component */ "j9UN");





class RequerimientoClienteDataForm {
    constructor(clientePersonaService, personaService, requerimientoService, SystemUserService, empleadoService) {
        this.Cliente = {
            field: 'Cliente',
            type: 'select',
            label: 'Cliente',
            message: 'Ingrese un ClientePersona'
        };
        this.Fecha = {
            field: 'Fecha',
            type: 'datetime-local',
            label: 'Fecha',
            message: 'Ingrese una fecha'
        };
        this.Status = {
            field: 'Status',
            type: 'number',
            label: 'Status',
            message: 'Ingrese un numero'
        };
        this.Valor = {
            field: 'Valor',
            type: 'text',
            label: 'Valor',
            message: 'Ingrese minimo 1 letra y maximo 65535'
        };
        this.Solicitante = {
            field: 'Solicitante',
            type: 'select',
            label: 'Solicitante',
            message: 'Ingrese un Persona'
        };
        this.Requerimiento = {
            field: 'Requerimiento',
            type: 'select',
            label: 'Requerimiento',
            message: 'Ingrese minimo 1 letra y maximo '
        };
        this.UsuarioRegistro = {
            field: 'UsuarioRegistro',
            type: 'select',
            label: 'Usuario Registr??',
            message: 'Ingrese un Usuario'
        };
        this.EmpleadoElaboro = {
            field: 'EmpleadoElaboro',
            type: 'select',
            label: 'Empleado Elabor??',
            message: 'Ingrese un Empleado'
        };
        // Combo Cliente
        this.Cliente.items = clientePersonaService.combo();
        this.Cliente.empty = true;
        this.Cliente.add = true;
        this.Cliente.component = _cliente_persona_components_create_cliente_persona_create_component__WEBPACK_IMPORTED_MODULE_0__["ClientePersonaCreateComponent"];
        // Combo Solicitante
        this.Solicitante.items = personaService.combo();
        this.Solicitante.empty = true;
        this.Solicitante.add = true;
        this.Solicitante.component = _persona_components_create_persona_create_component__WEBPACK_IMPORTED_MODULE_1__["PersonaCreateComponent"];
        // Combo Catalogo de Requerimiento
        this.Requerimiento.items = requerimientoService.combo();
        this.Requerimiento.empty = true;
        this.Requerimiento.add = true;
        this.Requerimiento.component = _catalogo_de_requerimientos_components_create_catalogo_de_requerimientos_create_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoDeRequerimientosCreateComponent"];
        // Combo Usuario
        this.UsuarioRegistro.items = SystemUserService.combo();
        this.UsuarioRegistro.empty = true;
        this.UsuarioRegistro.add = true;
        this.UsuarioRegistro.component = _system_user_components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__["systemUserCreateComponent"];
        // Combo Empleado
        this.EmpleadoElaboro.items = empleadoService.combo();
        this.EmpleadoElaboro.empty = true;
        this.EmpleadoElaboro.add = true;
        this.EmpleadoElaboro.component = _empleado_components_create_empleado_create_component__WEBPACK_IMPORTED_MODULE_2__["EmpleadoCreateComponent"];
    }
}


/***/ }),

/***/ "Eu1G":
/*!**************************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/requerimiento-cliente-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RequerimientoClienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteRoutingModule", function() { return RequerimientoClienteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_requerimiento_cliente_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/requerimiento-cliente-create.component */ "z+Gc");
/* harmony import */ var _components_read_requerimiento_cliente_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/read/requerimiento-cliente-read.component */ "ZVjv");
/* harmony import */ var _components_update_requerimiento_cliente_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update/requerimiento-cliente-update.component */ "3F05");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guard.service */ "Mbag");








const routes = [
    { path: '',
        component: _components_read_requerimiento_cliente_read_component__WEBPACK_IMPORTED_MODULE_3__["RequerimientoClienteReadComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 4 }
    },
    { path: 'create',
        component: _components_create_requerimiento_cliente_create_component__WEBPACK_IMPORTED_MODULE_2__["RequerimientoClienteCreateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 1 }
    },
    { path: 'update/:id',
        component: _components_update_requerimiento_cliente_update_component__WEBPACK_IMPORTED_MODULE_4__["RequerimientoClienteUpdateComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]], data: { privilege: 3 }
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class RequerimientoClienteRoutingModule {
}
RequerimientoClienteRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: RequerimientoClienteRoutingModule });
RequerimientoClienteRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function RequerimientoClienteRoutingModule_Factory(t) { return new (t || RequerimientoClienteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](RequerimientoClienteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequerimientoClienteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZVjv":
/*!******************************************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/components/read/requerimiento-cliente-read.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RequerimientoClienteReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteReadComponent", function() { return RequerimientoClienteReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/requerimiento-cliente.service */ "0IRT");
/* harmony import */ var _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-privileges/service/system-privileges.service */ "TWxV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/shared/table/table.component */ "CfwT");









const _c0 = ["table"];
function RequerimientoClienteReadComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RequerimientoClienteReadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
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
function RequerimientoClienteReadComponent_button_7_Template(rf, ctx) { if (rf & 1) {
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
class RequerimientoClienteReadComponent {
    constructor(auth, router, service, privilegesService) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.privilegesService = privilegesService;
        this.disabled = true;
        this.serveSource = 'RequerimientoCliente';
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
            'Fecha',
            'Status',
            'Valor',
            'Solicitante',
            'Requerimiento',
            'Usuario Registro',
            'Empleado Elabor_o'
        ];
        this.privilegesService.getPrivileges('RequerimientoCliente')
            .subscribe(data => {
            this.privilege = data;
        });
    }
    ngOnInit() {
    }
    update(id) {
        this.router.navigateByUrl('/RequerimientoCliente/update/' + id);
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
RequerimientoClienteReadComponent.??fac = function RequerimientoClienteReadComponent_Factory(t) { return new (t || RequerimientoClienteReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_4__["RequerimientoClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"])); };
RequerimientoClienteReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RequerimientoClienteReadComponent, selectors: [["app-requerimiento-cliente"]], viewQuery: function RequerimientoClienteReadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
    } }, hostBindings: function RequerimientoClienteReadComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RequerimientoClienteReadComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 10, vars: 7, consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]], template: function RequerimientoClienteReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, RequerimientoClienteReadComponent_button_4_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, RequerimientoClienteReadComponent_button_6_Template, 4, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, RequerimientoClienteReadComponent_button_7_Template, 4, 1, "button", 7);
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequerimientoClienteReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requerimiento-cliente',
                templateUrl: './requerimiento-cliente-read.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_4__["RequerimientoClienteService"] }, { type: _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "xfbM":
/*!******************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/requerimiento-cliente.module.ts ***!
  \******************************************************************************/
/*! exports provided: RequerimientoClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteModule", function() { return RequerimientoClienteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _requerimiento_cliente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requerimiento-cliente-routing.module */ "Eu1G");
/* harmony import */ var _components_create_requerimiento_cliente_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/requerimiento-cliente-create.component */ "z+Gc");
/* harmony import */ var _components_read_requerimiento_cliente_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/read/requerimiento-cliente-read.component */ "ZVjv");
/* harmony import */ var _components_update_requerimiento_cliente_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/requerimiento-cliente-update.component */ "3F05");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class RequerimientoClienteModule {
}
RequerimientoClienteModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: RequerimientoClienteModule });
RequerimientoClienteModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function RequerimientoClienteModule_Factory(t) { return new (t || RequerimientoClienteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _requerimiento_cliente_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequerimientoClienteRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](RequerimientoClienteModule, { declarations: [_components_create_requerimiento_cliente_create_component__WEBPACK_IMPORTED_MODULE_3__["RequerimientoClienteCreateComponent"],
        _components_read_requerimiento_cliente_read_component__WEBPACK_IMPORTED_MODULE_4__["RequerimientoClienteReadComponent"],
        _components_update_requerimiento_cliente_update_component__WEBPACK_IMPORTED_MODULE_5__["RequerimientoClienteUpdateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _requerimiento_cliente_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequerimientoClienteRoutingModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequerimientoClienteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_create_requerimiento_cliente_create_component__WEBPACK_IMPORTED_MODULE_3__["RequerimientoClienteCreateComponent"],
                    _components_read_requerimiento_cliente_read_component__WEBPACK_IMPORTED_MODULE_4__["RequerimientoClienteReadComponent"],
                    _components_update_requerimiento_cliente_update_component__WEBPACK_IMPORTED_MODULE_5__["RequerimientoClienteUpdateComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _requerimiento_cliente_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequerimientoClienteRoutingModule"],
                    _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "z+Gc":
/*!**********************************************************************************************************!*\
  !*** ./src/app/module/requerimiento-cliente/components/create/requerimiento-cliente-create.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RequerimientoClienteCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoClienteCreateComponent", function() { return RequerimientoClienteCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_requerimiento_cliente_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/requerimiento-cliente-data-form */ "CrSz");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/requerimiento-cliente.service */ "0IRT");
/* harmony import */ var _cliente_persona_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cliente-persona/service/cliente-persona.service */ "S89g");
/* harmony import */ var _persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../persona/service/persona.service */ "EX6T");
/* harmony import */ var _catalogo_de_requerimientos_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../catalogo-de-requerimientos/service/catalogo-de-requerimientos.service */ "jpJ9");
/* harmony import */ var _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../system-user/service/system-user.service */ "NAJB");
/* harmony import */ var _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../empleado/service/empleado.service */ "lhJC");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");

















class RequerimientoClienteCreateComponent extends _interface_requerimiento_cliente_data_form__WEBPACK_IMPORTED_MODULE_2__["RequerimientoClienteDataForm"] {
    constructor(router, formBuilder, validators, activeModal, service, clientePersonaService, personaService, requerimientoService, SystemUserService, empleadoService) {
        super(clientePersonaService, personaService, requerimientoService, SystemUserService, empleadoService);
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.clientePersonaService = clientePersonaService;
        this.personaService = personaService;
        this.requerimientoService = requerimientoService;
        this.SystemUserService = SystemUserService;
        this.empleadoService = empleadoService;
        this.register = false;
        this.loading = true;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            Cliente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Fecha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Status: [null, []],
            Valor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Solicitante: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Requerimiento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(222)]],
            UsuarioRegistro: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EmpleadoElaboro: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
        this.router.navigate(['/RequerimientoCliente']).then();
    }
}
RequerimientoClienteCreateComponent.??fac = function RequerimientoClienteCreateComponent_Factory(t) { return new (t || RequerimientoClienteCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_7__["RequerimientoClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cliente_persona_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_8__["ClientePersonaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__["PersonaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_catalogo_de_requerimientos_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_10__["CatalogoDeRequerimientosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_12__["EmpleadoService"])); };
RequerimientoClienteCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RequerimientoClienteCreateComponent, selectors: [["app-requerimiento-cliente-create"]], inputs: { modal: "modal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 9, vars: 20, consts: [["title", "RequerimientoCliente", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]], template: function RequerimientoClienteCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function RequerimientoClienteCreateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function RequerimientoClienteCreateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Solicitante);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Requerimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.UsuarioRegistro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.EmpleadoElaboro);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_13__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_14__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequerimientoClienteCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requerimiento-cliente-create',
                templateUrl: './requerimiento-cliente-create.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_requerimiento_cliente_service__WEBPACK_IMPORTED_MODULE_7__["RequerimientoClienteService"] }, { type: _cliente_persona_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_8__["ClientePersonaService"] }, { type: _persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__["PersonaService"] }, { type: _catalogo_de_requerimientos_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_10__["CatalogoDeRequerimientosService"] }, { type: _system_user_service_system_user_service__WEBPACK_IMPORTED_MODULE_11__["systemUserService"] }, { type: _empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_12__["EmpleadoService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=module-requerimiento-cliente-requerimiento-cliente-module-es2015.js.map