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
      data: null,
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
    if (this.state.data) {
      var _view = znui.react.createReactElement(this.props.view || this.props.viewRender, zn.extend({
        response: response,
        pagerView: this
      }, this.state));
      return /*#__PURE__*/React.createElement("div", {
        className: "view-content"
      }, _view);
    }
    return /*#__PURE__*/React.createElement("div", null, "\u52A0\u8F7D\u4E2D...");
  },
  __onDataLoaded: function __onDataLoaded(data) {
    var _return = this.props.dataHandler && this.props.dataHandler(data, this);
    if (_return === false) {
      return false;
    }
    if (zn.is(_return, 'object')) {
      return this.setState(_return);
    }
    if (zn.is(data, 'object') && data.code) {
      if (zn.is(data, 'object') && data.code != 200) {
        return console.error(data.detail), false;
      }
      if (zn.is(data, 'object') && data.code == 200) {
        data = data.result;
      }
      if (!zn.is(data, 'array')) {
        return console.error("TablePager Component Data Type Error."), false;
      }
      var _data = data[0],
        _pagerCount = data[1][0].count;
      var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, this);
      if (_return !== false) {
        this.setState({
          data: _data,
          total: Math.ceil(_pagerCount / this.state.pageSize),
          count: _pagerCount,
          current: this.state.current
        });
      }
    } else {
      if (zn.is(data, 'array')) {
        return console.error('The data is array, but it need return object'), false;
      }
      var _data = data.data;
      var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, this);
      if (_return !== false) {
        this.setState({
          data: _data[this.state.keyMaps.data],
          total: Math.ceil(_data[this.state.keyMaps.total] / this.state.pageSize),
          count: _data[this.state.keyMaps.total],
          current: _data[this.state.keyMaps.pageIndex]
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJfX29uQ2xpY2siLCJwcm9wcyIsImlzRGlzYWJsZWQiLCJvbkNsaWNrIiwicmVuZGVyIiwiaXNIaWRkZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsIlBhZ2UiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwicmVzIiwiaSIsInB1c2giLCJTZWxlY3QiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJfX29uU2VsZWN0Q2hhbmdlIiwiZXZlbnQiLCJvbkNoYW5nZSIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3RhdGUiLCJzdHlsZSIsInZhbHVlIiwiX19vblNlbGVjdENsaWNrIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJtYXAiLCJpbmRleCIsImtleSIsInRvdGFsIiwiY291bnQiLCJjdXJyZW50IiwidmlzaWJsZVBhZ2VzIiwidGV4dHMiLCJwYWdlIiwicmVjb3JkIiwiYWN0aXZlUGFnZSIsImhhbmRsZUZpcnN0UGFnZSIsImlzUHJldkRpc2FibGVkIiwiaGFuZGxlUGFnZUNoYW5nZWQiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImlzTmV4dERpc2FibGVkIiwiaGFuZGxlTGFzdFBhZ2UiLCJoYW5kbGVNb3JlUHJldlBhZ2VzIiwiaGFuZGxlTW9yZU5leHRQYWdlcyIsImJsb2NrcyIsImNhbGNCbG9ja3MiLCJzaXplIiwicGFnZUluZGV4Iiwib25QYWdlQ2hhbmdlZCIsIk1hdGgiLCJjZWlsIiwiaXNQcmV2TW9yZUhpZGRlbiIsImlzTmV4dE1vcmVIaWRkZW4iLCJ2aXNpYmxlUmFuZ2UiLCJkZWx0YSIsInJlbmRlclBhZ2VzIiwicGFpciIsIl90aGlzIiwiYmluZCIsIl9fcmVuZGVySWNvbiIsImZvY3VzYWJsZSIsInJvbGUiLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiZCIsInBhZ2VTaXplIiwib25QYWdlU2l6ZUNoYW5nZSIsIlBhZ2VyIiwibG9hZGVyIiwidmlzaWJsZVBhZ2UiLCJkYXRhRml4ZWQiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIl9yZXR1cm4iLCJzZXRQYWdlSW5kZXgiLCJyZWZyZXNoIiwiX192aWV3UmVuZGVyIiwicmVzcG9uc2UiLCJfdmlldyIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInZpZXciLCJ2aWV3UmVuZGVyIiwiem4iLCJleHRlbmQiLCJwYWdlclZpZXciLCJfX29uRGF0YUxvYWRlZCIsImRhdGFIYW5kbGVyIiwiaXMiLCJzZXRTdGF0ZSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZXRhaWwiLCJyZXN1bHQiLCJfZGF0YSIsIl9wYWdlckNvdW50Iiwib25EYXRhTG9hZGVkIiwidGFibGUiLCJrZXlNYXBzIiwiX19vbkRhdGFMb2FkaW5nIiwibGlmeWN5Y2xlIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsImRlZXBBc3NpZ24iLCJwYXJhbXMiLCJfX29uRGF0YUNyZWF0ZWQiLCJvbkRhdGFDcmVhdGVkIiwiX19sb2FkaW5nUmVuZGVyIiwiRGF0YUxvYWRlciIsInRpdGxlIiwiRGF0YUxpZmVjeWNsZSIsImxvYWRpbmdSZW5kZXIiLCJvbkxvYWRpbmciLCJvbkZpbmlzaGVkIiwiaWNvbnMiLCJmaXJzdCIsInByZXYiLCJuZXh0IiwibGFzdCIsIlBhZ2VyQmFyIiwiUGFnZXJWaWV3IiwiU2ltcGxlUGFnZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBSyxJQUFJRSxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFFMUNDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFFLE1BQU07RUFDbkJDLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQWE7SUFDckIsSUFBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxFQUFDO01BQ3hCLE9BQU8sS0FBSztJQUNiO0lBQ0EsSUFBSSxDQUFDRCxLQUFLLENBQUNFLE9BQU8sSUFBSSxJQUFJLENBQUNGLEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQUM7RUFDM0Ms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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZScsXG5cdF9fb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0Rpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgb25DbGljaz17dGhpcy5fX29uQ2xpY2t9IGNsYXNzTmFtZT17J3pyLXBhZ2VyLXBhZ2UgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG5cbmZ1bmN0aW9uIHJhbmdlICggc3RhcnQsIGVuZCApIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrICkge1xuICAgICAgICByZXMucHVzaCggaSApO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbnZhciBTZWxlY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidQYWdlclNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIFxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIFxuXHRcdH1cblx0fSxcbiAgICBfX29uU2VsZWN0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBhZ2Utc2l6ZS1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX1cblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUoe30sIHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vblNlbGVjdENoYW5nZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uU2VsZWN0Q2xpY2t9PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnIGRpc2FibGVkPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfTwvb3B0aW9uPlxuXHRcdFx0XHR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3ZhbHVlfT57dmFsdWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblx0XHRcdDwvc2VsZWN0PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1BhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2aXNpYmxlUGFnZXM6IDUsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAn6aG1JyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6ICfmnaEnXG4gICAgICAgICAgICB9XG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlUGFnZTogdGhpcy5wcm9wcy5hY3RpdmVQYWdlXG5cdFx0fVxuXHR9LFxuXHRoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gICAgfSxcbiAgICBoYW5kbGVQcmV2aW91c1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcbiAgICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgICB9LFxuICAgIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlTW9yZVByZXZQYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3JlTmV4dFBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgoYmxvY2tzLmN1cnJlbnQgKiBibG9ja3Muc2l6ZSkgKyAxKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uICggcGFnZUluZGV4ICkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZVBhZ2UgPT0gcGFnZUluZGV4KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVBhZ2UgPSBwYWdlSW5kZXg7XG5cdFx0dGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChwYWdlSW5kZXgpO1xuICAgIH0sXG5cbiAgICBjYWxjQmxvY2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogTWF0aC5jZWlsKHRoaXMucHJvcHMudG90YWwvdGhpcy5wcm9wcy52aXNpYmxlUGFnZXMpLFxuICAgICAgICAgICAgY3VycmVudDogTWF0aC5jZWlsKHRoaXMucHJvcHMuY3VycmVudC90aGlzLnByb3BzLnZpc2libGVQYWdlcyksXG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLnZpc2libGVQYWdlc1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcblxuICAgIGlzTmV4dERpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICB9LFxuXG4gICAgaXNQcmV2TW9yZUhpZGRlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHJldHVybiAoIGJsb2Nrcy50b3RhbCA9PT0gMSApIHx8ICggYmxvY2tzLmN1cnJlbnQgPT09IDEgKTtcbiAgICB9LFxuXG4gICAgaXNOZXh0TW9yZUhpZGRlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHJldHVybiAoIGJsb2Nrcy50b3RhbCA9PT0gMCApIHx8ICggYmxvY2tzLmN1cnJlbnQgPT09IGJsb2Nrcy50b3RhbCApO1xuICAgIH0sXG5cbiAgICB2aXNpYmxlUmFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyAgPSB0aGlzLmNhbGNCbG9ja3MoKSxcblx0XHRcdHN0YXJ0ICAgPSAoYmxvY2tzLmN1cnJlbnQgLSAxKSAqIGJsb2Nrcy5zaXplLFxuXHRcdFx0ZGVsdGEgICA9IHRoaXMucHJvcHMudG90YWwgLSBzdGFydCxcblx0XHRcdGVuZCAgICAgPSBzdGFydCArICggKGRlbHRhID4gYmxvY2tzLnNpemUpID8gYmxvY2tzLnNpemUgOiBkZWx0YSApO1xuXG4gICAgICAgIHJldHVybiBbIHN0YXJ0ICsgMSwgZW5kICsgMSBdO1xuICAgIH0sXG5cblx0LyoqXG4gICAgICogIyMjIHJlbmRlclBhZ2VzKClcbiAgICAgKiBSZW5kZXJzIGJsb2NrIG9mIHBhZ2VzJyBidXR0b25zIHdpdGggbnVtYmVycy5cbiAgICAgKiBAcGFyYW0ge051bWJlcltdfSByYW5nZSAtIHBhaXIgb2YgW3N0YXJ0LCBmcm9tXSwgYGZyb21gIC0gbm90IGluY2x1c2l2ZS5cbiAgICAgKiBAcmV0dXJuIHtSZWFjdC5FbGVtZW50W119IC0gYXJyYXkgb2YgUmVhY3Qgbm9kZXMuXG4gICAgICovXG4gICAgcmVuZGVyUGFnZXM6IGZ1bmN0aW9uICggcGFpciApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKCBwYWlyWzBdLCBwYWlyWzFdICkubWFwKGZ1bmN0aW9uICggcGFnZUluZGV4LCBpbmRleCApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG5cdFx0XHRcdDxQYWdlIGtleT17aW5kZXh9XG5cdFx0XHRcdFx0aXNBY3RpdmU9e3RoaXMucHJvcHMuY3VycmVudCA9PT0gcGFnZUluZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbnVtYmVyZWQtcGFnZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KCk9PnRoaXMuaGFuZGxlUGFnZUNoYW5nZWQocGFnZUluZGV4KX0+e3BhZ2VJbmRleH08L1BhZ2U+XG5cdFx0XHQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgX19yZW5kZXJJY29uOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICBzd2l0Y2godmFsdWUpe1xuICAgICAgICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzdGVwLWJhY2t3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWJhY2t3YXJkIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02NCA0NjhWNDRjMC02LjYgNS40LTEyIDEyLTEyaDQ4YzYuNiAwIDEyIDUuNCAxMiAxMnYxNzYuNGwxOTUuNS0xODFDMzUyLjEgMjIuMyAzODQgMzYuNiAzODQgNjR2Mzg0YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDEzNiAyOTIuN1Y0NjhjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1sZWZ0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1sZWZ0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTcuNSA0NDUuMWwtMjIuMiAyMi4yYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEw3IDI3M2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMMjAxLjQgNDQuN2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi4yIDIyLjJjOS41IDkuNSA5LjMgMjUtLjQgMzQuM0wxMzYuNiAyMTZINDI0YzEzLjMgMCAyNCAxMC43IDI0IDI0djMyYzAgMTMuMy0xMC43IDI0LTI0IDI0SDEzNi42bDEyMC41IDExNC44YzkuOCA5LjMgMTAgMjQuOC40IDM0LjN6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZTZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmYXN0LWJhY2t3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1mYXN0LWJhY2t3YXJkIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDQzNlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjE1MS45TDIzNS41IDcxLjRDMjU2LjEgNTQuMyAyODggNjguNiAyODggOTZ2MTMxLjlMNDU5LjUgNzEuNEM0ODAuMSA1NC4zIDUxMiA2OC42IDUxMiA5NnYzMjBjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMjg4IDI4NS4zVjQxNmMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkw2NCAyODUuM1Y0MzZjMCA2LjYtNS40IDEyLTEyIDEySDEyYy02LjYgMC0xMi01LjQtMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ25leHRTZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmYXN0LWZvcndhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtZm9yd2FyZCBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTEyIDc2djM2MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJWMjg0LjFMMjc2LjUgNDQwLjZjLTIwLjYgMTcuMi01Mi41IDIuOC01Mi41LTI0LjZWMjg0LjFMNTIuNSA0NDAuNkMzMS45IDQ1Ny44IDAgNDQzLjQgMCA0MTZWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMjI0IDIyNi44Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDQ0OCAyMjYuOFY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYXJyb3ctcmlnaHRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXJpZ2h0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTAuNSA2Ni45bDIyLjItMjIuMmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMEw0NDEgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0Ni42IDQ2Ny4zYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuMi0yMi4yYy05LjUtOS41LTkuMy0yNSAuNC0zNC4zTDMxMS40IDI5NkgyNGMtMTMuMyAwLTI0LTEwLjctMjQtMjR2LTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0aDI4Ny40TDE5MC45IDEwMS4yYy05LjgtOS4zLTEwLTI0LjgtLjQtMzQuM3pcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbGFzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0ZXAtZm9yd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc3RlcC1mb3J3YXJkIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODQgNDR2NDI0YzAgNi42LTUuNCAxMi0xMiAxMmgtNDhjLTYuNiAwLTEyLTUuNC0xMi0xMlYyOTEuNmwtMTk1LjUgMTgxQzk1LjkgNDg5LjcgNjQgNDc1LjQgNjQgNDQ4VjY0YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDMxMiAyMTkuM1Y0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgIH1cbiAgICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignZmlyc3QnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ3ByZXYnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbj17dGhpcy5pc1ByZXZNb3JlSGlkZGVuKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vcmVQcmV2UGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdwcmV2U2V0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cblxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclBhZ2VzKCB0aGlzLnZpc2libGVSYW5nZSgpICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW49e3RoaXMuaXNOZXh0TW9yZUhpZGRlbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlTmV4dFBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbmV4dFNldCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCduZXh0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sYXN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMYXN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ2xhc3QnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuXHRcdFx0XHQ8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLnRvdGFsICYmICg8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlclwiPnt0aGlzLnByb3BzLmN1cnJlbnR9IC8ge3RoaXMucHJvcHMudG90YWx9IHt0aGlzLnByb3BzLnRleHRzLnBhZ2V9PC9zcGFuPikgfVxuXHRcdFx0XHQgICAgeyAhIXRoaXMucHJvcHMuY291bnQgJiYgKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50LW51bWJlclwiPnt0aGlzLnByb3BzLmNvdW50fSB7dGhpcy5wcm9wcy50ZXh0cy5yZWNvcmR9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmNvdW50ICYmIDxTZWxlY3QgdmFsdWU9e3RoaXMucHJvcHMucGFnZVNpemV9IGRhdGE9e1s1LCAxMCwgMjAsIDUwLCAxMDAsIDIwMCwgNTAwLCAxMDAwXX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25QYWdlU2l6ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cdFx0XHQ8L25hdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1BhZ2VyQmFyJyxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzRGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnenItcGFnZXItYmFyICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKSArICcgJysgKHRoaXMucHJvcHMuaXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwiKSArICcgJysgKHRoaXMucHJvcHMuaXNEaXNhYmxlZD9cIlwiOlwiZW5hYmxlZFwiKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2VyID0gcmVxdWlyZSgnLi9QYWdlcicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnUGFnZXJWaWV3JyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUluZGV4OiAxLFxuXHRcdFx0cGFnZVNpemU6IDEwLFxuXHRcdFx0dmlzaWJsZVBhZ2U6IDUsXG5cdFx0XHRkYXRhRml4ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHRvdGFsOiAwLFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX19oYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKG5ld1BhZ2Upe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChuZXdQYWdlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgobmV3UGFnZSk7XG5cdFx0fVxuXHR9LFxuXHRzZXRQYWdlSW5kZXg6IGZ1bmN0aW9uIChwYWdlSW5kZXgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3ZpZXdSZW5kZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG5cdFx0aWYodGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHR2YXIgX3ZpZXcgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnZpZXcgfHwgdGhpcy5wcm9wcy52aWV3UmVuZGVyLCB6bi5leHRlbmQoe1xuXHRcdFx0XHRyZXNwb25zZTogcmVzcG9uc2UsXG5cdFx0XHRcdHBhZ2VyVmlldzogdGhpc1xuXHRcdFx0fSwgdGhpcy5zdGF0ZSkpO1xuXG5cdFx0XHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250ZW50XCI+e192aWV3fTwvZGl2Pik7XG5cdFx0fVxuXHRcdHJldHVybiAoPGRpdj7liqDovb3kuK0uLi48L2Rpdj4pO1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5kYXRhSGFuZGxlciAmJiB0aGlzLnByb3BzLmRhdGFIYW5kbGVyKGRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKF9yZXR1cm4sICdvYmplY3QnKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZShfcmV0dXJuKTtcblx0XHR9XG5cdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSkge1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSAhPSAyMDApe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihkYXRhLmRldGFpbCksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBfZGF0YSxcblx0XHRcdFx0XHR0b3RhbDogTWF0aC5jZWlsKF9wYWdlckNvdW50L3RoaXMuc3RhdGUucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfcGFnZXJDb3VudCxcblx0XHRcdFx0XHRjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignVGhlIGRhdGEgaXMgYXJyYXksIGJ1dCBpdCBuZWVkIHJldHVybiBvYmplY3QnKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2RhdGEgPSBkYXRhLmRhdGE7XG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGhpcyk7XG5cdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXSxcblx0XHRcdFx0XHR0b3RhbDogTWF0aC5jZWlsKF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0vdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0sXG5cdFx0XHRcdFx0Y3VycmVudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VJbmRleF1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uRGF0YUxvYWRpbmc6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblxuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZUluZGV4XSA9IHRoaXMuc3RhdGUucGFnZUluZGV4IHx8IDE7XG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlU2l6ZV0gPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwO1xuXG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcztcblxuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0aGlzKTtcblx0fSxcblx0X19sb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPGxvYWRlci5EYXRhTG9hZGVyIGxvYWRlcj1cIndhdmVcIiB0aXRsZT0nTG9hZGluZy4uLicgLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZXItdmlld1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5kYXRhRml4ZWR9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhICYmIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3ZpZXdSZW5kZXJ9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9eygpPT50aGlzLl9fbG9hZGluZ1JlbmRlcigpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uRGF0YUxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRGF0YUxvYWRlZH0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXctcGFnZXJcIj5cblx0XHRcdFx0XHQ8UGFnZXIgdG90YWw9e01hdGguY2VpbCh0aGlzLnN0YXRlLmNvdW50L3RoaXMucHJvcHMucGFnZVNpemUpfVxuXHRcdFx0XHRcdFx0Y291bnQ9e3RoaXMuc3RhdGUuY291bnR9XG5cdFx0XHRcdFx0XHRjdXJyZW50PXt0aGlzLnN0YXRlLnBhZ2VJbmRleH1cblx0XHRcdFx0XHRcdHBhZ2VTaXplPXt0aGlzLnByb3BzLnBhZ2VTaXplfVxuXHRcdFx0XHRcdFx0dmlzaWJsZVBhZ2VzPXt0aGlzLnByb3BzLnZpc2libGVQYWdlc31cblx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZWQ9e3RoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1NpbXBsZVBhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAn6aG1JyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6ICfmnaEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhU3RlcEJhY2t3YXJkJywgXG4gICAgICAgICAgICAgICAgcHJldjogJ2ZhQXJyb3dMZWZ0JyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmFBcnJvd1JpZ2h0JyxcbiAgICAgICAgICAgICAgICBsYXN0OiAnZmFTdGVwRm9yd2FyZCdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gICAgfSxcbiAgICBoYW5kbGVQcmV2aW91c1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcbiAgICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgICB9LFxuICAgIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgICB9LFxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcbiAgICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50ID49IHRoaXMucHJvcHMudG90YWw7XG4gICAgfSxcbiAgICBfX3JlbmRlckljb246IGZ1bmN0aW9uICh2YWx1ZSl7XG4gICAgICAgIHN3aXRjaCh2YWx1ZSl7XG4gICAgICAgICAgICBjYXNlICdmaXJzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0ZXAtYmFja3dhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtYmFja3dhcmQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTY0IDQ2OFY0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEydjE3Ni40bDE5NS41LTE4MUMzNTIuMSAyMi4zIDM4NCAzNi42IDM4NCA2NHYzODRjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMTM2IDI5Mi43VjQ2OGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAncHJldic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LWxlZnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LWxlZnQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAncHJldlNldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZhc3QtYmFja3dhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtYmFja3dhcmQgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgNDM2Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTUxLjlMMjM1LjUgNzEuNEMyNTYuMSA1NC4zIDI4OCA2OC42IDI4OCA5NnYxMzEuOUw0NTkuNSA3MS40QzQ4MC4xIDU0LjMgNTEyIDY4LjYgNTEyIDk2djMyMGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwyODggMjg1LjNWNDE2YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDY0IDI4NS4zVjQzNmMwIDYuNi01LjQgMTItMTIgMTJIMTJjLTYuNiAwLTEyLTUuNC0xMi0xMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbmV4dFNldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZhc3QtZm9yd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1mb3J3YXJkIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MTIgNzZ2MzYwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMlYyODQuMUwyNzYuNSA0NDAuNmMtMjAuNiAxNy4yLTUyLjUgMi44LTUyLjUtMjQuNlYyODQuMUw1Mi41IDQ0MC42QzMxLjkgNDU3LjggMCA0NDMuNCAwIDQxNlY5NmMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkwyMjQgMjI2LjhWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMNDQ4IDIyNi44Vjc2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctcmlnaHQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5MC41IDY2LjlsMjIuMi0yMi4yYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwTDQ0MSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQ2LjYgNDY3LjNjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1IC40LTM0LjNMMzExLjQgMjk2SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRoMjg3LjRMMTkwLjkgMTAxLjJjLTkuOC05LjMtMTAtMjQuOC0uNC0zNC4zelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic3RlcC1mb3J3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWZvcndhcmQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM4NCA0NHY0MjRjMCA2LjYtNS40IDEyLTEyIDEyaC00OGMtNi42IDAtMTItNS40LTEyLTEyVjI5MS42bC0xOTUuNSAxODFDOTUuOSA0ODkuNyA2NCA0NzUuNCA2NCA0NDhWNjRjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMzEyIDIxOS4zVjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgfVxuICAgIH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17XCJ6ci1zaW1wbGUtcGFnZXIgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJwYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpcnN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdmaXJzdCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJldmlvdXNQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbigncHJldicpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbmV4dCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGFzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdsYXN0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2U6IHJlcXVpcmUoJy4vUGFnZScpLFxuICAgIFBhZ2VyOiByZXF1aXJlKCcuL1BhZ2VyJyksXG4gICAgUGFnZXJCYXI6IHJlcXVpcmUoJy4vUGFnZXJCYXInKSxcbiAgICBQYWdlclZpZXc6IHJlcXVpcmUoJy4vUGFnZXJWaWV3JyksXG4gICAgU2ltcGxlUGFnZXI6IHJlcXVpcmUoJy4vU2ltcGxlUGFnZXInKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=