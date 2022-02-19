(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.url.js"],{

/***/ "./src/plugins/url/UrlPlugin.js":
/*!**************************************!*\
  !*** ./src/plugins/url/UrlPlugin.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlPlugin": function() { return /* binding */ UrlPlugin; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.from-entries.js */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UrlPlugin = /*#__PURE__*/function () {
  function UrlPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, UrlPlugin);

    this.bookReaderOptions = options; // the canonical order of elements is important in the path and query string

    this.urlSchema = [{
      name: 'page',
      position: 'path',
      default: 'n0'
    }, {
      name: 'mode',
      position: 'path',
      default: '2up'
    }, {
      name: 'search',
      position: 'path',
      deprecated_for: 'q'
    }, {
      name: 'q',
      position: 'query_param'
    }, {
      name: 'sort',
      position: 'query_param'
    }, {
      name: 'view',
      position: 'query_param'
    }, {
      name: 'admin',
      position: 'query_param'
    }];
    this.urlState = {};
    this.urlMode = this.bookReaderOptions.urlMode || 'hash';
    this.urlHistoryBasePath = this.bookReaderOptions.urlHistoryBasePath || '/';
    this.urlLocationPollId = null;
    this.oldLocationHash = null;
    this.oldUserHash = null;
  }
  /**
   * Parse JSON object URL state to string format
   * Arrange path names in an order that it is positioned on the urlSchema
   * @param {Object} urlState
   * @returns {string}
   */


  _createClass(UrlPlugin, [{
    key: "urlStateToUrlString",
    value: function urlStateToUrlString(urlState) {
      var _this = this;

      var searchParams = new URLSearchParams();
      var pathParams = {};
      Object.keys(urlState).forEach(function (key) {
        var _schema, _schema2;

        var schema = _this.urlSchema.find(function (schema) {
          return schema.name === key;
        });

        if ((_schema = schema) !== null && _schema !== void 0 && _schema.deprecated_for) {
          schema = _this.urlSchema.find(function (schemaKey) {
            return schemaKey.name === schema.deprecated_for;
          });
        }

        if (((_schema2 = schema) === null || _schema2 === void 0 ? void 0 : _schema2.position) == 'path') {
          var _schema3;

          pathParams[(_schema3 = schema) === null || _schema3 === void 0 ? void 0 : _schema3.name] = urlState[key];
        } else {
          var _schema4;

          searchParams.append(((_schema4 = schema) === null || _schema4 === void 0 ? void 0 : _schema4.name) || key, urlState[key]);
        }
      });
      var strPathParams = this.urlSchema.filter(function (s) {
        return s.position == 'path';
      }).map(function (schema) {
        return pathParams[schema.name] ? "".concat(schema.name, "/").concat(pathParams[schema.name]) : '';
      }).join('/'); // replace consecutive slashes with a single slash + remove trailing slashes

      var strStrippedTrailingSlash = "".concat(strPathParams.replace(/\/+/g, '/').replace(/\/+$/, ''));
      var concatenatedPath = "".concat(strStrippedTrailingSlash, "?").concat(searchParams.toString());
      return searchParams.toString() ? concatenatedPath : "".concat(strStrippedTrailingSlash);
    }
    /**
     * Parse string URL and add it in the current urlState
     * Example:
     *  /page/n7/mode/2up => {page: 'n7', mode: '2up'}
     *  /page/n7/mode/2up/search/hello => {page: 'n7', mode: '2up', q: 'hello'}
     * @param {string} urlString
     * @returns {object}
     */

  }, {
    key: "urlStringToUrlState",
    value: function urlStringToUrlState(urlString) {
      var urlState = {}; // Fetch searchParams from given {str}
      // Note: whole URL path is needed for URL parsing

      var urlPath = new URL(urlString, 'http://example.com');
      var urlSearchParamsObj = Object.fromEntries(urlPath.searchParams.entries());
      var splitUrlMatches = urlPath.pathname.match(/[^\\/]+\/[^\\/]+/g);
      var urlStrSplitSlashObj = splitUrlMatches ? Object.fromEntries(splitUrlMatches.map(function (x) {
        return x.split('/');
      })) : {};

      var doesKeyExists = function doesKeyExists(_object, _key) {
        return Object.keys(_object).some(function (value) {
          return value == _key;
        });
      }; // Add path objects to urlState


      this.urlSchema.filter(function (schema) {
        return schema.position == 'path';
      }).forEach(function (schema) {
        var hasPropertyKey = doesKeyExists(urlStrSplitSlashObj, schema.name);
        var hasDeprecatedKey = doesKeyExists(schema, 'deprecated_for') && hasPropertyKey;

        if (hasDeprecatedKey) {
          urlState[schema.deprecated_for] = urlStrSplitSlashObj[schema.name];
          return;
        }

        if (hasPropertyKey) {
          urlState[schema.name] = urlStrSplitSlashObj[schema.name];
          return;
        }
      }); // Add searchParams to urlState

      Object.entries(urlSearchParamsObj).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        urlState[key] = value;
      });
      return urlState;
    }
    /**
     * Add or update key-value to the urlState
     * @param {string} key
     * @param {string} val
     */

  }, {
    key: "setUrlParam",
    value: function setUrlParam(key, value) {
      this.urlState[key] = value;
      this.pushToAddressBar();
    }
    /**
     * Delete key-value to the urlState
     * @param {string} key
     */

  }, {
    key: "removeUrlParam",
    value: function removeUrlParam(key) {
      delete this.urlState[key];
      this.pushToAddressBar();
    }
    /**
     * Get key-value from the urlState
     * @param {string} key
     * @return {string}
     */

  }, {
    key: "getUrlParam",
    value: function getUrlParam(key) {
      return this.urlState[key];
    }
    /**
     * Push URL params to addressbar
     */

  }, {
    key: "pushToAddressBar",
    value: function pushToAddressBar() {
      var urlStrPath = this.urlStateToUrlString(this.urlState);
      var concatenatedPath = urlStrPath !== '/' ? urlStrPath : '';

      if (this.urlMode == 'history') {
        if (window.history && window.history.replaceState) {
          var newUrlPath = "".concat(this.urlHistoryBasePath).concat(concatenatedPath).trim().replace(/(\/+)/g, '/');
          window.history.replaceState({}, null, newUrlPath);
        }
      } else {
        window.location.replace('#' + concatenatedPath);
      }

      this.oldLocationHash = urlStrPath;
    }
    /**
     * Get the url and check if it has changed
     * If it was changeed, update the urlState
     */

  }, {
    key: "listenForHashChanges",
    value: function listenForHashChanges() {
      var _this2 = this;

      this.oldLocationHash = window.location.hash.substr(1);

      if (this.urlLocationPollId) {
        clearInterval(this.urlLocationPollId);
        this.urlLocationPollId = null;
      } // check if the URL changes


      var updateHash = function updateHash() {
        var newFragment = window.location.hash.substr(1);
        var hasFragmentChange = newFragment != _this2.oldLocationHash;

        if (!hasFragmentChange) {
          return;
        }

        _this2.urlState = _this2.urlStringToUrlState(newFragment);
      };

      this.urlLocationPollId = setInterval(updateHash, 500);
    }
    /**
     * Will read either the hash or URL and return the bookreader fragment
     */

  }, {
    key: "pullFromAddressBar",
    value: function pullFromAddressBar() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
      var path = this.urlMode === 'history' ? location.pathname.substr(this.urlHistoryBasePath.length) + location.search : location.hash.substr(1);
      this.urlState = this.urlStringToUrlState(path);
    }
  }]);

  return UrlPlugin;
}();

