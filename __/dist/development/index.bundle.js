(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Page.js":
/*!*****************!*\
  !*** ./Page.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'Page',
  __onClick: function __onClick() {
    if (this.props.isDisabled) {
      return false;
    }

    this.props.onClick && this.props.onClick();
  },
  render: function render() {
    if (this.props.isHidden) {
      return null;
    }

    return /*#__PURE__*/React.createElement("li", {
      onClick: this.__onClick,
      className: 'zr-pager-page ' + (this.props.className || '') + ' ' + (this.props.isActive ? "active" : "") + ' ' + (this.props.isDisabled ? "" : "enabled")
    }, this.props.children);
  }
});

/***/ }),

/***/ "./Pager.js":
/*!******************!*\
  !*** ./Pager.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var Page = __webpack_require__(/*! ./Page */ "./Page.js");

function range(start, end) {
  var res = [];

  for (var i = start; i < end; i++) {
    res.push(i);
  }

  return res;
}

module.exports = React.createClass({
  displayName: 'Pager',
  getDefaultProps: function getDefaultProps() {
    return {
      total: 0,
      count: 0,
      current: 0,
      visiblePages: 5,
      className: '',
      texts: {
        page: '页',
        record: '条'
      }
    };
  },
  getInitialState: function getInitialState() {
    return {};
  },
  handleFirstPage: function handleFirstPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(1);
  },
  handlePreviousPage: function handlePreviousPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(this.props.current - 1);
  },
  handleNextPage: function handleNextPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.current + 1);
  },
  handleLastPage: function handleLastPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.total);
  },
  handleMorePrevPages: function handleMorePrevPages() {
    this.handlePageChanged(this.props.current - 1);
  },
  handleMoreNextPages: function handleMoreNextPages() {
    var blocks = this.calcBlocks();
    this.handlePageChanged(blocks.current * blocks.size + 1);
  },
  handlePageChanged: function handlePageChanged(pageIndex) {
    this.props.onPageChanged && this.props.onPageChanged(pageIndex);
  },
  calcBlocks: function calcBlocks() {
    return {
      total: Math.ceil(this.props.total / this.props.visiblePages),
      current: Math.ceil(this.props.current / this.props.visiblePages),
      size: this.props.visiblePages
    };
  },
  isPrevDisabled: function isPrevDisabled() {
    return this.props.current <= 1;
  },
  isNextDisabled: function isNextDisabled() {
    return this.props.current >= this.props.total;
  },
  isPrevMoreHidden: function isPrevMoreHidden() {
    var blocks = this.calcBlocks();
    return blocks.total === 1 || blocks.current === 1;
  },
  isNextMoreHidden: function isNextMoreHidden() {
    var blocks = this.calcBlocks();
    return blocks.total === 0 || blocks.current === blocks.total;
  },
  visibleRange: function visibleRange() {
    var blocks = this.calcBlocks(),
        start = (blocks.current - 1) * blocks.size,
        delta = this.props.total - start,
        end = start + (delta > blocks.size ? blocks.size : delta);
    return [start + 1, end + 1];
  },

  /**
      * ### renderPages()
      * Renders block of pages' buttons with numbers.
      * @param {Number[]} range - pair of [start, from], `from` - not inclusive.
      * @return {React.Element[]} - array of React nodes.
      */
  renderPages: function renderPages(pair) {
    return range(pair[0], pair[1]).map(function (pageIndex, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement(Page, {
        key: index,
        isActive: this.props.current === pageIndex,
        className: "btn-numbered-page",
        onClick: function onClick() {
          return _this.handlePageChanged(pageIndex);
        }
      }, pageIndex);
    }.bind(this));
  },
  __renderIcon: function __renderIcon(value) {
    switch (value) {
      case 'first':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-backward",
          className: "icon svg-inline--fa fa-step-backward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
        }));

      case 'prev':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-left",
          className: "icon svg-inline--fa fa-arrow-left fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
        }));

      case 'prevSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-backward",
          className: "icon svg-inline--fa fa-fast-backward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"
        }));

      case 'nextSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-forward",
          className: "icon svg-inline--fa fa-fast-forward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"
        }));

      case 'next':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-right",
          className: "icon svg-inline--fa fa-arrow-right fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
        }));

      case 'last':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-forward",
          className: "icon svg-inline--fa fa-step-forward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
        }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, this.__renderIcon('first')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, this.__renderIcon('prev')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-more",
      isHidden: this.isPrevMoreHidden(),
      onClick: this.handleMorePrevPages
    }, this.__renderIcon('prevSet')), this.renderPages(this.visibleRange()), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-more",
      isHidden: this.isNextMoreHidden(),
      onClick: this.handleMoreNextPages
    }, this.__renderIcon('nextSet')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, this.__renderIcon('next')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, this.__renderIcon('last'))), /*#__PURE__*/React.createElement("div", {
      className: "number"
    }, !!this.props.total && /*#__PURE__*/React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && /*#__PURE__*/React.createElement("span", {
      className: "count-number"
    }, this.props.count, " ", this.props.texts.record)));
  }
});

