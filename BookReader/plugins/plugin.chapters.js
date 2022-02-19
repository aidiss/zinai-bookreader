"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.chapters.js"],{

/***/ "./src/plugins/plugin.chapters.js":
/*!****************************************!*\
  !*** ./src/plugins/plugin.chapters.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










/* global BookReader */

/**
 * Plugin for chapter markers in BookReader. Fetches from openlibrary.org
 * Could be forked, or extended to alter behavior
 */
jQuery.extend(BookReader.defaultOptions, {
  olHost: 'https://openlibrary.org',
  enableChaptersPlugin: true,
  bookId: ''
});
/** @override Extend the constructor to add search properties */

BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.olHost = options.olHost;
    this.enableChaptersPlugin = options.enableChaptersPlugin;
    this.bookId = options.bookId;
  };
}(BookReader.prototype.setup);
/** @override Extend to call Open Library for TOC */


BookReader.prototype.init = function (super_) {
  return function () {
    var _this = this;

    super_.call(this);

    if (this.enableChaptersPlugin && this.ui !== 'embed') {
      this.getOpenLibraryRecord();
    }

    if (this.enableMobileNav) {
      this.bind(BookReader.eventNames.mobileNavOpen, function () {
        _this.updateTOCState(_this.firstIndex, _this._tocEntries);

        if ($('table-contents-list').parent().hasClass('mm-opened')) {
          _this.updateTOCState(_this.firstIndex, _this._tocEntries);
        }
      });
      $(".BRmobileMenu__tableContents").on("click", function () {
        _this.updateTOCState(_this.firstIndex, _this._tocEntries);
      });
    }
  };
}(BookReader.prototype.init);
/**
 * Adds chapter marker to navigation scrubber
 *
 * @param {string} chapterTitle
 * @param {string} pageNumber
 * @param {number} pageIndex
 */


BookReader.prototype.addChapter = function (chapterTitle, pageNumber, pageIndex) {
  var _this2 = this;

  var uiStringPage = 'Page'; // i18n

  var percentThrough = BookReader.util.cssPercentage(pageIndex, this.getNumLeafs() - 1);

  var jumpToChapter = function jumpToChapter(event) {
    _this2.jumpToIndex($(event.delegateTarget).data('pageIndex'));

    $('.current-chapter').removeClass('current-chapter');
    $(event.delegateTarget).addClass('current-chapter');
  };

  var title = "".concat(chapterTitle, " | ");
  var pageStr = "".concat(uiStringPage, " ").concat(pageNumber); //adding items to mobile table of contents

  var mobileChapter = $("<li></li>").append($("<span class='BRTOCElementTitle'></span>").text(title)).append($("<span class='BRTOCElementPage'></span>").text(pageStr));
  mobileChapter.addClass('BRtable-contents-el').appendTo(this.$('.table-contents-list')).data({
    pageIndex: pageIndex
  }); //adds .BRchapters to the slider only if pageIndex exists

  if (pageIndex != undefined) {
    $("<div></div>").append($('<div />').text(title + pageStr)).addClass('BRchapter').css({
      left: percentThrough
    }).appendTo(this.$('.BRnavline')).data({
      pageIndex: pageIndex
    }).on("mouseenter", function (event) {
      // remove hover effect from other markers then turn on just for this
      var marker = event.currentTarget;
      var tooltip = marker.querySelector('div');
      var tooltipOffset = tooltip.getBoundingClientRect();
      var targetOffset = marker.getBoundingClientRect();
      var boxSizeAdjust = parseInt(getComputedStyle(tooltip).paddingLeft) * 2;

      if (tooltipOffset.x - boxSizeAdjust < 0) {
        tooltip.style.setProperty('transform', "translateX(-".concat(targetOffset.left - boxSizeAdjust, "px)"));
      }

      _this2.$('.BRsearch,.BRchapter').removeClass('front');

      $(event.target).addClass('front');
    }).on("mouseleave", function (event) {
      return $(event.target).removeClass('front');
    }).on('click', jumpToChapter); //adding clickable properties to mobile chapters

    mobileChapter.bind('click', jumpToChapter).addClass('chapter-clickable').attr("data-event-click-tracking", "BRTOCPanel|GoToChapter");
  }
};
/*
 * Remove all chapters.
 */


BookReader.prototype.removeChapters = function () {
  this.$('.BRnavpos .BRchapter').remove();
};
/**
 * Update the table of contents based on array of TOC entries.
 * @param {TocEntry[]} tocEntries
 */


