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

var Select = React.createClass({
  displayName: 'PagerSelect',
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {};
  },
  __onSelectChange: function __onSelectChange(event) {
    this.props.onChange && this.props.onChange(event);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("select", {
      className: znui.react.classname("page-size-select", this.props.className, this.state.className),
      style: znui.react.style({}, this.props.style),
      value: this.props.value,
      onChange: this.__onSelectChange,
      onClick: this.__onSelectClick
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, this.props.placeholder), this.props.data.map(function (value, index) {
      return /*#__PURE__*/React.createElement("option", {
        key: index,
        value: value
      }, value);
    }));
  }
});
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
    return {
      activePage: this.props.activePage
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
  handleMorePrevPages: function handleMorePrevPages() {
    this.handlePageChanged(this.props.current - 1);
  },
  handleMoreNextPages: function handleMoreNextPages() {
    var blocks = this.calcBlocks();
    this.handlePageChanged(blocks.current * blocks.size + 1);
  },
  handlePageChanged: function handlePageChanged(pageIndex) {
    if (this.state.activePage == pageIndex) {
      return;
    }

    this.state.activePage = pageIndex;
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
    }, this.props.count, " ", this.props.texts.record)), !!this.props.count && /*#__PURE__*/React.createElement(Select, {
      value: this.props.pageSize,
      data: [5, 10, 20, 50, 100, 200, 500, 1000],
      onChange: this.props.onPageSizeChange
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJfX29uQ2xpY2siLCJwcm9wcyIsImlzRGlzYWJsZWQiLCJvbkNsaWNrIiwicmVuZGVyIiwiaXNIaWRkZW4iLCJjbGFzc05hbWUiLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiUGFnZSIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJyZXMiLCJpIiwicHVzaCIsIlNlbGVjdCIsImdldERlZmF1bHRQcm9wcyIsImdldEluaXRpYWxTdGF0ZSIsIl9fb25TZWxlY3RDaGFuZ2UiLCJldmVudCIsIm9uQ2hhbmdlIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0ZSIsInN0eWxlIiwidmFsdWUiLCJfX29uU2VsZWN0Q2xpY2siLCJwbGFjZWhvbGRlciIsImRhdGEiLCJtYXAiLCJpbmRleCIsInRvdGFsIiwiY291bnQiLCJjdXJyZW50IiwidmlzaWJsZVBhZ2VzIiwidGV4dHMiLCJwYWdlIiwicmVjb3JkIiwiYWN0aXZlUGFnZSIsImhhbmRsZUZpcnN0UGFnZSIsImlzUHJldkRpc2FibGVkIiwiaGFuZGxlUGFnZUNoYW5nZWQiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImlzTmV4dERpc2FibGVkIiwiaGFuZGxlTGFzdFBhZ2UiLCJoYW5kbGVNb3JlUHJldlBhZ2VzIiwiaGFuZGxlTW9yZU5leHRQYWdlcyIsImJsb2NrcyIsImNhbGNCbG9ja3MiLCJzaXplIiwicGFnZUluZGV4Iiwib25QYWdlQ2hhbmdlZCIsIk1hdGgiLCJjZWlsIiwiaXNQcmV2TW9yZUhpZGRlbiIsImlzTmV4dE1vcmVIaWRkZW4iLCJ2aXNpYmxlUmFuZ2UiLCJkZWx0YSIsInJlbmRlclBhZ2VzIiwicGFpciIsImJpbmQiLCJfX3JlbmRlckljb24iLCJwYWdlU2l6ZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJQYWdlciIsImxvYWRlciIsInZpc2libGVQYWdlIiwiZGF0YUZpeGVkIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJfcmV0dXJuIiwic2V0UGFnZUluZGV4IiwicmVmcmVzaCIsIl9fdmlld1JlbmRlciIsInJlc3BvbnNlIiwiX3ZpZXciLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJ2aWV3Iiwidmlld1JlbmRlciIsInpuIiwiZXh0ZW5kIiwicGFnZXJWaWV3IiwiX19vbkRhdGFMb2FkZWQiLCJkYXRhSGFuZGxlciIsInNldFN0YXRlIiwiX19vbkRhdGFMb2FkaW5nIiwibGlmeWN5Y2xlIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsImRlZXBBc3NpZ24iLCJrZXlNYXBzIiwicGFyYW1zIiwiX19vbkRhdGFDcmVhdGVkIiwib25EYXRhQ3JlYXRlZCIsIl9fbG9hZGluZ1JlbmRlciIsImljb25zIiwiZmlyc3QiLCJwcmV2IiwibmV4dCIsImxhc3QiLCJQYWdlckJhciIsIlBhZ2VyVmlldyIsIlNpbXBsZVBhZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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QyxLQUFMLENBQVdtQyxLQUFYLENBQWlCRSxNQUFwRSxDQUY3QixDQWRoQixlQW1CZ0Isb0JBQUMsSUFBRDtBQUNJLGVBQVMsRUFBQyxlQURkO0FBRUksZ0JBQVUsRUFBRSxLQUFLTyxjQUFMLEVBRmhCO0FBR0ksYUFBTyxFQUFFLEtBQUtEO0FBSGxCLE9BSUssS0FBS21CLFlBQUwsQ0FBa0IsTUFBbEIsQ0FKTCxDQW5CaEIsZUF5QmdCLG9CQUFDLElBQUQ7QUFDSSxlQUFTLEVBQUMsZUFEZDtBQUVJLGdCQUFVLEVBQUUsS0FBS2xCLGNBQUwsRUFGaEI7QUFHSSxhQUFPLEVBQUUsS0FBS0M7QUFIbEIsT0FJSyxLQUFLaUIsWUFBTCxDQUFrQixNQUFsQixDQUpMLENBekJoQixDQURELENBREQ7QUFvQ0E7QUFsR2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFuRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYlksTUFBSSxFQUFFZCxtQkFBTyxDQUFDLHlCQUFELENBREE7QUFFYnVFLE9BQUssRUFBRXZFLG1CQUFPLENBQUMsMkJBQUQsQ0FGRDtBQUdiNkcsVUFBUSxFQUFFN0csbUJBQU8sQ0FBQyxpQ0FBRCxDQUhKO0FBSWI4RyxXQUFTLEVBQUU5RyxtQkFBTyxDQUFDLG1DQUFELENBSkw7QUFLYitHLGFBQVcsRUFBRS9HLG1CQUFPLENBQUMsdUNBQUQ7QUFMUCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdQYWdlJyxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzRGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0hpZGRlbil7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gY2xhc3NOYW1lPXsnenItcGFnZXItcGFnZSAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lfHwnJykgKyAnICcrICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikgKyAnICcrICh0aGlzLnByb3BzLmlzRGlzYWJsZWQ/XCJcIjpcImVuYWJsZWRcIil9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2UgPSByZXF1aXJlKCcuL1BhZ2UnKTtcblxuZnVuY3Rpb24gcmFuZ2UgKCBzdGFydCwgZW5kICkge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKysgKSB7XG4gICAgICAgIHJlcy5wdXNoKCBpICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxudmFyIFNlbGVjdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1BhZ2VyU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgXG5cdFx0fVxuXHR9LFxuICAgIF9fb25TZWxlY3RDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwicGFnZS1zaXplLXNlbGVjdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfVxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh7fSwgdGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uU2VsZWN0Q2hhbmdlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25TZWxlY3RDbGlja30+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JycgZGlzYWJsZWQ+e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9PC9vcHRpb24+XG5cdFx0XHRcdHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17dmFsdWV9Pnt2YWx1ZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0PC9zZWxlY3Q+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICfpobUnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogJ+adoSdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmVQYWdlOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2Vcblx0XHR9XG5cdH0sXG5cdGhhbmRsZUZpcnN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgICB9LFxuICAgIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuICAgIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCArIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3JlUHJldlBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vcmVOZXh0UGFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKChibG9ja3MuY3VycmVudCAqIGJsb2Nrcy5zaXplKSArIDEpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKCBwYWdlSW5kZXggKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlUGFnZSA9PSBwYWdlSW5kZXgpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlUGFnZSA9IHBhZ2VJbmRleDtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcblxuICAgIGNhbGNCbG9ja3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsOiBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbC90aGlzLnByb3BzLnZpc2libGVQYWdlcyksXG4gICAgICAgICAgICBjdXJyZW50OiBNYXRoLmNlaWwodGhpcy5wcm9wcy5jdXJyZW50L3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzKSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMucHJvcHMudmlzaWJsZVBhZ2VzXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGlzUHJldkRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgICB9LFxuXG4gICAgaXNOZXh0RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA+PSB0aGlzLnByb3BzLnRvdGFsO1xuICAgIH0sXG5cbiAgICBpc1ByZXZNb3JlSGlkZGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgcmV0dXJuICggYmxvY2tzLnRvdGFsID09PSAxICkgfHwgKCBibG9ja3MuY3VycmVudCA9PT0gMSApO1xuICAgIH0sXG5cbiAgICBpc05leHRNb3JlSGlkZGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgcmV0dXJuICggYmxvY2tzLnRvdGFsID09PSAwICkgfHwgKCBibG9ja3MuY3VycmVudCA9PT0gYmxvY2tzLnRvdGFsICk7XG4gICAgfSxcblxuICAgIHZpc2libGVSYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzICA9IHRoaXMuY2FsY0Jsb2NrcygpLFxuXHRcdFx0c3RhcnQgICA9IChibG9ja3MuY3VycmVudCAtIDEpICogYmxvY2tzLnNpemUsXG5cdFx0XHRkZWx0YSAgID0gdGhpcy5wcm9wcy50b3RhbCAtIHN0YXJ0LFxuXHRcdFx0ZW5kICAgICA9IHN0YXJ0ICsgKCAoZGVsdGEgPiBibG9ja3Muc2l6ZSkgPyBibG9ja3Muc2l6ZSA6IGRlbHRhICk7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhcnQgKyAxLCBlbmQgKyAxIF07XG4gICAgfSxcblxuXHQvKipcbiAgICAgKiAjIyMgcmVuZGVyUGFnZXMoKVxuICAgICAqIFJlbmRlcnMgYmxvY2sgb2YgcGFnZXMnIGJ1dHRvbnMgd2l0aCBudW1iZXJzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IHJhbmdlIC0gcGFpciBvZiBbc3RhcnQsIGZyb21dLCBgZnJvbWAgLSBub3QgaW5jbHVzaXZlLlxuICAgICAqIEByZXR1cm4ge1JlYWN0LkVsZW1lbnRbXX0gLSBhcnJheSBvZiBSZWFjdCBub2Rlcy5cbiAgICAgKi9cbiAgICByZW5kZXJQYWdlczogZnVuY3Rpb24gKCBwYWlyICkge1xuICAgICAgICByZXR1cm4gcmFuZ2UoIHBhaXJbMF0sIHBhaXJbMV0gKS5tYXAoZnVuY3Rpb24gKCBwYWdlSW5kZXgsIGluZGV4ICkge1xuICAgICAgICAgICAgcmV0dXJuIChcblx0XHRcdFx0PFBhZ2Uga2V5PXtpbmRleH1cblx0XHRcdFx0XHRpc0FjdGl2ZT17dGhpcy5wcm9wcy5jdXJyZW50ID09PSBwYWdlSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1udW1iZXJlZC1wYWdlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVQYWdlQ2hhbmdlZChwYWdlSW5kZXgpfT57cGFnZUluZGV4fTwvUGFnZT5cblx0XHRcdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBfX3JlbmRlckljb246IGZ1bmN0aW9uICh2YWx1ZSl7XG4gICAgICAgIHN3aXRjaCh2YWx1ZSl7XG4gICAgICAgICAgICBjYXNlICdmaXJzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0ZXAtYmFja3dhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtYmFja3dhcmQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTY0IDQ2OFY0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEydjE3Ni40bDE5NS41LTE4MUMzNTIuMSAyMi4zIDM4NCAzNi42IDM4NCA2NHYzODRjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMTM2IDI5Mi43VjQ2OGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAncHJldic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LWxlZnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LWxlZnQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAncHJldlNldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZhc3QtYmFja3dhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtYmFja3dhcmQgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgNDM2Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTUxLjlMMjM1LjUgNzEuNEMyNTYuMSA1NC4zIDI4OCA2OC42IDI4OCA5NnYxMzEuOUw0NTkuNSA3MS40QzQ4MC4xIDU0LjMgNTEyIDY4LjYgNTEyIDk2djMyMGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwyODggMjg1LjNWNDE2YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDY0IDI4NS4zVjQzNmMwIDYuNi01LjQgMTItMTIgMTJIMTJjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbmV4dFNldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZhc3QtZm9yd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1mb3J3YXJkIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MTIgNzZ2MzYwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMlYyODQuMUwyNzYuNSA0NDAuNmMtMjAuNiAxNy4yLTUyLjUgMi44LTUyLjUtMjQuNlYyODQuMUw1Mi41IDQ0MC42QzMxLjkgNDU3LjggMCA0NDMuNCAwIDQxNlY5NmMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkwyMjQgMjI2LjhWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMNDQ4IDIyNi44Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctcmlnaHQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5MC41IDY2LjlsMjIuMi0yMi4yYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwTDQ0MSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQ2LjYgNDY3LjNjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1IC40LTM0LjNMMzExLjQgMjk2SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRoMjg3LjRMMTkwLjkgMTAxLjJjLTkuOC05LjMtMTAtMjQuOC0uNC0zNC4zelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic3RlcC1mb3J3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWZvcndhcmQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM4NCA0NHY0MjRjMCA2LjYtNS40IDEyLTEyIDEyaC00OGMtNi42IDAtMTItNS40LTEyLTEyVjI5MS42bC0xOTUuNSAxODFDOTUuOSA0ODkuNyA2NCA0NzUuNCA2NCA0NDhWNjRjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMzEyIDIxOS4zVjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgfVxuICAgIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e1wienItcGFnZXIgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJwYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpcnN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdmaXJzdCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJldmlvdXNQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbigncHJldicpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuPXt0aGlzLmlzUHJldk1vcmVIaWRkZW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9yZVByZXZQYWdlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ3ByZXZTZXQnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuXG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyUGFnZXMoIHRoaXMudmlzaWJsZVJhbmdlKCkgKX1cblxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbj17dGhpcy5pc05leHRNb3JlSGlkZGVuKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vcmVOZXh0UGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCduZXh0U2V0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ25leHQnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxhc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxhc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbGFzdCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG5cdFx0XHRcdDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG5cdFx0XHRcdCAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuY291bnQgJiYgPFNlbGVjdCB2YWx1ZT17dGhpcy5wcm9wcy5wYWdlU2l6ZX0gZGF0YT17WzUsIDEwLCAyMCwgNTAsIDEwMCwgMjAwLCA1MDAsIDEwMDBdfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblBhZ2VTaXplQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIH1cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZXJCYXInLFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNEaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyd6ci1wYWdlci1iYXIgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZXIgPSByZXF1aXJlKCcuL1BhZ2VyJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQYWdlclZpZXcnLFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlSW5kZXg6IDEsXG5cdFx0XHRwYWdlU2l6ZTogMTAsXG5cdFx0XHR2aXNpYmxlUGFnZTogNSxcblx0XHRcdGRhdGFGaXhlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB7XG5cdFx0XHRjb3VudDogMCxcblx0XHRcdGN1cnJlbnQ6IDEsXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHRvdGFsOiAwLFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX19oYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKG5ld1BhZ2Upe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChuZXdQYWdlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgobmV3UGFnZSk7XG5cdFx0fVxuXHR9LFxuXHRzZXRQYWdlSW5kZXg6IGZ1bmN0aW9uIChwYWdlSW5kZXgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3ZpZXdSZW5kZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG5cdFx0dmFyIF92aWV3ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy52aWV3IHx8IHRoaXMucHJvcHMudmlld1JlbmRlciwgem4uZXh0ZW5kKHtcblx0XHRcdHJlc3BvbnNlOiByZXNwb25zZSxcblx0XHRcdHBhZ2VyVmlldzogdGhpc1xuXHRcdH0sIHRoaXMuc3RhdGUpKTtcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRlbnRcIj57X3ZpZXd9PC9kaXY+O1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5kYXRhSGFuZGxlciAmJiB0aGlzLnByb3BzLmRhdGFIYW5kbGVyKGRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoX3JldHVybik7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly9UT0RPOiBcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhTG9hZGluZzogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dmFyIF9tZXRob2QgPSBkYXRhLm1ldGhvZHx8J3Bvc3QnLFxuXHRcdFx0X3BhcmFtcyA9IHt9LFxuXHRcdFx0X2tleU1hcHMgPSB6bi5kZWVwQXNzaWduKHtcblx0XHRcdFx0dG90YWw6IFwidG90YWxcIixcblx0XHRcdFx0cGFnZUluZGV4OiAncGFnZUluZGV4Jyxcblx0XHRcdFx0cGFnZVNpemU6ICdwYWdlU2l6ZScsXG5cdFx0XHRcdGRhdGE6ICdkYXRhJ1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5rZXlNYXBzKTtcblxuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMucHJvcHMucGFnZVNpemUgfHwgMTA7XG5cblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUua2V5TWFwcyA9IF9rZXlNYXBzO1xuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX2xvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPSdMb2FkaW5nLi4uJyAvPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlci12aWV3XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmRhdGFGaXhlZH0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEgJiYgPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXt0aGlzLl9fdmlld1JlbmRlcn0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX19sb2FkaW5nUmVuZGVyKCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLl9fb25EYXRhTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlldy1wYWdlclwiPlxuXHRcdFx0XHRcdDxQYWdlciB0b3RhbD17TWF0aC5jZWlsKHRoaXMuc3RhdGUuY291bnQvdGhpcy5wcm9wcy5wYWdlU2l6ZSl9XG5cdFx0XHRcdFx0XHRjb3VudD17dGhpcy5zdGF0ZS5jb3VudH1cblx0XHRcdFx0XHRcdGN1cnJlbnQ9e3RoaXMuc3RhdGUucGFnZUluZGV4fVxuXHRcdFx0XHRcdFx0cGFnZVNpemU9e3RoaXMucHJvcHMucGFnZVNpemV9XG5cdFx0XHRcdFx0XHR2aXNpYmxlUGFnZXM9e3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzfVxuXHRcdFx0XHRcdFx0b25QYWdlQ2hhbmdlZD17dGhpcy5fX2hhbmRsZVBhZ2VDaGFuZ2VkfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonU2ltcGxlUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICfpobUnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogJ+adoSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIGZpcnN0OiAnZmFTdGVwQmFja3dhcmQnLCBcbiAgICAgICAgICAgICAgICBwcmV2OiAnZmFBcnJvd0xlZnQnLFxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYUFycm93UmlnaHQnLFxuICAgICAgICAgICAgICAgIGxhc3Q6ICdmYVN0ZXBGb3J3YXJkJ1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdH0sXG5cdGhhbmRsZUZpcnN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgICB9LFxuICAgIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuICAgIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCArIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICAgIH0sXG4gICAgaGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uICggcGFnZUluZGV4ICkge1xuXHRcdHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQocGFnZUluZGV4KTtcbiAgICB9LFxuICAgIGlzUHJldkRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgICB9LFxuICAgIGlzTmV4dERpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICB9LFxuICAgIF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgc3dpdGNoKHZhbHVlKXtcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic3RlcC1iYWNrd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc3RlcC1iYWNrd2FyZCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNjQgNDY4VjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTc2LjRsMTk1LjUtMTgxQzM1Mi4xIDIyLjMgMzg0IDM2LjYgMzg0IDY0djM4NGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwxMzYgMjkyLjdWNDY4YzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYXJyb3ctbGVmdFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctbGVmdCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU3LjUgNDQ1LjFsLTIyLjIgMjIuMmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMNyAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDIwMS40IDQ0LjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuMiAyMi4yYzkuNSA5LjUgOS4zIDI1LS40IDM0LjNMMTM2LjYgMjE2SDQyNGMxMy4zIDAgMjQgMTAuNyAyNCAyNHYzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMzYuNmwxMjAuNSAxMTQuOGM5LjggOS4zIDEwIDI0LjguNCAzNC4zelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdwcmV2U2V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZmFzdC1iYWNrd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1iYWNrd2FyZCBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCA0MzZWNzZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnYxNTEuOUwyMzUuNSA3MS40QzI1Ni4xIDU0LjMgMjg4IDY4LjYgMjg4IDk2djEzMS45TDQ1OS41IDcxLjRDNDgwLjEgNTQuMyA1MTIgNjguNiA1MTIgOTZ2MzIwYzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDI4OCAyODUuM1Y0MTZjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMNjQgMjg1LjNWNDM2YzAgNi42LTUuNCAxMi0xMiAxMkgxMmMtNi42IDAtMTItNS40LTEyLTEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICduZXh0U2V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZmFzdC1mb3J3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1mYXN0LWZvcndhcmQgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUxMiA3NnYzNjBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEyVjI4NC4xTDI3Ni41IDQ0MC42Yy0yMC42IDE3LjItNTIuNSAyLjgtNTIuNS0yNC42VjI4NC4xTDUyLjUgNDQwLjZDMzEuOSA0NTcuOCAwIDQ0My40IDAgNDE2Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDIyNCAyMjYuOFY5NmMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkw0NDggMjI2LjhWNzZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LXJpZ2h0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1yaWdodCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkwLjUgNjYuOWwyMi4yLTIyLjJjOS40LTkuNCAyNC42LTkuNCAzMy45IDBMNDQxIDIzOWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyNDYuNiA0NjcuM2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjItMjIuMmMtOS41LTkuNS05LjMtMjUgLjQtMzQuM0wzMTEuNCAyOTZIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0di0zMmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgyODcuNEwxOTAuOSAxMDEuMmMtOS44LTkuMy0xMC0yNC44LS40LTM0LjN6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzdGVwLWZvcndhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtZm9yd2FyZCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzg0IDQ0djQyNGMwIDYuNi01LjQgMTItMTIgMTJoLTQ4Yy02LjYgMC0xMi01LjQtMTItMTJWMjkxLjZsLTE5NS41IDE4MUM5NS45IDQ4OS43IDY0IDQ3NS40IDY0IDQ0OFY2NGMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkwzMTIgMjE5LjNWNDRjMC02LjYgNS40LTEyIDEyLTEyaDQ4YzYuNiAwIDEyIDUuNCAxMiAxMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICB9XG4gICAgfSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXNpbXBsZS1wYWdlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlyc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpcnN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ2ZpcnN0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdwcmV2Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy50b3RhbCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1udW1iZXJcIj57dGhpcy5wcm9wcy5jdXJyZW50fSAvIHt0aGlzLnByb3BzLnRvdGFsfSB7dGhpcy5wcm9wcy50ZXh0cy5wYWdlfTwvc3Bhbj4pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLmNvdW50ICYmICg8c3BhbiBjbGFzc05hbWU9XCJjb3VudC1udW1iZXJcIj57dGhpcy5wcm9wcy5jb3VudH0ge3RoaXMucHJvcHMudGV4dHMucmVjb3JkfTwvc3Bhbj4pIH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCduZXh0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sYXN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMYXN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ2xhc3QnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZTogcmVxdWlyZSgnLi9QYWdlJyksXG4gICAgUGFnZXI6IHJlcXVpcmUoJy4vUGFnZXInKSxcbiAgICBQYWdlckJhcjogcmVxdWlyZSgnLi9QYWdlckJhcicpLFxuICAgIFBhZ2VyVmlldzogcmVxdWlyZSgnLi9QYWdlclZpZXcnKSxcbiAgICBTaW1wbGVQYWdlcjogcmVxdWlyZSgnLi9TaW1wbGVQYWdlcicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==