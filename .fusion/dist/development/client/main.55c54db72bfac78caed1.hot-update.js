webpackHotUpdate("main",{

/***/ "./src/containers/Todo.js":
/*!********************************!*\
  !*** ./src/containers/Todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/neville.mehta/myprojects/fusion-playground/src/containers/Todo.js";




function Todo({
  todos,
  stateObject,
  addTodo
}) {
  const [todo, setTodo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Add Todo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: event => setTodo(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => addTodo(todo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ADD TODO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "View Todos"), todos.map((todo, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    key: todo + i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, todo))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Check Redux State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => console.log('Redux State:', stateObject),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Press to inspect STATE in console panel")));
}

const mapStateToProps = state => ({
  todos: state.todos,
  stateObject: state
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["addTodo"])(todo));
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Todo));

/***/ })

})
//# sourceMappingURL=main.55c54db72bfac78caed1.hot-update.js.map