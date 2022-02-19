(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.text_selection.js"],{

/***/ "./src/plugins/plugin.text_selection.js":
/*!**********************************************!*\
  !*** ./src/plugins/plugin.text_selection.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_OPTIONS": function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   "Cache": function() { return /* binding */ Cache; },
/* harmony export */   "TextSelectionPlugin": function() { return /* binding */ TextSelectionPlugin; },
/* harmony export */   "BookreaderWithTextSelection": function() { return /* binding */ BookreaderWithTextSelection; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../BookReader/PageContainer.js */ "./src/BookReader/PageContainer.js");
/* harmony import */ var _util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../util/browserSniffing.js */ "./src/util/browserSniffing.js");
/* harmony import */ var _util_strings_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../util/strings.js */ "./src/util/strings.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//@ts-check



/** @typedef {import('../util/strings.js').StringWithVars} StringWithVars */

/** @typedef {import('../BookReader/PageContainer.js').PageContainer} PageContainer */

var BookReader = window.BookReader;
var DEFAULT_OPTIONS = {
  enabled: true,

  /** @type {StringWithVars} The URL to fetch the entire DJVU xml. Supports options.vars */
  fullDjvuXmlUrl: null,

  /** @type {StringWithVars} The URL to fetch a single page of the DJVU xml. Supports options.vars. Also has {{pageIndex}} */
  singlePageDjvuXmlUrl: null
};
/** @typedef {typeof DEFAULT_OPTIONS} TextSelectionPluginOptions */

/**
 * @template T
 */

