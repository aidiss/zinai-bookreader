(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["ia-bookreader-bundle.js"],{

/***/ "./node_modules/@internetarchive/field-parsers/dist/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanParser": function() { return /* reexport safe */ _src_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__.BooleanParser; },
/* harmony export */   "ByteParser": function() { return /* reexport safe */ _src_field_types_byte__WEBPACK_IMPORTED_MODULE_1__.ByteParser; },
/* harmony export */   "DateParser": function() { return /* reexport safe */ _src_field_types_date__WEBPACK_IMPORTED_MODULE_2__.DateParser; },
/* harmony export */   "DurationParser": function() { return /* reexport safe */ _src_field_types_duration__WEBPACK_IMPORTED_MODULE_3__.DurationParser; },
/* harmony export */   "MediaTypeParser": function() { return /* reexport safe */ _src_field_types_mediatype__WEBPACK_IMPORTED_MODULE_4__.MediaTypeParser; },
/* harmony export */   "NumberParser": function() { return /* reexport safe */ _src_field_types_number__WEBPACK_IMPORTED_MODULE_5__.NumberParser; },
/* harmony export */   "PageProgressionParser": function() { return /* reexport safe */ _src_field_types_page_progression__WEBPACK_IMPORTED_MODULE_6__.PageProgressionParser; },
/* harmony export */   "StringParser": function() { return /* reexport safe */ _src_field_types_string__WEBPACK_IMPORTED_MODULE_7__.StringParser; }
/* harmony export */ });
/* harmony import */ var _src_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/field-types/boolean */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js");
/* harmony import */ var _src_field_types_byte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/field-types/byte */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js");
/* harmony import */ var _src_field_types_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/field-types/date */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js");
/* harmony import */ var _src_field_types_duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/field-types/duration */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js");
/* harmony import */ var _src_field_types_mediatype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/field-types/mediatype */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js");
/* harmony import */ var _src_field_types_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/field-types/number */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js");
/* harmony import */ var _src_field_types_page_progression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/field-types/page-progression */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js");
/* harmony import */ var _src_field_types_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/field-types/string */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanParser": function() { return /* binding */ BooleanParser; }
/* harmony export */ });
class BooleanParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue === 'string' &&
            (rawValue === 'false' || rawValue === '0')) {
            return false;
        }
        return Boolean(rawValue);
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
BooleanParser.shared = new BooleanParser();
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByteParser": function() { return /* binding */ ByteParser; }
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js");

/**
 * The ByteParser is a unit-specific NumberParser
 * that returns a value in bytes
 *
 * @export
 * @class ByteParser
 * @implements {FieldParserInterface<Byte>}
 */
class ByteParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        const parser = _number__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared;
        return parser.parseValue(rawValue);
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
ByteParser.shared = new ByteParser();
//# sourceMappingURL=byte.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateParser": function() { return /* binding */ DateParser; }
/* harmony export */ });
class DateParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        // try different date parsing
        return this.parseJSDate(rawValue) || this.parseBracketDate(rawValue);
    }
    // handles "[yyyy]" format
    parseBracketDate(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        const yearMatch = rawValue.match(/\[([0-9]{4})\]/);
        if (!yearMatch || yearMatch.length < 2) {
            return undefined;
        }
        return this.parseJSDate(yearMatch[1]);
    }
    parseJSDate(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        let parsedValue = rawValue;
        // fix for Safari not supporting `yyyy-mm-dd HH:MM:SS` format, insert a `T` into the space
        if (parsedValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)) {
            parsedValue = parsedValue.replace(' ', 'T');
        }
        const parsed = Date.parse(parsedValue);
        if (Number.isNaN(parsed)) {
            return undefined;
        }
        let date = new Date(parsedValue);
        // the `Date(string)` constructor parses some strings as GMT and some in the local timezone
        // this attempts to detect cases that get parsed as GMT and adjusts accordingly
        const dateWithTimeZone = parsedValue.indexOf('Z') > -1 || // ISO8601 with GMT timezone
            parsedValue.indexOf('+') > -1 || // ISO8601 with positive timezone offset
            parsedValue.match(/^[0-9]{4}$/) || // just the year, ie `2020`
            parsedValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) || // YYYY-MM-DD format
            parsedValue.match(/^.*?-[0-9]{2}:[0-9]{2}$/) || // `YYYY-MM-DDTHH:mm:ss-00:00` format
            parsedValue.match(/^.*?-[0-9]{4}$/); // `YYYY-MM-DDTHH:mm:ss-0000` format
        if (dateWithTimeZone) {
            date = new Date(date.getTime() + date.getTimezoneOffset() * 1000 * 60);
        }
        return date;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
DateParser.shared = new DateParser();
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DurationParser": function() { return /* binding */ DurationParser; }
/* harmony export */ });
/**
 * Parses duration format to a `Duration` (number of seconds with decimal)
 *
 * Can parse hh:mm:ss.ms, hh:mm:ss, mm:ss, mm:ss.ms, and s.ms formats
 */
class DurationParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue === 'number')
            return rawValue;
        if (typeof rawValue === 'boolean')
            return undefined;
        const componentArray = rawValue.split(':');
        let seconds;
        // if there are no colons in the string, we can assume it's in sss.ms format so just parse it
        if (componentArray.length === 1) {
            seconds = this.parseNumberFormat(componentArray[0]);
        }
        else {
            seconds = this.parseColonSeparatedFormat(componentArray);
        }
        return seconds;
    }
    /**
     * Parse sss.ms format
     *
     * @param rawValue
     * @returns
     */
    parseNumberFormat(rawValue) {
        let seconds = parseFloat(rawValue);
        if (Number.isNaN(seconds))
            seconds = undefined;
        return seconds;
    }
    /**
     * Parse hh:mm:ss.ms format
     *
     * @param componentArray
     * @returns
     */
    parseColonSeparatedFormat(componentArray) {
        // if any of the hh:mm:ss components are NaN, just return undefined
        let hasNaNComponent = false;
        const parsedValue = componentArray
            .map((element, index) => {
            const componentValue = parseFloat(element);
            if (Number.isNaN(componentValue)) {
                hasNaNComponent = true;
                return 0;
            }
            const exponent = componentArray.length - 1 - index;
            const multiplier = 60 ** exponent;
            return componentValue * Math.floor(multiplier);
        })
            .reduce((a, b) => a + b, 0);
        return hasNaNComponent ? undefined : parsedValue;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
DurationParser.shared = new DurationParser();
//# sourceMappingURL=duration.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaTypeParser": function() { return /* binding */ MediaTypeParser; }
/* harmony export */ });
class MediaTypeParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        return rawValue;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
MediaTypeParser.shared = new MediaTypeParser();
//# sourceMappingURL=mediatype.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberParser": function() { return /* binding */ NumberParser; }
/* harmony export */ });
class NumberParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue === 'number')
            return rawValue;
        if (typeof rawValue === 'boolean')
            return undefined;
        const value = parseFloat(rawValue);
        if (Number.isNaN(value)) {
            return undefined;
        }
        return value;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
NumberParser.shared = new NumberParser();
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageProgressionParser": function() { return /* binding */ PageProgressionParser; }
/* harmony export */ });
class PageProgressionParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        return rawValue;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
PageProgressionParser.shared = new PageProgressionParser();
//# sourceMappingURL=page-progression.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringParser": function() { return /* binding */ StringParser; }
/* harmony export */ });
class StringParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        return String(rawValue);
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
StringParser.shared = new StringParser();
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ia_activity_indicator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ia-activity-indicator.js */ "./node_modules/@internetarchive/ia-activity-indicator/src/ia-activity-indicator.js");


window.customElements.define('ia-activity-indicator', _src_ia_activity_indicator_js__WEBPACK_IMPORTED_MODULE_0__.IAActivityIndicator);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-activity-indicator/src/ia-activity-indicator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-activity-indicator/src/ia-activity-indicator.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAActivityIndicator": function() { return /* binding */ IAActivityIndicator; },
/* harmony export */   "IAActivityIndicatorMode": function() { return /* binding */ IAActivityIndicatorMode; }
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


const IAActivityIndicatorMode = Object.freeze({
  processing: 'processing',
  complete: 'complete',
});

class IAActivityIndicator extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      mode: { type: String },
    };
  }

  constructor() {
    super();
    this.mode = IAActivityIndicatorMode.processing;
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `;
  }

  static get styles() {
    const checkmarkColorCss = lit_element__WEBPACK_IMPORTED_MODULE_0__.css`var(--activityIndicatorCheckmarkColor, #31A481)`;
    const completedRingColorCss = lit_element__WEBPACK_IMPORTED_MODULE_0__.css`var(--activityIndicatorCompletedRingColor, #31A481)`;
    const loadingRingColorCss = lit_element__WEBPACK_IMPORTED_MODULE_0__.css`var(--activityIndicatorLoadingRingColor, #333333)`;
    const loadingDotColorCss = lit_element__WEBPACK_IMPORTED_MODULE_0__.css`var(--activityIndicatorLoadingDotColor, #333333)`;

    return lit_element__WEBPACK_IMPORTED_MODULE_0__.css`
      #completed-ring {
        fill: ${completedRingColorCss};
      }

      #check {
        fill: ${checkmarkColorCss};
      }

      #activity-ring {
        fill: ${loadingRingColorCss};
      }

      #activity-dots {
        fill: ${loadingDotColorCss};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `;
  }
}




/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemNavigator": function() { return /* reexport safe */ _src_item_navigator__WEBPACK_IMPORTED_MODULE_0__.ItemNavigator; }
/* harmony export */ });
/* harmony import */ var _src_item_navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/item-navigator */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/item-navigator.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/item-navigator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/item-navigator.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemNavigator": function() { return /* binding */ ItemNavigator; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _internetarchive_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/search-service */ "./node_modules/@internetarchive/search-service/dist/index.js");
/* harmony import */ var _internetarchive_ia_menu_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/ia-menu-slider */ "./node_modules/@internetarchive/ia-menu-slider/index.js");
/* harmony import */ var _internetarchive_icon_ellipses_icon_ellipses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internetarchive/icon-ellipses/icon-ellipses */ "./node_modules/@internetarchive/icon-ellipses/icon-ellipses.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/loader.js");
/* harmony import */ var _no_theater_available__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./no-theater-available */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/no-theater-available.js");








let ItemNavigator = class ItemNavigator extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.viewAvailable = true;
        this.baseHost = 'archive.org';
        this.signedIn = false;
        this.menuContents = [];
        this.menuShortcuts = [];
        this.viewportInFullscreen = null;
        this.menuOpened = false;
        this.loaded = null;
        this.openMenuState = 'shift';
    }
    disconnectedCallback() {
        this.removeResizeObserver();
    }
    updated(changed) {
        if (changed.has('sharedObserver')) {
            const oldObserver = changed.get('sharedObserver');
            oldObserver === null || oldObserver === void 0 ? void 0 : oldObserver.removeObserver(this.resizeObserverConfig);
            this.setResizeObserver();
        }
    }
    /** Shared observer */
    handleResize(entry) {
        const { width } = entry.contentRect;
        if (width <= 600) {
            this.openMenuState = 'overlay';
            return;
        }
        this.openMenuState = 'shift';
    }
    setResizeObserver() {
        var _a, _b;
        (_a = this.sharedObserver) === null || _a === void 0 ? void 0 : _a.addObserver(this.resizeObserverConfig);
        (_b = this.sharedObserver) === null || _b === void 0 ? void 0 : _b.addObserver({
            target: this.headerSlot,
            handler: {
                handleResize: ({ contentRect }) => {
                    if (contentRect.height) {
                        this.requestUpdate();
                    }
                },
            },
        });
    }
    removeResizeObserver() {
        var _a;
        (_a = this.sharedObserver) === null || _a === void 0 ? void 0 : _a.removeObserver(this.resizeObserverConfig);
    }
    get resizeObserverConfig() {
        return {
            handler: this,
            target: this.frame,
        };
    }
    /** End shared observer */
    get loaderTitle() {
        return this.viewportInFullscreen ? 'Internet Archive' : '';
    }
    get loadingArea() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <div class="loading-area">
        <div class="loading-view">
          <ia-itemnav-loader .title=${this.loaderTitle}></ia-itemnav-loader>
        </div>
      </div>
    `;
    }
    slotChange(e, type) {
        var _a;
        const slottedContent = (_a = e.target.assignedNodes()) === null || _a === void 0 ? void 0 : _a[0];
        this.dispatchEvent(new CustomEvent('slotChange', {
            detail: { slot: slottedContent, type },
        }));
        this.requestUpdate();
    }
    render() {
        var _a, _b;
        const displayReaderClass = this.loaded ? '' : 'hidden';
        const headerHeight = ((_b = (_a = this.headerSlot) === null || _a === void 0 ? void 0 : _a.assignedNodes()[0]) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <div id="frame" class=${this.menuClass}>
        <slot
          name="header"
          style=${`height: ${headerHeight}px`}
          @slotchange=${(e) => this.slotChange(e, 'header')}
        ></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu ? this.renderSideMenu : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
          <div id="reader" class=${displayReaderClass}>
            ${this.renderViewport}
          </div>
          ${!this.loaded ? this.loadingArea : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
      </div>
    `;
    }
    get noTheaterView() {
        var _a, _b;
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `<ia-no-theater-available
      .identifier=${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.identifier}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-no-theater-available>`;
    }
    get renderViewport() {
        if (!this.viewAvailable) {
            return this.noTheaterView;
        }
        const slotVisibility = !this.loaded ? 'opacity: 0;' : 'opacity: 1;';
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <div slot="main" style=${slotVisibility}>
        <slot
          name="main"
          @slotchange=${(e) => this.slotChange(e, 'main')}
        ></slot>
      </div>
    `;
    }
    loadingStateUpdated(e) {
        const { loaded } = e.detail;
        this.loaded = loaded || null;
    }
    /** Fullscreen Management */
    manageViewportFullscreen(e) {
        const fullscreenStatus = !!e.detail.isFullScreen;
        this.viewportInFullscreen = !fullscreenStatus ? null : fullscreenStatus;
        const event = new CustomEvent('fullscreenToggled', {
            detail: e.detail,
        });
        this.dispatchEvent(event);
    }
    /** End Fullscreen Management */
    /** Side menu */
    get shouldRenderMenu() {
        var _a;
        return !!((_a = this.menuContents) === null || _a === void 0 ? void 0 : _a.length);
    }
    toggleMenu() {
        this.menuOpened = !this.menuOpened;
    }
    closeMenu() {
        this.menuOpened = false;
    }
    setOpenMenu(e) {
        const { id } = e.detail;
        this.openMenu = id !== this.openMenu ? id : undefined;
    }
    setMenuContents(e) {
        const updatedContents = [...e.detail];
        this.menuContents = updatedContents;
    }
    setMenuShortcuts(e) {
        this.menuShortcuts = [...e.detail];
    }
    /** Toggles Side Menu & Sets viewable subpanel  */
    manageSideMenuEvents(e) {
        const { menuId, action } = e.detail;
        if (!menuId) {
            return;
        }
        if (action === 'open') {
            this.openShortcut(menuId);
        }
        else if (action === 'toggle') {
            this.openMenu = menuId;
            this.toggleMenu();
        }
    }
    get menuToggleButton() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <button
        class="toggle-menu"
        @click=${this.toggleMenu}
        title="Toggle theater side panels"
      >
        <div>
          <ia-icon-ellipses
            style="width: var(--iconWidth); height: var(--iconHeight);"
          ></ia-icon-ellipses>
        </div>
      </button>
    `;
    }
    get selectedMenuId() {
        return this.openMenu || '';
    }
    get renderSideMenu() {
        const drawerState = this.menuOpened ? '' : 'hidden';
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        <div id="menu" class=${drawerState}>
          <ia-menu-slider
            .menus=${this.menuContents}
            .selectedMenu=${this.selectedMenuId}
            @menuTypeSelected=${this.setOpenMenu}
            @menuSliderClosed=${this.closeMenu}
            manuallyHandleClose
            open
          ></ia-menu-slider>
        </div>
      </nav>
    `;
    }
    /** End Side menu */
    /** Menu Shortcuts */
    openShortcut(selectedMenuId = '') {
        this.openMenu = selectedMenuId;
        this.menuOpened = true;
    }
    get shortcuts() {
        const shortcuts = this.menuShortcuts.map(({ icon, id }) => {
            if (id === 'fullscreen') {
                return lit__WEBPACK_IMPORTED_MODULE_1__.html `${icon}`;
            }
            return lit__WEBPACK_IMPORTED_MODULE_1__.html `
        <button class="shortcut ${id}" @click="${() => this.openShortcut(id)}">
          ${icon}
        </button>
      `;
        });
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `<div class="shortcuts">${shortcuts}</div>`;
    }
    /** End Menu Shortcuts */
    /** Misc Render */
    get menuClass() {
        var _a, _b;
        const hasMenuOrShortcuts = ((_a = this.menuContents) === null || _a === void 0 ? void 0 : _a.length) || ((_b = this.menuShortcuts) === null || _b === void 0 ? void 0 : _b.length);
        const drawerState = this.menuOpened && hasMenuOrShortcuts ? 'open' : '';
        const fullscreenState = this.viewportInFullscreen ? 'fullscreen' : '';
        return `${drawerState} ${fullscreenState} ${this.openMenuState}`;
    }
    static get styles() {
        const subnavWidth = lit__WEBPACK_IMPORTED_MODULE_1__.css `var(--menuWidth, 320px)`;
        const transitionTiming = lit__WEBPACK_IMPORTED_MODULE_1__.css `var(--animationTiming, 200ms)`;
        const transitionEffect = lit__WEBPACK_IMPORTED_MODULE_1__.css `transform ${transitionTiming} ease-out`;
        const menuMargin = lit__WEBPACK_IMPORTED_MODULE_1__.css `var(--theaterMenuMargin, 42px)`;
        const theaterBg = lit__WEBPACK_IMPORTED_MODULE_1__.css `var(--theaterBgColor, #000)`;
        return lit__WEBPACK_IMPORTED_MODULE_1__.css `
      :host,
      #frame,
      .menu-and-reader {
        position: relative;
        overflow: hidden;
        display: block;
      }

      :host,
      #frame,
      .loading-area,
      .loading-view {
        min-height: inherit;
        height: inherit;
      }

      slot {
        display: block;
        width: 100%;
      }

      slot * {
        display: block;
        height: inherit;
      }

      #frame {
        background-color: ${theaterBg};
        color-scheme: dark;
        display: flex;
        flex-direction: column;
      }

      #frame.fullscreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }

      .loading-view {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-area {
        width: 100%;
      }

      ia-itemnav-loader {
        display: block;
        width: 100%;
      }

      .hidden {
        display: none !important;
      }

      button {
        cursor: pointer;
        padding: 0;
        border: 0;
      }

      button:focus,
      button:active {
        outline: none;
      }

      .menu-and-reader {
        position: relative;
        display: flex;
        flex: 1;
      }

      nav button {
        background: none;
      }

      nav .minimized {
        background: rgba(0, 0, 0, 0.7);
        padding-top: 6px;
        position: absolute;
        width: ${menuMargin};
        z-index: 2;
        left: 0;
        border-bottom-right-radius: 5%;
      }

      nav .minimized button {
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin-bottom: 0.2rem;
        margin: auto;
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: ${menuMargin};
        height: ${menuMargin};
      }

      nav .minimized button.toggle-menu > * {
        border: 2px solid var(--iconStrokeColor);
        border-radius: var(--iconWidth);
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
      }

      ia-icon-ellipses {
        width: var(--iconWidth);
        height: var(--iconHeight);
      }

      #menu {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
        transform: translateX(-${subnavWidth});
        width: ${subnavWidth};
        transform: translateX(calc(${subnavWidth} * -1));
        transition: ${transitionEffect};
      }

      #reader {
        position: relative;
        z-index: 1;
        transform: translateX(0);
        width: 100%;
        display: flex;
      }

      #reader > * {
        width: 100%;
        display: flex;
        flex: 1;
      }

      .open.overlay #reader {
        transition: none;
      }

      .open #menu {
        width: ${subnavWidth};
        transform: translateX(0);
        transition: ${transitionEffect};
      }

      .open.shift #reader {
        width: calc(100% - ${subnavWidth});
        margin-left: ${subnavWidth};
        transition: ${transitionEffect};
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({
        type: Object,
        converter: (value) => {
            if (value && typeof value === 'string') {
                return new _internetarchive_search_service__WEBPACK_IMPORTED_MODULE_3__.MetadataResponse(JSON.parse(atob(value)));
            }
            return value;
        },
    })
], ItemNavigator.prototype, "item", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Boolean })
], ItemNavigator.prototype, "viewAvailable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: String })
], ItemNavigator.prototype, "baseHost", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({
        converter: (arg) => {
            if (typeof arg === 'boolean') {
                return arg;
            }
            return arg === 'true';
        },
    })
], ItemNavigator.prototype, "signedIn", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Array })
], ItemNavigator.prototype, "menuContents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Array })
], ItemNavigator.prototype, "menuShortcuts", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Boolean, reflect: true, attribute: true })
], ItemNavigator.prototype, "viewportInFullscreen", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Boolean })
], ItemNavigator.prototype, "menuOpened", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: String })
], ItemNavigator.prototype, "openMenu", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ attribute: false })
], ItemNavigator.prototype, "modal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ attribute: false })
], ItemNavigator.prototype, "sharedObserver", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Boolean, reflect: true, attribute: true })
], ItemNavigator.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)()
], ItemNavigator.prototype, "openMenuState", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.query)('#frame')
], ItemNavigator.prototype, "frame", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.query)('slot[name="header"]')
], ItemNavigator.prototype, "headerSlot", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.query)('slot[name="main"]')
], ItemNavigator.prototype, "mainSlot", void 0);
ItemNavigator = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.customElement)('ia-item-navigator')
], ItemNavigator);

//# sourceMappingURL=item-navigator.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/loader.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAItemNavLoader": function() { return /* binding */ IAItemNavLoader; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");

/* eslint-disable class-methods-use-this */


let IAItemNavLoader = class IAItemNavLoader extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    static get properties() {
        return {
            title: { type: String },
        };
    }
    get bookIconSvg() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.svg `
      <g class="bookIcon" transform="matrix(1 0 0 -1 28 67.362264)">
        <path d="m44.71698 31.6981124v-29.99320678s-18.0956599.30735848-18.6322637-.7171698c-.0633962-.12226414-1.890566-.59207545-2.9745282-.59207545-1.3228302 0-3.5122641 0-4.1286791.74547168-.9707547 1.17452827-18.82811278.71660375-18.82811278.71660375v30.040754l1.83849052.7867924.29094339-28.48188608s15.94981097.15339622 17.09094297-1.10716978c.8145283-.90056602 4.997547-.91641507 5.3450942-.3526415.9611321 1.55716977 14.7101883 1.31716978 17.6077354 1.45981128l.3266038 28.22830118z"/>
        <path d="m40.1129424 33.5957539h-12.8337733c-1.8690565 0-3.1098112-.7545283-3.9299999-1.6279245v-26.70452764l1.2362264-.00792453c.4584906.72962262 3.0922641 1.39415091 3.0922641 1.39415091h10.1298111s1.0381131.01754717 1.5141509.47377357c.5643396.54056602.7913207 1.36981129.7913207 1.36981129z"/>
        <path d="m17.3354713 33.5957539h-12.8337733v-25.37660316s0-.75283017.49358489-1.14113205c.52867924-.41433961 1.3415094-.42849055 1.3415094-.42849055h10.59905631s2.2075471-.52698112 3.0928301-1.39415091l1.2.00792453v26.74245214c-.8201886.8581132-2.0530188 1.59-3.8932074 1.59"/>
      </g>
    `;
    }
    get icon() {
        return this.bookIconSvg;
    }
    get loader() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.svg `
    <svg
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="item-loading"
    >
      <title id="item-loading">Currently loading viewer.</title>
      <desc>Please wait while we load theater.</desc>
      <g fill="#333" fill-rule="evenodd" class="book-icon">
        ${this.icon}
        <path
          class="ring"
          d="m17.8618849 11.6970233c18.5864635-15.59603144 45.6875867-15.59603102 64.2740497.000001 1.9271446 1.6170806 2.1785128 4.4902567.5614466 6.4174186-1.6170661 1.9271618-4.4902166 2.1785323-6.4173612.5614517-15.1996922-12.75416882-37.3625282-12.75416916-52.5622206-.000001-15.19969387 12.7541707-19.04823077 34.5805019-9.1273354 51.7641499 9.9208955 17.183646 30.7471499 24.7638499 49.3923323 17.9774983 18.6451823-6.7863521 29.7266014-25.9801026 26.2811129-45.5206248-.436848-2.4775114 1.2174186-4.8400696 3.6949079-5.2769215 2.4774893-.4368518 4.8400264 1.2174296 5.2768744 3.694941 4.2132065 23.8945096-9.3373563 47.3649806-32.137028 55.6634567-22.799672 8.2984758-48.2663986-.9707372-60.39785211-21.9832155-12.1314534-21.012481-7.42539173-47.7021198 11.16107351-63.2981544z"
          fill-rule="nonzero"
        />
      </g>
    </svg>
    `;
    }
    render() {
        const title = this.title ? lit__WEBPACK_IMPORTED_MODULE_1__.html `<h2>${this.title}</h2>` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing;
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <div class="place-holder">
        ${title} ${this.loader}
        <h3>Loading viewer</h3>
      </div>
    `;
    }
    static get styles() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.css `
      .place-holder {
        width: 30%;
        margin: auto;
        text-align: center;
        color: var(--primaryTextColor);
      }

      .place-holder {
        position: relative;
      }

      .place-holder svg {
        display: block;
        width: 60%;
        max-width: 100px;
        height: auto;
        margin: auto;
      }

      svg * {
        fill: var(--primaryTextColor);
      }

      svg .ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
        display: block; // transform won't work on inline style
      }

      @keyframes rotate {
        0% {
          -moz-transform: rotate(-360deg);
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
    `;
    }
};
IAItemNavLoader = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.customElement)('ia-itemnav-loader')
], IAItemNavLoader);

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/no-theater-available.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/no-theater-available.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IANoTheaterAvailable": function() { return /* binding */ IANoTheaterAvailable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");



let IANoTheaterAvailable = class IANoTheaterAvailable extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.identifier = '';
    }
    emitLoaded() {
        this.dispatchEvent(new CustomEvent('loadingStateUpdated', {
            detail: { loaded: true },
        }));
    }
    updated(changed) {
        if (changed.has('identifier')) {
            this.emitLoaded();
        }
    }
    get downloadUrl() {
        return `/download/${this.identifier}`;
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
      <section>
        <h2>THERE IS NO PREVIEW AVAILABLE FOR THIS ITEM</h2>
        <p>
          This item does not appear to have any files that can be experienced on
          Archive.org. <br />
          Please download files in this item to interact with them on your
          computer.
        </p>
        <a href=${this.downloadUrl}>Show all files</a>
      </section>
    `;
    }
    static get styles() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.css `
      :host {
        color: var(--primaryTextColor, #fff);
        text-align: center;
      }
      section {
        width: 100%;
        margin: 5%;
        padding: 0 5%;
      }
      p {
        font-size: 1.4rem;
      }
      a {
        color: var(--primaryTextColor, #fff);
        background-color: rgb(25, 72, 128);
        min-height: 35px;
        outline: none;
        cursor: pointer;
        line-height: normal;
        border-radius: 0.4rem;
        text-align: center;
        vertical-align: middle;
        font-size: 1.4rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        display: inline-block;
        padding: 0.85rem 1.2rem;
        border: 1px solid rgb(197, 209, 223);
        white-space: nowrap;
        appearance: auto;
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: String })
], IANoTheaterAvailable.prototype, "identifier", void 0);
IANoTheaterAvailable = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.customElement)('ia-no-theater-available')
], IANoTheaterAvailable);

//# sourceMappingURL=no-theater-available.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-menu-slider/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-menu-slider/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAMenuSlider": function() { return /* reexport safe */ _src_ia_menu_slider_js__WEBPACK_IMPORTED_MODULE_0__.IAMenuSlider; }
/* harmony export */ });
/* harmony import */ var _src_ia_menu_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ia-menu-slider.js */ "./node_modules/@internetarchive/ia-menu-slider/src/ia-menu-slider.js");



/***/ }),

/***/ "./node_modules/@internetarchive/ia-menu-slider/src/ia-menu-slider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-menu-slider/src/ia-menu-slider.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAMenuSlider": function() { return /* binding */ IAMenuSlider; }
/* harmony export */ });
/* harmony import */ var lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/html.js */ "./node_modules/lit/html.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_menu_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/menu-slider.js */ "./node_modules/@internetarchive/ia-menu-slider/src/styles/menu-slider.js");
/* harmony import */ var _internetarchive_icon_collapse_sidebar_icon_collapse_sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js */ "./node_modules/@internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js");
/* harmony import */ var _menu_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-button.js */ "./node_modules/@internetarchive/ia-menu-slider/src/menu-button.js");






const sliderEvents = {
  closeDrawer: 'menuSliderClosed',
};
class IAMenuSlider extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return _styles_menu_slider_js__WEBPACK_IMPORTED_MODULE_2__.default;
  }

  static get properties() {
    return {
      menus: { type: Array },
      open: { type: Boolean },
      manuallyHandleClose: { type: Boolean },
      selectedMenu: { type: String },
      selectedMenuAction: { type: Object },
      animateMenuOpen: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.menus = [];
    this.open = false;
    this.selectedMenu = '';
    this.selectedMenuAction = lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    this.animateMenuOpen = false;
    this.manuallyHandleClose = false;
  }

  updated() {
    const { actionButton } = this.selectedMenuDetails || {};
    const actionButtonHasChanged = actionButton !== this.selectedMenuAction;
    if (actionButtonHasChanged) {
      this.selectedMenuAction = actionButton || lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
  }

  /**
   * Event handler, captures state of selected menu
   * @param { CustomEvent } event
   */
  setSelectedMenu({ detail }) {
    const { id } = detail;
    this.selectedMenu = this.selectedMenu === id ? '' : id;
    const { actionButton } = this.selectedMenuDetails || {};
    this.selectedMenuAction = actionButton || lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
  }

  /**
   * closes menu drawer
   */
  closeMenu() {
    if (!this.manuallyHandleClose) {
      this.open = false;
    }
    const { closeDrawer } = sliderEvents;
    const drawerClosed = new CustomEvent(closeDrawer, {
      detail: this.selectedMenuDetails,
    });
    this.dispatchEvent(drawerClosed);
  }

  get selectedMenuDetails() {
    const selectedMenu = this.menus.find(menu => menu.id === this.selectedMenu);
    return selectedMenu;
  }

  get selectedMenuComponent() {
    const menuItem = this.selectedMenuDetails;
    return menuItem && menuItem.component ? menuItem.component : lit__WEBPACK_IMPORTED_MODULE_1__.html``;
  }

  /* render */

  get sliderDetailsClass() {
    const animate = this.animateMenuOpen ? 'animate' : '';
    const state = this.open ? 'open' : '';
    return `${animate} ${state}`;
  }

  get selectedMenuClass() {
    return this.selectedMenu ? 'open' : '';
  }

  get menuItems() {
    return this.menus.map(menu => (
      lit__WEBPACK_IMPORTED_MODULE_1__.html`
        <li>
          <menu-button
            @menuTypeSelected=${this.setSelectedMenu}
            .icon=${menu.icon}
            .label=${menu.label}
            .menuDetails=${menu.menuDetails}
            .id=${menu.id}
            .selected=${menu.id === this.selectedMenu}
            .followable=${menu.followable}
            .href=${menu.href}
          ></menu-button>
        </li>
      `
    ));
  }

  get renderMenuHeader() {
    const { label = '', menuDetails = '' } = this.selectedMenuDetails || {};
    const headerClass = this.selectedMenuAction ? 'with-secondary-action' : '';
    const actionBlock = this.selectedMenuAction
      ? lit__WEBPACK_IMPORTED_MODULE_1__.html`<span class="custom-action">${this.selectedMenuAction}</span>`
      : lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    return lit__WEBPACK_IMPORTED_MODULE_1__.html`
      <header class="${headerClass}">
        <div class="details">
          <h3>${label}</h3>
          <span class="extra-details">${menuDetails}</span>
        </div>
        ${actionBlock}
        ${this.closeButton}
      </header>
    `;
  }

  get closeButton() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.html`
      <button class="close" aria-label="Close this menu" @click=${this.closeMenu}>
        <ia-icon-collapse-sidebar></ia-icon-collapse-sidebar>
      </button>
    `;
  }

  /** @inheritdoc */
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.html`
      <div class="main">
      <div class="menu ${this.sliderDetailsClass}">
        ${this.closeButton}
        <ul class="menu-list">
          ${this.menuItems}
        </ul>
        <div class="content ${this.selectedMenuClass}" @menuTypeSelected=${this.setSelectedMenu}>
          ${this.renderMenuHeader}
          <section>
            <div class="selected-menu">
              ${this.selectedMenuComponent}
            </div>
          </section>
        </div>
      </div>
      </div>
    `;
  }
}

window.customElements.define('ia-menu-slider', IAMenuSlider);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-menu-slider/src/menu-button.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-menu-slider/src/menu-button.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_menu_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/menu-button.js */ "./node_modules/@internetarchive/ia-menu-slider/src/styles/menu-button.js");



class MenuButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return _styles_menu_button_js__WEBPACK_IMPORTED_MODULE_1__.default;
  }

  static get properties() {
    return {
      icon: { type: String },
      href: { type: String },
      label: { type: String },
      menuDetails: { type: String },
      id: { type: String },
      selected: { type: Boolean },
      followable: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.icon = '';
    this.href = '';
    this.label = '';
    this.menuDetails = '';
    this.id = '';
    this.selected = false;
    this.followable = false;
  }

  onClick(e) {
    e.preventDefault();
    this.dispatchMenuTypeSelectedEvent();
  }

  dispatchMenuTypeSelectedEvent() {
    this.dispatchEvent(new CustomEvent('menuTypeSelected', {
      bubbles: true,
      composed: true,
      detail: {
        id: this.id,
      },
    }));
  }

  get buttonClass() {
    return this.selected ? 'selected' : '';
  }

  get iconClass() {
    return this.selected ? 'active' : '';
  }

  get menuItem() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <span class="icon ${this.iconClass}">
        ${this.icon}
      </span>
      <span class="label">${this.label}</span>
      <span class="menu-details">${this.menuDetails}</span>
    `;
  }

  get linkButton() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <a
        href="${this.href}"
        class="menu-item ${this.buttonClass}"
        @click=${this.followable ? undefined : this.onClick}
      >${this.menuItem}</a>
    `;
  }

  get clickButton() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <button
        class="menu-item ${this.buttonClass}"
        @click=${this.onClick}
      >
        ${this.menuItem}
      </button>
  `;
  }

  render() {
    return this.href ? this.linkButton : this.clickButton;
  }
}

customElements.define('menu-button', MenuButton);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-menu-slider/src/styles/menu-button.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-menu-slider/src/styles/menu-button.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.css`
  a {
    display: inline-block;
    text-decoration: none;
  }

  .menu-item {
    display: inline-flex;
    width: 100%;
    padding: 0;
    font-size: 1.6rem;
    text-align: left;
    background: transparent;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  button.menu-item {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .menu-item:focus {
    outline: none;
  }

  .label {
    display: var(--menuButtonLabelDisplay, none);
    padding: 0;
    font-weight: 400;
    color: var(--primaryTextColor);
    text-align: left;
    vertical-align: middle;
    margin-left: 1rem;
  }

  .menu-details {
    color: var(--primaryTextColor);
    display: inline-block;
    margin-left: .5rem;
    font-style: italic;
    font-size: 1.5rem;
  }

  .menu-item > .icon {
    position: relative;
    display: inline-flex;
    z-index: 2;
    min-width: 4.2rem;
    max-width: 4.2rem;
    height: 4.2rem;
    vertical-align: middle;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .menu-item.selected .icon {
    background-color: var(--activeButtonBg);
    border-radius: 1rem 0 0 1rem;
  }

  .icon .fill-color {
    fill: #999;
  }

  .icon.active .fill-color {
    fill: #fff;
  }
`);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-menu-slider/src/styles/menu-slider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-menu-slider/src/styles/menu-slider.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


const menuButtonWidth = lit__WEBPACK_IMPORTED_MODULE_0__.css`42px`;
const sliderWidth = lit__WEBPACK_IMPORTED_MODULE_0__.css`var(--menuWidth, 320px)`;
const transitionTiming = lit__WEBPACK_IMPORTED_MODULE_0__.css`var(--animationTiming, 200ms)`;

/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${transitionTiming} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${sliderWidth};
    padding: .5rem .5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${sliderWidth} * -1));
  }

  .menu > button.close {
    right: 0.7rem;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  header {
    margin: 0 0 .5rem 0;
  }

  header * {
    margin: 0;
    display: inline-block;
  }
  header button {
    outline: none;
    cursor: pointer;
  }

  header.with-secondary-action .details {
    width: 80%;
  }

  header .details {
    font-weight: bold;
    width: 88%;
  }

  header .custom-action > *,
  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    --iconWidth: var(--menuSliderHeaderIconWidth);
    --iconHeight: var(--menuSliderHeaderIconHeight);
  }

  header .custom-action,
  button.close {
    position: absolute;
  }
  button.close {
    right: .5rem;
  }

  button.close * {
    float: right;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${menuButtonWidth};
    z-index: 1;
    transform: translateX(calc(${sliderWidth} * -1));
    transition: transform ${transitionTiming} ease-out;
    background: var(--activeButtonBg);
    border-right: .2rem solid;
    border-color: var(--subpanelRightBorderColor);
    padding: .5rem 0 0 .5rem;
  }

  .open {
    transform: translateX(0);
  }

  .menu-list {
    padding: 0;
    margin: 0;
    list-style: none;
    background: var(--menuSliderBg);
  }
  .menu-list li {
    margin-bottom: .2rem;
  }

  .content section {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .content .selected-menu {
    overflow: auto;
    height: inherit;
    position: relative;
  }

  .content .selected-menu > * {
    display: block;
    padding-bottom: 3rem;
    position: relative;
  }
`);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IASharingOptions": function() { return /* reexport safe */ _src_ia_sharing_options_js__WEBPACK_IMPORTED_MODULE_0__.IASharingOptions; }
/* harmony export */ });
/* harmony import */ var _src_ia_sharing_options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ia-sharing-options.js */ "./node_modules/@internetarchive/ia-sharing-options/src/ia-sharing-options.js");



