(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-tipo-de-persona-tipo-de-persona-module"], {
    /***/
    "1zhm":
    /*!******************************************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/components/read/tipo-de-persona-read.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: TipoDePersonaReadComponent */

    /***/
    function zhm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaReadComponent", function () {
        return TipoDePersonaReadComponent;
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


      var _service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/tipo-de-persona.service */
      "zcyU");
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

      function TipoDePersonaReadComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TipoDePersonaReadComponent_button_6_Template(rf, ctx) {
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

      function TipoDePersonaReadComponent_button_7_Template(rf, ctx) {
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

      var TipoDePersonaReadComponent = /*#__PURE__*/function () {
        function TipoDePersonaReadComponent(auth, router, service, privilegesService) {
          var _this = this;

          _classCallCheck(this, TipoDePersonaReadComponent);

          this.auth = auth;
          this.router = router;
          this.service = service;
          this.privilegesService = privilegesService;
          this.disabled = true;
          this.serveSource = 'TipoDePersona';
          this.serverFunction = 'readDataTable';
          this.selected = [];
          this.privilege = {
            create: false,
            update: false,
            "delete": false
          };
          this.params = {};
          this.fields = ['#', 'Descripcion'];
          this.privilegesService.getPrivileges('TipoDePersona').subscribe(function (data) {
            _this.privilege = data;
          });
        }

        _createClass(TipoDePersonaReadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "update",
          value: function update(id) {
            this.router.navigateByUrl('/TipoDePersona/update/' + id);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this2 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: "\xBFEstas seguro de eliminar el registro ".concat(id, "?"),
              type: 'warning',
              showCloseButton: true,
              showCancelButton: true
            }).then(function (result) {
              if (!result.dismiss) {
                _this2.service["delete"](id).subscribe(function (resp) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Eliminado', 'El registro se elimino correctamente!', 'error');

                  _this2.table.refreshTable();
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

        return TipoDePersonaReadComponent;
      }();

      TipoDePersonaReadComponent.??fac = function TipoDePersonaReadComponent_Factory(t) {
        return new (t || TipoDePersonaReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_4__["TipoDePersonaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"]));
      };

      TipoDePersonaReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TipoDePersonaReadComponent,
        selectors: [["app-tipo-de-persona"]],
        viewQuery: function TipoDePersonaReadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        hostBindings: function TipoDePersonaReadComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TipoDePersonaReadComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        decls: 10,
        vars: 7,
        consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]],
        template: function TipoDePersonaReadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TipoDePersonaReadComponent_button_4_Template, 4, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TipoDePersonaReadComponent_button_6_Template, 4, 1, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TipoDePersonaReadComponent_button_7_Template, 4, 1, "button", 7);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDePersonaReadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tipo-de-persona',
            templateUrl: './tipo-de-persona-read.component.html',
            styleUrls: []
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_4__["TipoDePersonaService"]
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
    "PT77":
    /*!******************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/tipo-de-persona.module.ts ***!
      \******************************************************************/

    /*! exports provided: TipoDePersonaModule */

    /***/
    function PT77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaModule", function () {
        return TipoDePersonaModule;
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


      var _tipo_de_persona_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tipo-de-persona-routing.module */
      "xQGV");
      /* harmony import */


      var _components_create_tipo_de_persona_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/create/tipo-de-persona-create.component */
      "ULT/");
      /* harmony import */


      var _components_read_tipo_de_persona_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/read/tipo-de-persona-read.component */
      "1zhm");
      /* harmony import */


      var _components_update_tipo_de_persona_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/update/tipo-de-persona-update.component */
      "xqdA");
      /* harmony import */


      var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/shared/shared.module */
      "hGdz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var TipoDePersonaModule = function TipoDePersonaModule() {
        _classCallCheck(this, TipoDePersonaModule);
      };

      TipoDePersonaModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TipoDePersonaModule
      });
      TipoDePersonaModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TipoDePersonaModule_Factory(t) {
          return new (t || TipoDePersonaModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tipo_de_persona_routing_module__WEBPACK_IMPORTED_MODULE_2__["TipoDePersonaRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TipoDePersonaModule, {
          declarations: [_components_create_tipo_de_persona_create_component__WEBPACK_IMPORTED_MODULE_3__["TipoDePersonaCreateComponent"], _components_read_tipo_de_persona_read_component__WEBPACK_IMPORTED_MODULE_4__["TipoDePersonaReadComponent"], _components_update_tipo_de_persona_update_component__WEBPACK_IMPORTED_MODULE_5__["TipoDePersonaUpdateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tipo_de_persona_routing_module__WEBPACK_IMPORTED_MODULE_2__["TipoDePersonaRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDePersonaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_create_tipo_de_persona_create_component__WEBPACK_IMPORTED_MODULE_3__["TipoDePersonaCreateComponent"], _components_read_tipo_de_persona_read_component__WEBPACK_IMPORTED_MODULE_4__["TipoDePersonaReadComponent"], _components_update_tipo_de_persona_update_component__WEBPACK_IMPORTED_MODULE_5__["TipoDePersonaUpdateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tipo_de_persona_routing_module__WEBPACK_IMPORTED_MODULE_2__["TipoDePersonaRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UGwK":
    /*!*******************************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/interface/tipo-de-persona-data-form.ts ***!
      \*******************************************************************************/

    /*! exports provided: TipoDePersonaDataForm */

    /***/
    function UGwK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaDataForm", function () {
        return TipoDePersonaDataForm;
      });

      var TipoDePersonaDataForm = function TipoDePersonaDataForm() {
        _classCallCheck(this, TipoDePersonaDataForm);

        this.Descripcion = {
          field: 'Descripcion',
          type: 'text',
          label: 'Descripci??n',
          message: 'Ingrese minimo 1 letra y maximo 64'
        };
      };
      /***/

    },

    /***/
    "ULT/":
    /*!**********************************************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/components/create/tipo-de-persona-create.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: TipoDePersonaCreateComponent */

    /***/
    function ULT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaCreateComponent", function () {
        return TipoDePersonaCreateComponent;
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


      var _interface_tipo_de_persona_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../interface/tipo-de-persona-data-form */
      "UGwK");
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


      var _service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/tipo-de-persona.service */
      "zcyU");
      /* harmony import */


      var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../components/shared/create-template/create-template.component */
      "RcLa");
      /* harmony import */


      var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../components/shared/input-template/input-template.component */
      "OxdX");

      var TipoDePersonaCreateComponent = /*#__PURE__*/function (_interface_tipo_de_pe) {
        _inherits(TipoDePersonaCreateComponent, _interface_tipo_de_pe);

        var _super = _createSuper(TipoDePersonaCreateComponent);

        function TipoDePersonaCreateComponent(router, formBuilder, validators, activeModal, service) {
          var _this3;

          _classCallCheck(this, TipoDePersonaCreateComponent);

          _this3 = _super.call(this);
          _this3.router = router;
          _this3.formBuilder = formBuilder;
          _this3.validators = validators;
          _this3.activeModal = activeModal;
          _this3.service = service;
          _this3.register = false;
          _this3.loading = true;
          _this3.modal = false;
          return _this3;
        }

        _createClass(TipoDePersonaCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              Descripcion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
                  text: 'Ocurri?? un error' + error.message
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

            this.router.navigate(['/TipoDePersona']).then();
          }
        }]);

        return TipoDePersonaCreateComponent;
      }(_interface_tipo_de_persona_data_form__WEBPACK_IMPORTED_MODULE_2__["TipoDePersonaDataForm"]);

      TipoDePersonaCreateComponent.??fac = function TipoDePersonaCreateComponent_Factory(t) {
        return new (t || TipoDePersonaCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_7__["TipoDePersonaService"]));
      };

      TipoDePersonaCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TipoDePersonaCreateComponent,
        selectors: [["app-tipo-de-persona-create"]],
        inputs: {
          modal: "modal"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 2,
        vars: 6,
        consts: [["title", "TipoDePersona", 3, "loading", "register", "form", "modal", "submit", "cancel"], [3, "form", "data"]],
        template: function TipoDePersonaCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function TipoDePersonaCreateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function TipoDePersonaCreateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Descripcion);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDePersonaCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tipo-de-persona-create',
            templateUrl: './tipo-de-persona-create.component.html',
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
            type: _service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_7__["TipoDePersonaService"]
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
    "xQGV":
    /*!**************************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/tipo-de-persona-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: TipoDePersonaRoutingModule */

    /***/
    function xQGV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaRoutingModule", function () {
        return TipoDePersonaRoutingModule;
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


      var _components_create_tipo_de_persona_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/create/tipo-de-persona-create.component */
      "ULT/");
      /* harmony import */


      var _components_read_tipo_de_persona_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/read/tipo-de-persona-read.component */
      "1zhm");
      /* harmony import */


      var _components_update_tipo_de_persona_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/update/tipo-de-persona-update.component */
      "xqdA");
      /* harmony import */


      var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/guard.service */
      "Mbag");

      var routes = [{
        path: '',
        component: _components_read_tipo_de_persona_read_component__WEBPACK_IMPORTED_MODULE_3__["TipoDePersonaReadComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 4
        }
      }, {
        path: 'create',
        component: _components_create_tipo_de_persona_create_component__WEBPACK_IMPORTED_MODULE_2__["TipoDePersonaCreateComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 1
        }
      }, {
        path: 'update/:id',
        component: _components_update_tipo_de_persona_update_component__WEBPACK_IMPORTED_MODULE_4__["TipoDePersonaUpdateComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 3
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      }];

      var TipoDePersonaRoutingModule = function TipoDePersonaRoutingModule() {
        _classCallCheck(this, TipoDePersonaRoutingModule);
      };

      TipoDePersonaRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TipoDePersonaRoutingModule
      });
      TipoDePersonaRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TipoDePersonaRoutingModule_Factory(t) {
          return new (t || TipoDePersonaRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TipoDePersonaRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDePersonaRoutingModule, [{
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
    "xqdA":
    /*!**********************************************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/components/update/tipo-de-persona-update.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: TipoDePersonaUpdateComponent */

    /***/
    function xqdA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaUpdateComponent", function () {
        return TipoDePersonaUpdateComponent;
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


      var _interface_tipo_de_persona_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../interface/tipo-de-persona-data-form */
      "UGwK");
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


      var _service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/tipo-de-persona.service */
      "zcyU");
      /* harmony import */


      var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../components/shared/create-template/create-template.component */
      "RcLa");
      /* harmony import */


      var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../components/shared/input-template/input-template.component */
      "OxdX");

      var TipoDePersonaUpdateComponent = /*#__PURE__*/function (_interface_tipo_de_pe2) {
        _inherits(TipoDePersonaUpdateComponent, _interface_tipo_de_pe2);

        var _super2 = _createSuper(TipoDePersonaUpdateComponent);

        function TipoDePersonaUpdateComponent(activatedRoute, router, formBuilder, validators, activeModal, service) {
          var _this5;

          _classCallCheck(this, TipoDePersonaUpdateComponent);

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

        _createClass(TipoDePersonaUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.form = this.formBuilder.group({
              Descripcion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
            this.form.controls.Descripcion.setValue(this.data.Descripcion);
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

            this.router.navigate(['/TipoDePersona']).then();
          }
        }]);

        return TipoDePersonaUpdateComponent;
      }(_interface_tipo_de_persona_data_form__WEBPACK_IMPORTED_MODULE_2__["TipoDePersonaDataForm"]);

      TipoDePersonaUpdateComponent.??fac = function TipoDePersonaUpdateComponent_Factory(t) {
        return new (t || TipoDePersonaUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_7__["TipoDePersonaService"]));
      };

      TipoDePersonaUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TipoDePersonaUpdateComponent,
        selectors: [["app-tipo-de-persona-update"]],
        inputs: {
          modal: "modal",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 2,
        vars: 8,
        consts: [["title", "TipoDePersona", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]],
        template: function TipoDePersonaUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function TipoDePersonaUpdateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function TipoDePersonaUpdateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.Descripcion);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_9__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDePersonaUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tipo-de-persona-update',
            templateUrl: './tipo-de-persona-update.component.html',
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
            type: _service_tipo_de_persona_service__WEBPACK_IMPORTED_MODULE_7__["TipoDePersonaService"]
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
    "zcyU":
    /*!***************************************************************************!*\
      !*** ./src/app/module/tipo-de-persona/service/tipo-de-persona.service.ts ***!
      \***************************************************************************/

    /*! exports provided: TipoDePersonaService */

    /***/
    function zcyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDePersonaService", function () {
        return TipoDePersonaService;
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

      var TipoDePersonaService = /*#__PURE__*/function () {
        function TipoDePersonaService(http) {
          _classCallCheck(this, TipoDePersonaService);

          this.http = http;
        }

        _createClass(TipoDePersonaService, [{
          key: "create",
          value: function create(formData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDePersona"), formData, {
              headers: headers
            });
          }
        }, {
          key: "update",
          value: function update(formData, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDePersona/").concat(id), formData, {
              headers: headers
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDePersona/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "data",
          value: function data(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDePersona/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "combo",
          value: function combo() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["systemName"] + 'Token')
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"], "api/TipoDePersona/combo"), {
              headers: headers
            });
          }
        }]);

        return TipoDePersonaService;
      }();

      TipoDePersonaService.??fac = function TipoDePersonaService_Factory(t) {
        return new (t || TipoDePersonaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      TipoDePersonaService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: TipoDePersonaService,
        factory: TipoDePersonaService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TipoDePersonaService, [{
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

    }
  }]);
})();
//# sourceMappingURL=module-tipo-de-persona-tipo-de-persona-module-es5.js.map