var Cache = /*#__PURE__*/function () {
  function Cache() {
    var maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    _classCallCheck(this, Cache);

    this.maxSize = maxSize;
    /** @type {T[]} */

    this.entries = [];
  }
  /**
   * @param {T} entry
   */


  _createClass(Cache, [{
    key: "add",
    value: function add(entry) {
      if (this.entries.length >= this.maxSize) {
        this.entries.shift();
      }

      this.entries.push(entry);
    }
  }]);

  return Cache;
}();
var TextSelectionPlugin = /*#__PURE__*/function () {
  function TextSelectionPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS;
    var optionVariables = arguments.length > 1 ? arguments[1] : undefined;
    var avoidTspans = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_25__.isFirefox)();
    var pointerEventsOnParagraph = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_25__.isSafari)();

    _classCallCheck(this, TextSelectionPlugin);

    this.options = options;
    this.optionVariables = optionVariables;
    /**@type {PromiseLike<JQuery<HTMLElement>|undefined>} */

    this.djvuPagesPromise = null; // Using text elements instead of tspans for words because Firefox does not allow svg tspan stretch.
    // Tspans are necessary on Chrome because they prevent newline character after every word when copying

    this.svgParagraphElement = "text";
    this.svgWordElement = "tspan";
    this.insertNewlines = avoidTspans; // Safari has a bug where `pointer-events` doesn't work on `<tspans>`. So
    // there we will set `pointer-events: all` on the paragraph element. We don't
    // do this everywhere, because it's a worse experience. Thanks Safari :/

    this.pointerEventsOnParagraph = pointerEventsOnParagraph;

    if (avoidTspans) {
      this.svgParagraphElement = "g";
      this.svgWordElement = "text";
    }
    /** @type {Cache<{index: number, response: any}>} */


    this.pageTextCache = new Cache();
    /**
     * Sometimes there are too many words on a page, and the browser becomes near
     * unusable. For now don't render text layer for pages with too many words.
     */

    this.maxWordRendered = 2500;
  }

  _createClass(TextSelectionPlugin, [{
    key: "init",
    value: function init() {
      // Only fetch the full djvu xml if the single page url isn't there
      if (this.options.singlePageDjvuXmlUrl) return;
      this.djvuPagesPromise = $.ajax({
        type: "GET",
        url: (0,_util_strings_js__WEBPACK_IMPORTED_MODULE_26__.applyVariables)(this.options.fullDjvuXmlUrl, this.optionVariables),
        dataType: "html",
        error: function error(e) {
          return undefined;
        }
      }).then(function (res) {
        try {
          var xmlMap = $.parseXML(res);
          return xmlMap && $(xmlMap).find("OBJECT");
        } catch (e) {
          return undefined;
        }
      });
    }
    /**
     * @param {number} index
     * @returns {Promise<HTMLElement|undefined>}
     */

  }, {
    key: "getPageText",
    value: function () {
      var _getPageText = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
        var _this = this;

        var cachedEntry, XMLpagesArr;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.options.singlePageDjvuXmlUrl) {
                  _context.next = 7;
                  break;
                }

                cachedEntry = this.pageTextCache.entries.find(function (x) {
                  return x.index == index;
                });

                if (!cachedEntry) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", cachedEntry.response);

              case 4:
                return _context.abrupt("return", $.ajax({
                  type: "GET",
                  url: (0,_util_strings_js__WEBPACK_IMPORTED_MODULE_26__.applyVariables)(this.options.singlePageDjvuXmlUrl, this.optionVariables, {
                    pageIndex: index
                  }),
                  dataType: "html",
                  error: function error(e) {
                    return undefined;
                  }
                }).then(function (res) {
                  try {
                    var xmlDoc = $.parseXML(res);
                    var result = xmlDoc && $(xmlDoc).find("OBJECT")[0];

                    _this.pageTextCache.add({
                      index: index,
                      response: result
                    });

                    return result;
                  } catch (e) {
                    return undefined;
                  }
                }));

              case 7:
                _context.next = 9;
                return this.djvuPagesPromise;

              case 9:
                XMLpagesArr = _context.sent;

                if (!XMLpagesArr) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", XMLpagesArr[index]);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPageText(_x) {
        return _getPageText.apply(this, arguments);
      }

      return getPageText;
    }()
    /**
     * Intercept copied text to remove any styling applied to it
     * @param {JQuery} $container
     */

  }, {
    key: "interceptCopy",
    value: function interceptCopy($container) {
      $container[0].addEventListener('copy', function (event) {
        var selection = document.getSelection();
        event.clipboardData.setData('text/plain', selection.toString());
        event.preventDefault();
      });
    }
    /**
     * Applies mouse events when in default mode
     * @param {SVGElement} svg
     */

  }, {
    key: "defaultMode",
    value: function defaultMode(svg) {
      var _this2 = this;

      svg.classList.remove("selectingSVG");
      $(svg).on("mousedown.textSelectPluginHandler", function (event) {
        if (!$(event.target).is(".BRwordElement")) return;
        event.stopPropagation();
        svg.classList.add("selectingSVG");
        $(svg).one("mouseup.textSelectPluginHandler", function (event) {
          if (window.getSelection().toString() != "") {
            event.stopPropagation();
            $(svg).off(".textSelectPluginHandler");

            _this2.textSelectingMode(svg);
          } else svg.classList.remove("selectingSVG");
        });
      });
    }
    /**
     * Applies mouse events when in textSelecting mode
     * @param {SVGElement} svg
     */

  }, {
    key: "textSelectingMode",
    value: function textSelectingMode(svg) {
      var _this3 = this;

      $(svg).on('mousedown.textSelectPluginHandler', function (event) {
        if (!$(event.target).is(".BRwordElement")) {
          if (window.getSelection().toString() != "") window.getSelection().removeAllRanges();
        }

        event.stopPropagation();
      });
      $(svg).on('mouseup.textSelectPluginHandler', function (event) {
        event.stopPropagation();

        if (window.getSelection().toString() == "") {
          $(svg).off(".textSelectPluginHandler");

          _this3.defaultMode(svg);
        }
      });
    }
    /**
     * Initializes text selection modes if there is an svg on the page
     * @param {JQuery} $container
     */

  }, {
    key: "stopPageFlip",
    value: function stopPageFlip($container) {
      var _this4 = this;

      /** @type {JQuery<SVGElement>} */
      var $svg = $container.find('svg.textSelectionSVG');
      if (!$svg.length) return;
      $svg.each(function (i, s) {
        return _this4.defaultMode(s);
      });
      this.interceptCopy($container);
    }
    /**
     * @param {PageContainer} pageContainer
     */

  }, {
    key: "createTextLayer",
    value: function () {
      var _createTextLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageContainer) {
        var _this5 = this;

        var pageIndex, $container, $svgLayers, XMLpage, totalWords, svg;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageIndex = pageContainer.page.index;
                $container = pageContainer.$container;
                $svgLayers = $container.find('.textSelectionSVG');

                if (!$svgLayers.length) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return this.getPageText(pageIndex);

              case 7:
                XMLpage = _context2.sent;

                if (XMLpage) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return");

              case 10:
                totalWords = $(XMLpage).find("WORD").length;

                if (!(totalWords > this.maxWordRendered)) {
                  _context2.next = 14;
                  break;
                }

                console.log("Page ".concat(pageIndex, " has too many words (").concat(totalWords, " > ").concat(this.maxWordRendered, "). Not rendering text layer."));
                return _context2.abrupt("return");

              case 14:
                svg = (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_24__.createSVGPageLayer)(pageContainer.page, 'textSelectionSVG');
                $container.append(svg);
                $(XMLpage).find("PARAGRAPH").each(function (i, paragraph) {
                  // Adding text element for each paragraph in the page
                  var words = $(paragraph).find("WORD");
                  if (!words.length) return;
                  var paragSvg = document.createElementNS("http://www.w3.org/2000/svg", _this5.svgParagraphElement);
                  paragSvg.setAttribute("class", "BRparagElement");

                  if (_this5.pointerEventsOnParagraph) {
                    paragSvg.style.pointerEvents = "all";
                  }

                  var wordHeightArr = [];

                  for (var _i = 0; _i < words.length; _i++) {
                    // Adding tspan for each word in paragraph
                    var currWord = words[_i]; // eslint-disable-next-line no-unused-vars

                    var _$$attr$split$map = $(currWord).attr("coords").split(',').map(parseFloat),
                        _$$attr$split$map2 = _slicedToArray(_$$attr$split$map, 4),
                        left = _$$attr$split$map2[0],
                        bottom = _$$attr$split$map2[1],
                        right = _$$attr$split$map2[2],
                        top = _$$attr$split$map2[3];

                    var wordHeight = bottom - top;
                    wordHeightArr.push(wordHeight);
                    var wordTspan = document.createElementNS("http://www.w3.org/2000/svg", _this5.svgWordElement);
                    wordTspan.setAttribute("class", "BRwordElement");
                    wordTspan.setAttribute("x", left.toString());
                    wordTspan.setAttribute("y", bottom.toString());
                    wordTspan.setAttribute("textLength", (right - left).toString());
                    wordTspan.setAttribute("lengthAdjust", "spacingAndGlyphs");
                    wordTspan.textContent = currWord.textContent;
                    paragSvg.appendChild(wordTspan); // Adding spaces after words except at the end of the paragraph
                    // TODO: assumes left-to-right text

                    if (_i < words.length - 1) {
                      var nextWord = words[_i + 1]; // eslint-disable-next-line no-unused-vars

                      var _$$attr$split$map3 = $(nextWord).attr("coords").split(',').map(parseFloat),
                          _$$attr$split$map4 = _slicedToArray(_$$attr$split$map3, 4),
                          leftNext = _$$attr$split$map4[0],
                          bottomNext = _$$attr$split$map4[1],
                          rightNext = _$$attr$split$map4[2],
                          topNext = _$$attr$split$map4[3];

                      var spaceTspan = document.createElementNS("http://www.w3.org/2000/svg", _this5.svgWordElement);
                      spaceTspan.setAttribute("class", "BRwordElement");
                      spaceTspan.setAttribute("x", right.toString());
                      spaceTspan.setAttribute("y", bottom.toString());
                      if (leftNext - right > 0) spaceTspan.setAttribute("textLength", (leftNext - right).toString());
                      spaceTspan.setAttribute("lengthAdjust", "spacingAndGlyphs");
                      spaceTspan.textContent = " ";
                      paragSvg.appendChild(spaceTspan);
                    } // Adds newline at the end of paragraph on Firefox


                    if (_i == words.length - 1 && _this5.insertNewlines) {
                      paragSvg.appendChild(document.createTextNode("\n"));
                    }
                  }

                  wordHeightArr.sort();
                  var paragWordHeight = wordHeightArr[Math.floor(wordHeightArr.length * 0.85)];
                  paragSvg.setAttribute("font-size", paragWordHeight.toString());
                  svg.appendChild(paragSvg);
                });
                this.stopPageFlip($container);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createTextLayer(_x2) {
        return _createTextLayer.apply(this, arguments);
      }

      return createTextLayer;
    }()
  }]);

  return TextSelectionPlugin;
}();
var BookreaderWithTextSelection = /*#__PURE__*/function (_BookReader) {
  _inherits(BookreaderWithTextSelection, _BookReader);

  var _super = _createSuper(BookreaderWithTextSelection);

  function BookreaderWithTextSelection() {
    _classCallCheck(this, BookreaderWithTextSelection);

    return _super.apply(this, arguments);
  }

  _createClass(BookreaderWithTextSelection, [{
    key: "init",
    value: function init() {
      var options = Object.assign({}, DEFAULT_OPTIONS, this.options.plugins.textSelection);

      if (options.enabled) {
        this.textSelectionPlugin = new TextSelectionPlugin(options, this.options.vars); // Write this back; this way the plugin is the source of truth, and BR just
        // contains a reference to it.

        this.options.plugins.textSelection = options;
        this.textSelectionPlugin.init();
      }

      _get(_getPrototypeOf(BookreaderWithTextSelection.prototype), "init", this).call(this);
    }
    /**
     * @param {number} index
     */

  }, {
    key: "_createPageContainer",
    value: function _createPageContainer(index) {
      var pageContainer = _get(_getPrototypeOf(BookreaderWithTextSelection.prototype), "_createPageContainer", this).call(this, index); // Disable if thumb mode; it's too janky
      // .page can be null for "pre-cover" region


      if (this.mode !== this.constModeThumb && pageContainer.page) {
        var _this$textSelectionPl;

        (_this$textSelectionPl = this.textSelectionPlugin) === null || _this$textSelectionPl === void 0 ? void 0 : _this$textSelectionPl.createTextLayer(pageContainer);
      }

      return pageContainer;
    }
  }]);

  return BookreaderWithTextSelection;
}(BookReader);
window.BookReader = BookreaderWithTextSelection;
/* harmony default export */ __webpack_exports__["default"] = (BookreaderWithTextSelection);