/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/ia-sharing-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/ia-sharing-options.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IASharingOptions": function() { return /* binding */ IASharingOptions; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _internetarchive_icon_link_icon_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-link/icon-link.js */ "./node_modules/@internetarchive/icon-link/icon-link.js");
/* harmony import */ var _styles_ia_sharing_options_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ia-sharing-options.js */ "./node_modules/@internetarchive/ia-sharing-options/src/styles/ia-sharing-options.js");
/* harmony import */ var _providers_email_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/email.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/email.js");
/* harmony import */ var _providers_facebook_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/facebook.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/facebook.js");
/* harmony import */ var _providers_pinterest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/pinterest.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/pinterest.js");
/* harmony import */ var _providers_tumblr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/tumblr.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/tumblr.js");
/* harmony import */ var _providers_twitter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/twitter.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/twitter.js");











const copyToClipboard = ({ currentTarget }) => {
  const textarea = currentTarget.querySelector('textarea');
  const note = currentTarget.querySelector('small');
  textarea.select();
  document.execCommand('copy');
  textarea.blur();
  note.classList.add('visible');
  clearTimeout(note.timeout);
  note.timeout = setTimeout(() => note.classList.remove('visible'), 4000);
};

class IASharingOptions extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return _styles_ia_sharing_options_js__WEBPACK_IMPORTED_MODULE_4__.default;
  }

  static get properties() {
    return {
      baseHost: { type: String },
      creator: { type: String },
      description: { type: String },
      embedOptionsVisible: { type: Boolean },
      identifier: { type: String },
      sharingOptions: { type: Array },
      type: { type: String },
      renderHeader: { type: Boolean },
      fileSubPrefix: { type: String },
    };
  }

  constructor() {
    super();
    this.baseHost = '';
    this.sharingOptions = [];
    this.fileSubPrefix = '';
  }

  firstUpdated() {
    const {
      baseHost,
      creator,
      description,
      identifier,
      type,
      fileSubPrefix,
    } = this;
    const params = {
      baseHost,
      creator,
      description,
      identifier,
      type,
      fileSubPrefix,
    };

    this.sharingOptions = [
      new _providers_twitter_js__WEBPACK_IMPORTED_MODULE_9__.default(params),
      new _providers_facebook_js__WEBPACK_IMPORTED_MODULE_6__.default(params),
      new _providers_tumblr_js__WEBPACK_IMPORTED_MODULE_8__.default(params),
      new _providers_pinterest_js__WEBPACK_IMPORTED_MODULE_7__.default(params),
      new _providers_email_js__WEBPACK_IMPORTED_MODULE_5__.default(params),
    ];
  }

  get sharingItems() {
    return this.sharingOptions.map(option => (
      lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<li>
        <a class="${option.class}" href="${option.url}" target="_blank">
          ${option.icon}
          ${option.name}
        </a>
      </li>`
    ));
  }

  get embedOption() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<li>
      <a href="#" @click=${this.toggleEmbedOptions}>
        <ia-icon-link></ia-icon-link>
        Get an embeddable link
      </a>
    </li>`;
  }

  get iframeEmbed() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.html`&lt;iframe src="https://${this.baseHost}/embed/${this.identifier}" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen&gt;&lt;/iframe&gt;`;
  }

  get bbcodeEmbed() {
    return `[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`;
  }

  get helpURL() {
    return `https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`;
  }

  toggleEmbedOptions(e) {
    e.preventDefault();
    this.embedOptionsVisible = !this.embedOptionsVisible;
  }

  get header() {
    const header = lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<header><h3>Share this ${this.type}</h3></header>`;
    return this.renderHeader ? header : lit_html__WEBPACK_IMPORTED_MODULE_2__.nothing;
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.html`
      ${this.header}
      <ul>
        ${this.sharingItems}
        ${this.embedOption}
        <div class=${(0,lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_0__.classMap)({ visible: this.embedOptionsVisible, embed: true })}>
          <h4>Embed</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly="readonly">${this.iframeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <h4>Embed for wordpress.com hosted blogs and archive.org item &lt;description&gt; tags</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly="readonly">${this.bbcodeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <p>Want more? <a href=${this.helpURL}>Advanced embedding details, examples, and help</a>!</p>
        </div>
      </ul>
    `;
  }
}

customElements.define('ia-sharing-options', IASharingOptions);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/providers/email.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/providers/email.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_email_icon_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-email/icon-email */ "./node_modules/@internetarchive/icon-email/icon-email.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js");




/* harmony default export */ __webpack_exports__["default"] = (class extends _provider_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(params) {
    super(params);
    this.name = 'Email';
    this.icon = lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<ia-icon-email></ia-icon-email>`;
    this.class = 'email';
  }

  get url() {
    return `mailto:?body=https://${this.baseHost}/details/${this.itemPath}&subject=${this.description} : ${this.creator}${this.promoCopy}`;
  }
});


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/providers/facebook.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/providers/facebook.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_facebook_icon_facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-facebook/icon-facebook */ "./node_modules/@internetarchive/icon-facebook/icon-facebook.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js");




/* harmony default export */ __webpack_exports__["default"] = (class extends _provider_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(params) {
    super(params);
    this.name = 'Facebook';
    this.icon = lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<ia-icon-facebook></ia-icon-facebook>`;
    this.class = 'facebook';
  }

  get url() {
    return `https://www.facebook.com/sharer/sharer.php?u=https://${this.baseHost}/details/${this.itemPath}`;
  }
});


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/providers/pinterest.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/providers/pinterest.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_pinterest_icon_pinterest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-pinterest/icon-pinterest */ "./node_modules/@internetarchive/icon-pinterest/icon-pinterest.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js");




/* harmony default export */ __webpack_exports__["default"] = (class extends _provider_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(params) {
    super(params);
    this.name = 'Pinterest';
    this.icon = lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<ia-icon-pinterest></ia-icon-pinterest>`;
    this.class = 'pinterest';
  }

  get url() {
    return `http://www.pinterest.com/pin/create/button/?url=https://${this.baseHost}/details/${this.itemPath}&description=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
});


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable class-methods-use-this */
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(params) {
    this.promoCopy = ' : Free Download, Borrow, and Streaming : Internet Archive';
    Object.assign(this, params);
  }

  get encodedDescription() {
    return this.encodeString(this.description);
  }

  get encodedCreator() {
    return this.encodeString(this.creator);
  }

  get encodedPromoCopy() {
    return this.encodeString(this.promoCopy);
  }

  get itemPath() {
    const encodedFileSubPrefix = this.fileSubPrefix ? encodeURIComponent(this.fileSubPrefix) : '';
    return encodedFileSubPrefix ? `${this.identifier}/${encodedFileSubPrefix}` : this.identifier;
  }

  encodeString(str) {
    return encodeURIComponent(str.replace(/\s/g, '+')).replace(/%2B/g, '+');
  }
});


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/providers/tumblr.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/providers/tumblr.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_tumblr_icon_tumblr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-tumblr/icon-tumblr */ "./node_modules/@internetarchive/icon-tumblr/icon-tumblr.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js");




/* harmony default export */ __webpack_exports__["default"] = (class extends _provider_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(params) {
    super(params);
    this.name = 'Tumblr';
    this.icon = lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<ia-icon-tumblr></ia-icon-tumblr>`;
    this.class = 'tumblr';
  }

  get url() {
    return `https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2F${this.baseHost}%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&name=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
});


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/providers/twitter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/providers/twitter.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_twitter_icon_twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-twitter/icon-twitter */ "./node_modules/@internetarchive/icon-twitter/icon-twitter.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider.js */ "./node_modules/@internetarchive/ia-sharing-options/src/providers/provider.js");




/* harmony default export */ __webpack_exports__["default"] = (class extends _provider_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(params) {
    super(params);
    this.name = 'Twitter';
    this.icon = lit_element__WEBPACK_IMPORTED_MODULE_1__.html`<ia-icon-twitter></ia-icon-twitter>`;
    this.class = 'twitter';
  }

  get url() {
    return `https://twitter.com/intent/tweet?url=https://${this.baseHost}/details/${this.itemPath}&via=internetarchive&text=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
});


/***/ }),

/***/ "./node_modules/@internetarchive/ia-sharing-options/src/styles/ia-sharing-options.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-sharing-options/src/styles/ia-sharing-options.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_element__WEBPACK_IMPORTED_MODULE_0__.css`
:host {
  display: block;
  height: 100%;
  overflow-y: auto;
  font-size: 1.4rem;
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: baseline;
}

h3 {
  padding: 0;
  margin: 0 1rem 0 0;
  font-size: 1.6rem;
}

h4 {
  font-size: 1.4rem;
}

ul {
  padding: 0 0 2rem 0;
  list-style: none;
}

li {
  padding: 0 0 1rem 0;
}

li a {
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--shareLinkColor);
}

li a * {
  display: inline-block;
  padding: .2rem;
  margin-right: 1rem;
  vertical-align: middle;
  border: 1px solid var(--shareIconBorder);
  border-radius: 7px;
  background: var(--shareIconBg);
}

.embed {
  display: none;
}
.embed.visible {
  display: block;
  width: 95%;
}

.embed a {
  color: var(--shareLinkColor);
}

.code {
  position: relative;
}

textarea {
  display: block;
  width: 100%;
  height: 120px;
  padding: .8rem 1rem;
  box-sizing: border-box;
  resize: none;
  cursor: pointer;
  font: normal 1.4rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--textareaColor, #fff);
  background: var(--textareaBg, #151515);
}

small {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  padding: .5rem 1rem;
  box-sizing: border-box;
  font: normal 1.2rem/2rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--textareaBg, #151515);
  background: var(--textareaColor, #fff);
  opacity: 0;
  transition: opacity 300ms linear;
}
small.visible {
  opacity: 1;
}
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-bookmark/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-bookmark/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAIconBookmark": function() { return /* reexport safe */ _src_icon_bookmark_js__WEBPACK_IMPORTED_MODULE_0__.IAIconBookmark; }
/* harmony export */ });
/* harmony import */ var _src_icon_bookmark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/icon-bookmark.js */ "./node_modules/@internetarchive/icon-bookmark/src/icon-bookmark.js");



/***/ }),

/***/ "./node_modules/@internetarchive/icon-bookmark/src/icon-bookmark.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-bookmark/src/icon-bookmark.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAIconBookmark": function() { return /* binding */ IAIconBookmark; }
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


class IAIconBookmark extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      #hollow,
      #plus,
      #minus {
        display: none;
      }

      .hollow #filled,
      .plus #filled,
      .minus #filled {
        display: none;
      }

      .hollow #hollow,
      .plus #hollow,
      .minus #hollow {
        display: block;
      }

      .plus #plus {
        display: block;
      }

      .minus #minus {
        display: block;
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  static get properties() {
    return {
      state: { type: String },
    };
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class=${this.state}>
        <svg height="24" viewBox="0 0 16 24" width="16" xmlns="http://www.w3.org/2000/svg" aria-labelledby="bookmarkTitleID bookmarDescID"><title id="bookmarkTitleID">Bookmark icon</title><desc id="bookmarkDescID">An outline of the shape of a bookmark</desc><path id="filled" d="m1 0h14c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1z" class="fill-color" fill-rule="evenodd"/><g class="fill-color" fill-rule="evenodd"><path id="hollow" d="m15 0c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1zm-2 2h-10c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v18l6-4.3181818 6 4.3181818v-18c0-.51283584-.3860402-.93550716-.8833789-.99327227z"/><path id="plus" d="m8.75 6v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z" fill-rule="nonzero"/><path id="minus" d="m11 8.25v1.5h-6v-1.5z" fill-rule="nonzero"/></g></svg>
      </div>
    `;
  }
}




/***/ }),

/***/ "./node_modules/@internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-collapse-sidebar/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconCollapseSidebar extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-collapse-sidebar', IAIconCollapseSidebar);

/* harmony default export */ __webpack_exports__["default"] = (IAIconCollapseSidebar);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-collapse-sidebar/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-collapse-sidebar/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="collapseSidebarTitleID collapseSidebarDescID"
>
  <title id="collapseSidebarTitleID">Collapse sidebar</title>
  <desc id="collapseSidebarDescID">A circle with a left pointing chevron</desc>
  <path d="m9 0c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm1.6976167 5.28352881c-.365258-.3556459-.9328083-.37581056-1.32099801-.06558269l-.09308988.0844372-3 3.08108108-.08194436.09533317c-.27484337.36339327-.26799482.87009349.01656959 1.22592581l.084491.09308363 3 2.91891889.09533796.0818904c.3633964.2746544.8699472.2677153 1.2256839-.0167901l.093059-.0844712.0818904-.095338c.2746544-.3633964.2677153-.8699472-.0167901-1.2256839l-.0844712-.093059-2.283355-2.2222741 2.3024712-2.36338332.0819252-.09530804c.2997677-.39632298.2644782-.96313393-.1007797-1.31877983z" fill-rule="evenodd" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-dl/icon-dl.js":
/*!**********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-dl/icon-dl.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-dl/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconDl extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-dl', IAIconDl);

/* harmony default export */ __webpack_exports__["default"] = (IAIconDl);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-dl/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-dl/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="downloadTitleID downloadDescID"
>
  <title id="downloadTitleID">Download icon</title>
  <desc id="downloadDescID">An arrow pointing downward at an empty document tray</desc>
  <g class="fill-color" fill-rule="nonzero">
    <path d="m1.04347826 22c-.57629713 0-1.04347826.4477153-1.04347826 1s.46718113 1 1.04347826 1h21.91304344c.5762972 0 1.0434783-.4477153 1.0434783-1s-.4671811-1-1.0434783-1z"/>
    <path d="m12 0c-.8284271 0-1.5.67526574-1.5 1.50824823v8.0007855h-4.75l6.25 10.49096627 6.25-10.49096627h-4.75v-8.0007855c0-.83298249-.6715729-1.50824823-1.5-1.50824823z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-edit-pencil/icon-edit-pencil.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-edit-pencil/icon-edit-pencil.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-edit-pencil/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconEditPencil extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-edit-pencil', IAIconEditPencil);

/* harmony default export */ __webpack_exports__["default"] = (IAIconEditPencil);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-edit-pencil/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-edit-pencil/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-labelledby="editPencilTitleID editPencilDescID"><title id="editPencilTitleID">Pencil icon</title><desc id="editPencilDescID">An illustration of a pencil, used to represent an edit action</desc><path class="fill-color" d="m15.6111048 9.3708338-9.52237183 9.5222966-5.14363353 1.0897111c-.42296707.0896082-.83849202-.1806298-.92810097-.6035935-.02266463-.1069795-.02266463-.2175207 0-.3245001l1.08971974-5.1435929 9.52237189-9.52229656zm-10.89310224 5.9110366-2.78094924-.5403869-.67567462 3.166657.83033407.8303275 3.16668096-.6756703zm14.82724244-12.05935921c.6114418.61143705.6055516 1.6086709-.0131615 2.22737904l-2.2405581 2.24054036-4.9820147-4.98197536 2.2405581-2.24054036c.618713-.61870814 1.6159506-.62460252 2.2273925-.01316547z" fill-rule="evenodd"/></svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-ellipses/icon-ellipses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-ellipses/icon-ellipses.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-ellipses/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconEllipses extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-ellipses', IAIconEllipses);

/* harmony default export */ __webpack_exports__["default"] = (IAIconEllipses);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-ellipses/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-ellipses/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="ellipsesTitleID ellipsesDescID"
>
  <title id="ellipsesTitleID">Ellipses icon</title>
  <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
  <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-email/icon-email.js":
/*!****************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-email/icon-email.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-email/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconEmail extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-email', IAIconEmail);

/* harmony default export */ __webpack_exports__["default"] = (IAIconEmail);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-email/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-email/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-facebook/icon-facebook.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-facebook/icon-facebook.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-facebook/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconFacebook extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-facebook', IAIconFacebook);

/* harmony default export */ __webpack_exports__["default"] = (IAIconFacebook);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-facebook/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-facebook/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="facebookTitleID facebookDescID">
  <title id="facebookTitleID">Facebook icon</title>
  <desc id="facebookDescID">A lowercase f</desc>
  <path d="m30.91057 19.2442068.2670004-5.3339402h-5.7329237c-.0890001-3.4962895.25183-5.42243459 1.0224903-5.77843514.3560005-.17800028.8004955-.28925046 1.333485-.33375053s1.0442346-.0520853 1.5337353-.02275571c.4895008.02932959 1.045246.01466479 1.6672356-.04399439.0890001-1.59997977.1335002-3.24445961.1335002-4.93343953-2.1633102-.20732987-3.6742898-.28115953-4.5329389-.22148898-2.8146294.17800028-4.7847688 1.25965538-5.9104183 3.2449653-.1780003.3256596-.3261653.68873971-.444495 1.08924034-.1183298.40050062-.2144095.76358074-.2882391 1.08924034-.0738297.32565959-.125915.7848194-.1562559 1.37747942-.030341.59266002-.052591 1.04474028-.0667501 1.35624078-.0141592.3115005-.0217444.8449956-.0227558 1.6004854v1.5777298h-3.8229605v5.3339401h3.8669549v14.622824h5.8224296c0-.3560006-.0146648-1.6819003-.0439944-3.9776994-.0293296-2.295799-.0515796-4.2957737-.0667501-5.9999241s-.0075853-3.2525506.0227557-4.6452005h5.4219289z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-link/icon-link.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-link/icon-link.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-link/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconLink extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-link', IAIconLink);

/* harmony default export */ __webpack_exports__["default"] = (IAIconLink);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-link/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-link/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="linkTitleID linkDescID">
  <title id="linkTitleID">Link icon</title>
  <desc id="linkDescID">Two chain links linked together</desc>
  <path d="m7.80511706 12.3659763c1.2669254-2.2579539 4.09819784-2.9949938 6.41200864-1.7733458l.2295791.12871 1.6067188.9559859 3.5467013-6.31849361c1.2682451-2.26030597 4.104098-2.99652769 6.4192376-1.76952182l.2223501.12488594 3.2168204 1.91103915c2.2770002 1.3527136 3.1866331 4.21502324 2.0564431 6.51290984l-.1198433.2278304-5.2002499 9.2680474c-1.2669254 2.2579539-4.0981978 2.9949938-6.4120086 1.7733458l-.2295791-.12871-1.6096554-.9558482-3.5437647 6.3183559c-1.2682451 2.260306-4.104098 2.9965277-6.41923761 1.7695218l-.22235013-.1248859-3.21682032-1.9110392c-2.27700024-1.3527136-3.18663314-4.2150232-2.05644312-6.5129098l.11984332-.2278304zm13.93955474-5.73311741-3.563271 6.35055051c1.889633 1.4530595 2.5776248 4.0429866 1.5410255 6.156875l-.1223014.2328355-.4183304.7430134 1.6096554.9558483c1.1431442.6791157 2.5155496.3977368 3.1667361-.5628389l.0921501-.1491451 5.2002498-9.2680474c.5752467-1.0252226.2110342-2.4011579-.8559335-3.14755806l-.1742742-.11247814-3.2168203-1.91103915c-1.1402863-.67741793-2.5086889-.39913772-3.1618387.55564729zm-11.79500786 7.00714351-5.20024982 9.2680474c-.57524673 1.0252226-.21103426 2.4011579.85593348 3.1475581l.17427416.1124781 3.21682032 1.9110392c1.14028632.6774179 2.50868892.3991377 3.16183872-.5556473l.0970474-.1563368 3.5622708-6.3513198c-1.8888875-1.4532134-2.5764504-4.042623-1.5400057-6.1561456l.1222818-.2327956.4153938-.7428758-1.6067188-.9559859c-1.1431442-.6791157-2.5155496-.3977368-3.1667361.5628389zm6.97653866 1.5796652-.3817806.6812386c-.5117123.9119895-.2800268 2.1014993.528439 2.8785267l.382717-.6803391c.5119098-.9123415.2798478-2.1024176-.5293754-2.8794262z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-minus/icon-magnify-minus.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-minus/icon-magnify-minus.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-magnify-minus/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconMagnifyMinus extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-magnify-minus', IAIconMagnifyMinus);

/* harmony default export */ __webpack_exports__["default"] = (IAIconMagnifyMinus);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-minus/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-minus/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-minusTitleID magnify-minusDescID"
>
  <title id="magnify-minusTitleID">Zoom out</title>
  <desc id="magnify-minusDescID">Take a look further.</desc>
  <g
    class="fill-color"
    fill="none"
    fill-rule="nonzero"
  >
    <path d="m7 0c3.854149 0 7 3.1458514 7 7 0 1.5717634-.529107 3.020558-1.410156 4.191406.0416324.03077.0808125.0647264.117187.101563l4.335938 4.335937c.3904239.3905071.3904239 1.0235559 0 1.414063-.3905071.3904239-1.0235559.3904239-1.414063 0l-4.335937-4.335938c-.0362414-.0370712-.0695452-.0769047-.09961-.11914-1.171224.882043-2.6206167 1.412109-4.193359 1.412109-3.8541486 0-7-3.145851-7-7 0-3.8541486 3.1458514-7 7-7zm0 2c-2.7732684 0-5 2.2267316-5 5s2.2267316 5 5 5 5-2.2267316 5-5-2.2267316-5-5-5z"/>
    <path d="m10 7.75v-1.5h-6v1.5z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-plus/icon-magnify-plus.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-plus/icon-magnify-plus.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-magnify-plus/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconMagnifyPlus extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-magnify-plus', IAIconMagnifyPlus);

/* harmony default export */ __webpack_exports__["default"] = (IAIconMagnifyPlus);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-plus/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-plus/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-plusTitleID magnify-plusDescID"
>
  <title id="magnify-plusTitleID">Zoom in</title>
  <desc id="magnify-plusDescID">Take a look closer.</desc>
  <g
    class="fill-color"
    fill="none"
    fill-rule="nonzero"
  >
    <path d="m7 0c3.854149 0 7 3.1458514 7 7 0 1.5717634-.529107 3.020558-1.410156 4.191406.0416324.03077.0808125.0647264.117187.101563l4.335938 4.335937c.3904239.3905071.3904239 1.0235559 0 1.414063-.3905071.3904239-1.0235559.3904239-1.414063 0l-4.335937-4.335938c-.0362414-.0370712-.0695452-.0769047-.09961-.11914-1.171224.882043-2.6206167 1.412109-4.193359 1.412109-3.8541486 0-7-3.145851-7-7 0-3.8541486 3.1458514-7 7-7zm0 2c-2.7732684 0-5 2.2267316-5 5s2.2267316 5 5 5 5-2.2267316 5-5-2.2267316-5-5-5z"/>
    <path d="m7.75 4v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-pinterest/icon-pinterest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-pinterest/icon-pinterest.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-pinterest/index.js");



class IAIconPinterest extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  }
}

customElements.define('ia-icon-pinterest', IAIconPinterest);

/* harmony default export */ __webpack_exports__["default"] = (IAIconPinterest);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-pinterest/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-pinterest/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pinterestTitleID pinterestDescID">
  <title id="pinterestTitleID">Pinterest icon</title>
  <desc id="pinterestDescID">A stylized letter p</desc>
  <path d="m11.9051049 30.5873434.653491-1.0742755.4207845-.839975c.2805229-.591861.5371377-1.2533214.7698443-1.9843813.2327065-.7310599.4659444-1.6029125.6997135-2.6155579.2337692-1.0126455.4128151-1.752206.5371377-2.2186817.0308151.030815.0775689.0855382.1402615.1641697.0626927.0786314.1094465.1333547.1402615.1641697.1243227.1870153.2178304.311338.280523.372968 1.1210293.964829 2.3817888 1.4631823 3.7822785 1.4950599 1.4939973 0 2.8790795-.3426843 4.1552465-1.0280529 2.1166733-1.1826593 3.6733633-3.1128487 4.6700699-5.7905679.4048457-1.1518444.6848374-2.5996192.8399751-4.3433245.1243226-1.587505-.0781002-3.0974411-.6072685-4.5298084-.903199-2.36638128-2.5528653-4.20306294-4.948999-5.51004497-1.276167-.65349101-2.5990879-1.05833667-3.9687625-1.21453696-1.525875-.21783034-3.1293188-.17107651-4.8103315.14026149-2.7701643.52916833-5.02709913 1.743174-6.77080442 3.64201699-1.99235065 2.14748836-2.98852598 4.62225355-2.98852598 7.42429545 0 2.9571797.9494215 5.0584455 2.84826449 6.3037975l.83997504.4207845c.12432268 0 .22526845.0154075.3028373.0462225s.1551377.0074381.23270656-.0701308c.07756885-.0775688.13229208-.1243226.16416969-.1402614s.07066204-.0860696.11635328-.2103923c.04569124-.1243226.07703756-.2098609.09403895-.2566147.01700139-.0467539.04834771-.1476996.09403895-.3028373s.06906816-.2486454.07013074-.280523l.14026149-.5132295c.06269263-.311338.09403895-.5291684.09403895-.653491-.03081502-.1243227-.12432268-.2799917-.28052297-.467007-.15620029-.1870154-.23376915-.2959305-.23270656-.3267455-.62267599-.8096914-.9494215-1.7904592-.98023652-2.9423035-.03081502-1.55669.28052297-2.9731185.93401399-4.24928547 1.18265932-2.45882635 3.17501002-3.93741618 5.97705192-4.43576949 1.6183201-.311338 3.1356943-.25661476 4.5521228.16416969 1.4164285.42078446 2.5135496 1.09765239 3.2913633 2.03060379.8405063 1.02752164 1.3229208 2.28828114 1.4472435 3.78227848.1243227 1.4004897-.0313463 2.9725872-.467007 4.7162925-.3740306 1.3696746-.9186065 2.5528653-1.6337275 3.5495719-.9967066 1.245352-2.0863896 1.8834355-3.269049 1.9142505-1.7118277.0626926-2.7547568-.6375522-3.1287874-2.1007345-.0935077-.4664757 0-1.2134744.2805229-2.240996.7469987-2.5842117 1.1359055-3.9384788 1.1667206-4.0628015.1870153-1.0275216.2024228-1.7904591.0462225-2.2888124-.1870153-.65349104-.5759222-1.15928246-1.1667205-1.51737429-.5907984-.35809182-1.2756357-.39687625-2.054512-.11635327-1.1826594.43566067-1.9610044 1.40048968-2.335035 2.89448706-.311338 1.306982-.2491767 2.6299028.186484 3.9687625 0 .0626926.0313463.1402615.094039.2327065.0626926.0924451.0940389.1700139.0940389.2327066 0 .0935076-.0313463.2491766-.0940389.467007-.0626927.2178303-.094039.3580918-.094039.4207844-.0935076.4356607-.3038999 1.3308903-.6311767 2.6856887-.3272768 1.3547985-.5838915 2.3897582-.7698443 3.1048793-.7778136 3.2068876-1.12049796 5.5881451-1.02805289 7.1437725l.37296809 2.7558194c.653491-.591861 1.2294131-1.2299445 1.7277664-1.9142505z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-search/icon-search.js":
/*!******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-search/icon-search.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-search/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconSearch extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-search', IAIconSearch);

/* harmony default export */ __webpack_exports__["default"] = (IAIconSearch);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-search/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-search/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="searchTitleID searchDescID"
>
  <title id="searchTitleID">Search icon</title>
  <desc id="searchDescID">Search for something.</desc>
  <path
    class="fill-color"
    fill="none"
    d="m7 0c3.854149 0 7 3.1458514 7 7 0 1.5717634-.529107 3.020558-1.410156 4.191406.0416324.03077.0808125.0647264.117187.101563l4.335938 4.335937c.3904239.3905071.3904239 1.0235559 0 1.414063-.3905071.3904239-1.0235559.3904239-1.414063 0l-4.335937-4.335938c-.0362414-.0370712-.0695452-.0769047-.09961-.11914-1.171224.882043-2.6206167 1.412109-4.193359 1.412109-3.8541486 0-7-3.145851-7-7 0-3.8541486 3.1458514-7 7-7zm0 2c-2.7732684 0-5 2.2267316-5 5s2.2267316 5 5 5 5-2.2267316 5-5-2.2267316-5-5-5z" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-share/icon-share.js":
/*!****************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-share/icon-share.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-share/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconShare extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-share', IAIconShare);

/* harmony default export */ __webpack_exports__["default"] = (IAIconShare);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-share/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-share/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="shareTitleID shareDescID"
>
  <title id="shareTitleID">Share icon</title>
  <desc id="shareDescID">A square with an arrow arcing out from the center of the square</desc>
  <g class="fill-color">
    <path d="m0 6.765625v17.143466h23.996455v-12.820312c0-.6024929-.564349-1.0909095-1.26051-1.0909095-.696159 0-1.260509.4884166-1.260509 1.0909095v10.638494h-18.9544172v-12.7798301h4.7793938c.6961602 0 1.2605092-.4884166 1.2605092-1.0909091 0-.6024924-.564349-1.0909088-1.2605092-1.0909088z"/>
    <path d="m23.97066.18118436-10.372158.62642052 1.587358 2.76562492c-.632399.5111771-1.204137 1.0741171-1.700285 1.6981534-1.40286 1.7644678-2.279987 4.0202049-2.712357 6.6775568-.144711.891238.459803 1.731264 1.350853 1.87713.428345.07012.866999-.03282 1.21944-.286164.35244-.253341.589789-.636328.659821-1.064688.366789-2.2542958 1.073357-3.946915 2.043324-5.1669026.237573-.298812.501471-.5831095.792613-.8522728l1.40625 2.4502844z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-tumblr/icon-tumblr.js":
/*!******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-tumblr/icon-tumblr.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-tumblr/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconTumblr extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-tumblr', IAIconTumblr);

/* harmony default export */ __webpack_exports__["default"] = (IAIconTumblr);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-tumblr/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-tumblr/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="tumblrTitleID tumblrDescID">
  <title id="tumblrTitleID">Tumblr icon</title>
  <desc id="tumblrDescID">A lowercase letter t</desc>
  <path d="m8.50321407 8.54544475v5.32088575c.15641786.0310693.6819176.0310693 1.57649923 0 .8945816-.0310693 1.3574071.0160703 1.3884764.1414189.0942792 1.5695354.1333837 3.2253149.1173133 4.9673385-.0160703 1.7420236-.0316049 3.3426283-.0466039 4.8018141s.2046288 2.824628.6588835 4.0963267c.4542546 1.2716986 1.1999178 2.2209194 2.2369897 2.8476622 1.2556283.784232 2.9896167 1.207953 5.2019653 1.271163 2.2123485.0632099 4.1659648-.2506972 5.8608487-.9417213-.0310693-.3449764-.0230341-1.4045467.0241055-3.1787109.0471397-1.7741643-.0080351-2.75499-.1655244-2.9424772-3.5472571 1.0360005-5.697467.6904885-6.4506298-1.0365361-.7220934-1.6638147-.8635123-4.9909084-.4242566-9.981281v-.046604h6.7318605v-5.32088568h-6.7318605v-6.54383772h-4.0497228c-.2828378 1.28669763-.6122795 2.35376743-.9883252 3.20120941-.3760457.84744199-.98029 1.60060471-1.812733 2.25948817-.832443.65888347-1.87594303 1.01993018-3.1305 1.08314014z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-twitter/icon-twitter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-twitter/icon-twitter.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-twitter/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconTwitter extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-twitter', IAIconTwitter);

/* harmony default export */ __webpack_exports__["default"] = (IAIconTwitter);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-twitter/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-twitter/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = (lit__WEBPACK_IMPORTED_MODULE_0__.html`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="twitterTitleID twitterDescID">
  <title id="twitterTitleID">Twitter icon</title>
  <desc id="twitterDescID">The Twitter logo, a cartoon bird</desc>
  <path d="m31.5297453 8.76273313c-.3135031.40766104-.7447036.83083673-1.2936015 1.26952707-.5488979.4386904-.9169698.7837578-1.1042157 1.0352022.1562166 2.319709-.1417719 4.5297454-.8939653 6.6301092-.7521935 2.1003638-1.8023754 3.9182538-3.1505457 5.45367-1.3481704 1.5354162-2.9627648 2.8284828-4.8437835 3.8791996-1.8810186 1.0507169-3.8321207 1.7483416-5.8533062 2.092874s-4.1215493.2894286-6.30109136-.1653114c-2.17954205-.45474-4.2092874-1.3401455-6.08923604-2.6562165 2.72737.4697196 5.67408517-.2514445 8.8401455-2.1634924-3.0719024-.7521935-4.88979241-2.2881447-5.45367-4.6078537 1.12882516.0631287 1.86550396.0631287 2.21003638 0-2.91568586-1.2850417-4.38904344-3.3693558-4.42007276-6.2529424.21934517.0310293.53284828.1487267.94050931.3530922s.78375775.3060133 1.12829017.3049433c-.81532206-.7211641-1.41076396-1.9045581-1.7863257-3.5501819-.37556173-1.64562376-.17173122-3.17355015.61149155-4.58377912 1.81789001 1.88101862 3.6908838 3.36989086 5.61898138 4.46661672 1.92809757 1.0967259 4.22426707 1.7547614 6.88850847 1.9741066-.2503745-1.1908838-.1722662-2.32719882.2343248-3.40894502.4065911-1.0817462 1.0416221-1.93612241 1.9050931-2.56312861.863471-.62700621 1.8114702-1.0817462 2.8439975-1.36421999 1.0325272-.28247378 2.0827091-.27444896 3.1505456.02407447s1.9767815.87042585 2.726835 1.71570726c1.3791997-.37663172 2.6802911-.87845068 3.9032742-1.50545688-.0310293.37663171-.1407019.74470361-.3290178 1.1042157-.1883158.35951209-.3530922.62593623-.4943291.79927242s-.3841216.4317355-.728654.77519795c-.3445324.34346244-.5638776.57832227-.6580355.70457949.2193452-.09415792.6895998-.23539482 1.410764-.42371067.7211641-.18831586 1.2069334-.39214638 1.4573079-.61149155 0 .44350524-.1567516.86668093-.4702547 1.27434196z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-visual-adjustment/index.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



class IAIconVisualAdjustment extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__.css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.default;
  }
}

customElements.define('ia-icon-visual-adjustment', IAIconVisualAdjustment);

/* harmony default export */ __webpack_exports__["default"] = (IAIconVisualAdjustment);

/***/ }),

/***/ "./node_modules/@internetarchive/icon-visual-adjustment/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-visual-adjustment/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="visualAdjustmentTitleID visualAdjustmentDescID"
>
  <title id="visualAdjustmentTitleID">Visual adjustment</title>
  <desc id="visualAdjustmentDescID">A circle with its left hemisphere filled</desc>
  <path class="fill-color" d="m12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm0 2v20l.2664041-.0034797c5.399703-.1412166 9.7335959-4.562751 9.7335959-9.9965203 0-5.5228475-4.4771525-10-10-10z" fill-rule="evenodd" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalConfig": function() { return /* reexport safe */ _src_modal_config__WEBPACK_IMPORTED_MODULE_0__.ModalConfig; },
/* harmony export */   "ModalManager": function() { return /* reexport safe */ _src_modal_manager__WEBPACK_IMPORTED_MODULE_1__.ModalManager; },
/* harmony export */   "ModalManagerMode": function() { return /* reexport safe */ _src_modal_manager_mode__WEBPACK_IMPORTED_MODULE_2__.ModalManagerMode; },
/* harmony export */   "ModalManagerHostBridge": function() { return /* reexport safe */ _src_modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__.ModalManagerHostBridge; },
/* harmony export */   "ModalTemplate": function() { return /* reexport safe */ _src_modal_template__WEBPACK_IMPORTED_MODULE_4__.ModalTemplate; }
/* harmony export */ });
/* harmony import */ var _src_modal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modal-config */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js");
/* harmony import */ var _src_modal_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager.js");
/* harmony import */ var _src_modal_manager_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modal-manager-mode */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js");
/* harmony import */ var _src_modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/modal-manager-host-bridge */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js");
/* harmony import */ var _src_modal_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/modal-template */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalConfig": function() { return /* binding */ ModalConfig; }
/* harmony export */ });
/**
 * Configuration to show a modal
 *
 * @export
 * @class ModalConfig
 */
class ModalConfig {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        this.title = options === null || options === void 0 ? void 0 : options.title;
        this.subtitle = options === null || options === void 0 ? void 0 : options.subtitle;
        this.headline = options === null || options === void 0 ? void 0 : options.headline;
        this.message = options === null || options === void 0 ? void 0 : options.message;
        this.headerColor = (_a = options === null || options === void 0 ? void 0 : options.headerColor) !== null && _a !== void 0 ? _a : '#55A183';
        this.showProcessingIndicator = (_b = options === null || options === void 0 ? void 0 : options.showProcessingIndicator) !== null && _b !== void 0 ? _b : false;
        this.processingImageMode = (_c = options === null || options === void 0 ? void 0 : options.processingImageMode) !== null && _c !== void 0 ? _c : 'complete';
        this.showCloseButton = (_d = options === null || options === void 0 ? void 0 : options.showCloseButton) !== null && _d !== void 0 ? _d : true;
        this.closeOnBackdropClick = (_e = options === null || options === void 0 ? void 0 : options.closeOnBackdropClick) !== null && _e !== void 0 ? _e : true;
    }
}
//# sourceMappingURL=modal-config.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalManagerHostBridge": function() { return /* binding */ ModalManagerHostBridge; }
/* harmony export */ });
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/index.umd.js");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_manager_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-manager-mode */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js");


/**
 * The `ModalManagerHostBridge` is a bridge between the `ModalManager` and the
 * host that sets up environment-specific changes when the modal opens and closes.
 *
 * For instance, when the modal opens, this adds a class to the `<body>` tag for styling
 * and adds a `resize` listener to fix a Safari shadow root issue.
 *
 * Consumers can create their own `ModalManagerHostBridgeInterface` classes and pass
 * them into the `ModalManager` if this one does not work for their environment.
 *
 * @export
 * @class ModalManagerHostBridge
 * @implements {ModalManagerHostBridgeInterface}
 */
class ModalManagerHostBridge {
    constructor(modalManager) {
        this.windowResizeThrottler = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_1__.throttle)(100, false, this.updateModalContainerHeight).bind(this);
        this.modalManager = modalManager;
    }
    /**
     * Handle the mode change
     *
     * @private
     * @memberof ModalManager
     */
    handleModeChange(mode) {
        switch (mode) {
            case _modal_manager_mode__WEBPACK_IMPORTED_MODULE_0__.ModalManagerMode.Open:
                this.startResizeListener();
                this.stopDocumentScroll();
                break;
            case _modal_manager_mode__WEBPACK_IMPORTED_MODULE_0__.ModalManagerMode.Closed:
                this.stopResizeListener();
                this.resumeDocumentScroll();
                break;
        }
    }
    // This is a workaround for Safari. Safari does not update shadowRoot elements calculated
    // based on the viewport size (ie. `calc(100vh - 10px)`). It does an initial calculation correctly,
    // but resizing the window does not cause the calculation to update. Firefox and Chrome both handle
    // this correctly.
    // It doesn't matter what css variable you set, it is just forcing Safari to do an update.
    // Also note that the value has to change on each update for Safari to do the update,
    // ie. you can't just set a static value.
    updateModalContainerHeight() {
        this.modalManager.style.setProperty('--containerHeight', `${window.innerHeight}px`);
    }
    stopDocumentScroll() {
        document.body.classList.add('modal-manager-open');
    }
    resumeDocumentScroll() {
        document.body.classList.remove('modal-manager-open');
    }
    startResizeListener() {
        window.addEventListener('resize', this.windowResizeThrottler);
    }
    stopResizeListener() {
        window.removeEventListener('resize', this.windowResizeThrottler);
    }
}
//# sourceMappingURL=modal-manager-host-bridge.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalManagerMode": function() { return /* binding */ ModalManagerMode; }
/* harmony export */ });
/**
 * Various modes the modal can be in
 *
 * @export
 * @enum {number}
 */