/***/ }),

/***/ "./src/plugins/url/plugin.url.js":
/*!***************************************!*\
  !*** ./src/plugins/url/plugin.url.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookreaderUrlPlugin": function() { return /* binding */ BookreaderUrlPlugin; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _UrlPlugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UrlPlugin */ "./src/plugins/url/UrlPlugin.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


















/* global BookReader */

/**
 * Plugin for URL management in BookReader
 * Note read more about the url "fragment" here:
 * https://openlibrary.org/dev/docs/bookurls
 */

jQuery.extend(BookReader.defaultOptions, {
  enableUrlPlugin: true,
  bookId: '',

  /** @type {string} Defaults can be a urlFragment string */
  defaults: null,
  updateWindowTitle: false,

  /** @type {'history' | 'hash'} */
  urlMode: 'hash',

  /**
   * When using 'history' mode, this part of the URL is kept constant
   * @example /details/plato/
   */
  urlHistoryBasePath: '/',

  /** Only these params will be reflected onto the URL */
  urlTrackedParams: ['page', 'search', 'mode', 'region', 'highlight', 'view'],

  /** If true, don't update the URL when `page == n0 (eg "/page/n0")` */
  urlTrackIndex0: false
});
/** @override */

BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.bookId = options.bookId;
    this.defaults = options.defaults;
    this.locationPollId = null;
    this.oldLocationHash = null;
    this.oldUserHash = null;
  };
}(BookReader.prototype.setup);
/** @override */


