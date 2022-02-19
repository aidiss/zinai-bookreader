(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.mobile_nav.js"],{

/***/ "./src/plugins/plugin.mobile_nav.js":
/*!******************************************!*\
  !*** ./src/plugins/plugin.mobile_nav.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookReader_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BookReader/utils.js */ "./src/BookReader/utils.js");
/* harmony import */ var jquery_mmenu_dist_js_jquery_mmenu_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery.mmenu/dist/js/jquery.mmenu.min.js */ "./node_modules/jquery.mmenu/dist/js/jquery.mmenu.min.js");
/* harmony import */ var jquery_mmenu_dist_js_jquery_mmenu_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_mmenu_dist_js_jquery_mmenu_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_mmenu_dist_addons_navbars_jquery_mmenu_navbars_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery.mmenu/dist/addons/navbars/jquery.mmenu.navbars.min.js */ "./node_modules/jquery.mmenu/dist/addons/navbars/jquery.mmenu.navbars.min.js");
/* harmony import */ var jquery_mmenu_dist_addons_navbars_jquery_mmenu_navbars_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_mmenu_dist_addons_navbars_jquery_mmenu_navbars_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");




/* global BookReader */

/**
 * Adds mobile navigation at responsive breakpoint
 */


 //contains all filters and labels for checkboxs

var FILTERLIST = [{
  filter: "grayscale(100%)",
  label: "Grayscale"
}, {
  filter: "brightness(120%)",
  label: "High brightness"
}, {
  filter: "invert(100%)",
  label: "Inverted (dark mode)"
}, {
  filter: "contrast(120%)",
  label: "High contrast"
}];
jQuery.extend(BookReader.defaultOptions, {
  enableMobileNav: true,
  mobileNavTitle: 'Internet Archive',
  mobileNavFullscreenOnly: false
});

BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.enableMobileNav = options.enableMobileNav;
    this.mobileNavTitle = options.mobileNavTitle;
    this.mobileNavFullscreenOnly = options.mobileNavFullscreenOnly;
    this.refs.$mmenu = null;
  };
}(BookReader.prototype.setup); // Extend initToolbar


BookReader.prototype.initToolbar = function (super_) {
  return function (mode, ui) {
    var _this = this;

    var $mmenuEl;

    if (this.enableMobileNav) {
      var $drawerEl = this.buildMobileDrawerElement();
      this.refs.$br.append($drawerEl); // Render info into mobile info before mmenu

      this.buildInfoDiv(this.$('.BRmobileInfo'));
      this.buildShareDiv(this.$('.BRmobileShare'));
      $mmenuEl = $drawerEl;
      $mmenuEl.mmenu({
        navbars: [{
          "position": "top"
        }],
        navbar: {
          add: true,
          title: this.mobileNavTitle,
          titleLink: 'panel'
        },
        extensions: ["panelshadow"]
      }, {
        offCanvas: {
          wrapPageIfNeeded: false,
          zposition: 'next',
          pageSelector: this.el
        }
      });
      var $BRpageviewField = $mmenuEl.find('.BRpageviewValue');
      $mmenuEl.data('mmenu').bind('opened', function () {
        // Update "Link to this page view" link
        if ($BRpageviewField.length) {
          $BRpageviewField.val(window.location.href);
        }
      }); //apply filters when checkboxs clicked

      $drawerEl.find('.BRcheckbox-filters').on("click", function () {
        return applyFilters($drawerEl, _this);
      }); // Bind mobile switch buttons

      $drawerEl.find('.DrawerLayoutButton.one_page_mode').on("click", function () {
        return _this.switchMode(_this.constMode1up);
      });
      $drawerEl.find('.DrawerLayoutButton.two_page_mode').on("click", function () {
        return _this.switchMode(_this.constMode2up);
      });
      $drawerEl.find('.DrawerLayoutButton.thumbnail_mode').on("click", function () {
        return _this.switchMode(_this.constModeThumb);
      });

      if (this.mobileNavFullscreenOnly) {
        $(document.body).addClass('BRbodyMobileNavEnabledFullscreen');
      } else {
        $(document.body).addClass('BRbodyMobileNavEnabled');
      }

      this.refs.$mmenu = $mmenuEl;
    } // Call the parent method at the end, because it binds events to DOM


    super_.apply(this, arguments);

    if (this.enableMobileNav) {
      // Need to bind more, console after toolbar is initialized
      this.$('.BRmobileHamburger').click(function () {
        if ($mmenuEl.data('mmenu').getInstance().vars.opened) {
          $mmenuEl.data('mmenu').close();
        } else {
          $mmenuEl.data('mmenu').open();

          _this.trigger("mobileNavOpen");
        }
      });

      var closeMobileMenu = function closeMobileMenu(e) {
        // Need to close the mobile menu to reset DOM & Style
        // driven by menu plugin
        var width = $(window).width();
        var mobileMenuIsOpen = $mmenuEl.data('mmenu').getInstance().vars.opened; // $brBreakPointMobile: 800px;

        if (mobileMenuIsOpen && width >= 800) {
          $mmenuEl.data('mmenu').close();
        }
      };

      window.addEventListener('resize', _BookReader_utils_js__WEBPACK_IMPORTED_MODULE_3__.debounce(closeMobileMenu, 900));
    }
  };
}(BookReader.prototype.initToolbar);