var ModalManagerMode;
(function (ModalManagerMode) {
    ModalManagerMode["Open"] = "open";
    ModalManagerMode["Closed"] = "closed";
})(ModalManagerMode || (ModalManagerMode = {}));
//# sourceMappingURL=modal-manager-mode.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-manager.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalManager": function() { return /* binding */ ModalManager; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-template */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js");
/* harmony import */ var _modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-manager-host-bridge */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js");
/* harmony import */ var _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-manager-mode */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js");





let ModalManager = class ModalManager extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        /**
         * The current mode of the ModalManager
         *
         * Current options are `modal` or `closed`
         *
         * @type {ModalManagerMode}
         * @memberof ModalManager
         */
        this.mode = _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__.ModalManagerMode.Closed;
        /**
         * Thie hostBridge handles environmental-specific interactions such as adding classes
         * to the body tag or event listeners needed to support the modal manager in the host environment.
         *
         * There is a default `ModalManagerHostBridge`, but consumers can override it with a custom
         * `ModalManagerHostBridgeInterface`
         *
         * @type {ModalManagerHostBridgeInterface}
         * @memberof ModalManager
         */
        this.hostBridge = new _modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__.ModalManagerHostBridge(this);
        /**
         * Whether the modal should close if the user taps on the backdrop
         *
         * @private
         * @memberof ModalManager
         */
        this.closeOnBackdropClick = true;
    }
    /** @inheritdoc */
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__.html `
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `;
    }
    /** @inheritdoc */
    getMode() {
        return this.mode;
    }
    /** @inheritdoc */
    closeModal() {
        this.mode = _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__.ModalManagerMode.Closed;
    }
    /**
     * Call the userClosedModalCallback and reset it if it exists
     *
     * @private
     * @memberof ModalManager
     */
    callUserClosedModalCallback() {
        // we assign the callback to a temp var and undefine it before calling it
        // otherwise, we run into the potential for an infinite loop if the
        // callback triggers another `showModal()`, which would execute `userClosedModalCallback`
        const callback = this.userClosedModalCallback;
        this.userClosedModalCallback = undefined;
        if (callback)
            callback();
    }
    /** @inheritdoc */
    showModal(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.closeOnBackdropClick = options.config.closeOnBackdropClick;
            this.userClosedModalCallback = options.userClosedModalCallback;
            this.modalTemplate.config = options.config;
            this.customModalContent = options.customModalContent;
            this.mode = _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__.ModalManagerMode.Open;
            yield this.modalTemplate.updateComplete;
            this.modalTemplate.focus();
        });
    }
    /** @inheritdoc */
    updated(changed) {
        /* istanbul ignore else */
        if (changed.has('mode')) {
            this.handleModeChange();
        }
    }
    /**
     * Called when the backdrop is clicked
     *
     * @private
     * @memberof ModalManager
     */
    backdropClicked() {
        if (this.closeOnBackdropClick) {
            this.closeModal();
            this.callUserClosedModalCallback();
        }
    }
    /**
     * Handle the mode change
     *
     * @private
     * @memberof ModalManager
     */
    handleModeChange() {
        this.hostBridge.handleModeChange(this.mode);
        this.emitModeChangeEvent();
    }
    /**
     * Emit a modeChange event
     *
     * @private
     * @memberof ModalManager
     */
    emitModeChangeEvent() {
        const event = new CustomEvent('modeChanged', {
            detail: { mode: this.mode },
        });
        this.dispatchEvent(event);
    }
    /**
     * Called when the modal close button is pressed. Closes the modal.
     *
     * @private
     * @memberof ModalManager
     */
    closeButtonPressed() {
        this.closeModal();
        this.callUserClosedModalCallback();
    }
    /** @inheritdoc */
    static get styles() {
        const modalBackdropColor = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`;
        const modalBackdropZindex = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalBackdropZindex, 1000)`;
        const modalWidth = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalWidth, 32rem)`;
        const modalMaxWidth = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalMaxWidth, 95%)`;
        const modalZindex = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalZindex, 2000)`;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__.css `
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${modalBackdropColor};
        width: 100%;
        height: 100%;
        z-index: ${modalBackdropZindex};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${modalZindex};
        width: ${modalWidth};
        max-width: ${modalMaxWidth};
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], ModalManager.prototype, "mode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], ModalManager.prototype, "customModalContent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], ModalManager.prototype, "hostBridge", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.query)('modal-template')
], ModalManager.prototype, "modalTemplate", void 0);
ModalManager = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.customElement)('modal-manager')
], ModalManager);

//# sourceMappingURL=modal-manager.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalTemplate": function() { return /* binding */ ModalTemplate; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _internetarchive_ia_activity_indicator_ia_activity_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internetarchive/ia-activity-indicator/ia-activity-indicator */ "./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js");
/* harmony import */ var _internetarchive_icon_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-close */ "./node_modules/@internetarchive/modal-manager/node_modules/@internetarchive/icon-close/index.js");
/* harmony import */ var _internetarchive_icon_ia_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/icon-ia-logo */ "./node_modules/@internetarchive/modal-manager/node_modules/@internetarchive/icon-ia-logo/index.js");
/* harmony import */ var _modal_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-config */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js");






let ModalTemplate = class ModalTemplate extends lit_element__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        /**
         * The ModalConfig that displayed the template
         *
         * @type {ModalConfig}
         * @memberof ModalTemplate
         */
        this.config = new _modal_config__WEBPACK_IMPORTED_MODULE_5__.ModalConfig();
    }
    /** @inheritdoc */
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__.html `
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton ? this.closeButtonTemplate : ''}
            <div class="logo-icon">
              ${_internetarchive_icon_ia_logo__WEBPACK_IMPORTED_MODULE_4__.default}
            </div>
            ${this.config.title
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__.html `<h1 class="title">${this.config.title}</h1>`
            : ''}
            ${this.config.subtitle
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__.html `<h2 class="subtitle">${this.config.subtitle}</h2>`
            : ''}
          </header>
          <section class="modal-body">
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator
            ? ''
            : 'hidden'}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>

              ${this.config.headline
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__.html ` <h1 class="headline">${this.config.headline}</h1> `
            : ''}
              ${this.config.message
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__.html ` <p class="message">${this.config.message}</p> `
            : ''}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
    }
    /**
     * Dispatch the `closeButtonPressed` event to the consumer
     *
     * @private
     * @memberof ModalTemplate
     */
    handleCloseButton() {
        const event = new Event('closeButtonPressed');
        this.dispatchEvent(event);
    }
    /**
     * The close button template
     *
     * @readonly
     * @private
     * @type {TemplateResult}
     * @memberof ModalTemplate
     */
    get closeButtonTemplate() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__.html `
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${_internetarchive_icon_close__WEBPACK_IMPORTED_MODULE_3__.default}
      </button>
    `;
    }
    /** @inheritdoc */
    static get styles() {
        const modalLogoSize = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalLogoSize, 6.5rem)`;
        const processingImageSize = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--processingImageSize, 7.5rem)`;
        const modalCornerRadius = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalCornerRadius, 1rem)`;
        const modalBorder = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalBorder, 2px solid black)`;
        // if the content of the modal is too big to fit on screen, this sets the bottom margin
        // it's not exact, but a close estimation
        const modalBottomMarginCss = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalBottomMargin, 2.5rem)`;
        const modalTopMarginCss = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalTopMargin, 5rem)`;
        const modalHeaderBottomPaddingCss = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalHeaderBottomPadding, 0.5em)`;
        const modalBottomPadding = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalBottomPadding, 2rem)`;
        const scrollOffset = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalScrollOffset, 5px)`;
        const titleFontSize = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalTitleFontSize, 1.8rem)`;
        const subtitleFontSize = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalSubtitleFontSize, 1.4rem)`;
        const headlineFontSize = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalHeadlineFontSize, 1.6rem)`;
        const messageFontSize = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalMessageFontSize, 1.4rem)`;
        const titleLineHeight = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalTitleLineHeight, normal)`;
        const subtitleLineHeight = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalSubtitleLineHeight, normal)`;
        const headlineLineHeight = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalHeadlineLineHeight, normal)`;
        const messageLineHeight = lit_element__WEBPACK_IMPORTED_MODULE_1__.css `var(--modalMessageLineHeight, normal)`;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__.css `
      .processing-logo {
        margin: auto;
        width: ${processingImageSize};
        height: ${processingImageSize};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${modalCornerRadius};
        width: 100%;
        margin-top: ${modalTopMarginCss};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${modalCornerRadius}) calc(${modalCornerRadius}) 0 0;
        border: ${modalBorder};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${modalHeaderBottomPaddingCss};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${titleFontSize};
        font-weight: bold;
        line-height: ${titleLineHeight};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${subtitleFontSize};
        line-height: ${subtitleLineHeight};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${modalCornerRadius}) calc(${modalCornerRadius});
        border: ${modalBorder};
        border-top: 0;
        padding: 0 1rem calc(${modalBottomPadding} - ${scrollOffset}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${modalBottomMarginCss}));
        min-height: 5rem;
        padding: 0 0 calc(${scrollOffset}) 0;
      }

      .headline {
        font-size: ${headlineFontSize};
        font-weight: bold;
        text-align: center;
        line-height: ${headlineLineHeight};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${messageFontSize};
        line-height: ${messageLineHeight};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${modalLogoSize};
        height: ${modalLogoSize};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${modalLogoSize} * 0.65);
        height: calc(${modalLogoSize} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], ModalTemplate.prototype, "config", void 0);
ModalTemplate = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,lit_element__WEBPACK_IMPORTED_MODULE_1__.customElement)('modal-template')
], ModalTemplate);

//# sourceMappingURL=modal-template.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/node_modules/@internetarchive/icon-close/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/node_modules/@internetarchive/icon-close/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
  <svg
    viewBox="0 0 40 40"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="closeTitleID closeDescID"
  >
    <title id="closeTitleID">Close icon</title>
    <desc id="closeDescID">A line drawing of an X</desc>
    <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
  </svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/node_modules/@internetarchive/icon-ia-logo/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/node_modules/@internetarchive/icon-ia-logo/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


/* harmony default export */ __webpack_exports__["default"] = (lit_html__WEBPACK_IMPORTED_MODULE_0__.html`
  <svg
    class="ia-logo"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logoTitleID logoDescID"
  >
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" class="fill-color">
        <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
      </mask>
      <use class="fill-color" xlink:href="#path-1"></use>
      <g mask="url(#mask-2)" class="fill-color">
        <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
      </g>
    </g>
  </svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metadata": function() { return /* reexport safe */ _src_models_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata; },
/* harmony export */   "File": function() { return /* reexport safe */ _src_models_file__WEBPACK_IMPORTED_MODULE_1__.File; },
/* harmony export */   "Review": function() { return /* reexport safe */ _src_models_review__WEBPACK_IMPORTED_MODULE_2__.Review; },
/* harmony export */   "DateField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_3__.DateField; },
/* harmony export */   "NumberField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_4__.NumberField; },
/* harmony export */   "StringField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_5__.StringField; },
/* harmony export */   "BooleanField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_6__.BooleanField; },
/* harmony export */   "ByteField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_7__.ByteField; },
/* harmony export */   "DurationField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_8__.DurationField; },
/* harmony export */   "PageProgressionField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_page_progression__WEBPACK_IMPORTED_MODULE_9__.PageProgressionField; },
/* harmony export */   "MediaTypeField": function() { return /* reexport safe */ _src_models_metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_10__.MediaTypeField; },
/* harmony export */   "MetadataField": function() { return /* reexport safe */ _src_models_metadata_fields_metadata_field__WEBPACK_IMPORTED_MODULE_11__.MetadataField; },
/* harmony export */   "MetadataResponse": function() { return /* reexport safe */ _src_responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_12__.MetadataResponse; },
/* harmony export */   "SearchResponse": function() { return /* reexport safe */ _src_responses_search_search_response__WEBPACK_IMPORTED_MODULE_13__.SearchResponse; },
/* harmony export */   "DefaultSearchBackend": function() { return /* reexport safe */ _src_search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_14__.DefaultSearchBackend; },
/* harmony export */   "SearchService": function() { return /* reexport safe */ _src_search_service__WEBPACK_IMPORTED_MODULE_15__.SearchService; },
/* harmony export */   "SearchParams": function() { return /* reexport safe */ _src_search_params__WEBPACK_IMPORTED_MODULE_16__.SearchParams; }
/* harmony export */ });
/* harmony import */ var _src_models_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/models/metadata */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js");
/* harmony import */ var _src_models_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/models/file */ "./node_modules/@internetarchive/search-service/dist/src/models/file.js");
/* harmony import */ var _src_models_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/models/review */ "./node_modules/@internetarchive/search-service/dist/src/models/review.js");
/* harmony import */ var _src_models_metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/date */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js");
/* harmony import */ var _src_models_metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/number */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js");
/* harmony import */ var _src_models_metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/string */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js");
/* harmony import */ var _src_models_metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/boolean */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js");
/* harmony import */ var _src_models_metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/byte */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js");
/* harmony import */ var _src_models_metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/duration */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js");
/* harmony import */ var _src_models_metadata_fields_field_types_page_progression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/page-progression */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/page-progression.js");
/* harmony import */ var _src_models_metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/mediatype */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js");
/* harmony import */ var _src_models_metadata_fields_metadata_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/models/metadata-fields/metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");
/* harmony import */ var _src_responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/responses/metadata/metadata-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js");
/* harmony import */ var _src_responses_search_search_response__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/responses/search/search-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js");
/* harmony import */ var _src_search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/search-backend/default-search-backend */ "./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js");
/* harmony import */ var _src_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/search-service */ "./node_modules/@internetarchive/search-service/dist/src/search-service.js");
/* harmony import */ var _src_search_params__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/search-params */ "./node_modules/@internetarchive/search-service/dist/src/search-params.js");

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/file.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/file.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": function() { return /* binding */ File; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");

/**
 * This represents an Internet Archive File
 *
 * @export
 * @class File
 */
class File {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json) {
        this.name = json.name;
        this.source = json.source;
        this.btih = json.btih;
        this.md5 = json.md5;
        this.format = json.format;
        this.mtime = json.mtime;
        this.crc32 = json.crc32;
        this.sha1 = json.sha1;
        this.original = json.original;
        this.title = json.title;
        this.length = json.length
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DurationParser.shared.parseValue(json.length)
            : undefined;
        this.size = json.size ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.ByteParser.shared.parseValue(json.size) : undefined;
        this.height = json.height
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared.parseValue(json.height)
            : undefined;
        this.width = json.width
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared.parseValue(json.width)
            : undefined;
        this.track = json.track
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared.parseValue(json.track)
            : undefined;
        this.external_identifier = json['external-identifier'];
        this.creator = json.creator;
        this.album = json.album;
    }
}
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanField": function() { return /* binding */ BooleanField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class BooleanField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.BooleanParser.shared, rawValue);
    }
}
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByteField": function() { return /* binding */ ByteField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


/**
 * ByteField is a unit-specific number field that
 * returns a value in bytes
 *
 * @export
 * @class ByteField
 * @extends {MetadataField<Byte, ByteParser>}
 */
class ByteField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.ByteParser.shared, rawValue);
    }
}
//# sourceMappingURL=byte.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateField": function() { return /* binding */ DateField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class DateField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DateParser.shared, rawValue);
    }
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DurationField": function() { return /* binding */ DurationField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


/**
 * The DurationField parses different duration formats
 * and returns a `Duration`, which is a number in seconds
 * with decimals.
 *
 * @export
 * @class DurationField
 * @extends {MetadataField<Duration, DurationParser>}
 */
class DurationField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DurationParser.shared, rawValue);
    }
}
//# sourceMappingURL=duration.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaTypeField": function() { return /* binding */ MediaTypeField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class MediaTypeField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.MediaTypeParser.shared, rawValue);
    }
}
//# sourceMappingURL=mediatype.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberField": function() { return /* binding */ NumberField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class NumberField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared, rawValue);
    }
}
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/page-progression.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/page-progression.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageProgressionField": function() { return /* binding */ PageProgressionField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class PageProgressionField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.PageProgressionParser.shared, rawValue);
    }
}
//# sourceMappingURL=page-progression.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringField": function() { return /* binding */ StringField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class StringField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.StringParser.shared, rawValue);
    }
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetadataField": function() { return /* binding */ MetadataField; }
/* harmony export */ });
/**
 * The MetadataField is responsible for three things:
 * 1. Take in some raw data (strings, arrays, numbers, etc)
 * 2. Normalize the input to an array of the input,
 *    ie. [string, string], [number, number], [Date, Date], etc
 * 3. Cast the values to their expected `Type`
 *
 * This class gets instiated with a `Type` and a parser of that type. For instance, the
 * `DateField` is a subclass of `MetadataField` with a `Type` of `Date` and a `DateParser`.
 *
 * When using a `DateField`, you can pass it a string date and it will cast it to a javascript Date,
 * ie:
 *
 * ```
 * const dateField = new DateField('2020-02-13')
 * dateField.value = Date(2020-02-13) // native javascript Date object
 * dateField.values = [Date(2020-02-13)] // the normalized array of values
 * dateField.rawValue = '2020-02-13' // the raw string that was passed in
 * ```
 *
 * @class MetadataField
 * @template Type The type of metadata this is (string, number, Date, etc)
 * @template FieldParserInterfaceType The parser for that type (StringParser, NumberParser, etc)
 */
class MetadataField {
    constructor(parser, rawValue) {
        /**
         * The array of all values for the field.
         *
         * Many fields only contain a single value and
         * can be accessed via the `.value` getter
         *
         * @type {Type[]}
         * @memberof MetadataField
         */
        this.values = [];
        this.parser = parser;
        this.rawValue = rawValue;
        this.processRawValue();
    }
    /**
     * The first value if there are multiple or the only value if there is one
     *
     * @readonly
     * @type {(Type | undefined)}
     * @memberof MetadataField
     */
    get value() {
        return this.values.length > 0 ? this.values[0] : undefined;
    }
    processRawValue() {
        if (this.rawValue === undefined) {
            return;
        }
        if (Array.isArray(this.rawValue)) {
            this.rawValue.forEach(value => {
                this.parseAndPersistValue(value);
            });
        }
        else {
            this.parseAndPersistValue(this.rawValue);
        }
    }
    parseAndPersistValue(value) {
        const parsedValue = this.parser.parseValue(value);
        if (parsedValue !== undefined) {
            this.values.push(parsedValue);
        }
    }
}
//# sourceMappingURL=metadata-field.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metadata": function() { return /* binding */ Metadata; }
/* harmony export */ });
/* harmony import */ var _metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-fields/field-types/boolean */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js");
/* harmony import */ var _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata-fields/field-types/date */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js");
/* harmony import */ var _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata-fields/field-types/duration */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js");
/* harmony import */ var _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata-fields/field-types/number */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js");
/* harmony import */ var _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata-fields/field-types/string */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js");
/* harmony import */ var _metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata-fields/field-types/byte */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js");
/* harmony import */ var _metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata-fields/field-types/mediatype */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js");
/* eslint-disable @typescript-eslint/no-explicit-any */







/**
 * Metadata is an expansive model that describes an Item.
 *
 * The fields in here get casted to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class Metadata
 */
class Metadata {
    constructor(json) {
        this.rawMetadata = json;
        this.identifier = json.identifier;
        this.addeddate = json.addeddate ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.addeddate) : undefined;
        this.publicdate = json.publicdate
            ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.publicdate)
            : undefined;
        this.indexdate = json.indexdate ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.indexdate) : undefined;
        this.audio_codec = json.audio_codec
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.audio_codec)
            : undefined;
        this.audio_sample_rate = json.audio_sample_rate
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.audio_sample_rate)
            : undefined;
        this.collection = json.collection
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.collection)
            : undefined;
        this.collections_raw = json.collections_raw
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.collections_raw)
            : undefined;
        this.collection_size = json.collection_size
            ? new _metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_5__.ByteField(json.collection_size)
            : undefined;
        this.contributor = json.contributor
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.contributor)
            : undefined;
        this.coverage = json.coverage ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.coverage) : undefined;
        this.creator = json.creator ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.creator) : undefined;
        this.date = json.date ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.date) : undefined;
        this.description = json.description
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.description)
            : undefined;
        this.downloads = json.downloads
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.downloads)
            : undefined;
        this.duration = json.duration
            ? new _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__.DurationField(json.duration)
            : undefined;
        this.files_count = json.files_count
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.files_count)
            : undefined;
        this.item_count = json.item_count
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.item_count)
            : undefined;
        this.item_size = json.item_size ? new _metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_5__.ByteField(json.item_size) : undefined;
        this.language = json.language ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.language) : undefined;
        this.length = json.length ? new _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__.DurationField(json.length) : undefined;
        this.lineage = json.lineage ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.lineage) : undefined;
        this.mediatype = json.mediatype
            ? new _metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_6__.MediaTypeField(json.mediatype)
            : undefined;
        this.month = json.month ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.month) : undefined;
        this.noindex = json.noindex ? new _metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__.BooleanField(json.noindex) : undefined;
        this.notes = json.notes ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.notes) : undefined;
        this.num_favorites = json.num_favorites
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.num_favorites)
            : undefined;
        this.num_reviews = json.num_reviews
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.num_reviews)
            : undefined;
        this.runtime = json.runtime ? new _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__.DurationField(json.runtime) : undefined;
        this.scanner = json.scanner ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.scanner) : undefined;
        this.source = json.source ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.source) : undefined;
        this.start_localtime = json.start_localtime
            ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.start_localtime)
            : undefined;
        this.start_time = json.start_time
            ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.start_time)
            : undefined;
        this.stop_time = json.stop_time ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.stop_time) : undefined;
        this.subject = json.subject ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.subject) : undefined;
        this.taper = json.taper ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.taper) : undefined;
        this.title = json.title ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.title) : undefined;
        this.track = json.track ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.track) : undefined;
        this.transferer = json.transferer
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.transferer)
            : undefined;
        this.type = json.type ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.type) : undefined;
        this.uploader = json.uploader ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.uploader) : undefined;
        this.utc_offset = json.utc_offset
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.utc_offset)
            : undefined;
        this.venue = json.venue ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.venue) : undefined;
        this.week = json.week ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.week) : undefined;
        this.year = json.year ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.year) : undefined;
    }
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/review.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/review.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Review": function() { return /* binding */ Review; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

class Review {
    constructor(json) {
        this.reviewbody = json.reviewbody;
        this.reviewtitle = json.reviewtitle;
        this.reviewer = json.reviewer;
        this.reviewdate = _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DateParser.shared.parseValue(json.reviewdate);
        this.createdate = _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DateParser.shared.parseValue(json.createdate);
        this.stars = json.stars ? parseFloat(json.stars) : undefined;
    }
}
//# sourceMappingURL=review.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetadataResponse": function() { return /* binding */ MetadataResponse; }
/* harmony export */ });
/* harmony import */ var _models_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/file */ "./node_modules/@internetarchive/search-service/dist/src/models/file.js");
/* harmony import */ var _models_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/metadata */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js");
/* harmony import */ var _models_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/review */ "./node_modules/@internetarchive/search-service/dist/src/models/review.js");
/* eslint-disable @typescript-eslint/no-explicit-any */



/**
 * The main top-level reponse when fetching Metadata
 *
 * @export
 * @class MetadataResponse
 */
class MetadataResponse {
    constructor(json) {
        var _a, _b;
        this.rawResponse = json;
        this.created = json.created;
        this.d1 = json.d1;
        this.d2 = json.d2;
        this.dir = json.dir;
        this.files = (_a = json.files) === null || _a === void 0 ? void 0 : _a.map((file) => new _models_file__WEBPACK_IMPORTED_MODULE_0__.File(file));
        this.files_count = json.files_count;
        this.item_last_updated = json.item_last_updated;
        this.item_size = json.item_size;
        this.metadata = new _models_metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(json.metadata);
        this.server = json.server;
        this.uniq = json.uniq;
        this.workable_servers = json.workable_servers;
        this.speech_vs_music_asr = json.speech_vs_music_asr;
        this.reviews = (_b = json.reviews) === null || _b === void 0 ? void 0 : _b.map((entry) => new _models_review__WEBPACK_IMPORTED_MODULE_2__.Review(entry));
    }
}
//# sourceMappingURL=metadata-response.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response-details.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response-details.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResponseDetails": function() { return /* binding */ SearchResponseDetails; }
/* harmony export */ });
/* harmony import */ var _models_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/metadata */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js");

/**
 * This is the search response details inside the SearchResponse object that contains
 * the search results, under the `docs` key.
 *
 * @export
 * @class Response
 */
class SearchResponseDetails {
    constructor(json) {
        this.numFound = json.numFound;
        this.start = json.start;
        this.docs = json.docs.map((doc) => new _models_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata(doc));
        this.aggregations = json.aggregations;
    }
}
//# sourceMappingURL=search-response-details.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResponse": function() { return /* binding */ SearchResponse; }
/* harmony export */ });
/* harmony import */ var _search_response_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-response-details */ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response-details.js");

/**
 * The top-level response model when retrieving a response from the advanced search endpoint.
 *
 * @export
 * @class SearchResponse
 */
class SearchResponse {
    constructor(json) {
        this.rawResponse = json;
        this.responseHeader = json.responseHeader;
        this.response = new _search_response_details__WEBPACK_IMPORTED_MODULE_0__.SearchResponseDetails(json.response);
    }
}
//# sourceMappingURL=search-response.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultSearchBackend": function() { return /* binding */ DefaultSearchBackend; }
/* harmony export */ });
/* harmony import */ var _search_service_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-service-error */ "./node_modules/@internetarchive/search-service/dist/src/search-service-error.js");

/**
 * The DefaultSearchBackend performs a `window.fetch` request to archive.org
 */
class DefaultSearchBackend {
    constructor(baseUrl = 'archive.org') {
        this.baseUrl = baseUrl;
    }
    async performSearch(params) {
        const urlSearchParam = params.asUrlSearchParams;
        const queryAsString = urlSearchParam.toString();
        const url = `https://${this.baseUrl}/advancedsearch.php?${queryAsString}`;
        return this.fetchUrl(url);
    }
    async fetchMetadata(identifier) {
        const url = `https://${this.baseUrl}/metadata/${identifier}`;
        return this.fetchUrl(url);
    }
    async fetchUrl(url) {
        let response;
        // first try the fetch and return a networkError if it fails
        try {
            response = await fetch(url);
        }
        catch (err) {
            const message = err instanceof Error ? err.message : err;
            return this.getErrorResult(_search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceErrorType.networkError, message);
        }
        // then try json decoding and return a decodingError if it fails
        try {
            const json = await response.json();
            // the advanced search endpoint doesn't return an HTTP Error 400
            // and instead returns an HTTP 200 with an `error` key in the payload
            const error = json['error'];
            if (error) {
                const forensics = json['forensics'];
                return this.getErrorResult(_search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceErrorType.searchEngineError, error, forensics);
            }
            else {
                // success
                return { success: json };
            }
        }
        catch (err) {
            const message = err instanceof Error ? err.message : err;
            return this.getErrorResult(_search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceErrorType.decodingError, message);
        }
    }
    getErrorResult(errorType, message, details) {
        const error = new _search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceError(errorType, message, details);
        const result = { error };
        return result;
    }
}
//# sourceMappingURL=default-search-backend.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-params.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-params.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateSearchParams": function() { return /* binding */ AggregateSearchParams; },
/* harmony export */   "SortDirection": function() { return /* binding */ SortDirection; },
/* harmony export */   "SortParam": function() { return /* binding */ SortParam; },
/* harmony export */   "SearchParams": function() { return /* binding */ SearchParams; }
/* harmony export */ });
class AggregateSearchParams {
    constructor(searchParams) {
        this.searchParams = searchParams;
    }
    /**
     * Generates a query parameter from the given aggregate search params
     *
     * Example:
     *
     * [
     *  {
     *    "terms": {
     *      "field": "collection",
     *      "size":10
     *    }
     *  },
     *  {
     *    "terms": {
     *      "field": "subjectSorter",
     *      "size": 10
     *    }
     *  }
     * ]
     *
     * @returns {Record<string, AggregateSearchParam>[]}
     * @memberof AggregateSearchParams
     */
    get asSearchParams() {
        return this.searchParams.map(param => {
            return {
                terms: param,
            };
        });
    }
}
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "asc";
    SortDirection["Desc"] = "desc";
})(SortDirection || (SortDirection = {}));
class SortParam {
    constructor(field, direction) {
        this.field = field;
        this.direction = direction;
    }
    get asString() {
        return `${this.field} ${this.direction}`;
    }
}
/**
 * SearchParams provides an encapsulation to all of the search parameters
 * available for searching.
 *
 * It also provides an `asUrlSearchParams` method for converting the
 * parameters to an IA-style query string. ie. it converts the `fields` array
 * to `fl=identifier,collection` and `sort` to `sort=date+desc,downloads+asc`
 */
class SearchParams {
    constructor(options) {
        this.query = options.query;
        this.sort = options.sort;
        this.rows = options.rows;
        this.page = options.page;
        this.fields = options.fields;
        this.aggregations = options.aggregations;
    }
    /**
     * Return a URLSearchParams representation of the parameters for use in network requests.
     *
     * @readonly
     * @type {URLSearchParams}
     * @memberof SearchParams
     */
    get asUrlSearchParams() {
        const params = new URLSearchParams();
        params.append('q', this.query);
        params.append('output', 'json');
        if (this.rows) {
            params.append('rows', String(this.rows));
        }
        if (this.page) {
            params.append('page', String(this.page));
        }
        if (this.fields) {
            params.append('fl', this.fields.join(','));
        }
        if (this.sort) {
            const sortStrings = this.sort.map(sort => sort.asString);
            params.append('sort', sortStrings.join(','));
        }
        if (this.aggregations) {
            const searchParams = this.aggregations.asSearchParams;
            const stringified = JSON.stringify(searchParams);
            params.append('user_aggs', stringified);
        }
        return params;
    }
}
//# sourceMappingURL=search-params.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-service-error.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-service-error.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchServiceErrorType": function() { return /* binding */ SearchServiceErrorType; },
/* harmony export */   "SearchServiceError": function() { return /* binding */ SearchServiceError; }
/* harmony export */ });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
var SearchServiceErrorType;
(function (SearchServiceErrorType) {
    SearchServiceErrorType["networkError"] = "SearchService.NetworkError";
    SearchServiceErrorType["itemNotFound"] = "SearchService.ItemNotFound";
    SearchServiceErrorType["decodingError"] = "SearchService.DecodingError";
    SearchServiceErrorType["searchEngineError"] = "SearchService.SearchEngineError";
})(SearchServiceErrorType || (SearchServiceErrorType = {}));
class SearchServiceError extends Error {
    constructor(type, message, details) {
        super(message);
        this.name = type;
        this.type = type;
        this.details = details;
    }
}
//# sourceMappingURL=search-service-error.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-service.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _responses_search_search_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responses/search/search-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js");
/* harmony import */ var _responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responses/metadata/metadata-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js");
/* harmony import */ var _search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-backend/default-search-backend */ "./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js");
/* harmony import */ var _search_service_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-service-error */ "./node_modules/@internetarchive/search-service/dist/src/search-service-error.js");




