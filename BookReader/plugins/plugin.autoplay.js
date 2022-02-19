"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.autoplay.js"],{

/***/ "./src/plugins/plugin.autoplay.js":
/*!****************************************!*\
  !*** ./src/plugins/plugin.autoplay.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");



/*global BookReader */

/**
 * Plugin which adds an autoplay feature. Useful for kiosk situations.
 */
jQuery.extend(BookReader.defaultOptions, {
  enableAutoPlayPlugin: true
});
/**
 * @override BookReader.setup
 */

BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.auto = false;
    this.autoTimer = null;
    this.flipDelay = 5000;
  };
}(BookReader.prototype.setup);
/**
 * @override BookReader.init
 */


BookReader.prototype.init = function (super_) {
  return function (options) {
    var _this = this;

    super_.call(this, options);
    if (!this.options.enableAutoPlayPlugin) return;
    this.bind(BookReader.eventNames.stop, function () {
      return _this.autoStop();
    });
  };
}(BookReader.prototype.init);
/**
 * @override BookReader.bindNavigationHandlers
 */


BookReader.prototype.bindNavigationHandlers = function (super_) {
  return function () {
    var _this2 = this;

    super_.call(this);
    if (!this.options.enableAutoPlayPlugin) return; // Note the mobile plugin attaches itself to body, so we need to select outside

    var jIcons = this.$('.BRicon').add('.BRmobileMenu .BRicon');
    jIcons.filter('.play').click(function () {
      _this2.autoToggle();

      return false;
    });
    jIcons.filter('.pause').click(function () {
      _this2.autoToggle();

      return false;
    });
  };
}(BookReader.prototype.bindNavigationHandlers);
/**
 * Starts autoplay mode
 * @param {object} overrides
 * @param {number} overrides.flipSpeed
 * @param {number} overrides.flipDelay
 */


BookReader.prototype.autoToggle = function (overrides) {
  var _this3 = this;

  if (!this.options.enableAutoPlayPlugin) return;
  var options = $.extend({
    flipSpeed: this.flipSpeed,
    flipDelay: this.flipDelay
  }, overrides);
  this.flipSpeed = typeof options.flipSpeed === "number" ? options.flipSpeed : this.flipSpeed;
  this.flipDelay = typeof options.flipDelay === "number" ? options.flipDelay : this.flipDelay;
  this.trigger(BookReader.eventNames.stop);
  var bComingFrom1up = false;

  if (this.constMode2up != this.mode) {
    bComingFrom1up = true;
    this.switchMode(this.constMode2up);
  } // Change to autofit if book is too large


  if (this.reduce < this.twoPageGetAutofitReduce()) {
    this.zoom('auto');
  }

  if (null == this.autoTimer) {
    // $$$ Draw events currently cause layout problems when they occur during animation.
    //     There is a specific problem when changing from 1-up immediately to autoplay in RTL so
    //     we workaround for now by not triggering immediate animation in that case.
    //     See https://bugs.launchpad.net/gnubook/+bug/328327
    if ('rl' == this.pageProgression && bComingFrom1up) {// don't flip immediately -- wait until timer fires
    } else {
      // flip immediately
      this.flipFwdToIndex();
    }

    this.$('.play').hide();
    this.$('.pause').show();
    this.autoTimer = setInterval(function () {
      if (_this3.animating) return;

      if (Math.max(_this3.twoPage.currentIndexL, _this3.twoPage.currentIndexR) >= _this3.lastDisplayableIndex()) {
        _this3.flipBackToIndex(1); // $$$ really what we want?

      } else {
        _this3.flipFwdToIndex();
      }
    }, this.flipDelay);
  } else {
    this.autoStop();
  }
};
/**
 * Stop autoplay mode, allowing animations to finish
 */


BookReader.prototype.autoStop = function () {
  if (!this.options.enableAutoPlayPlugin) return;

  if (null != this.autoTimer) {
    clearInterval(this.autoTimer);
    this.flipSpeed = 'fast';
    this.$('.pause').hide();
    this.$('.play').show();
    this.autoTimer = null;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.autoplay.js"));
/******/ }
]);
//# sourceMappingURL=plugin.autoplay.js.map