BookReader.prototype.buildToolbarElement = function (super_) {
  return function () {
    var $el = super_.call(this);

    if (this.enableMobileNav) {
      var escapedTitle = BookReader.util.escapeHTML(this.bookTitle);
      var toolbar = "\n        <span class=\"BRmobileHamburgerWrapper\">\n          <button class=\"BRmobileHamburger\"></button>\n          <span class=\"BRtoolbarMobileTitle\" title=\"".concat(escapedTitle, "\">").concat(escapedTitle, "</span>\n        </span>\n      ");
      $el.addClass('responsive').prepend($(toolbar));
    }

    return $el;
  };
}(BookReader.prototype.buildToolbarElement);
/**
 * This method builds the html for the mobile drawer. It can be decorated to
 * extend the default drawer.
 * @return {jqueryElement}
 */


BookReader.prototype.buildMobileDrawerElement = function () {
  var experimentalHtml = ''; //builds filters checkbox html

  if (this.enableExperimentalControls) {
    experimentalHtml = "\n        <p class=\"DrawerSettingsTitle\">Visual Adjustment</p>\n        <div class=\"BRcheckbox-group-filters\">\n        ";
    FILTERLIST.forEach(function (el, i) {
      var checkboxHtml = "\n          <input type=\"checkbox\" class=\"BRcheckbox-filters\" id=\"filter".concat(i, "\">\n          <label for=\"filter").concat(i, "\" class=\"BRcheckbox-label-filters\">").concat(el.label, "</label><br>\n        \n      ");
      experimentalHtml = experimentalHtml.concat(checkboxHtml);
    });
    experimentalHtml = experimentalHtml.concat("</div>");
  }

  var settingsSection = "\n    <span>\n        <span class=\"DrawerIconWrapper\">\n          <img class=\"DrawerIcon\" src=\"".concat("".concat(this.imagesBaseURL, "icon_gear.svg"), "\" alt=\"settings-icon\"/>\n        </span>\n        Settings\n    </span>\n    <div class=DrawerSettingsWrapper>\n        <div class=\"DrawerSettingsLayoutWrapper\">\n          <button class=\"DrawerLayoutButton one_page_mode\">\n            <img src=\"", this.imagesBaseURL, "icon_one_page.svg\" alt=\"Single Page\"/>\n            <br>\n            One Page\n          </button>\n          <button class=\"DrawerLayoutButton two_page_mode TwoPagesButton\">\n            <img src=\"").concat(this.imagesBaseURL, "icon_two_pages.svg\" alt=\"Two Pages\"/>\n            <br>\n            Two Pages\n          </button>\n          <button class=\"DrawerLayoutButton thumbnail_mode\">\n            <img src=\"").concat(this.imagesBaseURL, "icon_thumbnails.svg\" alt=\"Thumbnails\"/>\n            <br>\n            Thumbnails\n          </button>\n        </div>\n        <br>\n        <div class=\"DrawerSettingsTitle\">Zoom</div>\n        <button class='BRicon zoom_out'></button>\n        <button class='BRicon zoom_in'></button>\n        <br style=\"clear:both\"><br><br>\n        ").concat(experimentalHtml, "\n    </div>\n  ");
  var moreInfo = "\n    <span>\n        <span class=\"DrawerIconWrapper \">\n            <img class=\"DrawerIcon\" src=\"".concat(this.imagesBaseURL, "icon_info.svg\" alt=\"info-icon\"/>\n        </span>\n        About This Book\n    </span>\n    <div class=\"BRmobileInfo\"></div>\n  ");
  var share = "\n    <span>\n      <span class=\"DrawerIconWrapper\">\n        <img class=\"DrawerIcon\" src=\"".concat(this.imagesBaseURL, "icon_share.svg\" alt=\"info-share\"/>\n      </span>\n      Share This Book\n    </span>\n    <div class=\"BRmobileShare\"></div>\n  ");
  var navMenu = "\n    <nav id=\"BRmobileMenu\" class=\"BRmobileMenu\">\n      <ul>\n        <li class=\"BRmobileMenu__settings\">".concat(settingsSection, "</li>\n        <li class=\"BRmobileMenu__moreInfoRow\">").concat(moreInfo, "</li>\n        <li class=\"BRmobileMenu__share\">").concat(share, "</li>\n      </ul>\n    </nav>\n  ");
  var $el = $(navMenu);
  return $el;
};
/**
 * Mmenu moves itself out side of the root BookReader element, so we need to
 * include it in the scoped $ function.
 */