/***/ }),

/***/ "./PagerBar.js":
/*!*********************!*\
  !*** ./PagerBar.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'PagerBar',
  __onClick: function __onClick() {
    if (this.props.isDisabled) {
      return false;
    }

    this.props.onClick && this.props.onClick();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-pager-bar ' + (this.props.className || '') + ' ' + (this.props.isActive ? "active" : "") + ' ' + (this.props.isDisabled ? "" : "enabled")
    }, this.props.children);
  }
});

/***/ }),

/***/ "./PagerView.js":
/*!**********************!*\
  !*** ./PagerView.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var Pager = __webpack_require__(/*! ./Pager */ "./Pager.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'PagerView',
  getDefaultProps: function getDefaultProps() {
    return {
      pageIndex: 1,
      pageSize: 10,
      visiblePage: 5,
      dataFixed: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      count: 0,
      current: 1,
      data: [],
      total: 0,
      pageIndex: this.props.pageIndex
    };
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);

    if (_return !== false) {
      this.setPageIndex(newPage);
    }
  },
  setPageIndex: function setPageIndex(pageIndex) {
    if (this.data) {
      this.state.pageIndex = pageIndex;
      this.data.refresh();
    }
  },
  __viewRender: function __viewRender(response) {
    var _view = znui.react.createReactElement(this.props.view || this.props.viewRender, zn.extend({
      response: response,
      pagerView: this
    }, this.state));

    return /*#__PURE__*/React.createElement("div", {
      className: "view-content"
    }, _view);
  },
  __onDataLoaded: function __onDataLoaded(data) {
    var _return = this.props.dataHandler && this.props.dataHandler(data, this);

    if (_return !== false) {
      if (_typeof(_return) == 'object') {
        this.setState(_return);
      } else {//TODO: 
      }
    }
  },
  __onDataLoading: function __onDataLoading(data, lifycycle) {
    var _method = data.method || 'post',
        _params = {},
        _keyMaps = zn.deepAssign({
      total: "total",
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      data: 'data'
    }, this.props.keyMaps);

    _params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
    _params[_keyMaps.pageSize] = this.props.pageSize || 10;

    if (_method == 'get') {
      data = zn.deepAssign(data, {
        params: _params
      });
    } else {
      data = zn.deepAssign(data, {
        data: _params
      });
    }

    this.state.keyMaps = _keyMaps;
    return data;
  },
  __onDataCreated: function __onDataCreated(data, lifycycle) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, this);
  },
  __loadingRender: function __loadingRender() {
    return /*#__PURE__*/React.createElement(loader.DataLoader, {
      loader: "wave",
      title: "Loading..."
    });
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-pager-view", this.props.className),
      style: znui.react.style(this.props.style),
      "data-fixed": this.props.dataFixed
    }, this.props.data && /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      data: this.props.data,
      render: this.__viewRender,
      loadingRender: function loadingRender() {
        return _this.__loadingRender();
      },
      onLoading: this.__onDataLoading,
      onDataCreated: this.__onDataCreated,
      onFinished: this.__onDataLoaded
    }), /*#__PURE__*/React.createElement("div", {
      className: "view-pager"
    }, /*#__PURE__*/React.createElement(Pager, {
      total: Math.ceil(this.state.count / this.props.pageSize),
      count: this.state.count,
      current: this.state.pageIndex,
      pageSize: this.props.pageSize,
      visiblePages: this.props.visiblePages,
      onPageChanged: this.__handlePageChanged
    })));
  }
});

/***/ }),

/***/ "./SimplePager.js":
/*!************************!*\
  !*** ./SimplePager.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var Page = __webpack_require__(/*! ./Page */ "./Page.js");