BookReader.prototype.init = function (super_) {
  return function () {
    var _this = this;

    if (this.options.enableUrlPlugin) {
      this.bind(BookReader.eventNames.PostInit, function () {
        var _this$options = _this.options,
            updateWindowTitle = _this$options.updateWindowTitle,
            urlMode = _this$options.urlMode;

        if (updateWindowTitle) {
          document.title = _this.shortTitle(_this.bookTitle, 50);
        }

        if (urlMode === 'hash') {
          _this.urlStartLocationPolling();
        }
      });
      this.bind(BookReader.eventNames.fragmentChange, this.urlUpdateFragment.bind(this));
    }

    super_.call(this);
  };
}(BookReader.prototype.init);
/**
 * Returns a shortened version of the title with the maximum number of characters
 * @param {number} maximumCharacters
 * @return {string}
 */


BookReader.prototype.shortTitle = function (maximumCharacters) {
  if (this.bookTitle.length < maximumCharacters) {
    return this.bookTitle;
  }

  var title = "".concat(this.bookTitle.substr(0, maximumCharacters - 3), "...");
  return title;
};
/**
 * Starts polling of window.location to see hash fragment changes
 */


BookReader.prototype.urlStartLocationPolling = function () {
  var _this2 = this;

  this.oldLocationHash = this.urlReadFragment();

  if (this.locationPollId) {
    clearInterval(this.locationPollId);
    this.locationPollId = null;
  }

  var updateHash = function updateHash() {
    var newFragment = _this2.urlReadFragment();

    var hasFragmentChange = newFragment != _this2.oldLocationHash && newFragment != _this2.oldUserHash;

    if (!hasFragmentChange) {
      return;
    }

    var params = _this2.paramsFromFragment(newFragment);

    var updateParams = function updateParams() {
      return _this2.updateFromParams(params);
    };

    _this2.trigger(BookReader.eventNames.stop);

    if (_this2.animating) {
      // Queue change if animating
      if (_this2.autoStop) _this2.autoStop();
      _this2.animationFinishedCallback = updateParams;
    } else {
      // update immediately
      updateParams();
    }

    _this2.oldUserHash = newFragment;
  };

  this.locationPollId = setInterval(updateHash, 500);
};
/**
 * Update URL from the current parameters.
 * Call this instead of manually using window.location.replace
 */