BookReader.prototype.$ = function (super_) {
  return function (arg) {
    var $results = super_.call(this, arg);

    if (this.refs.$mmenu) {
      $results = $results.add(this.refs.$mmenu.find(arg));
    }

    return $results;
  };
}(BookReader.prototype.$);
/**
* Dynamically creates styles combining different filters for BookReaders imgs
* based on filters checkbox
*/


var applyFilters = function applyFilters(drawerEl, br) {
  var filterStr = "";
  $('.BRcheckbox-filters').each(function (i, el) {
    br.refs.$br.removeClass("filter-applied");

    if ($(el).is(':checked')) {
      br.refs.$br.addClass($(el).attr("filter-applied"));
      filterStr = filterStr + FILTERLIST[i].filter;
    }
  });
  var filtersSheet = $("#filtersStyle")[0] || document.createElement('style');
  filtersSheet.id = "filtersStyle";
  filtersSheet.innerHTML = ".BRpagecontainer  img {\n            filter: ".concat(filterStr, ";\n            -webkit-filter: ").concat(filterStr, ";}");
  document.body.appendChild(filtersSheet);
};

/***/ }),

/***/ "./node_modules/jquery.mmenu/dist/addons/navbars/jquery.mmenu.navbars.min.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/jquery.mmenu/dist/addons/navbars/jquery.mmenu.navbars.min.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/*	
 * jQuery mmenu navbar addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var a="mmenu",t="navbars";n[a].addons[t]={setup:function(){var r=this,s=this.opts[t],c=this.conf[t];if(i=n[a].glbl,"undefined"!=typeof s){s instanceof Array||(s=[s]);var o={};n.each(s,function(i){var d=s[i];"boolean"==typeof d&&d&&(d={}),"object"!=typeof d&&(d={}),"undefined"==typeof d.content&&(d.content=["prev","title"]),d.content instanceof Array||(d.content=[d.content]),d=n.extend(!0,{},r.opts.navbar,d);var l=d.position,h=d.height;"number"!=typeof h&&(h=1),h=Math.min(4,Math.max(1,h)),"bottom"!=l&&(l="top"),o[l]||(o[l]=0),o[l]++;var f=n("<div />").addClass(e.navbar+" "+e.navbar+"-"+l+" "+e.navbar+"-"+l+"-"+o[l]+" "+e.navbar+"-size-"+h);o[l]+=h-1;for(var u=0,v=0,p=d.content.length;p>v;v++){var b=n[a].addons[t][d.content[v]]||!1;b?u+=b.call(r,f,d,c):(b=d.content[v],b instanceof n||(b=n(d.content[v])),f.append(b))}u+=Math.ceil(f.children().not("."+e.btn).length/h),u>1&&f.addClass(e.navbar+"-content-"+u),f.children("."+e.btn).length&&f.addClass(e.hasbtns),f.prependTo(r.$menu)});for(var d in o)r.$menu.addClass(e.hasnavbar+"-"+d+"-"+o[d])}},add:function(){e=n[a]._c,r=n[a]._d,s=n[a]._e,e.add("close hasbtns")},clickAnchor:function(n,a){}},n[a].configuration[t]={breadcrumbSeparator:"/"},n[a].configuration.classNames[t]={};var e,r,s,i}(jQuery),/*	
 * jQuery mmenu navbar addon breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="breadcrumbs";n[a].addons[t][e]=function(t,e,r){var s=n[a]._c,i=n[a]._d;s.add("breadcrumbs separator");var c=n('<span class="'+s.breadcrumbs+'" />').appendTo(t);this.bind("init",function(a){a.removeClass(s.hasnavbar).each(function(){for(var a=[],t=n(this),e=n('<span class="'+s.breadcrumbs+'"></span>'),c=n(this).children().first(),o=!0;c&&c.length;){c.is("."+s.panel)||(c=c.closest("."+s.panel));var d=c.children("."+s.navbar).children("."+s.title).text();a.unshift(o?"<span>"+d+"</span>":'<a href="#'+c.attr("id")+'">'+d+"</a>"),o=!1,c=c.data(i.parent)}e.append(a.join('<span class="'+s.separator+'">'+r.breadcrumbSeparator+"</span>")).appendTo(t.children("."+s.navbar))})});var o=function(){c.html(this.$pnls.children("."+s.current).children("."+s.navbar).children("."+s.breadcrumbs).html())};return this.bind("openPanel",o),this.bind("init",o),0}}(jQuery),/*	
 * jQuery mmenu navbar addon close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="close";n[a].addons[t][e]=function(t,e){var r=n[a]._c,s=n[a].glbl,i=n('<a class="'+r.close+" "+r.btn+'" href="#" />').appendTo(t),c=function(n){i.attr("href","#"+n.attr("id"))};return c.call(this,s.$page),this.bind("setPage",c),-1}}(jQuery),/*	
 * jQuery mmenu navbar addon next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="next";n[a].addons[t][e]=function(e,r){var s,i,c=n[a]._c,o=n('<a class="'+c.next+" "+c.btn+'" href="#" />').appendTo(e),d=function(n){n=n||this.$pnls.children("."+c.current);var a=n.find("."+this.conf.classNames[t].panelNext);s=a.attr("href"),i=a.html(),o[s?"attr":"removeAttr"]("href",s),o[s||i?"removeClass":"addClass"](c.hidden),o.html(i)};return this.bind("openPanel",d),this.bind("init",function(){d.call(this)}),-1},n[a].configuration.classNames[t].panelNext="Next"}(jQuery),/*	
 * jQuery mmenu navbar addon prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="prev";n[a].addons[t][e]=function(e,r){var s=n[a]._c,i=n('<a class="'+s.prev+" "+s.btn+'" href="#" />').appendTo(e);this.bind("init",function(n){n.removeClass(s.hasnavbar).children("."+s.navbar).addClass(s.hidden)});var c,o,d=function(n){if(n=n||this.$pnls.children("."+s.current),!n.hasClass(s.vertical)){var a=n.find("."+this.conf.classNames[t].panelPrev);a.length||(a=n.children("."+s.navbar).children("."+s.prev)),c=a.attr("href"),o=a.html(),i[c?"attr":"removeAttr"]("href",c),i[c||o?"removeClass":"addClass"](s.hidden),i.html(o)}};return this.bind("openPanel",d),this.bind("init",function(){d.call(this)}),-1},n[a].configuration.classNames[t].panelPrev="Prev"}(jQuery),/*	
 * jQuery mmenu navbar addon searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="searchfield";n[a].addons[t][e]=function(t,e){var r=n[a]._c,s=n('<div class="'+r.search+'" />').appendTo(t);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=s,0}}(jQuery),/*	
 * jQuery mmenu navbar addon title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="title";n[a].addons[t][e]=function(e,r){var s,i,c=n[a]._c,o=n('<a class="'+c.title+'" />').appendTo(e),d=function(n){if(n=n||this.$pnls.children("."+c.current),!n.hasClass(c.vertical)){var a=n.find("."+this.conf.classNames[t].panelTitle);a.length||(a=n.children("."+c.navbar).children("."+c.title)),s=a.attr("href"),i=a.html()||r.title,o[s?"attr":"removeAttr"]("href",s),o[s||i?"removeClass":"addClass"](c.hidden),o.html(i)}};return this.bind("openPanel",d),this.bind("init",function(n){d.call(this)}),0},n[a].configuration.classNames[t].panelTitle="Title"}(jQuery);

/***/ }),