/***/ }),

/***/ "./src/util/browserSniffing.js":
/*!*************************************!*\
  !*** ./src/util/browserSniffing.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isChrome": function() { return /* binding */ isChrome; },
/* harmony export */   "isFirefox": function() { return /* binding */ isFirefox; },
/* harmony export */   "isSafari": function() { return /* binding */ isSafari; }
/* harmony export */ });
/**
 * Checks whether the current browser is a Chrome/Chromium browser
 * Code from https://stackoverflow.com/a/4565120/2317712
 * @param {string} [userAgent]
 * @param {string} [vendor]
 * @return {boolean}
 */
function isChrome() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
  var vendor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : navigator.vendor;
  return /chrome/i.test(userAgent) && /google inc/i.test(vendor);
}
/**
 * Checks whether the current browser is firefox
 * @param {string} [userAgent]
 * @return {boolean}
 */

function isFirefox() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
  return /firefox/i.test(userAgent);
}
/**
 * Checks whether the current browser is safari
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Browser_Name
 * @param {string} [userAgent]
 * @return {boolean}
 */

function isSafari() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
  return /safari/i.test(userAgent) && !/chrome|chromium/i.test(userAgent);
}

/***/ }),

/***/ "./src/util/strings.js":
/*!*****************************!*\
  !*** ./src/util/strings.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyVariables": function() { return /* binding */ applyVariables; },
