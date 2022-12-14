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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-system-user-system-user-module"], {
    /***/
    "3CNd":
    /*!**********************************************************************************!*\
      !*** ./src/app/module/system-user/components/read/system-user-read.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: systemUserReadComponent */

    /***/
    function CNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "systemUserReadComponent", function () {
        return systemUserReadComponent;
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


      var _service_system_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/system-user.service */
      "NAJB");
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

      function systemUserReadComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Agregar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function systemUserReadComponent_button_6_Template(rf, ctx) {
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

      function systemUserReadComponent_button_7_Template(rf, ctx) {
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

      var systemUserReadComponent = /*#__PURE__*/function () {
        function systemUserReadComponent(auth, router, service, privilegesService) {
          var _this = this;

          _classCallCheck(this, systemUserReadComponent);

          this.auth = auth;
          this.router = router;
          this.service = service;
          this.privilegesService = privilegesService;
          this.disabled = true;
          this.serveSource = 'systemUser';
          this.serverFunction = 'readDataTable';
          this.selected = [];
          this.privilege = {
            create: false,
            update: false,
            "delete": false
          };
          this.params = {};
          this.fields = ['#', 'user', 'password', 'email', 'selfie', 'tag', 'full Name', 'address', 'phone', 'area', 'id System User Status', 'id System Role', 'tries', 'position', 'skype'];
          this.privilegesService.getPrivileges('systemUser').subscribe(function (data) {
            _this.privilege = data;
          });
        }

        _createClass(systemUserReadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "update",
          value: function update(id) {
            this.router.navigateByUrl('/systemUser/update/' + id);
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

        return systemUserReadComponent;
      }();

      systemUserReadComponent.??fac = function systemUserReadComponent_Factory(t) {
        return new (t || systemUserReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_user_service__WEBPACK_IMPORTED_MODULE_4__["systemUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_privileges_service_system_privileges_service__WEBPACK_IMPORTED_MODULE_5__["systemPrivilegesService"]));
      };

      systemUserReadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: systemUserReadComponent,
        selectors: [["app-system-user"]],
        viewQuery: function systemUserReadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        hostBindings: function systemUserReadComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function systemUserReadComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        decls: 10,
        vars: 7,
        consts: [[1, "card", "animated", "fadeIn"], [1, "card-body"], [1, "row"], [1, "col-md-2", "text-left"], ["class", "btn btn-success", "routerLink", "create", 4, "ngIf"], [1, "col-md-6", "text-left"], ["class", "btn btn-warning", 3, "disabled", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", 4, "ngIf"], [3, "serveSource", "serveFunction", "params", "fields"], ["table", ""], ["routerLink", "create", 1, "btn", "btn-success"], [1, "fa", "fa-plus"], [1, "btn", "btn-warning", 3, "disabled"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", 3, "disabled"], [1, "fa", "fa-trash"]],
        template: function systemUserReadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, systemUserReadComponent_button_4_Template, 4, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, systemUserReadComponent_button_6_Template, 4, 1, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, systemUserReadComponent_button_7_Template, 4, 1, "button", 7);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemUserReadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-system-user',
            templateUrl: './system-user-read.component.html',
            styleUrls: []
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_system_user_service__WEBPACK_IMPORTED_MODULE_4__["systemUserService"]
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
    "VY7b":
    /*!**************************************************************************************!*\
      !*** ./src/app/module/system-user/components/update/system-user-update.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: systemUserUpdateComponent */

    /***/
    function VY7b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "systemUserUpdateComponent", function () {
        return systemUserUpdateComponent;
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


      var _interface_system_user_data_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../interface/system-user-data-form */
      "iCgB");
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


      var _service_system_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/system-user.service */
      "NAJB");
      /* harmony import */


      var _system_user_status_service_system_user_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../system-user-status/service/system-user-status.service */
      "heW1");
      /* harmony import */


      var _system_role_service_system_role_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../system-role/service/system-role.service */
      "s5+H");
      /* harmony import */


      var _components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../components/shared/create-template/create-template.component */
      "RcLa");
      /* harmony import */


      var _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../components/shared/input-template/input-template.component */
      "OxdX");

      var systemUserUpdateComponent = /*#__PURE__*/function (_interface_system_use) {
        _inherits(systemUserUpdateComponent, _interface_system_use);

        var _super = _createSuper(systemUserUpdateComponent);

        function systemUserUpdateComponent(activatedRoute, router, formBuilder, validators, activeModal, service, systemUserStatusService, systemRoleService) {
          var _this3;

          _classCallCheck(this, systemUserUpdateComponent);

          _this3 = _super.call(this, systemUserStatusService, systemRoleService);
          _this3.activatedRoute = activatedRoute;
          _this3.router = router;
          _this3.formBuilder = formBuilder;
          _this3.validators = validators;
          _this3.activeModal = activeModal;
          _this3.service = service;
          _this3.systemUserStatusService = systemUserStatusService;
          _this3.systemRoleService = systemRoleService;
          _this3.loading = true;
          _this3.register = false;
          _this3.modal = false;
          return _this3;
        }

        _createClass(systemUserUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.form = this.formBuilder.group({
              user: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]],
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64)]],
              selfie: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]],
              tag: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
              fullName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]],
              address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]],
              phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]],
              area: [null, []],
              idOffice: [null, []],
              idSystemUserStatus: [null, []],
              idSystemRole: [null, []],
              idEmployee: [null, []],
              tries: [null, []],
              position: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64)]],
              skype: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64)]]
            });

            if (typeof this.id !== "undefined") {
              this.service.data(this.id).subscribe(function (data) {
                return _this4.initForm(data);
              }, function () {
                return _this4["return"];
              });
            } else {
              this.activatedRoute.params.subscribe(function (params) {
                _this4.id = params.id;

                _this4.service.data(_this4.id).subscribe(function (data) {
                  return _this4.initForm(data);
                }, function () {
                  return _this4["return"];
                });
              });
            }
          }
        }, {
          key: "initForm",
          value: function initForm(data) {
            this.data = data;
            this.form.controls.user.setValue(this.data.user);
            this.form.controls.password.setValue(this.data.password);
            this.form.controls.email.setValue(this.data.email);
            this.form.controls.selfie.setValue(this.data.selfie);
            this.form.controls.tag.setValue(this.data.tag);
            this.form.controls.fullName.setValue(this.data.fullName);
            this.form.controls.address.setValue(this.data.address);
            this.form.controls.phone.setValue(this.data.phone);
            this.form.controls.area.setValue(this.data.area);
            this.form.controls.idOffice.setValue(this.data.idOffice);
            this.form.controls.idSystemUserStatus.setValue(this.data.idSystemUserStatus);
            this.form.controls.idSystemRole.setValue(this.data.idSystemRole);
            this.form.controls.idEmployee.setValue(this.data.idEmployee);
            this.form.controls.tries.setValue(this.data.tries);
            this.form.controls.position.setValue(this.data.position);
            this.form.controls.skype.setValue(this.data.skype);
            this.loading = false;
          }
        }, {
          key: "submit",
          value: function submit(values) {
            var _this5 = this;

            this.register = true;

            if (this.form.valid) {
              this.service.update(values, this.id).subscribe(function () {
                if (_this5.modal) {
                  _this5.activeModal.close(_this5.id);
                }

                _this5["return"]();

                _this5.register = false;
              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: 'Error',
                  type: 'error',
                  text: 'Ocurri?? un error'
                }).then(function () {
                  console.log(error);
                  _this5.register = false;
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

            this.router.navigate(['/systemUser']).then();
          }
        }]);

        return systemUserUpdateComponent;
      }(_interface_system_user_data_form__WEBPACK_IMPORTED_MODULE_2__["systemUserDataForm"]);

      systemUserUpdateComponent.??fac = function systemUserUpdateComponent_Factory(t) {
        return new (t || systemUserUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_system_user_service__WEBPACK_IMPORTED_MODULE_7__["systemUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_user_status_service_system_user_status_service__WEBPACK_IMPORTED_MODULE_8__["systemUserStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_system_role_service_system_role_service__WEBPACK_IMPORTED_MODULE_9__["systemRoleService"]));
      };

      systemUserUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: systemUserUpdateComponent,
        selectors: [["app-system-user-update"]],
        inputs: {
          modal: "modal",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 17,
        vars: 38,
        consts: [["title", "systemUser", 3, "loading", "register", "form", "modal", "create", "id", "submit", "cancel"], [3, "form", "data"]],
        template: function systemUserUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-create-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function systemUserUpdateComponent_Template_app_create_template_submit_0_listener($event) {
              return ctx.submit($event);
            })("cancel", function systemUserUpdateComponent_Template_app_create_template_cancel_0_listener() {
              return ctx["return"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-input-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("register", ctx.register)("form", ctx.form)("modal", ctx.modal)("create", false)("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.selfie);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.tag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.area);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.idOffice);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.idSystemUserStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.idSystemRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.idEmployee);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.tries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.position);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx.form)("data", ctx.skype);
          }
        },
        directives: [_components_shared_create_template_create_template_component__WEBPACK_IMPORTED_MODULE_10__["CreateTemplateComponent"], _components_shared_input_template_input_template_component__WEBPACK_IMPORTED_MODULE_11__["InputTemplateComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemUserUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-system-user-update',
            templateUrl: './system-user-update.component.html',
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
            type: _service_system_user_service__WEBPACK_IMPORTED_MODULE_7__["systemUserService"]
          }, {
            type: _system_user_status_service_system_user_status_service__WEBPACK_IMPORTED_MODULE_8__["systemUserStatusService"]
          }, {
            type: _system_role_service_system_role_service__WEBPACK_IMPORTED_MODULE_9__["systemRoleService"]
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
    "omYX":
    /*!******************************************************************!*\
      !*** ./src/app/module/system-user/system-user-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: systemUserRoutingModule */

    /***/
    function omYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "systemUserRoutingModule", function () {
        return systemUserRoutingModule;
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


      var _components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/create/system-user-create.component */
      "m+Nj");
      /* harmony import */


      var _components_read_system_user_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/read/system-user-read.component */
      "3CNd");
      /* harmony import */


      var _components_update_system_user_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/update/system-user-update.component */
      "VY7b");
      /* harmony import */


      var _services_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/guard.service */
      "Mbag");

      var routes = [{
        path: '',
        component: _components_read_system_user_read_component__WEBPACK_IMPORTED_MODULE_3__["systemUserReadComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 4
        }
      }, {
        path: 'create',
        component: _components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_2__["systemUserCreateComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 1
        }
      }, {
        path: 'update/:id',
        component: _components_update_system_user_update_component__WEBPACK_IMPORTED_MODULE_4__["systemUserUpdateComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"]],
        data: {
          privilege: 3
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      }];

      var systemUserRoutingModule = function systemUserRoutingModule() {
        _classCallCheck(this, systemUserRoutingModule);
      };

      systemUserRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: systemUserRoutingModule
      });
      systemUserRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function systemUserRoutingModule_Factory(t) {
          return new (t || systemUserRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](systemUserRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemUserRoutingModule, [{
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
    "ppWr":
    /*!**********************************************************!*\
      !*** ./src/app/module/system-user/system-user.module.ts ***!
      \**********************************************************/

    /*! exports provided: systemUserModule */

    /***/
    function ppWr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "systemUserModule", function () {
        return systemUserModule;
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


      var _system_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./system-user-routing.module */
      "omYX");
      /* harmony import */


      var _components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/create/system-user-create.component */
      "m+Nj");
      /* harmony import */


      var _components_read_system_user_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/read/system-user-read.component */
      "3CNd");
      /* harmony import */


      var _components_update_system_user_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/update/system-user-update.component */
      "VY7b");
      /* harmony import */


      var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/shared/shared.module */
      "hGdz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var systemUserModule = function systemUserModule() {
        _classCallCheck(this, systemUserModule);
      };

      systemUserModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: systemUserModule
      });
      systemUserModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function systemUserModule_Factory(t) {
          return new (t || systemUserModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _system_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemUserRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](systemUserModule, {
          declarations: [_components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__["systemUserCreateComponent"], _components_read_system_user_read_component__WEBPACK_IMPORTED_MODULE_4__["systemUserReadComponent"], _components_update_system_user_update_component__WEBPACK_IMPORTED_MODULE_5__["systemUserUpdateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _system_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemUserRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](systemUserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_create_system_user_create_component__WEBPACK_IMPORTED_MODULE_3__["systemUserCreateComponent"], _components_read_system_user_read_component__WEBPACK_IMPORTED_MODULE_4__["systemUserReadComponent"], _components_update_system_user_update_component__WEBPACK_IMPORTED_MODULE_5__["systemUserUpdateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _system_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["systemUserRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=module-system-user-system-user-module-es5.js.map