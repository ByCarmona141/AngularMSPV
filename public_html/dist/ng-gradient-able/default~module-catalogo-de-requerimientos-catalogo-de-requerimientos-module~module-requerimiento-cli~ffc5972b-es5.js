(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~module-catalogo-de-requerimientos-catalogo-de-requerimientos-module~module-requerimiento-cli~ffc5972b"], {
    /***/
    "/RQ4":
    /*!************************************************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/components/create/tipo-de-servicio-create.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: TipoDeServicioCreateComponent */

    /***/
    function RQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioCreateComponent", function () {
        return TipoDeServicioCreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _interface_tipo_de_servicio_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../interface/tipo-de-servicio-data-form */
      "wXIP");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/validators.service */
      "2/8O");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/tipo-de-servicio.service */
      "1VqA");
      /* harmony import */


      var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../components/shared/create-template/create-template.component */
      "RcLa");
      /* harmony import */


      var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../components/shared/input-template/input-template.component */
      "OxdX");

      var TipoDeServicioCreateComponent = /*#__PURE__*/function (_interface_tipo_de_se) {
        _inherits(TipoDeServicioCreateComponent, _interface_tipo_de_se);

        var _super = _createSuper(TipoDeServicioCreateComponent);

        function TipoDeServicioCreateComponent(router, formBuilder, validators, activeModal, service) {
          var _this;

          _classCallCheck(this, TipoDeServicioCreateComponent);

          _this = _super.call(this);
          _this.router = router;
          _this.formBuilder = formBuilder;
          _this.validators = validators;
          _this.activeModal = activeModal;
          _this.service = service;
          _this.register = false;
          _this.loading = true;
          _this.modal = false;
          return _this;
        }

        _createClass(TipoDeServicioCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              Nombre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              Descripcion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535)]],
              Activo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.loading = false;
          }
        }, {
          key: "submit",
          value: function submit(values) {
            var _this2 = this;

            this.register = true;

            if (this.form.valid) {
              this.service.create(values).subscribe(function (resp) {
                if (_this2.modal) {
                  var id = resp['@id'].split('/');
                  id = parseInt(id[id.length - 1]);

                  _this2.activeModal.close(id);

                  return;
                }

                _this2["return"]();

                _this2.register = false;
              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: 'Error',
                  type: 'error',
                  text: 'Ocurrió un error' + error.message
                }).then(function () {
                  console.log(error);
                  _this2.register = false;
                });
              });
            } else {
              this.form.markAllAsTouched();
              this.register = false;
            }
          }
        }, {
          key: "return",
          value: function _return() {
            if (this.modal) {
              this.activeModal.dismiss('cancel');
              return;
            }

            this.router.navigate(['/TipoDeServicio']).then();
          }
        }]);

        return TipoDeServicioCreateComponent;
      }(_interface_tipo_de_servicio_data_form__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioDataForm"]);

      TipoDeServicioCreateComponent.ɵfac = function TipoDeServicioCreateComponent_Factory(t) {
        return new (t || TipoDeServicioCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__["TipoDeServicioService"]));
      };

      TipoDeServicioCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TipoDeServicioCreateComponent,
        selectors: [["app-tipo-de-servicio-create"]],
        inputs: {
          modal: "modal"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 10,
        consts: [["title", "TipoDeServicio", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]],
        template: function TipoDeServicioCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TipoDeServicioCreateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function TipoDeServicioCreateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Descripcion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Activo);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipoDeServicioCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tipo-de-servicio-create',
            templateUrl: './tipo-de-servicio-create.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]
          }, {
            type: _service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__["TipoDeServicioService"]
          }];
        }, {
          modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "1VqA":
    /*!*****************************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/service/tipo-de-servicio.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: TipoDeServicioService */

    /***/
    function VqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioService", function () {
        return TipoDeServicioService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var TipoDeServicioService = /*#__PURE__*/function () {
        function TipoDeServicioService(http) {
          _classCallCheck(this, TipoDeServicioService);

          this.http = http;
        }

        _createClass(TipoDeServicioService, [{
          key: "create",
          value: function create(formData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDeServicio"), formData, {
              headers: headers
            });
          }
        }, {
          key: "update",
          value: function update(formData, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDeServicio/").concat(id), formData, {
              headers: headers
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDeServicio/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "data",
          value: function data(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDeServicio/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "combo",
          value: function combo() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDeServicio/combo"), {
              headers: headers
            });
          }
        }]);

        return TipoDeServicioService;
      }();

      TipoDeServicioService.ɵfac = function TipoDeServicioService_Factory(t) {
        return new (t || TipoDeServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      TipoDeServicioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TipoDeServicioService,
        factory: TipoDeServicioService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipoDeServicioService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cio4":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/module/catalogo-de-requerimientos/interface/catalogo-de-requerimientos-data-form.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: CatalogoDeRequerimientosDataForm */

    /***/
    function cio4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosDataForm", function () {
        return CatalogoDeRequerimientosDataForm;
      });
      /* harmony import */


      var _tipo_de_servicio_components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../tipo-de-servicio/components/create/tipo-de-servicio-create.component */
      "/RQ4");

      var CatalogoDeRequerimientosDataForm = function CatalogoDeRequerimientosDataForm(tipoDeServicioService) {
        _classCallCheck(this, CatalogoDeRequerimientosDataForm);

        this.TipoDeServicio = {
          field: 'TipoDeServicio',
          type: 'select',
          label: 'Tipo De Servicio',
          message: 'Ingrese un numero'
        };
        this.Requerimiento = {
          field: 'Requerimiento',
          type: 'text',
          label: 'Requerimiento',
          message: 'Ingrese minimo 1 letra y maximo 256'
        };
        this.Orden = {
          field: 'Orden',
          type: 'number',
          label: 'Orden',
          message: 'Ingrese un numero'
        };
        this.Requerido = {
          field: 'Requerido',
          type: 'number',
          label: 'Requerido',
          message: 'Ingrese un numero'
        };
        this.Catalogo = {
          field: 'Catalogo',
          type: 'text',
          label: 'Catálogo',
          message: 'Ingrese minimo 1 letra y maximo 65535'
        }; // Para el select de tipo de vialidad

        this.TipoDeServicio.items = tipoDeServicioService.combo();
        this.TipoDeServicio.empty = true;
        this.TipoDeServicio.add = true;
        this.TipoDeServicio.component = _tipo_de_servicio_components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_0__["TipoDeServicioCreateComponent"];
      };
      /***/

    },

    /***/
    "j9UN":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/module/catalogo-de-requerimientos/components/create/catalogo-de-requerimientos-create.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: CatalogoDeRequerimientosCreateComponent */

    /***/
    function j9UN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosCreateComponent", function () {
        return CatalogoDeRequerimientosCreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _interface_catalogo_de_requerimientos_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../interface/catalogo-de-requerimientos-data-form */
      "cio4");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/validators.service */
      "2/8O");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/catalogo-de-requerimientos.service */
      "jpJ9");
      /* harmony import */


      var _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../tipo-de-servicio/service/tipo-de-servicio.service */
      "1VqA");
      /* harmony import */


      var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../components/shared/create-template/create-template.component */
      "RcLa");
      /* harmony import */


      var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../components/shared/input-template/input-template.component */
      "OxdX");

      var CatalogoDeRequerimientosCreateComponent = /*#__PURE__*/function (_interface_catalogo_d) {
        _inherits(CatalogoDeRequerimientosCreateComponent, _interface_catalogo_d);

        var _super2 = _createSuper(CatalogoDeRequerimientosCreateComponent);

        function CatalogoDeRequerimientosCreateComponent(router, formBuilder, validators, activeModal, service, tipoDeServicioService) {
          var _this3;

          _classCallCheck(this, CatalogoDeRequerimientosCreateComponent);

          _this3 = _super2.call(this, tipoDeServicioService);
          _this3.router = router;
          _this3.formBuilder = formBuilder;
          _this3.validators = validators;
          _this3.activeModal = activeModal;
          _this3.service = service;
          _this3.tipoDeServicioService = tipoDeServicioService;
          _this3.register = false;
          _this3.loading = true;
          _this3.modal = false;
          return _this3;
        }

        _createClass(CatalogoDeRequerimientosCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              TipoDeServicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              Requerimiento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              Orden: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              Requerido: [null, []],
              Catalogo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535)]]
            });
            this.loading = false;
          }
        }, {
          key: "submit",
          value: function submit(values) {
            var _this4 = this;

            this.register = true;

            if (this.form.valid) {
              this.service.create(values).subscribe(function (resp) {
                if (_this4.modal) {
                  var id = resp['@id'].split('/');
                  id = parseInt(id[id.length - 1]);

                  _this4.activeModal.close(id);

                  return;
                }

                _this4["return"]();

                _this4.register = false;
              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: 'Error',
                  type: 'error',
                  text: 'Ocurrió un error' + error.message
                }).then(function () {
                  console.log(error);
                  _this4.register = false;
                });
              });
            } else {
              this.form.markAllAsTouched();
              this.register = false;
            }
          }
        }, {
          key: "return",
          value: function _return() {
            if (this.modal) {
              this.activeModal.dismiss('cancel');
              return;
            }

            this.router.navigate(['/CatalogoDeRequerimientos']).then();
          }
        }]);

        return CatalogoDeRequerimientosCreateComponent;
      }(_interface_catalogo_de_requerimientos_data_form__WEBPACK_IMPORTED_MODULE_2__["CatalogoDeRequerimientosDataForm"]);

      CatalogoDeRequerimientosCreateComponent.ɵfac = function CatalogoDeRequerimientosCreateComponent_Factory(t) {
        return new (t || CatalogoDeRequerimientosCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_7__["CatalogoDeRequerimientosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_8__["TipoDeServicioService"]));
      };

      CatalogoDeRequerimientosCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CatalogoDeRequerimientosCreateComponent,
        selectors: [["app-catalogo-de-requerimientos-create"]],
        inputs: {
          modal: "modal"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 14,
        consts: [["title", "CatalogoDeRequerimientos", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]],
        template: function CatalogoDeRequerimientosCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CatalogoDeRequerimientosCreateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function CatalogoDeRequerimientosCreateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.TipoDeServicio);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Requerimiento);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Orden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Requerido);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("data", ctx.Catalogo);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_9__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_10__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogoDeRequerimientosCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-catalogo-de-requerimientos-create',
            templateUrl: './catalogo-de-requerimientos-create.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]
          }, {
            type: _service_catalogo_de_requerimientos_service__WEBPACK_IMPORTED_MODULE_7__["CatalogoDeRequerimientosService"]
          }, {
            type: _tipo_de_servicio_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_8__["TipoDeServicioService"]
          }];
        }, {
          modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jpJ9":
    /*!*************************************************************************************************!*\
      !*** ./src/app/module/catalogo-de-requerimientos/service/catalogo-de-requerimientos.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: CatalogoDeRequerimientosService */

    /***/
    function jpJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogoDeRequerimientosService", function () {
        return CatalogoDeRequerimientosService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var CatalogoDeRequerimientosService = /*#__PURE__*/function () {
        function CatalogoDeRequerimientosService(http) {
          _classCallCheck(this, CatalogoDeRequerimientosService);

          this.http = http;
        }

        _createClass(CatalogoDeRequerimientosService, [{
          key: "create",
          value: function create(formData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/CatalogoDeRequerimientos"), formData, {
              headers: headers
            });
          }
        }, {
          key: "update",
          value: function update(formData, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/CatalogoDeRequerimientos/").concat(id), formData, {
              headers: headers
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/CatalogoDeRequerimientos/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "data",
          value: function data(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/CatalogoDeRequerimientos/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "combo",
          value: function combo() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/CatalogoDeRequerimientos/combo"), {
              headers: headers
            });
          }
        }]);

        return CatalogoDeRequerimientosService;
      }();

      CatalogoDeRequerimientosService.ɵfac = function CatalogoDeRequerimientosService_Factory(t) {
        return new (t || CatalogoDeRequerimientosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CatalogoDeRequerimientosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CatalogoDeRequerimientosService,
        factory: CatalogoDeRequerimientosService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogoDeRequerimientosService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wXIP":
    /*!*********************************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/interface/tipo-de-servicio-data-form.ts ***!
      \*********************************************************************************/

    /*! exports provided: TipoDeServicioDataForm */

    /***/
    function wXIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioDataForm", function () {
        return TipoDeServicioDataForm;
      });

      var TipoDeServicioDataForm = function TipoDeServicioDataForm() {
        _classCallCheck(this, TipoDeServicioDataForm);

        this.Nombre = {
          field: 'Nombre',
          type: 'text',
          label: 'Nombre',
          message: 'Ingrese minimo 1 letra y maximo 64'
        };
        this.Descripcion = {
          field: 'Descripcion',
          type: 'text',
          label: 'Descripción',
          message: 'Ingrese minimo 1 letra y maximo 65535'
        };
        this.Activo = {
          field: 'Activo',
          type: 'number',
          label: 'Activo',
          message: 'Ingrese un numero'
        };
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~module-catalogo-de-requerimientos-catalogo-de-requerimientos-module~module-requerimiento-cli~ffc5972b-es5.js.map