/* harmony export */   "APPLY_FILTERS": function() { return /* binding */ APPLY_FILTERS; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















/**
 * @typedef {String} StringWithVars
 * A template string with {{foo}} style variables
 * Also supports filters, like {{bookPath|urlencode}} (See APPLY_FILTERS for the
 * supported list of filters)
 **/

/**
 * @param {StringWithVars|String} template
 * @param { {[varName: string]: { toString: () => string} } } vars
 * @param { {[varName: string]: { toString: () => string} } } [overrides]
 */
function applyVariables(template, vars) {
  var overrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var possibleFilters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : APPLY_FILTERS;
  return template === null || template === void 0 ? void 0 : template.replace(/\{\{([^}]*?)\}\}/g, function ($0, $1) {
    if (!$1) return $0;
    /** @type {string} */

    var expression = $1;

    var _expression$split$map = expression.split('|').map(function (x) {
      return x.trim();
    }),
        _expression$split$map2 = _toArray(_expression$split$map),
        varName = _expression$split$map2[0],
        filterNames = _expression$split$map2.slice(1);

    var defined = varName in overrides || varName in vars; // If it's not defined, don't expand it at all

    if (!defined) return $0;
    var value = varName in overrides ? overrides[varName] : varName in vars ? vars[varName] : null;
    var filters = filterNames.map(function (n) {
      return possibleFilters[n];
    });
    return filters.reduce(function (acc, cur) {
      return cur(acc);
    }, value && value.toString());
  });
}
/** @type { {[filterName: String]:( string => string)} } */

var APPLY_FILTERS = {
  urlencode: encodeURIComponent
};

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.text_selection.js"));
/******/ }
]);
//# sourceMappingURL=plugin.text_selection.js.map