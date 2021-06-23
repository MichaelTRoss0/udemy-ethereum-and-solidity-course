self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var web3;

if ( true && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({
    method: "eth_requestAccounts"
  });
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://rinkeby.infura.io/v3/2ed9f55c28af439ab3d8cabb46ed7010");
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vd2ViMy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiV2ViMyIsInByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQSxJQUFKOztBQUVBLElBQUksU0FBaUMsT0FBT0MsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBQWhFLEVBQTZFO0FBQzNFO0FBQ0FELFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsVUFBTSxFQUFFO0FBQVYsR0FBeEI7QUFDQUosTUFBSSxHQUFHLElBQUlLLDZDQUFKLENBQVNKLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBUDtBQUNELENBSkQsTUFJTztBQUNMO0FBQ0EsTUFBTUksUUFBUSxHQUFHLElBQUlELG9FQUFKLENBQ2YsK0RBRGUsQ0FBakI7QUFHQUwsTUFBSSxHQUFHLElBQUlLLDZDQUFKLENBQVNDLFFBQVQsQ0FBUDtBQUNEOztBQUVELCtEQUFlTixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxMmQxMzUwM2Y4YTQ4YzI5ZTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxyXG4gIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxufSBlbHNlIHtcclxuICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzJlZDlmNTVjMjhhZjQzOWFiM2Q4Y2FiYjQ2ZWQ3MDEwXCJcclxuICApO1xyXG4gIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYjM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=