/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` or `MetadataResponse`
 * object, depending on the type of response.
 */
class SearchService {
    constructor(searchBackend) {
        this.searchBackend = searchBackend;
    }
    /** @inheritdoc */
    async search(params) {
        const rawResponse = await this.searchBackend.performSearch(params);
        if (rawResponse.error) {
            return rawResponse;
        }
        const modeledResponse = new _responses_search_search_response__WEBPACK_IMPORTED_MODULE_0__.SearchResponse(rawResponse.success);
        return { success: modeledResponse };
    }
    /** @inheritdoc */
    async fetchMetadata(identifier) {
        var _a;
        const rawResponse = await this.searchBackend.fetchMetadata(identifier);
        if (rawResponse.error) {
            return rawResponse;
        }
        if (((_a = rawResponse.success) === null || _a === void 0 ? void 0 : _a.metadata) === undefined) {
            return {
                error: new _search_service_error__WEBPACK_IMPORTED_MODULE_3__.SearchServiceError(_search_service_error__WEBPACK_IMPORTED_MODULE_3__.SearchServiceErrorType.itemNotFound),
            };
        }
        const modeledResponse = new _responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_1__.MetadataResponse(rawResponse.success);
        return { success: modeledResponse };
    }
}
SearchService.default = new SearchService(new _search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_2__.DefaultSearchBackend());
//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/shared-resize-observer/dist/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/shared-resize-observer/dist/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedResizeObserver": function() { return /* reexport safe */ _src_shared_resize_observer__WEBPACK_IMPORTED_MODULE_0__.SharedResizeObserver; }
/* harmony export */ });
/* harmony import */ var _src_shared_resize_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/shared-resize-observer */ "./node_modules/@internetarchive/shared-resize-observer/dist/src/shared-resize-observer.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/shared-resize-observer/dist/src/shared-resize-observer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/shared-resize-observer/dist/src/shared-resize-observer.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedResizeObserver": function() { return /* binding */ SharedResizeObserver; }
/* harmony export */ });
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @juggle/resize-observer */ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js");

const ResizeObserver = window.ResizeObserver || _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_0__.ResizeObserver;
/** @inheritdoc */
class SharedResizeObserver {
    constructor() {
        /**
         * This is the ResizeObserver that dispatches
         * callbacks to all of the handlers.
         *
         * @private
         * @memberof SharedResizeObserver
         */
        this.resizeObserver = new ResizeObserver(entries => {
            // This requestAnimationFrame is to throttle the refresh rate,
            // otherwise you get a bunch of
            // `ResizeObserver loop completed with undelivered notifications` errors
            // The errors are not harmful, but they happen a lot, see:
            // https://stackoverflow.com/a/58701523
            // https://github.com/souporserious/react-measure/issues/104
            // https://github.com/WICG/resize-observer/issues/38
            window.requestAnimationFrame(() => {
                for (const entry of entries) {
                    const handlers = this.resizeHandlers.get(entry.target);
                    handlers === null || handlers === void 0 ? void 0 : handlers.forEach(handler => {
                        handler.handleResize(entry);
                    });
                }
            });
        });
        /**
         * A map of all of the observed elements and their resize handlers
         *
         * @private
         * @type {Map<
         *     Element,
         *     Set<SharedResizeObserverResizeHandlerInterface>
         *   >}
         * @memberof SharedResizeObserver
         */
        this.resizeHandlers = new Map();
    }
    /** @inheritdoc */
    addObserver(options) {
        var _a;
        const handlers = (_a = this.resizeHandlers.get(options.target)) !== null && _a !== void 0 ? _a : new Set();
        handlers.add(options.handler);
        this.resizeHandlers.set(options.target, handlers);
        this.resizeObserver.observe(options.target, options.options);
    }
    /** @inheritdoc */
    removeObserver(options) {
        const handlers = this.resizeHandlers.get(options.target);
        if (!handlers)
            return;
        this.resizeObserver.unobserve(options.target);
        handlers.delete(options.handler);
        if (handlers.size === 0) {
            this.resizeHandlers.delete(options.target);
        }
    }
}
//# sourceMappingURL=shared-resize-observer.js.map

/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMRectReadOnly": function() { return /* binding */ DOMRectReadOnly; }
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_0__.freeze)(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObservation": function() { return /* binding */ ResizeObservation; }
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");



var skipNotifyOnElement = function (target) {
    return !(0,_utils_element__WEBPACK_IMPORTED_MODULE_2__.isSVG)(target)
        && !(0,_utils_element__WEBPACK_IMPORTED_MODULE_2__.isReplacedElement)(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = (0,_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__.calculateBoxSize)(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserver": function() { return /* binding */ ResizeObserver; }
/* harmony export */ });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");


var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0,_utils_element__WEBPACK_IMPORTED_MODULE_1__.isElement)(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0,_utils_element__WEBPACK_IMPORTED_MODULE_1__.isElement)(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverBoxOptions": function() { return /* binding */ ResizeObserverBoxOptions; }
/* harmony export */ });
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverController": function() { return /* binding */ ResizeObserverController; }
/* harmony export */ });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scheduler */ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js");
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObservation */ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js");
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeObserverDetail */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js");
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");




var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__.ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__.resizeObservers.push(detail);
            detail.observationTargets.push(new _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__.ResizeObservation(target, options && options.box));
            (0,_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__.updateCount)(1);
            _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__.scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__.resizeObservers.splice(_utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__.resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0,_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__.updateCount)(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverDetail": function() { return /* binding */ ResizeObserverDetail; }
/* harmony export */ });
var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverEntry": function() { return /* binding */ ResizeObserverEntry; }
/* harmony export */ });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");


var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = (0,_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__.calculateBoxSizes)(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__.freeze)([boxes.borderBoxSize]);
        this.contentBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__.freeze)([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__.freeze)([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js":
/*!************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverSize": function() { return /* binding */ ResizeObserverSize; }
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_0__.freeze)(this);
    }
    return ResizeObserverSize;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "broadcastActiveObservations": function() { return /* binding */ broadcastActiveObservations; }
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");




var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverEntry(ot.target);
            var targetDepth = (0,_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__.calculateDepthForNode)(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0,_calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__.calculateBoxSize)(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateBoxSize": function() { return /* binding */ calculateBoxSize; },
/* harmony export */   "calculateBoxSizes": function() { return /* binding */ calculateBoxSizes; }
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverSize */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js");
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOMRectReadOnly */ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/global */ "./node_modules/@juggle/resize-observer/lib/utils/global.js");






var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(_utils_global__WEBPACK_IMPORTED_MODULE_5__.global.navigator && _utils_global__WEBPACK_IMPORTED_MODULE_5__.global.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_4__.freeze)({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__.DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if ((0,_utils_element__WEBPACK_IMPORTED_MODULE_3__.isHidden)(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0,_utils_element__WEBPACK_IMPORTED_MODULE_3__.isSVG)(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_4__.freeze)({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__.DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateDepthForNode": function() { return /* binding */ calculateDepthForNode; }
/* harmony export */ });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");

var calculateDepthForNode = function (node) {
    if ((0,_utils_element__WEBPACK_IMPORTED_MODULE_0__.isHidden)(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deliverResizeLoopError": function() { return /* binding */ deliverResizeLoopError; }
/* harmony export */ });
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gatherActiveObservationsAtDepth": function() { return /* binding */ gatherActiveObservationsAtDepth; }
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");


var gatherActiveObservationsAtDepth = function (depth) {
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0,_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__.calculateDepthForNode)(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasActiveObservations": function() { return /* binding */ hasActiveObservations; }
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");

var hasActiveObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasSkippedObservations": function() { return /* binding */ hasSkippedObservations; }
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");

var hasSkippedObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserver": function() { return /* reexport safe */ _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__.ResizeObserver; },
/* harmony export */   "ResizeObserverEntry": function() { return /* reexport safe */ _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverEntry; },
/* harmony export */   "ResizeObserverSize": function() { return /* reexport safe */ _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_2__.ResizeObserverSize; }
/* harmony export */ });
/* harmony import */ var _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserver */ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js");
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ResizeObserverSize */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js");





/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/element.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSVG": function() { return /* binding */ isSVG; },
/* harmony export */   "isHidden": function() { return /* binding */ isHidden; },
/* harmony export */   "isElement": function() { return /* binding */ isElement; },
/* harmony export */   "isReplacedElement": function() { return /* binding */ isReplacedElement; }
/* harmony export */ });
var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js":
/*!******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/freeze.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "freeze": function() { return /* binding */ freeze; }
/* harmony export */ });
var freeze = function (obj) { return Object.freeze(obj); };


/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/global.js":
/*!******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/global.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "global": function() { return /* binding */ global; }
/* harmony export */ });
var global = typeof window !== 'undefined' ? window : {};


/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/process.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/process.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "process": function() { return /* binding */ process; }
/* harmony export */ });
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/hasActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js");
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/hasSkippedObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js");
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/deliverResizeLoopError */ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js");
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/broadcastActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js");
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithms/gatherActiveObservationsAtDepth */ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js");





var process = function () {
    var depth = 0;
    (0,_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__.gatherActiveObservationsAtDepth)(depth);
    while ((0,_algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__.hasActiveObservations)()) {
        depth = (0,_algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__.broadcastActiveObservations)();
        (0,_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__.gatherActiveObservationsAtDepth)(depth);
    }
    if ((0,_algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__.hasSkippedObservations)()) {
        (0,_algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__.deliverResizeLoopError)();
    }
    return depth > 0;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queueMicroTask": function() { return /* binding */ queueMicroTask; }
/* harmony export */ });
var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queueResizeObserver": function() { return /* binding */ queueResizeObserver; }
/* harmony export */ });
/* harmony import */ var _queueMicroTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queueMicroTask */ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js");

var queueResizeObserver = function (cb) {
    (0,_queueMicroTask__WEBPACK_IMPORTED_MODULE_0__.queueMicroTask)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resizeObservers": function() { return /* binding */ resizeObservers; }
/* harmony export */ });
var resizeObservers = [];



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduler": function() { return /* binding */ scheduler; },
/* harmony export */   "updateCount": function() { return /* binding */ updateCount; }
/* harmony export */ });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process */ "./node_modules/@juggle/resize-observer/lib/utils/process.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@juggle/resize-observer/lib/utils/global.js");
/* harmony import */ var _queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queueResizeObserver */ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js");



var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        (0,_queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__.queueResizeObserver)(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0,_process__WEBPACK_IMPORTED_MODULE_0__.process)();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : _global__WEBPACK_IMPORTED_MODULE_1__.global.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__.global.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__.global.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};



/***/ }),

/***/ "./src/BookNavigator/assets/bookmark-colors.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/assets/bookmark-colors.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .blue {\n    --iconFillColor: var(--blueBookmarkColor, #0023f5);\n  }\n\n  .red {\n    --iconFillColor: var(--redBookmarkColor, #eb3223);\n  }\n\n  .green {\n    --iconFillColor: var(--greenBookmarkColor, #75ef4c);\n  }\n"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/button-base.js":
/*!*************************************************!*\
  !*** ./src/BookNavigator/assets/button-base.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ia-button {\n    min-height: 3rem;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    color: var(--primaryTextColor);\n    line-height: normal;\n    border-radius: .4rem;\n    text-align: center;\n    vertical-align: middle;\n    font-size: 1.4rem;\n    display: inline-block;\n    padding: .6rem 1.2rem;\n    border: 1px solid transparent;\n\n    white-space: nowrap;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  .ia-button.link,\n  .ia-button.external {\n    min-height: unset;\n    text-decoration: none;\n  }\n\n  .ia-button:disabled,\n  .ia-button.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  .ia-button.transparent {\n    background-color: transparent;\n  }\n  \n  .ia-button.slim {\n    padding: 0;\n  }\n\n  .ia-button.primary {\n    background-color: var(--primaryCTAFill);\n    border-color: var(--primaryCTABorder);\n  }\n\n  .ia-button.cancel {\n    background-color: var(--primaryErrorCTAFill);\n    border-color: var(--primaryErrorCTABorder);\n  }\n\n  .ia-button.external {\n    background: var(--secondaryCTAFill);\n    border-color: var(--secondaryCTABorder);\n  }\n"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/ia-logo.js":
/*!*********************************************!*\
  !*** ./src/BookNavigator/assets/ia-logo.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.svg)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <svg class=\"ia-logo\" width=\"27\" height=\"30\" viewBox=\"0 0 27 30\" xmlns=\"http://www.w3.org/2000/svg\" aria-labelledby=\"logoTitleID logoDescID\">\n    <title id=\"logoTitleID\">Internet Archive logo</title>\n    <desc id=\"logoDescID\">A line drawing of the Internet Archive headquarters building fa\xE7ade.</desc>\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <mask id=\"mask-2\" fill=\"white\">\n        <path d=\"M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z\" id=\"path-1\"></path>\n      </mask>\n      <use fill=\"#FFFFFF\" xlink:href=\"#path-1\"></use>\n      <g mask=\"url(#mask-2)\" fill=\"#FFFFFF\">\n        <path d=\"M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z\" id=\"swatch\"></path>\n      </g>\n    </g>\n  </svg>\n"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/icon_checkmark.js":
/*!****************************************************!*\
  !*** ./src/BookNavigator/assets/icon_checkmark.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // Original SVG object for reference
// <svg height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m4.33333333 10-4.33333333-4.16666667 1.73333333-1.66666666 2.6 2.5 6.93333337-6.66666667 1.7333333 1.66666667z" fill="#fff" fill-rule="evenodd"/></svg>

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTMgMTAiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNC4zMzMzMzMzMyAxMC00LjMzMzMzMzMzLTQuMTY2NjY2NjcgMS43MzMzMzMzMy0xLjY2NjY2NjY2IDIuNiAyLjUgNi45MzMzMzMzNy02LjY2NjY2NjY3IDEuNzMzMzMzMyAxLjY2NjY2NjY3eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/icon_close.js":
/*!************************************************!*\
  !*** ./src/BookNavigator/assets/icon_close.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbGxlZGJ5PSJjbG9zZVRpdGxlSUQgY2xvc2VEZXNjSUQiPjxwYXRoIGQ9Ik0yOS4xOTIgMTAuODA4YTEuNSAxLjUgMCAwMTAgMi4xMkwyMi4xMjIgMjBsNy4wNyA3LjA3MmExLjUgMS41IDAgMDEtMi4xMiAyLjEyMWwtNy4wNzMtNy4wNy03LjA3IDcuMDdhMS41IDEuNSAwIDAxLTIuMTIxLTIuMTJsNy4wNy03LjA3My03LjA3LTcuMDdhMS41IDEuNSAwIDAxMi4xMi0yLjEyMUwyMCAxNy44NzhsNy4wNzItNy4wN2ExLjUgMS41IDAgMDEyLjEyMSAweiIgY2xhc3M9ImZpbGwtY29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="]))));

/***/ }),

/***/ "./src/BookNavigator/assets/icon_sort_asc.js":
/*!***************************************************!*\
  !*** ./src/BookNavigator/assets/icon_sort_asc.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<svg name=\"sort-asc\" height=\"18\" viewBox=\"0 0 18 18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z\" fill=\"#fff\" fill-rule=\"nonzero\"/><path d=\"m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z\" fill=\"#fff\" fill-rule=\"nonzero\"/><path d=\"m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.661538\" transform=\"matrix(1 0 0 -1 0 18.692308)\"/></g></svg>\n"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/icon_sort_desc.js":
/*!****************************************************!*\
  !*** ./src/BookNavigator/assets/icon_sort_desc.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<svg name=\"sort-desc\" height=\"18\" viewBox=\"0 0 18 18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z\" fill=\"#fff\" fill-rule=\"nonzero\"/><path d=\"m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z\" fill=\"#fff\" fill-rule=\"nonzero\"/><path d=\"m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.661538\"/></g></svg>\n"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/icon_sort_neutral.js":
/*!*******************************************************!*\
  !*** ./src/BookNavigator/assets/icon_sort_neutral.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<svg name=\"sort-neutral\" height=\"18\" viewBox=\"0 0 18 18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#fff\" fill-rule=\"evenodd\"><path d=\"m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z\" fill-rule=\"nonzero\"/><path d=\"m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z\" fill-rule=\"nonzero\"/><circle cx=\"13\" cy=\"9\" r=\"2\"/></g></svg>\n"]))));

/***/ }),

/***/ "./src/BookNavigator/assets/icon_volumes.js":
/*!**************************************************!*\
  !*** ./src/BookNavigator/assets/icon_volumes.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_2__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" aria-labelledby=\"volumesTitleID volumesDescID\">\n    <title id=\"volumesTitleID\">Volumes icon</title>\n    <desc id=\"volumesDescID\">Three books stacked on each other</desc>\n    <g fill=\"#ffffff\">\n      <path fill=\"#ffffff\" d=\"m9.83536396 0h10.07241114c.1725502.47117517.3378411.76385809.4958725.87804878.1295523.11419069.3199719.1998337.5712586.25692905.2512868.05709534.4704647.08564301.6575337.08564301h.2806036v15.24362526h-4.3355343v3.8106985h-4.44275v3.7250554h-12.01318261c-.27306495 0-.50313194-.085643-.69020098-.256929-.18706903-.1712861-.30936193-.3425721-.36687867-.5138581l-.06449694-.2785477v-14.2159091c0-.32815965.08627512-.5922949.25882537-.79240577.17255024-.20011086.34510049-.32150776.51765073-.36419068l.25882537-.0640244h3.36472977v-2.54767184c0-.31374722.08627513-.57067627.25882537-.77078714.17255025-.20011086.34510049-.32150776.51765074-.36419068l.25882536-.06402439h3.36472978v-2.56929047c0-.32815964.08627512-.5922949.25882537-.79240576.17255024-.20011087.34510049-.31430156.51765073-.34257207zm10.78355264 15.6294346v-13.53076498c-.2730649-.08536585-.4456152-.16380266-.5176507-.23531042-.1725502-.1424612-.2730649-.27078714-.3015441-.38497783v13.36031043h-9.87808272c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144124-.08962561.006929-.13988296.0640244-.05025735.0570953-.07538603.1427383-.07538603.256929s.02149898.210643.06449694.289357c.04299795.078714.08599591.1322062.12899387.1604767l.06449693.0216187h10.71905571zm-10.2449613-2.4412417h7.98003v-11.60421286h-7.98003zm1.6827837-9.41990022h4.6153002c.1725502 0 .3199718.05349224.4422647.16047672s.1834393.23891353.1834393.39578714c0 .15687362-.0611464.28519956-.1834393.38497783s-.2697145.1496674-.4422647.1496674h-4.6153002c-.1725503 0-.3199719-.04988913-.4422647-.1496674-.1222929-.09977827-.1834394-.22810421-.1834394-.38497783 0-.15687361.0611465-.28880266.1834394-.39578714.1222928-.10698448.2697144-.16047672.4422647-.16047672zm-6.08197737 13.50997782h7.72120467v-.8131929h-3.79610541c-.27306495 0-.49950224-.085643-.67931188-.256929-.17980964-.1712861-.29847284-.3425721-.35598958-.5138581l-.06449694-.2785477v-10.02023282h-2.82530086zm6.77217827-11.36890243h3.2139578c.1295522 0 .240956.05709534.3342113.17128603.0932554.11419069.139883.24972284.139883.40659645 0 .15687362-.0466276.28880267-.139883.39578714-.0932553.10698448-.2046591.16047672-.3342113.16047672h-3.2139578c-.1295523 0-.2373264-.05349224-.3233223-.16047672-.0859959-.10698447-.1289938-.23891352-.1289938-.39578714 0-.15687361.0429979-.29240576.1289938-.40659645s.19377-.17128603.3233223-.17128603zm-11.15043132 15.11557653h7.69942646v-.7491685h-3.79610539c-.25854616 0-.48135376-.0892462-.66842279-.2677384-.18706904-.1784922-.30936193-.3605876-.36687868-.546286l-.06449694-.2569291v-10.04101994h-2.80352266zm14.62237682-4.5606985h-.8191949v2.1410754h-9.89986085s-.04299796.0285477-.12899387.085643c-.08599592.0570954-.12201369.1427384-.10805331.2569291 0 .1141907.01786928.210643.05360784.289357.03573856.0787139.07538603.125.1189424.138858l.06449694.0432373h10.71905575v-2.9542683zm-4.3991936 3.8106985h-.8191949v2.077051h-9.8563045c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144125-.08962561.0105321-.13988296.0748337-.05025735.0643015-.07538603.1607538-.07538603.289357 0 .1141906.02149898.2070399.06449694.2785476.04299795.0715078.08599591.1141907.12899387.1280488l.06449693.0216186h10.69811519v-2.8686252z\" />\n    </g>\n  </svg>\n"]))));

/***/ }),

/***/ "./src/BookNavigator/book-navigator.js":
/*!*********************************************!*\
  !*** ./src/BookNavigator/book-navigator.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookNavigator": function() { return /* binding */ BookNavigator; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _internetarchive_shared_resize_observer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @internetarchive/shared-resize-observer */ "./node_modules/@internetarchive/shared-resize-observer/dist/index.js");
/* harmony import */ var _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @internetarchive/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _search_search_provider_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search/search-provider.js */ "./src/BookNavigator/search/search-provider.js");
/* harmony import */ var _downloads_downloads_provider_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./downloads/downloads-provider.js */ "./src/BookNavigator/downloads/downloads-provider.js");
/* harmony import */ var _visual_adjustments_visual_adjustments_provider_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./visual-adjustments/visual-adjustments-provider.js */ "./src/BookNavigator/visual-adjustments/visual-adjustments-provider.js");
/* harmony import */ var _bookmarks_bookmarks_provider_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bookmarks/bookmarks-provider.js */ "./src/BookNavigator/bookmarks/bookmarks-provider.js");
/* harmony import */ var _sharing_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sharing.js */ "./src/BookNavigator/sharing.js");
/* harmony import */ var _volumes_volumes_provider_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./volumes/volumes-provider.js */ "./src/BookNavigator/volumes/volumes-provider.js");
/* harmony import */ var _assets_ia_logo_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/ia-logo.js */ "./src/BookNavigator/assets/ia-logo.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// eslint-disable-next-line no-unused-vars
 // eslint-disable-next-line no-unused-vars










var events = {
  menuUpdated: 'menuUpdated',
  updateSideMenu: 'updateSideMenu',
  PostInit: 'PostInit',
  ViewportInFullScreen: 'ViewportInFullScreen'
};
var BookNavigator = /*#__PURE__*/function (_LitElement) {
  _inherits(BookNavigator, _LitElement);

  var _super = _createSuper(BookNavigator);

  function BookNavigator() {
    var _this;

    _classCallCheck(this, BookNavigator);

    _this = _super.call(this);
    _this.itemMD = undefined;
    _this.loaded = false;
    _this.bookReaderCannotLoad = false;
    _this.bookReaderLoaded = false;
    _this.bookreader = null;
    _this.bookIsRestricted = false;
    _this.downloadableTypes = [];
    _this.isAdmin = false;
    _this.lendingInitialized = false;
    _this.lendingStatus = {};
    _this.menuProviders = {};
    _this.menuShortcuts = [];
    _this.signedIn = false;
    /** @type {ModalManager} */

    _this.modal = undefined;
    /** @type {SharedResizeObserver} */

    _this.sharedObserver = undefined;
    _this.fullscreenBranding = _assets_ia_logo_js__WEBPACK_IMPORTED_MODULE_31__.default; // Untracked properties

    _this.sharedObserverHandler = undefined;
    _this.brWidth = 0;
    _this.brHeight = 0;
    _this.shortcutOrder = [
    /**
     * sets exit FS button (`this.fullscreenBranding1)
     * when `br.options.enableFSLogoShortcut`
     */
    'fullscreen', 'volumes', 'search', 'bookmarks'];
    return _this;
  }

  _createClass(BookNavigator, [{
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.sharedObserver.removeObserver({
        target: this.mainBRContainer,
        handler: this.sharedObserverHandler
      });
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.bindEventListeners();
      this.emitPostInit();
      this.loaded = true;
    }
  }, {
    key: "updated",
    value: function updated(changed) {
      if (!this.bookreader || !this.itemMD || !this.bookReaderLoaded) {
        return;
      }

      var reload = changed.has('loaded') && this.loaded;

      if (reload || changed.has('itemMD') || changed.has('bookreader') || changed.has('signedIn') || changed.has('isAdmin') || changed.has('modal')) {
        this.initializeBookSubmenus();
      }

      if (changed.has('sharedObserver') && this.bookreader) {
        this.loadSharedObserver();
        this.initializeBookSubmenus();
      }
    }
    /**
     * Global event emitter for when Book Navigator loads
     */

  }, {
    key: "emitPostInit",
    value: function emitPostInit() {
      var _this$bookreader;

      // emit global event when book nav has loaded with current bookreader selector
      this.dispatchEvent(new CustomEvent("BrBookNav:".concat(events.PostInit), {
        detail: {
          brSelector: (_this$bookreader = this.bookreader) === null || _this$bookreader === void 0 ? void 0 : _this$bookreader.el
        },
        bubbles: true,
        composed: true
      }));
    }
    /**
     *  @typedef {{
     *  baseHost: string,
     *  modal: ModalManager,
     *  sharedObserver: SharedResizeObserver,
     *  bookreader: BookReader,
     *  item: Item,
     *  signedIn: boolean,
     *  isAdmin: boolean,
     *  onProviderChange: (BookReader, object) => void,
     *  }} baseProviderConfig
     *
     * @return {baseProviderConfig}
     */

  }, {
    key: "baseProviderConfig",
    get: function get() {
      return {
        baseHost: this.baseHost,
        modal: this.modal,
        sharedObserver: this.sharedObserver,
        bookreader: this.bookreader,
        item: this.itemMD,
        signedIn: this.signedIn,
        isAdmin: this.isAdmin,
        onProviderChange: function onProviderChange() {}
      };
    }
  }, {
    key: "isWideEnoughToOpenMenu",
    get: function get() {
      return this.brWidth >= 640;
    }
    /**
     * Instantiates books submenus & their update callbacks
     *
     * NOTE: we are doing our best to scope bookreader's instance.
     * If your submenu provider uses a bookreader instance to read, manually
     * manipulate BookReader, please update the navigator's instance of it
     * to keep it in sync.
     */

  }, {
    key: "initializeBookSubmenus",
    value: function initializeBookSubmenus() {
      var _this2 = this;

      var providers = {
        downloads: new _downloads_downloads_provider_js__WEBPACK_IMPORTED_MODULE_26__.default(this.baseProviderConfig),
        share: new _sharing_js__WEBPACK_IMPORTED_MODULE_29__.default(this.baseProviderConfig),
        visualAdjustments: new _visual_adjustments_visual_adjustments_provider_js__WEBPACK_IMPORTED_MODULE_27__.default(_objectSpread(_objectSpread({}, this.baseProviderConfig), {}, {
          /** Update menu contents */
          onProviderChange: function onProviderChange() {
            _this2.updateMenuContents();
          }
        }))
      };

      if (this.bookreader.options.enableSearch) {
        providers.search = new _search_search_provider_js__WEBPACK_IMPORTED_MODULE_25__.default(_objectSpread(_objectSpread({}, this.baseProviderConfig), {}, {
          /**
           * Search specific menu updates
           * @param {BookReader} brInstance
           * @param {{ searchCanceled: boolean }} searchUpdates
           */
          onProviderChange: function onProviderChange() {
            var brInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var searchUpdates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (brInstance) {
              /* refresh br instance reference */
              _this2.bookreader = brInstance;
            }

            _this2.updateMenuContents();

            if (searchUpdates.openMenu === false) {
              return;
            }

            if (_this2.isWideEnoughToOpenMenu && !(searchUpdates !== null && searchUpdates !== void 0 && searchUpdates.searchCanceled)) {
              /* open side search menu */
              setTimeout(function () {
                _this2.updateSideMenu('search', 'open');
              }, 0);
            }
          }
        }));
      }

      if (this.bookreader.options.enableBookmarks) {
        providers.bookmarks = new _bookmarks_bookmarks_provider_js__WEBPACK_IMPORTED_MODULE_28__.default(_objectSpread(_objectSpread({}, this.baseProviderConfig), {}, {
          onProviderChange: function onProviderChange(bookmarks) {
            var method = Object.keys(bookmarks).length ? 'add' : 'remove';

            _this2["".concat(method, "MenuShortcut")]('bookmarks');

            _this2.updateMenuContents();
          }
        }));
      } // add shortcut for volumes if multipleBooksList exists


      if (this.bookreader.options.enableMultipleBooks) {
        providers.volumes = new _volumes_volumes_provider_js__WEBPACK_IMPORTED_MODULE_30__.default(_objectSpread(_objectSpread({}, this.baseProviderConfig), {}, {
          onProviderChange: function onProviderChange() {
            var brInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var volumesUpdates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (brInstance) {
              /* refresh br instance reference */
              _this2.bookreader = brInstance;
            }

            _this2.updateMenuContents();

            if (_this2.isWideEnoughToOpenMenu) {
              /* open side search menu */
              setTimeout(function () {
                _this2.updateSideMenu('volumes', 'open');
              });
            }
          }
        }));
      }

      this.menuProviders = providers;
      this.addMenuShortcut('search');
      this.addMenuShortcut('volumes');
      this.updateMenuContents();
    }
    /** gets element that houses the bookreader in light dom */

  }, {
    key: "mainBRContainer",
    get: function get() {
      var _this$bookreader2;

      return document.querySelector((_this$bookreader2 = this.bookreader) === null || _this$bookreader2 === void 0 ? void 0 : _this$bookreader2.el);
    }
    /** Fullscreen Shortcut */

  }, {
    key: "addFullscreenShortcut",
    value: function addFullscreenShortcut() {
      var closeFS = {
        icon: this.fullscreenShortcut,
        id: 'fullscreen'
      };
      this.menuShortcuts.push(closeFS);
      this.sortMenuShortcuts();
      this.emitMenuShortcutsUpdated();
    }
  }, {
    key: "deleteFullscreenShortcut",
    value: function deleteFullscreenShortcut() {
      var updatedShortcuts = this.menuShortcuts.filter(function (_ref) {
        var id = _ref.id;
        return id !== 'fullscreen';
      });
      this.menuShortcuts = updatedShortcuts;
      this.sortMenuShortcuts();
      this.emitMenuShortcutsUpdated();
    }
  }, {
    key: "closeFullscreen",
    value: function closeFullscreen() {
      this.bookreader.exitFullScreen();
    }
  }, {
    key: "fullscreenShortcut",
    get: function get() {
      var _this3 = this;

      return (0,lit__WEBPACK_IMPORTED_MODULE_24__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <button\n        @click=", "\n        title=\"Exit fullscreen view\"\n      >", "</button>\n    "])), function () {
        return _this3.closeFullscreen();
      }, this.fullscreenBranding);
    }
    /** End Fullscreen Shortcut */

    /**
     * Open side menu
     * @param {string} menuId
     * @param {('open'|'close'|'toggle')} action
     */

  }, {
    key: "updateSideMenu",
    value: function updateSideMenu() {
      var menuId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'open';

      if (!menuId) {
        return;
      }

      var event = new CustomEvent(events.updateSideMenu, {
        detail: {
          menuId: menuId,
          action: action
        }
      });
      this.dispatchEvent(event);
    }
    /**
     * Sets order of menu and emits custom event when done
     */

  }, {
    key: "updateMenuContents",
    value: function updateMenuContents() {
      var _this$menuProviders = this.menuProviders,
          search = _this$menuProviders.search,
          downloads = _this$menuProviders.downloads,
          visualAdjustments = _this$menuProviders.visualAdjustments,
          share = _this$menuProviders.share,
          bookmarks = _this$menuProviders.bookmarks,
          volumes = _this$menuProviders.volumes;
      var availableMenus = [volumes, search, bookmarks, visualAdjustments, share].filter(function (menu) {
        return !!menu;
      });

      if (this.shouldShowDownloadsMenu()) {
        downloads === null || downloads === void 0 ? void 0 : downloads.update(this.downloadableTypes);
        availableMenus.splice(1, 0, downloads);
      }

      var event = new CustomEvent(events.menuUpdated, {
        detail: availableMenus
      });
      this.dispatchEvent(event);
    }
    /**
     * Confirms if we should show the downloads menu
     * @returns {bool}
     */

  }, {
    key: "shouldShowDownloadsMenu",
    value: function shouldShowDownloadsMenu() {
      if (this.bookIsRestricted === false) {
        return true;
      }

      if (this.isAdmin) {
        return true;
      }

      var _this$lendingStatus$u = this.lendingStatus.user_loan_record,
          user_loan_record = _this$lendingStatus$u === void 0 ? {} : _this$lendingStatus$u;
      var hasNoLoanRecord = Array.isArray(user_loan_record);
      /* (bc PHP assoc. arrays) */

      if (hasNoLoanRecord) {
        return false;
      }

      var hasValidLoan = user_loan_record.type && user_loan_record.type !== 'SESSION_LOAN';
      return hasValidLoan;
    }
    /**
     * Adds a provider object to the menuShortcuts array property if it isn't
     * already added. menuShortcuts are then sorted by shortcutOrder and
     * a menuShortcutsUpdated event is emitted.
     *
     * @param {string} menuId - a string matching the id property of a provider
     */

  }, {
    key: "addMenuShortcut",
    value: function addMenuShortcut(menuId) {
      if (this.menuShortcuts.find(function (m) {
        return m.id === menuId;
      })) {
        // menu is already there
        return;
      }

      if (!this.menuProviders[menuId]) {
        // no provider for this menu
        return;
      }

      this.menuShortcuts.push(this.menuProviders[menuId]);
      this.sortMenuShortcuts();
      this.emitMenuShortcutsUpdated();
    }
    /**
     * Removes a provider object from the menuShortcuts array and emits a
     * menuShortcutsUpdated event.
     *
     * @param {string} menuId - a string matching the id property of a provider
     */

  }, {
    key: "removeMenuShortcut",
    value: function removeMenuShortcut(menuId) {
      this.menuShortcuts = this.menuShortcuts.filter(function (m) {
        return m.id !== menuId;
      });
      this.emitMenuShortcutsUpdated();
    }
    /**
     * Sorts the menuShortcuts property by comparing each provider's id to
     * the id in each iteration over the shortcutOrder array.
     */

  }, {
    key: "sortMenuShortcuts",
    value: function sortMenuShortcuts() {
      var _this4 = this;

      this.menuShortcuts = this.shortcutOrder.reduce(function (shortcuts, id) {
        var menu = _this4.menuShortcuts.find(function (m) {
          return m.id === id;
        });

        if (menu) {
          shortcuts.push(menu);
        }

        return shortcuts;
      }, []);
    }
  }, {
    key: "emitMenuShortcutsUpdated",
    value: function emitMenuShortcutsUpdated() {
      var event = new CustomEvent('menuShortcutsUpdated', {
        detail: this.menuShortcuts
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "emitLoadingStatusUpdate",
    value: function emitLoadingStatusUpdate(loaded) {
      var event = new CustomEvent('loadingStateUpdated', {
        detail: {
          loaded: loaded
        }
      });
      this.dispatchEvent(event);
    }
    /**
     * Core bookreader event handler registry
     *
     * NOTE: we are trying to keep bookreader's instance in scope
     * Please update Book Navigator's instance reference of it to keep it current
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this5 = this;

      window.addEventListener('BookReader:PostInit', function (e) {
        _this5.bookreader = e.detail.props;
        _this5.bookReaderLoaded = true;
        _this5.bookReaderCannotLoad = false;

        _this5.emitLoadingStatusUpdate(true);

        _this5.loadSharedObserver();

        setTimeout(function () {
          _this5.bookreader.resize();
        }, 0);
      });
      window.addEventListener('BookReader:fullscreenToggled', function (event) {
        var _event$detail$props = event.detail.props,
            brInstance = _event$detail$props === void 0 ? null : _event$detail$props;

        if (brInstance) {
          _this5.bookreader = brInstance;
        }

        _this5.manageFullScreenBehavior();
      }, {
        passive: true
      });
      window.addEventListener('BookReader:ToggleSearchMenu', function (event) {
        _this5.dispatchEvent(new CustomEvent(events.updateSideMenu, {
          detail: {
            menuId: 'search',
            action: 'toggle'
          }
        }));
      });
      window.addEventListener('LendingFlow:PostInit', function (_ref2) {
        var detail = _ref2.detail;
        var downloadTypesAvailable = detail.downloadTypesAvailable,
            lendingStatus = detail.lendingStatus,
            isAdmin = detail.isAdmin,
            previewType = detail.previewType;
        _this5.lendingInitialized = true;
        _this5.downloadableTypes = downloadTypesAvailable;
        _this5.lendingStatus = lendingStatus;
        _this5.isAdmin = isAdmin;
        _this5.bookReaderCannotLoad = previewType === 'singlePagePreview';

        _this5.emitLoadingStatusUpdate(true);
      });
      window.addEventListener('BRJSIA:PostInit', function (_ref3) {
        var detail = _ref3.detail;
        var isRestricted = detail.isRestricted,
            downloadURLs = detail.downloadURLs;
        _this5.bookReaderLoaded = true;
        _this5.downloadableTypes = downloadURLs;
        _this5.bookIsRestricted = isRestricted;
      });
    }
  }, {
    key: "loadSharedObserver",
    value: function loadSharedObserver() {
      var _this$sharedObserver;

      this.sharedObserverHandler = {
        handleResize: this.handleResize.bind(this)
      };
      (_this$sharedObserver = this.sharedObserver) === null || _this$sharedObserver === void 0 ? void 0 : _this$sharedObserver.addObserver({
        target: this.mainBRContainer,
        handler: this.sharedObserverHandler
      });
    }
    /**
     * Uses resize observer to fire BookReader's `resize` functionality
     * We do not want to trigger resize IF:
     *  - book animation is happening
     *  - book is in fullscreen (fullscreen is handled separately)
     *
     * @param { target: HTMLElement, contentRect: DOMRectReadOnly } entry
     */

  }, {
    key: "handleResize",
    value: function handleResize(_ref4) {
      var contentRect = _ref4.contentRect,
          target = _ref4.target;
      var startBrWidth = this.brWidth;
      var startBrHeight = this.brHeight;
      var animating = this.bookreader.animating;

      if (target === this.mainBRContainer) {
        this.brWidth = contentRect.width;
        this.brHeight = contentRect.height;
      }

      if (!startBrWidth && this.brWidth) {
        // loading up, let's update side menus
        this.initializeBookSubmenus();
      }

      var widthChange = startBrWidth !== this.brWidth;
      var heightChange = startBrHeight !== this.brHeight;

      if (!animating && (widthChange || heightChange)) {
        var _this$bookreader3;

        (_this$bookreader3 = this.bookreader) === null || _this$bookreader3 === void 0 ? void 0 : _this$bookreader3.resize();
      }
    }
    /**
     * Manages Fullscreen behavior
     * This makes sure that controls are _always_ in view
     * We need this to accommodate LOAN BAR during fullscreen
     */

  }, {
    key: "manageFullScreenBehavior",
    value: function manageFullScreenBehavior() {
      this.emitFullScreenState();

      if (!this.bookreader.options.enableFSLogoShortcut) {
        return;
      }

      var isFullScreen = this.bookreader.isFullscreen();

      if (isFullScreen) {
        this.addFullscreenShortcut();
      } else {
        this.deleteFullscreenShortcut();
      }
    }
    /**
     * Relays fullscreen toggle events
     */

  }, {
    key: "emitFullScreenState",
    value: function emitFullScreenState() {
      var isFullScreen = this.bookreader.isFullscreen();
      var event = new CustomEvent('ViewportInFullScreen', {
        detail: {
          isFullScreen: isFullScreen
        }
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "itemImage",
    get: function get() {
      var _this$itemMD;

      var identifier = (_this$itemMD = this.itemMD) === null || _this$itemMD === void 0 ? void 0 : _this$itemMD.metadata.identifier;
      var url = "https://".concat(this.baseHost, "/services/img/").concat(identifier);
      return (0,lit__WEBPACK_IMPORTED_MODULE_24__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<img class=\"cover-img\" src=", " alt=\"cover image for ", "\">"])), url, identifier);
    }
  }, {
    key: "placeholder",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_24__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div class=\"placeholder\">", "</div>"])), this.itemImage);
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_24__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div id=\"book-navigator__root\">\n      ", "\n      ", "\n    </div>\n  "])), this.bookReaderCannotLoad ? this.placeholder : lit__WEBPACK_IMPORTED_MODULE_24__.nothing, !this.bookReaderCannotLoad ? (0,lit__WEBPACK_IMPORTED_MODULE_24__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<slot name=\"main\"></slot>"]))) : lit__WEBPACK_IMPORTED_MODULE_24__.nothing);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        itemMD: {
          type: Object
        },
        bookReaderLoaded: {
          type: Boolean
        },
        bookreader: {
          type: Object
        },
        bookIsRestricted: {
          type: Boolean
        },
        downloadableTypes: {
          type: Array
        },
        isAdmin: {
          type: Boolean
        },
        lendingInitialized: {
          type: Boolean
        },
        lendingStatus: {
          type: Object
        },
        menuProviders: {
          type: Object
        },
        menuShortcuts: {
          type: Array
        },
        signedIn: {
          type: Boolean
        },
        loaded: {
          type: Boolean
        },
        sharedObserver: {
          type: Object,
          attribute: false
        },
        modal: {
          type: Object,
          attribute: false
        },
        fullscreenBranding: {
          type: Object
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_24__.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    :host,\n    #book-navigator__root,\n    slot,\n    slot > * {\n      display: block;\n      height: inherit;\n      width: inherit;\n    }\n    .placeholder {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      margin: 5%;\n    }\n    .cover-img {\n      max-height: 300px;\n    }\n  "])));
    }
  }]);

  return BookNavigator;
}(lit__WEBPACK_IMPORTED_MODULE_24__.LitElement);
customElements.define('book-navigator', BookNavigator);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmark-button.js":
/*!********************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmark-button.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BookmarkButton; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BookmarkButton = /*#__PURE__*/function (_LitElement) {
  _inherits(BookmarkButton, _LitElement);

  var _super = _createSuper(BookmarkButton);

  function BookmarkButton() {
    var _this;

    _classCallCheck(this, BookmarkButton);

    _this = _super.call(this);
    _this.state = 'hollow';
    _this.side = undefined;
    return _this;
  }

  _createClass(BookmarkButton, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('bookmarkButtonClicked'));
    }
  }, {
    key: "title",
    get: function get() {
      return "".concat(this.state === 'hollow' ? 'Add' : 'Remove', " bookmark");
    }
  }, {
    key: "render",
    value: function render() {
      var position = this.side || 'right';
      return (0,lit__WEBPACK_IMPORTED_MODULE_11__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <button title=", " @click=", " class=", ">\n        <icon-bookmark state=", "></icon-bookmark>\n      </button>\n    "])), this.title, this.handleClick, position, this.state);
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      button {\n        -webkit-appearance: none;\n        appearance: none;\n        outline: 0;\n        border: none;\n        padding: 0;\n        height: 4rem;\n        width: 4rem;\n        background: transparent;\n        cursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 16 24' width='16'%3E%3Cg fill='%23333' fill-rule='evenodd'%3E%3Cpath d='m15 0c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1zm-2 2h-10c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v18l6-4.3181818 6 4.3181818v-18c0-.51283584-.3860402-.93550716-.8833789-.99327227z'/%3E%3Cpath d='m8.75 6v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\"), pointer;\n        position: relative;\n      }\n      button > * {\n        display: block;\n        position: absolute;\n        top: 0.2rem;\n      }\n      button.left > * {\n        left: 0.2rem;\n      }\n\n      button.right > * {\n        right: 0.2rem;\n      }\n    "])));
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        side: {
          type: String
        },
        state: {
          type: String
        }
      };
    }
  }]);

  return BookmarkButton;
}(lit__WEBPACK_IMPORTED_MODULE_11__.LitElement);