/***/ "./node_modules/jquery.mmenu/dist/js/jquery.mmenu.min.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery.mmenu/dist/js/jquery.mmenu.min.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/*
 * jQuery mmenu v5.6.5
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},i={},a={},o={},e.each([i,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,s=e.length;s>n;n++)t[e[n]]=t.mm(e[n])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent sub"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=i,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",s="5.6.4";if(!(e[n]&&e[n].version>s)){e[n]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$pnls.children();return this._initAddons(),this.init(s),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=s,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={init:function(e){e=e.not("."+i.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+i.listview).children().removeClass(i.selected),e.addClass(i.selected),this.trigger("setSelected",e)},openPanel:function(t){var s=t.parent(),a=this;if(s.hasClass(i.vertical)){var o=s.parents("."+i.subopened);if(o.length)return void this.openPanel(o.first());s.addClass(i.opened),this.trigger("openPanel",t),this.trigger("openingPanel",t),this.trigger("openedPanel",t)}else{if(t.hasClass(i.current))return;var r=this.$pnls.children("."+i.panel),l=r.filter("."+i.current);r.removeClass(i.highest).removeClass(i.current).not(t).not(l).not("."+i.vertical).addClass(i.hidden),e[n].support.csstransitions||l.addClass(i.hidden),t.hasClass(i.opened)?t.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(t.addClass(i.highest),l.addClass(i.subopened)),t.removeClass(i.hidden).addClass(i.current),a.trigger("openPanel",t),setTimeout(function(){t.removeClass(i.subopened).addClass(i.opened),a.trigger("openingPanel",t),a.__transitionend(t,function(){a.trigger("openedPanel",t)},a.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&(t.removeClass(i.opened),this.trigger("closePanel",e),this.trigger("closingPanel",e),this.trigger("closedPanel",e))},closeAllPanels:function(){this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);var e=this.$pnls.children("."+i.panel),t=e.first();this.$pnls.children("."+i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&this[t.hasClass(i.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var s=0,i=this.cbck[n].length;i>s;s++)this.cbck[n][s].apply(e,t)},_initMenu:function(){this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(i.wrapper);var t=[i.menu];this.opts.slidingSubmenus||t.push(i.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var n=this,s=this.__findAddBack(t,"ul, ol");this.__refactorClass(s,this.conf.classNames.inset,"inset").addClass(i.nolistview+" "+i.nopanel),s.not("."+i.nolistview).addClass(i.listview);var o=this.__findAddBack(t,"."+i.listview).children();this.__refactorClass(o,this.conf.classNames.selected,"selected"),this.__refactorClass(o,this.conf.classNames.divider,"divider"),this.__refactorClass(o,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var r=e(),l=t.add(t.find("."+i.panel)).add(this.__findAddBack(t,"."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);this.__refactorClass(l,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||l.addClass(i.vertical),l.each(function(){var t=e(this),s=t;t.is("ul, ol")?(t.wrap('<div class="'+i.panel+'" />'),s=t.parent()):s.addClass(i.panel);var a=t.attr("id");t.removeAttr("id"),s.attr("id",a||n.__getUniqueId()),t.hasClass(i.vertical)&&(t.removeClass(n.conf.classNames.vertical),s.add(s.parent()).addClass(i.vertical)),r=r.add(s)});var d=e("."+i.panel,this.$menu);r.each(function(t){var s,o,r=e(this),l=r.parent(),d=l.children("a, span").first();if(l.is("."+i.panels)||(l.data(a.sub,r),r.data(a.parent,l)),l.children("."+i.next).length||l.parent().is("."+i.listview)&&(s=r.attr("id"),o=e('<a class="'+i.next+'" href="#'+s+'" data-target="#'+s+'" />').insertBefore(d),d.is("span")&&o.addClass(i.fullsubopen)),!r.children("."+i.navbar).length&&!l.hasClass(i.vertical)){l.parent().is("."+i.listview)?l=l.closest("."+i.panel):(d=l.closest("."+i.panel).find('a[href="#'+r.attr("id")+'"]').first(),l=d.closest("."+i.panel));var c=!1,p=e('<div class="'+i.navbar+'" />');if(n.opts.navbar.add&&r.addClass(i.hasnavbar),l.length){switch(s=l.attr("id"),n.opts.navbar.titleLink){case"anchor":c=d.attr("href");break;case"panel":case"parent":c="#"+s;break;default:c=!1}p.append('<a class="'+i.btn+" "+i.prev+'" href="#'+s+'" data-target="#'+s+'" />').append(e('<a class="'+i.title+'"'+(c?' href="'+c+'"':"")+" />").text(d.text())).prependTo(r)}else n.opts.navbar.title&&p.append('<a class="'+i.title+'">'+n.opts.navbar.title+"</a>").prependTo(r)}});var c=this.__findAddBack(t,"."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);c.add(c.parentsUntil("."+i.menu,"li")).filter("."+i.vertical).addClass(i.opened).end().each(function(){e(this).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)}),c.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);var p=d.filter("."+i.opened);return p.length||(p=r.first()),p.addClass(i.opened).last().addClass(i.current),r.not("."+i.vertical).not(p.last()).addClass(i.hidden).end().filter(function(){return!e(this).parent().hasClass(i.panels)}).appendTo(this.$pnls),r},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(s){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+i.panel)&&(o=!0,t[a.parent().hasClass(i.vertical)?"togglePanel":"openPanel"](c))}catch(p){}if(o&&s.preventDefault(),!o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(s.target).parent());var h=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));h&&s.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,h)&&t.close()}})},_initAddons:function(){var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return e&&e.length&&this.conf.clone&&(e=i.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var s=this;n[s]=function(){var e=t[s].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(i[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+i.divider).not("."+i.hidden)},__transitionend:function(e,t,n){var s=!1,i=function(){s||t.call(e[0]),s=!0};e.one(o.transitionend,i),e.one(o.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return i.mm(e[n].uniqueId++)}},e.fn[n]=function(s,i){return t(),s=e.extend(!0,{},e[n].defaults,s),i=e.extend(!0,{},e[n].configuration,i),this.each(function(){var t=e(this);if(!t.data(n)){var a=new e[n](t,s,i);a.$menu.data(n,a.__api())}})},e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,t=e.style,n="transition";if("string"==typeof t[n])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);for(var i=0;i<s.length;i++)if("string"==typeof t[s[i]+n])return!0;return!1}()};var i,a,o,r}}(jQuery),/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],a=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==i.position||"bottom"==i.position)&&(i.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=i.position&&r.push(s.mm(i.position)),"back"!=i.zposition&&r.push(s.mm(i.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("offcanvas slideout blocking modal background opening blocker page"),i.add("style"),a.add("resize")},clickAnchor:function(e,t){if(!this.opts[n])return!1;var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]'))return this.open(),!0;if(o.$page)return s=o.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):!1}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[s.opened];r.blockUI&&l.push(s.blocking),"modal"==r.blockUI&&l.push(s.modal),r.moveBackground&&l.push(s.background),"left"!=r.position&&l.push(s.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(s.mm(this.opts[n].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(s.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(s.current).removeClass(s.opened),o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(t.opts[n].position)).removeClass(s.mm(t.opts[n].zposition)),t.opts.extensions&&o.$html.removeClass(t.opts.extensions),o.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){var i=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(s.page+" "+s.slideout),o.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){return o.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(s.opened))){var i=o.$wndw.height();(n||i!=e)&&(e=i,o.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(s.modal)||(t.closeAllOthers(),t.close())}))};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu scrollBugFix addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.fix)){var l=this.$menu.attr("id"),d=!1;this.bind("opening",function(){this.$pnls.children("."+s.current).scrollTop(0)}),o.$docu.on(a.touchmove,function(e){i.vars.opened&&e.preventDefault()}),o.$body.on(a.touchstart,"#"+l+"> ."+s.panels+"> ."+s.current,function(e){i.vars.opened&&(d||(d=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),d=!1))}).on(a.touchmove,"#"+l+"> ."+s.panels+"> ."+s.current,function(t){i.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.on(a.orientationchange,function(){i.$pnls.children("."+s.current).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0};var s,i,a,o}(jQuery);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.mobile_nav.js"));
/******/ }
]);
//# sourceMappingURL=plugin.mobile_nav.js.map