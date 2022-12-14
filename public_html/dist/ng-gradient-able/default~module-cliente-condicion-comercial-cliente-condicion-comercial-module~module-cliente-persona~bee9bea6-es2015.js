(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~bee9bea6"],{

/***/ "F7FM":
/*!**********************************************************************************************!*\
  !*** ./src/app/module/cliente-persona/components/create/cliente-persona-create.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ClientePersonaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePersonaCreateComponent", function() { return ClientePersonaCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interface_cliente_persona_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/cliente-persona-data-form */ "Ifrj");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/validators.service */ "2/8O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/cliente-persona.service */ "S89g");
/* harmony import */ var _cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cliente/service/cliente.service */ "lMn4");
/* harmony import */ var _persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../persona/service/persona.service */ "EX6T");
/* harmony import */ var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/shared/create-template/create-template.component */ "RcLa");
/* harmony import */ var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/shared/input-template/input-template.component */ "OxdX");














class ClientePersonaCreateComponent extends _interface_cliente_persona_data_form__WEBPACK_IMPORTED_MODULE_2__["ClientePersonaDataForm"] {
    constructor(router, formBuilder, validators, activeModal, service, clienteService, personaService) {
        super(clienteService, personaService);
        this.router = router;
        this.formBuilder = formBuilder;
        this.validators = validators;
        this.activeModal = activeModal;
        this.service = service;
        this.clienteService = clienteService;
        this.personaService = personaService;
        this.register = false;
        this.loading = true;
        this.modal = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            Cliente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Persona: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Relacion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Titulo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65)]],
            Telefono: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            Telefono2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            CorreoElectronico: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64)]]
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
        this.router.navigate(['/ClientePersona']).then();
    }
}
ClientePersonaCreateComponent.??fac = function ClientePersonaCreateComponent_Factory(t) { return new (t || ClientePersonaCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_7__["ClientePersonaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__["PersonaService"])); };
ClientePersonaCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ClientePersonaCreateComponent, selectors: [["app-cliente-persona-create"]], inputs: { modal: "modal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 8, vars: 18, consts: [["title", "ClientePersona", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]], template: function ClientePersonaCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ClientePersonaCreateComponent_Template_app_create_template_submit_0_listener($event) { return ctx.submit($event); })("cancel", function ClientePersonaCreateComponent_Template_app_create_template_cancel_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-input-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Persona);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Relacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Telefono2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.CorreoElectronico);
    } }, directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_10__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_11__["InputTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientePersonaCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cliente-persona-create',
                templateUrl: './cliente-persona-create.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: _service_cliente_persona_service__WEBPACK_IMPORTED_MODULE_7__["ClientePersonaService"] }, { type: _cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"] }, { type: _persona_service_persona_service__WEBPACK_IMPORTED_MODULE_9__["PersonaService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ifrj":
/*!*******************************************************************************!*\
  !*** ./src/app/module/cliente-persona/interface/cliente-persona-data-form.ts ***!
  \*******************************************************************************/
/*! exports provided: ClientePersonaDataForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePersonaDataForm", function() { return ClientePersonaDataForm; });
/* harmony import */ var _cliente_components_create_cliente_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cliente/components/create/cliente-create.component */ "exct");
/* harmony import */ var _persona_components_create_persona_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../persona/components/create/persona-create.component */ "fHnu");


class ClientePersonaDataForm {
    constructor(clienteService, personaService) {
        this.Cliente = {
            field: 'Cliente',
            type: 'select',
            label: 'Cliente',
            message: 'Ingrese un Cliente'
        };
        this.Persona = {
            field: 'Persona',
            type: 'select',
            label: 'Persona',
            message: 'Ingrese un Persona'
        };
        this.Relacion = {
            field: 'Relacion',
            type: 'number',
            label: 'Relaci??n',
            message: 'Ingrese un numero'
        };
        this.Titulo = {
            field: 'Titulo',
            type: 'text',
            label: 'Titulo',
            message: 'Ingrese minimo 1 letra y maximo 65'
        };
        this.Telefono = {
            field: 'Telefono',
            type: 'text',
            label: 'Tel??fono',
            message: 'Ingrese minimo 1 letra y maximo 16'
        };
        this.Telefono2 = {
            field: 'Telefono2',
            type: 'text',
            label: 'Tel??fono2',
            message: 'Ingrese minimo 1 letra y maximo 16'
        };
        this.CorreoElectronico = {
            field: 'CorreoElectronico',
            type: 'text',
            label: 'Correo Electr??nico',
            message: 'Ingrese minimo 1 letra y maximo 64'
        };
        this.Cliente.items = clienteService.combo();
        this.Cliente.empty = true;
        this.Cliente.add = true;
        this.Cliente.component = _cliente_components_create_cliente_create_component__WEBPACK_IMPORTED_MODULE_0__["ClienteCreateComponent"];
        this.Persona.items = personaService.combo();
        this.Persona.empty = true;
        this.Persona.add = true;
        this.Persona.component = _persona_components_create_persona_create_component__WEBPACK_IMPORTED_MODULE_1__["PersonaCreateComponent"];
    }
}


/***/ }),

/***/ "S89g":
/*!***************************************************************************!*\
  !*** ./src/app/module/cliente-persona/service/cliente-persona.service.ts ***!
  \***************************************************************************/
/*! exports provided: ClientePersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePersonaService", function() { return ClientePersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");





class ClientePersonaService {
    constructor(http) {
        this.http = http;
    }
    create(formData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/ClientePersona`, formData, { headers });
    }
    update(formData, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/ClientePersona/${id}`, formData, { headers });
    }
    delete(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/ClientePersona/${id}`, { headers });
    }
    data(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/ClientePersona/${id}`, { headers });
    }
    combo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
        });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"]}api/ClientePersona/combo`, { headers });
    }
}
ClientePersonaService.??fac = function ClientePersonaService_Factory(t) { return new (t || ClientePersonaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ClientePersonaService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ClientePersonaService, factory: ClientePersonaService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientePersonaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~bee9bea6-es2015.js.map