module.exports = React.createClass({
  displayName: 'SimplePager',
  getDefaultProps: function getDefaultProps() {
    return {
      total: 0,
      count: 0,
      current: 0,
      className: '',
      texts: {
        page: '页',
        record: '条'
      },
      icons: {
        first: 'faStepBackward',
        prev: 'faArrowLeft',
        next: 'faArrowRight',
        last: 'faStepForward'
      }
    };
  },
  handleFirstPage: function handleFirstPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(1);
  },
  handlePreviousPage: function handlePreviousPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(this.props.current - 1);
  },
  handleNextPage: function handleNextPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.current + 1);
  },
  handleLastPage: function handleLastPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.total);
  },
  handlePageChanged: function handlePageChanged(pageIndex) {
    this.props.onPageChanged && this.props.onPageChanged(pageIndex);
  },
  isPrevDisabled: function isPrevDisabled() {
    return this.props.current <= 1;
  },
  isNextDisabled: function isNextDisabled() {
    return this.props.current >= this.props.total;
  },
  __renderIcon: function __renderIcon(value) {
    switch (value) {
      case 'first':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-backward",
          className: "icon svg-inline--fa fa-step-backward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
        }));

      case 'prev':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-left",
          className: "icon svg-inline--fa fa-arrow-left fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
        }));

      case 'prevSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-backward",
          className: "icon svg-inline--fa fa-fast-backward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"
        }));

      case 'nextSet':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "fast-forward",
          className: "icon svg-inline--fa fa-fast-forward fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"
        }));

      case 'next':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "arrow-right",
          className: "icon svg-inline--fa fa-arrow-right fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
        }));

      case 'last':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "step-forward",
          className: "icon svg-inline--fa fa-step-forward fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
        }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-simple-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, this.__renderIcon('first')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, this.__renderIcon('prev')), /*#__PURE__*/React.createElement("li", {
      className: "number"
    }, !!this.props.total && /*#__PURE__*/React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && /*#__PURE__*/React.createElement("span", {
      className: "count-number"
    }, this.props.count, " ", this.props.texts.record)), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, this.__renderIcon('next')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, this.__renderIcon('last'))));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Page: __webpack_require__(/*! ./Page */ "./Page.js"),
  Pager: __webpack_require__(/*! ./Pager */ "./Pager.js"),
  PagerBar: __webpack_require__(/*! ./PagerBar */ "./PagerBar.js"),
  PagerView: __webpack_require__(/*! ./PagerView */ "./PagerView.js"),
  SimplePager: __webpack_require__(/*! ./SimplePager */ "./SimplePager.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJfX29uQ2xpY2siLCJwcm9wcyIsImlzRGlzYWJsZWQiLCJvbkNsaWNrIiwicmVuZGVyIiwiaXNIaWRkZW4iLCJjbGFzc05hbWUiLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiUGFnZSIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJyZXMiLCJpIiwicHVzaCIsImdldERlZmF1bHRQcm9wcyIsInRvdGFsIiwiY291bnQiLCJjdXJyZW50IiwidmlzaWJsZVBhZ2VzIiwidGV4dHMiLCJwYWdlIiwicmVjb3JkIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaGFuZGxlRmlyc3RQYWdlIiwiaXNQcmV2RGlzYWJsZWQiLCJoYW5kbGVQYWdlQ2hhbmdlZCIsImhhbmRsZVByZXZpb3VzUGFnZSIsImhhbmRsZU5leHRQYWdlIiwiaXNOZXh0RGlzYWJsZWQiLCJoYW5kbGVMYXN0UGFnZSIsImhhbmRsZU1vcmVQcmV2UGFnZXMiLCJoYW5kbGVNb3JlTmV4dFBhZ2VzIiwiYmxvY2tzIiwiY2FsY0Jsb2NrcyIsInNpemUiLCJwYWdlSW5kZXgiLCJvblBhZ2VDaGFuZ2VkIiwiTWF0aCIsImNlaWwiLCJpc1ByZXZNb3JlSGlkZGVuIiwiaXNOZXh0TW9yZUhpZGRlbiIsInZpc2libGVSYW5nZSIsImRlbHRhIiwicmVuZGVyUGFnZXMiLCJwYWlyIiwibWFwIiwiaW5kZXgiLCJiaW5kIiwiX19yZW5kZXJJY29uIiwidmFsdWUiLCJQYWdlciIsImxvYWRlciIsInBhZ2VTaXplIiwidmlzaWJsZVBhZ2UiLCJkYXRhRml4ZWQiLCJkYXRhIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJfcmV0dXJuIiwic2V0UGFnZUluZGV4Iiwic3RhdGUiLCJyZWZyZXNoIiwiX192aWV3UmVuZGVyIiwicmVzcG9uc2UiLCJfdmlldyIsInJlYWN0IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwidmlldyIsInZpZXdSZW5kZXIiLCJ6biIsImV4dGVuZCIsInBhZ2VyVmlldyIsIl9fb25EYXRhTG9hZGVkIiwiZGF0YUhhbmRsZXIiLCJzZXRTdGF0ZSIsIl9fb25EYXRhTG9hZGluZyIsImxpZnljeWNsZSIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJkZWVwQXNzaWduIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25EYXRhQ3JlYXRlZCIsIm9uRGF0YUNyZWF0ZWQiLCJfX2xvYWRpbmdSZW5kZXIiLCJjbGFzc25hbWUiLCJzdHlsZSIsImljb25zIiwiZmlyc3QiLCJwcmV2IiwibmV4dCIsImxhc3QiLCJQYWdlckJhciIsIlBhZ2VyVmlldyIsIlNpbXBsZVBhZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QU8sQ0FBQyxtQ0FBRCxDQUpMO0FBS2J1RyxhQUFXLEVBQUV2RyxtQkFBTyxDQUFDLHVDQUFEO0FBTFAsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsaUNBQWlDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZScsXG5cdF9fb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0Rpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgb25DbGljaz17dGhpcy5fX29uQ2xpY2t9IGNsYXNzTmFtZT17J3pyLXBhZ2VyLXBhZ2UgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG5cbmZ1bmN0aW9uIHJhbmdlICggc3RhcnQsIGVuZCApIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrICkge1xuICAgICAgICByZXMucHVzaCggaSApO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICfpobUnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogJ+adoSdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cblx0XHR9XG5cdH0sXG5cdGhhbmRsZUZpcnN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgICB9LFxuICAgIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuICAgIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCArIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3JlUHJldlBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vcmVOZXh0UGFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKChibG9ja3MuY3VycmVudCAqIGJsb2Nrcy5zaXplKSArIDEpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKCBwYWdlSW5kZXggKSB7XG5cdFx0dGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChwYWdlSW5kZXgpO1xuICAgIH0sXG5cbiAgICBjYWxjQmxvY2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogTWF0aC5jZWlsKHRoaXMucHJvcHMudG90YWwvdGhpcy5wcm9wcy52aXNpYmxlUGFnZXMpLFxuICAgICAgICAgICAgY3VycmVudDogTWF0aC5jZWlsKHRoaXMucHJvcHMuY3VycmVudC90aGlzLnByb3BzLnZpc2libGVQYWdlcyksXG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLnZpc2libGVQYWdlc1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcblxuICAgIGlzTmV4dERpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICB9LFxuXG4gICAgaXNQcmV2TW9yZUhpZGRlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHJldHVybiAoIGJsb2Nrcy50b3RhbCA9PT0gMSApIHx8ICggYmxvY2tzLmN1cnJlbnQgPT09IDEgKTtcbiAgICB9LFxuXG4gICAgaXNOZXh0TW9yZUhpZGRlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHJldHVybiAoIGJsb2Nrcy50b3RhbCA9PT0gMCApIHx8ICggYmxvY2tzLmN1cnJlbnQgPT09IGJsb2Nrcy50b3RhbCApO1xuICAgIH0sXG5cbiAgICB2aXNpYmxlUmFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyAgPSB0aGlzLmNhbGNCbG9ja3MoKSxcblx0XHRcdHN0YXJ0ICAgPSAoYmxvY2tzLmN1cnJlbnQgLSAxKSAqIGJsb2Nrcy5zaXplLFxuXHRcdFx0ZGVsdGEgICA9IHRoaXMucHJvcHMudG90YWwgLSBzdGFydCxcblx0XHRcdGVuZCAgICAgPSBzdGFydCArICggKGRlbHRhID4gYmxvY2tzLnNpemUpID8gYmxvY2tzLnNpemUgOiBkZWx0YSApO1xuXG4gICAgICAgIHJldHVybiBbIHN0YXJ0ICsgMSwgZW5kICsgMSBdO1xuICAgIH0sXG5cblx0LyoqXG4gICAgICogIyMjIHJlbmRlclBhZ2VzKClcbiAgICAgKiBSZW5kZXJzIGJsb2NrIG9mIHBhZ2VzJyBidXR0b25zIHdpdGggbnVtYmVycy5cbiAgICAgKiBAcGFyYW0ge051bWJlcltdfSByYW5nZSAtIHBhaXIgb2YgW3N0YXJ0LCBmcm9tXSwgYGZyb21gIC0gbm90IGluY2x1c2l2ZS5cbiAgICAgKiBAcmV0dXJuIHtSZWFjdC5FbGVtZW50W119IC0gYXJyYXkgb2YgUmVhY3Qgbm9kZXMuXG4gICAgICovXG4gICAgcmVuZGVyUGFnZXM6IGZ1bmN0aW9uICggcGFpciApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKCBwYWlyWzBdLCBwYWlyWzFdICkubWFwKGZ1bmN0aW9uICggcGFnZUluZGV4LCBpbmRleCApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG5cdFx0XHRcdDxQYWdlIGtleT17aW5kZXh9XG5cdFx0XHRcdFx0aXNBY3RpdmU9e3RoaXMucHJvcHMuY3VycmVudCA9PT0gcGFnZUluZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbnVtYmVyZWQtcGFnZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KCk9PnRoaXMuaGFuZGxlUGFnZUNoYW5nZWQocGFnZUluZGV4KX0+e3BhZ2VJbmRleH08L1BhZ2U+XG5cdFx0XHQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgX19yZW5kZXJJY29uOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICBzd2l0Y2godmFsdWUpe1xuICAgICAgICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzdGVwLWJhY2t3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWJhY2t3YXJkIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02NCA0NjhWNDRjMC02LjYgNS40LTEyIDEyLTEyaDQ4YzYuNiAwIDEyIDUuNCAxMiAxMnYxNzYuNGwxOTUuNS0xODFDMzUyLjEgMjIuMyAzODQgMzYuNiAzODQgNjR2Mzg0YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDEzNiAyOTIuN1Y0NjhjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1sZWZ0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1sZWZ0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTcuNSA0NDUuMWwtMjIuMiAyMi4yYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEw3IDI3M2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMMjAxLjQgNDQuN2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi4yIDIyLjJjOS41IDkuNSA5LjMgMjUtLjQgMzQuM0wxMzYuNiAyMTZINDI0YzEzLjMgMCAyNCAxMC43IDI0IDI0djMyYzAgMTMuMy0xMC43IDI0LTI0IDI0SDEzNi42bDEyMC41IDExNC44YzkuOCA5LjMgMTAgMjQuOC40IDM0LjN6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZTZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmYXN0LWJhY2t3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1mYXN0LWJhY2t3YXJkIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDQzNlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjE1MS45TDIzNS41IDcxLjRDMjU2LjEgNTQuMyAyODggNjguNiAyODggOTZ2MTMxLjlMNDU5LjUgNzEuNEM0ODAuMSA1NC4zIDUxMiA2OC42IDUxMiA5NnYzMjBjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMjg4IDI4NS4zVjQxNmMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkw2NCAyODUuM1Y0MzZjMCA2LjYtNS40IDEyLTEyIDEySDEyYy02LjYgMC0xMi01LjQtMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ25leHRTZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmYXN0LWZvcndhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtZm9yd2FyZCBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTEyIDc2djM2MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJWMjg0LjFMMjc2LjUgNDQwLjZjLTIwLjYgMTcuMi01Mi41IDIuOC01Mi41LTI0LjZWMjg0LjFMNTIuNSA0NDAuNkMzMS45IDQ1Ny44IDAgNDQzLjQgMCA0MTZWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMjI0IDIyNi44Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDQ0OCAyMjYuOFY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYXJyb3ctcmlnaHRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXJpZ2h0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTAuNSA2Ni45bDIyLjItMjIuMmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMEw0NDEgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0Ni42IDQ2Ny4zYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuMi0yMi4yYy05LjUtOS41LTkuMy0yNSAuNC0zNC4zTDMxMS40IDI5NkgyNGMtMTMuMyAwLTI0LTEwLjctMjQtMjR2LTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0aDI4Ny40TDE5MC45IDEwMS4yYy05LjgtOS4zLTEwLTI0LjgtLjQtMzQuM3pcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbGFzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0ZXAtZm9yd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc3RlcC1mb3J3YXJkIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODQgNDR2NDI0YzAgNi42LTUuNCAxMi0xMiAxMmgtNDhjLTYuNiAwLTEyLTUuNC0xMi0xMlYyOTEuNmwtMTk1LjUgMTgxQzk1LjkgNDg5LjcgNjQgNDc1LjQgNjQgNDQ4VjY0YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDMxMiAyMTkuM1Y0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgIH1cbiAgICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignZmlyc3QnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ3ByZXYnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbj17dGhpcy5pc1ByZXZNb3JlSGlkZGVuKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vcmVQcmV2UGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdwcmV2U2V0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cblxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclBhZ2VzKCB0aGlzLnZpc2libGVSYW5nZSgpICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW49e3RoaXMuaXNOZXh0TW9yZUhpZGRlbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlTmV4dFBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbmV4dFNldCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCduZXh0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sYXN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMYXN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ2xhc3QnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuXHRcdFx0XHQ8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLnRvdGFsICYmICg8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlclwiPnt0aGlzLnByb3BzLmN1cnJlbnR9IC8ge3RoaXMucHJvcHMudG90YWx9IHt0aGlzLnByb3BzLnRleHRzLnBhZ2V9PC9zcGFuPikgfVxuXHRcdFx0XHQgICAgeyAhIXRoaXMucHJvcHMuY291bnQgJiYgKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50LW51bWJlclwiPnt0aGlzLnByb3BzLmNvdW50fSB7dGhpcy5wcm9wcy50ZXh0cy5yZWNvcmR9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1BhZ2VyQmFyJyxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzRGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnenItcGFnZXItYmFyICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKSArICcgJysgKHRoaXMucHJvcHMuaXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwiKSArICcgJysgKHRoaXMucHJvcHMuaXNEaXNhYmxlZD9cIlwiOlwiZW5hYmxlZFwiKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2VyID0gcmVxdWlyZSgnLi9QYWdlcicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnUGFnZXJWaWV3JyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUluZGV4OiAxLFxuXHRcdFx0cGFnZVNpemU6IDEwLFxuXHRcdFx0dmlzaWJsZVBhZ2U6IDUsXG5cdFx0XHRkYXRhRml4ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXhcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIF9faGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIChuZXdQYWdlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KG5ld1BhZ2UpO1xuXHRcdH1cblx0fSxcblx0c2V0UGFnZUluZGV4OiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblx0fSxcblx0X192aWV3UmVuZGVyOiBmdW5jdGlvbiAocmVzcG9uc2Upe1xuXHRcdHZhciBfdmlldyA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMudmlldyB8fCB0aGlzLnByb3BzLnZpZXdSZW5kZXIsIHpuLmV4dGVuZCh7XG5cdFx0XHRyZXNwb25zZTogcmVzcG9uc2UsXG5cdFx0XHRwYWdlclZpZXc6IHRoaXNcblx0XHR9LCB0aGlzLnN0YXRlKSk7XG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250ZW50XCI+e192aWV3fTwvZGl2Pjtcblx0fSxcblx0X19vbkRhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuZGF0YUhhbmRsZXIgJiYgdGhpcy5wcm9wcy5kYXRhSGFuZGxlcihkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0aWYodHlwZW9mIF9yZXR1cm4gPT0gJ29iamVjdCcpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKF9yZXR1cm4pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vVE9ETzogXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uRGF0YUxvYWRpbmc6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblxuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZUluZGV4XSA9IHRoaXMuc3RhdGUucGFnZUluZGV4IHx8IDE7XG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlU2l6ZV0gPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwO1xuXG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcztcblxuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0aGlzKTtcblx0fSxcblx0X19sb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPGxvYWRlci5EYXRhTG9hZGVyIGxvYWRlcj1cIndhdmVcIiB0aXRsZT0nTG9hZGluZy4uLicgLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZXItdmlld1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5kYXRhRml4ZWR9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhICYmIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3ZpZXdSZW5kZXJ9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9eygpPT50aGlzLl9fbG9hZGluZ1JlbmRlcigpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uRGF0YUxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRGF0YUxvYWRlZH0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXctcGFnZXJcIj5cblx0XHRcdFx0XHQ8UGFnZXIgdG90YWw9e01hdGguY2VpbCh0aGlzLnN0YXRlLmNvdW50L3RoaXMucHJvcHMucGFnZVNpemUpfVxuXHRcdFx0XHRcdFx0Y291bnQ9e3RoaXMuc3RhdGUuY291bnR9XG5cdFx0XHRcdFx0XHRjdXJyZW50PXt0aGlzLnN0YXRlLnBhZ2VJbmRleH1cblx0XHRcdFx0XHRcdHBhZ2VTaXplPXt0aGlzLnByb3BzLnBhZ2VTaXplfVxuXHRcdFx0XHRcdFx0dmlzaWJsZVBhZ2VzPXt0aGlzLnByb3BzLnZpc2libGVQYWdlc31cblx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZWQ9e3RoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1NpbXBsZVBhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAn6aG1JyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6ICfmnaEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhU3RlcEJhY2t3YXJkJywgXG4gICAgICAgICAgICAgICAgcHJldjogJ2ZhQXJyb3dMZWZ0JyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmFBcnJvd1JpZ2h0JyxcbiAgICAgICAgICAgICAgICBsYXN0OiAnZmFTdGVwRm9yd2FyZCdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gICAgfSxcbiAgICBoYW5kbGVQcmV2aW91c1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcbiAgICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgICB9LFxuICAgIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgICB9LFxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcbiAgICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50ID49IHRoaXMucHJvcHMudG90YWw7XG4gICAgfSxcbiAgICBfX3JlbmRlckljb246IGZ1bmN0aW9uICh2YWx1ZSl7XG4gICAgICAgIHN3aXRjaCh2YWx1ZSl7XG4gICAgICAgICAgICBjYXNlICdmaXJzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0ZXAtYmFja3dhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtYmFja3dhcmQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTY0IDQ2OFY0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEydjE3Ni40bDE5NS41LTE4MUMzNTIuMSAyMi4zIDM4NCAzNi42IDM4NCA2NHYzODRjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMTM2IDI5Mi43VjQ2OGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAncHJldic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LWxlZnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LWxlZnQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAncHJldlNldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZhc3QtYmFja3dhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtYmFja3dhcmQgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgNDM2Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTUxLjlMMjM1LjUgNzEuNEMyNTYuMSA1NC4zIDI4OCA2OC42IDI4OCA5NnYxMzEuOUw0NTkuNSA3MS40QzQ4MC4xIDU0LjMgNTEyIDY4LjYgNTEyIDk2djMyMGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwyODggMjg1LjNWNDE2YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDY0IDI4NS4zVjQzNmMwIDYuNi01LjQgMTItMTIgMTJIMTJjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbmV4dFNldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZhc3QtZm9yd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1mb3J3YXJkIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MTIgNzZ2MzYwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMlYyODQuMUwyNzYuNSA0NDAuNmMtMjAuNiAxNy4yLTUyLjUgMi44LTUyLjUtMjQuNlYyODQuMUw1Mi41IDQ0MC42QzMxLjkgNDU3LjggMCA0NDMuNCAwIDQxNlY5NmMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkwyMjQgMjI2LjhWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMNDQ4IDIyNi44Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctcmlnaHQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5MC41IDY2LjlsMjIuMi0yMi4yYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwTDQ0MSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQ2LjYgNDY3LjNjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1IC40LTM0LjNMMzExLjQgMjk2SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRoMjg3LjRMMTkwLjkgMTAxLjJjLTkuOC05LjMtMTAtMjQuOC0uNC0zNC4zelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic3RlcC1mb3J3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWZvcndhcmQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM4NCA0NHY0MjRjMCA2LjYtNS40IDEyLTEyIDEyaC00OGMtNi42IDAtMTItNS40LTEyLTEyVjI5MS42bC0xOTUuNSAxODFDOTUuOSA0ODkuNyA2NCA0NzUuNCA2NCA0NDhWNjRjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMzEyIDIxOS4zVjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgfVxuICAgIH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17XCJ6ci1zaW1wbGUtcGFnZXIgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJwYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpcnN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdmaXJzdCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJldmlvdXNQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbigncHJldicpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbmV4dCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGFzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdsYXN0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2U6IHJlcXVpcmUoJy4vUGFnZScpLFxuICAgIFBhZ2VyOiByZXF1aXJlKCcuL1BhZ2VyJyksXG4gICAgUGFnZXJCYXI6IHJlcXVpcmUoJy4vUGFnZXJCYXInKSxcbiAgICBQYWdlclZpZXc6IHJlcXVpcmUoJy4vUGFnZXJWaWV3JyksXG4gICAgU2ltcGxlUGFnZXI6IHJlcXVpcmUoJy4vU2ltcGxlUGFnZXInKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=