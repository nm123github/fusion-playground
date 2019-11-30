webpackHotUpdate("main",{

/***/ "./src/containers/Button.js":
/*!**********************************!*\
  !*** ./src/containers/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/neville.mehta/myprojects/fusion-playground/src/containers/Button.js";




let Todo = ({
  todos,
  stateObject,
  addTodo
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  onClick: addTodo,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "ADD TODO"), todos.map((todo, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  key: todo + i,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, todo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "-------------"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  onClick: () => console.log('Redux State:', stateObject),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Press to inspect STATE in console panel"));

const mapStateToProps = state => ({
  todos: state.todos,
  stateObject: state
});

const mapDispatchToProps = dispatch => ({
  addTodo: () => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["addTodo"])());
  }
});

Button = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Button);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=main.0be3964150b49591640e.hot-update.js.map