BookReader.prototype.updateTOC = function (tocEntries) {
  this.removeChapters();

  if (this.enableMobileNav && tocEntries.length > 0) {
    this.$(".BRmobileMenu__tableContents").show();
  }

  for (var i = 0; i < tocEntries.length; i++) {
    this.addChapterFromEntry(tocEntries[i]);
  }

  this._tocEntries = tocEntries;
  $('.table-contents-list').children().each(function (i, el) {
    tocEntries[i].mobileHTML = el;
  });
};
/**
 * @typedef {Object} TocEntry
 * Table of contents entry as defined -- format is defined by Open Library
 * @property {string} pagenum
 * @property {number} level
 * @property {string} label
 * @property {{type: '/type/toc_item'}} type
 * @property {string} title
 * @property {HTMLElement} mobileHTML
 * @property {number} pageIndex

 *
 * @example {
 *   "pagenum": "17",
 *   "level": 1,
 *   "label": "CHAPTER I",
 *   "type": {"key": "/type/toc_item"},
 *   "title": "THE COUNTRY AND THE MISSION"
 * }
 */

/**
 * @param {TocEntry} tocEntryObject
 */


BookReader.prototype.addChapterFromEntry = function (tocEntryObject) {
  tocEntryObject.pageIndex = this.getPageIndex(tocEntryObject['pagenum']); //creates a string with non-void tocEntryObject.label and tocEntryObject.title

  var chapterStr = [tocEntryObject.label, tocEntryObject.title].filter(function (x) {
    return x;
  }).join(' ');
  this.addChapter(chapterStr, tocEntryObject['pagenum'], tocEntryObject.pageIndex);
  this.$('.BRchapter, .BRsearch').each(function (i, el) {
    var $el = $(el);
    $el.on("mouseenter", function () {
      return $el.addClass('front');
    }).on("mouseleave", function () {
      return $el.removeClass('front');
    });
  });
};
/**
 * getOpenLibraryRecord
 *
 * The bookreader is designed to call openlibrary API and constructs the
 * "Return book" button using the response.
 *
 * This makes a call to OL API and calls the given callback function with the
 * response from the API.
 */


BookReader.prototype.getOpenLibraryRecord = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _this3 = this;

  var baseURL, fetchUrlByBookId, setUpChapterMarkers, data;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Try looking up by ocaid first, then by source_record
          baseURL = "".concat(this.olHost, "/query.json?type=/type/edition&*=");
          fetchUrlByBookId = "".concat(baseURL, "&ocaid=").concat(this.bookId);
          /*
          * Update Chapter markers based on received record from Open Library.
          * Notes that Open Library record is used for extra metadata, and also for lending
          */

          setUpChapterMarkers = function setUpChapterMarkers(olObject) {
            if (olObject && olObject.table_of_contents) {
              // XXX check here that TOC is valid
              _this3.updateTOC(olObject.table_of_contents);
            }
          };

          _context.next = 5;
          return $.ajax({
            url: fetchUrlByBookId,
            dataType: 'jsonp'
          });

        case 5:
          data = _context.sent;

          if (!(!data || !data.length)) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return $.ajax({
            url: "".concat(baseURL, "&source_records=ia:").concat(this.bookId),
            dataType: 'jsonp'
          });

        case 9:
          data = _context.sent;

        case 10:
          if (data && data.length > 0) {
            setUpChapterMarkers(data[0]);
          }

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})); // Extend buildMobileDrawerElement with table of contents list

BookReader.prototype.buildMobileDrawerElement = function (super_) {
  return function () {
    var $el = super_.call(this);

    if (this.enableMobileNav && this.options.enableChaptersPlugin) {
      $el.find('.BRmobileMenu__moreInfoRow').after($("\n        <li class=\"BRmobileMenu__tableContents\" data-event-click-tracking=\"BRSidebar|TOCPanel\">\n            <span>\n                <span class=\"DrawerIconWrapper\">\n                  <img class=\"DrawerIcon\" src=\"".concat(this.imagesBaseURL, "icon_toc.svg\" alt=\"toc-icon\"/>\n                </span>\n                Table of Contents\n            </span>\n            <div>\n                <ol class=\"table-contents-list\">\n                </ol>\n            </div>\n        </li>")).hide());
    }

    return $el;
  };
}(BookReader.prototype.buildMobileDrawerElement);
/**
 * highlights the current chapter based on current page
 * @private
 * @param {TocEntry[]} tocEntries
 * @param {number} tocEntries
 */


BookReader.prototype.updateTOCState = function (currIndex, tocEntries) {
  //this function won't have any effects if called before OpenLibrary request is finished
  if (!tocEntries) {
    return;
  }

  $('.current-chapter').removeClass('current-chapter');
  var tocEntriesIndexed = tocEntries.filter(function (el) {
    return el.pageIndex != undefined;
  }).reverse();
  var currChapter = tocEntriesIndexed[tocEntriesIndexed.findIndex(function (el) {
    return el.pageIndex <= currIndex;
  })];

  if (currChapter != undefined) {
    $(currChapter.mobileHTML).addClass('current-chapter');
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.chapters.js"));
/******/ }
]);
//# sourceMappingURL=plugin.chapters.js.map