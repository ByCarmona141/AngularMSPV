(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Ai/":
    /*!******************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
      \******************************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function Ai(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AlertComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r2.dismissAlert(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "alert-dismissible": a0
        };
      };

      var _c1 = ["*"];

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent() {
          _classCallCheck(this, AlertComponent);
        }

        _createClass(AlertComponent, [{
          key: "dismissAlert",
          value: function dismissAlert(element) {
            element.parentElement.removeChild(element);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)();
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["app-alert"]],
        inputs: {
          type: "type",
          dismiss: "dismiss"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 7,
        consts: [["role", "alert", 3, "ngClass"], ["alert", ""], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlertComponent_button_3_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", ctx.type, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.dismiss));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismiss);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss']
          }]
        }], function () {
          return [];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "/n7v":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/components/card/card.component.ts ***!
      \****************************************************************/

    /*! exports provided: CardComponent */

    /***/
    function n7v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /*import { AnimationBuilder, AnimationService } from 'css-animator';*/


      function CardComponent_div_2_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.cardTitle);
        }
      }

      function CardComponent_div_2_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.captionClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.cardCaption);
        }
      }

      function CardComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx_r11.fullCardToggle(_r0, "", true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.collapsedCardToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.cardRefresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.cardRemoveAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.fullIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.cardClass === "full-card" ? "Restore" : "Maximize", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.collapsedIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.collapsedCard === "collapsed" ? "Expand" : "Collapse", " ");
        }
      }

      function CardComponent_div_2_ng_content_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "customHeader"]);
        }
      }

      function CardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_2_h5_1_Template, 2, 1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_p_2_Template, 2, 2, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_2_div_3_Template, 25, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_2_ng_content_4_Template, 1, 0, "ng-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.headerClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.customHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.customHeader && ctx_r1.cardCaption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.options && !ctx_r1.customHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.customHeader);
        }
      }

      function CardComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function CardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapsedCard", ctx_r2.collapsedCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function CardComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.blockClass);
        }
      }

      function CardComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.footerClass);
        }
      }

      function CardComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["", 8, "app-card-header"]], "*", [["", 8, "app-card-footer"]]];
      var _c1 = [".app-card-header", "*", ".app-card-footer"];

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent(
        /*animationService: AnimationService,*/
        config) {
          _classCallCheck(this, CardComponent);

          config.placement = 'bottom-right';
          this.customHeader = false;
          this.options = true;
          this.hidHeader = false;
          this.isCardFooter = false;
          this.cardTitle = '';
          /*this.animator = animationService.builder();
          this.animators = animationService.builder();
          this.animator.useVisibility = true;*/

          this.fullIcon = 'icon-maximize';
          this.isAnimating = false;
          this.collapsedCard = 'expanded';
          this.collapsedIcon = 'icon-minus';
          this.loadCard = false;
          this.cardRemove = 'open';
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.hidHeader) {
              this.options = false;
            }

            if (!this.options || this.hidHeader || this.customHeader) {
              this.collapsedCard = 'false';
            }
          }
        }, {
          key: "fullCardToggle",
          value: function fullCardToggle(element, animation, status) {
            var _this = this;

            animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
            this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize'; // const duration = this.cardClass === 'full-card' ? 300 : 600;

            this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';

            if (status) {
              this.animation = animation;
            }

            this.isAnimating = true;
            /*this.animators
              .setType(this.animation)
              .setDuration(500)
              .setDirection('alternate')
              .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
              .animate(element)
              .then(() => {
                this.isAnimating = false;
              })
              .catch(() => {
                this.isAnimating = false;
              });*/

            setTimeout(function () {
              _this.cardClass = animation === 'zoomOut' ? '' : _this.cardClass;

              if (_this.cardClass === 'full-card') {
                document.querySelector('body').style.overflow = 'hidden';
              } else {
                document.querySelector('body').removeAttribute('style');
              }
            }, 500);
          }
        }, {
          key: "collapsedCardToggle",
          value: function collapsedCardToggle() {
            this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
            this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
          }
        }, {
          key: "cardRefresh",
          value: function cardRefresh() {
            var _this2 = this;

            this.loadCard = true;
            this.cardClass = 'card-load';
            setTimeout(function () {
              _this2.loadCard = false;
              _this2.cardClass = 'expanded';
            }, 3000);
          }
        }, {
          key: "cardRemoveAction",
          value: function cardRemoveAction() {
            this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]));
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        inputs: {
          cardTitle: "cardTitle",
          cardClass: "cardClass",
          blockClass: "blockClass",
          headerClass: "headerClass",
          options: "options",
          hidHeader: "hidHeader",
          customHeader: "customHeader",
          cardCaption: "cardCaption",
          captionClass: "captionClass",
          isCardFooter: "isCardFooter",
          footerClass: "footerClass"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
        ngContentSelectors: _c1,
        decls: 8,
        vars: 7,
        consts: [[1, "card", 3, "ngClass"], ["toAnimate", ""], ["class", "card-header", 3, "ngClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["subMenuContent", ""], ["class", "card-footer", 3, "ngClass", 4, "ngIf"], ["class", "card-loader", 4, "ngIf"], [1, "card-header", 3, "ngClass"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "card-header-right", 4, "ngIf"], [3, "ngClass"], [1, "card-header-right"], ["ngbDropdown", "", "placement", "auto", 1, "btn-group", "card-option", "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle", "btn-icon"], [1, "feather", "icon-more-horizontal"], ["ngbDropdownMenu", "", 1, "list-unstyled", "card-option", "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", "full-card", 3, "click"], ["href", "javascript:"], [1, "feather", 3, "ngClass"], [1, "dropdown-item", "minimize-card", 3, "click"], [2, "display", "none"], [1, "feather", "icon-plus"], [1, "dropdown-item", "reload-card", 3, "click"], [1, "feather", "icon-refresh-cw"], [1, "dropdown-item", "close-card", 3, "click"], [1, "feather", "icon-trash"], [4, "ngTemplateOutlet"], [1, "card-body", 3, "ngClass"], [1, "card-footer", 3, "ngClass"], [1, "card-loader"], [1, "pct-loader1", "anim-rotate"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 5, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_Template, 2, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_div_7_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardClass)("@cardRemove", ctx.cardRemove);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options)("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardFooter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCard);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        styles: [".card.full-card[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLmZ1bGwtY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            overflow: 'hidden',
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            overflow: 'hidden',
            height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              overflow: 'hidden',
              height: '0px'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              overflow: 'hidden',
              height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))])]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]
          }];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cardClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          blockClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hidHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cardCaption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          captionClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isCardFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          footerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/carmona/Desktop/angular/public_html/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1wMi":
    /*!**********************************************************************!*\
      !*** ./src/app/theme/shared/components/gallery/gallery.component.ts ***!
      \**********************************************************************/

    /*! exports provided: GalleryComponent */

    /***/
    function wMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
        return GalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-lightbox */
      "m3o8");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GalleryComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.open(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var GalleryComponent = /*#__PURE__*/function () {
        function GalleryComponent(lightbox, lightboxEvent, lighboxConfig) {
          _classCallCheck(this, GalleryComponent);

          this.lightbox = lightbox;
          this.lightboxEvent = lightboxEvent;
          this.lighboxConfig = lighboxConfig;
          this.albums = this.albums ? this.albums : [];
          lighboxConfig.fadeDuration = 1;
        }

        _createClass(GalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "open",
          value: function open(index) {
            var _this3 = this;

            this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(function (event) {
              return _this3._onReceivedEvent(event);
            });
            this.lightbox.open(this.albums, index, {
              wrapAround: true,
              showImageNumberLabel: true
            });
          }
        }, {
          key: "_onReceivedEvent",
          value: function _onReceivedEvent(event) {
            if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LIGHTBOX_EVENT"].CLOSE) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return GalleryComponent;
      }();

      GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
        return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]));
      };

      GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleryComponent,
        selectors: [["app-gallery"]],
        inputs: {
          albums: "albums"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "column", "has-text-centered"], ["class", "img-row", 4, "ngFor", "ngForOf"], [1, "img-row"], [1, "img-frame", 3, "src", "click"]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albums);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]
          }, {
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]
          }, {
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]
          }];
        }, {
          albums: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "1z5l":
    /*!******************************************!*\
      !*** ./src/app/services/logged.guard.ts ***!
      \******************************************/

    /*! exports provided: LoggedGuard */

    /***/
    function z5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggedGuard", function () {
        return LoggedGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // @ts-ignore


      var LoggedGuard = /*#__PURE__*/function () {
        function LoggedGuard(auth, router) {
          _classCallCheck(this, LoggedGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(LoggedGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.auth.isLogged() ? this.auth.isLogged() : this.router.parseUrl('/login');
          }
        }]);

        return LoggedGuard;
      }();

      LoggedGuard.ɵfac = function LoggedGuard_Factory(t) {
        return new (t || LoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LoggedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoggedGuard,
        factory: LoggedGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7jS0":
    /*!**************************************************!*\
      !*** ./src/app/theme/shared/components/index.ts ***!
      \**************************************************/

    /*! exports provided: AlertModule, CardModule, BreadcrumbModule, ModalModule */

    /***/
    function jS0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert/alert.module */
      "N4L5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"];
      });
      /* harmony import */


      var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card/card.module */
      "wcvO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardModule", function () {
        return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"];
      });
      /* harmony import */


      var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.module */
      "z0HF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
        return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"];
      });
      /* harmony import */


      var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/modal.module */
      "sIwa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
        return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"];
      });
      /***/

    },

    /***/
    "7oHd":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/components/toast/toast.service.ts ***!
      \****************************************************************/

    /*! exports provided: ToastService */

    /***/
    function oHd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToastService = /*#__PURE__*/function () {
        function ToastService() {
          _classCallCheck(this, ToastService);

          this.toggleToast = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ToastService, [{
          key: "toast",
          value: function toast(event) {
            this.toggleToast.emit(event);
          }
        }]);

        return ToastService;
      }();

      ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || ToastService)();
      };

      ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToastService,
        factory: ToastService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, {
          toggleToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "8o+C":
    /*!************************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: FriendComponent */

    /***/
    function oC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendComponent", function () {
        return FriendComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FriendComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.friends["new"]);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "text-c-green": a0,
          "text-c-red": a1
        };
      };

      function FriendComponent_small_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r1.friends.status, !ctx_r1.friends.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.friends.time);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "online": a0,
          "offline": a1
        };
      };

      var FriendComponent = /*#__PURE__*/function () {
        function FriendComponent() {
          _classCallCheck(this, FriendComponent);

          this.onChatOn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FriendComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "innerChatToggle",
          value: function innerChatToggle(id) {
            this.onChatOn.emit();
          }
        }]);

        return FriendComponent;
      }();

      FriendComponent.ɵfac = function FriendComponent_Factory(t) {
        return new (t || FriendComponent)();
      };

      FriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FriendComponent,
        selectors: [["app-friend"]],
        inputs: {
          friends: "friends"
        },
        outputs: {
          onChatOn: "onChatOn"
        },
        decls: 8,
        vars: 11,
        consts: [[1, "media", "userlist-box", "ripple", 3, "click"], ["href", "javascript:", 1, "media-left"], [1, "media-object", "img-radius", 3, "src", "alt"], ["class", "live-status", 4, "ngIf"], [1, "media-body"], [1, "chat-header"], ["class", "d-block", 3, "ngClass", 4, "ngIf"], [1, "live-status"], [1, "d-block", 3, "ngClass"]],
        template: function FriendComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendComponent_Template_div_click_0_listener() {
              return ctx.innerChatToggle(ctx.friends.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FriendComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FriendComponent_small_7_Template, 2, 5, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-id", ctx.friends.id)("data-status", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.friends.status, !ctx.friends.status))("data-username", ctx.friends.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.friends.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.friends.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friends["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.friends.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friends.time);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmllbmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-friend',
            templateUrl: './friend.component.html',
            styleUrls: ['./friend.component.scss']
          }]
        }], function () {
          return [];
        }, {
          friends: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onChatOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9OXH":
    /*!********************************************************************************!*\
      !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
      \********************************************************************************/

    /*! exports provided: ApexChartService */

    /***/
    function OXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApexChartService", function () {
        return ApexChartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApexChartService = /*#__PURE__*/function () {
        function ApexChartService() {
          _classCallCheck(this, ApexChartService);

          this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ApexChartService, [{
          key: "eventChangeTimeRange",
          value: function eventChangeTimeRange() {
            this.changeTimeRange.emit();
          }
        }, {
          key: "eventChangeSeriesData",
          value: function eventChangeSeriesData() {
            this.changeSeriesData.emit();
          }
        }]);

        return ApexChartService;
      }();

      ApexChartService.ɵfac = function ApexChartService_Factory(t) {
        return new (t || ApexChartService)();
      };

      ApexChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApexChartService,
        factory: ApexChartService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, {
          changeTimeRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          changeSeriesData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Ap1d":
    /*!**************************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: NavCollapseComponent */

    /***/
    function Ap1d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
        return NavCollapseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "K7hc");

      function NavCollapseComponent_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavCollapseComponent_ng_container_0_li_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0() {
        return ["active"];
      };

      function NavCollapseComponent_ng_container_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavCollapseComponent_ng_container_0_li_1_Template_li_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.navCollapse($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_li_1_ng_container_3_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavCollapseComponent_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavCollapseComponent_ng_container_0_li_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavCollapseComponent_ng_container_0_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavCollapseComponent_ng_container_0_li_2_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.navCollapse($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_li_2_ng_container_3_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r15.item.icon);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.item.badge.title, " ");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.item.badge.title, " ");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavCollapseComponent_ng_container_0_ng_template_3_span_0_Template, 2, 3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_3_span_3_Template, 2, 2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavCollapseComponent_ng_container_0_ng_template_3_span_4_Template, 2, 2, "span", 13);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.item.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.badge && ctx_r4.themeLayout === "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.badge && ctx_r4.themeLayout === "vertical");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 20);
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 20);
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 20);
        }

        if (rf & 2) {
          var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_group_1_Template, 1, 1, "app-nav-group", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_item_3_Template, 1, 1, "app-nav-item", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.type == "item");
        }
      }

      function NavCollapseComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_Template, 4, 3, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.item.children);
        }
      }

      function NavCollapseComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_li_1_Template, 4, 6, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_2_Template, 4, 6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_3_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavCollapseComponent_ng_container_0_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.themeLayout === "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.themeLayout === "vertical");
        }
      }

      var NavCollapseComponent = /*#__PURE__*/function () {
        function NavCollapseComponent() {
          _classCallCheck(this, NavCollapseComponent);

          this.visible = false;
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
          this.themeLayout = this.gradientConfig.layout;
        }

        _createClass(NavCollapseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navCollapse",
          value: function navCollapse(e) {
            this.visible = !this.visible;
            var parent = e.target;

            if (this.themeLayout === 'vertical') {
              parent = parent.parentElement;
            }

            var sections = document.querySelectorAll('.pcoded-hasmenu');

            for (var i = 0; i < sections.length; i++) {
              if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
              }
            }

            var firstParent = parent.parentElement;
            var preParent = parent.parentElement.parentElement;

            if (firstParent.classList.contains('pcoded-hasmenu')) {
              do {
                firstParent.classList.add('pcoded-trigger'); // firstParent.parentElement.classList.toggle('pcoded-trigger');

                firstParent = firstParent.parentElement.parentElement.parentElement;
              } while (firstParent.classList.contains('pcoded-hasmenu'));
            } else if (preParent.classList.contains('pcoded-submenu')) {
              do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
              } while (preParent.classList.contains('pcoded-submenu'));
            }

            parent.classList.toggle('pcoded-trigger');
          }
        }]);

        return NavCollapseComponent;
      }();

      NavCollapseComponent.ɵfac = function NavCollapseComponent_Factory(t) {
        return new (t || NavCollapseComponent)();
      };

      NavCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavCollapseComponent,
        selectors: [["app-nav-collapse"]],
        inputs: {
          item: "item"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", "mouseenter", 4, "ngIf"], ["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", 4, "ngIf"], ["itemContent", ""], ["subMenuContent", ""], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive", "mouseenter"], ["href", "javascript:", 1, "nav-link", 3, "routerLinkActive"], [4, "ngTemplateOutlet"], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:", 1, "nav-link", 3, "routerLinkActive", "click"], ["class", "pcoded-micon", 4, "ngIf"], [1, "pcoded-mtext"], ["class", "badge label", 3, "ngClass", 4, "ngIf"], ["class", "pcoded-badge badge", 3, "ngClass", 4, "ngIf"], [1, "pcoded-micon"], [1, "badge", "label", 3, "ngClass"], [1, "pcoded-badge", "badge", 3, "ngClass"], [1, "pcoded-submenu", 3, "routerLinkActive"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
        template: function NavCollapseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavCollapseComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)',
            display: 'block'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)'
          }))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavCollapseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-collapse',
            templateUrl: './nav-collapse.component.html',
            styleUrls: ['./nav-collapse.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-100%)',
              display: 'block'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(0%)'
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-100%)'
            }))])])]
          }]
        }], function () {
          return [];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, systemName, API_URL, APIKEY_GOOGLE, lang */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "systemName", function () {
        return systemName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APIKEY_GOOGLE", function () {
        return APIKEY_GOOGLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lang", function () {
        return lang;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      var systemName = 'MSPV'; // export const apiURL = 'http://mspvapi.sytes.net/';
      // export const API_URL = 'http://api.mspv.local/';
      // export const API_URL = 'http://api.1mspv.com/';
      // export const API_URL = 'http://localhost/apps/1mspv/api/public/';
      // export const API_URL = 'http://localhost/apimspv/public/';

      var API_URL = 'http://apiclientes.sytes.net/public/';
      var APIKEY_GOOGLE = 'AIzaSyBJNkTbbr-tiqFwDV-ul_NC9ElozeQb_fk';
      var lang = 'ES';
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CKO6":
    /*!*************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
      \*************************************************************/

    /*! exports provided: Spinkit */

    /***/
    function CKO6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
        return Spinkit;
      });

      var Spinkit = {
        skChasingDots: 'sk-chasing-dots',
        skCubeGrid: 'sk-cube-grid',
        skDoubleBounce: 'sk-double-bounce',
        skRotatingPlane: 'sk-rotationg-plane',
        skSpinnerPulse: 'sk-spinner-pulse',
        skThreeBounce: 'sk-three-bounce',
        skWanderingCubes: 'sk-wandering-cubes',
        skWave: 'sk-wave',
        skLine: 'sk-line-material'
      };
      /***/
    },

    /***/
    "E7Y8":
    /*!************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NavContentComponent */

    /***/
    function E7Y8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
        return NavContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../app-config */
      "K7hc");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navigation */
      "S8Sc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-click-outside */
      "qew9");
      /* harmony import */


      var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/components/card/card.component */
      "/n7v");
      /* harmony import */


      var _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./nav-group/nav-group.component */
      "aFrh");
      /* harmony import */


      var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./nav-collapse/nav-collapse.component */
      "Ap1d");
      /* harmony import */


      var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./nav-item/nav-item.component */
      "HRIB");

      var _c0 = ["navbarContent"];
      var _c1 = ["navbarWrapper"];

      function NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 11);
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 11);
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 11);
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_app_nav_group_1_Template, 1, 1, "app-nav-group", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_app_nav_item_3_Template, 1, 1, "app-nav-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.type == "item");
        }
      }

      function NavContentComponent_perfect_scrollbar_0_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_perfect_scrollbar_0_ul_2_Template_ul_clickOutside_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.fireOutClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_perfect_scrollbar_0_ul_2_ng_container_1_Template, 4, 3, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.navigation);
        }
      }

      function NavContentComponent_perfect_scrollbar_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_perfect_scrollbar_0_Template_perfect_scrollbar_clickOutside_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.navMob();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_perfect_scrollbar_0_ul_2_Template, 2, 1, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xBFNecesitas ayuda?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Por favor contactanos a la extensi\xF3n 0000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "300px")("max-height", "calc(100vh - 56px)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("excludeBeforeClick", true)("exclude", "#mobile-collapse")("usePSClass", "gradient-able")("disabled", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.load);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);
        }
      }

      function NavContentComponent_div_1_ng_container_6_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 11);
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r18);
        }
      }

      function NavContentComponent_div_1_ng_container_6_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 11);
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r18);
        }
      }

      function NavContentComponent_div_1_ng_container_6_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 11);
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r18);
        }
      }

      function NavContentComponent_div_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_div_1_ng_container_6_app_nav_group_1_Template, 1, 1, "app-nav-group", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_div_1_ng_container_6_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_div_1_ng_container_6_app_nav_item_3_Template, 1, 1, "app-nav-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.type == "item");
        }
      }

      function NavContentComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContentComponent_div_1_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.scrollMinus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_div_1_Template_ul_clickOutside_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.fireLeave();
          })("mouseleave", function NavContentComponent_div_1_Template_ul_mouseleave_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.fireLeave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavContentComponent_div_1_ng_container_6_Template, 4, 3, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContentComponent_div_1_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.scrollPlus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.prevDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navigation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.nextDisabled);
        }
      }

      var NavContentComponent = /*#__PURE__*/function () {
        function NavContentComponent(nav, zone, location, auth) {
          var _this4 = this;

          _classCallCheck(this, NavContentComponent);

          this.nav = nav;
          this.zone = zone;
          this.location = location;
          this.auth = auth;
          this.load = true;
          this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
          this.windowWidth = window.innerWidth;
          this.auth.getMenu().subscribe(function (resp) {
            _this4.navigation = resp;
            _this4.load = false;
          });
          this.navigation = this.nav.get();
          this.prevDisabled = 'disabled';
          this.nextDisabled = '';
          this.scrollWidth = 0;
          this.contentWidth = 0;
        }

        _createClass(NavContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.windowWidth < 992) {
              this.gradientConfig['layout'] = 'vertical';
              setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%';
              }, 500);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.gradientConfig['layout'] === 'horizontal') {
              this.contentWidth = this.navbarContent.nativeElement.clientWidth;
              this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
            }
          }
        }, {
          key: "scrollPlus",
          value: function scrollPlus() {
            this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

            if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
              this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
              this.nextDisabled = 'disabled';
            }

            this.prevDisabled = '';

            if (this.gradientConfig.rtlLayout) {
              document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            } else {
              document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }

            console.log('window width - ', this.windowWidth);
            console.log('content width - ', this.contentWidth);
            console.log('wrapper width - ', this.wrapperWidth);
            console.log('scroll width - ', this.scrollWidth);
          }
        }, {
          key: "scrollMinus",
          value: function scrollMinus() {
            this.scrollWidth = this.scrollWidth - this.wrapperWidth;

            if (this.scrollWidth < 0) {
              this.scrollWidth = 0;
              this.prevDisabled = 'disabled';
            }

            this.nextDisabled = '';

            if (this.gradientConfig.rtlLayout) {
              document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            } else {
              document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
          }
        }, {
          key: "fireLeave",
          value: function fireLeave() {
            var sections = document.querySelectorAll('.pcoded-hasmenu');

            for (var i = 0; i < sections.length; i++) {
              sections[i].classList.remove('active');
              sections[i].classList.remove('pcoded-trigger');
            }

            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = 'a.nav-link[ href=\'' + current_url + '\' ]';
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
              }
            }
          }
        }, {
          key: "navMob",
          value: function navMob() {
            if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.onNavMobCollapse.emit();
            }
          }
        }, {
          key: "fireOutClick",
          value: function fireOutClick() {
            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = 'a.nav-link[ href=\'' + current_url + '\' ]';
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                  parent.classList.add('pcoded-trigger');
                }

                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                  up_parent.classList.add('pcoded-trigger');
                }

                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                  last_parent.classList.add('pcoded-trigger');
                }

                last_parent.classList.add('active');
              }
            }
          }
        }]);

        return NavContentComponent;
      }();

      NavContentComponent.ɵfac = function NavContentComponent_Factory(t) {
        return new (t || NavContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      NavContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavContentComponent,
        selectors: [["app-nav-content"]],
        viewQuery: function NavContentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarWrapper = _t.first);
          }
        },
        outputs: {
          onNavMobCollapse: "onNavMobCollapse"
        },
        decls: 2,
        vars: 2,
        consts: [["id", "nav-ps-gradient-able", "ngClass", "gradientscroll", 3, "excludeBeforeClick", "exclude", "max-width", "max-height", "usePSClass", "disabled", "clickOutside", 4, "ngIf"], ["class", "navbar-content sidenav-horizontal", "id", "layout-sidenav", 4, "ngIf"], ["id", "nav-ps-gradient-able", "ngClass", "gradientscroll", 3, "excludeBeforeClick", "exclude", "usePSClass", "disabled", "clickOutside"], [1, "navbar-content"], ["class", "nav pcoded-inner-navbar", 3, "clickOutside", 4, "ngIf"], ["cardClass", "text-center", 3, "hidHeader"], [1, "mt-3"], ["href", "javascript:", 1, "btn", "btn-primary", "btn-sm", "text-white", "m-0"], [1, "nav", "pcoded-inner-navbar", 3, "clickOutside"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"], ["id", "layout-sidenav", 1, "navbar-content", "sidenav-horizontal"], ["navbarWrapper", ""], ["href", "javascript:", 1, "sidenav-horizontal-prev", 3, "ngClass", "click"], [1, "sidenav-horizontal-wrapper"], ["id", "side-nav-horizontal", 1, "nav", "pcoded-inner-navbar", "sidenav-inner", 3, "clickOutside", "mouseleave"], ["navbarContent", ""], ["href", "javascript:", 1, "sidenav-horizontal-next", 3, "ngClass", "click"]],
        template: function NavContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavContentComponent_perfect_scrollbar_0_Template, 10, 10, "perfect-scrollbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_div_1_Template, 8, 3, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gradientConfig["layout"] === "vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gradientConfig["layout"] === "horizontal");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideDirective"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_8__["NavGroupComponent"], _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_9__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_10__["NavItemComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-content',
            templateUrl: './nav-content.component.html',
            styleUrls: ['./nav-content.component.scss']
          }]
        }], function () {
          return [{
            type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, {
          onNavMobCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          navbarContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navbarContent', {
              "static": false
            }]
          }],
          navbarWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navbarWrapper', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "GxdA":
    /*!*************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ChatMsgComponent */

    /***/
    function GxdA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatMsgComponent", function () {
        return ChatMsgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../fack-db/friends-list */
      "zx2c");
      /* harmony import */


      var _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../fack-db/user-chat */
      "iCS2");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["newChat"];

      function ChatMsgComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHAT NOT FOUND");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChatMsgComponent_ng_container_10_div_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.chatMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r7.chatMessage.name);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "chat-menu-content": a0,
          "chat-menu-reply": a1
        };
      };

      function ChatMsgComponent_ng_container_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMsgComponent_ng_container_10_div_2_a_2_Template, 2, 2, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var messages_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", messages_r6.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, messages_r6.type, !messages_r6.type));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](messages_r6.msg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](messages_r6.time);
        }
      }

      function ChatMsgComponent_ng_container_10_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Typing . . .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.chatMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r5.chatMessage.name);
        }
      }

      function ChatMsgComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "perfect-scrollbar", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMsgComponent_ng_container_10_div_2_Template, 9, 7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatMsgComponent_ng_container_10_div_5_Template, 9, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "350px")("max-height", "calc(100vh - 170px)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("usePSClass", "elite")("disabled", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.chatMessage.chat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.newReplay, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.friendWriting);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "btn-danger": a0
        };
      };

      var ChatMsgComponent = /*#__PURE__*/function () {
        function ChatMsgComponent(rend) {
          _classCallCheck(this, ChatMsgComponent);

          this.rend = rend;
          this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.newReplay = '';
        }

        _createClass(ChatMsgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_1__["FriendsList"].friends;
            this.userChat = _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_2__["UserChat"].chat;
            this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', this.friendId);

            if (this.chatMessage) {
              var message = findObjectByKeyValue(this.userChat, 'friend_id', this.friendId);

              if (message) {
                this.chatMessage['chat'] = message['messages'];
              }
            }
          }
        }, {
          key: "sentMsg",
          value: function sentMsg(flag) {
            var _this5 = this;

            if (this.message === '' || this.message === undefined) {
              this.message_error = true;
            } else {
              if (flag === 1) {
                this.message_error = false;
              } else {
                this.message_error = false;
                var temp_replay = this.message;
                var html_send;
                html_send = '<div class="media chat-messages">' + '<div class="media-body chat-menu-reply">' + '<div class="">' + '<p class="chat-cont">' + this.message + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
                this.newReplay = this.newReplay + html_send;
                this.message = '';
                setTimeout(function () {
                  _this5.componentRef.directiveRef.scrollToBottom();
                }, 100);
                this.friendWriting = true;
                setTimeout(function () {
                  _this5.friendWriting = false;
                  var html_replay;
                  html_replay = '<div class="media chat-messages">' + '<a class="media-left photo-table" href="javascript:">' + '<img class="media-object img-radius img-radius m-t-5" src="' + _this5.chatMessage.photo + '" alt="' + _this5.chatMessage.name + '">' + '</a>' + '<div class="media-body chat-menu-content">' + '<div class="">' + '<p class="chat-cont">hello superior personality you write</p>' + '<p class="chat-cont">' + temp_replay + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
                  _this5.newReplay = _this5.newReplay + html_replay;
                  setTimeout(function () {
                    _this5.componentRef.directiveRef.scrollToBottom();
                  }, 100);
                }, 3000);
              }
            }
          }
        }]);

        return ChatMsgComponent;
      }();

      ChatMsgComponent.ɵfac = function ChatMsgComponent_Factory(t) {
        return new (t || ChatMsgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      ChatMsgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatMsgComponent,
        selectors: [["app-chat-msg"]],
        viewQuery: function ChatMsgComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newChat = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
          }
        },
        inputs: {
          friendId: "friendId"
        },
        outputs: {
          onChatToggle: "onChatToggle"
        },
        decls: 19,
        vars: 10,
        consts: [[1, "h-list-header"], ["href", "javascript:", 1, "h-back-user-list", 3, "click"], [1, "feather", "icon-chevron-left"], [1, "h-list-body"], [1, "main-chat-cont"], [1, "main-friend-chat"], ["CHATNOTFOUND", ""], [4, "ngIf", "ngIfElse"], [1, "h-list-footer"], [1, "input-group", 3, "focusout"], ["type", "file", 1, "chat-attach", 2, "display", "none"], ["href", "javascript:", 1, "input-group-prepend", "btn", "btn-success", "btn-attach", 3, "ngClass"], [1, "feather", "icon-paperclip"], ["type", "text", "name", "h-chat-text", "placeholder", "Write here . . ", 1, "form-control", "h-send-chat", 3, "ngModel", "ngModelChange", "keyup", "keyup.enter"], ["type", "submit", 1, "input-group-append", "btn-send", "btn", "btn-primary", 3, "ngClass", "click"], [1, "feather", "icon-message-circle"], [1, "media", "chat-messages", "text-center"], [1, "media-body", "chat-menu-content"], [1, ""], [1, "chat-cont"], ["ngClass", "elite-scroll", 3, "usePSClass", "disabled"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], ["newChat", ""], ["class", "media chat-messages typing", 4, "ngIf"], [1, "media", "chat-messages"], ["class", "media-left photo-table", "href", "javascript:", 4, "ngIf"], [1, "media-body", 3, "ngClass"], [1, "chat-time"], ["href", "javascript:", 1, "media-left", "photo-table"], [1, "media-object", "img-radius", "img-radius", "m-t-5", 3, "src", "alt"], [1, "media", "chat-messages", "typing"], [1, "rem-msg"]],
        template: function ChatMsgComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgComponent_Template_a_click_3_listener() {
              return ctx.onChatToggle.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatMsgComponent_ng_template_8_Template, 5, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatMsgComponent_ng_container_10_Template, 6, 9, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function ChatMsgComponent_Template_div_focusout_12_listener() {
              return ctx.message_error = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatMsgComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.message = $event;
            })("keyup", function ChatMsgComponent_Template_input_keyup_16_listener() {
              return ctx.sentMsg(1);
            })("keyup.enter", function ChatMsgComponent_Template_input_keyup_enter_16_listener() {
              return ctx.sentMsg(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgComponent_Template_button_click_17_listener() {
              return ctx.sentMsg(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chatMessage.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatMessage.chat)("ngIfElse", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.message_error === true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.message_error === true));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LW1zZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMsgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-msg',
            templateUrl: './chat-msg.component.html',
            styleUrls: ['./chat-msg.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          friendId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onChatToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          newChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['newChat', {
              "static": false,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }],
          componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], {
              "static": false
            }]
          }]
        });
      })();

      function findObjectByKeyValue(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }

        return false;
      }
      /***/

    },

    /***/
    "HRIB":
    /*!******************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: NavItemComponent */

    /***/
    function HRIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
        return NavItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function NavItemComponent_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavItemComponent_ng_container_0_li_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.item.title);
        }
      }

      function NavItemComponent_ng_container_0_li_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.item.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_li_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0() {
        return ["active"];
      };

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function NavItemComponent_ng_container_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavItemComponent_ng_container_0_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.closeOtherMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_li_1_span_3_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavItemComponent_ng_container_0_li_1_ng_template_4_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavItemComponent_ng_container_0_li_1_ng_container_6_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r1.item.target ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r1.item.url));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.icon)("ngIfElse", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavItemComponent_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavItemComponent_ng_container_0_li_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.item.title);
        }
      }

      function NavItemComponent_ng_container_0_li_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.item.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_li_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavItemComponent_ng_container_0_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_li_2_span_3_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavItemComponent_ng_container_0_li_2_ng_template_4_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavItemComponent_ng_container_0_li_2_ng_container_6_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.item.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r2.item.target ? "_blank" : "_self")("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item.icon)("ngIfElse", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function NavItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r19.item.icon);
        }
      }

      function NavItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_ng_template_3_span_0_Template, 2, 1, "span", 13);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
        }
      }

      function NavItemComponent_ng_container_0_ng_template_5_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.item.badge.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_ng_template_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r21.item.badge.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.item.badge.title, " ");
        }
      }

      function NavItemComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_ng_template_5_span_0_Template, 2, 2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavItemComponent_ng_container_0_ng_template_5_span_1_Template, 2, 2, "span", 17);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.item.badge && ctx_r6.themeLayout === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.item.badge && ctx_r6.themeLayout === "horizontal");
        }
      }

      function NavItemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavItemComponent_ng_container_0_li_1_Template, 7, 11, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_2_Template, 7, 7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavItemComponent_ng_container_0_ng_template_5_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.external);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.external);
        }
      }

      var NavItemComponent = /*#__PURE__*/function () {
        function NavItemComponent(location) {
          _classCallCheck(this, NavItemComponent);

          this.location = location;
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
          this.themeLayout = this.gradientConfig['layout'];
        }

        _createClass(NavItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeOtherMenu",
          value: function closeOtherMenu(event) {
            var _this6 = this;

            if (this.gradientConfig['layout'] === 'vertical') {
              var ele = event.target;

              if (ele !== null && ele !== undefined) {
                var parent = ele.parentElement;
                var up_parent = parent.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                var sections = document.querySelectorAll('.pcoded-hasmenu');

                for (var i = 0; i < sections.length; i++) {
                  sections[i].classList.remove('active');
                  sections[i].classList.remove('pcoded-trigger');
                }

                if (parent.classList.contains('pcoded-hasmenu')) {
                  parent.classList.add('pcoded-trigger');
                  parent.classList.add('active');
                } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                  up_parent.classList.add('pcoded-trigger');
                  up_parent.classList.add('active');
                } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                  last_parent.classList.add('pcoded-trigger');
                  last_parent.classList.add('active');
                }
              }

              if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
              }
            } else {
              setTimeout(function () {
                var sections = document.querySelectorAll('.pcoded-hasmenu');

                for (var _i = 0; _i < sections.length; _i++) {
                  sections[_i].classList.remove('active');

                  sections[_i].classList.remove('pcoded-trigger');
                }

                var current_url = _this6.location.path();

                if (_this6.location['_baseHref']) {
                  current_url = _this6.location['_baseHref'] + _this6.location.path();
                }

                var link = "a.nav-link[ href='" + current_url + "' ]";
                var ele = document.querySelector(link);

                if (ele !== null && ele !== undefined) {
                  var _parent = ele.parentElement;
                  var _up_parent = _parent.parentElement.parentElement;
                  var _last_parent = _up_parent.parentElement;

                  if (_parent.classList.contains('pcoded-hasmenu')) {
                    _parent.classList.add('active');
                  } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                    _up_parent.classList.add('active');
                  } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                    _last_parent.classList.add('active');
                  }
                }
              }, 500);
            }
          }
        }]);

        return NavItemComponent;
      }();

      NavItemComponent.ɵfac = function NavItemComponent_Factory(t) {
        return new (t || NavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      NavItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavItemComponent,
        selectors: [["app-nav-item"]],
        inputs: {
          item: "item"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "ngClass", "routerLinkActive", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["itemIcon", ""], ["itemBadge", ""], [3, "ngClass", "routerLinkActive"], [1, "nav-link", 3, "target", "routerLink", "click"], [4, "ngTemplateOutlet"], ["class", "pcoded-mtext", 4, "ngIf", "ngIfElse"], ["directTitle", ""], [1, "pcoded-mtext"], [3, "ngClass"], [3, "target", "href"], ["class", "pcoded-micon", 4, "ngIf"], [1, "pcoded-micon"], [1, "", 3, "ngClass"], ["class", "pcoded-badge badge", 3, "ngClass", 4, "ngIf"], ["class", "badge label", 3, "ngClass", 4, "ngIf"], [1, "pcoded-badge", "badge", 3, "ngClass"], [1, "badge", "label", 3, "ngClass"]],
        template: function NavItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-item',
            templateUrl: './nav-item.component.html',
            styleUrls: ['./nav-item.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "HYfv":
    /*!********************************************************!*\
      !*** ./src/app/services/http-intercept.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: HttpInterceptInterceptor */

    /***/
    function HYfv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpInterceptInterceptor", function () {
        return HttpInterceptInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

      var HttpInterceptInterceptor = /*#__PURE__*/function () {
        function HttpInterceptInterceptor() {
          _classCallCheck(this, HttpInterceptInterceptor);
        }

        _createClass(HttpInterceptInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', e.error.message, 'error').then();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }));
          }
        }]);

        return HttpInterceptInterceptor;
      }();

      HttpInterceptInterceptor.ɵfac = function HttpInterceptInterceptor_Factory(t) {
        return new (t || HttpInterceptInterceptor)();
      };

      HttpInterceptInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpInterceptInterceptor,
        factory: HttpInterceptInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Jltz":
    /*!************************************************************************!*\
      !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
      \************************************************************************/

    /*! exports provided: DataFilterPipe */

    /***/
    function Jltz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function () {
        return DataFilterPipe;
      });
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataFilterPipe = /*#__PURE__*/function () {
        function DataFilterPipe() {
          _classCallCheck(this, DataFilterPipe);
        }

        _createClass(DataFilterPipe, [{
          key: "transform",
          value: function transform(array, query) {
            if (query) {
              return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (row) {
                return row.name.indexOf(query) > -1;
              });
            }

            return array;
          }
        }]);

        return DataFilterPipe;
      }();

      DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) {
        return new (t || DataFilterPipe)();
      };

      DataFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "dataFilter",
        type: DataFilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
          args: [{
            name: 'dataFilter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "K7hc":
    /*!*******************************!*\
      !*** ./src/app/app-config.ts ***!
      \*******************************/

    /*! exports provided: GradientConfig */

    /***/
    function K7hc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GradientConfig", function () {
        return GradientConfig;
      });

      var GradientConfig = function GradientConfig() {
        _classCallCheck(this, GradientConfig);
      };

      GradientConfig.config = {
        layout: 'vertical',
        subLayout: '',
        collapseMenu: false,
        layoutType: 'menu-light',
        headerBackColor: 'header-blue',
        // header-green, header-yellow, header-orchidgreen, header-indigogreen, header-darkgreen, header-darkblue
        rtlLayout: false,
        navFixedLayout: true,
        headerFixedLayout: true,
        boxLayout: false,
        breadcrumbs: true
      };
      /***/
    },

    /***/
    "N4L5":
    /*!***************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
      \***************************************************************/

    /*! exports provided: AlertModule */

    /***/
    function N4L5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return AlertModule;
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


      var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.component */
      "+Ai/");

      var AlertModule = function AlertModule() {
        _classCallCheck(this, AlertModule);
      };

      AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AlertModule
      });
      AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AlertModule_Factory(t) {
          return new (t || AlertModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, {
          declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "NvK5":
    /*!****************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: NavSearchComponent */

    /***/
    function NvK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
        return NavSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavSearchComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSearchComponent_div_2_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.searchOn = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavSearchComponent = /*#__PURE__*/function () {
        function NavSearchComponent() {
          _classCallCheck(this, NavSearchComponent);

          this.searchOn = false;
        }

        _createClass(NavSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavSearchComponent;
      }();

      NavSearchComponent.ɵfac = function NavSearchComponent_Factory(t) {
        return new (t || NavSearchComponent)();
      };

      NavSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavSearchComponent,
        selectors: [["app-nav-search"]],
        decls: 3,
        vars: 1,
        consts: [["href", "javascript:", 1, "pop-search", 3, "click"], [1, "feather", "icon-search"], ["class", "search-bar", 4, "ngIf"], [1, "search-bar"], ["type", "text", "placeholder", "Search here", 1, "form-control", "border-0", "shadow-none"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
        template: function NavSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSearchComponent_Template_a_click_0_listener() {
              return ctx.searchOn = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavSearchComponent_div_2_Template, 5, 0, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-search',
            templateUrl: './nav-search.component.html',
            styleUrls: ['./nav-search.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "OF5i":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
      \****************************************************************/

    /*! exports provided: ToggleFullScreenDirective */

    /***/
    function OF5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function () {
        return ToggleFullScreenDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToggleFullScreenDirective = /*#__PURE__*/function () {
        function ToggleFullScreenDirective(elements) {
          _classCallCheck(this, ToggleFullScreenDirective);

          this.elements = elements;
        }

        _createClass(ToggleFullScreenDirective, [{
          key: "onClick",
          value: function onClick() {
            /*if (screenfull.enabled) {
              (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
              (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
              screenfull.toggle();
            }*/
            // if (isScreenFull(screenfull)) {
            //   if (screenfull.isFullscreen) {
            //     screenfull.exit();
            //   } else {
            //     screenfull.request();
            //   }
            // }
          }
        }]);

        return ToggleFullScreenDirective;
      }();

      ToggleFullScreenDirective.ɵfac = function ToggleFullScreenDirective_Factory(t) {
        return new (t || ToggleFullScreenDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ToggleFullScreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ToggleFullScreenDirective,
        selectors: [["", "appToggleFullScreen", ""]],
        hostBindings: function ToggleFullScreenDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullScreenDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullScreenDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appToggleFullScreen]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();

      function isScreenFull(sf) {
        return sf.isFullscreen;
      }
      /***/

    },

    /***/
    "PU9X":
    /*!******************************************************************!*\
      !*** ./src/app/theme/shared/components/toast/toast.component.ts ***!
      \******************************************************************/

    /*! exports provided: ToastComponent */

    /***/
    function PU9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
        return ToastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast.service */
      "7oHd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["*"];

      var ToastComponent = /*#__PURE__*/function () {
        function ToastComponent(toastEvent) {
          _classCallCheck(this, ToastComponent);

          this.toastEvent = toastEvent;
          this.isShow = false;
        }

        _createClass(ToastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastEvent.toggleToast.subscribe(function (toast) {
              document.querySelector('#' + toast.uid).classList.add('show');
              setTimeout(function () {
                document.querySelector('#' + toast.uid).classList.remove('show');
              }, toast.delay ? toast.delay : 500);
            });
          }
        }, {
          key: "closeToast",
          value: function closeToast(uid) {
            document.querySelector('#' + uid).classList.remove('show');
          }
        }]);

        return ToastComponent;
      }();

      ToastComponent.ɵfac = function ToastComponent_Factory(t) {
        return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToastComponent,
        selectors: [["app-toast"]],
        inputs: {
          uID: "uID",
          toastTitle: "toastTitle",
          toastCaption: "toastCaption",
          toastClass: "toastClass"
        },
        ngContentSelectors: _c0,
        decls: 12,
        vars: 4,
        consts: [["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", 3, "id", "ngClass"], [1, "toast-header"], ["src", "./favicon.ico", "alt", "", 1, "img-fluid", "m-r-5", 2, "width", "20px"], [1, "mr-auto"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "m-l-5", "mb-1", "mt-1", "close", 3, "click"], [1, "toast-body"]],
        template: function ToastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_Template_button_click_7_listener() {
              return ctx.closeToast(ctx.uID);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.uID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toastClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toastTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toastCaption);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toast',
            templateUrl: './toast.component.html',
            styleUrls: ['./toast.component.scss']
          }]
        }], function () {
          return [{
            type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
          }];
        }, {
          uID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toastTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toastCaption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toastClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "S8Sc":
    /*!*************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
      \*************************************************************/

    /*! exports provided: NavigationItem */

    /***/
    function S8Sc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
        return NavigationItem;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavigationItems = [{
        id: 'navigation',
        title: 'Menu',
        type: 'group',
        icon: 'feather icon-align-left',
        children: [{
          id: 'customers',
          title: 'CRM',
          type: 'collapse',
          icon: 'feather icon-user',
          children: [{
            id: 'customer',
            title: 'Cliente',
            type: 'item',
            url: '/customer',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'quotation',
            title: 'Cotización',
            type: 'item',
            url: '/quotation',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }]
        }, {
          id: 'providers',
          title: 'PROVEEDORES',
          type: 'collapse',
          icon: 'feather icon-user',
          children: [{
            id: 'provider',
            title: 'Proveedor',
            type: 'item',
            url: '/provider',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'typeProvider',
            title: 'Tipo de Proveedor',
            type: 'item',
            url: '/typeProvider',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }]
        }, {
          id: 'productsAndServices',
          title: 'PRODUCTOS Y SERVICIOS',
          type: 'collapse',
          icon: 'feather icon-user',
          children: [{
            id: 'productAndService',
            title: 'Productos y Servicios',
            type: 'item',
            url: '/productAndService',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'categoryProductAndService',
            title: 'Categoría de Producto y Servicio',
            type: 'item',
            url: '/categoryProductAndService',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'packProductAndService',
            title: 'Pack de Productos y Servicio',
            type: 'item',
            url: '/packProductAndService',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }]
        }, {
          id: 'catalogos',
          title: 'CATALOGOS',
          type: 'collapse',
          icon: 'feather icon-user',
          children: [{
            id: 'creditDays',
            title: 'Días de crédito',
            type: 'item',
            url: '/creditDays',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'location',
            title: 'Ubicación',
            type: 'item',
            url: '/location',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'typeService',
            title: 'Tipo de Servicio',
            type: 'item',
            url: '/typeService',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'typeTurn',
            title: 'Tipo de Turno',
            type: 'item',
            url: '/typeTurn',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'turn',
            title: 'Turno',
            type: 'item',
            url: '/turn',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'reportTemplate',
            title: 'Plantilla de Reporte',
            type: 'item',
            url: '/reportTemplate',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }, {
            id: 'reportTypeTemplate',
            title: 'Tipo de Plantilla de Reporte',
            type: 'item',
            url: '/reportTypeTemplate',
            classes: 'nav-item',
            icon: 'feather icon-user'
          }]
        }]
      }];

      var NavigationItem = /*#__PURE__*/function () {
        function NavigationItem() {
          _classCallCheck(this, NavigationItem);
        }

        _createClass(NavigationItem, [{
          key: "get",
          value: function get() {
            return NavigationItems;
          }
        }]);

        return NavigationItem;
      }();

      NavigationItem.ɵfac = function NavigationItem_Factory(t) {
        return new (t || NavigationItem)();
      };

      NavigationItem.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationItem,
        factory: NavigationItem.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme/shared/components/spinner/spinner.component */
      "s2d5");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();

      $(document).ready(function () {
        // tslint:disable-next-line:only-arrow-functions
        $(document).on('change', '.moneda', function () {
          $(this).val(new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 // @ts-ignore

          }).format($(this).val()));
        });
      });
      /***/
    },

    /***/
    "U0xv":
    /*!*************************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ChatUserListComponent */

    /***/
    function U0xv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatUserListComponent", function () {
        return ChatUserListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../fack-db/friends-list */
      "zx2c");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _friend_friend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./friend/friend.component */
      "8o+C");

      function ChatUserListComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-friend", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChatOn", function ChatUserListComponent_ng_container_9_Template_app_friend_onChatOn_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var friends_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onChatOn(friends_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var friends_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("friends", friends_r1);
        }
      }

      var ChatUserListComponent = /*#__PURE__*/function () {
        function ChatUserListComponent() {
          _classCallCheck(this, ChatUserListComponent);

          this.onChatCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_1__["FriendsList"].friends;
        }

        _createClass(ChatUserListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChatOn",
          value: function onChatOn(friend_id) {
            this.onChatToggle.emit(friend_id);
          }
        }]);

        return ChatUserListComponent;
      }();

      ChatUserListComponent.ɵfac = function ChatUserListComponent_Factory(t) {
        return new (t || ChatUserListComponent)();
      };

      ChatUserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatUserListComponent,
        selectors: [["app-chat-user-list"]],
        outputs: {
          onChatCollapse: "onChatCollapse",
          onChatToggle: "onChatToggle"
        },
        decls: 10,
        vars: 7,
        consts: [[1, "h-list-header"], [1, "input-group"], ["type", "text", "id", "search-friends", "placeholder", "Search Friend . . .", 1, "form-control"], [1, "h-list-body"], ["href", "javascript:", 1, "h-close-text", 3, "click"], [1, "feather", "icon-chevrons-right"], [1, "main-friend-cont", "scroll-div"], [1, "main-friend-list"], ["ngClass", "elite-scroll", 3, "usePSClass", "disabled"], [4, "ngFor", "ngForOf"], [3, "friends", "onChatOn"]],
        template: function ChatUserListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatUserListComponent_Template_a_click_4_listener() {
              return ctx.onChatCollapse.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "perfect-scrollbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatUserListComponent_ng_container_9_Template, 2, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "350px")("max-height", "calc(100vh - 85px)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("usePSClass", "elite")("disabled", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.friendsList);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _friend_friend_component__WEBPACK_IMPORTED_MODULE_4__["FriendComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LXVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatUserListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-user-list',
            templateUrl: './chat-user-list.component.html',
            styleUrls: ['./chat-user-list.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onChatCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onChatToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "VU1P":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/todo/todo-card-complete.directive.ts ***!
      \******************************************************************************/

    /*! exports provided: TodoCardCompleteDirective */

    /***/
    function VU1P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoCardCompleteDirective", function () {
        return TodoCardCompleteDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TodoCardCompleteDirective = /*#__PURE__*/function () {
        function TodoCardCompleteDirective(elements) {
          _classCallCheck(this, TodoCardCompleteDirective);

          this.elements = elements;
        }

        _createClass(TodoCardCompleteDirective, [{
          key: "onToggle",
          value: function onToggle($event) {
            $event.preventDefault();
            this.elements.nativeElement.classList.toggle('complete');
          }
        }]);

        return TodoCardCompleteDirective;
      }();

      TodoCardCompleteDirective.ɵfac = function TodoCardCompleteDirective_Factory(t) {
        return new (t || TodoCardCompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      TodoCardCompleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TodoCardCompleteDirective,
        selectors: [["", "appTodoCardComplete", ""]],
        hostBindings: function TodoCardCompleteDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoCardCompleteDirective_click_HostBindingHandler($event) {
              return ctx.onToggle($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoCardCompleteDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appTodoCardComplete]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./theme/layout/admin/admin.component */
      "h1mt");
      /* harmony import */


      var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./theme/layout/auth/auth.component */
      "iv9w");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/navigation.component */
      "sqAq");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-content.component */
      "E7Y8");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */
      "aFrh");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */
      "Ap1d");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */
      "HRIB");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-bar.component */
      "hiAX");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */
      "calg");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */
      "NvK5");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */
      "aM2T");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component */
      "U0xv");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component */
      "8o+C");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component */
      "GxdA");
      /* harmony import */


      var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./theme/layout/admin/configuration/configuration.component */
      "kSgv");
      /* harmony import */


      var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./theme/shared/full-screen/toggle-full-screen */
      "OF5i");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/navigation */
      "S8Sc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common/locales/es-MX */
      "LMmM");
      /* harmony import */


      var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_26__);
      /* harmony import */


      var _services_http_intercept_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./services/http-intercept.interceptor */
      "HYfv");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* Menu Items */
      // Locales


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_25__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_26___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_23__["NavigationItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbActiveModal"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _services_http_intercept_interceptor__WEBPACK_IMPORTED_MODULE_27__["HttpInterceptInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["NgSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_18__["ChatUserListComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_19__["FriendComponent"], _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_20__["ChatMsgComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_22__["ToggleFullScreenDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["NgSelectModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_18__["ChatUserListComponent"], _theme_layout_admin_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_19__["FriendComponent"], _theme_layout_admin_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_20__["ChatMsgComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_22__["ToggleFullScreenDirective"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["NgSelectModule"]],
            providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_23__["NavigationItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbActiveModal"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _services_http_intercept_interceptor__WEBPACK_IMPORTED_MODULE_27__["HttpInterceptInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"]], []);
      /***/

    },

    /***/
    "aFrh":
    /*!********************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: NavGroupComponent */

    /***/
    function aFrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
        return NavGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../nav-collapse/nav-collapse.component */
      "Ap1d");
      /* harmony import */


      var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../nav-item/nav-item.component */
      "HRIB");

      function NavGroupComponent_ng_container_0_ng_container_4_app_nav_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 4);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
        }
      }

      function NavGroupComponent_ng_container_0_ng_container_4_app_nav_collapse_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 4);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
        }
      }

      function NavGroupComponent_ng_container_0_ng_container_4_app_nav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 4);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
        }
      }

      function NavGroupComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavGroupComponent_ng_container_0_ng_container_4_app_nav_group_1_Template, 1, 1, "app-nav-group", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavGroupComponent_ng_container_0_ng_container_4_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavGroupComponent_ng_container_0_ng_container_4_app_nav_item_3_Template, 1, 1, "app-nav-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type == "collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type == "item");
        }
      }

      function NavGroupComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavGroupComponent_ng_container_0_ng_container_4_Template, 4, 3, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
        }
      }

      var NavGroupComponent = /*#__PURE__*/function () {
        function NavGroupComponent(zone, location) {
          _classCallCheck(this, NavGroupComponent);

          this.zone = zone;
          this.location = location;
          this.layout1 = false;
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
        }

        _createClass(NavGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // at reload time active and trigger link
            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                  parent.classList.add('pcoded-trigger');
                }

                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                  up_parent.classList.add('pcoded-trigger');
                }

                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                  last_parent.classList.add('pcoded-trigger');
                }

                last_parent.classList.add('active');
              }
            }
          }
        }]);

        return NavGroupComponent;
      }();

      NavGroupComponent.ɵfac = function NavGroupComponent_Factory(t) {
        return new (t || NavGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      NavGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavGroupComponent,
        selectors: [["app-nav-group"]],
        inputs: {
          item: "item",
          layout1: "layout1",
          activeId: "activeId"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "nav-item", "pcoded-menu-caption"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
        template: function NavGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavGroupComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NavGroupComponent, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__["NavItemComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-group',
            templateUrl: './nav-group.component.html',
            styleUrls: ['./nav-group.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          layout1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "aM2T":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NavRightComponent */

    /***/
    function aM2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
        return NavRightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../app-config */
      "K7hc");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chat-user-list/chat-user-list.component */
      "U0xv");
      /* harmony import */


      var _chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chat-msg/chat-msg.component */
      "GxdA");

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      function NavRightComponent_section_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-user-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChatToggle", function NavRightComponent_section_19_Template_app_chat_user_list_onChatToggle_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onChatToggle($event);
          })("onChatCollapse", function NavRightComponent_section_19_Template_app_chat_user_list_onChatCollapse_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r6.visibleUserList = !ctx_r6.visibleUserList;
            return ctx_r6.chatMessage = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.visibleUserList))("@slideInOutLeft", undefined);
        }
      }

      function NavRightComponent_section_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-msg", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChatToggle", function NavRightComponent_section_20_Template_app_chat_msg_onChatToggle_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.chatMessage = !ctx_r7.chatMessage;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.chatMessage))("@slideInOutLeft", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("friendId", ctx_r1.friendId);
        }
      }

      function NavRightComponent_section_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-user-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChatToggle", function NavRightComponent_section_21_Template_app_chat_user_list_onChatToggle_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onChatToggle($event);
          })("onChatCollapse", function NavRightComponent_section_21_Template_app_chat_user_list_onChatCollapse_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r11.visibleUserList = !ctx_r11.visibleUserList;
            return ctx_r11.chatMessage = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.visibleUserList))("@slideInOutRight", undefined);
        }
      }

      function NavRightComponent_section_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-chat-msg", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChatToggle", function NavRightComponent_section_22_Template_app_chat_msg_onChatToggle_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.chatMessage = !ctx_r12.chatMessage;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r3.chatMessage))("@slideInOutRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("friendId", ctx_r3.friendId);
        }
      }

      var NavRightComponent = /*#__PURE__*/function () {
        function NavRightComponent(auth, route) {
          _classCallCheck(this, NavRightComponent);

          this.auth = auth;
          this.route = route;
          this.visibleUserList = false;
          this.chatMessage = false;
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
          this.nameUser = auth.getDataUsuario().username;
        }

        _createClass(NavRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChatToggle",
          value: function onChatToggle(friendID) {
            this.friendId = friendID;
            this.chatMessage = !this.chatMessage;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (document.querySelector('body').classList.contains('elite-rtl')) {
              this.gradientConfig['rtl-layout'] = true;
            } else {
              this.gradientConfig['rtl-layout'] = false;
            }
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.auth.logout();
            this.route.navigateByUrl('/login');
          }
        }, {
          key: "profile",
          value: function profile() {
            var userData = this.auth.getDataUsuario();
            console.log(userData);
            this.route.navigateByUrl('/systemUser/update/' + userData.id);
          }
        }]);

        return NavRightComponent;
      }();

      NavRightComponent.ɵfac = function NavRightComponent_Factory(t) {
        return new (t || NavRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      NavRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavRightComponent,
        selectors: [["app-nav-right"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
        decls: 23,
        vars: 5,
        consts: [[1, "navbar-nav", "ml-auto"], [3, "click"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown", "drp-user"], ["href", "javascript:", "ngbDropdownToggle", "", "data-toggle", "dropdown"], ["src", "assets/system/user.jpeg", "alt", "User-Profile-Image", 1, "img-radius", "wid-40"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "profile-notification"], [1, "pro-head"], ["src", "assets/system/user.jpeg", "alt", "User-Profile-Image", 1, "img-radius"], ["title", "Logout", 1, "dud-logout", 2, "color", "white !important", 3, "click"], [1, "feather", "icon-log-out"], [1, "pro-body"], [1, "dropdown-item", 3, "click"], [1, "feather", "icon-user"], ["class", "header-user-list", 3, "ngClass", 4, "ngIf"], ["class", "header-chat", 3, "ngClass", 4, "ngIf"], [1, "header-user-list", 3, "ngClass"], [3, "onChatToggle", "onChatCollapse"], [1, "header-chat", 3, "ngClass"], [3, "friendId", "onChatToggle"]],
        template: function NavRightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavRightComponent_Template_li_click_2_listener() {
              return ctx.visibleUserList = !ctx.visibleUserList;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavRightComponent_Template_a_click_12_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavRightComponent_Template_a_click_16_listener() {
              return ctx.profile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Perfil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavRightComponent_section_19_Template, 2, 4, "section", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavRightComponent_section_20_Template, 2, 5, "section", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavRightComponent_section_21_Template, 2, 4, "section", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavRightComponent_section_22_Template, 2, 5, "section", 14);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibleUserList && !ctx.gradientConfig["rtl-layout"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatMessage && !ctx.gradientConfig["rtl-layout"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibleUserList && ctx.gradientConfig["rtl-layout"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatMessage && ctx.gradientConfig["rtl-layout"]);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_7__["ChatUserListComponent"], _chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_8__["ChatMsgComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(100%)'
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(-100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(-100%)'
          }))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavRightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-right',
            templateUrl: './nav-right.component.html',
            styleUrls: ['./nav-right.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'translateX(100%)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'translateX(0%)'
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'translateX(100%)'
            }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'translateX(-100%)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'translateX(0%)'
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'translateX(-100%)'
            }))])])]
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "btuU":
    /*!********************************************************************************************!*\
      !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: AnimationModalComponent */

    /***/
    function btuU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function () {
        return AnimationModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AnimationModalComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }
      }

      function AnimationModalComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationModalComponent_ng_template_4_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.close(ctx_r3.modalID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["*"];

      var AnimationModalComponent = /*#__PURE__*/function () {
        function AnimationModalComponent() {
          _classCallCheck(this, AnimationModalComponent);

          this.backDrop = false;
        }

        _createClass(AnimationModalComponent, [{
          key: "close",
          value: function close(event) {
            document.querySelector('#' + event).classList.remove('md-show');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AnimationModalComponent;
      }();

      AnimationModalComponent.ɵfac = function AnimationModalComponent_Factory(t) {
        return new (t || AnimationModalComponent)();
      };

      AnimationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AnimationModalComponent,
        selectors: [["app-animation-modal"]],
        inputs: {
          modalClass: "modalClass",
          contentClass: "contentClass",
          modalID: "modalID",
          backDrop: "backDrop"
        },
        ngContentSelectors: _c0,
        decls: 6,
        vars: 5,
        consts: [[1, "md-modal", 3, "ngClass", "id"], [1, "md-content", 3, "ngClass"], ["class", "md-overlay", 4, "ngIf", "ngIfElse"], ["backDropOver", ""], [1, "md-overlay"], [1, "md-overlay", 3, "click"]],
        template: function AnimationModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnimationModalComponent_div_3_Template, 1, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimationModalComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.modalID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.modalClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backDrop)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  perspective: 600px;\n}\n.container {\n  min-height: 100%;\n}\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n.md-show {\n  visibility: visible;\n}\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  transition: all 0.3s;\n}\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n/* Content styles */\n.md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n.md-content h3 {\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  opacity: 0.8;\n  color: #fff;\n  border-radius: 3px 3px 0 0;\n}\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n}\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n  line-height: 1.5;\n}\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n.md-content > div ul li {\n  padding: 5px 0;\n}\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n/* Individual modal styles with animations/transitions */\n/* Effect 1: Fade in and scale up */\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 2: Slide from the right */\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n/* Effect 3: Slide from the bottom */\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 4: Newspaper */\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 5: fall */\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 6: side fall */\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 7:  slide and stick to top */\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n/* Effect 8: 3D flip horizontal */\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 9: 3D flip vertical */\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 10: 3D sign */\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 11: Super scaled */\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 12:  Just me */\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent;\n}\n.md-effect-12 .md-content h3 {\n  background: transparent;\n}\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 13: 3D slit */\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit 0.7s forwards ease-out;\n  animation: slit 0.7s forwards ease-out;\n}\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: 0.5;\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n/* Effect 14:  3D Rotate from bottom */\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 15:  3D Rotate in from left */\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 16:  Blur */\nbody.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  filter: blur(3px);\n}\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 17:  Slide in from bottom with perspective on container */\nbody.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\nbody.modal-17 > header {\n  height: 70px;\n}\nbody.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n}\nbody.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\nbody.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none;\n}\nbody.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n/* Effect 18:  Slide from right with perspective on container */\nbody.modal-18 {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-18 ~ .md-overlay {\n  transition: all 0.5s;\n}\nbody.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none;\n}\nbody.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\nbody.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n  }\n}\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n/* Effect 19:  Slip in from the top with perspective on container */\nbody.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none;\n}\nbody.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\nbody.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n}\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQUVKO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBRUEsNENBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFFQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBLG1CQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUY7QUFDRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBQ0o7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQUk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRU47QUFBSTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtBQUVOO0FBRE07RUFDRSxjQUFBO0FBR1I7QUFDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdBLHdEQUFBO0FBRUEsbUNBQUE7QUFFQTtFQUVFLHFCQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0FBRkY7QUFLQTtFQUVFLG1CQUFBO0VBQ0EsVUFBQTtBQUZGO0FBS0EsbUNBQUE7QUFFQTtFQUVFLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLHNEQUFBO0FBSEY7QUFNQTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtBQUhGO0FBTUEsb0NBQUE7QUFFQTtFQUVFLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLG9CQUFBO0FBSkY7QUFPQTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0Esd0JBQUE7QUFFQTtFQUlFLGtDQUFBO0VBQ0EsVUFBQTtBQUxGO0FBUUE7RUFHRSxvQkFBQTtBQUxGO0FBUUE7RUFJRSxnQ0FBQTtFQUNBLFVBQUE7QUFMRjtBQVFBLG1CQUFBO0FBR0U7RUFHRSxtQkFBQTtBQVBKO0FBU0U7RUFHRSw0QkFBQTtFQUlBLDJDQUFBO0VBQ0EsVUFBQTtBQVBKO0FBV0E7RUFHRSw0QkFBQTtFQUlBLHdDQUFBO0VBQ0EsVUFBQTtBQVJGO0FBV0Esd0JBQUE7QUFHRTtFQUdFLG1CQUFBO0FBVko7QUFZRTtFQUdFLDRCQUFBO0VBSUEseURBQUE7RUFDQSxVQUFBO0FBVko7QUFjQTtFQUdFLDRCQUFBO0VBSUEsbURBQUE7RUFDQSxVQUFBO0FBWEY7QUFjQSxzQ0FBQTtBQUVBO0VBQ0UsTUFBQTtFQUlBLDJCQUFBO0FBWkY7QUFhRTtFQUlFLDRCQUFBO0VBR0Esb0JBQUE7RUFDQSxVQUFBO0FBWEo7QUFlQTtFQUlFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBWkY7QUFlQSxpQ0FBQTtBQUdFO0VBR0UsbUJBQUE7QUFkSjtBQWdCRTtFQUdFLDRCQUFBO0VBSUEsMEJBQUE7RUFHQSxvQkFBQTtFQUNBLFVBQUE7QUFkSjtBQWtCQTtFQUlFLHdCQUFBO0VBQ0EsVUFBQTtBQWZGO0FBa0JBLCtCQUFBO0FBR0U7RUFHRSxtQkFBQTtBQWpCSjtBQW1CRTtFQUdFLDRCQUFBO0VBSUEsMEJBQUE7RUFHQSxvQkFBQTtFQUNBLFVBQUE7QUFqQko7QUFxQkE7RUFJRSx3QkFBQTtFQUNBLFVBQUE7QUFsQkY7QUFxQkEsdUJBQUE7QUFHRTtFQUdFLG1CQUFBO0FBcEJKO0FBc0JFO0VBR0UsNEJBQUE7RUFJQSwwQkFBQTtFQUdBLHVCQUFBO0VBQ0EsVUFBQTtFQUdBLG9CQUFBO0FBcEJKO0FBd0JBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FBckJGO0FBd0JBLDRCQUFBO0FBRUE7RUFJRSxtQkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQXRCRjtBQXlCQTtFQUlFLG1CQUFBO0VBQ0EsVUFBQTtBQXRCRjtBQXlCQSx3QkFBQTtBQUVBO0VBSUUscUJBQUE7RUFDQSxVQUFBO0VBR0Esb0JBQUE7RUFDQSxXQUFBO0VBSUEsdUJBQUE7QUExQkY7QUF1QkU7RUFDRSx1QkFBQTtBQXJCSjtBQTBCQTtFQUlFLG1CQUFBO0VBQ0EsVUFBQTtBQXZCRjtBQTBCQSx1QkFBQTtBQUdFO0VBR0UsbUJBQUE7QUF6Qko7QUEyQkU7RUFHRSw0QkFBQTtFQUlBLDZDQUFBO0VBQ0EsVUFBQTtBQXpCSjtBQTZCQTtFQUNFLDhDQUFBO0VBRUEsc0NBQUE7QUExQkY7QUE2QkE7RUFDRTtJQUNFLG9EQUFBO0lBQ0EsWUFBQTtJQUNBLDJDQUFBO0VBMUJGO0VBNkJBO0lBQ0UsOENBQUE7SUFDQSxVQUFBO0VBM0JGO0FBQ0Y7QUE2Q0E7RUFDRTtJQUNFLDRDQUFBO0lBQ0EsVUFBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7RUFoQ0Y7RUFtQ0E7SUFDRSxzQ0FBQTtJQUNBLFVBQUE7RUFqQ0Y7QUFDRjtBQXFDQSxzQ0FBQTtBQUdFO0VBR0UsbUJBQUE7QUFyQ0o7QUF1Q0U7RUFHRSw0QkFBQTtFQUlBLDBDQUFBO0VBR0Esd0JBQUE7RUFDQSxVQUFBO0VBR0EsNkJBQUE7QUFyQ0o7QUF5Q0E7RUFJRSx1Q0FBQTtFQUNBLFVBQUE7QUF0Q0Y7QUF5Q0EsdUNBQUE7QUFHRTtFQUdFLG1CQUFBO0FBeENKO0FBMENFO0VBR0UsNEJBQUE7RUFJQSw0REFBQTtFQUdBLHdCQUFBO0VBQ0EsVUFBQTtFQUdBLG9CQUFBO0FBeENKO0FBNENBO0VBSUUsdURBQUE7RUFDQSxVQUFBO0FBekNGO0FBNENBLHFCQUFBO0FBR0U7RUFFRSxpQkFBQTtBQTNDSjtBQStDQTtFQUVFLDBCQUFBO0VBQ0EsVUFBQTtBQTVDRjtBQStDQTtFQUVFLG9CQUFBO0FBNUNGO0FBK0NBO0VBRUUsd0JBQUE7RUFDQSxVQUFBO0FBNUNGO0FBK0NBLG1FQUFBO0FBR0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSwwQkFBQTtBQTlDSjtBQWtEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUdBLDBCQUFBO0FBL0NGO0FBb0RJO0VBQ0UsWUFBQTtBQWpETjtBQW1ESTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFqRE47QUFvREU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBRUEseUJBQUE7RUFFQSx3QkFBQTtFQUVBLDRCQUFBO0FBbERKO0FBcURJO0VBQ0UsYUFBQTtBQW5ETjtBQXVESTtFQUVFLHlCQUFBO0VBRUEsd0JBQUE7RUFFQSw0QkFBQTtBQXJETjtBQTBEQTtFQUNFLFVBQUE7RUFFQSwyQkFBQTtBQXZERjtBQTBEQTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtFQUdBLHlCQUFBO0FBdkRGO0FBMERBLCtEQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUF4REY7QUEyREE7RUFFRSxvQkFBQTtBQXhERjtBQTZESTtFQUNFLGFBQUE7QUExRE47QUE2REU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FBM0RKO0FBOERJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FBNUROO0FBaUVBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLDJDQUFBO0VBOURGO0VBaUVBO0lBQ0UscUNBQUE7RUEvREY7QUFDRjtBQW1FQTtFQUNFO0lBQ0UsMENBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VBakVGO0VBb0VBO0lBQ0UsNkJBQUE7RUFsRUY7QUFDRjtBQXNFQTtFQUVFLDJCQUFBO0VBQ0EsVUFBQTtBQXBFRjtBQXdFRTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtFQUVBLHlCQUFBO0FBckVKO0FBd0VJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBdEVOO0FBd0VJO0VBR0Usb0JBQUE7QUF0RU47QUEyRUEsbUVBQUE7QUFJSTtFQUNFLGFBQUE7QUEzRU47QUE4RUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FBNUVKO0FBK0VJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FBN0VOO0FBa0ZBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLDJDQUFBO0VBL0VGO0FBQ0Y7QUEyRkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtFQW5GRjtBQUNGO0FBdUZBO0VBSUUsNEJBQUE7RUFDQSxVQUFBO0FBckZGO0FBd0ZBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0VBR0EseUJBQUE7QUFyRkY7QUF3RkE7RUFDRTtJQUNFLGNBQUE7RUFyRkY7QUFDRiIsImZpbGUiOiJhbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcGVyc3BlY3RpdmUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1kLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDYzMHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDIwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5tZC1zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm1kLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cgfiAubWQtb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIENvbnRlbnQgc3R5bGVzICovXG5cbi5tZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gIH1cbiAgPiBkaXYge1xuICAgIHBhZGRpbmc6IDE1cHggNDBweCAzMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cblxuLyogSW5kaXZpZHVhbCBtb2RhbCBzdHlsZXMgd2l0aCBhbmltYXRpb25zL3RyYW5zaXRpb25zICovXG5cbi8qIEVmZmVjdCAxOiBGYWRlIGluIGFuZCBzY2FsZSB1cCAqL1xuXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAyOiBTbGlkZSBmcm9tIHRoZSByaWdodCAqL1xuXG4ubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXG5cbi5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNDogTmV3c3BhcGVyICovXG5cbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTQgfiAubWQtb3ZlcmxheSwgLm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDU6IGZhbGwgKi9cblxuLm1kLWVmZmVjdC01IHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNjogc2lkZSBmYWxsICovXG5cbi5tZC1lZmZlY3QtNiB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xuXG4ubWQtZWZmZWN0LTcge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC03IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDg6IDNEIGZsaXAgaG9yaXpvbnRhbCAqL1xuXG4ubWQtZWZmZWN0LTgge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC04IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXG5cbi5tZC1lZmZlY3QtOSB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDEwOiAzRCBzaWduICovXG5cbi5tZC1lZmZlY3QtMTAge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDExOiBTdXBlciBzY2FsZWQgKi9cblxuLm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDEyOiAgSnVzdCBtZSAqL1xuXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjb2xvcjogI2ZmZjtcbiAgaDMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMzogM0Qgc2xpdCAqL1xuXG4ubWQtZWZmZWN0LTEzIHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbkAtbW96LWtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cblxuLm1kLWVmZmVjdC0xNCB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE1OiAgM0QgUm90YXRlIGluIGZyb20gbGVmdCAqL1xuXG4ubWQtZWZmZWN0LTE1IHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE2OiAgQmx1ciAqL1xuXG5ib2R5Lm1vZGFsLTE2ID4ge1xuICBuYXYsIGhlYWRlciwgc2VjdGlvbiB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgfVxufVxuXG4ubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIsIC5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE3OiAgU2xpZGUgaW4gZnJvbSBib3R0b20gd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cblxuYm9keS5tb2RhbC0xNyA+IHtcbiAgbmF2LCBzZWN0aW9uLCAubWQtb3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTcgfiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbmJvZHkubW9kYWwtMTcge1xuICA+IHtcbiAgICBoZWFkZXIge1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbiAgICBuYXYge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIH1cbiAgfVxuICAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuICA+IHtcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gID4ge1xuICAgIG5hdiwgLm1kLW92ZXJsYXksIHNlY3Rpb24ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB9XG4gIH1cbn1cblxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xufVxuXG4vKiBFZmZlY3QgMTg6ICBTbGlkZSBmcm9tIHJpZ2h0IHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5cbmJvZHkubW9kYWwtMTgge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xOCB+IC5tZC1vdmVybGF5IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbmJvZHkubW9kYWwtMTgge1xuICA+IHtcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIH1cbiAgPiB7XG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAgIH1cbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XG4gIH1cbn1cblxuXG4ubWQtZWZmZWN0LTE4IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cge1xuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIH1cbiAgJi5tZC1lZmZlY3QtMTkgfiB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubWQtb3ZlcmxheSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cbiAgfVxufVxuXG4vKiBFZmZlY3QgMTk6ICBTbGlwIGluIGZyb20gdGhlIHRvcCB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xuXG5ib2R5Lm1vZGFsLTE5IHtcbiAgPiB7XG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB9XG4gID4ge1xuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgICB9XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG59XG5cblxuQC1tb3ota2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBPcGVuVG9wIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG59XG5cblxuLm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICB9XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-animation-modal',
            templateUrl: './animation-modal.component.html',
            styleUrls: ['./animation-modal.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          modalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          modalID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "calg":
    /*!***************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
      \***************************************************************************/

    /*! exports provided: NavLeftComponent */

    /***/
    function calg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
        return NavLeftComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-search/nav-search.component */
      "NvK5");

      var NavLeftComponent = /*#__PURE__*/function () {
        function NavLeftComponent() {
          _classCallCheck(this, NavLeftComponent);
        }

        _createClass(NavLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavLeftComponent;
      }();

      NavLeftComponent.ɵfac = function NavLeftComponent_Factory(t) {
        return new (t || NavLeftComponent)();
      };

      NavLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavLeftComponent,
        selectors: [["app-nav-left"]],
        decls: 3,
        vars: 0,
        consts: [[1, "navbar-nav", "mr-auto"], [1, "nav-item"]],
        template: function NavLeftComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_1__["NavSearchComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbGVmdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavLeftComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-left',
            templateUrl: './nav-left.component.html',
            styleUrls: ['./nav-left.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ebz3":
    /*!***********************************************!*\
      !*** ./src/app/theme/shared/shared.module.ts ***!
      \***********************************************/

    /*! exports provided: SharedModule */

    /***/
    function ebz3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components */
      "7jS0");
      /* harmony import */


      var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/data-table/data-filter.pipe */
      "Jltz");
      /* harmony import */


      var _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/todo/todo-list-remove.directive */
      "zCax");
      /* harmony import */


      var _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/todo/todo-card-complete.directive */
      "VU1P");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-click-outside */
      "qew9");
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/spinner/spinner.component */
      "s2d5");
      /* harmony import */


      var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/chart/apex-chart/apex-chart.component */
      "q6ff");
      /* harmony import */


      var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/chart/apex-chart/apex-chart.service */
      "9OXH");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/toast/toast.component */
      "PU9X");
      /* harmony import */


      var _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/toast/toast.service */
      "7oHd");
      /* harmony import */


      var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/gallery/gallery.component */
      "1wMi");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-lightbox */
      "m3o8");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__);
      /*import 'hammerjs';
      import 'mousetrap';
      import { GalleryModule } from '@ks89/angular-modal-gallery';*/


      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]],
            declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "h1mt":
    /*!*******************************************************!*\
      !*** ./src/app/theme/layout/admin/admin.component.ts ***!
      \*******************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function h1mt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "sqAq");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "hiAX");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/components/breadcrumb/breadcrumb.component */
      "zG16");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./configuration/configuration.component */
      "kSgv");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "navbar-collapsed": a0,
          "theme-horizontal": a1,
          "mob-open": a2
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "container": a0
        };
      };

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(zone, location) {
          _classCallCheck(this, AdminComponent);

          this.zone = zone;
          this.location = location;
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
          var currentURL = this.location.path();
          var baseHerf = this.location['_baseHref'];

          if (baseHerf) {
            currentURL = baseHerf + this.location.path();
          }

          this.windowWidth = window.innerWidth;

          if (currentURL === baseHerf + '/layout/collapse-menu' || currentURL === baseHerf + '/layout/box' || this.windowWidth >= 992 && this.windowWidth <= 1024) {
            this.gradientConfig.collapseMenu = true;
          }

          this.navCollapsed = this.windowWidth >= 992 ? this.gradientConfig.collapseMenu : false;
          this.navCollapsedMob = false;
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.windowWidth < 992) {
              this.gradientConfig.layout = 'vertical';
              setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%'; // 100% amit
              }, 500);
            }
          }
        }, {
          key: "navMobClick",
          value: function navMobClick() {
            var _this7 = this;

            if (this.windowWidth < 992) {
              if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(function () {
                  _this7.navCollapsedMob = !_this7.navCollapsedMob;
                }, 100);
              } else {
                this.navCollapsedMob = !this.navCollapsedMob;
              }
            }
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 11,
        vars: 8,
        consts: [[1, "pcoded-navbar", 3, "ngClass", "onNavMobCollapse"], [1, "navbar", "pcoded-header", "navbar-expand-lg", "navbar-light", 3, "onNavCollapse", "onNavHeaderMobCollapse"], [1, "pcoded-main-container"], [1, "pcoded-wrapper", 3, "ngClass"], [1, "pcoded-content"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigation", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavMobCollapse", function AdminComponent_Template_app_navigation_onNavMobCollapse_0_listener() {
              return ctx.navMobClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavCollapse", function AdminComponent_Template_app_nav_bar_onNavCollapse_1_listener() {
              return ctx.navCollapsed = !ctx.navCollapsed;
            })("onNavHeaderMobCollapse", function AdminComponent_Template_app_nav_bar_onNavHeaderMobCollapse_1_listener() {
              return ctx.navMobClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-configuration");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.navCollapsed, ctx.gradientConfig["layout"] === "horizontal", ctx.navCollapsedMob));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.gradientConfig.layout === "horizontal" && ctx.gradientConfig.subLayout === "horizontal-2"));
          }
        },
        directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_8__["ConfigurationComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hiAX":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function hiAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nav-left/nav-left.component */
      "calg");
      /* harmony import */


      var _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nav-right/nav-right.component */
      "aM2T");

      function NavBarComponent_div_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NavBarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard/analytics"];
      };

      var _c1 = function _c1(a0) {
        return {
          "on": a0
        };
      };

      function NavBarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.navCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.toggleMobOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-nav-left", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-nav-right", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.menuClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.collapseStyle);
        }
      }

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);

          this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
          this.menuClass = false;
          this.collapseStyle = 'none';
          this.windowWidth = window.innerWidth;
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMobOption",
          value: function toggleMobOption() {
            this.menuClass = !this.menuClass;
            this.collapseStyle = this.menuClass ? 'block' : 'none';
          }
        }, {
          key: "navCollapse",
          value: function navCollapse() {
            if (this.windowWidth >= 992) {
              this.onNavCollapse.emit();
            } else {
              this.onNavHeaderMobCollapse.emit();
            }
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        outputs: {
          onNavCollapse: "onNavCollapse",
          onNavHeaderMobCollapse: "onNavHeaderMobCollapse"
        },
        decls: 3,
        vars: 2,
        consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["mainHeader", ""], [1, "container"], [4, "ngTemplateOutlet"], [1, "m-header"], ["href", "javascript:", "id", "mobile-collapse", 1, "mobile-menu", 3, "click"], [1, "b-brand", 3, "routerLink"], ["id", "main-logo", "src", "assets/system/logooscuro.png", "alt", "", 1, "logo", 2, "max-width", "125px"], ["src", "assets/images/logo-icon.png", "alt", "", 1, "logo-thumb"], ["href", "javascript:", 1, "mob-toggler", 3, "ngClass", "click"], [1, "feather", "icon-more-vertical"], [1, "collapse", "navbar-collapse"], [1, "mr-auto"], [1, "ml-auto"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_Template, 11, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gradientConfig.layout === "horizontal" && ctx.gradientConfig.subLayout === "horizontal-2")("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_4__["NavLeftComponent"], _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_5__["NavRightComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onNavCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onNavHeaderMobCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "i86/":
    /*!*****************************************************************!*\
      !*** ./src/app/demo/pages/sample-page/sample-page.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SamplePageComponent */

    /***/
    function i86(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function () {
        return SamplePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SamplePageComponent = /*#__PURE__*/function () {
        function SamplePageComponent() {
          _classCallCheck(this, SamplePageComponent);
        }

        _createClass(SamplePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SamplePageComponent;
      }();

      SamplePageComponent.ɵfac = function SamplePageComponent_Factory(t) {
        return new (t || SamplePageComponent)();
      };

      SamplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SamplePageComponent,
        selectors: [["app-sample-page"]],
        decls: 2,
        vars: 0,
        consts: [[1, "row"], [1, "col-sm-12"]],
        template: function SamplePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sample-page',
            templateUrl: './sample-page.component.html',
            styleUrls: ['./sample-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "iCS2":
    /*!**************************************!*\
      !*** ./src/app/fack-db/user-chat.ts ***!
      \**************************************/

    /*! exports provided: UserChat */

    /***/
    function iCS2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserChat", function () {
        return UserChat;
      }); // type 0-send, 1-received


      var UserChat = function UserChat() {
        _classCallCheck(this, UserChat);
      };

      UserChat.chat = [{
        friend_id: 1,
        friend_photo: 'assets/images/avatar-3.jpg',
        messages: [{
          type: 1,
          msg: 'I\'m just looking around. Will you tell me something about yourself?',
          time: '8:20 a.m'
        }, {
          type: 0,
          msg: 'Ohh! very nice',
          time: '8:22 a.m'
        }, {
          type: 1,
          msg: 'can you come with me?',
          time: '8:22 a.m'
        }]
      }, {
        friend_id: 2,
        friend_photo: 'assets/images/avatar-2.jpg',
        messages: [{
          type: 1,
          msg: 'Hiii!!! Good Morning',
          time: '6:48 a.m'
        }, {
          type: 0,
          msg: 'Hello, Very Good Morning',
          time: '6:50 a.m'
        }, {
          type: 0,
          msg: 'How are You?',
          time: '8:50 a.m'
        }, {
          type: 1,
          msg: 'Fine, What do you do?',
          time: '8:51 a.m'
        }]
      }, {
        friend_id: 3,
        friend_photo: 'assets/images/avatar-4.jpg',
        messages: [{
          type: 1,
          msg: 'I\'m just looking around. Will you tell me something about yourself?',
          time: '8:20 a.m'
        }, {
          type: 0,
          msg: 'Ohh! very nice',
          time: '8:22 a.m'
        }, {
          type: 1,
          msg: 'can you come with me?',
          time: '8:22 a.m'
        }]
      }, {
        friend_id: 4,
        friend_photo: 'assets/images/avatar-3.jpg',
        messages: [{
          type: 1,
          msg: 'Hiii!!! Good Morning',
          time: '6:48 a.m'
        }, {
          type: 0,
          msg: 'Hello, Very Good Morning',
          time: '6:50 a.m'
        }, {
          type: 0,
          msg: 'How are You?',
          time: '8:50 a.m'
        }, {
          type: 1,
          msg: 'Fine, What do you do?',
          time: '8:51 a.m'
        }]
      }, {
        friend_id: 5,
        friend_photo: 'assets/images/avatar-2.jpg',
        messages: [{
          type: 1,
          msg: 'I\'m just looking around. Will you tell me something about yourself?',
          time: '8:20 a.m'
        }, {
          type: 0,
          msg: 'Ohh! very nice',
          time: '8:22 a.m'
        }, {
          type: 1,
          msg: 'can you come with me?',
          time: '8:22 a.m'
        }]
      }];
      /***/
    },

    /***/
    "iv9w":
    /*!*****************************************************!*\
      !*** ./src/app/theme/layout/auth/auth.component.ts ***!
      \*****************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function iv9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 1,
        vars: 0,
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kSgv":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ConfigurationComponent */

    /***/
    function kSgv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
        return ConfigurationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ConfigurationComponent_div_0_div_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_59_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.rtlLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_59_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.setRtlLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.rtlLayout);
        }
      }

      function ConfigurationComponent_div_0_div_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_60_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.menuFixedLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_60_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.setMenuFixedLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.menuFixedLayout);
        }
      }

      function ConfigurationComponent_div_0_div_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_61_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.headerFixedLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_61_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.setHeaderFixedLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Header Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.headerFixedLayout);
        }
      }

      function ConfigurationComponent_div_0_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_62_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.boxLayout = $event;
          })("change", function ConfigurationComponent_div_0_div_62_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.setBoxLayout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Box Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.boxLayout);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      function ConfigurationComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gradient Able Live Customizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.setLayout("menu-dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.setLayout("menu-light");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.setLayout("dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.setLayout("reset");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reset to Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "header background");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.setHeaderBackground("header-blue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.setHeaderBackground("header-red");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.setHeaderBackground("header-purple");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.setHeaderBackground("header-info");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.setHeaderBackground("header-dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.setHeaderBackground("header-orenge");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.setHeaderBackground("header-green");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.setHeaderBackground("header-yellow");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.setHeaderBackground("header-orchidgreen");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.setHeaderBackground("header-indigogreen");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.setHeaderBackground("header-darkgreen");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.setHeaderBackground("header-darkblue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ConfigurationComponent_div_0_div_59_Template, 6, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ConfigurationComponent_div_0_div_60_Template, 6, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ConfigurationComponent_div_0_div_61_Template, 6, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ConfigurationComponent_div_0_div_62_Template, 6, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r0.styleSelectorToggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx_r0.layoutType === "menu-dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx_r0.layoutType === "menu-light"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, ctx_r0.layoutType === "dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, ctx_r0.layoutType === "reset"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, ctx_r0.headerBackgroundColor === "header-blue"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, ctx_r0.headerBackgroundColor === "header-red"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c1, ctx_r0.headerBackgroundColor === "header-purple"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c1, ctx_r0.headerBackgroundColor === "header-info"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c1, ctx_r0.headerBackgroundColor === "header-dark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, ctx_r0.headerBackgroundColor === "header-orenge"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx_r0.headerBackgroundColor === "header-green"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c1, ctx_r0.headerBackgroundColor === "header-yellow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c1, ctx_r0.headerBackgroundColor === "header-orchidgreen"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c1, ctx_r0.headerBackgroundColor === "header-indigogreen"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c1, ctx_r0.headerBackgroundColor === "header-darkgreen"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c1, ctx_r0.headerBackgroundColor === "header-darkblue"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gradientConfig["layout"] !== "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gradientConfig["layout"] !== "horizontal" && !ctx_r0.gradientConfig["boxLayout"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gradientConfig["layout"] !== "horizontal" && !ctx_r0.gradientConfig["boxLayout"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gradientConfig["layout"] !== "horizontal");
        }
      }

      var ConfigurationComponent = /*#__PURE__*/function () {
        function ConfigurationComponent(zone, location) {
          var _this8 = this;

          _classCallCheck(this, ConfigurationComponent);

          this.zone = zone;
          this.location = location;

          this.scroll = function () {
            if (_this8.headerFixedLayout === false) {
              document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh)';
              var el = document.querySelector('.pcoded-navbar.menupos-fixed');
              var scrollPosition = window.pageYOffset;

              if (scrollPosition > 56) {
                el.style.position = 'fixed';
                el.style.transition = 'none';
                el.style.marginTop = '0';
              } else {
                el.style.position = 'absolute';
                el.style.marginTop = '56px';
              }
            } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
              document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
          };

          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
          this.setThemeLayout();
        }

        _createClass(ConfigurationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.styleSelectorToggle = false;
            this.layoutType = this.gradientConfig.layoutType;
            this.setLayout(this.layoutType);
            this.headerBackgroundColor = this.gradientConfig.headerBackColor;
            this.setHeaderBackground(this.headerBackgroundColor);
            this.rtlLayout = this.gradientConfig.rtlLayout;
            this.changeRtlLayout(this.rtlLayout);
            this.menuFixedLayout = this.gradientConfig.navFixedLayout;

            if (this.gradientConfig.layout === 'vertical') {
              this.changeMenuFixedLayout(this.menuFixedLayout);
            }

            this.headerFixedLayout = this.gradientConfig.headerFixedLayout;
            this.changeHeaderFixedLayout(this.headerFixedLayout);
            this.boxLayout = this.gradientConfig.boxLayout;
            this.changeBoxLayout(this.boxLayout);
          }
        }, {
          key: "setThemeLayout",
          value: function setThemeLayout() {
            var currentURL = this.location.path();
            var baseHref = this.location['_baseHref'];

            if (baseHref) {
              currentURL = baseHref + this.location.path();
            }

            switch (currentURL) {
              case baseHref + '/layout/static':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/fixed':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.navFixedLayout = true;
                this.gradientConfig.headerFixedLayout = true;
                break;

              case baseHref + '/layout/nav-fixed':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.navFixedLayout = true;
                this.gradientConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/collapse-menu':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.collapseMenu = true;
                break;

              case baseHref + '/layout/vertical-rtl':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.rtlLayout = true;
                break;

              case baseHref + '/layout/horizontal':
                this.gradientConfig.layout = 'horizontal';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/horizontal-l2':
                this.gradientConfig.layout = 'horizontal';
                this.gradientConfig.subLayout = 'horizontal-2';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/horizontal-rtl':
                this.gradientConfig.layout = 'horizontal';
                this.gradientConfig.subLayout = 'horizontal-2';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                this.gradientConfig.rtlLayout = true;
                break;

              case baseHref + '/layout/box':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.boxLayout = true;
                this.gradientConfig.headerFixedLayout = false;
                this.gradientConfig.collapseMenu = true;
                break;

              case baseHref + '/layout/light':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.layoutType = 'menu-light';
                this.gradientConfig.headerBackColor = 'header-blue';
                break;

              case baseHref + '/layout/dark':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.layoutType = 'dark';
                this.gradientConfig.headerBackColor = 'header-dark';
                break;

              case baseHref + '/layout/nav-color':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.layoutType = 'menu-light';
                this.gradientConfig.headerBackColor = 'header-info';
                this.gradientConfig.navFixedLayout = true;
                this.gradientConfig.headerFixedLayout = true;
                break;

              default:
                break;
            }
          }
        }, {
          key: "setHeaderBackColor",
          value: function setHeaderBackColor(color) {
            this.headerBackColor = color;
            document.querySelector('body').style.background = color;
          } // change main layout

        }, {
          key: "setLayout",
          value: function setLayout(layout) {
            this.isConfig = true;
            document.querySelector('.pcoded-navbar').classList.remove('menu-light');
            document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
            document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
            document.querySelector('body').classList.remove('gradient-dark');
            this.layoutType = layout;

            if (layout === 'menu-light') {
              document.querySelector('.pcoded-navbar').classList.add(layout);
            }

            if (layout === 'dark') {
              document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
              document.querySelector('.pcoded-navbar').classList.add('brand-dark');
              this.setHeaderBackground('header-dark');
              document.querySelector('body').classList.add('gradient-dark');
            }

            if (layout === 'reset') {
              this.reset();
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
            this.ngOnInit();
          }
        }, {
          key: "setRtlLayout",
          value: function setRtlLayout(e) {
            var flag = !!e.target.checked;
            this.changeRtlLayout(flag);
          }
        }, {
          key: "changeRtlLayout",
          value: function changeRtlLayout(flag) {
            if (flag) {
              document.querySelector('body').classList.add('gradient-rtl');
            } else {
              document.querySelector('body').classList.remove('gradient-rtl');
            }
          }
        }, {
          key: "setMenuFixedLayout",
          value: function setMenuFixedLayout(e) {
            var flag = !!e.target.checked;
            this.changeMenuFixedLayout(flag);
          }
        }, {
          key: "changeMenuFixedLayout",
          value: function changeMenuFixedLayout(flag) {
            var _this9 = this;

            setTimeout(function () {
              if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');

                if (_this9.gradientConfig.layout === 'vertical') {
                  document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh - 56px)'; // calc(100vh - 70px) amit
                }

                window.addEventListener('scroll', _this9.scroll, true);
                window.scrollTo(0, 0);
              } else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');

                if (_this9.gradientConfig.layout === 'vertical') {
                  document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }

                if (_this9.gradientConfig.layout === 'vertical') {
                  window.removeEventListener('scroll', _this9.scroll, true);
                }
              }
            }, 100);
          }
        }, {
          key: "setHeaderFixedLayout",
          value: function setHeaderFixedLayout(e) {
            var flag = !!e.target.checked;
            this.changeHeaderFixedLayout(flag);
          }
        }, {
          key: "changeHeaderFixedLayout",
          value: function changeHeaderFixedLayout(flag) {
            if (flag) {
              document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
            } else {
              document.querySelector('.pcoded-header').classList.remove('headerpos-fixed'); // static

              if (this.gradientConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
              } else {
                window.removeEventListener('scroll', this.scroll, true);
              }
            }
          }
        }, {
          key: "setBoxLayout",
          value: function setBoxLayout(e) {
            var flag = !!e.target.checked;
            this.changeBoxLayout(flag);
          }
        }, {
          key: "changeBoxLayout",
          value: function changeBoxLayout(flag) {
            if (flag) {
              document.querySelector('body').classList.add('container');
              document.querySelector('body').classList.add('box-layout');
            } else {
              document.querySelector('body').classList.remove('box-layout');
              document.querySelector('body').classList.remove('container');
            }
          }
        }, {
          key: "setHeaderBackground",
          value: function setHeaderBackground(background) {
            this.headerBackgroundColor = background;
            this.gradientConfig.headerBackColor = background;
            document.querySelector('.pcoded-header').classList.remove('header-blue');
            document.querySelector('.pcoded-header').classList.remove('header-red');
            document.querySelector('.pcoded-header').classList.remove('header-purple');
            document.querySelector('.pcoded-header').classList.remove('header-info');
            document.querySelector('.pcoded-header').classList.remove('header-dark');
            document.querySelector('.pcoded-header').classList.remove('header-orenge');
            document.querySelector('.pcoded-header').classList.remove('header-green');
            document.querySelector('.pcoded-header').classList.remove('header-yellow');
            document.querySelector('.pcoded-header').classList.remove('header-orchidgreen');
            document.querySelector('.pcoded-header').classList.remove('header-indigogreen');
            document.querySelector('.pcoded-header').classList.remove('header-darkgreen');
            document.querySelector('.pcoded-header').classList.remove('header-darkblue');

            if (background !== 'header-default') {
              document.querySelector('.pcoded-header').classList.add(background);
            }
          }
        }]);

        return ConfigurationComponent;
      }();

      ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) {
        return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfigurationComponent,
        selectors: [["app-configuration"]],
        decls: 1,
        vars: 1,
        consts: [["id", "styleSelector", "class", "menu-styler", 3, "ngClass", 4, "ngIf"], ["id", "styleSelector", 1, "menu-styler", 3, "ngClass"], [1, "style-block"], [1, "mb-2"], [1, "my-0"], [1, "m-style-scroller"], [1, "theme-color", "layout-type"], ["href", "javascript:", "data-value", "menu-dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "menu-light", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "reset", 3, "ngClass", "click"], [1, "theme-color", "header-color"], ["href", "javascript:", "data-value", "header-blue", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-red", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-purple", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-info", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-orenge", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-green", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-yellow", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-orchidgreen", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-indigogreen", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-darkgreen", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-darkblue", 3, "ngClass", "click"], ["class", "form-group mb-0", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "switch", "switch-primary", "d-inline", "m-r-10"], ["type", "checkbox", "id", "theme-rtl", 3, "ngModel", "ngModelChange", "change"], ["for", "theme-rtl", 1, "cr"], ["type", "checkbox", "id", "menu-fixed", 3, "ngModel", "ngModelChange", "change"], ["for", "menu-fixed", 1, "cr"], ["type", "checkbox", "id", "header-fixed", 3, "ngModel", "ngModelChange", "change"], ["for", "header-fixed", 1, "cr"], ["type", "checkbox", "id", "box-layouts", 3, "ngModel", "ngModelChange", "change"], ["for", "box-layouts", 1, "cr"]],
        template: function ConfigurationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfigurationComponent_div_0_Template, 63, 55, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfig);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: [".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.gradient-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.gradient-dark .menu-styler h1,\nbody.gradient-dark .menu-styler h2,\nbody.gradient-dark .menu-styler h3,\nbody.gradient-dark .menu-styler h4,\nbody.gradient-dark .menu-styler h5,\nbody.gradient-dark .menu-styler p,\nbody.gradient-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBTUk7RUFDRSxtQ0FBQTtBQUhOOztBQUtJOzs7Ozs7O0VBT0UsV0FBQTtBQUhOIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zdHlsZXIge1xuICAubmF2LXBpbGxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG59XG5ib2R5LmdyYWRpZW50LWRhcmt7XG4gIC5tZW51LXN0eWxlcntcbiAgICAudGFiLWNvbnRlbnR7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xuICAgIH1cbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyxcbiAgICBoNCxcbiAgICBoNSxcbiAgICBwLFxuICAgIGg2e1xuICAgICAgY29sb3I6ICMyMjI7XG4gICAgfVxuICB9XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-configuration',
            templateUrl: './configuration.component.html',
            styleUrls: ['./configuration.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(httpClient) {
          _classCallCheck(this, AuthService);

          this.httpClient = httpClient;
          this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(_login) {
            var data = Object.assign({}, _login);
            return this.httpClient.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "api/systemUser/login_check"), data);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token');
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            if (localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token')) {
              var token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token');

              if (!this.helper.isTokenExpired(token)) {
                return true;
              }
            }

            this.logout();
            return false;
          }
        }, {
          key: "saveToken",
          value: function saveToken(resp) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token', 'Bearer ' + resp);
          }
        }, {
          key: "getDataUsuario",
          value: function getDataUsuario() {
            return this.helper.decodeToken(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token'));
          }
        }, {
          key: "getMenu",
          value: function getMenu() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token')
            });
            var dataUser = this.getDataUsuario();
            return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "api/systemMenu/menu/").concat(dataUser.idSystemRole), {
              headers: headers
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this10 = this;

            var token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: token
            });
            var date = new Date();
            var now = date.getTime();
            var expTokenDate = this.helper.getTokenExpirationDate(token);
            var expToken = expTokenDate.getTime();
            var minutes = Math.floor((expToken - now) / 60000);

            if (minutes <= 10) {
              this.httpClient.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "api/systemUser/refresh_token"), {
                token: token
              }, {
                headers: headers
              }).subscribe(function (resp) {
                // @ts-ignore
                _this10.saveToken(resp.token);
              });
            }
          }
        }, {
          key: "lockUser",
          value: function lockUser(username) {
            username = JSON.stringify({
              user: username
            });
            username = btoa(username);
            return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "api/lockUser/").concat(username));
          }
        }, {
          key: "getRoutePrivilege",
          value: function getRoutePrivilege(route, privilege) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["systemName"] + 'Token')
            });
            return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "api/getPrivileges/").concat(route, "/").concat(privilege), {
              headers: headers
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "q6ff":
    /*!**********************************************************************************!*\
      !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ApexChartComponent */

    /***/
    function q6ff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
        return ApexChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! apexcharts/dist/apexcharts.common.js */
      "ujAs");
      /* harmony import */


      var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _apex_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apex-chart.service */
      "9OXH");

      var ApexChartComponent = /*#__PURE__*/function () {
        function ApexChartComponent(apexEvent) {
          _classCallCheck(this, ApexChartComponent);

          this.apexEvent = apexEvent;
        }

        _createClass(ApexChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            setTimeout(function () {
              _this11.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1___default.a(document.querySelector('#' + _this11.chartID), _this11.chartConfig);

              _this11.chart.render();
            });
            this.apexEvent.changeTimeRange.subscribe(function () {
              if (_this11.xAxis) {
                _this11.chart.updateOptions({
                  xaxis: _this11.xAxis
                });
              }
            });
            this.apexEvent.changeSeriesData.subscribe(function () {
              if (_this11.newData) {
                _this11.chart.updateSeries([{
                  data: _this11.newData
                }]);
              }
            });
          }
        }]);

        return ApexChartComponent;
      }();

      ApexChartComponent.ɵfac = function ApexChartComponent_Factory(t) {
        return new (t || ApexChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]));
      };

      ApexChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApexChartComponent,
        selectors: [["app-apex-chart"]],
        inputs: {
          chartID: "chartID",
          chartConfig: "chartConfig",
          xAxis: "xAxis",
          newData: "newData"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "id"]],
        template: function ApexChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.chartID);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGV4LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-apex-chart',
            templateUrl: './apex-chart.component.html',
            styleUrls: ['./apex-chart.component.scss']
          }]
        }], function () {
          return [{
            type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]
          }];
        }, {
          chartID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chartConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          xAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          newData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "s2d5":
    /*!**********************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function s2d5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./spinkits */
      "CKO6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SpinnerComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r1.backgroundColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.backgroundColor);
        }
      }

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_0_div_2_Template, 2, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.spinner === ctx_r0.Spinkit.skLine);
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this12 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
          this.backgroundColor = '#2196f3';
          this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this12.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
              _this12.isSpinnerVisible = false;
            }
          }, function () {
            _this12.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor",
          spinner: "spinner"
        },
        decls: 1,
        vars: 1,
        consts: [["id", "http-loader", 4, "ngIf"], ["id", "http-loader"], [1, "loader-bg"], ["class", "sk-line-material", 3, "colored", 4, "ngIf"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 3, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2h0dHAtbG9hZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuIl19 */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0);\n  }\n  40% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtRUFBQTtFQUNBLDJEQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUVJLG9CQUFBO0VBQ047RUFDRTtJQUVJLG9CQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBRUksb0JBQUE7RUFBTjtFQUVFO0lBRUksb0JBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFJQTtFQUNJLHlDQUFBO0FBREoiLCJmaWxlIjoic2stbGluZS1tYXRlcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWxpbmUtbWF0ZXJpYWwge1xuICAgIHRvcDogMCAgO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIH1cbn1cblxuI2h0dHAtbG9hZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcbn1cbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            templateUrl: './spinner.component.html',
            styleUrls: ['./spinner.component.scss', './spinkit-css/sk-line-material.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "sIwa":
    /*!***************************************************************!*\
      !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
      \***************************************************************/

    /*! exports provided: ModalModule */

    /***/
    function sIwa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
        return ModalModule;
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


      var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ui-modal/ui-modal.component */
      "ujr+");
      /* harmony import */


      var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./animation-modal/animation-modal.component */
      "btuU");

      var ModalModule = function ModalModule() {
        _classCallCheck(this, ModalModule);
      };

      ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ModalModule
      });
      ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ModalModule_Factory(t) {
          return new (t || ModalModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
          declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]],
            exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "sqAq":
    /*!***********************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
      \***********************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function sqAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nav-content/nav-content.component */
      "E7Y8");

      var _c0 = function _c0(a0) {
        return {
          "container": a0
        };
      };

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);

          this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["GradientConfig"].config;
          this.windowWidth = window.innerWidth;
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navMobCollapse",
          value: function navMobCollapse() {
            if (this.windowWidth < 992) {
              this.onNavMobCollapse.emit();
            }
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)();
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        outputs: {
          onNavMobCollapse: "onNavMobCollapse"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "navbar-wrapper", 3, "ngClass"], [3, "onNavMobCollapse"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavMobCollapse", function NavigationComponent_Template_app_nav_content_onNavMobCollapse_1_listener() {
              return ctx.navMobCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.gradientConfig.layout === "horizontal" && ctx.gradientConfig.subLayout === "horizontal-2"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_3__["NavContentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [];
        }, {
          onNavMobCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ujr+":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
      \******************************************************************************/

    /*! exports provided: UiModalComponent */

    /***/
    function ujr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiModalComponent", function () {
        return UiModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UiModalComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UiModalComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          "display": a0,
          "opacity": a1
        };
      };

      var _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];

      var UiModalComponent = /*#__PURE__*/function () {
        function UiModalComponent() {
          _classCallCheck(this, UiModalComponent);

          this.hideHeader = false;
          this.hideFooter = false;
          this.isSub = false;
          this.containerClick = true;
          this.visible = false;
          this.visibleAnimate = false;
        }

        _createClass(UiModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "show",
          value: function show() {
            var _this13 = this;

            this.visible = true;
            setTimeout(function () {
              return _this13.visibleAnimate = true;
            }, 100);
            document.querySelector('body').classList.add('modal-open');
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this14 = this;

            this.visibleAnimate = false;
            setTimeout(function () {
              return _this14.visible = false;
            }, 300);

            if (!this.isSub) {
              document.querySelector('body').classList.remove('modal-open');
            }
          }
        }, {
          key: "onContainerClicked",
          value: function onContainerClicked(event) {
            if (event.target.classList.contains('modal') && this.containerClick === true) {
              this.hide();
            }
          }
        }]);

        return UiModalComponent;
      }();

      UiModalComponent.ɵfac = function UiModalComponent_Factory(t) {
        return new (t || UiModalComponent)();
      };

      UiModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiModalComponent,
        selectors: [["app-ui-modal"]],
        inputs: {
          dialogClass: "dialogClass",
          hideHeader: "hideHeader",
          hideFooter: "hideFooter",
          isSub: "isSub",
          containerClick: "containerClick"
        },
        ngContentSelectors: _c3,
        decls: 7,
        vars: 10,
        consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]],
        template: function UiModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiModalComponent_Template_div_click_0_listener($event) {
              return ctx.onContainerClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dialogClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3VpLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUdBLGdDQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUdJO0VBSUUsMEJBQUE7QUFETjtBQUdJO0VBR0UsNkJBQUE7RUFJQSw2QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoidWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xuICAmLm1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDUwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgJi5mYWRlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gICAgJi5pbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAmLm1vZGFsLmZhZGUge1xuICAgICYuaW4gLm1vZGFsLWRpYWxvZyB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgIH1cbiAgfVxuICAuYmFzaWMtY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMxcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-modal',
            templateUrl: './ui-modal.component.html',
            styleUrls: ['./ui-modal.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          dialogClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme/layout/admin/admin.component */
      "h1mt");
      /* harmony import */


      var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme/layout/auth/auth.component */
      "iv9w");
      /* harmony import */


      var _demo_pages_sample_page_sample_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./demo/pages/sample-page/sample-page.component */
      "i86/");
      /* harmony import */


      var _services_logged_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/logged.guard */
      "1z5l");

      var routes = [{
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_services_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]],
        children: [{
          path: '',
          redirectTo: 'sample-page',
          pathMatch: 'full'
        }, {
          path: 'sample-page',
          component: _demo_pages_sample_page_sample_page_component__WEBPACK_IMPORTED_MODULE_4__["SamplePageComponent"]
        }, {
          path: 'systemAction',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-action-system-action-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-system-action-system-action-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-action/system-action.module */
            "OH5B")).then(function (m) {
              return m.systemActionModule;
            });
          }
        }, {
          path: 'systemConfig',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-config-system-config-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-system-config-system-config-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-config/system-config.module */
            "uAER")).then(function (m) {
              return m.systemConfigModule;
            });
          }
        }, {
          path: 'systemIcon',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-icon-system-icon-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-system-icon-system-icon-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-icon/system-icon.module */
            "qT3M")).then(function (m) {
              return m.systemIconModule;
            });
          }
        }, {
          path: 'systemLog',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-log-system-log-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("module-system-log-system-log-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-log/system-log.module */
            "7fFU")).then(function (m) {
              return m.systemLogModule;
            });
          }
        }, {
          path: 'systemMenu',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-menu-system-menu-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-system-menu-system-menu-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-menu/system-menu.module */
            "RFXi")).then(function (m) {
              return m.systemMenuModule;
            });
          }
        }, {
          path: 'systemPrivileges',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-privileges-system-privileges-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-system-privileges-system-privileges-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-privileges/system-privileges.module */
            "WEQB")).then(function (m) {
              return m.systemPrivilegesModule;
            });
          }
        }, {
          path: 'systemPrivilegesUserRole',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-privileges-user-role-system-privileges-user-role-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-system-privileges-user-role-system-privileges-user-role-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-privileges-user-role/system-privileges-user-role.module */
            "5oR8")).then(function (m) {
              return m.systemPrivilegesUserRoleModule;
            });
          }
        }, {
          path: 'systemRepository',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-repository-system-repository-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-system-repository-system-repository-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-repository/system-repository.module */
            "IhMi")).then(function (m) {
              return m.systemRepositoryModule;
            });
          }
        }, {
          path: 'systemRole',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-role-system-role-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-system-role-system-role-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-role/system-role.module */
            "Ifv7")).then(function (m) {
              return m.systemRoleModule;
            });
          }
        }, {
          path: 'systemTypeElement',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-type-element-system-type-element-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-system-type-element-system-type-element-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-type-element/system-type-element.module */
            "hY/k")).then(function (m) {
              return m.systemTypeElementModule;
            });
          }
        }, {
          path: 'systemUser',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-user-system-user-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("module-system-user-system-user-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-user/system-user.module */
            "ppWr")).then(function (m) {
              return m.systemUserModule;
            });
          }
        }, {
          path: 'systemUserStatus',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-system-user-status-system-user-status-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-system-user-status-system-user-status-module")]).then(__webpack_require__.bind(null,
            /*! ./module/system-user-status/system-user-status.module */
            "RZz6")).then(function (m) {
              return m.systemUserStatusModule;
            });
          }
        }, {
          path: 'CatalogoCondicionesComerciales',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module")]).then(__webpack_require__.bind(null,
            /*! ./module/catalogo-condiciones-comerciales/catalogo-condiciones-comerciales.module */
            "1gBb")).then(function (m) {
              return m.CatalogoCondicionesComercialesModule;
            });
          }
        }, {
          path: 'CatalogoDeDocumento',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-catalogo-de-documento-catalogo-de-documento-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-catalogo-de-documento-catalogo-de-documento-module")]).then(__webpack_require__.bind(null,
            /*! ./module/catalogo-de-documento/catalogo-de-documento.module */
            "FgaR")).then(function (m) {
              return m.CatalogoDeDocumentoModule;
            });
          }
        }, {
          path: 'CatalogoDeRequerimientos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-catalogo-de-requerimientos-catalogo-de-requerimientos-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-catalogo-de-requerimientos-catalogo-de-requerimientos-module~module-requerimiento-cli~ffc5972b"), __webpack_require__.e("module-catalogo-de-requerimientos-catalogo-de-requerimientos-module")]).then(__webpack_require__.bind(null,
            /*! ./module/catalogo-de-requerimientos/catalogo-de-requerimientos.module */
            "5cdW")).then(function (m) {
              return m.CatalogoDeRequerimientosModule;
            });
          }
        }, {
          path: 'Cliente',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-cliente-cliente-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~bf932b3e"), __webpack_require__.e("module-cliente-cliente-module")]).then(__webpack_require__.bind(null,
            /*! ./module/cliente/cliente.module */
            "D2U7")).then(function (m) {
              return m.ClienteModule;
            });
          }
        }, {
          path: 'ClienteCondicionComercial',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-cliente-condicion-comercial-cliente-condicion-comercial-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~bf932b3e"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~bee9bea6"), __webpack_require__.e("common"), __webpack_require__.e("module-cliente-condicion-comercial-cliente-condicion-comercial-module")]).then(__webpack_require__.bind(null,
            /*! ./module/cliente-condicion-comercial/cliente-condicion-comercial.module */
            "Nes2")).then(function (m) {
              return m.ClienteCondicionComercialModule;
            });
          }
        }, {
          path: 'ClientePersona',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-cliente-persona-cliente-persona-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~bf932b3e"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~bee9bea6"), __webpack_require__.e("module-cliente-persona-cliente-persona-module")]).then(__webpack_require__.bind(null,
            /*! ./module/cliente-persona/cliente-persona.module */
            "ttmJ")).then(function (m) {
              return m.ClientePersonaModule;
            });
          }
        }, {
          path: 'DatosFiscales',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-datos-fiscales-datos-fiscales-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("module-datos-fiscales-datos-fiscales-module")]).then(__webpack_require__.bind(null,
            /*! ./module/datos-fiscales/datos-fiscales.module */
            "R6m3")).then(function (m) {
              return m.DatosFiscalesModule;
            });
          }
        }, {
          path: 'DocumentoCliente',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-documento-cliente-documento-cliente-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~bf932b3e"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~bee9bea6"), __webpack_require__.e("module-documento-cliente-documento-cliente-module")]).then(__webpack_require__.bind(null,
            /*! ./module/documento-cliente/documento-cliente.module */
            "ZIAP")).then(function (m) {
              return m.DocumentoClienteModule;
            });
          }
        }, {
          path: 'Domicilio',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-domicilio-domicilio-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("module-domicilio-domicilio-module")]).then(__webpack_require__.bind(null,
            /*! ./module/domicilio/domicilio.module */
            "mRhP")).then(function (m) {
              return m.DomicilioModule;
            });
          }
        }, {
          path: 'Empleado',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-empleado-empleado-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("common"), __webpack_require__.e("module-empleado-empleado-module")]).then(__webpack_require__.bind(null,
            /*! ./module/empleado/empleado.module */
            "Dco9")).then(function (m) {
              return m.EmpleadoModule;
            });
          }
        }, {
          path: 'Empresa',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-empresa-empresa-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("module-empresa-empresa-module")]).then(__webpack_require__.bind(null,
            /*! ./module/empresa/empresa.module */
            "664Q")).then(function (m) {
              return m.EmpresaModule;
            });
          }
        }, {
          path: 'MedioDeSeguimiento',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-medio-de-seguimiento-medio-de-seguimiento-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-medio-de-seguimiento-medio-de-seguimiento-module")]).then(__webpack_require__.bind(null,
            /*! ./module/medio-de-seguimiento/medio-de-seguimiento.module */
            "eOpe")).then(function (m) {
              return m.MedioDeSeguimientoModule;
            });
          }
        }, {
          path: 'Persona',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-persona-persona-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("module-persona-persona-module")]).then(__webpack_require__.bind(null,
            /*! ./module/persona/persona.module */
            "binX")).then(function (m) {
              return m.PersonaModule;
            });
          }
        }, {
          path: 'Prospectacion',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-prospectacion-prospectacion-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~bf932b3e"), __webpack_require__.e("common"), __webpack_require__.e("module-prospectacion-prospectacion-module")]).then(__webpack_require__.bind(null,
            /*! ./module/prospectacion/prospectacion.module */
            "n3kb")).then(function (m) {
              return m.ProspectacionModule;
            });
          }
        }, {
          path: 'RequerimientoCliente',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-requerimiento-cliente-requerimiento-cliente-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~968d4fc6"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~5230937b"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~81f6f148"), __webpack_require__.e("default~module-cliente-cliente-module~module-cliente-condicion-comercial-cliente-condicion-comercial~bf932b3e"), __webpack_require__.e("default~module-cliente-condicion-comercial-cliente-condicion-comercial-module~module-cliente-persona~bee9bea6"), __webpack_require__.e("default~module-catalogo-de-requerimientos-catalogo-de-requerimientos-module~module-requerimiento-cli~ffc5972b"), __webpack_require__.e("common"), __webpack_require__.e("module-requerimiento-cliente-requerimiento-cliente-module")]).then(__webpack_require__.bind(null,
            /*! ./module/requerimiento-cliente/requerimiento-cliente.module */
            "xfbM")).then(function (m) {
              return m.RequerimientoClienteModule;
            });
          }
        }, {
          path: 'Seguimiento',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-seguimiento-seguimiento-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-seguimiento-seguimiento-module")]).then(__webpack_require__.bind(null,
            /*! ./module/seguimiento/seguimiento.module */
            "zzki")).then(function (m) {
              return m.SeguimientoModule;
            });
          }
        }, {
          path: 'StatusCondicionComercial',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-status-condicion-comercial-status-condicion-comercial-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-status-condicion-comercial-status-condicion-comercial-module")]).then(__webpack_require__.bind(null,
            /*! ./module/status-condicion-comercial/status-condicion-comercial.module */
            "1Ek2")).then(function (m) {
              return m.StatusCondicionComercialModule;
            });
          }
        }, {
          path: 'StatusProspectacion',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-status-prospectacion-status-prospectacion-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("common"), __webpack_require__.e("module-status-prospectacion-status-prospectacion-module")]).then(__webpack_require__.bind(null,
            /*! ./module/status-prospectacion/status-prospectacion.module */
            "4O/p")).then(function (m) {
              return m.StatusProspectacionModule;
            });
          }
        }, {
          path: 'TipoDeAsentamiento',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-tipo-de-asentamiento-tipo-de-asentamiento-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-tipo-de-asentamiento-tipo-de-asentamiento-module")]).then(__webpack_require__.bind(null,
            /*! ./module/tipo-de-asentamiento/tipo-de-asentamiento.module */
            "06Et")).then(function (m) {
              return m.TipoDeAsentamientoModule;
            });
          }
        }, {
          path: 'TipoDeClientePersona',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-tipo-de-cliente-persona-tipo-de-cliente-persona-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-tipo-de-cliente-persona-tipo-de-cliente-persona-module")]).then(__webpack_require__.bind(null,
            /*! ./module/tipo-de-cliente-persona/tipo-de-cliente-persona.module */
            "XGMd")).then(function (m) {
              return m.TipoDeClientePersonaModule;
            });
          }
        }, {
          path: 'TipoDePersona',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-tipo-de-persona-tipo-de-persona-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-tipo-de-persona-tipo-de-persona-module")]).then(__webpack_require__.bind(null,
            /*! ./module/tipo-de-persona/tipo-de-persona.module */
            "PT77")).then(function (m) {
              return m.TipoDePersonaModule;
            });
          }
        }, {
          path: 'TipoDeServicio',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-tipo-de-servicio-tipo-de-servicio-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-tipo-de-servicio-tipo-de-servicio-module")]).then(__webpack_require__.bind(null,
            /*! ./module/tipo-de-servicio/tipo-de-servicio.module */
            "aXje")).then(function (m) {
              return m.TipoDeServicioModule;
            });
          }
        }, {
          path: 'TipoDeVialidad',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | module-tipo-de-vialidad-tipo-de-vialidad-module */
            [__webpack_require__.e("default~module-catalogo-condiciones-comerciales-catalogo-condiciones-comerciales-module~module-catal~2aaf28d4"), __webpack_require__.e("module-tipo-de-vialidad-tipo-de-vialidad-module")]).then(__webpack_require__.bind(null,
            /*! ./module/tipo-de-vialidad/tipo-de-vialidad.module */
            "Fqpc")).then(function (m) {
              return m.TipoDeVialidadModule;
            });
          }
        }]
      }, {
        path: '',
        component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [{
          path: 'login',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | module-login-login-module */
            "module-login-login-module").then(__webpack_require__.bind(null,
            /*! ./module/login/login.module */
            "V8rg")).then(function (module) {
              return module.LoginModule;
            });
          }
        }, {
          path: 'auth/reset-password',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | module-auth-reset-password-auth-reset-password-module */
            "module-auth-reset-password-auth-reset-password-module").then(__webpack_require__.bind(null,
            /*! ./module/auth-reset-password/auth-reset-password.module */
            "cFw4")).then(function (module) {
              return module.AuthResetPasswordModule;
            });
          }
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wcvO":
    /*!*************************************************************!*\
      !*** ./src/app/theme/shared/components/card/card.module.ts ***!
      \*************************************************************/

    /*! exports provided: CardModule */

    /***/
    function wcvO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardModule", function () {
        return CardModule;
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


      var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card.component */
      "/n7v");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /*import { AnimationService, AnimatorModule } from 'css-animator';*/


      var CardModule = function CardModule() {
        _classCallCheck(this, CardModule);
      };

      CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CardModule
      });
      CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CardModule_Factory(t) {
          return new (t || CardModule)();
        },
        providers: [
          /*AnimationService*/
        ],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, {
          declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]],
          exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]],
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            providers: [
              /*AnimationService*/
            ]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "z0HF":
    /*!*************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
      \*************************************************************************/

    /*! exports provided: BreadcrumbModule */

    /***/
    function z0HF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
        return BreadcrumbModule;
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


      var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb.component */
      "zG16");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BreadcrumbModule = function BreadcrumbModule() {
        _classCallCheck(this, BreadcrumbModule);
      };

      BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BreadcrumbModule
      });
      BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BreadcrumbModule_Factory(t) {
          return new (t || BreadcrumbModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
          declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
            exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zCax":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/todo/todo-list-remove.directive.ts ***!
      \****************************************************************************/

    /*! exports provided: TodoListRemoveDirective */

    /***/
    function zCax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoListRemoveDirective", function () {
        return TodoListRemoveDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TodoListRemoveDirective = /*#__PURE__*/function () {
        function TodoListRemoveDirective(elements) {
          _classCallCheck(this, TodoListRemoveDirective);

          this.elements = elements;
        }

        _createClass(TodoListRemoveDirective, [{
          key: "onToggle",
          value: function onToggle($event) {
            $event.preventDefault();
            var parent = this.elements.nativeElement.parentElement.parentElement;
            parent.remove();
          }
        }]);

        return TodoListRemoveDirective;
      }();

      TodoListRemoveDirective.ɵfac = function TodoListRemoveDirective_Factory(t) {
        return new (t || TodoListRemoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      TodoListRemoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TodoListRemoveDirective,
        selectors: [["", "appTodoListRemove", ""]],
        hostBindings: function TodoListRemoveDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListRemoveDirective_click_HostBindingHandler($event) {
              return ctx.onToggle($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListRemoveDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appTodoListRemove]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "zG16":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function zG16(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
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


      var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../layout/admin/navigation/navigation */
      "S8Sc");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_5_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r10.title);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_5_h5_1_Template, 2, 1, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var last_r11 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r11);
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard/analytics/"];
      };

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_10_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r14.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r14.title);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_10_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r14.title);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_10_li_1_Template, 3, 2, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_10_li_2_Template, 3, 1, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r14.url !== false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r14.url === false);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_5_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_a_8_Template, 2, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_a_9_Template, 2, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_ng_container_10_Template, 3, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.navigationList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.type === "theme2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.type === "theme1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.navigationList);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template, 11, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r3 = ctx.$implicit;
          var last_r4 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r4 && breadcrumb_r3.breadcrumbs !== false);
        }
      }

      function BreadcrumbComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navigationList);
        }
      }

      function BreadcrumbComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.navigationList);
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(route, nav, titleService, auth) {
          var _this15 = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.route = route;
          this.nav = nav;
          this.titleService = titleService;
          this.auth = auth;
          this.breadcrumbList = [];
          this.navigationList = [];
          this.load = true; // this.navigation = this.nav.get();

          this.auth.getMenu().subscribe(function (resp) {
            _this15.navigation = resp;
            _this15.type = 'theme2';

            _this15.setBreadcrumb();

            var routerUrl;
            routerUrl = _this15.route.url.slice(1);

            if (routerUrl && typeof routerUrl === 'string') {
              _this15.filterNavigation(routerUrl);
            }

            _this15.load = false;
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /*let routerUrl: string;
            routerUrl = this.route.url;
            if (routerUrl && typeof routerUrl === 'string') {
              this.filterNavigation(routerUrl);
            }*/
          }
        }, {
          key: "setBreadcrumb",
          value: function setBreadcrumb() {
            var _this16 = this;

            var routerUrl;
            this.route.events.subscribe(function (router) {
              routerUrl = router.urlAfterRedirects;

              if (routerUrl && typeof routerUrl === 'string') {
                _this16.breadcrumbList.length = 0;
                var activeLink = router.url.slice(1);
                ;

                _this16.filterNavigation(activeLink);
              }
            });
          }
        }, {
          key: "filterNavigation",
          value: function filterNavigation(activeLink) {
            var result = [];
            var title = 'Welcome';
            this.navigation.forEach(function (a) {
              if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [{
                  url: 'url' in a ? a.url : false,
                  title: a.title,
                  breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                  type: a.type
                }];
                title = a.title;
              } else {
                if (a.type === 'collapse' && 'children' in a) {
                  a.children.forEach(function (b) {
                    if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                      result = [{
                        url: 'url' in b ? b.url : false,
                        title: b.title,
                        breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                        type: b.type
                      }];
                      title = b.title;
                    } else {
                      if (b.type === 'collapse' && 'children' in b) {
                        b.children.forEach(function (c) {
                          if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                            result = [{
                              url: 'url' in b ? b.url : false,
                              title: b.title,
                              breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                              type: b.type
                            }, {
                              url: 'url' in c ? c.url : false,
                              title: c.title,
                              breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                              type: c.type
                            }];
                            title = c.title;
                          } else {
                            if (c.type === 'collapse' && 'children' in c) {
                              c.children.forEach(function (d) {
                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                  result = [{
                                    url: 'url' in b ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                    type: b.type
                                  }, {
                                    url: 'url' in c ? c.url : false,
                                    title: c.title,
                                    breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                    type: c.type
                                  }, {
                                    url: 'url' in d ? d.url : false,
                                    title: d.title,
                                    breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                    type: d.type
                                  }];
                                  title = d.title;
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
            this.navigationList = result;
            this.titleService.setTitle(title + ' | MSPV');
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          type: "type"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "page-header", 4, "ngIf"], [1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "page-header-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], ["class", "m-b-10", 4, "ngIf"], [1, "m-b-10"], [3, "routerLink"], [1, "feather", "icon-home"], ["class", "breadcrumb-item", 4, "ngIf"], ["href", "javascript:"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.load);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zx2c":
    /*!*****************************************!*\
      !*** ./src/app/fack-db/friends-list.ts ***!
      \*****************************************/

    /*! exports provided: FriendsList */

    /***/
    function zx2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsList", function () {
        return FriendsList;
      });

      var FriendsList = function FriendsList() {
        _classCallCheck(this, FriendsList);
      };

      FriendsList.friends = [{
        id: 1,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Josephin Doe',
        "new": 3,
        status: 1,
        time: 'typing'
      }, {
        id: 2,
        photo: 'assets/images/user/avatar-2.jpg',
        name: 'Lary Doe',
        "new": 1,
        status: 1,
        time: 'online'
      }, {
        id: 3,
        photo: 'assets/images/user/avatar-3.jpg',
        name: 'Alice',
        status: 1,
        time: 'online'
      }, {
        id: 4,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Alia',
        status: 0,
        "new": 1,
        time: '10 min ago'
      }, {
        id: 5,
        photo: 'assets/images/user/avatar-4.jpg',
        name: 'Suzen',
        status: 0,
        time: '15 min ago'
      }, {
        id: 1,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Josephin Doe',
        "new": 3,
        status: 1,
        time: 'typing'
      }, {
        id: 2,
        photo: 'assets/images/user/avatar-2.jpg',
        name: 'Lary Doe',
        "new": 1,
        status: 1,
        time: 'online'
      }, {
        id: 3,
        photo: 'assets/images/user/avatar-3.jpg',
        name: 'Alice',
        status: 1,
        time: 'online'
      }, {
        id: 4,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Alia',
        status: 0,
        "new": 1,
        time: '10 min ago'
      }, {
        id: 5,
        photo: 'assets/images/user/avatar-4.jpg',
        name: 'Suzen',
        status: 0,
        time: '15 min ago'
      }, {
        id: 1,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Josephin Doe',
        "new": 3,
        status: 1,
        time: 'typing'
      }, {
        id: 2,
        photo: 'assets/images/user/avatar-2.jpg',
        name: 'Lary Doe',
        "new": 1,
        status: 1,
        time: 'online'
      }, {
        id: 3,
        photo: 'assets/images/user/avatar-3.jpg',
        name: 'Alice',
        status: 1,
        time: 'online'
      }, {
        id: 4,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Alia',
        status: 0,
        "new": 1,
        time: '10 min ago'
      }, {
        id: 5,
        photo: 'assets/images/user/avatar-4.jpg',
        name: 'Suzen',
        status: 0,
        time: '15 min ago'
      }, {
        id: 1,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Josephin Doe',
        "new": 3,
        status: 1,
        time: 'typing'
      }, {
        id: 2,
        photo: 'assets/images/user/avatar-2.jpg',
        name: 'Lary Doe',
        "new": 1,
        status: 1,
        time: 'online'
      }, {
        id: 3,
        photo: 'assets/images/user/avatar-3.jpg',
        name: 'Alice',
        status: 1,
        time: 'online'
      }, {
        id: 4,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Alia',
        status: 0,
        "new": 1,
        time: '10 min ago'
      }, {
        id: 5,
        photo: 'assets/images/user/avatar-4.jpg',
        name: 'Suzen',
        status: 0,
        time: '15 min ago'
      }, {
        id: 1,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Josephin Doe',
        "new": 3,
        status: 1,
        time: 'typing'
      }, {
        id: 2,
        photo: 'assets/images/user/avatar-2.jpg',
        name: 'Lary Doe',
        "new": 1,
        status: 1,
        time: 'online'
      }, {
        id: 3,
        photo: 'assets/images/user/avatar-3.jpg',
        name: 'Alice',
        status: 1,
        time: 'online'
      }, {
        id: 4,
        photo: 'assets/images/user/avatar-1.jpg',
        name: 'Alia',
        status: 0,
        "new": 1,
        time: '10 min ago'
      }, {
        id: 5,
        photo: 'assets/images/user/avatar-4.jpg',
        name: 'Suzen',
        status: 0,
        time: '15 min ago'
      }];
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map