customElements.define('bookmark-button', BookmarkButton);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmark-edit.js":
/*!******************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmark-edit.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IABookmarkEdit": function() { return /* binding */ IABookmarkEdit; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/bookmark-colors.js */ "./src/BookNavigator/assets/bookmark-colors.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var IABookmarkEdit = /*#__PURE__*/function (_LitElement) {
  _inherits(IABookmarkEdit, _LitElement);

  var _super = _createSuper(IABookmarkEdit);

  function IABookmarkEdit() {
    var _this;

    _classCallCheck(this, IABookmarkEdit);

    _this = _super.call(this);
    _this.bookmark = {};
    _this.bookmarkColors = [];
    _this.renderHeader = false;
    _this.showBookmark = true;
    return _this;
  }

  _createClass(IABookmarkEdit, [{
    key: "emitSaveEvent",
    value: function emitSaveEvent(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('saveBookmark', {
        detail: {
          bookmark: this.bookmark
        }
      }));
    }
  }, {
    key: "emitDeleteEvent",
    value: function emitDeleteEvent() {
      this.dispatchEvent(new CustomEvent('deleteBookmark', {
        detail: {
          id: this.bookmark.id
        }
      }));
    }
  }, {
    key: "emitColorChangedEvent",
    value: function emitColorChangedEvent(colorId) {
      this.dispatchEvent(new CustomEvent('bookmarkColorChanged', {
        detail: {
          bookmarkId: this.bookmark.id,
          colorId: colorId
        }
      }));
    }
  }, {
    key: "changeColorTo",
    value: function changeColorTo(id) {
      this.bookmark.color = id;
      this.emitColorChangedEvent(id);
    }
  }, {
    key: "updateNote",
    value: function updateNote(e) {
      this.bookmark.note = e.currentTarget.value;
    }
  }, {
    key: "bookmarkColor",
    value: function bookmarkColor(color) {
      var _this2 = this;

      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <li>\n        <input type=\"radio\" name=\"color\" id=\"color_", "\" .value=", " @change=", " ?checked=", ">\n        <label for=\"color_", "\">\n          <icon-bookmark class=", "></icon-bookmark>\n        </label>\n      </li>\n    "])), color.id, color.id, function () {
        return _this2.changeColorTo(color.id);
      }, this.bookmark.color === color.id, color.id, color.className);
    }
  }, {
    key: "bookmarkTemplate",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=\"bookmark\">\n        <img src=", " />\n        <h4>Page ", "</h4>\n      </div>\n    "])), this.bookmark.thumbnail, this.bookmark.page);
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      <form action=\"\" method=\"put\" @submit=", ">\n        <fieldset>\n          <label for=\"note\">Note <small>(optional)</small></label>\n          <textarea rows=\"4\" cols=\"80\" name=\"note\" id=\"note\" @change=", ">", "</textarea>\n          <label for=\"color\">Bookmark color</label>\n          <ul>\n            ", "\n          </ul>\n          <div class=\"actions\">\n            <button type=\"button\" class=\"ia-button cancel\" @click=", ">Delete</button>\n            <input class=\"ia-button\" type=\"submit\" value=\"Save\">\n          </div>\n        </fieldset>\n      </form>\n    "])), this.renderHeader ? IABookmarkEdit.headerSection : lit__WEBPACK_IMPORTED_MODULE_12__.nothing, this.showBookmark ? this.bookmarkTemplate : lit__WEBPACK_IMPORTED_MODULE_12__.nothing, this.emitSaveEvent, this.updateNote, this.bookmark.note, (0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_11__.repeat)(this.bookmarkColors, function (color) {
        return color.id;
      }, this.bookmarkColor.bind(this)), this.emitDeleteEvent);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        bookmark: {
          type: Object
        },
        bookmarkColors: {
          type: Array
        },
        renderHeader: {
          type: Boolean
        },
        showBookmark: {
          type: Boolean
        }
      };
    }
  }, {
    key: "headerSection",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<header>\n      <h3>Edit Bookmark</h3>\n    </header>"])));
    }
  }, {
    key: "styles",
    get: function get() {
      var bookmarkEditCSS = (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n      padding: 0 1rem 2rem 1rem;\n      color: var(--primaryTextColor);\n    }\n\n    small {\n      font-style: italic;\n    }\n\n    .bookmark {\n      display: grid;\n      grid-template-columns: 37px 1fr;\n      grid-gap: 0 1rem;\n      align-items: center;\n    }\n\n    h4 {\n      margin: 0;\n      font-size: 1.4rem;\n    }\n\n    fieldset {\n      padding: 2rem 0 0 0;\n      border: none;\n    }\n\n    label {\n      display: block;\n      font-weight: bold;\n    }\n\n    p {\n      padding: 0;\n      margin: .5rem 0;\n      font-size: 1.2rem;\n      line-height: 120%;\n    }\n\n    textarea {\n      width: 100%;\n      margin-bottom: 2rem;\n      box-sizing: border-box;\n      font: normal 1.4rem \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      resize: vertical;\n    }\n\n    ul {\n      display: grid;\n      grid-template-columns: repeat(3, auto);\n      grid-gap: 0 2rem;\n      justify-content: start;\n      padding: 1rem 0 0 0;\n      margin: 0 0 2rem 0;\n      list-style: none;\n    }\n\n    li input {\n      display: none;\n    }\n\n    li label {\n      display: block;\n      min-width: 50px;\n      padding-top: .4rem;\n      text-align: center;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n\n    li input:checked + label {\n      border-color: var(--primaryTextColor);\n    }\n\n    input[type=\"submit\"] {\n      background: var(--primaryCTAFill);\n      border-color: var(--primaryCTABorder);\n    }\n\n    button {\n      background: var(--primaryErrorCTAFill);\n      border-color: var(--primaryErrorCTABorder);\n    }\n\n    .button {\n      -webkit-appearance: none;\n      appearance: none;\n      padding: .5rem 1rem;\n      box-sizing: border-box;\n      color: var(--primaryTextColor);\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n\n    .actions {\n      display: grid;\n      grid-template-columns: auto auto;\n      grid-gap: 0 1rem;\n      justify-items: stretch;\n    }\n    "])));
      return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_14__.default, _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_13__.default, bookmarkEditCSS];
    }
  }]);

  return IABookmarkEdit;
}(lit__WEBPACK_IMPORTED_MODULE_12__.LitElement);
customElements.define('ia-bookmark-edit', IABookmarkEdit);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmarks-list.js":
/*!*******************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmarks-list.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IABookmarksList": function() { return /* binding */ IABookmarksList; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _bookmark_edit_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bookmark-edit.js */ "./src/BookNavigator/bookmarks/bookmark-edit.js");
/* harmony import */ var _internetarchive_icon_edit_pencil_icon_edit_pencil_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @internetarchive/icon-edit-pencil/icon-edit-pencil.js */ "./node_modules/@internetarchive/icon-edit-pencil/icon-edit-pencil.js");
/* harmony import */ var _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/bookmark-colors.js */ "./src/BookNavigator/assets/bookmark-colors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var IABookmarksList = /*#__PURE__*/function (_LitElement) {
  _inherits(IABookmarksList, _LitElement);

  var _super = _createSuper(IABookmarksList);

  function IABookmarksList() {
    var _this;

    _classCallCheck(this, IABookmarksList);

    _this = _super.call(this);
    _this.activeBookmarkID = undefined;
    _this.bookmarkColors = [];
    _this.defaultBookmarkColor = {};
    _this.bookmarks = {};
    _this.editedBookmark = {};
    _this.renderHeader = false;
    return _this;
  }

  _createClass(IABookmarksList, [{
    key: "emitEditEvent",
    value: function emitEditEvent(e, bookmark) {
      this.dispatchEvent(new CustomEvent('bookmarkEdited', {
        detail: {
          bookmark: bookmark
        }
      }));
    }
  }, {
    key: "emitSelectedEvent",
    value: function emitSelectedEvent(bookmark) {
      this.activeBookmarkID = bookmark.id;
      this.dispatchEvent(new CustomEvent('bookmarkSelected', {
        detail: {
          bookmark: bookmark
        }
      }));
    }
  }, {
    key: "emitSaveBookmark",
    value: function emitSaveBookmark(bookmark) {
      this.dispatchEvent(new CustomEvent('saveBookmark', {
        detail: {
          bookmark: bookmark
        }
      }));
    }
  }, {
    key: "emitDeleteBookmark",
    value: function emitDeleteBookmark(id) {
      this.dispatchEvent(new CustomEvent('deleteBookmark', {
        detail: {
          id: id
        }
      }));
    }
  }, {
    key: "emitBookmarkColorChanged",
    value: function emitBookmarkColorChanged(_ref) {
      var detail = _ref.detail;
      var bookmarkId = detail.bookmarkId,
          colorId = detail.colorId;
      this.dispatchEvent(new CustomEvent('bookmarkColorChanged', {
        detail: {
          bookmarkId: bookmarkId,
          colorId: colorId
        }
      }));
    }
  }, {
    key: "emitAddBookmark",
    value: function emitAddBookmark() {
      this.dispatchEvent(new CustomEvent('addBookmark'));
    }
  }, {
    key: "editBookmark",
    value: function editBookmark(e, bookmark) {
      this.emitEditEvent(e, bookmark);
      this.editedBookmark = this.editedBookmark === bookmark ? {} : bookmark;
    }
  }, {
    key: "saveBookmark",
    value: function saveBookmark(_ref2) {
      var detail = _ref2.detail;
      var bookmark = detail.bookmark;
      this.editedBookmark = {};
      this.emitSaveBookmark(bookmark);
    }
  }, {
    key: "deleteBookmark",
    value: function deleteBookmark(_ref3) {
      var detail = _ref3.detail;
      var id = detail.id;
      this.editedBookmark = {};
      this.emitDeleteBookmark(id);
    }
  }, {
    key: "bookmarkColorInfo",
    value: function bookmarkColorInfo() {
      var colorVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.bookmarkColors.find(function (labelInfo) {
        return (labelInfo === null || labelInfo === void 0 ? void 0 : labelInfo.id) === colorVal;
      });
    }
  }, {
    key: "bookmarkItem",
    value: function bookmarkItem(bookmark) {
      var _this2 = this;

      var editMode = this.editedBookmark.id === bookmark.id;

      var _this$bookmarkColorIn = this.bookmarkColorInfo(bookmark.color),
          className = _this$bookmarkColorIn.className;

      var activeClass = bookmark.id === this.activeBookmarkID ? 'active' : '';
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <li\n        @click=", "\n        tabindex=\"0\"\n        data-pageIndex=", "\n      >\n        <div class=\"separator\"></div>\n        <div class=\"content ", "\">\n          <button\n            class=\"edit\"\n            @click=", "\n            title=\"Edit this bookmark\"\n          >\n            <ia-icon-edit-pencil></ia-icon-edit-pencil>\n          </button>\n          <h4>\n            <icon-bookmark class=", "></icon-bookmark>\n            <span> Page ", "</span>\n          </h4>\n          ", "\n          ", "\n        </div>\n      </li>\n    "])), function () {
        return _this2.emitSelectedEvent(bookmark);
      }, bookmark.id, activeClass, function (e) {
        return _this2.editBookmark(e, bookmark);
      }, className, bookmark.page, !editMode && bookmark.note ? (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<p>", "</p>"])), bookmark.note) : lit__WEBPACK_IMPORTED_MODULE_17__.nothing, editMode ? this.editBookmarkComponent : lit__WEBPACK_IMPORTED_MODULE_17__.nothing);
    }
  }, {
    key: "editBookmarkComponent",
    get: function get() {
      var showBookmark = false;
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <ia-bookmark-edit\n        .bookmark=", "\n        .bookmarkColors=", "\n        .defaultBookmarkColor=", "\n        .showBookmark=", "\n        @saveBookmark=", "\n        @deleteBookmark=", "\n        @bookmarkColorChanged=", "\n      ></ia-bookmark-edit>\n    "])), this.editedBookmark, this.bookmarkColors, this.defaultBookmarkColor, showBookmark, this.saveBookmark, this.deleteBookmark, this.emitBookmarkColorChanged);
    }
  }, {
    key: "sortBookmarks",
    value: function sortBookmarks() {
      var _this3 = this;

      var sortedKeys = Object.keys(this.bookmarks).sort(function (a, b) {
        if (+a > +b) {
          return 1;
        }

        if (+a < +b) {
          return -1;
        }

        return 0;
      });
      var sortedBookmarks = sortedKeys.map(function (key) {
        return _this3.bookmarks[key];
      });
      return sortedBookmarks;
    }
  }, {
    key: "bookmarksCount",
    get: function get() {
      var count = this.bookmarks.length;
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<small>(", ")</small>"])), count);
    }
  }, {
    key: "headerSection",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<header>\n      <h3>\n        Bookmarks\n        ", "\n      </h3>\n    </header>"])), this.bookmarks.length ? this.bookmarksCount : lit__WEBPACK_IMPORTED_MODULE_17__.nothing);
    }
  }, {
    key: "bookmarkslist",
    get: function get() {
      var sortedBookmarks = this.sortBookmarks();
      var bookmarks = (0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_16__.repeat)(sortedBookmarks, function (bookmark) {
        return bookmark === null || bookmark === void 0 ? void 0 : bookmark.id;
      }, this.bookmarkItem.bind(this));
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <ul>\n        ", "\n        <div class=\"separator\"></div>\n      </ul>\n    "])), bookmarks);
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n    "])), this.renderHeader ? this.headerSection : lit__WEBPACK_IMPORTED_MODULE_17__.nothing, Object.keys(this.bookmarks).length ? this.bookmarkslist : lit__WEBPACK_IMPORTED_MODULE_17__.nothing);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        activeBookmarkID: {
          type: Number
        },
        bookmarkColors: {
          type: Array
        },
        defaultBookmarkColor: {
          type: Object
        },
        bookmarks: {
          type: Object
        },
        editedBookmark: {
          type: Object
        },
        renderHeader: {
          type: Boolean
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      var main = (0,lit__WEBPACK_IMPORTED_MODULE_17__.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        overflow-y: auto;\n        box-sizing: border-box;\n        color: var(--primaryTextColor);\n        margin-bottom: 2rem;\n        --activeBorderWidth: 2px;\n      }\n\n      icon-bookmark {\n        width: 16px;\n        height: 24px;\n      }\n\n      .separator {\n        background-color: var(--secondaryBGColor);\n        width: 98%;\n        margin: 1px auto;\n        height: 1px;\n      }\n\n      small {\n        font-style: italic;\n      }\n\n      h4 {\n        margin: 0;\n        font-size: 1.4rem;\n      }\n      h4 * {\n        display: inline-block;\n      }\n      h4 icon-bookmark {\n        vertical-align: bottom;\n      }\n      h4 span {\n        vertical-align: top;\n        padding-top: 1%;\n      }\n\n      p {\n        padding: 0;\n        margin: 5px 0 0 0;\n        width: 98%;\n        overflow-wrap: break-word;\n      }\n\n      ia-bookmark-edit {\n        margin: 5px 5px 3px 6px;\n      }\n\n      ul {\n        padding: 0;\n        list-style: none;\n        margin: var(--activeBorderWidth) 0.5rem 1rem 0;\n      }\n      ul > li:first-child .separator {\n        display: none;\n      }\n      li {\n        cursor: pointer;\n        outline: none;\n        position: relative;\n      }\n      li .content {\n        padding: 2px 0 4px 2px;\n        border: var(--activeBorderWidth) solid transparent;\n        padding: .2rem 0 .4rem .2rem;\n      }\n      li .content.active {\n        border: var(--activeBorderWidth) solid #538bc5;\n      }\n      li button.edit {\n        padding: 5px 2px 0 0;\n        background: transparent;\n        cursor: pointer;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        text-align: right;\n        -webkit-appearance: none;\n        appearance: none;\n        outline: none;\n        box-sizing: border-box;\n        border: none;\n      }\n      li button.edit > * {\n        display: block;\n        height: 100%;\n        width: 100%;\n      }\n    "])));
      return [main, _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_20__.default];
    }
  }]);

  return IABookmarksList;
}(lit__WEBPACK_IMPORTED_MODULE_17__.LitElement);
customElements.define('ia-bookmarks-list', IABookmarksList);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmarks-loginCTA.js":
/*!***********************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmarks-loginCTA.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BookmarksLogin = /*#__PURE__*/function (_LitElement) {
  _inherits(BookmarksLogin, _LitElement);

  var _super = _createSuper(BookmarksLogin);

  function BookmarksLogin() {
    var _this;

    _classCallCheck(this, BookmarksLogin);

    _this = _super.call(this);
    _this.url = 'https://archive.org/account/login';
    return _this;
  }

  _createClass(BookmarksLogin, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_11__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <p>A free account is required to save and access bookmarks.</p>\n      <a class=\"ia-button link primary\" href=\"", "\">Log in</a>\n    "])), this.url);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        url: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _assets_button_base_js__WEBPACK_IMPORTED_MODULE_12__.default;
    }
  }]);

  return BookmarksLogin;
}(lit__WEBPACK_IMPORTED_MODULE_11__.LitElement);

customElements.define('bookmarks-login', BookmarksLogin);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmarks-provider.js":
/*!***********************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmarks-provider.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BookmarksProvider; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _delete_modal_actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-modal-actions.js */ "./src/BookNavigator/delete-modal-actions.js");
/* harmony import */ var _bookmark_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmark-button.js */ "./src/BookNavigator/bookmarks/bookmark-button.js");
/* harmony import */ var _ia_bookmarks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ia-bookmarks.js */ "./src/BookNavigator/bookmarks/ia-bookmarks.js");
/* harmony import */ var _bookmark_edit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookmark-edit.js */ "./src/BookNavigator/bookmarks/bookmark-edit.js");
/* harmony import */ var _bookmarks_list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmarks-list.js */ "./src/BookNavigator/bookmarks/bookmarks-list.js");
/* harmony import */ var _internetarchive_icon_bookmark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @internetarchive/icon-bookmark */ "./node_modules/@internetarchive/icon-bookmark/index.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








customElements.define('icon-bookmark', _internetarchive_icon_bookmark__WEBPACK_IMPORTED_MODULE_10__.IAIconBookmark);

var BookmarksProvider = /*#__PURE__*/function () {
  function BookmarksProvider(options) {
    _classCallCheck(this, BookmarksProvider);

    var baseHost = options.baseHost,
        signedIn = options.signedIn,
        bookreader = options.bookreader,
        modal = options.modal,
        onProviderChange = options.onProviderChange;
    var referrerStr = "referer=".concat(encodeURIComponent(location.href));
    var loginUrl = "https://".concat(baseHost, "/account/login?").concat(referrerStr);
    this.component = document.createElement('ia-bookmarks');
    this.component.bookreader = bookreader;
    this.component.displayMode = signedIn ? 'bookmarks' : 'login';
    this.component.modal = modal;
    this.component.loginOptions = {
      loginClicked: this.bookmarksLoginClicked,
      loginUrl: loginUrl
    };
    this.bindEvents();
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_4__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<icon-bookmark state=\"hollow\" style=\"--iconWidth: 16px; --iconHeight: 24px;\"></icon-bookmark>"])));
    this.label = 'Bookmarks';
    this.id = 'bookmarks';
    this.onProviderChange = onProviderChange;
    this.component.setup();
    this.updateMenu(this.component.bookmarks.length);
  }

  _createClass(BookmarksProvider, [{
    key: "updateMenu",
    value: function updateMenu(count) {
      this.menuDetails = "(".concat(count, ")");
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.component.addEventListener('bookmarksChanged', this.bookmarksChanged.bind(this));
    }
  }, {
    key: "bookmarksChanged",
    value: function bookmarksChanged(_ref) {
      var detail = _ref.detail;
      var bookmarksLength = Object.keys(detail.bookmarks).length;
      this.updateMenu(bookmarksLength);
      this.onProviderChange(detail.bookmarks, detail.showSidePanel);
    }
  }, {
    key: "bookmarksLoginClicked",
    value: function bookmarksLoginClicked() {
      if (window.archive_analytics) {
        var _window$archive_analy;

        (_window$archive_analy = window.archive_analytics) === null || _window$archive_analy === void 0 ? void 0 : _window$archive_analy.send_event_no_sampling('BookReader', "BookmarksLogin", window.location.path);
      }
    }
  }]);

  return BookmarksProvider;
}();



/***/ }),

/***/ "./src/BookNavigator/bookmarks/ia-bookmarks.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/bookmarks/ia-bookmarks.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @internetarchive/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/index.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
/* harmony import */ var _bookmarks_loginCTA_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bookmarks-loginCTA.js */ "./src/BookNavigator/bookmarks/bookmarks-loginCTA.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













 // eslint-disable-next-line no-unused-vars




var api = {
  endpoint: '/services/bookmarks.php',
  headers: {
    'Content-Type': 'application/json'
  },
  delete: function _delete(page) {
    return fetch("".concat(this.endpoint, "?identifier=").concat(this.identifier, "&page_num=").concat(page), {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: this.headers
    });
  },
  get: function get(page) {
    return fetch("".concat(this.endpoint, "?identifier=").concat(this.identifier, "&page_num=").concat(page), {
      credentials: 'same-origin',
      method: 'GET',
      headers: this.headers
    });
  },
  getAll: function getAll() {
    return fetch("".concat(this.endpoint, "?identifier=").concat(this.identifier), {
      credentials: 'same-origin',
      method: 'GET',
      headers: this.headers
    });
  },
  post: function post(bookmark) {
    return this.sendBookmarkData(bookmark, 'POST');
  },
  put: function put(bookmark) {
    return this.sendBookmarkData(bookmark, 'POST');
  },
  sendBookmarkData: function sendBookmarkData(bookmark, method) {
    var notes = {
      note: bookmark.note,
      color: bookmark.color
    };
    return fetch("".concat(this.endpoint, "?identifier=").concat(this.identifier, "&page_num=").concat(bookmark.id), {
      credentials: 'same-origin',
      method: method,
      headers: this.headers,
      body: JSON.stringify({
        notes: notes
      })
    });
  }
};

var IABookmarks = /*#__PURE__*/function (_LitElement) {
  _inherits(IABookmarks, _LitElement);

  var _super = _createSuper(IABookmarks);

  function IABookmarks() {
    var _this;

    _classCallCheck(this, IABookmarks);

    _this = _super.call(this);
    _this.bookmarks = [];
    _this.bookreader = {};
    _this.editedBookmark = {};
    /** @type {ModalManager} */

    _this.modal = undefined;
    _this.loginOptions = {
      loginClicked: function loginClicked() {},
      loginUrl: ''
    };
    /**
     * Toggles display to either bookmarks or login cta
     * @param {('bookmarks'|'login')} displayMode
     */

    _this.displayMode = 'bookmarks';
    _this.bookmarkColors = [{
      id: 0,
      className: 'red'
    }, {
      id: 1,
      className: 'blue'
    }, {
      id: 2,
      className: 'green'
    }]; // eslint-disable-next-line

    _this.defaultColor = _this.bookmarkColors[0];
    _this.api = api;
    _this.deleteModalConfig = new _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_27__.ModalConfig({
      title: 'Delete Bookmark',
      headline: 'This bookmark contains a note. Deleting it will permanently delete the note. Are you sure?',
      headerColor: '#194880'
    });
    return _this;
  }

  _createClass(IABookmarks, [{
    key: "updated",
    value: function updated(changed) {
      if (changed.has('displayMode')) {
        this.updateDisplay();
      }

      this.emitBookmarksChanged();
    }
  }, {
    key: "setup",
    value: function setup() {
      this.api.identifier = this.bookreader.bookId;

      if (this.displayMode === 'login') {
        return;
      }

      this.fetchUserBookmarks();
      this.setBREventListeners();
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      if (this.displayMode === 'bookmarks') {
        this.fetchUserBookmarks();
      }
    }
  }, {
    key: "fetchUserBookmarks",
    value: function fetchUserBookmarks() {
      var _this2 = this;

      if (!this.api.identifier) {
        return;
      }

      this.fetchBookmarks().then(function () {
        _this2.initializeBookmarks();
      });
    }
  }, {
    key: "setBREventListeners",
    value: function setBREventListeners() {
      var _this3 = this;

      ['3PageViewSelected'].forEach(function (event) {
        window.addEventListener("BookReader:".concat(event), function (e) {
          setTimeout(function () {
            // wait a lil bit so bookreader can draw its DOM to attach onto
            _this3.renderBookmarkButtons();
          }, 100);
        });
      });
      ['pageChanged', '1PageViewSelected', '2PageViewSelected'].forEach(function (event) {
        window.addEventListener("BookReader:".concat(event), function (e) {
          setTimeout(function () {
            // wait a lil bit so bookreader can draw its DOM to attach onto
            _this3.renderBookmarkButtons();

            _this3.markActiveBookmark();
          }, 100);
        });
      });
      ['zoomOut', 'zoomIn', 'resize'].forEach(function (event) {
        window.addEventListener("BookReader:".concat(event), function () {
          _this3.renderBookmarkButtons();
        });
      });
    }
  }, {
    key: "initializeBookmarks",
    value: function initializeBookmarks() {
      this.renderBookmarkButtons();
      this.markActiveBookmark(true);
      this.emitBookmarksChanged();
    }
    /**
     * @typedef {object} Bookmark
     * @property {number} id - bookreader page index, becomes key store
     * @property {number} color - color number
     * @property {string} page - bookmark's page label to display
     * @property {string} note - optional, note that one can add
     * @property {string} thumbnail - optional, image url
     */

    /**
     * Formats bookmark view model
     * @param {Object} bookmarkAttrs
     * @param {number} bookmarkAttrs.leafNum
     * @param {string} bookmarkAttrs.notes
     *
     * @returns Bookmark
     */

  }, {
    key: "formatBookmark",
    value: function formatBookmark(_ref) {
      var _ref$leafNum = _ref.leafNum,
          leafNum = _ref$leafNum === void 0 ? '' : _ref$leafNum,
          _ref$notes = _ref.notes,
          notes = _ref$notes === void 0 ? {} : _ref$notes;
      var _notes$note = notes.note,
          note = _notes$note === void 0 ? '' : _notes$note,
          color = notes.color;
      var nomalizedParams = {
        note: note,
        color: this.getBookmarkColor(color) ? color : this.defaultColor.id
      };
      var page = IABookmarks.formatPage(this.bookreader.getPageNum(leafNum));
      var thumbnail = this.bookreader.getPageURI("".concat(leafNum).replace(/\D/g, ''), 32); // Request thumbnail 1/32 the size of original image

      var bookmark = _objectSpread(_objectSpread({}, nomalizedParams), {}, {
        id: leafNum,
        leafNum: leafNum,
        page: page,
        thumbnail: thumbnail
      });

      return bookmark;
    }
  }, {
    key: "fetchBookmarks",
    value: function () {
      var _fetchBookmarks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this4 = this;

        var resText, parsedResponse, _parsedResponse, success, _parsedResponse$error, error, _parsedResponse$value, bkmrks, _console, bookmarks;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.getAll().then(function (r) {
                  return r.text();
                });

              case 2:
                resText = _context.sent;

                try {
                  parsedResponse = JSON.parse(resText);
                } catch (e) {
                  parsedResponse = {
                    error: e.message
                  };
                }

                _parsedResponse = parsedResponse, success = _parsedResponse.success, _parsedResponse$error = _parsedResponse.error, error = _parsedResponse$error === void 0 ? 'Something happened while fetching bookmarks.' : _parsedResponse$error, _parsedResponse$value = _parsedResponse.value, bkmrks = _parsedResponse$value === void 0 ? [] : _parsedResponse$value;

                if (!success) {
                  (_console = console) === null || _console === void 0 ? void 0 : _console.warn('Error fetching bookmarks', error);
                }

                bookmarks = {};
                Object.keys(bkmrks).forEach(function (leafNum) {
                  var bookmark = bkmrks[leafNum];
                  var formattedLeafNum = parseInt(leafNum, 10);

                  var formattedBookmark = _this4.formatBookmark(_objectSpread(_objectSpread({}, bookmark), {}, {
                    leafNum: formattedLeafNum
                  }));

                  bookmarks[leafNum] = formattedBookmark;
                });
                this.bookmarks = bookmarks;
                return _context.abrupt("return", bookmarks);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchBookmarks() {
        return _fetchBookmarks.apply(this, arguments);
      }

      return fetchBookmarks;
    }()
  }, {
    key: "emitBookmarksChanged",
    value: function emitBookmarksChanged() {
      this.dispatchEvent(new CustomEvent('bookmarksChanged', {
        bubbles: true,
        composed: true,
        detail: {
          bookmarks: this.bookmarks
        }
      }));
    }
  }, {
    key: "emitBookmarkButtonClicked",
    value: function emitBookmarkButtonClicked() {
      this.dispatchEvent(new CustomEvent('bookmarkButtonClicked', {
        bubbles: true,
        composed: true,
        detail: {
          editedBookmark: this.editedBookmark
        }
      }));
    }
  }, {
    key: "bookmarkButtonClicked",
    value: function bookmarkButtonClicked(pageID) {
      if (this.getBookmark(pageID)) {
        this.confirmDeletion(pageID);
      } else {
        this.createBookmark(pageID);
      }
    }
  }, {
    key: "renderBookmarkButtons",
    value: function renderBookmarkButtons() {
      var _this5 = this;

      var pages = this.bookreader.$('.BRpagecontainer').not('.BRemptypage').get();
      pages.forEach(function (pageEl) {
        var existingButton = pageEl.querySelector('.bookmark-button');

        if (existingButton) {
          existingButton.remove();
        }

        var pageID = +pageEl.classList.value.match(/pagediv\d+/)[0].replace(/\D/g, '');

        var pageBookmark = _this5.getBookmark(pageID);

        var bookmarkState = pageBookmark ? 'filled' : 'hollow'; // eslint-disable-next-line

        var pageData = _this5.bookreader._models.book.getPage(pageID);

        var isViewable = pageData.isViewable;

        if (!isViewable) {
          return;
        }

        var bookmarkButton = document.createElement('div');
        ['mousedown', 'mouseup'].forEach(function (event) {
          bookmarkButton.addEventListener(event, function (e) {
            return e.stopPropagation();
          });
        });
        bookmarkButton.classList.add('bookmark-button', bookmarkState);

        if (pageBookmark) {
          bookmarkButton.classList.add(_this5.getBookmarkColor(pageBookmark.color));
        }

        var pageSide = pageEl.getAttribute('data-side') === 'L' && _this5.bookreader.mode === _this5.bookreader.constMode2up ? 'left' : 'right';
        (0,lit__WEBPACK_IMPORTED_MODULE_26__.render)((0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <bookmark-button\n          @bookmarkButtonClicked=", "\n          state=", "\n          side=", "\n        ></bookmark-button>"])), function () {
          return _this5.bookmarkButtonClicked(pageID);
        }, bookmarkState, pageSide), bookmarkButton);
        pageEl.appendChild(bookmarkButton);
      });
    }
    /**
     * Notes which bookmark is active
     *
     * @param {boolean} atSetup - denotes the first time this is fired
     */

  }, {
    key: "markActiveBookmark",
    value: function markActiveBookmark() {
      var atSetup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$bookreader = this.bookreader,
          mode = _this$bookreader.mode,
          constMode2up = _this$bookreader.constMode2up,
          constModeThumb = _this$bookreader.constModeThumb;
      var currentIndex = this.bookreader.currentIndex();

      if (mode === constModeThumb) {
        // keep active bookmark the same
        // no syncing until we can verify when a bookmark is "in view"
        var requestedPageHasBookmark = this.bookmarks[currentIndex];

        if (atSetup && requestedPageHasBookmark) {
          this.activeBookmarkID = currentIndex;
        }

        return;
      } // In 2up, we prefer the right side of the page to bookmark
      // so let's make sure we light that one up.


      if (mode === constMode2up) {
        var pagesInView = this.bookreader.displayedIndices;
        var pagesHaveActiveBookmark = pagesInView.includes(+this.activeBookmarkID);

        if (pagesHaveActiveBookmark) {
          return;
        }
      } // If a bookmark exists with the current index, set it as active


      if (this.bookmarks[currentIndex]) {
        this.activeBookmarkID = currentIndex;
        return;
      } // No bookmark for this page


      this.activeBookmarkID = '';
    }
  }, {
    key: "bookmarkEdited",
    value: function bookmarkEdited(_ref2) {
      var detail = _ref2.detail;
      var closeEdit = detail.bookmark.id === this.editedBookmark.id;
      this.editedBookmark = closeEdit ? {} : detail.bookmark;
    }
    /**
     * Gets bookmark by pageindex
     * @param {number} id
     */

  }, {
    key: "getBookmark",
    value: function getBookmark(id) {
      return this.bookmarks[id];
    }
  }, {
    key: "getBookmarkColor",
    value: function getBookmarkColor(id) {
      var _this$bookmarkColors$;

      return (_this$bookmarkColors$ = this.bookmarkColors.find(function (m) {
        return m.id === id;
      })) === null || _this$bookmarkColors$ === void 0 ? void 0 : _this$bookmarkColors$.className;
    }
    /**
     * Adds bookmark for current page
     */

  }, {
    key: "addBookmark",
    value: function addBookmark() {
      var pageID = this.bookreader.currentIndex();

      if (this.bookreader.mode === this.bookreader.constMode2up) {
        var pagesInView = this.bookreader.displayedIndices; // add bookmark to right hand page

        pageID = pagesInView[pagesInView.length - 1];
      }

      this.createBookmark(pageID);
    }
    /**
     * Creates bookmark for a given page
     * @param {number} pageID
     */

  }, {
    key: "createBookmark",
    value: function createBookmark(pageID) {
      var existingBookmark = this.getBookmark(pageID);

      if (existingBookmark) {
        this.bookmarkEdited({
          detail: {
            bookmark: existingBookmark
          }
        });
        this.emitBookmarkButtonClicked();
        return;
      }

      this.editedBookmark = this.formatBookmark({
        leafNum: pageID
      });
      this.api.post(this.editedBookmark);
      this.bookmarks[pageID] = this.editedBookmark;
      this.activeBookmarkID = pageID;
      this.disableAddBookmarkButton = true;
      this.renderBookmarkButtons();
      this.emitBookmarkButtonClicked();
    }
  }, {
    key: "bookmarkSelected",
    value: function bookmarkSelected(_ref3) {
      var detail = _ref3.detail;
      var leafNum = detail.bookmark.leafNum;
      this.bookreader.jumpToPage("".concat(this.bookreader.getPageNum("".concat(leafNum).replace(/\D/g, ''))));
      this.activeBookmarkID = leafNum;
    }
  }, {
    key: "saveBookmark",
    value: function saveBookmark(_ref4) {
      var detail = _ref4.detail;
      var existingBookmark = this.bookmarks[detail.bookmark.id];
      Object.assign(existingBookmark, detail.bookmark);
      this.api.put(existingBookmark);
      this.editedBookmark = {};
      this.renderBookmarkButtons();
    }
  }, {
    key: "confirmDeletion",
    value: function confirmDeletion(pageID) {
      var existingBookmark = this.getBookmark(pageID);

      if (existingBookmark.note) {
        this.displayDeletionModal(pageID);
        return;
      }

      this.deleteBookmark({
        detail: {
          id: "".concat(pageID)
        }
      });
    }
  }, {
    key: "displayDeletionModal",
    value: function displayDeletionModal(pageID) {
      var _this6 = this;

      var customModalContent = (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <delete-modal-actions\n        .deleteAction=", "\n        .cancelAction=", "\n        .pageID=", "\n      ></delete-modal-actions>\n    "])), function () {
        return _this6.deleteBookmark({
          detail: {
            id: "".concat(pageID)
          }
        });
      }, function () {
        return _this6.modal.closeModal();
      }, pageID);
      this.modal.showModal({
        config: this.deleteModalConfig,
        customModalContent: customModalContent
      });
    }
  }, {
    key: "deleteBookmark",
    value: function deleteBookmark(_ref5) {
      var detail = _ref5.detail;
      var id = detail.id;
      var currBookmarks = this.bookmarks;
      delete currBookmarks[id];
      this.bookmarks = _objectSpread({}, currBookmarks);
      this.api.delete(detail.id);
      this.editedBookmark = {};
      this.modal.closeModal();
      this.renderBookmarkButtons();
    }
    /**
     * Tells us if we should allow user to add bookmark via menu panel
     * returns { Boolean }
     */

  }, {
    key: "shouldEnableAddBookmarkButton",
    get: function get() {
      var pageToCheck = this.bookreader.mode === this.bookreader.constMode2up ? this.bookreader.displayedIndices[this.bookreader.displayedIndices.length - 1] : this.bookreader.currentIndex();
      var pageHasBookmark = this.getBookmark(pageToCheck);
      return !!pageHasBookmark;
    }
  }, {
    key: "allowAddingBookmark",
    get: function get() {
      return this.bookreader.mode !== this.bookreader.constModeThumb;
    }
  }, {
    key: "addBookmarkButton",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <button\n        class=\"ia-button primary\"\n        tabindex=\"-1\"\n        ?disabled=", "\n        @click=", ">\n        Add bookmark\n      </button>\n    "])), this.shouldEnableAddBookmarkButton, this.addBookmark);
    }
  }, {
    key: "bookmarksList",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <ia-bookmarks-list\n        @bookmarkEdited=", "\n        @bookmarkSelected=", "\n        @saveBookmark=", "\n        @deleteBookmark=", "\n        .editedBookmark=", "\n        .bookmarks=", "\n        .activeBookmarkID=", "\n        .bookmarkColors=", "\n        .defaultBookmarkColor=", ">\n      </ia-bookmarks-list>\n    "])), this.bookmarkEdited, this.bookmarkSelected, this.saveBookmark, this.deleteBookmark, this.editedBookmark, _objectSpread({}, this.bookmarks), this.activeBookmarkID, this.bookmarkColors, this.defaultColor);
    }
  }, {
    key: "bookmarkHelperMessage",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<p>Please use 1up or 2up view modes to add bookmark.</p>"])));
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var bookmarks = (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n    "])), this.bookmarksList, this.allowAddingBookmark ? this.addBookmarkButton : this.bookmarkHelperMessage);
      return (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <section class=\"bookmarks\">\n      ", "\n      </section>\n    "])), this.displayMode === 'login' ? (0,lit__WEBPACK_IMPORTED_MODULE_26__.html)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<bookmarks-login\n        @click=", "\n        .url=", "></bookmarks-login>"])), function () {
        return _this7.loginOptions.loginClicked();
      }, this.loginOptions.loginUrl) : bookmarks);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        activeBookmarkID: {
          type: String
        },
        bookmarks: {
          type: Array
        },
        bookreader: {
          type: Object
        },
        displayMode: {
          type: String
        },
        editedBookmark: {
          type: Object
        },
        deleteModalConfig: {
          type: Object
        },
        modal: {
          attribute: false
        },
        loginOptions: {
          type: Object,
          attribute: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      var mainCss = (0,lit__WEBPACK_IMPORTED_MODULE_26__.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      .bookmarks {\n        height: 100%;\n        overflow: hidden;\n        padding-bottom: 20px;\n      }\n\n      .list ia-bookmark-edit {\n        display: none;\n      }\n\n      .edit ia-bookmarks-list {\n        display: none;\n      }\n    "])));
      return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_28__.default, mainCss];
    }
  }, {
    key: "formatPage",
    value: function formatPage(page) {
      return isNaN(+page) ? "(".concat(page.replace(/\D/g, ''), ")") : page;
    }
  }]);

  return IABookmarks;
}(lit__WEBPACK_IMPORTED_MODULE_26__.LitElement);

customElements.define('ia-bookmarks', IABookmarks);

/***/ }),

