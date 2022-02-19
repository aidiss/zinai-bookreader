(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.search.js"],{

/***/ "./src/plugins/search/plugin.search.js":
/*!*********************************************!*\
  !*** ./src/plugins/search/plugin.search.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../BookReader/PageContainer.js */ "./src/BookReader/PageContainer.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view.js */ "./src/plugins/search/view.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






















/* global BookReader */

/**
 * Plugin for Archive.org book search
 * NOTE: This script must be loaded AFTER `plugin.mobile_nav.js`
 * as it mutates mobile nav drawer
 *
 * Events fired at various points throughout search processing are published
 * on the document DOM element. These can be subscribed to using jQuery's event
 * binding method `$.fn.on`. All of the events are prefixed with a BookReader
 * namespace. The events are:
 *
 * @event BookReader:SearchStarted - When a search form is submitted, immediately
 *   before an AJAX call is made to request search results
 * @event BookReader:SearchCallback - When the search AJAX call is returned and at
 *   least one result is returned. The event callback receives an object
 *   with the `results`, plugin `options`, and the BookReader `instance`
 * @event BookReader:SearchCallbackError - When the AJAX request returns an error.
 *   Receives the `results` and `instance`
 * @event BookReader:SearchCallbackNotIndexed - When a message is received that
 *   the book has not had OCR text indexed yet. Receives `instance`
 * @event BookReader:SearchCallbackEmpty - When no results found. Receives
 *   `instance`
 * @event BookReader:SearchCanceled - When no results found. Receives
 *   `instance`
 */


/** @typedef {import('../../BookReader/PageContainer').PageContainer} PageContainer */

/** @typedef {import('../../BookReader/BookModel').PageIndex} PageIndex */

jQuery.extend(BookReader.defaultOptions, {
  server: 'ia600609.us.archive.org',
  bookId: '',
  subPrefix: '',
  bookPath: '',
  enableSearch: true,
  searchInsideUrl: '/fulltext/inside.php',
  initialSearchTerm: null
});
/** @override */

BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.searchTerm = '';
    this.searchResults = null;
    this.searchInsideUrl = options.searchInsideUrl;
    this.enableSearch = options.enableSearch; // Base server used by some api calls

    this.bookId = options.bookId;
    this.server = options.server;
    this.subPrefix = options.subPrefix;
    this.bookPath = options.bookPath;
    this.searchXHR = null;

    this._cancelSearch.bind(this);

    this.cancelSearchRequest.bind(this);
    /** @type { {[pageIndex: number]: SearchInsideMatchBox[]} } */

    this._searchBoxesByIndex = {};
    this.searchView = undefined;
  };
}(BookReader.prototype.setup);
/** @override */


BookReader.prototype.init = function (super_) {
  return function () {
    var _this = this;

    super_.call(this); // give SearchView the most complete bookreader state

    this.searchView = new _view_js__WEBPACK_IMPORTED_MODULE_22__.default({
      br: this,
      searchCancelledCallback: function searchCancelledCallback() {
        _this._cancelSearch();

        _this.trigger('SearchCanceled', {
          term: _this.searchTerm,
          instance: _this
        });
      }
    });

    if (this.options.enableSearch && this.options.initialSearchTerm) {
      /**
       * this.search() take two parameter
       * 1. this.options.initialSearchTerm - search term
       * 2. {
       *  goToFirstResult: this.options.goToFirstResult,
       *  suppressFragmentChange: false // always want to change fragment in URL
       * }
       */
      this.search(this.options.initialSearchTerm, {
        goToFirstResult: this.options.goToFirstResult,
        suppressFragmentChange: false
      });
    }
  };
}(BookReader.prototype.init);
/** @override */


BookReader.prototype.buildToolbarElement = function (super_) {
  return function () {
    var $el = super_.call(this);

    if (!this.enableSearch) {
      return;
    }

    if (this.searchView.dom.toolbarSearch) {
      $el.find('.BRtoolbarSectionInfo').after(this.searchView.dom.toolbarSearch);
    }

    return $el;
  };
}(BookReader.prototype.buildToolbarElement);
/** @override */


