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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-tipo-de-servicio-tipo-de-servicio-module"], {
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
                  text: 'Ocurri?? un error' + error.message
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

      TipoDeServicioCreateComponent.??fac = function TipoDeServicioCreateComponent_Factory(t) {
        return new (t || TipoDeServicioCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__["TipoDeServicioService"]));
      };

      TipoDeServicioCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TipoDeServicioCreateComponent,
        selectors: [["app-tipo-de-servicio-create"]],
        inputs: {
          modal: "modal"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 4,
        vars: 10,
        consts: [["title", "TipoDeServicio", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]],
        template: function TipoDeServicioCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function TipoDeServicioCreateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function TipoDeServicioCreateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Descripcion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Activo);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioCreateComponent, [{
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

      TipoDeServicioService.??fac = function TipoDeServicioService_Factory(t) {
        return new (t || TipoDeServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      TipoDeServicioService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: TipoDeServicioService,
        factory: TipoDeServicioService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioService, [{
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
    "Ltwk":
    /*!********************************************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/components/read/tipo-de-servicio-read.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: TipoDeServicioReadComponent */

    /***/
    function Ltwk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioReadComponent", function () {
        return TipoDeServicioReadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/tipo-de-servicio.service */
      "1VqA");
      /* harmony import */


      var _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../system-privileges/service/system-privileges.service */
      "TWxV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../components/shared/table/table.component */
      "CfwT");

      var _c0 = ["table"];

      function TipoDeServicioReadComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TipoDeServicioReadComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r1.selected.length == 0);
        }
      }

      function TipoDeServicioReadComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r2.selected.length == 0);
        }
      }

      var TipoDeServicioReadComponent = /*#__PURE__*/function () {
        function TipoDeServicioReadComponent(auth, router, service, privilegesService) {
          var _this3 = this;

          _classCallCheck(this, TipoDeServicioReadComponent);

          this.auth = auth;
          this.router = router;
          this.service = service;
          this.privilegesService = privilegesService;
          this.disabled = true;
          this.serveSource = 'TipoDeServicio';
          this.serverFunction = 'readDataTable';
          this.selected = [];
          this.privilege = {
            create: false,
            update: false,
            "delete": false
          };
          this.params = {};
          this.fields = ['#', 'Nombre', 'Descripcion', 'Activo'];
          this.privilegesService.getPrivileges('TipoDeServicio').subscribe(function (data) {
            _this3.privilege = data;
          });
        }

        _createClass(TipoDeServicioReadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "update",
          value: function update(id) {
            this.router.navigateByUrl('/TipoDeServicio/update/' + id);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: "\xBFEstas seguro de eliminar el registro ".concat(id, "?"),
              type: 'warning',
              showCloseButton: true,
              showCancelButton: true
            }).then(function (result) {
              if (!result.dismiss) {
                _this4.service["delete"](id).subscribe(function (resp) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Eliminado', 'El registro se elimino correctamente!', 'error');

                  _this4.table.refreshTable();
                }, function (error) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('ERROR!', 'Hubo un error al eliminar, intente de nuevo', 'error');
                });
              }
            });
          }
        }, {
          key: "onClick",
          value: function onClick(ev) {
            var input = ev.target;

            if (input.tagName !== 'A') {
              input = input.parentNode;
            }

            var classTag = input.className;

            if (classTag.includes('edit')) {
              this.update(input.attributes.index.value);
            }

            if (classTag.includes('delete')) {
              this["delete"](input.attributes.index.value);
            }
          }
        }]);

        return TipoDeServicioReadComponent;
      }();

      TipoDeServicioReadComponent.??fac = function TipoDeServicioReadComponent_Factory(t) {
        return new (t || TipoDeServicioReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_4__["TipoDeServicioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"]));
      };

      TipoDeServicioReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TipoDeServicioReadComponent,
        selectors: [["app-tipo-de-servicio"]],
        viewQuery: function TipoDeServicioReadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        hostBindings: function TipoDeServicioReadComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TipoDeServicioReadComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        decls: 10,
        vars: 7,
        consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]],
        template: function TipoDeServicioReadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TipoDeServicioReadComponent_button_4_Template, 4, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TipoDeServicioReadComponent_button_6_Template, 4, 1, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TipoDeServicioReadComponent_button_7_Template, 4, 1, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-table", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.privilege.create);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.privilege.update);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.privilege["delete"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("serveSource", ctx.serveSource)("serveFunction", ctx.serverFunction)("params", ctx.params)("fields", ctx.fields);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioReadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tipo-de-servicio',
            templateUrl: './tipo-de-servicio-read.component.html',
            styleUrls: []
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_4__["TipoDeServicioService"]
          }, {
            type: _system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "UDQu":
    /*!************************************************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/components/update/tipo-de-servicio-update.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: TipoDeServicioUpdateComponent */

    /***/
    function UDQu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioUpdateComponent", function () {
        return TipoDeServicioUpdateComponent;
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

      var TipoDeServicioUpdateComponent = /*#__PURE__*/function (_interface_tipo_de_se2) {
        _inherits(TipoDeServicioUpdateComponent, _interface_tipo_de_se2);

        var _super2 = _createSuper(TipoDeServicioUpdateComponent);

        function TipoDeServicioUpdateComponent(activatedRoute, router, formBuilder, validators, activeModal, service) {
          var _this5;

          _classCallCheck(this, TipoDeServicioUpdateComponent);

          _this5 = _super2.call(this);
          _this5.activatedRoute = activatedRoute;
          _this5.router = router;
          _this5.formBuilder = formBuilder;
          _this5.validators = validators;
          _this5.activeModal = activeModal;
          _this5.service = service;
          _this5.loading = true;
          _this5.register = false;
          _this5.modal = false;
          return _this5;
        }

        _createClass(TipoDeServicioUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.form = this.formBuilder.group({
              Nombre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              Descripcion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65535)]],
              Activo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });

            if (typeof this.id !== "undefined") {
              this.service.data(this.id).subscribe(function (data) {
                return _this6.initForm(data);
              }, function () {
                return _this6["return"];
              });
            } else {
              this.activatedRoute.params.subscribe(function (params) {
                _this6.id = params.id;

                _this6.service.data(_this6.id).subscribe(function (data) {
                  return _this6.initForm(data);
                }, function () {
                  return _this6["return"];
                });
              });
            }
          }
        }, {
          key: "initForm",
          value: function initForm(data) {
            this.data = data;
            this.form.controls.Nombre.setValue(this.data.Nombre);
            this.form.controls.Descripcion.setValue(this.data.Descripcion);
            this.form.controls.Activo.setValue(this.data.Activo);
            this.loading = false;
          }
        }, {
          key: "submit",
          value: function submit(values) {
            var _this7 = this;

            this.register = true;

            if (this.form.valid) {
              this.service.update(values, this.id).subscribe(function () {
                if (_this7.modal) {
                  _this7.activeModal.close(_this7.id);
                }

                _this7["return"]();

                _this7.register = false;
              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: 'Error',
                  type: 'error',
                  text: 'Ocurri?? un error'
                }).then(function () {
                  console.log(error);
                  _this7.register = false;
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

        return TipoDeServicioUpdateComponent;
      }(_interface_tipo_de_servicio_data_form__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioDataForm"]);

      TipoDeServicioUpdateComponent.??fac = function TipoDeServicioUpdateComponent_Factory(t) {
        return new (t || TipoDeServicioUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_servicio_service__WEBPACK_IMPORTED_MODULE_7__["TipoDeServicioService"]));
      };

      TipoDeServicioUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TipoDeServicioUpdateComponent,
        selectors: [["app-tipo-de-servicio-update"]],
        inputs: {
          modal: "modal",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 4,
        vars: 12,
        consts: [["title", "TipoDeServicio", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]],
        template: function TipoDeServicioUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function TipoDeServicioUpdateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function TipoDeServicioUpdateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Descripcion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Activo);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tipo-de-servicio-update',
            templateUrl: './tipo-de-servicio-update.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
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
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "aXje":
    /*!********************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/tipo-de-servicio.module.ts ***!
      \********************************************************************/

    /*! exports provided: TipoDeServicioModule */

    /***/
    function aXje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioModule", function () {
        return TipoDeServicioModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _tipo_de_servicio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tipo-de-servicio-routing.module */
      "eJbR");
      /* harmony import */


      var _components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/create/tipo-de-servicio-create.component */
      "/RQ4");
      /* harmony import */


      var _components_read_tipo_de_servicio_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/read/tipo-de-servicio-read.component */
      "Ltwk");
      /* harmony import */


      var _components_update_tipo_de_servicio_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/update/tipo-de-servicio-update.component */
      "UDQu");
      /* harmony import */


      var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/shared/shared.module */
      "hGdz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var TipoDeServicioModule = function TipoDeServicioModule() {
        _classCallCheck(this, TipoDeServicioModule);
      };

      TipoDeServicioModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TipoDeServicioModule
      });
      TipoDeServicioModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TipoDeServicioModule_Factory(t) {
          return new (t || TipoDeServicioModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tipo_de_servicio_routing_module__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TipoDeServicioModule, {
          declarations: [_components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_3__["TipoDeServicioCreateComponent"], _components_read_tipo_de_servicio_read_component__WEBPACK_IMPORTED_MODULE_4__["TipoDeServicioReadComponent"], _components_update_tipo_de_servicio_update_component__WEBPACK_IMPORTED_MODULE_5__["TipoDeServicioUpdateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tipo_de_servicio_routing_module__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_3__["TipoDeServicioCreateComponent"], _components_read_tipo_de_servicio_read_component__WEBPACK_IMPORTED_MODULE_4__["TipoDeServicioReadComponent"], _components_update_tipo_de_servicio_update_component__WEBPACK_IMPORTED_MODULE_5__["TipoDeServicioUpdateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tipo_de_servicio_routing_module__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eJbR":
    /*!****************************************************************************!*\
      !*** ./src/app/module/tipo-de-servicio/tipo-de-servicio-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: TipoDeServicioRoutingModule */

    /***/
    function eJbR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDeServicioRoutingModule", function () {
        return TipoDeServicioRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/create/tipo-de-servicio-create.component */
      "/RQ4");
      /* harmony import */


      var _components_read_tipo_de_servicio_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/read/tipo-de-servicio-read.component */
      "Ltwk");
      /* harmony import */


      var _components_update_tipo_de_servicio_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/update/tipo-de-servicio-update.component */
      "UDQu");
      /* harmony import */


      var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/guard.service */
      "Mbag");

      var routes = [{
        path: '',
        component: _components_read_tipo_de_servicio_read_component__WEBPACK_IMPORTED_MODULE_3__["TipoDeServicioReadComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 4
        }
      }, {
        path: 'create',
        component: _components_create_tipo_de_servicio_create_component__WEBPACK_IMPORTED_MODULE_2__["TipoDeServicioCreateComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 1
        }
      }, {
        path: 'update/:id',
        component: _components_update_tipo_de_servicio_update_component__WEBPACK_IMPORTED_MODULE_4__["TipoDeServicioUpdateComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 3
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      }];

      var TipoDeServicioRoutingModule = function TipoDeServicioRoutingModule() {
        _classCallCheck(this, TipoDeServicioRoutingModule);
      };

      TipoDeServicioRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TipoDeServicioRoutingModule
      });
      TipoDeServicioRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TipoDeServicioRoutingModule_Factory(t) {
          return new (t || TipoDeServicioRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TipoDeServicioRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDeServicioRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
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
          label: 'Descripci??n',
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
//# sourceMappingURL=module-tipo-de-servicio-tipo-de-servicio-module-es5.js.map