/***/ "./src/BookNavigator/delete-modal-actions.js":
/*!***************************************************!*\
  !*** ./src/BookNavigator/delete-modal-actions.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteModalActions; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DeleteModalActions = /*#__PURE__*/function (_LitElement) {
  _inherits(DeleteModalActions, _LitElement);

  var _super = _createSuper(DeleteModalActions);

  function DeleteModalActions() {
    _classCallCheck(this, DeleteModalActions);

    return _super.apply(this, arguments);
  }

  _createClass(DeleteModalActions, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (0,lit__WEBPACK_IMPORTED_MODULE_11__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div>\n        <button class=\"delete\" @click=", ">Delete</button>\n        <button @click=", ">Cancel</button>\n      </div>\n    "])), function () {
        return _this.deleteAction({
          detail: {
            id: "".concat(_this.pageID)
          }
        });
      }, function () {
        return _this.cancelAction();
      });
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      div {\n        display: flex;\n        justify-content: center;\n        padding-top: 2rem;\n      }\n\n      button {\n        appearance: none;\n        padding: 0.5rem 1rem;\n        margin: 0 .5rem;\n        box-sizing: border-box;\n        font: 1.3rem \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        color: var(--primaryTextColor);\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        background: var(--primaryCTAFill);\n      }\n\n      .delete {\n        background: var(--primaryErrorCTAFill);\n      }\n    "])));
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        cancelAction: {
          type: Function
        },
        deleteAction: {
          type: Function
        },
        pageID: {
          type: String
        }
      };
    }
  }]);

  return DeleteModalActions;
}(lit__WEBPACK_IMPORTED_MODULE_11__.LitElement);


customElements.define('delete-modal-actions', DeleteModalActions);

/***/ }),

/***/ "./src/BookNavigator/downloads/downloads-provider.js":
/*!***********************************************************!*\
  !*** ./src/BookNavigator/downloads/downloads-provider.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DownloadsProvider; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_dl_icon_dl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @internetarchive/icon-dl/icon-dl */ "./node_modules/@internetarchive/icon-dl/icon-dl.js");
/* harmony import */ var _downloads__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./downloads */ "./src/BookNavigator/downloads/downloads.js");












var _templateObject, _templateObject2;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var menuBase = {
  pdf: {
    type: 'Encrypted Adobe PDF',
    url: '#',
    note: 'PDF files contain high quality images of pages.'
  },
  epub: {
    type: 'Encrypted Adobe ePub',
    url: '#',
    note: 'ePub files are smaller in size, but may contain errors.'
  }
};
var publicMenuBase = {
  pdf: "PDF",
  epub: "ePub"
};

var DownloadsProvider = /*#__PURE__*/function () {
  function DownloadsProvider(_ref) {
    var _bookreader$options;

    var bookreader = _ref.bookreader;

    _classCallCheck(this, DownloadsProvider);

    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<ia-icon-dl style=\"width: var(--iconWidth); height: var(--iconHeight);\"></ia-icon-dl>"])));
    this.label = 'Downloadable files';
    this.menuDetails = '';
    this.downloads = [];
    this.id = 'downloads';
    this.component = '';
    this.isBookProtected = (bookreader === null || bookreader === void 0 ? void 0 : (_bookreader$options = bookreader.options) === null || _bookreader$options === void 0 ? void 0 : _bookreader$options.isProtected) || false;
    this.computeAvailableTypes = this.computeAvailableTypes.bind(this);
    this.update = this.update.bind(this);
  }

  _createClass(DownloadsProvider, [{
    key: "update",
    value: function update(downloadTypes) {
      this.computeAvailableTypes(downloadTypes);
      this.component = this.menu;
      this.component.isBookProtected = this.isBookProtected;
      var ending = this.downloads.length === 1 ? '' : 's';
      this.menuDetails = "(".concat(this.downloads.length, " format").concat(ending, ")");
    }
    /**
     * Generates Download Menu Info for available types
     * sets global `downloads`
     * @param  availableTypes
     */

  }, {
    key: "computeAvailableTypes",
    value: function computeAvailableTypes() {
      var _this = this;

      var availableTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var menuData = availableTypes.reduce(function (found) {
        var incoming = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var _incoming = _slicedToArray(incoming, 2),
            _incoming$ = _incoming[0],
            type = _incoming$ === void 0 ? '' : _incoming$,
            _incoming$2 = _incoming[1],
            link = _incoming$2 === void 0 ? '' : _incoming$2;

        var formattedType = type.toLowerCase();
        var downloadOption = menuBase[formattedType] || null;

        if (downloadOption) {
          var menuButtonText = _this.isBookProtected ? menuBase[formattedType].type : publicMenuBase[formattedType];
          var menuInfo = Object.assign({}, downloadOption, {
            url: link,
            type: menuButtonText
          });
          found.push(menuInfo);
        }

        return found;
      }, []);
      this.downloads = menuData;
    }
  }, {
    key: "menu",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<ia-book-downloads .downloads=", "></ia-book-downloads>"])), this.downloads);
    }
  }]);

  return DownloadsProvider;
}();



/***/ }),

/***/ "./src/BookNavigator/downloads/downloads.js":
/*!**************************************************!*\
  !*** ./src/BookNavigator/downloads/downloads.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IABookDownloads": function() { return /* binding */ IABookDownloads; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;





function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IABookDownloads = /*#__PURE__*/function (_LitElement) {
  _inherits(IABookDownloads, _LitElement);

  var _super = _createSuper(IABookDownloads);

  function IABookDownloads() {
    var _this;

    _classCallCheck(this, IABookDownloads);

    _this = _super.call(this);
    _this.downloads = [];
    _this.expiration = 0;
    _this.renderHeader = false;
    _this.isBookProtected = false;
    return _this;
  }

  _createClass(IABookDownloads, [{
    key: "formatsCount",
    get: function get() {
      var count = this.downloads.length;
      return count ? (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<p>", " format", "</p>"])), count, count > 1 ? 's' : '') : (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "loanExpiryMessage",
    get: function get() {
      return this.expiration ? (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<h2>These files will expire in ", " days.</h2>"])), this.expiration) : (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "renderDownloadOptions",
    value: function renderDownloadOptions() {
      return this.downloads.map(function (option) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        <li>\n          <a class=\"ia-button link primary\" href=\"", "\">Get ", "</a>\n          ", "\n        </li>\n      "])), option.url, option.type, option.note ? (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<p>", "</p>"])), option.note) : (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""]))));
      });
    }
  }, {
    key: "header",
    get: function get() {
      if (!this.renderHeader) {
        return lit__WEBPACK_IMPORTED_MODULE_13__.nothing;
      }

      return (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <header>\n        <h3>Downloadable files</h3>\n        ", "\n      </header>\n    "])), this.formatsCount);
    }
  }, {
    key: "accessProtectedBook",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      <p>To access downloaded books, you need Adobe-compliant software on your device. The Internet Archive will administer this loan, but Adobe may also collect some information.</p>\n      <a class=\"ia-button external primary\" href=\"https://www.adobe.com/solutions/ebook/digital-editions/download.html\" rel=\"noopener noreferrer\" target=\"_blank\">Install Adobe Digital Editions</a>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      <ul>", "</ul>\n      ", "\n    "])), this.header, this.loanExpiryMessage, this.renderDownloadOptions(), this.isBookProtected ? this.accessProtectedBook : lit__WEBPACK_IMPORTED_MODULE_13__.nothing);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        downloads: {
          type: Array
        },
        expiration: {
          type: Number
        },
        renderHeader: {
          type: Boolean
        },
        isBookProtected: {
          type: Boolean
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      var mainCss = (0,lit__WEBPACK_IMPORTED_MODULE_13__.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        height: 100%;\n        padding: 1.5rem 0;\n        overflow-y: auto;\n        font-size: 1.4rem;\n        box-sizing: border-box;\n      }\n\n      a.close ia-icon {\n        --iconWidth: 18px;\n        --iconHeight: 18px;\n      }\n      a.close {\n        justify-self: end;\n      }\n\n      header {\n        display: flex;\n        align-items: center;\n        padding: 0 2rem;\n      }\n      header p {\n        padding: 0;\n        margin: 0;\n        font-size: 1.2rem;\n        font-weight: bold;\n        font-style: italic;\n      }\n      header div {\n        display: flex;\n        align-items: baseline;\n      }      \n\n      h2 {\n        font-size: 1.6rem;\n      }\n\n      h3 {\n        padding: 0;\n        margin: 0 1rem 0 0;\n        font-size: 1.4rem;\n      }\n\n      ul {\n        padding: 0;\n        margin: 0;\n        list-style: none;\n      }\n\n      p {\n        margin: .3rem 0 0 0;\n      }\n\n      li,\n      ul + p {\n        padding-bottom: 1.2rem;\n        font-size: 1.2rem;\n        line-height: 140%;\n      }\n    "])));
      return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_14__.default, mainCss];
    }
  }]);

  return IABookDownloads;
}(lit__WEBPACK_IMPORTED_MODULE_13__.LitElement);
customElements.define('ia-book-downloads', IABookDownloads);

/***/ }),

/***/ "./src/BookNavigator/search/a-search-result.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/search/a-search-result.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookSearchResult": function() { return /* binding */ BookSearchResult; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BookSearchResult = /*#__PURE__*/function (_LitElement) {
  _inherits(BookSearchResult, _LitElement);

  var _super = _createSuper(BookSearchResult);

  function BookSearchResult() {
    var _this;

    _classCallCheck(this, BookSearchResult);

    _this = _super.call(this);
    _this.matchRegex = new RegExp('{{{(.+?)}}}', 'g');
    return _this;
  }

  _createClass(BookSearchResult, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }, {
    key: "highlightedHit",
    value: function highlightedHit(hit) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_20__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <p>", "</p>\n    "])), (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_21__.unsafeHTML)(hit.replace(this.matchRegex, '<mark>$1</mark>')));
    }
  }, {
    key: "resultSelected",
    value: function resultSelected() {
      this.dispatchEvent(new CustomEvent('resultSelected', {
        bubbles: true,
        composed: true,
        detail: {
          match: this.match
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var match = this.match;
      var _match$par = match.par,
          par = _match$par === void 0 ? [] : _match$par;

      var _par = _slicedToArray(par, 1),
          _par$ = _par[0],
          resultDetails = _par$ === void 0 ? {} : _par$;

      var pageNumber = Number.isInteger(resultDetails.page) ? (0,lit__WEBPACK_IMPORTED_MODULE_20__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<p class=\"page-num\">Page -", "-</p>"])), resultDetails.page) : lit__WEBPACK_IMPORTED_MODULE_20__.nothing;
      var coverImage = (0,lit__WEBPACK_IMPORTED_MODULE_20__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<img src=\"", "\" />"])), match.cover);
      return (0,lit__WEBPACK_IMPORTED_MODULE_20__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <li @click=", ">\n        ", "\n        <h4>", "</h4>\n        ", "\n        ", "\n      </li>\n    "])), this.resultSelected, match.cover ? coverImage : lit__WEBPACK_IMPORTED_MODULE_20__.nothing, match.title || lit__WEBPACK_IMPORTED_MODULE_20__.nothing, pageNumber, this.highlightedHit(match.text));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        match: {
          type: Object
        }
      };
    }
  }]);

  return BookSearchResult;
}(lit__WEBPACK_IMPORTED_MODULE_20__.LitElement);
customElements.define('book-search-result', BookSearchResult);

/***/ }),

/***/ "./src/BookNavigator/search/search-provider.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/search/search-provider.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchProvider; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_search_icon_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internetarchive/icon-search/icon-search */ "./node_modules/@internetarchive/icon-search/icon-search.js");
/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results */ "./src/BookNavigator/search/search-results.js");



var _templateObject, _templateObject2, _templateObject3, _templateObject4;





function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var searchState = {
  query: '',
  results: [],
  resultsCount: 0,
  queryInProgress: false,
  errorMessage: ''
};

var SearchProvider = /*#__PURE__*/function () {
  function SearchProvider(_ref) {
    var onProviderChange = _ref.onProviderChange,
        bookreader = _ref.bookreader;

    _classCallCheck(this, SearchProvider);

    /* search menu events */
    this.onBookSearchInitiated = this.onBookSearchInitiated.bind(this);
    /* bookreader search events */

    this.onSearchStarted = this.onSearchStarted.bind(this);
    this.onSearchRequestError = this.onSearchRequestError.bind(this);
    this.onSearchResultsClicked = this.onSearchResultsClicked.bind(this);
    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
    this.onSearchResultsCleared = this.onSearchResultsCleared.bind(this);
    this.searchCanceledInMenu = this.searchCanceledInMenu.bind(this);
    /* class methods */

    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.getMenuDetails = this.getMenuDetails.bind(this);
    this.getComponent = this.getComponent.bind(this);
    this.advanceToPage = this.advanceToPage.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
    this.onProviderChange = onProviderChange;
    this.bookreader = bookreader;
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_5__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<ia-icon-search style=\"width: var(--iconWidth); height: var(--iconHeight);\"></ia-icon-search>"])));
    this.label = 'Search inside';
    this.menuDetails = this.getMenuDetails();
    this.id = 'search';
    this.component = this.getComponent();
    this.bindEventListeners();
  }

  _createClass(SearchProvider, [{
    key: "getMenuDetails",
    value: function getMenuDetails() {
      var _searchState = searchState,
          resultsCount = _searchState.resultsCount,
          query = _searchState.query,
          queryInProgress = _searchState.queryInProgress;

      if (queryInProgress || !query) {
        return lit__WEBPACK_IMPORTED_MODULE_5__.nothing;
      }

      var unit = resultsCount === 1 ? 'result' : 'results';
      return (0,lit__WEBPACK_IMPORTED_MODULE_5__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["(", " ", ")"])), resultsCount, unit);
    }
  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      window.addEventListener('BookReader:SearchStarted', this.onSearchStarted);
      window.addEventListener('BookReader:SearchCallback', this.onSearchResultsChange);
      window.addEventListener('BookReader:SearchCallbackEmpty', function (event) {
        _this.onSearchRequestError(event, 'noResults');
      });
      window.addEventListener('BookReader:SearchCallbackNotIndexed', function (event) {
        _this.onSearchRequestError(event, 'notIndexed');
      });
      window.addEventListener('BookReader:SearchCallbackError', function (event) {
        _this.onSearchRequestError(event);
      });
      window.addEventListener('BookReader:SearchResultsCleared', function () {
        _this.onSearchResultsCleared();
      });
      window.addEventListener('BookReader:SearchCanceled', function (e) {
        _this.onSearchCanceled(e);
      });
    }
    /**
     * Cancel search handler
     * resets `searchState`
     */

  }, {
    key: "onSearchCanceled",
    value: function onSearchCanceled() {
      searchState = {
        query: '',
        results: [],
        resultsCount: 0,
        queryInProgress: false,
        errorMessage: ''
      };
      var updateMenuFor = {
        searchCanceled: true
      };
      this.updateMenu(updateMenuFor);
    }
  }, {
    key: "onSearchStarted",
    value: function onSearchStarted(e) {
      var _e$detail$props = e.detail.props,
          _e$detail$props$term = _e$detail$props.term,
          term = _e$detail$props$term === void 0 ? '' : _e$detail$props$term,
          instance = _e$detail$props.instance;

      if (instance) {
        this.bookreader = instance;
      }

      searchState.query = term;
      searchState.results = [];
      searchState.resultsCount = 0;
      searchState.queryInProgress = true;
      searchState.errorMessage = '';
      this.updateMenu();
    }
  }, {
    key: "onBookSearchInitiated",
    value: function onBookSearchInitiated(_ref2) {
      var detail = _ref2.detail;
      searchState.query = detail.query;
      this.bookreader.search(searchState.query);
    }
  }, {
    key: "onSearchRequestError",
    value: function onSearchRequestError(event) {
      var _errorMessages$errorT, _instance$searchResul;

      var errorType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      var _event$detail$props = event.detail.props,
          props = _event$detail$props === void 0 ? {} : _event$detail$props;
      var _props$instance = props.instance,
          instance = _props$instance === void 0 ? null : _props$instance;

      if (instance) {
        /* keep bookreader instance reference up-to-date */
        this.bookreader = instance;
      }

      var errorMessages = {
        noResults: '0 results',
        notIndexed: "This book hasn't been indexed for searching yet.  We've just started indexing it,\n       so search should be available soon.  Please try again later.  Thanks!",
        default: 'Sorry, there was an error with your search.  Please try again.'
      };
      var messageToShow = (_errorMessages$errorT = errorMessages[errorType]) !== null && _errorMessages$errorT !== void 0 ? _errorMessages$errorT : errorMessages.default;
      searchState.query = (instance === null || instance === void 0 ? void 0 : (_instance$searchResul = instance.searchResults) === null || _instance$searchResul === void 0 ? void 0 : _instance$searchResul.q) || '';
      searchState.results = [];
      searchState.resultsCount = 0;
      searchState.queryInProgress = false;
      searchState.errorMessage = (0,lit__WEBPACK_IMPORTED_MODULE_5__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<p class=\"error\">", "</p>"])), messageToShow);
      this.updateMenu();
    }
  }, {
    key: "onSearchResultsChange",
    value: function onSearchResultsChange(_ref3) {
      var _ref3$detail$props = _ref3.detail.props,
          props = _ref3$detail$props === void 0 ? {} : _ref3$detail$props;
      var _props$instance2 = props.instance,
          instance = _props$instance2 === void 0 ? null : _props$instance2,
          _props$results = props.results,
          searchResults = _props$results === void 0 ? [] : _props$results;

      if (instance) {
        /* keep bookreader instance reference up-to-date */
        this.bookreader = instance;
      }

      var results = searchResults.matches || [];
      var resultsCount = results.length;
      var query = searchResults.q;
      var queryInProgress = false;
      searchState = {
        results: results,
        resultsCount: resultsCount,
        query: query,
        queryInProgress: queryInProgress,
        errorMessage: ''
      };
      this.updateMenu();
    }
  }, {
    key: "searchCanceledInMenu",
    value: function searchCanceledInMenu() {
      var _this$bookreader;

      (_this$bookreader = this.bookreader) === null || _this$bookreader === void 0 ? void 0 : _this$bookreader.cancelSearchRequest();
    }
  }, {
    key: "onSearchResultsCleared",
    value: function onSearchResultsCleared() {
      var _this$bookreader2, _this$bookreader2$sea;

      searchState = {
        query: '',
        results: [],
        resultsCount: 0,
        queryInProgress: false,
        errorMessage: ''
      };
      this.updateMenu({
        openMenu: false
      });
      (_this$bookreader2 = this.bookreader) === null || _this$bookreader2 === void 0 ? void 0 : (_this$bookreader2$sea = _this$bookreader2.searchView) === null || _this$bookreader2$sea === void 0 ? void 0 : _this$bookreader2$sea.clearSearchFieldAndResults(false);
    }
    /**
     * Relays how to update side menu given the context of a search update
      @param {{searchCanceled: boolean}} searchUpdates
     */

  }, {
    key: "updateMenu",
    value: function updateMenu() {
      var searchUpdates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.menuDetails = this.getMenuDetails();
      this.component = this.getComponent();
      this.onProviderChange(this.bookreader, searchUpdates);
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var _searchState2 = searchState,
          query = _searchState2.query,
          results = _searchState2.results,
          queryInProgress = _searchState2.queryInProgress,
          errorMessage = _searchState2.errorMessage;
      return (0,lit__WEBPACK_IMPORTED_MODULE_5__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    <ia-book-search-results\n      .query=", "\n      .results=", "\n      .errorMessage=", "\n      ?queryInProgress=", "\n      ?renderSearchAllFiles=", "\n      @resultSelected=", "\n      @bookSearchInitiated=", "\n      @bookSearchResultsCleared=", "\n      @bookSearchCanceled=", "\n    ></ia-book-search-results>\n  "])), query, results, errorMessage, queryInProgress, false, this.onSearchResultsClicked, this.onBookSearchInitiated, this.onSearchResultsCleared, this.searchCanceledInMenu);
    }
  }, {
    key: "onSearchResultsClicked",
    value: function onSearchResultsClicked(_ref4) {
      var detail = _ref4.detail;
      var page = detail.match.par[0].page;
      this.advanceToPage(page);
    }
  }, {
    key: "advanceToPage",
    value: function advanceToPage(leaf) {
      var page = this.bookreader.leafNumToIndex(leaf);

      this.bookreader._searchPluginGoToResult(page);
    }
  }]);

  return SearchProvider;
}();



/***/ }),

/***/ "./src/BookNavigator/search/search-results.js":
/*!****************************************************!*\
  !*** ./src/BookNavigator/search/search-results.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IABookSearchResults": function() { return /* binding */ IABookSearchResults; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_ia_activity_indicator_ia_activity_indicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @internetarchive/ia-activity-indicator/ia-activity-indicator */ "./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js");
/* harmony import */ var _a_search_result_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./a-search-result.js */ "./src/BookNavigator/search/a-search-result.js");
/* harmony import */ var _assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icon_checkmark.js */ "./src/BookNavigator/assets/icon_checkmark.js");
/* harmony import */ var _assets_icon_close_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icon_close.js */ "./src/BookNavigator/assets/icon_close.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable class-methods-use-this */






var IABookSearchResults = /*#__PURE__*/function (_LitElement) {
  _inherits(IABookSearchResults, _LitElement);

  var _super = _createSuper(IABookSearchResults);

  function IABookSearchResults() {
    var _this;

    _classCallCheck(this, IABookSearchResults);

    _this = _super.call(this);
    _this.results = [];
    _this.query = '';
    _this.queryInProgress = false;
    _this.renderHeader = false;
    _this.renderSearchAllFields = false;
    _this.displayResultImages = false;
    _this.errorMessage = '';

    _this.bindBookReaderListeners();

    return _this;
  }
  /** @inheritdoc */


  _createClass(IABookSearchResults, [{
    key: "updated",
    value: function updated() {
      this.focusOnInputIfNecessary();
    }
  }, {
    key: "bindBookReaderListeners",
    value: function bindBookReaderListeners() {
      document.addEventListener('BookReader:SearchCallback', this.setResults.bind(this));
    }
    /**
     * Provide immediate input focus if there aren't any results displayed
     */

  }, {
    key: "focusOnInputIfNecessary",
    value: function focusOnInputIfNecessary() {
      if (this.results.length) {
        return;
      }

      var searchInput = this.shadowRoot.querySelector('input[type=\'search\']');
      searchInput.focus();
    }
  }, {
    key: "setResults",
    value: function setResults(_ref) {
      var detail = _ref.detail;
      this.results = detail.results;
    }
  }, {
    key: "setQuery",
    value: function setQuery(e) {
      this.query = e.currentTarget.value;
    }
  }, {
    key: "performSearch",
    value: function performSearch(e) {
      e.preventDefault();
      var input = e.currentTarget.querySelector('input[type="search"]');

      if (!input || !input.value) {
        return;
      }

      this.dispatchEvent(new CustomEvent('bookSearchInitiated', {
        bubbles: true,
        composed: true,
        detail: {
          query: this.query
        }
      }));
    }
  }, {
    key: "selectResult",
    value: function selectResult() {
      this.dispatchEvent(new CustomEvent('closeMenu', {
        bubbles: true,
        composed: true
      }));
    }
  }, {
    key: "cancelSearch",
    value: function cancelSearch() {
      this.queryInProgress = false;
      this.dispatchSearchCanceled();
    }
  }, {
    key: "dispatchSearchCanceled",
    value: function dispatchSearchCanceled() {
      this.dispatchEvent(new Event('bookSearchCanceled'));
    }
  }, {
    key: "resultsCount",
    get: function get() {
      var count = this.results.length;
      return count ? (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<p>(", " result", ")</p>"])), count, count > 1 ? 's' : '') : lit__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
  }, {
    key: "headerSection",
    get: function get() {
      var header = (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<header>\n      <h3>Search inside</h3>\n      ", "\n    </header>"])), this.resultsCount);
      return this.renderHeader ? header : lit__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
  }, {
    key: "searchMultipleControls",
    get: function get() {
      var controls = (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <input name=\"all_files\" id=\"all_files\" type=\"checkbox\" />\n      <label class=\"checkbox\" for=\"all_files\">Search all files</label>\n    "])));
      return this.renderSearchAllFiles ? controls : lit__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
  }, {
    key: "loadingIndicator",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <div class=\"loading\">\n        <ia-activity-indicator mode=\"processing\"></ia-activity-indicator>\n        <p>Searching</p>\n        <button class=\"ia-button external cancel-search\" @click=", ">Cancel</button>\n      </div>\n    "])), this.cancelSearch);
    }
  }, {
    key: "resultsSet",
    get: function get() {
      var _this2 = this;

      var resultsClass = this.displayResultImages ? 'show-image' : '';
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <ul class=\"results ", "\">\n        ", "\n      </ul>\n    "])), resultsClass, this.results.map(function (match) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            <book-search-result\n              .match=", "\n              @resultSelected=", "\n            ></book-search-result>\n          "])), match, _this2.selectResult);
      }));
    }
  }, {
    key: "searchForm",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <form action=\"\" method=\"get\" @submit=", ">\n        <fieldset>\n          ", "\n          <input\n            type=\"search\"\n            name=\"query\"\n            alt=\"Search inside this book.\"\n            @keyup=", "\n            .value=", "\n          />\n        </fieldset>\n      </form>\n    "])), this.performSearch, this.searchMultipleControls, this.setQuery, this.query);
    }
  }, {
    key: "setErrorMessage",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <p class=\"error-message\">", "</p>\n    "])), this.errorMessage);
    }
  }, {
    key: "searchCTA",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<p class=\"search-cta\"><em>Please enter text to search for</em></p>"])));
    }
  }, {
    key: "render",
    value: function render() {
      var showSearchCTA = !this.queryInProgress && !this.errorMessage && !this.queryInProgress && !this.results.length;
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      <div class=\"results-container\">\n        ", "\n        ", "\n        ", "\n        ", "\n      </div>\n    "])), this.headerSection, this.searchForm, this.queryInProgress ? this.loadingIndicator : lit__WEBPACK_IMPORTED_MODULE_12__.nothing, this.errorMessage ? this.setErrorMessage : lit__WEBPACK_IMPORTED_MODULE_12__.nothing, this.results.length ? this.resultsSet : lit__WEBPACK_IMPORTED_MODULE_12__.nothing, showSearchCTA ? this.searchCTA : lit__WEBPACK_IMPORTED_MODULE_12__.nothing);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        results: {
          type: Array
        },
        query: {
          type: String
        },
        queryInProgress: {
          type: Boolean
        },
        renderHeader: {
          type: Boolean
        },
        renderSearchAllFiles: {
          type: Boolean
        },
        displayResultImages: {
          type: Boolean
        },
        errorMessage: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      var searchResultText = (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["var(--searchResultText, #adaedc)"])));
      var searchResultBg = (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["var(--searchResultBg, #272958)"])));
      var searchResultBorder = (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["var(--searchResultBorder, #adaedc)"])));
      var activeButtonBg = (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["(--tertiaryBGColor, #333)"])));
      var mainCSS = (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        height: 100%;\n        padding: 1.5rem 1rem 2rem 0;\n        overflow-y: auto;\n        font-size: 1.4rem;\n        box-sizing: border-box;\n      }\n\n      mark {\n        padding: 0 .2rem;\n        color: ", ";\n        background: ", ";\n        border: 1px solid ", ";\n        border-radius: 2px;\n      }\n\n      h3 {\n        padding: 0;\n        margin: 0 1rem 0 0;\n        font-size: 2rem;\n      }\n\n      header {\n        display: flex;\n        align-items: center;\n        padding: 0 2rem 0 0;\n      }\n      header p {\n        padding: 0;\n        margin: 0;\n        font-size: 1.2rem;\n        font-weight: bold;\n        font-style: italic;\n      }\n\n      fieldset {\n        padding: 0 0 1rem 0;\n        border: none;\n      }\n\n      [type=\"checkbox\"] {\n        display: none;\n      }\n\n      label {\n        display: block;\n        text-align: center;\n      }\n\n      label.checkbox {\n        padding-bottom: .5rem;\n        font-size: 1.6rem;\n        line-height: 150%;\n        vertical-align: middle;\n      }\n\n      label.checkbox:after {\n        display: inline-block;\n        width: 14px;\n        height: 14px;\n        margin-left: .7rem;\n        content: \"\";\n        border-radius: 2px;\n      }\n      :checked + label.checkbox:after {\n        background-image: url('", "');\n      }\n\n      label.checkbox[for=\"all_files\"]:after {\n        background: ", " 50% 50% no-repeat;\n        border: 1px solid var(--primaryTextColor);\n      }\n\n      [type=\"search\"] {\n        color: var(--primaryTextColor);\n        border: 1px solid var(--primaryTextColor);\n        -webkit-appearance: textfield;\n        width: 100%;\n        height: 3rem;\n        padding: 0 1.5rem;\n        box-sizing: border-box;\n        font: normal 1.6rem \"Helvetica qNeue\", Helvetica, Arial, sans-serif;\n        border-radius: 1.5rem;\n        background: transparent;\n      }\n      [type=\"search\"]:focus {\n        outline: none;\n      }\n      [type=\"search\"]::-webkit-search-cancel-button {\n        width: 18px;\n        height: 18px;\n        -webkit-appearance: none;\n        appearance: none;\n        -webkit-mask: url('", "') 0 0 no-repeat;\n        mask: url('", "') 0 0 no-repeat;\n        -webkit-mask-size: 100%;\n        mask-size: 100%;\n        background: #fff;\n      }\n\n      p.page-num {\n        font-weight: bold;\n        padding-bottom: 0;\n      }\n\n      p.search-cta {\n        text-align: center;\n      }\n\n      .results-container {\n        padding-bottom: 2rem;\n      }\n\n      ul {\n        padding: 0 0 2rem 0;\n        margin: 0;\n        list-style: none;\n      }\n\n      ul.show-image li {\n        display: grid;\n      }\n\n      li {\n        cursor: pointer;\n        grid-template-columns: 30px 1fr;\n        grid-gap: 0 .5rem;\n      }\n\n      li img {\n        display: block;\n        width: 100%;\n      }\n\n      li h4 {\n        grid-column: 2 / 3;\n        padding: 0 0 2rem 0;\n        margin: 0;\n        font-weight: normal;\n      }\n\n      li p {\n        grid-column: 2 / 3;\n        padding: 0 0 1.5rem 0;\n        margin: 0;\n        font-size: 1.2rem;\n      }\n\n      .loading {\n        text-align: center;\n      }\n\n      .loading p {\n        padding: 0 0 1rem 0;\n        margin: 0;\n        font-size: 1.2rem;\n      }\n\n      ia-activity-indicator {\n        display: block;\n        width: 40px;\n        height: 40px;\n        margin: 0 auto;\n      }\n    "])), searchResultText, searchResultBg, searchResultBorder, _assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_15__.default, activeButtonBg, _assets_icon_close_js__WEBPACK_IMPORTED_MODULE_16__.default, _assets_icon_close_js__WEBPACK_IMPORTED_MODULE_16__.default);
      return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_17__.default, mainCSS];
    }
  }]);

  return IABookSearchResults;
}(lit__WEBPACK_IMPORTED_MODULE_12__.LitElement);
customElements.define('ia-book-search-results', IABookSearchResults);

/***/ }),

/***/ "./src/BookNavigator/sharing.js":
/*!**************************************!*\
  !*** ./src/BookNavigator/sharing.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SharingProvider; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_share_icon_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-share/icon-share */ "./node_modules/@internetarchive/icon-share/icon-share.js");
/* harmony import */ var _internetarchive_ia_sharing_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/ia-sharing-options */ "./node_modules/@internetarchive/ia-sharing-options/index.js");



var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SharingProvider = function SharingProvider(_ref) {
  var item = _ref.item,
      baseHost = _ref.baseHost,
      bookreader = _ref.bookreader;

  _classCallCheck(this, SharingProvider);

  var _item$metadata = item === null || item === void 0 ? void 0 : item.metadata,
      identifier = _item$metadata.identifier,
      creator = _item$metadata.creator,
      title = _item$metadata.title;

  var creatorToUse = Array.isArray(creator) ? creator[0] : creator;
  var subPrefix = bookreader.options.subPrefix || '';
  var label = "Share this book";
  this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_2__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<ia-icon-share style=\"width: var(--iconWidth); height: var(--iconHeight);\"></ia-icon-share>"])));
  this.label = label;
  this.id = 'share';
  this.component = (0,lit__WEBPACK_IMPORTED_MODULE_2__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<ia-sharing-options\n      .identifier=", "\n      .type=", "\n      .creator=", "\n      .description=", "\n      .baseHost=", "\n      .fileSubPrefix=", "\n    ></ia-sharing-options>"])), identifier, "book", creatorToUse, title, baseHost, subPrefix);
};



/***/ }),

/***/ "./src/BookNavigator/visual-adjustments/visual-adjustments-provider.js":
/*!*****************************************************************************!*\
  !*** ./src/BookNavigator/visual-adjustments/visual-adjustments-provider.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VisualAdjustmentsProvider; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_visual_adjustment_icon_visual_adjustment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @internetarchive/icon-visual-adjustment/icon-visual-adjustment */ "./node_modules/@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js");
/* harmony import */ var _visual_adjustments__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./visual-adjustments */ "./src/BookNavigator/visual-adjustments/visual-adjustments.js");












var _templateObject, _templateObject2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var visualAdjustmentOptions = [{
  id: 'brightness',
  name: 'Adjust brightness',
  active: false,
  min: 0,
  max: 150,
  step: 1,
  value: 100
}, {
  id: 'contrast',
  name: 'Adjust contrast',
  active: false,
  min: 0,
  max: 150,
  step: 1,
  value: 100
}, {
  id: 'invert',
  name: 'Inverted colors (dark mode)',
  active: false
}, {
  id: 'grayscale',
  name: 'Grayscale',
  active: false
}];

var VisualAdjustmentsProvider = /*#__PURE__*/function () {
  function VisualAdjustmentsProvider(options) {
    _classCallCheck(this, VisualAdjustmentsProvider);

    var onProviderChange = options.onProviderChange,
        bookreader = options.bookreader;
    this.onProviderChange = onProviderChange;
    this.bookContainer = bookreader.refs.$brContainer;
    this.bookreader = bookreader;
    this.onAdjustmentChange = this.onAdjustmentChange.bind(this);
    this.optionUpdateComplete = this.optionUpdateComplete.bind(this);
    this.updateOptionsCount = this.updateOptionsCount.bind(this);
    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
    this.activeCount = 0;
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<ia-icon-visual-adjustment style=\"width: var(--iconWidth); height: var(--iconHeight);\"></ia-icon-visual-adjustment>"])));
    this.label = 'Visual Adjustments';
    this.menuDetails = this.updateOptionsCount();
    this.id = 'adjustment';
    this.component = (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <ia-book-visual-adjustments\n        .options=", "\n        @visualAdjustmentOptionChanged=", "\n        @visualAdjustmentZoomIn=", "\n        @visualAdjustmentZoomOut=", "\n      ></ia-book-visual-adjustments>\n    "])), visualAdjustmentOptions, this.onAdjustmentChange, this.onZoomIn, this.onZoomOut);
  }

  _createClass(VisualAdjustmentsProvider, [{
    key: "onZoomIn",
    value: function onZoomIn() {
      this.bookreader.zoom(1);
    }
  }, {
    key: "onZoomOut",
    value: function onZoomOut() {
      this.bookreader.zoom(-1);
    }
  }, {
    key: "onAdjustmentChange",
    value: function onAdjustmentChange(event) {
      var detail = event.detail;
      var adjustments = {
        brightness: function brightness(value) {
          return "brightness(".concat(value, "%)");
        },
        contrast: function contrast(value) {
          return "contrast(".concat(value, "%)");
        },
        grayscale: function grayscale() {
          return 'grayscale(100%)';
        },
        invert: function invert() {
          return 'invert(100%)';
        }
      };
      var filters = detail.options.reduce(function (values, option) {
        var newValue = "".concat(option.active ? adjustments[option.id](option.value) : '');
        return newValue ? [].concat(_toConsumableArray(values), [newValue]) : values;
      }, []).join(' ');
      this.bookContainer.css('filter', filters);
      this.optionUpdateComplete(event);
    }
  }, {
    key: "optionUpdateComplete",
    value: function optionUpdateComplete(event) {
      this.activeCount = event.detail.activeCount;
      this.updateOptionsCount(event);
      this.onProviderChange();
    }
  }, {
    key: "updateOptionsCount",
    value: function updateOptionsCount() {
      this.menuDetails = "(".concat(this.activeCount, " active)");
    }
  }]);

  return VisualAdjustmentsProvider;
}();



/***/ }),

/***/ "./src/BookNavigator/visual-adjustments/visual-adjustments.js":
/*!********************************************************************!*\
  !*** ./src/BookNavigator/visual-adjustments/visual-adjustments.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IABookVisualAdjustments": function() { return /* binding */ IABookVisualAdjustments; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
/* harmony import */ var _assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icon_checkmark.js */ "./src/BookNavigator/assets/icon_checkmark.js");
/* harmony import */ var _internetarchive_icon_magnify_minus_icon_magnify_minus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @internetarchive/icon-magnify-minus/icon-magnify-minus */ "./node_modules/@internetarchive/icon-magnify-minus/icon-magnify-minus.js");
/* harmony import */ var _internetarchive_icon_magnify_plus_icon_magnify_plus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @internetarchive/icon-magnify-plus/icon-magnify-plus */ "./node_modules/@internetarchive/icon-magnify-plus/icon-magnify-plus.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var namespacedEvent = function namespacedEvent(eventName) {
  return "visualAdjustment".concat(eventName);
};