BookReader.prototype._createPageContainer = function (super_) {
  return function (index) {
    var pageContainer = super_.call(this, index);

    if (this.enableSearch && pageContainer.page && index in this._searchBoxesByIndex) {
      var pageIndex = pageContainer.page.index;
      (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_21__.renderBoxesInPageContainerLayer)('searchHiliteLayer', this._searchBoxesByIndex[pageIndex], pageContainer.page, pageContainer.$container[0]);
    }

    return pageContainer;
  };
}(BookReader.prototype._createPageContainer);
/**
 * @typedef {object} SearchOptions
 * @property {boolean} goToFirstResult
 * @property {boolean} disablePopup
 * @property {(null|function)} error - @deprecated at v.5.0
 * @property {(null|function)} success - @deprecated at v.5.0
 */

/**
 * Submits search request
 *
 * @param {string} term
 * @param {SearchOptions} overrides
 */


BookReader.prototype.search = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _this2 = this;

  var term,
      overrides,
      defaultOptions,
      options,
      serverPath,
      baseUrl,
      path,
      subPrefixWithSlash,
      urlParams,
      paramStr,
      url,
      cleanup,
      processSearchResults,
      beforeSend,
      _args = arguments;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          term = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
          overrides = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

          /** @type {SearchOptions} */
          defaultOptions = {
            goToFirstResult: false,

            /* jump to the first result (default=false) */
            disablePopup: false,

            /* don't show the modal progress (default=false) */
            suppressFragmentChange: false,

            /* don't change the URL on initial load */
            error: null,

            /* optional error handler (default=null) */
            success: null
            /* optional success handler (default=null) */

          };
          options = jQuery.extend({}, defaultOptions, overrides);
          this.suppressFragmentChange = options.suppressFragmentChange; // strip slashes, since this goes in the url

          this.searchTerm = term.replace(/\//g, ' ');

          if (!options.suppressFragmentChange) {
            this.trigger(BookReader.eventNames.fragmentChange);
          } // Add quotes to the term. This is to compenstate for the backends default OR query
          // term = term.replace(/['"]+/g, '');
          // term = '"' + term + '"';
          // Remove the port and userdir


          serverPath = this.server.replace(/:.+/, '');
          baseUrl = "https://".concat(serverPath).concat(this.searchInsideUrl, "?"); // Remove subPrefix from end of path

          path = this.bookPath;
          subPrefixWithSlash = "/".concat(this.subPrefix);

          if (this.bookPath.length - this.bookPath.lastIndexOf(subPrefixWithSlash) == subPrefixWithSlash.length) {
            path = this.bookPath.substr(0, this.bookPath.length - subPrefixWithSlash.length);
          }

          urlParams = {
            item_id: this.bookId,
            doc: this.subPrefix,
            path: path,
            q: term
          }; // NOTE that the API does not expect / (slashes) to be encoded. (%2F) won't work

          paramStr = $.param(urlParams).replace(/%2F/g, '/');
          url = "".concat(baseUrl).concat(paramStr);

          cleanup = function cleanup() {
            _this2.searchXHR = null;

            window.BRSearchInProgress = function () {};
          };

          processSearchResults = function processSearchResults(searchInsideResults) {
            if (!_this2.searchXHR) {
              return;
            }

            var responseHasError = searchInsideResults.error || !searchInsideResults.matches.length;
            var hasCustomError = typeof options.error === 'function';
            var hasCustomSuccess = typeof options.success === 'function';

            if (responseHasError) {
              hasCustomError ? options.error.call(_this2, searchInsideResults, options) : _this2.BRSearchCallbackError(searchInsideResults, options);
            } else {
              hasCustomSuccess ? options.success.call(_this2, searchInsideResults, options) : _this2.BRSearchCallback(searchInsideResults, options);
            }

            cleanup();
          };

          beforeSend = function beforeSend(xhr) {
            _this2.searchXHR = xhr;
            window.BRSearchInProgress = processSearchResults;
          };

          this.trigger('SearchStarted', {
            term: this.searchTerm,
            instance: this
          });
          _context.t0 = processSearchResults;
          _context.next = 22;
          return $.ajax({
            url: url,
            dataType: 'jsonp',
            cache: true,
            beforeSend: beforeSend,
            jsonpCallback: 'BRSearchInProgress'
          });

        case 22:
          _context.t1 = _context.sent;
          return _context.abrupt("return", (0, _context.t0)(_context.t1));

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/**
 * cancels AJAX Call
 * emits custom event
 */

BookReader.prototype._cancelSearch = function () {
  var _this$searchXHR;

  (_this$searchXHR = this.searchXHR) === null || _this$searchXHR === void 0 ? void 0 : _this$searchXHR.abort();
  this.searchView.clearSearchFieldAndResults(false);
  this.searchTerm = '';
  this.searchXHR = null;
  this.searchResults = [];

  window.BRSearchInProgress = function () {};
};
/**
 * External function to cancel search
 * checks for term & xhr in flight before running
 */


BookReader.prototype.cancelSearchRequest = function () {
  if (this.searchXHR !== null) {
    this._cancelSearch();

    this.searchView.toggleSearchPending();
    this.trigger('SearchCanceled', {
      term: this.searchTerm,
      instance: this
    });
  }
};
/**
  * @typedef {object} SearchInsideMatchBox
  * @property {number} page
  * @property {number} r
  * @property {number} l
  * @property {number} b
  * @property {number} t
  * @property {HTMLDivElement} [div]
  */

/**
 * @typedef {object} SearchInsideMatch
 * @property {string} text
 * @property {Array<{ page: number, boxes: SearchInsideMatchBox[] }>} par
 */

/**
 * @typedef {object} SearchInsideResults
 * @property {string} error
 * @property {SearchInsideMatch[]} matches
 * @property {boolean} indexed
 */

/**
 * Search Results return handler
 * @callback
 * @param {SearchInsideResults} results
 * @param {object} options
 * @param {boolean} options.goToFirstResult
 */


BookReader.prototype.BRSearchCallback = function (results, options) {
  this.searchResults = results || [];
  this.updateSearchHilites();
  this.removeProgressPopup();

  if (options.goToFirstResult) {
    var pageIndex = this._models.book.leafNumToIndex(results.matches[0].par[0].page);

    this._searchPluginGoToResult(pageIndex);
  }

  this.trigger('SearchCallback', {
    results: results,
    options: options,
    instance: this
  });
};
/**
 * Main search results error handler
 * @callback
 * @param {SearchInsideResults} results
 */


BookReader.prototype.BRSearchCallbackError = function (results) {
  this._BRSearchCallbackError(results);
};
/**
 * @private draws search results error
 * @callback
 * @param {SearchInsideResults} results
 * @param {jQuery} $el
 * @param {boolean} fade
 */


BookReader.prototype._BRSearchCallbackError = function (results) {
  this.searchResults = results;
  var basePayload = {
    term: this.searchTerm,
    instance: this
  };

  if (results.error) {
    var payload = Object.assign({}, basePayload, {
      results: results
    });
    this.trigger('SearchCallbackError', payload);
  } else if (0 == results.matches.length) {
    if (false === results.indexed) {
      this.trigger('SearchCallbackBookNotIndexed', basePayload);
      return;
    }

    this.trigger('SearchCallbackEmpty', basePayload);
  }
};
/**
 * updates search on-page highlights controller
 */


BookReader.prototype.updateSearchHilites = function () {
  var _this$searchResults,
      _this3 = this;

  /** @type {SearchInsideMatch[]} */
  var matches = ((_this$searchResults = this.searchResults) === null || _this$searchResults === void 0 ? void 0 : _this$searchResults.matches) || [];
  /** @type { {[pageIndex: number]: SearchInsideMatch[]} } */

  var boxesByIndex = {}; // Clear any existing svg layers

  this.removeSearchHilites(); // Group by pageIndex

  var _iterator = _createForOfIteratorHelper(matches),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var match = _step.value;

      var _iterator2 = _createForOfIteratorHelper(match.par[0].boxes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var box = _step2.value;
          var pageIndex = this.leafNumToIndex(box.page);
          var pageMatches = boxesByIndex[pageIndex] || (boxesByIndex[pageIndex] = []);
          pageMatches.push(box);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // update any already created pages

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        pageIndexString = _Object$entries$_i[0],
        boxes = _Object$entries$_i[1];

    var pageIndex = parseFloat(pageIndexString);

    var page = _this3._models.book.getPage(pageIndex);

    var pageContainers = _this3.getActivePageContainerElementsForIndex(pageIndex);

    pageContainers.forEach(function (container) {
      return (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_21__.renderBoxesInPageContainerLayer)('searchHiliteLayer', boxes, page, container);
    });
  };

  for (var _i = 0, _Object$entries = Object.entries(boxesByIndex); _i < _Object$entries.length; _i++) {
    _loop();
  }

  this._searchBoxesByIndex = boxesByIndex;
};
/**
 * remove search highlights
 */


BookReader.prototype.removeSearchHilites = function () {
  $(this.getActivePageContainerElements()).find('.searchHiliteLayer').remove();
};
/**
 * @private
 * Goes to the page specified. If the page is not viewable, tries to load the page
 * FIXME Most of this logic is IA specific, and should be less integrated into here
 * or at least more configurable.
 * @param {PageIndex} pageIndex
 */


BookReader.prototype._searchPluginGoToResult = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageIndex) {
    var book, page, makeUnviewableAtEnd, resp, _iterator3, _step3, leafNum;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            book = this._models.book;
            page = book.getPage(pageIndex);
            makeUnviewableAtEnd = false;

            if (page.isViewable) {
              _context2.next = 10;
              break;
            }

            _context2.next = 6;
            return fetch('/services/bookreader/request_page?' + new URLSearchParams({
              id: this.options.bookId,
              subprefix: this.options.subPrefix,
              leafNum: page.leafNum
            })).then(function (r) {
              return r.json();
            });

          case 6:
            resp = _context2.sent;
            _iterator3 = _createForOfIteratorHelper(resp.value);

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                leafNum = _step3.value;
                book.getPage(book.leafNumToIndex(leafNum)).makeViewable();
              } // not able to show page; make the page viewable anyways so that it can
              // actually open. On IA, it has a fallback to a special error page.

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (!resp.value.length) {
              book.getPage(pageIndex).makeViewable();
              makeUnviewableAtEnd = true;
            }

          case 10:
            /* this updates the URL */
            this.suppressFragmentChange = false;
            this.jumpToIndex(pageIndex); // Reset it to unviewable if it wasn't resolved

            if (makeUnviewableAtEnd) {
              book.getPage(pageIndex).makeViewable(false);
            }

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Removes all search pins
 */


