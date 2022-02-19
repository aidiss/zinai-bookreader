(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.vendor-fullscreen.js"],{

/***/ "./src/plugins/plugin.vendor-fullscreen.js":
/*!*************************************************!*\
  !*** ./src/plugins/plugin.vendor-fullscreen.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFullscreenElement": function() { return /* binding */ getFullscreenElement; },
/* harmony export */   "isFullscreenActive": function() { return /* binding */ isFullscreenActive; },
/* harmony export */   "exitFullscreen": function() { return /* binding */ exitFullscreen; },
/* harmony export */   "requestFullscreen": function() { return /* binding */ requestFullscreen; },
/* harmony export */   "fullscreenAllowed": function() { return /* binding */ fullscreenAllowed; },
/* harmony export */   "bindFullscreenChangeListener": function() { return /* binding */ bindFullscreenChangeListener; },
/* harmony export */   "isMobile": function() { return /* binding */ isMobile; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");



/* global BookReader */

/**
 * Toggles browser's native fullscreen mode if available device is not mobile
 */
if (!isMobile()) {
  var EVENT_NAMESPACE = '.bookreader_vendor-fullscreen';
  jQuery.extend(BookReader.defaultOptions, {
    /** @type {boolean} */
    enableVendorFullscreenPlugin: true
  });
  /** @override */

  BookReader.prototype.setup = function (super_) {
    return function (options) {
      super_.call(this, options);
      this.isVendorFullscreenActive = false;
    };
  }(BookReader.prototype.setup);
  /** @override */


  BookReader.prototype.getInitialMode = function (super_) {
    return function (params) {
      var nextMode = super_.call(this, params);

      if (this.isVendorFullscreenActive) {
        nextMode = this.constMode1up;
      }

      return nextMode;
    };
  }(BookReader.prototype.getInitialMode);
  /** @override */


  BookReader.prototype.init = function (super_) {
    return function () {
      super_.call(this);

      if (!fullscreenAllowed()) {
        return;
      } // In fullscreen mode the colorbox and overlay need to be inside the fullscreen element to display properly.


      bindFullscreenChangeListener(this, function (e) {
        e.data.resize();
        e.data.updateBrClasses();
        var cboxOverlay = $('#cboxOverlay');
        var cbox = $('#colorbox');

        if (isFullscreenActive()) {
          // In full screen mode, the colorbox and overlay need
          // to be children of the fullscreen element to display properly.
          var $fullscreen = $(getFullscreenElement());
          $fullscreen.append(cboxOverlay).append(cbox);
        } else {
          // In non-fullscreen mode, the colorbox and overlay need
          // to be children of the main document body.
          $(document.body).append(cboxOverlay).append(cbox);
        }
      });
    };
  }(BookReader.prototype.init);
  /**
   * Start fullscreen mode
   */


  BookReader.prototype.enterFullWindow = function () {
    var _this = this;

    this.refs.$brContainer.css('opacity', 0);
    var windowWidth = $(window).width();

    if (windowWidth <= this.onePageMinBreakpoint) {
      this.switchMode(this.constMode1up);
    }

    this.isVendorFullscreenActive = true;
    this.updateBrClasses();
    this.resize();
    this.jumpToIndex(this.currentIndex());
    this.refs.$brContainer.animate({
      opacity: 1
    }, 400, 'linear');
    $(document).on("keyup.".concat(EVENT_NAMESPACE), function (e) {
      if (e.keyCode === 27) _this.exitFullScreen();
    });
  };
  /**
   * Exit from fullscreen mode
   */


  BookReader.prototype.exitFullWindow = function () {
    this.refs.$brContainer.css('opacity', 0);
    $(document).off('keyup' + EVENT_NAMESPACE);
    this.isFullscreenActive = false;
    this.updateBrClasses();
    this.resize();
    this.refs.$brContainer.animate({
      opacity: 1
    }, 400, 'linear');
  };
  /**
   * Returns true if fullscreen mode is enabled
   *
   * @returns {boolean}
   */


  BookReader.prototype.isFullscreen = function () {
    return isFullscreenActive() || this.isVendorFullscreenActive;
  };
  /**
   * Toggle screen
   */


  BookReader.prototype.toggleFullscreen = function () {
    if (this.isFullscreen()) {
      if (fullscreenAllowed()) {
        exitFullscreen();
      } else {
        this.exitFullWindow();
      }
    } else {
      if (fullscreenAllowed()) {
        requestFullscreen(this.refs.$br[0]);
      } else {
        this.enterFullWindow();
      }
    }
  };
  /** @deprecated */


  BookReader.util.isMobile = isMobile;
  /** @deprecated */

  BookReader.util.getFullscreenElement = getFullscreenElement;
  /** @deprecated */

  BookReader.util.bindFullscreenChangeListener = bindFullscreenChangeListener;
  /** @deprecated */

  BookReader.util.fullscreenAllowed = fullscreenAllowed;
  /** @deprecated */

  BookReader.util.requestFullscreen = requestFullscreen;
  /** @deprecated */

  BookReader.util.exitFullscreen = exitFullscreen;
  /** @deprecated */

  BookReader.util.isFullscreenActive = isFullscreenActive;
}
/**
 * Returns the DOM element being used for fullscreen.
 *
 * @returns {HTMLElement}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/fullscreenElement
 */


function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}
/**
 * Returns true if the document is in fullscreen mode.
 *
 * @returns {boolean}
 */

function isFullscreenActive() {
  var fullscreenElement = getFullscreenElement();
  return fullscreenElement !== null && fullscreenElement !== undefined;
}
/**
 * Exits fullscreen mode.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
 */

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
/**
 * Requests fullscreen mode for the given element
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
 */

function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
/**
 * Returns true if fullscreen mode is allowed on this device and document.
 *
 * @returns {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled
 */

function fullscreenAllowed() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullScreenEnabled;
}
/**
 * jQuery-style binding to a fullscreenchange event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event
 */

function bindFullscreenChangeListener(data, fullscreenchangeListener) {
  var event = 'fullscreenchange ';
  var vendor_prefixes = ['webkit', 'moz', 'ms'];
  var all_events = (event + vendor_prefixes.join(event) + event).trim();
  $(document).on(all_events, data, fullscreenchangeListener);
}
/**
 * Returns true if current device is mobile
 *
 * @returns {boolean}
 */

function isMobile() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.vendor-fullscreen.js"));
/******/ }
]);
//# sourceMappingURL=plugin.vendor-fullscreen.js.map