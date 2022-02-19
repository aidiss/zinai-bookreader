"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.archive_analytics.js"],{

/***/ "./src/plugins/plugin.archive_analytics.js":
/*!*************************************************!*\
  !*** ./src/plugins/plugin.archive_analytics.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");



/* global BookReader, archive_analytics */

/**
 * Plugin for Archive.org analytics
 */
jQuery.extend(BookReader.defaultOptions, {
  enableArchiveAnalytics: true,

  /** Provide a means of debugging, cause otherwise it's impossible to test locally */
  debugArchiveAnaltyics: false
});

BookReader.prototype.init = function (super_) {
  return function () {
    var _this = this;

    super_.call(this);

    if (this.options.enableArchiveAnalytics) {
      this.bind(BookReader.eventNames.fragmentChange, function () {
        return _this.archiveAnalyticsSendFragmentChange();
      });
    }
  };
}(BookReader.prototype.init);
/** @private */


BookReader.prototype.archiveAnalyticsSendFragmentChange = function () {
  if (!window.archive_analytics) {
    return;
  }

  var prevFragment = this.archiveAnalyticsSendFragmentChange.prevFragment;
  var params = this.paramsFromCurrent();
  var newFragment = this.fragmentFromParams(params);

  if (prevFragment != newFragment) {
    var values = {
      bookreader: "user_changed_view",
      itemid: this.bookId,
      cache_bust: Math.random()
    }; // EEK!  offsite embedding and /details/ page books look the same in analytics, otherwise!

    values.offsite = 1;
    values.details = 0;

    try {
      values.offsite = window.top.location.hostname.match(/\.archive.org$/) ? 0 : 1;
      values.details = !values.offsite && window.top.location.pathname.match(/^\/details\//) ? 1 : 0;
    } catch (e) {} // avoids embed cross site exceptions -- but on (+) side, means it is and keeps marked offite!
    // Send bookreader ping


    archive_analytics.send_ping(values, null, "augment_for_ao_site"); // Also send tracking event ping

    var additionalEventParams = this.options.lendingInfo && this.options.lendingInfo.loanId ? {
      loanId: this.options.lendingInfo.loanId
    } : {};
    archive_analytics.send_event('BookReader', 'UserChangedView', window.location.pathname, additionalEventParams);
    this.archiveAnalyticsSendFragmentChange.prevFragment = newFragment;
  }
};
/**
 * Sends a tracking "Event". See https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#events
 * @param {string} category
 * @param {string} action
 * @param {number} [value] (must be an int)
 * @param {Object} [additionalEventParams]
 */


BookReader.prototype.archiveAnalyticsSendEvent = function (category, action, value, additionalEventParams) {
  if (!this.options.enableArchiveAnalytics) return;

  if (this.options.debugArchiveAnaltyics) {
    console.log("archiveAnalyticsSendEvent", arguments, window.archive_analytics);
  }

  if (!window.archive_analytics) return;
  additionalEventParams = additionalEventParams || {};

  if (typeof value == 'number') {
    additionalEventParams.ev = value;
  }

  window.archive_analytics.send_event(category, action, null, additionalEventParams);
};

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.archive_analytics.js"));
/******/ }
]);
//# sourceMappingURL=plugin.archive_analytics.js.map