BookReader.prototype.removeSearchResults = function () {
  var suppressFragmentChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  this.removeSearchHilites(); //be sure to set all box.divs to null

  this.searchTerm = null;
  this.searchResults = null;

  if (!suppressFragmentChange) {
    this.trigger(BookReader.eventNames.fragmentChange);
  }
};
/**
 * Returns true if a search highlight is currently being displayed
 * @returns {boolean}
 */


BookReader.prototype.searchHighlightVisible = function () {
  var _this4 = this;

  var results = this.searchResults;
  var visiblePages = [];
  if (null == results) return false;

  if (this.constMode2up == this.mode) {
    visiblePages = [this.twoPage.currentIndexL, this.twoPage.currentIndexR];
  } else if (this.constMode1up == this.mode) {
    visiblePages = [this.currentIndex()];
  } else {
    return false;
  }

  results.matches.some(function (match) {
    return match.par[0].boxes.some(function (box) {
      var pageIndex = _this4.leafNumToIndex(box.page);

      if (jQuery.inArray(pageIndex, visiblePages) >= 0) {
        return true;
      }
    });
  });
  return false;
};

/***/ }),

/***/ "./src/plugins/search/view.js":
/*!************************************!*\
  !*** ./src/plugins/search/view.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchView = /*#__PURE__*/function () {
  /**
   * @param {object} params
   * @param {object} params.br The BookReader instance
   * @param {function} params.cancelSearch callback when a user wants to cancel search
   *
   * @event BookReader:SearchResultsCleared - when the search results nav gets cleared
   * @event BookReader:ToggleSearchMenu - when search results menu should toggle
   */
  function SearchView(_ref) {
    var br = _ref.br,
        _ref$searchCancelledC = _ref.searchCancelledCallback,
        searchCancelledCallback = _ref$searchCancelledC === void 0 ? function () {} : _ref$searchCancelledC;

    _classCallCheck(this, SearchView);

    this.br = br; // Search results are returned as a text blob with the hits wrapped in
    // triple mustaches. Hits occasionally include text beyond the search
    // term, so everything within the staches is captured and wrapped.

    this.matcher = new RegExp('{{{(.+?)}}}', 'g');
    this.matches = [];
    this.cacheDOMElements();
    this.bindEvents();
    this.cancelSearch = searchCancelledCallback;
  }

  _createClass(SearchView, [{
    key: "cacheDOMElements",
    value: function cacheDOMElements() {
      this.dom = {}; // Search input within the top toolbar. Will be removed once the mobile menu is replaced.

      this.dom.toolbarSearch = this.buildToolbarSearch();
    }
    /**
     * @param {string} query
     */

  }, {
    key: "setQuery",
    value: function setQuery(query) {
      this.br.$('[name="query"]').val(query);
    }
  }, {
    key: "emptyMatches",
    value: function emptyMatches() {
      this.matches = [];
    }
  }, {
    key: "removeResultPins",
    value: function removeResultPins() {
      this.br.$('.BRnavpos .BRsearch').remove();
    }
  }, {
    key: "clearSearchFieldAndResults",
    value: function clearSearchFieldAndResults() {
      var dispatchEventWhenComplete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.br.removeSearchResults();
      this.removeResultPins();
      this.emptyMatches();
      this.setQuery('');
      this.teardownSearchNavigation();

      if (dispatchEventWhenComplete) {
        this.br.trigger('SearchResultsCleared');
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this.br.trigger('ToggleSearchMenu');
    }
  }, {
    key: "renderSearchNavigation",
    value: function renderSearchNavigation() {
      var selector = 'BRsearch-navigation';
      $('.BRnav').before("\n      <div class=\"".concat(selector, "\">\n        <button class=\"toggle-sidebar\">\n          <h4>\n            <span class=\"icon icon-search\"></span> Results\n          </h4>\n        </button>\n        <div class=\"pagination\">\n          <button class=\"prev\" title=\"Previous result\"><span class=\"icon icon-chevron hflip\"></span></button>\n          <span data-id=\"resultsCount\">").concat(this.resultsPosition(), "</span>\n          <button class=\"next\" title=\"Next result\"><span class=\"icon icon-chevron\"></button>\n        </div>\n        <button class=\"clear\" title=\"Clear search results\">\n          <span class=\"icon icon-close\"></span>\n        </button>\n      </div>\n    "));
      this.dom.searchNavigation = $(".".concat(selector));
    }
  }, {
    key: "resultsPosition",
    value: function resultsPosition() {
      var positionMessage = "".concat(this.matches.length, " result").concat(this.matches.length === 1 ? '' : 's');

      if (~this.currentMatchIndex) {
        positionMessage = "".concat(this.currentMatchIndex + 1, " / ").concat(this.matches.length);
      }

      return positionMessage;
    }
  }, {
    key: "bindSearchNavigationEvents",
    value: function bindSearchNavigationEvents() {
      if (!this.dom.searchNavigation) {
        return;
      }

      var namespace = 'searchNavigation';
      this.dom.searchNavigation.on("click.".concat(namespace), '.clear', this.clearSearchFieldAndResults.bind(this)).on("click.".concat(namespace), '.prev', this.showPrevResult.bind(this)).on("click.".concat(namespace), '.next', this.showNextResult.bind(this)).on("click.".concat(namespace), '.toggle-sidebar', this.toggleSidebar.bind(this)).on("click.".concat(namespace), false);
    }
  }, {
    key: "showPrevResult",
    value: function showPrevResult() {
      if (this.currentMatchIndex === 0) {
        return;
      }

      if (this.br.mode === this.br.constModeThumb) {
        this.br.switchMode(this.br.constMode1up);
      }

      if (!~this.currentMatchIndex) {
        this.currentMatchIndex = this.getClosestMatchIndex(function (start, end, comparator) {
          return end[0] > comparator;
        }) + 1;
      }

      this.br.$('.BRnavline .BRsearch').eq(--this.currentMatchIndex).click();
      this.updateResultsPosition();
      this.updateSearchNavigationButtons();
    }
  }, {
    key: "showNextResult",
    value: function showNextResult() {
      if (this.currentMatchIndex + 1 === this.matches.length) {
        return;
      }

      if (this.br.mode === this.br.constModeThumb) {
        this.br.switchMode(this.br.constMode1up);
      }

      if (!~this.currentMatchIndex) {
        this.currentMatchIndex = this.getClosestMatchIndex(function (start, end, comparator) {
          return start[start.length - 1] > comparator;
        }) - 1;
      }

      this.br.$('.BRnavline .BRsearch').eq(++this.currentMatchIndex).click();
      this.updateResultsPosition();
      this.updateSearchNavigationButtons();
    }
    /**
     * Obtains closest match based on the logical comparison function passed in.
     * When the comparison function returns true, the starting (left) half of the
     * matches array is used in the binary split, else the ending (right) half is
     * used. A recursive call is made to perform the same split and comparison
     * on the winning half of the matches. This is traditionally known as binary
     * search (https://en.wikipedia.org/wiki/Binary_search_algorithm), and in
     * most cases (medium to large search result arrays) should outperform
     * traversing the array from start to finish. In the case of small arrays,
     * the speed difference is negligible.
     *
     * @param {function} comparisonFn
     * @return {number} matchIndex
     */

  }, {
    key: "getClosestMatchIndex",
    value: function getClosestMatchIndex(comparisonFn) {
      var matchPages = this.matches.map(function (m) {
        return m.par[0].page;
      });
      var currentPage = this.br.currentIndex() + 1;

      var closestTo = function closestTo(pool, comparator) {
        if (pool.length === 1) {
          return pool[0];
        }

        var start = pool.slice(0, pool.length / 2);
        var end = pool.slice(pool.length / 2);
        return closestTo(comparisonFn(start, end, comparator) ? start : end, comparator);
      };

      var closestPage = closestTo(matchPages, currentPage);
      return this.matches.indexOf(this.matches.find(function (m) {
        return m.par[0].page === closestPage;
      }));
    }
  }, {
    key: "updateResultsPosition",
    value: function updateResultsPosition() {
      this.dom.searchNavigation.find('[data-id=resultsCount]').text(this.resultsPosition());
    }
  }, {
    key: "updateSearchNavigationButtons",
    value: function updateSearchNavigationButtons() {
      this.dom.searchNavigation.find('.prev').attr('disabled', !this.currentMatchIndex);
      this.dom.searchNavigation.find('.next').attr('disabled', this.currentMatchIndex + 1 === this.matches.length);
    }
  }, {
    key: "teardownSearchNavigation",
    value: function teardownSearchNavigation() {
      if (!this.dom.searchNavigation) {
        this.dom.searchNavigation = $('.BRsearch-navigation');
      }

      if (!this.dom.searchNavigation.length) {
        return;
      }

      this.dom.searchNavigation.off('.searchNavigation').remove();
      this.dom.searchNavigation = null;
      this.br.resize();
    }
  }, {
    key: "setCurrentMatchIndex",
    value: function setCurrentMatchIndex() {
      var matchingSearchResult;

      if (this.br.mode === this.br.constModeThumb) {
        this.currentMatchIndex = -1;
        return;
      }

      if (this.br.mode === this.br.constMode2up) {
        matchingSearchResult = this.find2upMatchingSearchResult();
      } else {
        matchingSearchResult = this.find1upMatchingSearchResult();
      }

      this.currentMatchIndex = this.matches.indexOf(matchingSearchResult);
    }
  }, {
    key: "find1upMatchingSearchResult",
    value: function find1upMatchingSearchResult() {
      var _this = this;

      return this.matches.find(function (m) {
        return _this.br.currentIndex() === m.par[0].page - 1;
      });
    }
  }, {
    key: "find2upMatchingSearchResult",
    value: function find2upMatchingSearchResult() {
      var _this2 = this;

      return this.matches.find(function (m) {
        return _this2.br._isIndexDisplayed(m.par[0].page - 1);
      });
    }
  }, {
    key: "updateSearchNavigation",
    value: function updateSearchNavigation() {
      if (!this.matches.length) {
        return;
      }

      this.setCurrentMatchIndex();
      this.updateResultsPosition();
      this.updateSearchNavigationButtons();
    }
    /**
     * @param {boolean} bool
     */

  }, {
    key: "togglePinsFor",
    value: function togglePinsFor(bool) {
      var pinsVisibleState = bool ? 'visible' : 'hidden';
      this.br.refs.$BRfooter.find('.BRsearch').css({
        visibility: pinsVisibleState
      });
    }
  }, {
    key: "buildToolbarSearch",
    value: function buildToolbarSearch() {
      var toolbarSearch = document.createElement('span');
      toolbarSearch.classList.add('BRtoolbarSection', 'BRtoolbarSectionSearch');
      toolbarSearch.innerHTML = "\n      <form class=\"BRbooksearch desktop\">\n        <input type=\"search\" name=\"query\" class=\"BRsearchInput\" value=\"\" placeholder=\"Search inside\"/>\n        <button type=\"submit\" class=\"BRsearchSubmit\">\n          <img src=\"".concat(this.br.imagesBaseURL, "icon_search_button.svg\" />\n        </button>\n      </form>\n    ");
      return toolbarSearch;
    }
    /**
     * @param {array} matches
     */

  }, {
    key: "renderPins",
    value: function renderPins(matches) {
      var _this3 = this;

      matches.forEach(function (match) {
        var queryString = match.text;

        var pageIndex = _this3.br.leafNumToIndex(match.par[0].page);

        var pageNumber = _this3.br.getPageNum(pageIndex);

        var uiStringSearch = "Search result"; // i18n

        var uiStringPage = "Page"; // i18n

        var percentThrough = _this3.br.constructor.util.cssPercentage(pageIndex, _this3.br.getNumLeafs() - 1);

        var queryStringWithB = queryString.replace(_this3.matcher, '<b>$1</b>');
        var queryStringWithBTruncated = '';

        if (queryString.length > 100) {
          queryStringWithBTruncated = queryString.replace(/^(.{100}[^\s]*).*/, "$1").replace(_this3.matcher, '<b>$1</b>') + '...';
        } // draw marker


        $('<div>').addClass('BRsearch').css({
          left: percentThrough
        }).attr('title', uiStringSearch).append("\n          <div class=\"BRquery\">\n            <div>".concat(queryStringWithBTruncated || queryStringWithB, "</div>\n            <div>").concat(uiStringPage, " ").concat(pageNumber, "</div>\n          </div>\n        ")).data({
          pageIndex: pageIndex
        }).appendTo(_this3.br.$('.BRnavline')).on("mouseenter", function (event) {
          // remove from other markers then turn on just for this
          // XXX should be done when nav slider moves
          var marker = event.currentTarget;
          var tooltip = marker.querySelector('.BRquery');
          var tooltipOffset = tooltip.getBoundingClientRect();
          var targetOffset = marker.getBoundingClientRect();
          var boxSizeAdjust = parseInt(getComputedStyle(tooltip).paddingLeft) * 2;

          if (tooltipOffset.x - boxSizeAdjust < 0) {
            tooltip.style.setProperty('transform', "translateX(-".concat(targetOffset.left - boxSizeAdjust, "px)"));
          }

          $('.BRsearch,.BRchapter').removeClass('front');
          $(event.target).addClass('front');
        }).on("mouseleave", function (event) {
          return $(event.target).removeClass('front');
        }).on("click", function (event) {
          // closures are nested and deep, using an arrow function breaks references.
          // Todo: update to arrow function & clean up closures
          // to remove `bind` dependency
          this.br._searchPluginGoToResult(+$(event.target).data('pageIndex'));
        }.bind(_this3));
      });
    }
    /**
     * @param {boolean} bool
     */

  }, {
    key: "toggleSearchPending",
    value: function toggleSearchPending(bool) {
      var _this4 = this;

      if (bool) {
        this.br.showProgressPopup("Search results will appear below...", function () {
          return _this4.progressPopupClosed();
        });
      } else {
        this.br.removeProgressPopup();
      }
    }
    /**
     * Primary callback when user cancels search popup
     */

  }, {
    key: "progressPopupClosed",
    value: function progressPopupClosed() {
      this.toggleSearchPending();
      this.cancelSearch();
    }
  }, {
    key: "renderErrorModal",
    value: function renderErrorModal() {
      var textIsProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var errorDetails = "".concat(!textIsProcessing ? 'The text may still be processing. ' : '', "Please try again.");
      this.renderModalMessage("\n      Sorry, there was an error with your search.\n      <br />\n      ".concat(errorDetails, "\n    "));
      this.delayModalRemovalFor(4000);
    }
  }, {
    key: "renderBookNotIndexedModal",
    value: function renderBookNotIndexedModal() {
      this.renderModalMessage("\n      <p>\n         This book hasn't been indexed for searching yet.\n         We've just started indexing it, so search should be available soon.\n         <br />\n         Please try again later. Thanks!\n      </p>\n    ");
      this.delayModalRemovalFor(5000);
    }
  }, {
    key: "renderResultsEmptyModal",
    value: function renderResultsEmptyModal() {
      this.renderModalMessage('No matches were found.');
      this.delayModalRemovalFor(2000);
    }
    /**
     * @param {string} messageHTML The innerHTML string used to popupate the modal contents
     */

  }, {
    key: "renderModalMessage",
    value: function renderModalMessage(messageHTML) {
      var modal = document.createElement('div');
      modal.classList.add('BRprogresspopup', 'search_modal');
      modal.innerHTML = messageHTML;
      document.querySelector(this.br.el).append(modal);
    }
    /**
     * @param {number} timeoutMS
     */

  }, {
    key: "delayModalRemovalFor",
    value: function delayModalRemovalFor(timeoutMS) {
      setTimeout(this.br.removeProgressPopup.bind(this.br), timeoutMS);
    }
    /**
     * @param {Event} e
     */

  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      e.preventDefault();
      var query = e.target.querySelector('[name="query"]').value;

      if (!query.length) {
        return false;
      }

      this.br.search(query);
      this.emptyMatches();
      this.toggleSearchPending(true);
      return false;
    }
    /**
     * @param {Event} e
     * @param {object} properties
     *   @param {object} properties.results
     *   @param {object} properties.options
     */

  }, {
    key: "handleSearchCallback",
    value: function handleSearchCallback(e, _ref2) {
      var _this5 = this;

      var results = _ref2.results,
          options = _ref2.options;
      this.matches = results.matches;
      this.setCurrentMatchIndex();
      this.teardownSearchNavigation();
      this.renderSearchNavigation();
      this.bindSearchNavigationEvents();
      this.renderPins(results.matches);
      this.toggleSearchPending(false);

      if (options.goToFirstResult) {
        $(document).one('BookReader:pageChanged', function () {
          _this5.br.resize();
        });
      } else {
        this.br.resize();
      }
    }
    /**
     * @param {Event} e
     */

  }, {
    key: "handleNavToggledCallback",
    value: function handleNavToggledCallback(e) {
      var is_visible = this.br.navigationIsVisible();
      this.togglePinsFor(is_visible);
    }
  }, {
    key: "handleSearchStarted",
    value: function handleSearchStarted() {
      this.emptyMatches();
      this.br.removeSearchHilites();
      this.removeResultPins();
      this.toggleSearchPending(true);
      this.teardownSearchNavigation();
      this.setQuery(this.br.searchTerm);
    }
    /**
     * Event listener for: `BookReader:SearchCallbackError`
     * @param {CustomEvent} event
     */

  }, {
    key: "handleSearchCallbackError",
    value: function handleSearchCallbackError() {
      var _event$detail, _event$detail$props, _event$detail$props$r;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.toggleSearchPending(false);
      var isIndexed = event === null || event === void 0 ? void 0 : (_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : (_event$detail$props = _event$detail.props) === null || _event$detail$props === void 0 ? void 0 : (_event$detail$props$r = _event$detail$props.results) === null || _event$detail$props$r === void 0 ? void 0 : _event$detail$props$r.indexed;
      this.renderErrorModal(isIndexed);
    }
  }, {
    key: "handleSearchCallbackBookNotIndexed",
    value: function handleSearchCallbackBookNotIndexed() {
      this.toggleSearchPending(false);
      this.renderBookNotIndexedModal();
    }
  }, {
    key: "handleSearchCallbackEmpty",
    value: function handleSearchCallbackEmpty() {
      this.toggleSearchPending(false);
      this.renderResultsEmptyModal();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var namespace = 'BookReader:';
      window.addEventListener("".concat(namespace, "SearchCallbackError"), this.handleSearchCallbackError.bind(this));
      $(document).on("".concat(namespace, "SearchCallback"), this.handleSearchCallback.bind(this)).on("".concat(namespace, "navToggled"), this.handleNavToggledCallback.bind(this)).on("".concat(namespace, "SearchStarted"), this.handleSearchStarted.bind(this)).on("".concat(namespace, "SearchCallbackBookNotIndexed"), this.handleSearchCallbackBookNotIndexed.bind(this)).on("".concat(namespace, "SearchCallbackEmpty"), this.handleSearchCallbackEmpty.bind(this)).on("".concat(namespace, "pageChanged"), this.updateSearchNavigation.bind(this));
      this.dom.toolbarSearch.querySelector('form').addEventListener('submit', this.submitHandler.bind(this));
    }
  }]);

  return SearchView;
}();

/* harmony default export */ __webpack_exports__["default"] = (SearchView);

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/search/plugin.search.js"));
/******/ }
]);
//# sourceMappingURL=plugin.search.js.map