var events = {
  optionChange: namespacedEvent("OptionChanged"),
  zoomIn: namespacedEvent("ZoomIn"),
  zoomOut: namespacedEvent("ZoomOut")
};
var IABookVisualAdjustments = /*#__PURE__*/function (_LitElement) {
  _inherits(IABookVisualAdjustments, _LitElement);

  var _super = _createSuper(IABookVisualAdjustments);

  function IABookVisualAdjustments() {
    var _this;

    _classCallCheck(this, IABookVisualAdjustments);

    _this = _super.call(this);
    _this.activeCount = 0;
    _this.options = [];
    _this.renderHeader = false;
    _this.showZoomControls = true;
    return _this;
  }

  _createClass(IABookVisualAdjustments, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.activeCount = this.activeOptions.length;
      this.emitOptionChangedEvent();
    }
    /** Gets list of active options
     * @return array
     */

  }, {
    key: "activeOptions",
    get: function get() {
      return this.options.reduce(function (results, option) {
        return option.active ? [].concat(_toConsumableArray(results), [option.id]) : results;
      }, []);
    }
    /**
     * Returns blob that will be emitted by event
     */

  }, {
    key: "prepareEventDetails",
    value: function prepareEventDetails() {
      var changedOptionId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return {
        options: this.options,
        activeCount: this.activeCount,
        changedOptionId: changedOptionId
      };
    }
    /**
     * Fires custom event when options change
     * Provides state details: { options, activeCount, changedOptionId }
     *
     * @param { string } changedOptionId
     */

  }, {
    key: "emitOptionChangedEvent",
    value: function emitOptionChangedEvent() {
      var changedOptionId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var detail = this.prepareEventDetails(changedOptionId);
      this.dispatchEvent(new CustomEvent(events.optionChange, {
        bubbles: true,
        composed: true,
        detail: detail
      }));
    }
  }, {
    key: "emitZoomIn",
    value: function emitZoomIn() {
      this.dispatchEvent(new CustomEvent(events.zoomIn));
    }
  }, {
    key: "emitZoomOut",
    value: function emitZoomOut() {
      this.dispatchEvent(new CustomEvent(events.zoomOut));
    }
    /**
     * Updates adjustment & component state
     * updates params of available ajdustment options list
     * updates active adjustment count
     * triggers custom event
     * @param { string } optionName
     */

  }, {
    key: "changeActiveStateFor",
    value: function changeActiveStateFor(optionName) {
      var updatedOptions = _toConsumableArray(this.options);

      var checkedOption = updatedOptions.find(function (option) {
        return option.id === optionName;
      });
      checkedOption.active = !checkedOption.active;
      this.options = updatedOptions;
      this.activeCount = this.activeOptions.length;
      this.emitOptionChangedEvent(checkedOption.id);
    }
  }, {
    key: "setRangeValue",
    value: function setRangeValue(id, value) {
      var updatedOptions = _toConsumableArray(this.options);

      updatedOptions.find(function (o) {
        return o.id === id;
      }).value = value;
      this.options = _toConsumableArray(updatedOptions);
    }
    /* render */

  }, {
    key: "rangeSlider",
    value: function rangeSlider(option) {
      var _this2 = this;

      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=", ">\n        <input\n          type=\"range\"\n          name=\"", "_range\"\n          min=", "\n          max=", "\n          step=", "\n          .value=", "\n          @input=", "\n          @change=", "\n        />\n        <p>", "%</p>\n      </div>\n    "])), "range".concat(option.active ? " visible" : ""), option.id, option.min || 0, option.max || 100, option.step || 1, option.value, function (e) {
        return _this2.setRangeValue(option.id, e.target.value);
      }, function () {
        return _this2.emitOptionChangedEvent();
      }, option.value);
    }
  }, {
    key: "adjustmentCheckbox",
    value: function adjustmentCheckbox(option) {
      var _this3 = this;

      var formID = "adjustment_".concat(option.id);
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<li>\n      <label for=\"", "\">\n        <span class=\"name\">", "</span>\n        <input\n          type=\"checkbox\"\n          name=\"", "\"\n          id=\"", "\"\n          @change=", "\n          ?checked=", "\n        />\n        <span class=\"icon\"></span>\n      </label>\n      ", "\n    </li>"])), formID, option.name, formID, formID, function () {
        return _this3.changeActiveStateFor(option.id);
      }, option.active, option.value !== undefined ? this.rangeSlider(option) : lit__WEBPACK_IMPORTED_MODULE_17__.nothing);
    }
  }, {
    key: "headerSection",
    get: function get() {
      var activeAdjustments = this.activeCount ? (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<p>(", " active)</p>"])), this.activeCount) : lit__WEBPACK_IMPORTED_MODULE_17__.nothing;
      var header = (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<header>\n      <h3>Visual adjustments</h3>\n      ", "\n    </header>"])), activeAdjustments);
      return this.renderHeader ? header : lit__WEBPACK_IMPORTED_MODULE_17__.nothing;
    }
  }, {
    key: "zoomControls",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <h4>Zoom</h4>\n      <button class=\"zoom_out\" @click=", " title=\"zoom out\">\n        <ia-icon-magnify-minus></ia-icon-magnify-minus>\n      </button>\n      <button class=\"zoom_in\" @click=", " title=\"zoom in\">\n        <ia-icon-magnify-plus></ia-icon-magnify-plus>\n      </button>\n    "])), this.emitZoomOut, this.emitZoomIn);
    }
    /** @inheritdoc */

  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      ", "\n      <ul>\n        ", "\n      </ul>\n      ", "\n    "])), this.headerSection, (0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_18__.repeat)(this.options, function (option) {
        return option.id;
      }, this.adjustmentCheckbox.bind(this)), this.showZoomControls ? this.zoomControls : lit__WEBPACK_IMPORTED_MODULE_17__.nothing);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        activeCount: {
          type: Number
        },
        options: {
          type: Array
        },
        renderHeader: {
          type: Boolean
        },
        showZoomControls: {
          type: Boolean
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_17__.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n      height: 100%;\n      overflow-y: auto;\n      font-size: 1.4rem;\n      box-sizing: border-box;\n    }\n\n    header {\n      display: flex;\n      align-items: baseline;\n    }\n\n    h3 {\n      padding: 0;\n      margin: 0 1rem 0 0;\n      font-size: 1.6rem;\n    }\n\n    header p {\n      padding: 0;\n      margin: 0;\n      font-size: 1.2rem;\n      font-weight: bold;\n      font-style: italic;\n    }\n\n    ul {\n      padding: 1rem 2rem 0 0;\n      list-style: none;\n      margin-top: 0;\n    }\n\n    [type=\"checkbox\"] {\n      display: none;\n    }\n\n    label {\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline;\n      font-size: 1.4rem;\n      font-weight: bold;\n      line-height: 150%;\n      vertical-align: middle;\n    }\n\n    .icon {\n      display: inline-block;\n      width: 14px;\n      height: 14px;\n      margin-left: .7rem;\n      border: 1px solid var(--primaryTextColor);\n      border-radius: 2px;\n      background: var(--activeButtonBg) 50% 50% no-repeat;\n    }\n    :checked + .icon {\n      background-image: url('", "');\n    }\n\n    .range {\n      display: none;\n      padding-top: .5rem;\n    }\n    .range.visible {\n      display: flex;\n    }\n\n    .range p {\n      margin-left: 1rem;\n    }\n\n    h4 {\n      padding: 1rem 0;\n      margin: 0;\n      font-size: 1.4rem;\n    }\n\n    button {\n      -webkit-appearance: none;\n      appearance: none;\n      border: none;\n      border-radius: 0;\n      background: transparent;\n      outline: none;\n      cursor: pointer;\n      --iconFillColor: var(--primaryTextColor);\n      --iconStrokeColor: var(--primaryTextColor);\n      height: 4rem;\n      width: 4rem;\n    }\n\n    button * {\n      display: inline-block;\n    }"])), _assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_19__.default);
    }
  }]);

  return IABookVisualAdjustments;
}(lit__WEBPACK_IMPORTED_MODULE_17__.LitElement);
customElements.define('ia-book-visual-adjustments', IABookVisualAdjustments);

/***/ }),

/***/ "./src/BookNavigator/volumes/volumes-provider.js":
/*!*******************************************************!*\
  !*** ./src/BookNavigator/volumes/volumes-provider.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VolumesProvider; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_icon_sort_desc_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icon_sort_desc.js */ "./src/BookNavigator/assets/icon_sort_desc.js");
/* harmony import */ var _assets_icon_sort_asc_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icon_sort_asc.js */ "./src/BookNavigator/assets/icon_sort_asc.js");
/* harmony import */ var _assets_icon_sort_neutral_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icon_sort_neutral.js */ "./src/BookNavigator/assets/icon_sort_neutral.js");
/* harmony import */ var _assets_icon_volumes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icon_volumes.js */ "./src/BookNavigator/assets/icon_volumes.js");
/* harmony import */ var _volumes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./volumes.js */ "./src/BookNavigator/volumes/volumes.js");












var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var sortType = {
  title_asc: 'title_asc',
  title_desc: 'title_desc',
  default: 'default'
};

var VolumesProvider = /*#__PURE__*/function () {
  /**
   * @param {import('../../BookReader').default} bookreader
   */
  function VolumesProvider(_ref) {
    var baseHost = _ref.baseHost,
        bookreader = _ref.bookreader,
        onProviderChange = _ref.onProviderChange;

    _classCallCheck(this, VolumesProvider);

    this.onProviderChange = onProviderChange;
    this.component = document.createElement("viewable-files");
    var files = bookreader.options.multipleBooksList.by_subprefix;
    this.viewableFiles = Object.keys(files).map(function (item) {
      return files[item];
    });
    this.volumeCount = Object.keys(files).length;
    /** @type {import('../../BookReader').default} */

    this.bookreader = bookreader;
    this.component.subPrefix = bookreader.options.subPrefix || "";
    this.component.hostUrl = baseHost;
    this.component.viewableFiles = this.viewableFiles;
    this.id = "volumes";
    this.label = "Viewable files (".concat(this.volumeCount, ")");
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), _assets_icon_volumes_js__WEBPACK_IMPORTED_MODULE_18__.default);
    this.sortOrderBy = sortType.default; // get sort state from query param

    if (this.bookreader.urlPlugin) {
      this.bookreader.urlPlugin.pullFromAddressBar();
      var urlSortValue = this.bookreader.urlPlugin.getUrlParam('sort');

      if (urlSortValue === sortType.title_asc || urlSortValue === sortType.title_desc) {
        this.sortOrderBy = urlSortValue;
      }
    }

    this.sortVolumes(this.sortOrderBy);
  }

  _createClass(VolumesProvider, [{
    key: "sortButton",
    get: function get() {
      var _this = this;

      var sortIcons = {
        default: (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <button class=\"sort-by neutral-icon\" aria-label=\"Sort volumes in initial order\" @click=", ">", "</button>\n      "])), function () {
          return _this.sortVolumes("title_asc");
        }, _assets_icon_sort_neutral_js__WEBPACK_IMPORTED_MODULE_17__.default),
        title_asc: (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <button class=\"sort-by asc-icon\" aria-label=\"Sort volumes in ascending order\" @click=", ">", "</button>\n      "])), function () {
          return _this.sortVolumes("title_desc");
        }, _assets_icon_sort_asc_js__WEBPACK_IMPORTED_MODULE_16__.default),
        title_desc: (0,lit__WEBPACK_IMPORTED_MODULE_14__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        <button class=\"sort-by desc-icon\" aria-label=\"Sort volumes in descending order\" @click=", ">", "</button>\n      "])), function () {
          return _this.sortVolumes("default");
        }, _assets_icon_sort_desc_js__WEBPACK_IMPORTED_MODULE_15__.default)
      };
      return sortIcons[this.sortOrderBy];
    }
    /**
     * @param {'default' | 'title_asc' | 'title_desc'} sortByType
     */

  }, {
    key: "sortVolumes",
    value: function sortVolumes(sortByType) {
      var sortedFiles = [];
      var files = this.viewableFiles;
      sortedFiles = files.sort(function (a, b) {
        if (sortByType === sortType.title_asc) return a.title.localeCompare(b.title);else if (sortByType === sortType.title_desc) return b.title.localeCompare(a.title);else return a.orig_sort - b.orig_sort;
      });
      this.sortOrderBy = sortByType;
      this.component.sortOrderBy = sortByType;
      this.component.viewableFiles = _toConsumableArray(sortedFiles);
      this.actionButton = this.sortButton;

      if (this.bookreader.urlPlugin) {
        this.bookreader.urlPlugin.pullFromAddressBar();

        if (this.sortOrderBy !== sortType.default) {
          this.bookreader.urlPlugin.setUrlParam('sort', sortByType);
        } else {
          this.bookreader.urlPlugin.removeUrlParam('sort');
        }
      }

      this.onProviderChange(this.bookreader);
      this.multipleFilesClicked(sortByType);
    }
    /**
     * @param {'default' | 'title_asc' | 'title_desc'} orderBy
     */

  }, {
    key: "multipleFilesClicked",
    value: function multipleFilesClicked(orderBy) {
      var _window$archive_analy;

      if (!window.archive_analytics) {
        return;
      }

      (_window$archive_analy = window.archive_analytics) === null || _window$archive_analy === void 0 ? void 0 : _window$archive_analy.send_event_no_sampling('BookReader', "VolumesSort|".concat(orderBy), window.location.path);
    }
  }]);

  return VolumesProvider;
}();



/***/ }),

/***/ "./src/BookNavigator/volumes/volumes.js":
/*!**********************************************!*\
  !*** ./src/BookNavigator/volumes/volumes.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Volumes": function() { return /* binding */ Volumes; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Volumes = /*#__PURE__*/function (_LitElement) {
  _inherits(Volumes, _LitElement);

  var _super = _createSuper(Volumes);

  function Volumes() {
    var _this;

    _classCallCheck(this, Volumes);

    _this = _super.call(this);
    _this.hostUrl = '';
    _this.sortOrderBy = '';
    _this.subPrefix = '';
    _this.viewableFiles = [];
    return _this;
  }

  _createClass(Volumes, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var activeFile = this.shadowRoot.querySelector('.content.active'); // allow for css animations to run before scrolling to active file

      setTimeout(function () {
        // scroll active file into view if needed
        // note: `scrollIntoViewIfNeeded` handles auto-scroll gracefully for Chrome, Safari
        // Firefox does not have this capability yet as it does not support `scrollIntoViewIfNeeded`
        if (activeFile !== null && activeFile !== void 0 && activeFile.scrollIntoViewIfNeeded) {
          activeFile === null || activeFile === void 0 ? void 0 : activeFile.scrollIntoViewIfNeeded(true);
          return;
        } // Todo: support `scrollIntoView` or `parentContainer.crollTop = x` for FF & "IE 11"
        // currently, the hard `position: absolutes` misaligns subpanel when `scrollIntoView` is applied :(

      }, 350);
    }
  }, {
    key: "volumeItemWithImageTitle",
    value: function volumeItemWithImageTitle(item) {
      var hrefUrl = this.sortOrderBy === 'default' ? "".concat(this.hostUrl).concat(item.url_path) : "".concat(this.hostUrl).concat(item.url_path, "?sort=").concat(this.sortOrderBy);
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <li class=\"content active\">\n        <div class=\"separator\"></div>\n        <a class=\"container\" href=\"", "\">\n          <div class=\"image\">\n            <img src=\"", "\">\n          </div>\n          <div class=\"text\">\n            <p class=\"item-title\">", "</p>\n            <small>by: ", "</small>\n          </div>\n        </a>\n      </li>\n    "])), hrefUrl, item.image, item.title, item.author);
    }
  }, {
    key: "volumeItem",
    value: function volumeItem(item) {
      var activeClass = this.subPrefix === item.file_subprefix ? ' active' : '';
      var hrefUrl = this.sortOrderBy === 'default' ? "".concat(this.hostUrl).concat(item.url_path) : "".concat(this.hostUrl).concat(item.url_path, "?sort=").concat(this.sortOrderBy);
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <li>\n        <div class=\"separator\"></div>\n        <div class=\"content", "\">\n          <a href=\"https://", "\">\n            <p class=\"item-title\">", "</p>\n          </a>\n        </div>\n      </li>\n    "])), activeClass, hrefUrl, item.title);
    }
  }, {
    key: "volumesList",
    get: function get() {
      var volumes = (0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_13__.repeat)(this.viewableFiles, function (volume) {
        return volume === null || volume === void 0 ? void 0 : volume.file_prefix;
      }, this.volumeItem.bind(this));
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <ul>\n        ", "\n        <div class=\"separator\"></div> \n      </ul>\n    "])), volumes);
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      ", "\n    "])), this.viewableFiles.length ? this.volumesList : lit__WEBPACK_IMPORTED_MODULE_12__.nothing);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        subPrefix: {
          type: String
        },
        hostUrl: {
          type: String
        },
        viewableFiles: {
          type: Array
        },
        sortOrderBy: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        overflow-y: auto;\n        box-sizing: border-box;\n        color: var(--primaryTextColor);\n        margin-top: 14px;\n        margin-bottom: 2rem;\n        --activeBorderWidth: 2px;\n      }\n\n      a {\n        color: #ffffff;\n        text-decoration: none\n      }\n\n      img {\n        width: 35px;\n        height: 45px;\n      }\n\n      ul {\n        padding: 0;\n        list-style: none;\n        margin: var(--activeBorderWidth) 0.5rem 1rem 0;\n      }\n\n      ul > li:first-child .separator {\n        display: none;\n      }\n\n      li {\n        cursor: pointer;\n        outline: none;\n        position: relative;\n      }\n\n      li .content {\n        padding: 2px 0 4px 2px;\n        border: var(--activeBorderWidth) solid transparent;\n        padding: .2rem 0 .4rem .2rem;\n      }\n      \n      li .content.active {\n        border: var(--activeBorderWidth) solid #538bc5;\n      }\n\n      small {\n        font-style: italic;\n        white-space: initial;\n      }\n\n      .container {\n        display: flex;\n        align-items: center;\n        justify-content: center\n      }\n\n      .item-title {\n        margin-block-start: 0em;\n        margin-block-end: 0em;\n        font-size: 14px;\n        font-weight: bold;\n        word-wrap: break-word;\n        padding-left: 5px;\n      }\n\n      .separator {\n        background-color: var(--secondaryBGColor);\n        width: 98%;\n        margin: 1px auto;\n        height: 1px;\n      }\n\n      .text {\n        padding-left: 10px;\n      }\n\n      .icon {\n        display: inline-block;\n        width: 14px;\n        height: 14px;\n        margin-left: .7rem;\n        border: 1px solid var(--primaryTextColor);\n        border-radius: 2px;\n        background: var(--activeButtonBg) 50% 50% no-repeat;\n      }\n\n    "])));
    }
  }]);

  return Volumes;
}(lit__WEBPACK_IMPORTED_MODULE_12__.LitElement);
customElements.define('viewable-files', Volumes);

/***/ }),

/***/ "./src/ia-bookreader/ia-bookreader.js":
/*!********************************************!*\
  !*** ./src/ia-bookreader/ia-bookreader.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IaBookReader": function() { return /* binding */ IaBookReader; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_ia_item_navigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @internetarchive/ia-item-navigator */ "./node_modules/@internetarchive/ia-item-navigator/dist/index.js");
/* harmony import */ var _BookNavigator_book_navigator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../BookNavigator/book-navigator.js */ "./src/BookNavigator/book-navigator.js");
/* harmony import */ var _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @internetarchive/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/index.js");
/* harmony import */ var _internetarchive_shared_resize_observer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @internetarchive/shared-resize-observer */ "./node_modules/@internetarchive/shared-resize-observer/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














var _templateObject, _templateObject2;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * BookReaderTemplate to load BookNavigator components
 */


 // eslint-disable-next-line no-unused-vars




var IaBookReader = /*#__PURE__*/function (_LitElement) {
  _inherits(IaBookReader, _LitElement);

  var _super = _createSuper(IaBookReader);

  function IaBookReader() {
    var _this;

    _classCallCheck(this, IaBookReader);

    _this = _super.call(this);
    _this.item = undefined;
    _this.bookreader = undefined;
    _this.baseHost = 'https://archive.org';
    _this.fullscreen = false;
    _this.signedIn = false;
    /** @type {ModalManager} */

    _this.modal = undefined;
    /** @type {SharedResizeObserver} */

    _this.sharedObserver = undefined;
    _this.loaded = false;
    _this.menuShortcuts = [];
    _this.menuContents = [];
    _this.openMenuName = '';
    return _this;
  }

  _createClass(IaBookReader, [{
    key: "updated",
    value: function updated() {
      if (!this.modal) {
        this.setModalManager();
      }

      if (!this.sharedObserver) {
        this.sharedObserver = new _internetarchive_shared_resize_observer__WEBPACK_IMPORTED_MODULE_17__.SharedResizeObserver();
      }
    }
  }, {
    key: "itemNav",
    get: function get() {
      return this.shadowRoot.querySelector('ia-item-navigator');
    }
    /** Creates modal DOM & attaches to `<body>` */

  }, {
    key: "setModalManager",
    value: function setModalManager() {
      var modalManager = document.querySelector('modal-manager');

      if (!modalManager) {
        modalManager = document.createElement('modal-manager');
        document.body.appendChild(modalManager);
      }

      this.modal = modalManager;
    }
  }, {
    key: "manageFullscreen",
    value: function manageFullscreen(e) {
      var detail = e.detail;
      var fullscreen = !!detail.isFullScreen;
      this.fullscreen = fullscreen;
      this.dispatchEvent(new CustomEvent('fullscreenStateUpdated', {
        detail: {
          fullscreen: fullscreen
        }
      }));
    }
  }, {
    key: "loadingStateUpdated",
    value: function loadingStateUpdated(e) {
      var loaded = e.detail.loaded;
      this.loaded = loaded || null;
      this.dispatchEvent(new CustomEvent('loadingStateUpdated', {
        detail: {
          loaded: loaded
        }
      }));
    }
  }, {
    key: "setMenuShortcuts",
    value: function setMenuShortcuts(e) {
      this.menuShortcuts = _toConsumableArray(e.detail);
    }
  }, {
    key: "setMenuContents",
    value: function setMenuContents(e) {
      var updatedContents = _toConsumableArray(e.detail);

      this.menuContents = updatedContents;
    }
  }, {
    key: "manageSideMenuEvents",
    value: function manageSideMenuEvents(e) {
      var _e$detail = e.detail,
          menuId = _e$detail.menuId,
          action = _e$detail.action;

      if (!menuId) {
        return;
      }

      this.openMenuName = menuId;

      if (action === 'open') {
        var _this$itemNav;

        (_this$itemNav = this.itemNav) === null || _this$itemNav === void 0 ? void 0 : _this$itemNav.openShortcut(menuId);
      } else if (action === 'toggle') {
        var _this$itemNav2;

        (_this$itemNav2 = this.itemNav) === null || _this$itemNav2 === void 0 ? void 0 : _this$itemNav2.toggleMenu();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_13__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"main-component\">\n        <ia-item-navigator\n          ?viewportInFullscreen=", "\n          .basehost=", "\n          .item=", "\n          .modal=", "\n          .loaded=", "\n          .sharedObserver=", "\n          ?signedIn=", "\n          .menuShortcuts=", "\n          .menuContents=", "\n          .openMenu=", "\n        >\n          <div slot=\"header\">\n            <slot name=\"header\"></slot>\n          </div>\n          <div slot=\"main\">\n            <book-navigator\n              .modal=", "\n              .baseHost=", "\n              .itemMD=", "\n              ?signedIn=", "\n              ?sideMenuOpen=", "\n              .sharedObserver=", "\n              @ViewportInFullScreen=", "\n              @loadingStateUpdated=", "\n              @updateSideMenu=", "\n              @menuUpdated=", "\n              @menuShortcutsUpdated=", "\n            >\n              <div slot=\"main\">\n                <slot name=\"main\"></slot>\n              </div>\n            </book-navigator>\n          </div>\n        </ia-item-navigator>\n      </div>\n    "])), this.fullscreen, this.baseHost, this.item, this.modal, this.loaded, this.sharedObserver, this.signedIn, this.menuShortcuts, this.menuContents, this.openMenuName, this.modal, this.baseHost, this.item, this.signedIn, this.menuOpened, this.sharedObserver, this.manageFullscreen, this.loadingStateUpdated, this.manageSideMenuEvents, this.setMenuContents, this.setMenuShortcuts);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object
        },
        baseHost: {
          type: String
        },
        signedIn: {
          type: Boolean
        },
        fullscreen: {
          type: Boolean,
          reflect: true,
          attribute: true
        },
        sharedObserver: {
          type: Object,
          attribute: false
        },
        modal: {
          type: Object,
          attribute: false
        },
        loaded: {
          type: Boolean
        },
        menuShortcuts: {
          type: Array
        },
        menuContents: {
          type: Array
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_13__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        --primaryBGColor: var(--black, #000);\n        --secondaryBGColor: #222;\n        --tertiaryBGColor: #333;\n        --primaryTextColor: var(--white, #fff);\n        --primaryCTAFill: #194880;\n        --primaryCTABorder: #c5d1df;\n        --secondaryCTAFill: #333;\n        --secondaryCTABorder: #999;\n        --primaryErrorCTAFill: #e51c26;\n        --primaryErrorCTABorder: #f8c6c8;\n        background-color: var(--primaryBGColor);\n        position: relative;\n      }\n\n      :host([fullscreen]),\n      ia-item-navigator[viewportinfullscreen] {\n        position: fixed;\n        inset: 0;\n        height: 100%;\n        min-height: unset;\n      }\n\n      .main-component {\n        height: 100%;\n        width: 100%;\n        min-height: inherit;\n      }\n\n      div[slot=\"header\"],\n      div[slot=\"main\"] {\n        display: flex;\n        width: 100%;\n      }\n\n      slot {\n        display: block;\n        flex: 1;\n      }\n\n      ia-item-navigator {\n        min-height: var(--br-height, inherit);\n        height: var(--br-height, inherit);\n        display: block;\n        width: 100%;\n        color: var(--primaryTextColor);\n        --menuButtonLabelDisplay: block;\n        --menuWidth: 320px;\n        --menuSliderBg: var(--secondaryBGColor);\n        --activeButtonBg: var(--tertiaryBGColor);\n        --subpanelRightBorderColor: var(--secondaryCTABorder);\n        --animationTiming: 100ms;\n        --iconFillColor: var(--primaryTextColor);\n        --iconStrokeColor: var(--primaryTextColor);\n        --menuSliderHeaderIconHeight: 2rem;\n        --menuSliderHeaderIconWidth: 2rem;\n        --iconWidth: 2.4rem;\n        --iconHeight: 2.4rem;\n        --shareLinkColor: var(--primaryTextColor);\n        --shareIconBorder: var(--primaryTextColor);\n        --shareIconBg: var(--secondaryBGColor);\n        --activityIndicatorLoadingDotColor: var(--primaryTextColor);\n        --activityIndicatorLoadingRingColor: var(--primaryTextColor);\n      }\n    "])));
    }
  }]);

  return IaBookReader;
}(lit__WEBPACK_IMPORTED_MODULE_13__.LitElement);
window.customElements.define("ia-bookreader", IaBookReader);

/***/ }),

/***/ "./node_modules/core-js/internals/is-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/is-integer.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce-right.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduceRight');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isInteger = __webpack_require__(/*! ../internals/is-integer */ "./node_modules/core-js/internals/is-integer.js");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
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

/***/ "./node_modules/throttle-debounce/index.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.umd.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
	 true ? factory(exports) :
	0;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsAdoptingStyleSheets": function() { return /* binding */ supportsAdoptingStyleSheets; },
