(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/nkg":
    /*!***************************************************!*\
      !*** ./src/app/components/info/info.component.ts ***!
      \***************************************************/

    /*! exports provided: InfoComponent */

    /***/
    function nkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
        return InfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InfoComponent = /*#__PURE__*/function () {
        function InfoComponent() {
          _classCallCheck(this, InfoComponent);
        }

        _createClass(InfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfoComponent;
      }();

      InfoComponent.ɵfac = function InfoComponent_Factory(t) {
        return new (t || InfoComponent)();
      };

      InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InfoComponent,
        selectors: [["app-info"]],
        decls: 14,
        vars: 0,
        consts: [[1, "header"], [2, "height", "5px", "background-color", "black"], [1, "content"]],
        template: function InfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I am an ambitious and promising\nfront end developer. Ready to\ndevelop and achieve something\nmore");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Interests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I like football. My favourite team is Leicester City. I'm also play\nfootball for ten years. As well, I really like traveling, so far, I have\nvisited 5 countries: Slovakia, Poland, Bulgaria, Spain and Italy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  font-size: 100px;\n  height: 150px;\n  width: 100%;\n  font-family: \"Oxygen\", sans-serif;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: 40px;\n  width: 50%;\n  padding: 100px;\n  height: 200px;\n}\n@media only screen and (max-width: 1200px) {\n  .content[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media only screen and (max-width: 520px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 3em;\n    margin-left: 20%;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 1.5em;\n    margin: 0;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBQ0E7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFFRjtBQUFBO0VBQ0U7SUFDRSxVQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUFHRjs7RUFEQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIHB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxufVxuLmNvbnRlbnR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XG4gIC5jb250ZW50e1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpe1xuICAuaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgLmNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.scss']
          }]
        }], function () {
          return [];
        }, null);
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
      /*! /Users/user/Desktop/CV/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "A9VX":
    /*!*******************************************************!*\
      !*** ./src/app/components/skills/skills.component.ts ***!
      \*******************************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function A9VX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SkillsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.name);
        }
      }

      function SkillsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
        }
      }

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent() {
          _classCallCheck(this, SkillsComponent);

          this.hardSkills = [{
            name: 'HTML',
            url: '/assets/img/html.jpg'
          }, {
            name: 'CSS',
            url: '/assets/img/css.jpg'
          }, {
            name: 'Java script/type script',
            url: '/assets/img/jsts.jpg'
          }, {
            name: 'Bootstrap',
            url: '/assets/img/bootstrap.png'
          }, {
            name: 'Node js (basic)',
            url: '/assets/img/nodejs.jpg'
          }, {
            name: 'MeSQL (basic)',
            url: '/assets/img/sql.jpg'
          }, {
            name: 'Git/Github',
            url: '/assets/img/git.png'
          }, {
            name: 'Angular',
            url: '/assets/img/angular.png'
          }];
          this.softSkills = [{
            name: 'English (Intermediate)',
            url: '/assets/img/eng.png'
          }, {
            name: 'Time management',
            url: '/assets/img/time.jpg'
          }, {
            name: 'Сommunication',
            url: '/assets/img/hand.jpg'
          }, {
            name: 'Excellent team player',
            url: '/assets/img/team.jpg'
          }, {
            name: 'Detail oriented',
            url: '/assets/img/detail.jpg'
          }];
        }

        _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsComponent;
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)();
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 12,
        vars: 2,
        consts: [[1, "header"], [2, "display", "flex", "justify-content", "space-between"], [1, "main"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"], ["alt", "item", 3, "src"], [2, "text-align", "center", "font-size", "20px"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hard skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_5_Template, 5, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Other skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SkillsComponent_div_11_Template, 5, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hardSkills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.softSkills);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".header[_ngcontent-%COMP%] {\n  font-size: 100px;\n  height: 150px;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.skill[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin-left: 10px;\n  border-radius: 10px;\n  font-size: 0.8em;\n  margin-top: 90px;\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 75%;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 540px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 2em;\n    background-color: black;\n    color: white;\n    height: 100px;\n    margin-top: 40px;\n  }\n\n  .skill[_ngcontent-%COMP%] {\n    margin-left: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0YsaUJBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUVGO0FBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQUdGOztFQURBO0lBQ0UsZ0JBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwe1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cbn1cblxuLnNraWxse1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG5tYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzUlO1xufVxuaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICAuc2tpbGx7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skills',
            templateUrl: './skills.component.html',
            styleUrls: ['./skills.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
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
    "CmQR":
    /*!***********************************************************************!*\
      !*** ./src/app/components/portfolio-item/portfolio-item.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PortfolioItemComponent */

    /***/
    function CmQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function () {
        return PortfolioItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioItemComponent = /*#__PURE__*/function () {
        // @Output('boughtProduct') bougthProduct = new EventEmitter();
        function PortfolioItemComponent() {
          _classCallCheck(this, PortfolioItemComponent);

          this.count = 0;
        }

        _createClass(PortfolioItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioItemComponent;
      }();

      PortfolioItemComponent.ɵfac = function PortfolioItemComponent_Factory(t) {
        return new (t || PortfolioItemComponent)();
      };

      PortfolioItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioItemComponent,
        selectors: [["app-portfolio-item"]],
        inputs: {
          product: "product"
        },
        decls: 2,
        vars: 0,
        consts: [[1, "head"]],
        template: function PortfolioItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".head[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 1.1em;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8taXRlbS9wb3J0Zm9saW8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDRixZQUFBO0FBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby1pdGVtL3BvcnRmb2xpby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuY29sb3I6IGJsYWNrO1xuXG59XG5cblxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio-item',
            templateUrl: './portfolio-item.component.html',
            styleUrls: ['./portfolio-item.component.scss']
          }]
        }], function () {
          return [];
        }, {
          product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['product']
          }]
        });
      })();
      /***/

    },

    /***/
    "DZ0t":
    /*!*********************************************************!*\
      !*** ./src/app/components/profile/profile.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function DZ0t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 37,
        vars: 0,
        consts: [[1, "profile"], ["src", "/assets/img/IMG_0533.jpg", "alt", "", 2, "max-height", "100%", "max-width", "324px"], [1, "information"], [2, "margin-left", "215px"], [2, "margin-left", "180px"], [2, "margin-left", "200px"], ["href", "/assets/cv/MY-CV.pdf", "download", ""]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I'M ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OLEKSANDR DIDYCH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FRONT-END DEVELOPER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lviv, Ukraine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "lilsanya044@icloud.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "+380961778616");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Download CV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".profile[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 65%;\n  color: white;\n  position: relative;\n  z-index: 5;\n  margin-left: 17%;\n  margin-top: 220px;\n  display: flex;\n  background-color: black;\n  font-family: \"Lato\", sans-serif;\n  box-shadow: 0px 0px 22px 24px #222222;\n  border-radius: 5px;\n}\n\n.information[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 60%;\n  height: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  border: 0.5px solid white;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  color: black;\n  background-color: white;\n  border: 0.5px solid black;\n  transition: 0.5s;\n}\n\n@media only screen and (max-width: 1200px) {\n  .profile[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 10%;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 960px) {\n  .profile[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .profile[_ngcontent-%COMP%] {\n    height: 200px;\n    min-width: 100%;\n    margin: auto;\n    box-shadow: none;\n  }\n  .profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n    width: 60%;\n    font-size: 0.5em;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .profile[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n\n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .information[_ngcontent-%COMP%] {\n    min-width: 100%;\n    font-size: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxhQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFHQSxxQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRyxhQUFBO0VBQ0QsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDQTtJQUNBLFVBQUE7SUFDRSxnQkFBQTtFQUVBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUVFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBR0EsZ0JBQUE7RUFKRjtFQUtFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VBSEo7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsZ0JBQUE7RUFORjs7RUFRQTtJQUNGLGFBQUE7RUFMRTs7RUFPQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxle1xuaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDY1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIG1hcmdpbi1sZWZ0OiAxNyU7XG4gIG1hcmdpbi10b3A6IDIyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OjBweCAwcHggMjJweCAyNHB4ICMyMjIyMjIgO1xuICAtbW96LWJveC1zaGFkb3c6MHB4IDBweCAyMnB4IDI0cHggIzIyMjIyMiA7XG4gIGJveC1zaGFkb3c6MHB4IDBweCAyMnB4IDI0cHggIzIyMjIyMiA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmluZm9ybWF0aW9ue1xuICAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcblxufVxuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IC41cHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4ucHJvZmlsZXtcbndpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KXtcbiAgLnByb2ZpbGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG5cbiAgLnByb2ZpbGV7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC5pbmZvcm1hdGlvbntcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBmb250LXNpemU6IC41ZW07XG5cbiAgICB9XG5cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG4gIC5wcm9maWxle1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgaW1ne1xuZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW5mb3JtYXRpb257XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogLjVlbTtcblxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "F7NT":
    /*!*************************************************************!*\
      !*** ./src/app/components/education/education.component.ts ***!
      \*************************************************************/

    /*! exports provided: EducationComponent */

    /***/
    function F7NT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
        return EducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EducationComponent = /*#__PURE__*/function () {
        function EducationComponent() {
          _classCallCheck(this, EducationComponent);
        }

        _createClass(EducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EducationComponent;
      }();

      EducationComponent.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)();
      };

      EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        decls: 12,
        vars: 0,
        consts: [[1, "politeh"], [2, "font-size", "40px"], [2, "font-size", "20px"], [1, "logos"], [2, "font-size", "40px", "margin-top", "30%", "color", "white", "font-family", "'Lato', sans-serif"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LVIV POLYTECHNIC NATIONAL UNIVERSITY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bachelor of Computer Science ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 2019-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Frontend professional education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".politeh[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background: url(\"/assets/img/politeh.jpg\") no-repeat;\n  background-size: cover;\n}\n\n.logos[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background: url(\"/assets/img/logos.jpg\") no-repeat;\n  background-size: cover;\n}\n\n@media only screen and (max-width: 1200px) {\n  .logos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 55%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFFSTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQUVKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9saXRlaCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvcG9saXRlaC5qcGcnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubG9nb3N7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9nb3MuanBnJykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xuICAubG9nb3Mge1xuICAgIHB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDU1JTtcbiAgICB9XG5cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-education',
            templateUrl: './education.component.html',
            styleUrls: ['./education.component.scss']
          }]
        }], function () {
          return [];
        }, null);
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


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/profile/profile.component */
      "DZ0t");
      /* harmony import */


      var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/navigation/navigation.component */
      "mvyS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'my-cv-app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 18,
        vars: 0,
        consts: [[1, "menu"], [1, "content"], [1, "content__container"], [1, "content__container__text"], [1, "content__container__list"], [1, "content__container__list__item"], [1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hello ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "world !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "recruiter !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "users !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "everybody !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  background-color: black;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 160px;\n  overflow: hidden;\n  font-family: \"Lato\", sans-serif;\n  font-size: 35px;\n  line-height: 40px;\n  color: #ecf0f1;\n}\n\n.content__container[_ngcontent-%COMP%] {\n  font-weight: 600;\n  overflow: hidden;\n  height: 40px;\n  padding: 0 40px;\n}\n\n.content__container[_ngcontent-%COMP%]:before {\n  content: \"[\";\n  left: 0;\n}\n\n.content__container[_ngcontent-%COMP%]:after {\n  content: \"]\";\n  position: absolute;\n  right: 0;\n}\n\n.content__container[_ngcontent-%COMP%]:after, .content__container[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  color: #16a085;\n  font-size: 42px;\n  line-height: 40px;\n  -webkit-animation-name: opacity;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: opacity;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n\n.content__container__text[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  margin: 0;\n}\n\n.content__container__list[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 110px;\n  text-align: left;\n  list-style: none;\n  -webkit-animation-name: change;\n  -webkit-animation-duration: 10s;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: change;\n  animation-duration: 10s;\n  animation-iteration-count: infinite;\n}\n\n.content__container__list__item[_ngcontent-%COMP%] {\n  line-height: 40px;\n  margin: 0;\n}\n\n@-webkit-keyframes opacity {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes change {\n  0%, 12.66%, 100% {\n    transform: translate3d(0, 0, 0);\n  }\n  16.66%, 29.32% {\n    transform: translate3d(0, -25%, 0);\n  }\n  33.32%, 45.98% {\n    transform: translate3d(0, -50%, 0);\n  }\n  49.98%, 62.64% {\n    transform: translate3d(0, -75%, 0);\n  }\n  66.64%, 79.3% {\n    transform: translate3d(0, -50%, 0);\n  }\n  83.3%, 95.96% {\n    transform: translate3d(0, -25%, 0);\n  }\n}\n\n@keyframes opacity {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes change {\n  0%, 12.66%, 100% {\n    transform: translate3d(0, 0, 0);\n  }\n  16.66%, 29.32% {\n    transform: translate3d(0, -25%, 0);\n  }\n  33.32%, 45.98% {\n    transform: translate3d(0, -50%, 0);\n  }\n  49.98%, 62.64% {\n    transform: translate3d(0, -75%, 0);\n  }\n  66.64%, 79.3% {\n    transform: translate3d(0, -50%, 0);\n  }\n  83.3%, 95.96% {\n    transform: translate3d(0, -25%, 0);\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  font-family: \"Heebo\", sans-serif;\n}\n\n#my-el[_ngcontent-%COMP%] {\n  margin-top: 70%;\n}\n\n@media only screen and (max-width: 767px) and (min-width: 375px) {\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUVBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0k7RUFDRSxZQUFBO0VBQ0EsT0FBQTtBQUROOztBQUlJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUZOOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUxOOztBQVFJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTk47O0FBU0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FBUk47O0FBVU07RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFSUjs7QUFjQTtFQUNFO0lBQVUsVUFBQTtFQVZWO0VBV0E7SUFBSyxVQUFBO0VBUkw7QUFDRjs7QUFVQTtFQUNFO0lBQWtCLCtCQUFBO0VBUGxCO0VBUUE7SUFBZ0Isa0NBQUE7RUFMaEI7RUFNQTtJQUFlLGtDQUFBO0VBSGY7RUFJQTtJQUFlLGtDQUFBO0VBRGY7RUFFQTtJQUFjLGtDQUFBO0VBQ2Q7RUFBQTtJQUFjLGtDQUFBO0VBR2Q7QUFDRjs7QUEyQkE7RUFDRTtJQUFVLFVBQUE7RUFnQ1Y7RUEvQkE7SUFBSyxVQUFBO0VBa0NMO0FBQ0Y7O0FBaENBO0VBQ0U7SUFBa0IsK0JBQUE7RUFtQ2xCO0VBbENBO0lBQWdCLGtDQUFBO0VBcUNoQjtFQXBDQTtJQUFlLGtDQUFBO0VBdUNmO0VBdENBO0lBQWUsa0NBQUE7RUF5Q2Y7RUF4Q0E7SUFBYyxrQ0FBQTtFQTJDZDtFQTFDQTtJQUFjLGtDQUFBO0VBNkNkO0FBQ0Y7O0FBNUNBO0VBQ0UsZ0NBQUE7QUE4Q0Y7O0FBNUNBO0VBQ0UsZUFBQTtBQStDRjs7QUE1Q0E7RUFFRTtJQUNFLGFBQUE7RUE4Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBvdmVyZmxvdzpoaWRkZW47XG5cbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6ICNlY2YwZjE7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgNDBweDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdbJztcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXSc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG5cbiAgICAgIGNvbG9yOiAjMTZhMDg1O1xuICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmX19saXN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNoYW5nZTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZTtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cbiAgICAgICZfX2l0ZW0ge1xuICAgICAgICBsaW5lLWhlaWdodDo0MHB4O1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSwgMTAwJSB7b3BhY2l0eTowO31cbiAgNTAlIHtvcGFjaXR5OjE7fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2hhbmdlIHtcbiAgMCUsIDEyLjY2JSwgMTAwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt9XG4gIDE2LjY2JSwgMjkuMzIlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjUlLDApO31cbiAgMzMuMzIlLDQ1Ljk4JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKTt9XG4gIDQ5Ljk4JSw2Mi42NCUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC03NSUsMCk7fVxuICA2Ni42NCUsNzkuMyUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCk7fVxuICA4My4zJSw5NS45NiUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yNSUsMCk7fVxufVxuXG5ALW8ta2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSwgMTAwJSB7b3BhY2l0eTowO31cbiAgNTAlIHtvcGFjaXR5OjE7fVxufVxuXG5ALW8ta2V5ZnJhbWVzIGNoYW5nZSB7XG4gIDAlLCAxMi42NiUsIDEwMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7fVxuICAxNi42NiUsIDI5LjMyJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTI1JSwwKTt9XG4gIDMzLjMyJSw0NS45OCUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCk7fVxuICA0OS45OCUsNjIuNjQlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNzUlLDApO31cbiAgNjYuNjQlLDc5LjMlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApO31cbiAgODMuMyUsOTUuOTYlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjUlLDApO31cbn1cblxuQC1tb3ota2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSwgMTAwJSB7b3BhY2l0eTowO31cbiAgNTAlIHtvcGFjaXR5OjE7fVxufVxuXG5ALW1vei1rZXlmcmFtZXMgY2hhbmdlIHtcbiAgMCUsIDEyLjY2JSwgMTAwJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt9XG4gIDE2LjY2JSwgMjkuMzIlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjUlLDApO31cbiAgMzMuMzIlLDQ1Ljk4JSB7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKTt9XG4gIDQ5Ljk4JSw2Mi42NCUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC03NSUsMCk7fVxuICA2Ni42NCUsNzkuMyUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCk7fVxuICA4My4zJSw5NS45NiUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yNSUsMCk7fVxufVxuXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSwgMTAwJSB7b3BhY2l0eTowO31cbiAgNTAlIHtvcGFjaXR5OjE7fVxufVxuXG5Aa2V5ZnJhbWVzIGNoYW5nZSB7XG4gIDAlLCAxMi42NiUsIDEwMCUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7fVxuICAxNi42NiUsIDI5LjMyJSB7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTI1JSwwKTt9XG4gIDMzLjMyJSw0NS45OCUge3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCk7fVxuICA0OS45OCUsNjIuNjQlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNzUlLDApO31cbiAgNjYuNjQlLDc5LjMlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApO31cbiAgODMuMyUsOTUuOTYlIHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjUlLDApO31cbn1cbi5jb250YWluZXJ7XG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xufVxuI215LWVse1xuICBtYXJnaW4tdG9wOiA3MCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuXG4gIC5tZW51e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufVxuIl19 */"]
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
        }], null, null);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/profile/profile.component */
      "DZ0t");
      /* harmony import */


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");
      /* harmony import */


      var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/navigation/navigation.component */
      "mvyS");
      /* harmony import */


      var _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/education/education.component */
      "F7NT");
      /* harmony import */


      var _components_info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/info/info.component */
      "/nkg");
      /* harmony import */


      var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/portfolio/portfolio.component */
      "kBmi");
      /* harmony import */


      var _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/portfolio-item/portfolio-item.component */
      "CmQR");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioItemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioItemComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kBmi":
    /*!*************************************************************!*\
      !*** ./src/app/components/portfolio/portfolio.component.ts ***!
      \*************************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function kBmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PortfolioComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
        }
      }

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);

          this.projects = [{
            name: 'Layout',
            url: '/assets/img/layout.jpg'
          }, {
            name: 'Chat',
            url: '/assets/img/chat.jpg'
          }, {
            name: 'Lending Page',
            url: '/assets/img/lending.jpg'
          }];
          this.some = 0;
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 3,
        vars: 1,
        consts: [[2, "display", "flex", "justify-content", "space-between"], [1, "main"], ["class", "project-item", 4, "ngFor", "ngForOf"], [1, "project-item"], ["alt", "item", 3, "src"], [2, "text-align", "center", "font-size", "20px"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioComponent_div_2_Template, 5, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".project-item[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 200px;\n  border-radius: 10px;\n  font-size: 0.8em;\n  margin-top: 70px;\n}\n.project-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  margin: auto;\n  transition: 0.5s;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 80%;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (max-width: 960px) {\n  .project-item[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .project-item[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBQUY7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNBO0lBQ0UsVUFBQTtFQUNBO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtaXRlbXtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAyMDBweDtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gICY6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gIH1cbn1cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDgwJTtcbn1cbmltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbi5wcm9qZWN0LWl0ZW17XG4gIHdpZHRoOiA0NSU7XG59XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgLnByb2plY3QtaXRlbXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "mvyS":
    /*!***************************************************************!*\
      !*** ./src/app/components/navigation/navigation.component.ts ***!
      \***************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function mvyS(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "scrollTo",
          value: function scrollTo() {
            var footer = document.getElementById('footer');
            window.scroll({
              left: 0,
              top: footer.offsetTop,
              behavior: 'smooth'
            });
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
        decls: 17,
        vars: 0,
        consts: [["type", "checkbox", "id", "menu-checkbox"], ["role", "navigation", 1, "nav"], ["for", "menu-checkbox", "data-open", "\u2630", "data-close", "\xD7", "onclick", "", 1, "toggle-button", 2, "font-size", "30px", "position", "relative", "right", "100px"], [1, "main-menu"], ["routerLink", "/", "href", "#", 3, "click"], ["routerLink", "/education", "href", "#", 3, "click"], ["routerLink", "/portfolio", "href", "#", 3, "click"], ["routerLink", "/info", "href", "#", 3, "click"], ["id", "footer", 1, "footer"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_5_listener() {
              return ctx.scrollTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_8_listener() {
              return ctx.scrollTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_11_listener() {
              return ctx.scrollTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_14_listener() {
              return ctx.scrollTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "footer", 8);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".nav[_ngcontent-%COMP%] {\n  margin-left: 27%;\n  margin-top: 30px;\n  width: 50%;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 0 10px;\n  padding: 5px 10px;\n  color: black;\n  font-size: 24px;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.5s;\n  overflow: hidden;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: calc(50% - 2px);\n  left: -100%;\n  width: 100%;\n  height: 4px;\n  background: black;\n  transition: 0.5s;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  -webkit-animation: animate 0.5s linear forwards;\n          animation: animate 0.5s linear forwards;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    top: calc(50% - 2px);\n    left: -100%;\n    height: 4px;\n    z-index: 1;\n  }\n  50% {\n    top: calc(50% - 2px);\n    left: 0;\n    height: 4px;\n    z-index: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    height: 100%;\n    z-index: -1;\n  }\n}\n\n@keyframes animate {\n  0% {\n    top: calc(50% - 2px);\n    left: -100%;\n    height: 4px;\n    z-index: 1;\n  }\n  50% {\n    top: calc(50% - 2px);\n    left: 0;\n    height: 4px;\n    z-index: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    height: 100%;\n    z-index: -1;\n  }\n}\n\n#menu-checkbox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-width: 1200px) {\n  .nav[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-left: 20%;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .nav[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .nav[_ngcontent-%COMP%] {\n    margin-left: 20%;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n@media only screen and (max-width: 540px) {\n  .main-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n  .main-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 8px;\n  }\n\n  .toggle-button[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n    cursor: pointer;\n  }\n  .toggle-button[_ngcontent-%COMP%]:after {\n    content: attr(data-open);\n    display: block;\n  }\n\n  #menu-checkbox[_ngcontent-%COMP%]:checked    + .nav[role=navigation][_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #menu-checkbox[_ngcontent-%COMP%]:checked    + .nav[role=navigation][_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]:after {\n    content: attr(data-close);\n  }\n\n  .main-menu[_ngcontent-%COMP%] {\n    margin-right: 39%;\n  }\n  .main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtBQU1GOztBQUpBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtBQU9GOztBQUpBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQU9GO0VBTEE7SUFDRSxvQkFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQU9GO0VBTEE7SUFDRSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBT0Y7QUFDRjs7QUF6QkE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBT0Y7RUFMQTtJQUNFLG9CQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBT0Y7RUFMQTtJQUNFLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFPRjtBQUNGOztBQUxBO0VBQ0UsYUFBQTtBQU9GOztBQUpBO0VBQ0M7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFPRDtBQUNGOztBQUxBO0VBQ0U7SUFDRSxXQUFBO0lBQ0osY0FBQTtFQU9FO0FBQ0Y7O0FBTEE7RUFFRTtJQUNFLGdCQUFBO0VBTUY7O0VBSkE7SUFDRSxjQUFBO0VBT0Y7QUFDRjs7QUFMQTtFQUNFO0lBQ0YsYUFBQTtFQU9FOztFQUpFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUFPSjtFQUxFO0lBQ0UsY0FBQTtJQUNBLFlBQUE7RUFPSjs7RUFKQTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFPRjtFQU5FO0lBQ0Usd0JBQUE7SUFDQSxjQUFBO0VBUUo7O0VBSkY7SUFDRSxjQUFBO0VBT0E7O0VBTEE7SUFDRSx5QkFBQTtFQVFGOztFQU5GO0lBQ0EsaUJBQUE7RUFTRTtFQVBBO0lBQ0Usa0JBQUE7RUFTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xuICBtYXJnaW4tbGVmdDogMjclO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogNTAlO1xufVxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxudWwgbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbnVsIGxpIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xuICBsZWZ0OiAtMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbnVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbnVsIGxpIGE6aG92ZXI6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAwJSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICA1MCUge1xuICAgIHRvcDogY2FsYyg1MCUgLSAycHgpO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbn1cbiNtZW51LWNoZWNrYm94e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XG4gLm5hdiB7XG4gICB3aWR0aDogNzAlO1xuICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5uYXYge1xuICAgIHdpZHRoOiAxMDAlO1xubWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuXG4gIC5uYXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5tYWluLW1lbnV7XG5kaXNwbGF5OiBub25lO1xuICB9XG4gIC5tYWluLW1lbnV7XG4gICAgbGl7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBhe1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICB9XG4gIC50b2dnbGUtYnV0dG9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjphZnRlcntcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vcGVuKTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICB9XG4jbWVudS1jaGVja2JveDpjaGVja2VkICsgLm5hdltyb2xlPVwibmF2aWdhdGlvblwiXSAubWFpbi1tZW51e1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiAgI21lbnUtY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZbcm9sZT1cIm5hdmlnYXRpb25cIl0gLnRvZ2dsZS1idXR0b246YWZ0ZXJ7XG4gICAgY29udGVudDogYXR0cihkYXRhLWNsb3NlKTtcbiAgfVxuLm1haW4tbWVudXtcbm1hcmdpbi1yaWdodDogMzklO1xuXG4gIGxpe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxufVxuIl19 */"]
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
        }, null);
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


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");
      /* harmony import */


      var _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/education/education.component */
      "F7NT");
      /* harmony import */


      var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/portfolio/portfolio.component */
      "kBmi");
      /* harmony import */


      var _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/info/info.component */
      "/nkg");

      var routes = [{
        path: '',
        component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]
      }, {
        path: 'education',
        component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"]
      }, {
        path: 'portfolio',
        component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]
      }, {
        path: 'info',
        component: _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"]
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
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
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
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map