BookReader.prototype.urlUpdateFragment = function () {
  var allParams = this.paramsFromCurrent();
  var _this$options2 = this.options,
      urlMode = _this$options2.urlMode,
      urlTrackIndex0 = _this$options2.urlTrackIndex0,
      urlTrackedParams = _this$options2.urlTrackedParams;

  if (!urlTrackIndex0 && typeof allParams.index !== 'undefined' && allParams.index === 0) {
    delete allParams.index;
    delete allParams.page;
  }

  var params = urlTrackedParams.reduce(function (validParams, paramName) {
    if (paramName in allParams) {
      validParams[paramName] = allParams[paramName];
    }

    return validParams;
  }, {});
  var newFragment = this.fragmentFromParams(params, urlMode);
  var currFragment = this.urlReadFragment();
  var currQueryString = this.getLocationSearch();
  var newQueryString = this.queryStringFromParams(params, currQueryString, urlMode);

  if (currFragment === newFragment && currQueryString === newQueryString) {
    return;
  }

  if (urlMode === 'history') {
    if (window.history && window.history.replaceState) {
      var baseWithoutSlash = this.options.urlHistoryBasePath.replace(/\/+$/, '');
      var newFragmentWithSlash = newFragment === '' ? '' : "/".concat(newFragment);
      var newUrlPath = "".concat(baseWithoutSlash).concat(newFragmentWithSlash).concat(newQueryString);
      window.history.replaceState({}, null, newUrlPath);
      this.oldLocationHash = newFragment + newQueryString;
    }
  } else {
    var newQueryStringSearch = this.urlParamsFiltersOnlySearch(this.readQueryString());
    window.location.replace('#' + newFragment + newQueryStringSearch);
    this.oldLocationHash = newFragment + newQueryStringSearch;
  }
};
/**
 * @private
 * Filtering query parameters to select only book search param (?q=foo)
   This needs to be updated/URL system modified if future query params are to be added
 * @param {string} url
 * @return {string}
 * */


BookReader.prototype.urlParamsFiltersOnlySearch = function (url) {
  var params = new URLSearchParams(url);
  return params.has('q') ? "?".concat(new URLSearchParams({
    q: params.get('q')
  })) : '';
};
/**
 * Will read either the hash or URL and return the bookreader fragment
 * @return {string}
 */


BookReader.prototype.urlReadFragment = function () {
  var _this$options3 = this.options,
      urlMode = _this$options3.urlMode,
      urlHistoryBasePath = _this$options3.urlHistoryBasePath;

  if (urlMode === 'history') {
    return window.location.pathname.substr(urlHistoryBasePath.length);
  } else {
    return window.location.hash.substr(1);
  }
};
/**
 * Will read the hash return the bookreader fragment
 * @return {string}
 */


BookReader.prototype.urlReadHashFragment = function () {
  return window.location.hash.substr(1);
};

var BookreaderUrlPlugin = /*#__PURE__*/function (_BookReader) {
  _inherits(BookreaderUrlPlugin, _BookReader);

  var _super = _createSuper(BookreaderUrlPlugin);

  function BookreaderUrlPlugin() {
    _classCallCheck(this, BookreaderUrlPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(BookreaderUrlPlugin, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      if (this.options.enableUrlPlugin) {
        this.urlPlugin = new _UrlPlugin__WEBPACK_IMPORTED_MODULE_16__.UrlPlugin(this.options);
        this.bind(BookReader.eventNames.PostInit, function () {
          var urlMode = _this3.options.urlMode;

          if (urlMode === 'hash') {
            _this3.urlPlugin.listenForHashChanges();
          }
        });
      }

      _get(_getPrototypeOf(BookreaderUrlPlugin.prototype), "init", this).call(this);
    }
  }]);

  return BookreaderUrlPlugin;
}(BookReader);
window.BookReader = BookreaderUrlPlugin;
/* harmony default export */ __webpack_exports__["default"] = (BookreaderUrlPlugin);

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


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.from-entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/url/plugin.url.js"));
/******/ }
]);
//# sourceMappingURL=plugin.url.js.map