/* harmony export */   "CSSResult": function() { return /* binding */ CSSResult; },
/* harmony export */   "unsafeCSS": function() { return /* binding */ unsafeCSS; },
/* harmony export */   "css": function() { return /* binding */ css; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult = /*#__PURE__*/function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  _createClass(CSSResult, [{
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": function() { return /* binding */ customElement; },
/* harmony export */   "property": function() { return /* binding */ property; },
/* harmony export */   "internalProperty": function() { return /* binding */ internalProperty; },
/* harmony export */   "state": function() { return /* binding */ state; },
/* harmony export */   "query": function() { return /* binding */ query; },
/* harmony export */   "queryAsync": function() { return /* binding */ queryAsync; },
/* harmony export */   "queryAll": function() { return /* binding */ queryAll; },
/* harmony export */   "eventOptions": function() { return /* binding */ eventOptions; },
/* harmony export */   "queryAssignedNodes": function() { return /* binding */ queryAssignedNodes; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

var standardCustomElement = function standardCustomElement(tagName, descriptor) {
  var kind = descriptor.kind,
      elements = descriptor.elements;
  return {
    kind: kind,
    elements: elements,
    // This callback is called once the class is otherwise fully defined
    finisher: function finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */


var customElement = function customElement(tagName) {
  return function (classOrDescriptor) {
    return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
};

var standardProperty = function standardProperty(options, element) {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign(Object.assign({}, element), {
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer: function initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};

var legacyProperty = function legacyProperty(options, proto, name) {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
  };
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 * @deprecated `internalProperty` has been renamed to `state` in lit-element
 *     3.0. Please update to `state` now to be compatible with 3.0.
 */

function internalProperty(options) {
  return property({
    attribute: false,
    hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged
  });
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 */

var state = function state(options) {
  return internalProperty(options);
};
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function query(selector, cache) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };

    if (cache) {
      var prop = name !== undefined ? name : protoOrDescriptor.key;
      var key = _typeof(prop) === 'symbol' ? Symbol() : "__".concat(prop);

      descriptor.get = function () {
        if (this[key] === undefined) {
          this[key] = this.renderRoot.querySelector(selector);
        }

        return this[key];
      };
    }

    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
} // Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.

/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */

function queryAsync(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.updateComplete;

                case 2:
                  return _context.abrupt("return", _this.renderRoot.querySelector(selector));

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAll(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelectorAll(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

var legacyQuery = function legacyQuery(descriptor, proto, name) {
  Object.defineProperty(proto, name, descriptor);
};

var standardQuery = function standardQuery(descriptor, element) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor: descriptor
  };
};

var standardEventOptions = function standardEventOptions(options, element) {
  return Object.assign(Object.assign({}, element), {
    finisher: function finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }
  });
};

var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options, proto, name) {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */


function eventOptions(options) {
  // Return value typed as any to prevent TypeScript from complaining that
  // standard decorator function signature does not match TypeScript decorator
  // signature
  // TODO(kschaaf): unclear why it was only failing on this decorator and not
  // the others
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
  };
} // x-browser support for matches
// tslint:disable-next-line:no-any

var ElementProto = Element.prototype;
var legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAssignedNodes() {
  var slotName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var flatten = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        var slotSelector = "slot".concat(slotName ? "[name=".concat(slotName, "]") : ':not([name])');
        var slot = this.renderRoot.querySelector(slotSelector);
        var nodes = slot && slot.assignedNodes({
          flatten: flatten
        });

        if (nodes && selector) {
          nodes = nodes.filter(function (node) {
            return node.nodeType === Node.ELEMENT_NODE && (node.matches ? node.matches(selector) : legacyMatches.call(node, selector));
          });
        }

        return nodes;
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultConverter": function() { return /* binding */ defaultConverter; },
/* harmony export */   "notEqual": function() { return /* binding */ notEqual; },
/* harmony export */   "UpdatingElement": function() { return /* binding */ UpdatingElement; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





















/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

var finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

var UpdatingElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  var _super = _createSuper(UpdatingElement);

  function UpdatingElement() {
    var _this;

    _classCallCheck(this, UpdatingElement);

    _this = _super.call(this);

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",
    value:
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    function initialize() {
      var _this2 = this;

      this._updateState = 0;
      this._updatePromise = new Promise(function (res) {
        return _this2._enableUpdatingResolver = res;
      });
      this._changedProperties = new Map();

      this._saveInstanceProperties(); // ensures first update will be caught by an early access of
      // `updateComplete`


      this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this3.hasOwnProperty(p)) {
          var value = _this3[p];
          delete _this3[p];

          if (!_this3._instanceProperties) {
            _this3._instanceProperties = new Map();
          }

          _this3._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this4 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this4[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // Ensure first connection completes an update. Updates cannot complete
      // before connection.
      this.enableUpdating();
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating() {
      if (this._enableUpdatingResolver !== undefined) {
        this._enableUpdatingResolver();

        this._enableUpdatingResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
      // the type; it has issues with tracking types through statics
      // tslint:disable-next-line:no-unnecessary-type-assertion

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor.getPropertyOptions(propName); // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "requestUpdateInternal",
    value: function requestUpdateInternal(name, oldValue, options) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        options = options || ctor.getPropertyOptions(name);

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._updatePromise = this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this.requestUpdateInternal(name, oldValue);
      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                _context.prev = 1;
                _context.next = 4;
                return this._updatePromise;

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return result;

              case 12:
                return _context.abrupt("return", !this._hasRequestedUpdate);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */

  }, {
    key: "performUpdate",
    value: function performUpdate() {
      // Abort any update if one is not pending when this is called.
      // This can happen if `performUpdate` is called early to "flush"
      // the update.
      if (!this._hasRequestedUpdate) {
        return;
      } // Mixin instance properties once, if they exist.


      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        } else {
          this._markUpdated();
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false; // Ensure element can accept additional updates after an exception.

        this._markUpdated();

        throw e;
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */

  }, {
    key: "_getUpdateComplete",
    value: function _getUpdateComplete() {
      return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */

  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

        this._reflectingProperties = undefined;
      }

      this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }], [{
    key: "observedAttributes",
    get: function get() {
      var _this6 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this6._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this6._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */

  }, {
    key: "_ensureClassProperties",
    value: function _ensureClassProperties() {
      var _this7 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this7._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      var descriptor = this.getPropertyDescriptor(name, key, options);

      if (descriptor !== undefined) {
        Object.defineProperty(this.prototype, name, descriptor);
      }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */

  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(name, key, options) {
      return {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          var oldValue = this[name];
          this[key] = value;
          this.requestUpdateInternal(name, oldValue, options);
        },
        configurable: true,
        enumerable: true
      };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */

  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(name) {
      return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      // finalize any superclasses
      var superCtor = Object.getPrototypeOf(this);

      if (!superCtor.hasOwnProperty(finalized)) {
        superCtor.finalize();
      }

      this[finalized] = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iterator = _createForOfIteratorHelper(propKeys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }]);

  return UpdatingElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatingElement": function() { return /* reexport safe */ _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_18__.UpdatingElement; },
/* harmony export */   "defaultConverter": function() { return /* reexport safe */ _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_18__.defaultConverter; },
/* harmony export */   "notEqual": function() { return /* reexport safe */ _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_18__.notEqual; },
/* harmony export */   "ReactiveElement": function() { return /* reexport safe */ _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_18__.UpdatingElement; },
/* harmony export */   "customElement": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.customElement; },
/* harmony export */   "eventOptions": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.eventOptions; },
/* harmony export */   "internalProperty": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.internalProperty; },
/* harmony export */   "property": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.property; },
/* harmony export */   "query": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.query; },
/* harmony export */   "queryAll": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.queryAll; },
/* harmony export */   "queryAssignedNodes": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.queryAssignedNodes; },
/* harmony export */   "queryAsync": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.queryAsync; },
/* harmony export */   "state": function() { return /* reexport safe */ _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__.state; },
/* harmony export */   "html": function() { return /* reexport safe */ lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_20__.html; },
/* harmony export */   "svg": function() { return /* reexport safe */ lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_20__.svg; },
/* harmony export */   "TemplateResult": function() { return /* reexport safe */ lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_20__.TemplateResult; },
/* harmony export */   "SVGTemplateResult": function() { return /* reexport safe */ lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_20__.SVGTemplateResult; },
/* harmony export */   "CSSResult": function() { return /* reexport safe */ _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.CSSResult; },
/* harmony export */   "css": function() { return /* reexport safe */ _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.css; },
/* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.supportsAdoptingStyleSheets; },
/* harmony export */   "unsafeCSS": function() { return /* reexport safe */ _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.unsafeCSS; },
/* harmony export */   "LitElement": function() { return /* binding */ LitElement; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce-right.js */ "./node_modules/core-js/modules/es.array.reduce-right.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony import */ var lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lit-html/lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
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

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
 * The `UpdatingElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */







 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

var renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

var LitElement = /*#__PURE__*/function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  var _super = _createSuper(LitElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _super.apply(this, arguments);
  }

  _createClass(LitElement, [{
    key: "initialize",
    value:
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.constructor._getUniqueStyles();

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s instanceof CSSStyleSheet ? s : s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      var templateResult = this.render();

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties); // If render is not implemented by the component, don't call lit-html render


      if (templateResult !== renderNotImplemented) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */

  }, {
    key: "render",
    value: function render() {
      return renderNotImplemented;
    }
  }], [{
    key: "getStyles",
    value:
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    function getStyles() {
      return this.styles;
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Only gather styles once per class
      if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
        return;
      } // Take care not to call `this.getStyles()` multiple times since this
      // generates new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.


      var userStyles = this.getStyles();

      if (Array.isArray(userStyles)) {
        // De-duplicate styles preserving the _last_ instance in the set.
        // This is a performance optimization to avoid duplicated styles that can
        // occur especially when composing via subclassing.
        // The last item is kept to try to preserve the cascade order with the
        // assumption that it's most important that last added styles override
        // previous styles.
        var addStyles = function addStyles(styles, set) {
          return styles.reduceRight(function (set, s) {
            return (// Note: On IE set.add() does not return the set
              Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
            );
          }, set);
        }; // Array.from does not work on Set in IE, otherwise return
        // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


        var set = addStyles(userStyles, new Set());
        var styles = [];
        set.forEach(function (v) {
          return styles.unshift(v);
        });
        this._styles = styles;
      } else {
        this._styles = userStyles === undefined ? [] : [userStyles];
      } // Ensure that there are no invalid CSSStyleSheet instances here. They are
      // invalid in two conditions.
      // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
      //     this is impossible to check except via .replaceSync or use
      // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
      //     false)


      this._styles = this._styles.map(function (s) {
        if (s instanceof CSSStyleSheet && !_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.supportsAdoptingStyleSheets) {
          // Flatten the cssText from the passed constructible stylesheet (or
          // undetectable non-constructible stylesheet). The user might have
          // expected to update their stylesheets over time, but the alternative
          // is a crash.
          var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
            return css + rule.cssText;
          }, '');
          return (0,_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_21__.unsafeCSS)(cssText);
        }

        return s;
      });
    }
  }]);

  return LitElement;
}(_lib_updating_element_js__WEBPACK_IMPORTED_MODULE_18__.UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */

LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_17__.render;
/** @nocollapse */

LitElement.shadowRootOptions = {
  mode: 'open'
};

/***/ }),

/***/ "./node_modules/lit-html/directives/class-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/class-map.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": function() { return /* binding */ classMap; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 // IE11 doesn't support classList on SVG elements, so we emulate it with a Set

var ClassList = /*#__PURE__*/function () {
  function ClassList(element) {
    _classCallCheck(this, ClassList);

    this.classes = new Set();
    this.changed = false;
    this.element = element;
    var classList = (element.getAttribute('class') || '').split(/\s+/);

    var _iterator = _createForOfIteratorHelper(classList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cls = _step.value;
        this.classes.add(cls);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _createClass(ClassList, [{
    key: "add",
    value: function add(cls) {
      this.classes.add(cls);
      this.changed = true;
    }
  }, {
    key: "remove",
    value: function remove(cls) {
      this.classes.delete(cls);
      this.changed = true;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.changed) {
        var classString = '';
        this.classes.forEach(function (cls) {
          return classString += cls + ' ';
        });
        this.element.setAttribute('class', classString);
      }
    }
  }]);

  return ClassList;
}();
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */


var previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */

var classMap = (0,_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.directive)(function (classInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_16__.AttributePart) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_16__.PropertyPart || part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var element = committer.element;
    var previousClasses = previousClassesCache.get(part);

    if (previousClasses === undefined) {
      // Write static classes once
      // Use setAttribute() because className isn't a string on SVG elements
      element.setAttribute('class', committer.strings.join(' '));
      previousClassesCache.set(part, previousClasses = new Set());
    }

    var classList = element.classList || new ClassList(element); // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.

    previousClasses.forEach(function (name) {
      if (!(name in classInfo)) {
        classList.remove(name);
        previousClasses.delete(name);
      }
    }); // Add or remove classes based on their classMap value

    for (var name in classInfo) {
      var value = classInfo[name];

      if (value != previousClasses.has(name)) {
        // We explicitly want a loose truthy check of `value` because it seems
        // more convenient that '' and 0 are skipped.
        if (value) {
          classList.add(name);
          previousClasses.add(name);
        } else {
          classList.remove(name);
          previousClasses.delete(name);
        }
      }
    }

    if (typeof classList.commit === 'function') {
      classList.commit();
    }
  };
});

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTemplateProcessor": function() { return /* binding */ DefaultTemplateProcessor; },
/* harmony export */   "defaultTemplateProcessor": function() { return /* binding */ defaultTemplateProcessor; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

var DefaultTemplateProcessor = /*#__PURE__*/function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",
    value:
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _committer = new _parts_js__WEBPACK_IMPORTED_MODULE_1__.PropertyCommitter(element, name.slice(1), strings);

        return _committer.parts;
      }

      if (prefix === '@') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_1__.EventPart(element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_1__.BooleanAttributePart(element, name.slice(1), strings)];
      }

      var committer = new _parts_js__WEBPACK_IMPORTED_MODULE_1__.AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new _parts_js__WEBPACK_IMPORTED_MODULE_1__.NodePart(options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directive": function() { return /* binding */ directive; },
/* harmony export */   "isDirective": function() { return /* binding */ isDirective; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");






/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCEPolyfill": function() { return /* binding */ isCEPolyfill; },
/* harmony export */   "reparentNodes": function() { return /* binding */ reparentNodes; },
/* harmony export */   "removeNodes": function() { return /* binding */ removeNodes; }
/* harmony export */ });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeNodesFromTemplate": function() { return /* binding */ removeNodesFromTemplate; },
/* harmony export */   "insertNodeIntoTemplate": function() { return /* binding */ insertNodeIntoTemplate; }
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if ((0,_template_js__WEBPACK_IMPORTED_MODULE_0__.isTemplatePartActive)(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noChange": function() { return /* binding */ noChange; },
/* harmony export */   "nothing": function() { return /* binding */ nothing; }
/* harmony export */ });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPrimitive": function() { return /* binding */ isPrimitive; },
/* harmony export */   "isIterable": function() { return /* binding */ isIterable; },
/* harmony export */   "AttributeCommitter": function() { return /* binding */ AttributeCommitter; },
/* harmony export */   "AttributePart": function() { return /* binding */ AttributePart; },
/* harmony export */   "NodePart": function() { return /* binding */ NodePart; },
/* harmony export */   "BooleanAttributePart": function() { return /* binding */ BooleanAttributePart; },
/* harmony export */   "PropertyCommitter": function() { return /* binding */ PropertyCommitter; },
/* harmony export */   "PropertyPart": function() { return /* binding */ PropertyPart; },
/* harmony export */   "EventPart": function() { return /* binding */ EventPart; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var isIterable = function isIterable(value) {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

var AttributeCommitter = /*#__PURE__*/function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var parts = this.parts; // If we're assigning an attribute via syntax like:
      //    attr="${foo}"  or  attr=${foo}
      // but not
      //    attr="${foo} ${bar}" or attr="${foo} baz"
      // then we don't want to coerce the attribute value into one long
      // string. Instead we want to just return the value itself directly,
      // so that sanitizeDOMValue can get the actual value rather than
      // String(value)
      // The exception is if v is an array, in which case we do want to smash
      // it together into a string without calling String() on the array.
      //
      // This also allows trusted values (when using TrustedTypes) being
      // assigned to DOM sinks without being stringified in the process.

      if (l === 1 && strings[0] === '' && strings[1] === '') {
        var v = parts[0].value;

        if (_typeof(v) === 'symbol') {
          return String(v);
        }

        if (typeof v === 'string' || !isIterable(v)) {
          return v;
        }
      }

      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = parts[i];

        if (part !== undefined) {
          var _v = part.value;

          if (isPrimitive(_v) || !isIterable(_v)) {
            text += typeof _v === 'string' ? _v : String(_v);
          } else {
            var _iterator = _createForOfIteratorHelper(_v),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
/**
 * A Part that controls all or part of an attribute value.
 */

var AttributePart = /*#__PURE__*/function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = committer;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!(0,_directive_js__WEBPACK_IMPORTED_MODULE_14__.isDirective)(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0,_directive_js__WEBPACK_IMPORTED_MODULE_14__.isDirective)(this.value)) {
        var directive = this.value;
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange;
        directive(this);
      }

      if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

var NodePart = /*#__PURE__*/function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild((0,_template_js__WEBPACK_IMPORTED_MODULE_19__.createMarker)());
      this.endNode = container.appendChild((0,_template_js__WEBPACK_IMPORTED_MODULE_19__.createMarker)());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = (0,_template_js__WEBPACK_IMPORTED_MODULE_19__.createMarker)());

      part.__insert(this.endNode = (0,_template_js__WEBPACK_IMPORTED_MODULE_19__.createMarker)());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = (0,_template_js__WEBPACK_IMPORTED_MODULE_19__.createMarker)());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.startNode.parentNode === null) {
        return;
      }

      while ((0,_directive_js__WEBPACK_IMPORTED_MODULE_14__.isDirective)(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange;
        directive(this);
      }

      var value = this.__pendingValue;

      if (value === _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_18__.TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_16__.nothing) {
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
        this.clear();
      } else {
        // Fallback, will render the string representation
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this.__insert(value);

      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
      // it can't be implicitly converted - i.e. it's a symbol.

      var valueAsString = typeof value === 'string' ? value : String(value);

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }

      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_17__.TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_17__.TemplateInstance(template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this.__commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;

      var _iterator2 = _createForOfIteratorHelper(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_15__.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart = /*#__PURE__*/function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0,_directive_js__WEBPACK_IMPORTED_MODULE_14__.isDirective)(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange;
        directive(this);
      }

      if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange) {
        return;
      }

      var value = !!this.__pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }

        this.value = value;
      }

      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange;
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  var _super = _createSuper(PropertyCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _super.call(this, element, name, strings);
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart = /*#__PURE__*/function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  var _super2 = _createSuper(PropertyPart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _super2.apply(this, arguments);
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(function () {
  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

var EventPart = /*#__PURE__*/function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0,_directive_js__WEBPACK_IMPORTED_MODULE_14__.isDirective)(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange;
        directive(this);
      }

      if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange) {
        return;
      }

      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      this.value = newListener;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_16__.noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parts": function() { return /* binding */ parts; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");







/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



var parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_6__.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_7__.NodePart(Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_8__.templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": function() { return /* reexport safe */ _lit_html_js__WEBPACK_IMPORTED_MODULE_21__.html; },
/* harmony export */   "svg": function() { return /* reexport safe */ _lit_html_js__WEBPACK_IMPORTED_MODULE_21__.svg; },
/* harmony export */   "TemplateResult": function() { return /* reexport safe */ _lit_html_js__WEBPACK_IMPORTED_MODULE_21__.TemplateResult; },
/* harmony export */   "shadyTemplateFactory": function() { return /* binding */ shadyTemplateFactory; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

















/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */






 // Get a key to lookup in `templateCaches`.

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_18__.templateCaches.get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      _template_factory_js__WEBPACK_IMPORTED_MODULE_18__.templateCaches.set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_20__.marker);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new _template_js__WEBPACK_IMPORTED_MODULE_20__.Template(result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};
var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_18__.templateCaches.get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        (0,_modify_template_js__WEBPACK_IMPORTED_MODULE_16__.removeNodesFromTemplate)(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style');
  var length = styles.length; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < length; i++) {
    var _style = styles[i];

    _style.parentNode.removeChild(_style);

    condensedStyle.textContent += _style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  var content = templateElement.content;

  if (!!template) {
    (0,_modify_template_js__WEBPACK_IMPORTED_MODULE_16__.insertNodeIntoTemplate)(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  var style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    (0,_modify_template_js__WEBPACK_IMPORTED_MODULE_16__.removeNodesFromTemplate)(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render = function render(result, container, options) {
  if (!options || _typeof(options) !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  var scopeName = options.scopeName;
  var hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_17__.parts.has(container);
  var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_17__.render)(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = _render_js__WEBPACK_IMPORTED_MODULE_17__.parts.get(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_17__.parts.delete(renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.

    var template = part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_19__.TemplateInstance ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_15__.removeNodes)(container, container.firstChild);
    container.appendChild(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_17__.parts.set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateFactory": function() { return /* binding */ templateFactory; },
/* harmony export */   "templateCaches": function() { return /* binding */ templateCaches; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");








/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_7__.marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_7__.Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateInstance": function() { return /* binding */ TemplateInstance; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");











function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance = /*#__PURE__*/function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.__parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.__parts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari does not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      var fragment = _dom_js__WEBPACK_IMPORTED_MODULE_10__.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

      var walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length) {
        part = parts[partIndex];

        if (!(0,_template_js__WEBPACK_IMPORTED_MODULE_11__.isTemplatePartActive)(part)) {
          this.__parts.push(undefined);

          partIndex++;
          continue;
        } // Progress the tree walker until we find our next part's node.
        // Note that multiple parts may share the same node (attribute parts
        // on a single element), so this loop may not run at all.


        while (nodeIndex < part.index) {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }

          if ((node = walker.nextNode()) === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        } // We've arrived at our part's node.


        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);

          _part2.insertAfterNode(node.previousSibling);

          this.__parts.push(_part2);
        } else {
          var _this$__parts;

          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }

        partIndex++;
      }

      if (_dom_js__WEBPACK_IMPORTED_MODULE_10__.isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateResult": function() { return /* binding */ TemplateResult; },
/* harmony export */   "SVGTemplateResult": function() { return /* binding */ SVGTemplateResult; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
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














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */

var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
});
var commentMarker = " ".concat(_template_js__WEBPACK_IMPORTED_MODULE_13__.marker, " ");
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult = /*#__PURE__*/function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment position.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_13__.lastAttributeNameRegex.exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_13__.nodeMarker);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_13__.boundAttributeSuffix + attributeMatch[3] + _template_js__WEBPACK_IMPORTED_MODULE_13__.marker;
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      var value = this.getHTML();

      if (policy !== undefined) {
        // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
      }

      template.innerHTML = value;
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

var SVGTemplateResult = /*#__PURE__*/function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  var _super = _createSuper(SVGTemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _super.apply(this, arguments);
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_12__.reparentNodes)(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "marker": function() { return /* binding */ marker; },
/* harmony export */   "nodeMarker": function() { return /* binding */ nodeMarker; },
/* harmony export */   "markerRegex": function() { return /* binding */ markerRegex; },
/* harmony export */   "boundAttributeSuffix": function() { return /* binding */ boundAttributeSuffix; },
/* harmony export */   "Template": function() { return /* binding */ Template; },
/* harmony export */   "isTemplatePartActive": function() { return /* binding */ isTemplatePartActive; },
/* harmony export */   "createMarker": function() { return /* binding */ createMarker; },
/* harmony export */   "lastAttributeNameRegex": function() { return /* binding */ lastAttributeNameRegex; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

  var walker = document.createTreeWalker(element.content, 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  , null, false); // Keeps track of the last index associated with a part. We try to delete
  // unnecessary nodes, but we never want to associate two different parts
  // to the same index. They must have a constant node between.

  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;

  while (partIndex < length) {
    var node = walker.nextNode();

    if (node === null) {
      // We've exhausted the content inside a nested template element.
      // Because we still have parts (the outer for-loop), we know:
      // - There is a template in the stack
      // - The walker will find a nextNode outside the template
      walker.currentNode = stack.pop();
      continue;
    }

    index++;

    if (node.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) {
      if (node.hasAttributes()) {
        var attributes = node.attributes;
        var _length = attributes.length; // Per
        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
        // attributes are not guaranteed to be returned in document order.
        // In particular, Edge/IE can return them out of order, so we cannot
        // assume a correspondence between part index and attribute index.

        var count = 0;

        for (var i = 0; i < _length; i++) {
          if (endsWith(attributes[i].name, boundAttributeSuffix)) {
            count++;
          }
        }

        while (count-- > 0) {
          // Get the template literal section leading up to the first
          // expression in this attribute
          var stringForPart = strings[partIndex]; // Find the attribute name

          var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
          // All bound attributes have had a suffix added in
          // TemplateResult#getHTML to opt out of special attribute
          // handling. To look up the attribute value we also need to add
          // the suffix.

          var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
          var attributeValue = node.getAttribute(attributeLookupName);
          node.removeAttribute(attributeLookupName);
          var statics = attributeValue.split(markerRegex);
          this.parts.push({
            type: 'attribute',
            index: index,
            name: name,
            strings: statics
          });
          partIndex += statics.length - 1;
        }
      }

      if (node.tagName === 'TEMPLATE') {
        stack.push(node);
        walker.currentNode = node.content;
      }
    } else if (node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
      var data = node.data;

      if (data.indexOf(marker) >= 0) {
        var parent = node.parentNode;

        var _strings = data.split(markerRegex);

        var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
        // These nodes are also used as the markers for node parts

        for (var _i = 0; _i < lastIndex; _i++) {
          var insert = void 0;
          var s = _strings[_i];

          if (s === '') {
            insert = createMarker();
          } else {
            var match = lastAttributeNameRegex.exec(s);

            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
              s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
            }

            insert = document.createTextNode(s);
          }

          parent.insertBefore(insert, node);
          this.parts.push({
            type: 'node',
            index: ++index
          });
        } // If there's no text, we must insert a comment to mark our place.
        // Else, we can trust it will stick around after cloning.


        if (_strings[lastIndex] === '') {
          parent.insertBefore(createMarker(), node);
          nodesToRemove.push(node);
        } else {
          node.data = _strings[lastIndex];
        } // We have a part for each match found


        partIndex += lastIndex;
      }
    } else if (node.nodeType === 8
    /* Node.COMMENT_NODE */
    ) {
      if (node.data === marker) {
        var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
        // the following are true:
        //  * We don't have a previousSibling
        //  * The previousSibling is already the start of a previous part

        if (node.previousSibling === null || index === lastPartIndex) {
          index++;

          _parent.insertBefore(createMarker(), node);
        }

        lastPartIndex = index;
        this.parts.push({
          type: 'node',
          index: index
        }); // If we don't have a nextSibling, keep this node so we have an end.
        // Else, we can remove it to save future costs.

        if (node.nextSibling === null) {
          node.data = '';
        } else {
          nodesToRemove.push(node);
          index--;
        }

        partIndex++;
      } else {
        var _i2 = -1;

        while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
          // Comment node has a binding marker inside, make an inactive part
          // The binding won't work, but subsequent bindings will
          // TODO (justinfagnani): consider whether it's even worth it to
          // make bindings in comments work
          this.parts.push({
            type: 'node',
            index: -1
          });
          partIndex++;
        }
      }
    }
  } // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTemplateProcessor": function() { return /* reexport safe */ _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__.DefaultTemplateProcessor; },
/* harmony export */   "defaultTemplateProcessor": function() { return /* reexport safe */ _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__.defaultTemplateProcessor; },
/* harmony export */   "directive": function() { return /* reexport safe */ _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__.directive; },
/* harmony export */   "isDirective": function() { return /* reexport safe */ _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__.isDirective; },
/* harmony export */   "removeNodes": function() { return /* reexport safe */ _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.removeNodes; },
/* harmony export */   "reparentNodes": function() { return /* reexport safe */ _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.reparentNodes; },
/* harmony export */   "noChange": function() { return /* reexport safe */ _lib_part_js__WEBPACK_IMPORTED_MODULE_4__.noChange; },
/* harmony export */   "nothing": function() { return /* reexport safe */ _lib_part_js__WEBPACK_IMPORTED_MODULE_4__.nothing; },
/* harmony export */   "AttributeCommitter": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.AttributeCommitter; },
/* harmony export */   "AttributePart": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.AttributePart; },
/* harmony export */   "BooleanAttributePart": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.BooleanAttributePart; },
/* harmony export */   "EventPart": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.EventPart; },
/* harmony export */   "isIterable": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.isIterable; },
/* harmony export */   "isPrimitive": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.isPrimitive; },
/* harmony export */   "NodePart": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.NodePart; },
/* harmony export */   "PropertyCommitter": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.PropertyCommitter; },
/* harmony export */   "PropertyPart": function() { return /* reexport safe */ _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__.PropertyPart; },
/* harmony export */   "parts": function() { return /* reexport safe */ _lib_render_js__WEBPACK_IMPORTED_MODULE_6__.parts; },
/* harmony export */   "render": function() { return /* reexport safe */ _lib_render_js__WEBPACK_IMPORTED_MODULE_6__.render; },
/* harmony export */   "templateCaches": function() { return /* reexport safe */ _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__.templateCaches; },
/* harmony export */   "templateFactory": function() { return /* reexport safe */ _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__.templateFactory; },
/* harmony export */   "TemplateInstance": function() { return /* reexport safe */ _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__.TemplateInstance; },
/* harmony export */   "SVGTemplateResult": function() { return /* reexport safe */ _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__.SVGTemplateResult; },
/* harmony export */   "TemplateResult": function() { return /* reexport safe */ _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__.TemplateResult; },
/* harmony export */   "createMarker": function() { return /* reexport safe */ _lib_template_js__WEBPACK_IMPORTED_MODULE_9__.createMarker; },
/* harmony export */   "isTemplatePartActive": function() { return /* reexport safe */ _lib_template_js__WEBPACK_IMPORTED_MODULE_9__.isTemplatePartActive; },
/* harmony export */   "Template": function() { return /* reexport safe */ _lib_template_js__WEBPACK_IMPORTED_MODULE_9__.Template; },
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "svg": function() { return /* binding */ svg; }
/* harmony export */ });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__.TemplateResult(strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__.defaultTemplateProcessor);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

var svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__.SVGTemplateResult(strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__.defaultTemplateProcessor);
};

/***/ }),

/***/ "./node_modules/lit/directives/repeat.js":
/*!***********************************************!*\
  !*** ./node_modules/lit/directives/repeat.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeat": function() { return /* reexport safe */ lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__.repeat; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/repeat.js */ "./node_modules/lit/node_modules/lit-html/development/directives/repeat.js");


/***/ }),

/***/ "./node_modules/lit/directives/unsafe-html.js":
/*!****************************************************!*\
  !*** ./node_modules/lit/directives/unsafe-html.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": function() { return /* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.UnsafeHTMLDirective; },
/* harmony export */   "unsafeHTML": function() { return /* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit/node_modules/lit-html/development/directives/unsafe-html.js");


/***/ }),

/***/ "./node_modules/lit/html.js":
/*!**********************************!*\
  !*** ./node_modules/lit/html.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTERNAL": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.INTERNAL; },
/* harmony export */   "_$LH": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__._$LH; },
/* harmony export */   "html": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.html; },
/* harmony export */   "noChange": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.noChange; },
/* harmony export */   "nothing": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.nothing; },
/* harmony export */   "render": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "svg": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.svg; }
/* harmony export */ });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit/node_modules/lit-html/development/lit-html.js");


/***/ }),

/***/ "./node_modules/lit/node_modules/lit-html/development/directive-helpers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/lit/node_modules/lit-html/development/directive-helpers.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPrimitive": function() { return /* binding */ isPrimitive; },
/* harmony export */   "TemplateResultType": function() { return /* binding */ TemplateResultType; },
/* harmony export */   "isTemplateResult": function() { return /* binding */ isTemplateResult; },
/* harmony export */   "isDirectiveResult": function() { return /* binding */ isDirectiveResult; },
/* harmony export */   "getDirectiveClass": function() { return /* binding */ getDirectiveClass; },
/* harmony export */   "isSingleExpression": function() { return /* binding */ isSingleExpression; },
/* harmony export */   "insertPart": function() { return /* binding */ insertPart; },
/* harmony export */   "setChildPartValue": function() { return /* binding */ setChildPartValue; },
/* harmony export */   "setCommittedValue": function() { return /* binding */ setCommittedValue; },
/* harmony export */   "getCommittedValue": function() { return /* binding */ getCommittedValue; },
/* harmony export */   "removePart": function() { return /* binding */ removePart; },
/* harmony export */   "clearPart": function() { return /* binding */ clearPart; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit/node_modules/lit-html/development/lit-html.js");








function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;


var ChildPart = _lit_html_js__WEBPACK_IMPORTED_MODULE_7__._$LH._ChildPart;
var ENABLE_SHADYDOM_NOPATCH = true;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : function (node) {
  return node;
};
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */

var isPrimitive = function isPrimitive(value) {
  return value === null || _typeof(value) != 'object' && typeof value != 'function';
};
var TemplateResultType = {
  HTML: 1,
  SVG: 2
};
/**
 * Tests if a value is a TemplateResult.
 */

var isTemplateResult = function isTemplateResult(value, type) {
  var _a, _b;

  return type === undefined ? // This property needs to remain unminified.
  ((_a = value) === null || _a === void 0 ? void 0 : _a['_$litType$']) !== undefined : ((_b = value) === null || _b === void 0 ? void 0 : _b['_$litType$']) === type;
};
/**
 * Tests if a value is a DirectiveResult.
 */

var isDirectiveResult = function isDirectiveResult(value) {
  var _a; // This property needs to remain unminified.


  return ((_a = value) === null || _a === void 0 ? void 0 : _a['_$litDirective$']) !== undefined;
};
/**
 * Retrieves the Directive class for a DirectiveResult
 */

var getDirectiveClass = function getDirectiveClass(value) {
  var _a; // This property needs to remain unminified.


  return (_a = value) === null || _a === void 0 ? void 0 : _a['_$litDirective$'];
};
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */

var isSingleExpression = function isSingleExpression(part) {
  return part.strings === undefined;
};

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */


var insertPart = function insertPart(containerPart, refPart, part) {
  var _a;

  var container = wrap(containerPart._$startNode).parentNode;
  var refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;

  if (part === undefined) {
    var startNode = wrap(container).insertBefore(createMarker(), refNode);
    var endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    var _endNode = wrap(part._$endNode).nextSibling;
    var oldParent = part._$parent;
    var parentChanged = oldParent !== containerPart;

    if (parentChanged) {
      (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart); // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here

      part._$parent = containerPart; // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified

      var newConnectionState;

      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }

    if (_endNode !== refNode || parentChanged) {
      var start = part._$startNode;

      while (start !== _endNode) {
        var n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }

  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */

var setChildPartValue = function setChildPartValue(part, value) {
  var directiveParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : part;

  part._$setValue(value, directiveParent);

  return part;
}; // A sentinal value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.

var RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */

var setCommittedValue = function setCommittedValue(part) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RESET_VALUE;
  return part._$committedValue = value;
};
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being commited.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */

var getCommittedValue = function getCommittedValue(part) {
  return part._$committedValue;
};
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */

var removePart = function removePart(part) {
  var _a;

  (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
  var start = part._$startNode;
  var end = wrap(part._$endNode).nextSibling;

  while (start !== end) {
    var n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
var clearPart = function clearPart(part) {
  part._$clear();
};

/***/ }),

/***/ "./node_modules/lit/node_modules/lit-html/development/directives/repeat.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/lit/node_modules/lit-html/development/directives/repeat.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repeat": function() { return /* binding */ repeat; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit/node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit/node_modules/lit-html/development/directive.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit/node_modules/lit-html/development/directive-helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }















/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


 // Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)

var generateMap = function generateMap(list, start, end) {
  var map = new Map();

  for (var i = start; i <= end; i++) {
    map.set(list[i], i);
  }

  return map;
};

var RepeatDirective = /*#__PURE__*/function (_Directive) {
  _inherits(RepeatDirective, _Directive);

  var _super = _createSuper(RepeatDirective);

  function RepeatDirective(partInfo) {
    var _this;

    _classCallCheck(this, RepeatDirective);

    _this = _super.call(this, partInfo);

    if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_14__.PartType.CHILD) {
      throw new Error('repeat() can only be used in text expressions');
    }

    return _this;
  }

  _createClass(RepeatDirective, [{
    key: "_getValuesAndKeys",
    value: function _getValuesAndKeys(items, keyFnOrTemplate, template) {
      var keyFn;

      if (template === undefined) {
        template = keyFnOrTemplate;
      } else if (keyFnOrTemplate !== undefined) {
        keyFn = keyFnOrTemplate;
      }

      var keys = [];
      var values = [];
      var index = 0;

      var _iterator = _createForOfIteratorHelper(items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          keys[index] = keyFn ? keyFn(item, index) : index;
          values[index] = template(item, index);
          index++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        values: values,
        keys: keys
      };
    }
  }, {
    key: "render",
    value: function render(items, keyFnOrTemplate, template) {
      return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
    }
  }, {
    key: "update",
    value: function update(containerPart, _ref) {
      var _ref2 = _slicedToArray(_ref, 3),
          items = _ref2[0],
          keyFnOrTemplate = _ref2[1],
          template = _ref2[2];

      var _a; // Old part & key lists are retrieved from the last update (which may
      // be primed by hydration)


      var oldParts = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.getCommittedValue)(containerPart);

      var _this$_getValuesAndKe = this._getValuesAndKeys(items, keyFnOrTemplate, template),
          newValues = _this$_getValuesAndKe.values,
          newKeys = _this$_getValuesAndKe.keys; // We check that oldParts, the committed value, is an Array as an
      // indicator that the previous value came from a repeat() call. If
      // oldParts is not an Array then this is the first render and we return
      // an array for lit-html's array handling to render, and remember the
      // keys.


      if (!Array.isArray(oldParts)) {
        this._itemKeys = newKeys;
        return newValues;
      } // In SSR hydration it's possible for oldParts to be an arrray but for us
      // to not have item keys because the update() hasn't run yet. We set the
      // keys to an empty array. This will cause all oldKey/newKey comparisons
      // to fail and execution to fall to the last nested brach below which
      // reuses the oldPart.


      var oldKeys = (_a = this._itemKeys) !== null && _a !== void 0 ? _a : this._itemKeys = []; // New part list will be built up as we go (either reused from
      // old parts or created for new keys in this update). This is
      // saved in the above cache at the end of the update.

      var newParts = []; // Maps from key to index for current and previous update; these
      // are generated lazily only when needed as a performance
      // optimization, since they are only required for multiple
      // non-contiguous changes in the list, which are less common.

      var newKeyToIndexMap;
      var oldKeyToIndexMap; // Head and tail pointers to old parts and new values

      var oldHead = 0;
      var oldTail = oldParts.length - 1;
      var newHead = 0;
      var newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
      // based on ideas found in ivi, vue, snabbdom, etc.):
      //
      // * We start with the list of old parts and new values (and
      //   arrays of their respective keys), head/tail pointers into
      //   each, and we build up the new list of parts by updating
      //   (and when needed, moving) old parts or creating new ones.
      //   The initial scenario might look like this (for brevity of
      //   the diagrams, the numbers in the array reflect keys
      //   associated with the old parts or new values, although keys
      //   and parts/values are actually stored in parallel arrays
      //   indexed using the same head/tail pointers):
      //
      //      oldHead v                 v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [ ,  ,  ,  ,  ,  ,  ]
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
      //                                      item order
      //      newHead ^                 ^ newTail
      //
      // * Iterate old & new lists from both sides, updating,
      //   swapping, or removing parts at the head/tail locations
      //   until neither head nor tail can move.
      //
      // * Example below: keys at head pointers match, so update old
      //   part 0 in-place (no need to move it) and record part 0 in
      //   the `newParts` list. The last thing we do is advance the
      //   `oldHead` and `newHead` pointers (will be reflected in the
      //   next diagram).
      //
      //      oldHead v                 v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
      //                                      & newHead
      //      newHead ^                 ^ newTail
      //
      // * Example below: head pointers don't match, but tail
      //   pointers do, so update part 6 in place (no need to move
      //   it), and record part 6 in the `newParts` list. Last,
      //   advance the `oldTail` and `oldHead` pointers.
      //
      //         oldHead v              v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
      //                                      & newTail
      //         newHead ^              ^ newTail
      //
      // * If neither head nor tail match; next check if one of the
      //   old head/tail items was removed. We first need to generate
      //   the reverse map of new keys to index (`newKeyToIndexMap`),
      //   which is done once lazily as a performance optimization,
      //   since we only hit this case if multiple non-contiguous
      //   changes were made. Note that for contiguous removal
      //   anywhere in the list, the head and tails would advance
      //   from either end and pass each other before we get to this
      //   case and removals would be handled in the final while loop
      //   without needing to generate the map.
      //
      // * Example below: The key at `oldTail` was removed (no longer
      //   in the `newKeyToIndexMap`), so remove that part from the
      //   DOM and advance just the `oldTail` pointer.
      //
      //         oldHead v           v oldTail
      //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
      //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
      //         newHead ^           ^ newTail
      //
      // * Once head and tail cannot move, any mismatches are due to
      //   either new or moved items; if a new key is in the previous
      //   "old key to old index" map, move the old part to the new
      //   location, otherwise create and insert a new part. Note
      //   that when moving an old part we null its position in the
      //   oldParts array if it lies between the head and tail so we
      //   know to skip it when the pointers get there.
      //
      // * Example below: neither head nor tail match, and neither
      //   were removed; so find the `newHead` key in the
      //   `oldKeyToIndexMap`, and move that old part's DOM into the
      //   next head position (before `oldParts[oldHead]`). Last,
      //   null the part in the `oldPart` array since it was
      //   somewhere in the remaining oldParts still to be scanned
      //   (between the head and tail pointers) so that we know to
      //   skip that old part on future iterations.
      //
      //         oldHead v        v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
      //                                      newHead
      //         newHead ^           ^ newTail
      //
      // * Note that for moves/insertions like the one above, a part
      //   inserted at the head pointer is inserted before the
      //   current `oldParts[oldHead]`, and a part inserted at the
      //   tail pointer is inserted before `newParts[newTail+1]`. The
      //   seeming asymmetry lies in the fact that new parts are
      //   moved into place outside in, so to the right of the head
      //   pointer are old parts, and to the right of the tail
      //   pointer are new parts.
      //
      // * We always restart back from the top of the algorithm,
      //   allowing matching and simple updates in place to
      //   continue...
      //
      // * Example below: the head pointers once again match, so
      //   simply update part 1 and record it in the `newParts`
      //   array.  Last, advance both head pointers.
      //
      //         oldHead v        v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
      //                                      & newHead
      //            newHead ^        ^ newTail
      //
      // * As mentioned above, items that were moved as a result of
      //   being stuck (the final else clause in the code below) are
      //   marked with null, so we always advance old pointers over
      //   these so we're comparing the next actual old value on
      //   either end.
      //
      // * Example below: `oldHead` is null (already placed in
      //   newParts), so advance `oldHead`.
      //
      //            oldHead v     v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
      //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
      //               newHead ^     ^ newTail
      //
      // * Note it's not critical to mark old parts as null when they
      //   are moved from head to tail or tail to head, since they
      //   will be outside the pointer range and never visited again.
      //
      // * Example below: Here the old tail key matches the new head
      //   key, so the part at the `oldTail` position and move its
      //   DOM to the new head position (before `oldParts[oldHead]`).
      //   Last, advance `oldTail` and `newHead` pointers.
      //
      //               oldHead v  v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
      //                                     advance oldTail & newHead
      //               newHead ^     ^ newTail
      //
      // * Example below: Old and new head keys match, so update the
      //   old head part in place, and advance the `oldHead` and
      //   `newHead` pointers.
      //
      //               oldHead v oldTail
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
      //                                      newHead
      //                  newHead ^  ^ newTail
      //
      // * Once the new or old pointers move past each other then all
      //   we have left is additions (if old list exhausted) or
      //   removals (if new list exhausted). Those are handled in the
      //   final while loops at the end.
      //
      // * Example below: `oldHead` exceeded `oldTail`, so we're done
      //   with the main loop.  Create the remaining part and insert
      //   it at the new head position, and the update is complete.
      //
      //                   (oldHead > oldTail)
      //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
      //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
      //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
      //                     newHead ^ newTail
      //
      // * Note that the order of the if/else clauses is not
      //   important to the algorithm, as long as the null checks
      //   come first (to ensure we're always working on valid old
      //   parts) and that the final else clause comes last (since
      //   that's where the expensive moves occur). The order of
      //   remaining clauses is is just a simple guess at which cases
      //   will be most common.
      //
      // * Note, we could calculate the longest
      //   increasing subsequence (LIS) of old items in new position,
      //   and only move those not in the LIS set. However that costs
      //   O(nlogn) time and adds a bit more code, and only helps
      //   make rare types of mutations require fewer moves. The
      //   above handles removes, adds, reversal, swaps, and single
      //   moves of contiguous items in linear time, in the minimum
      //   number of moves. As the number of multiple moves where LIS
      //   might help approaches a random shuffle, the LIS
      //   optimization becomes less helpful, so it seems not worth
      //   the code at this point. Could reconsider if a compelling
      //   case arises.

      while (oldHead <= oldTail && newHead <= newTail) {
        if (oldParts[oldHead] === null) {
          // `null` means old part at head has already been used
          // below; skip
          oldHead++;
        } else if (oldParts[oldTail] === null) {
          // `null` means old part at tail has already been used
          // below; skip
          oldTail--;
        } else if (oldKeys[oldHead] === newKeys[newHead]) {
          // Old head matches new head; update in place
          newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(oldParts[oldHead], newValues[newHead]);
          oldHead++;
          newHead++;
        } else if (oldKeys[oldTail] === newKeys[newTail]) {
          // Old tail matches new tail; update in place
          newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(oldParts[oldTail], newValues[newTail]);
          oldTail--;
          newTail--;
        } else if (oldKeys[oldHead] === newKeys[newTail]) {
          // Old head matches new tail; update and move to new tail
          newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(oldParts[oldHead], newValues[newTail]);
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.insertPart)(containerPart, newParts[newTail + 1], oldParts[oldHead]);
          oldHead++;
          newTail--;
        } else if (oldKeys[oldTail] === newKeys[newHead]) {
          // Old tail matches new head; update and move to new head
          newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(oldParts[oldTail], newValues[newHead]);
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.insertPart)(containerPart, oldParts[oldHead], oldParts[oldTail]);
          oldTail--;
          newHead++;
        } else {
          if (newKeyToIndexMap === undefined) {
            // Lazily generate key-to-index maps, used for removals &
            // moves below
            newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
            oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
          }

          if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
            // Old head is no longer in new list; remove
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.removePart)(oldParts[oldHead]);
            oldHead++;
          } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
            // Old tail is no longer in new list; remove
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.removePart)(oldParts[oldTail]);
            oldTail--;
          } else {
            // Any mismatches at this point are due to additions or
            // moves; see if we have an old part we can reuse and move
            // into place
            var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
            var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

            if (oldPart === null) {
              // No old part for this value; create a new one and
              // insert it
              var newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.insertPart)(containerPart, oldParts[oldHead]);
              (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(newPart, newValues[newHead]);
              newParts[newHead] = newPart;
            } else {
              // Reuse old part
              newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(oldPart, newValues[newHead]);
              (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.insertPart)(containerPart, oldParts[oldHead], oldPart); // This marks the old part as having been used, so that
              // it will be skipped in the first two checks above

              oldParts[oldIndex] = null;
            }

            newHead++;
          }
        }
      } // Add parts for any remaining new values


      while (newHead <= newTail) {
        // For all remaining additions, we insert before last new
        // tail, since old pointers are no longer valid
        var _newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.insertPart)(containerPart, newParts[newTail + 1]);

        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setChildPartValue)(_newPart, newValues[newHead]);
        newParts[newHead++] = _newPart;
      } // Remove any remaining unused old parts


      while (oldHead <= oldTail) {
        var _oldPart = oldParts[oldHead++];

        if (_oldPart !== null) {
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.removePart)(_oldPart);
        }
      } // Save order of new parts for next round


      this._itemKeys = newKeys; // Directly set part value, bypassing it's dirty-checking

      (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_15__.setCommittedValue)(containerPart, newParts);
      return _lit_html_js__WEBPACK_IMPORTED_MODULE_13__.noChange;
    }
  }]);

  return RepeatDirective;
}(_directive_js__WEBPACK_IMPORTED_MODULE_14__.Directive);
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
 *
 * ```js
 * html`
 *   <ol>
 *     ${repeat(this.items, (item) => item.id, (item, index) => {
 *       return html`<li>${index}: ${item.name}</li>`;
 *     })}
 *   </ol>
 * `
 * ```
 *
 * **Important**: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */


var repeat = (0,_directive_js__WEBPACK_IMPORTED_MODULE_14__.directive)(RepeatDirective);

/***/ }),

/***/ "./node_modules/lit/node_modules/lit-html/development/directives/unsafe-html.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/lit/node_modules/lit-html/development/directives/unsafe-html.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": function() { return /* binding */ UnsafeHTMLDirective; },
/* harmony export */   "unsafeHTML": function() { return /* binding */ unsafeHTML; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit/node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit/node_modules/lit-html/development/directive.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var HTML_RESULT = 1;
var UnsafeHTMLDirective = /*#__PURE__*/function (_Directive) {
  _inherits(UnsafeHTMLDirective, _Directive);

  var _super = _createSuper(UnsafeHTMLDirective);

  function UnsafeHTMLDirective(partInfo) {
    var _this;

    _classCallCheck(this, UnsafeHTMLDirective);

    _this = _super.call(this, partInfo);
    _this._value = _lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;

    if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_10__.PartType.CHILD) {
      throw new Error("".concat(_this.constructor.directiveName, "() can only be used in child bindings"));
    }

    return _this;
  }

  _createClass(UnsafeHTMLDirective, [{
    key: "render",
    value: function render(value) {
      var _this$_templateResult;

      if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing || value == null) {
        this._templateResult = undefined;
        return this._value = value;
      }

      if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_9__.noChange) {
        return value;
      }

      if (typeof value != 'string') {
        throw new Error("".concat(this.constructor.directiveName, "() called with a non-string value"));
      }

      if (value === this._value) {
        return this._templateResult;
      }

      this._value = value;
      var strings = [value]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      strings.raw = strings; // WARNING: impersonating a TemplateResult like this is extremely
      // dangerous. Third-party directives should not do this.

      return this._templateResult = (_this$_templateResult = {}, _defineProperty(_this$_templateResult, '_$litType$', this.constructor.resultType), _defineProperty(_this$_templateResult, "strings", strings), _defineProperty(_this$_templateResult, "values", []), _this$_templateResult);
    }
  }]);

  return UnsafeHTMLDirective;
}(_directive_js__WEBPACK_IMPORTED_MODULE_10__.Directive);
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */

var unsafeHTML = (0,_directive_js__WEBPACK_IMPORTED_MODULE_10__.directive)(UnsafeHTMLDirective);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ia-bookreader/ia-bookreader.js"));
/******/ }
]);
//# sourceMappingURL=ia-bookreader-bundle.js.map