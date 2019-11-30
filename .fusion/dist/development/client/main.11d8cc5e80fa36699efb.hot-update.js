webpackHotUpdate("main",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reducer = (state = {
  todos: []
}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state,
        todos: [...state.todos, action.payload]
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=main.11d8cc5e80fa36699efb.hot-update.js.map