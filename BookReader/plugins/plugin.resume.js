"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.resume.js"],{

/***/ "./src/plugins/plugin.resume.js":
/*!**************************************!*\
  !*** ./src/plugins/plugin.resume.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_docCookies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/docCookies.js */ "./src/util/docCookies.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");



/* global BookReader */

/** @deprecated Exposed for backward compatibility */

BookReader.docCookies = _util_docCookies_js__WEBPACK_IMPORTED_MODULE_2__;
/**
 * Plugin to remember the current page number in a cookie
 */

jQuery.extend(BookReader.defaultOptions, {
  enablePageResume: true,

  /** @type {string|null} eg '/', '/details/id' */
  resumeCookiePath: null
});
/** @override */

BookReader.prototype.init = function (super_) {
  return function () {
    var _this = this;

    super_.call(this);

    if (this.options.enablePageResume) {
      this.bind(BookReader.eventNames.fragmentChange, function () {
        var params = _this.paramsFromCurrent();

        _this.updateResumeValue(params.index);
      });
    }
  };
}(BookReader.prototype.init);
/**
 * Gets page resume value, for remembering reader's page
 * Can be overridden for different implementation
 *
 * @return {number|null}
 */


BookReader.prototype.getResumeValue = function () {
  var val = BookReader.docCookies.getItem('br-resume');
  if (val !== null) return parseInt(val);else return null;
};
/**
 * Return cookie path using pathname up to /page/... or /mode/...
 * using window.location.pathname for urlPathPart:
 * - matches encoding
 * - ignores querystring part
 * - ignores fragment part (after #)
 * @param {string} urlPathPart - window.location.pathname
 */


BookReader.prototype.getCookiePath = function (urlPathPart) {
  return urlPathPart.match('.+?(?=/page/|/mode/|$)')[0];
};
/**
 * Sets page resume value, for remembering reader's page
 * Can be overridden for different implementation
 *
 * @param {Number} index leaf index
 * @param {string} [cookieName]
 */


BookReader.prototype.updateResumeValue = function (index, cookieName) {
  var ttl = new Date(+new Date() + 12096e5); // 2 weeks
  // For multiple files in item, leave resumeCookiePath blank
  // It's likely we can remove resumeCookiePath using getCookiePath()

  var path = this.options.resumeCookiePath || this.getCookiePath(window.location.pathname);
  BookReader.docCookies.setItem(cookieName || 'br-resume', index, ttl, path, null, false);
};

/***/ }),

/***/ "./src/util/docCookies.js":
/*!********************************!*\
  !*** ./src/util/docCookies.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItem": function() { return /* binding */ getItem; },
/* harmony export */   "setItem": function() { return /* binding */ setItem; },
/* harmony export */   "removeItem": function() { return /* binding */ removeItem; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Helper module use to get, set and remove item from cookie
 *
 * See more:
 *  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 *  https://developer.mozilla.org/User:fusionchess
 *  https://github.com/madmurphy/cookies.js
 *  This framework is released under the GNU Public License, version 3 or later.
 *  http://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Get specific key's value stored in cookie
 *
 * @param {string} sKey
 *
 * @returns {string|null}
 */
function getItem(sKey) {
  if (!sKey) return null;
  return decodeURIComponent( // eslint-disable-next-line no-useless-escape
  document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
}
/**
 * Set specific key's value in cookie
 *
 * @param {string} sKey cookie name
 * @param {string} sValue cookie value
 * @param {string} [vEnd] expire|max-age
 * @param {string} [sPath] path of current item
 * @param {string} [sDomain] domain name
 * @param {boolean} [bSecure]
 *
 * @returns {true}
 */

function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
  document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + (vEnd ? "; expires=".concat(vEnd.toUTCString()) : '') + (sDomain ? "; domain=".concat(sDomain) : '') + (sPath ? "; path=".concat(sPath) : '') + (bSecure ? "; secure" : '');
  return true;
}
/**
 * BROKEN Remove specific key's value from cookie
 * @fixme hasItem isn't even implemented! This will always error.
 * @param {string} sKey cookie name
 * @param {string} [sPath] path of current item
 * @param {string} [sDomain]
 *
 * @returns {boolean}
 */

function removeItem(sKey, sPath, sDomain) {
  // eslint-disable-next-line
  if (!hasItem(sKey)) return false;
  document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=".concat(sDomain) : '') + (sPath ? "; path=".concat(sPath) : '');
  return true;
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.resume.js"));
/******/ }
]);
//# sourceMappingURL=plugin.resume.js.map