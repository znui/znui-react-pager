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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJfX29uQ2xpY2siLCJwcm9wcyIsImlzRGlzYWJsZWQiLCJvbkNsaWNrIiwicmVuZGVyIiwiaXNIaWRkZW4iLCJjbGFzc05hbWUiLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiUGFnZSIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJyZXMiLCJpIiwicHVzaCIsIlNlbGVjdCIsImdldERlZmF1bHRQcm9wcyIsImdldEluaXRpYWxTdGF0ZSIsIl9fb25TZWxlY3RDaGFuZ2UiLCJldmVudCIsIm9uQ2hhbmdlIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0ZSIsInN0eWxlIiwidmFsdWUiLCJfX29uU2VsZWN0Q2xpY2siLCJwbGFjZWhvbGRlciIsImRhdGEiLCJtYXAiLCJpbmRleCIsInRvdGFsIiwiY291bnQiLCJjdXJyZW50IiwidmlzaWJsZVBhZ2VzIiwidGV4dHMiLCJwYWdlIiwicmVjb3JkIiwiYWN0aXZlUGFnZSIsImhhbmRsZUZpcnN0UGFnZSIsImlzUHJldkRpc2FibGVkIiwiaGFuZGxlUGFnZUNoYW5nZWQiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImlzTmV4dERpc2FibGVkIiwiaGFuZGxlTGFzdFBhZ2UiLCJoYW5kbGVNb3JlUHJldlBhZ2VzIiwiaGFuZGxlTW9yZU5leHRQYWdlcyIsImJsb2NrcyIsImNhbGNCbG9ja3MiLCJzaXplIiwicGFnZUluZGV4Iiwib25QYWdlQ2hhbmdlZCIsIk1hdGgiLCJjZWlsIiwiaXNQcmV2TW9yZUhpZGRlbiIsImlzTmV4dE1vcmVIaWRkZW4iLCJ2aXNpYmxlUmFuZ2UiLCJkZWx0YSIsInJlbmRlclBhZ2VzIiwicGFpciIsImJpbmQiLCJfX3JlbmRlckljb24iLCJwYWdlU2l6ZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJQYWdlciIsImxvYWRlciIsInZpc2libGVQYWdlIiwiZGF0YUZpeGVkIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJfcmV0dXJuIiwic2V0UGFnZUluZGV4IiwicmVmcmVzaCIsIl9fdmlld1JlbmRlciIsInJlc3BvbnNlIiwiX3ZpZXciLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJ2aWV3Iiwidmlld1JlbmRlciIsInpuIiwiZXh0ZW5kIiwicGFnZXJWaWV3IiwiX19vbkRhdGFMb2FkZWQiLCJkYXRhSGFuZGxlciIsImlzIiwic2V0U3RhdGUiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiZGV0YWlsIiwicmVzdWx0IiwiX2RhdGEiLCJfcGFnZXJDb3VudCIsIm9uRGF0YUxvYWRlZCIsInRhYmxlIiwia2V5TWFwcyIsIl9fb25EYXRhTG9hZGluZyIsImxpZnljeWNsZSIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJkZWVwQXNzaWduIiwicGFyYW1zIiwiX19vbkRhdGFDcmVhdGVkIiwib25EYXRhQ3JlYXRlZCIsIl9fbG9hZGluZ1JlbmRlciIsImljb25zIiwiZmlyc3QiLCJwcmV2IiwibmV4dCIsImxhc3QiLCJQYWdlckJhciIsIlBhZ2VyVmlldyIsIlNpbXBsZVBhZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QUF1QjtBQUFNLGVBQVMsRUFBQztBQUFoQixPQUFnQyxLQUFLaEMsS0FBTCxDQUFXZ0MsS0FBM0MsT0FBbUQsS0FBS2hDLEtBQUwsQ0FBV21DLEtBQVgsQ0FBaUJFLE1BQXBFLENBRjdCLENBZGhCLGVBbUJnQixvQkFBQyxJQUFEO0FBQ0ksZUFBUyxFQUFDLGVBRGQ7QUFFSSxnQkFBVSxFQUFFLEtBQUtPLGNBQUwsRUFGaEI7QUFHSSxhQUFPLEVBQUUsS0FBS0Q7QUFIbEIsT0FJSyxLQUFLbUIsWUFBTCxDQUFrQixNQUFsQixDQUpMLENBbkJoQixlQXlCZ0Isb0JBQUMsSUFBRDtBQUNJLGVBQVMsRUFBQyxlQURkO0FBRUksZ0JBQVUsRUFBRSxLQUFLbEIsY0FBTCxFQUZoQjtBQUdJLGFBQU8sRUFBRSxLQUFLQztBQUhsQixPQUlLLEtBQUtpQixZQUFMLENBQWtCLE1BQWxCLENBSkwsQ0F6QmhCLENBREQsQ0FERDtBQW9DQTtBQWxHaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNIQW5FLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiWSxNQUFJLEVBQUVkLG1CQUFPLENBQUMseUJBQUQsQ0FEQTtBQUVidUUsT0FBSyxFQUFFdkUsbUJBQU8sQ0FBQywyQkFBRCxDQUZEO0FBR2J1SCxVQUFRLEVBQUV2SCxtQkFBTyxDQUFDLGlDQUFELENBSEo7QUFJYndILFdBQVMsRUFBRXhILG1CQUFPLENBQUMsbUNBQUQsQ0FKTDtBQUtieUgsYUFBVyxFQUFFekgsbUJBQU8sQ0FBQyx1Q0FBRDtBQUxQLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGlDQUFpQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1BhZ2UnLFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNEaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBjbGFzc05hbWU9eyd6ci1wYWdlci1wYWdlICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKSArICcgJysgKHRoaXMucHJvcHMuaXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwiKSArICcgJysgKHRoaXMucHJvcHMuaXNEaXNhYmxlZD9cIlwiOlwiZW5hYmxlZFwiKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpO1xuXG5mdW5jdGlvbiByYW5nZSAoIHN0YXJ0LCBlbmQgKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAoIHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKyApIHtcbiAgICAgICAgcmVzLnB1c2goIGkgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG52YXIgU2VsZWN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonUGFnZXJTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICBcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICBcblx0XHR9XG5cdH0sXG4gICAgX19vblNlbGVjdENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJwYWdlLXNpemUtc2VsZWN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHt9LCB0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25TZWxlY3RDaGFuZ2V9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblNlbGVjdENsaWNrfT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZD57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cblx0XHRcdFx0e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt2YWx1ZX0+e3ZhbHVlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHQ8L3NlbGVjdD5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidQYWdlcicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmlzaWJsZVBhZ2VzOiA1LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIHRleHRzOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogJ+mhtScsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiAn5p2hJ1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZVBhZ2U6IHRoaXMucHJvcHMuYWN0aXZlUGFnZVxuXHRcdH1cblx0fSxcblx0aGFuZGxlRmlyc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKDEpO1xuICAgIH0sXG4gICAgaGFuZGxlUHJldmlvdXNQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTmV4dFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50ICsgMSk7XG4gICAgfSxcbiAgICBoYW5kbGVMYXN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy50b3RhbCk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vcmVQcmV2UGFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlTW9yZU5leHRQYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoKGJsb2Nrcy5jdXJyZW50ICogYmxvY2tzLnNpemUpICsgMSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmVQYWdlID09IHBhZ2VJbmRleCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVQYWdlID0gcGFnZUluZGV4O1xuXHRcdHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQocGFnZUluZGV4KTtcbiAgICB9LFxuXG4gICAgY2FsY0Jsb2NrczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IE1hdGguY2VpbCh0aGlzLnByb3BzLnRvdGFsL3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzKSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IE1hdGguY2VpbCh0aGlzLnByb3BzLmN1cnJlbnQvdGhpcy5wcm9wcy52aXNpYmxlUGFnZXMpLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy52aXNpYmxlUGFnZXNcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgaXNQcmV2RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA8PSAxO1xuICAgIH0sXG5cbiAgICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50ID49IHRoaXMucHJvcHMudG90YWw7XG4gICAgfSxcblxuICAgIGlzUHJldk1vcmVIaWRkZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICByZXR1cm4gKCBibG9ja3MudG90YWwgPT09IDEgKSB8fCAoIGJsb2Nrcy5jdXJyZW50ID09PSAxICk7XG4gICAgfSxcblxuICAgIGlzTmV4dE1vcmVIaWRkZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICByZXR1cm4gKCBibG9ja3MudG90YWwgPT09IDAgKSB8fCAoIGJsb2Nrcy5jdXJyZW50ID09PSBibG9ja3MudG90YWwgKTtcbiAgICB9LFxuXG4gICAgdmlzaWJsZVJhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgID0gdGhpcy5jYWxjQmxvY2tzKCksXG5cdFx0XHRzdGFydCAgID0gKGJsb2Nrcy5jdXJyZW50IC0gMSkgKiBibG9ja3Muc2l6ZSxcblx0XHRcdGRlbHRhICAgPSB0aGlzLnByb3BzLnRvdGFsIC0gc3RhcnQsXG5cdFx0XHRlbmQgICAgID0gc3RhcnQgKyAoIChkZWx0YSA+IGJsb2Nrcy5zaXplKSA/IGJsb2Nrcy5zaXplIDogZGVsdGEgKTtcblxuICAgICAgICByZXR1cm4gWyBzdGFydCArIDEsIGVuZCArIDEgXTtcbiAgICB9LFxuXG5cdC8qKlxuICAgICAqICMjIyByZW5kZXJQYWdlcygpXG4gICAgICogUmVuZGVycyBibG9jayBvZiBwYWdlcycgYnV0dG9ucyB3aXRoIG51bWJlcnMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gcmFuZ2UgLSBwYWlyIG9mIFtzdGFydCwgZnJvbV0sIGBmcm9tYCAtIG5vdCBpbmNsdXNpdmUuXG4gICAgICogQHJldHVybiB7UmVhY3QuRWxlbWVudFtdfSAtIGFycmF5IG9mIFJlYWN0IG5vZGVzLlxuICAgICAqL1xuICAgIHJlbmRlclBhZ2VzOiBmdW5jdGlvbiAoIHBhaXIgKSB7XG4gICAgICAgIHJldHVybiByYW5nZSggcGFpclswXSwgcGFpclsxXSApLm1hcChmdW5jdGlvbiAoIHBhZ2VJbmRleCwgaW5kZXggKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuXHRcdFx0XHQ8UGFnZSBrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGlzQWN0aXZlPXt0aGlzLnByb3BzLmN1cnJlbnQgPT09IHBhZ2VJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW51bWJlcmVkLXBhZ2VcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCl9PntwYWdlSW5kZXh9PC9QYWdlPlxuXHRcdFx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuICAgIF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgc3dpdGNoKHZhbHVlKXtcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic3RlcC1iYWNrd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc3RlcC1iYWNrd2FyZCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNjQgNDY4VjQ0YzAtNi42IDUuNC0xMiAxMi0xMmg0OGM2LjYgMCAxMiA1LjQgMTIgMTJ2MTc2LjRsMTk1LjUtMTgxQzM1Mi4xIDIyLjMgMzg0IDM2LjYgMzg0IDY0djM4NGMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkwxMzYgMjkyLjdWNDY4YzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYXJyb3ctbGVmdFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctbGVmdCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU3LjUgNDQ1LjFsLTIyLjIgMjIuMmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMNyAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDIwMS40IDQ0LjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuMiAyMi4yYzkuNSA5LjUgOS4zIDI1LS40IDM0LjNMMTM2LjYgMjE2SDQyNGMxMy4zIDAgMjQgMTAuNyAyNCAyNHYzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMzYuNmwxMjAuNSAxMTQuOGM5LjggOS4zIDEwIDI0LjguNCAzNC4zelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICdwcmV2U2V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZmFzdC1iYWNrd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmFzdC1iYWNrd2FyZCBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMCA0MzZWNzZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnYxNTEuOUwyMzUuNSA3MS40QzI1Ni4xIDU0LjMgMjg4IDY4LjYgMjg4IDk2djEzMS45TDQ1OS41IDcxLjRDNDgwLjEgNTQuMyA1MTIgNjguNiA1MTIgOTZ2MzIwYzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDI4OCAyODUuM1Y0MTZjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMNjQgMjg1LjNWNDM2YzAgNi42LTUuNCAxMi0xMiAxMkgxMmMtNi42IDAtMTItNS40LTEyLTEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICduZXh0U2V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZmFzdC1mb3J3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1mYXN0LWZvcndhcmQgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUxMiA3NnYzNjBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEyVjI4NC4xTDI3Ni41IDQ0MC42Yy0yMC42IDE3LjItNTIuNSAyLjgtNTIuNS0yNC42VjI4NC4xTDUyLjUgNDQwLjZDMzEuOSA0NTcuOCAwIDQ0My40IDAgNDE2Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDIyNCAyMjYuOFY5NmMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkw0NDggMjI2LjhWNzZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LXJpZ2h0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1yaWdodCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkwLjUgNjYuOWwyMi4yLTIyLjJjOS40LTkuNCAyNC42LTkuNCAzMy45IDBMNDQxIDIzOWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyNDYuNiA0NjcuM2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjItMjIuMmMtOS41LTkuNS05LjMtMjUgLjQtMzQuM0wzMTEuNCAyOTZIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0di0zMmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgyODcuNEwxOTAuOSAxMDEuMmMtOS44LTkuMy0xMC0yNC44LS40LTM0LjN6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzdGVwLWZvcndhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXN0ZXAtZm9yd2FyZCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzg0IDQ0djQyNGMwIDYuNi01LjQgMTItMTIgMTJoLTQ4Yy02LjYgMC0xMi01LjQtMTItMTJWMjkxLjZsLTE5NS41IDE4MUM5NS45IDQ4OS43IDY0IDQ3NS40IDY0IDQ0OFY2NGMwLTI3LjQgMzEuOS00MS43IDUyLjUtMjQuNkwzMTIgMjE5LjNWNDRjMC02LjYgNS40LTEyIDEyLTEyaDQ4YzYuNiAwIDEyIDUuNCAxMiAxMnpcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICB9XG4gICAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17XCJ6ci1wYWdlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlyc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpcnN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ2ZpcnN0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdwcmV2Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW49e3RoaXMuaXNQcmV2TW9yZUhpZGRlbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlUHJldlBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbigncHJldlNldCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJQYWdlcyggdGhpcy52aXNpYmxlUmFuZ2UoKSApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuPXt0aGlzLmlzTmV4dE1vcmVIaWRkZW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9yZU5leHRQYWdlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ25leHRTZXQnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbmV4dCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGFzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX19yZW5kZXJJY29uKCdsYXN0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cblx0XHRcdFx0PC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy50b3RhbCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1udW1iZXJcIj57dGhpcy5wcm9wcy5jdXJyZW50fSAvIHt0aGlzLnByb3BzLnRvdGFsfSB7dGhpcy5wcm9wcy50ZXh0cy5wYWdlfTwvc3Bhbj4pIH1cblx0XHRcdFx0ICAgIHsgISF0aGlzLnByb3BzLmNvdW50ICYmICg8c3BhbiBjbGFzc05hbWU9XCJjb3VudC1udW1iZXJcIj57dGhpcy5wcm9wcy5jb3VudH0ge3RoaXMucHJvcHMudGV4dHMucmVjb3JkfTwvc3Bhbj4pIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5jb3VudCAmJiA8U2VsZWN0IHZhbHVlPXt0aGlzLnByb3BzLnBhZ2VTaXplfSBkYXRhPXtbNSwgMTAsIDIwLCA1MCwgMTAwLCAyMDAsIDUwMCwgMTAwMF19IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uUGFnZVNpemVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdQYWdlckJhcicsXG5cdF9fb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0Rpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J3pyLXBhZ2VyLWJhciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lfHwnJykgKyAnICcrICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikgKyAnICcrICh0aGlzLnByb3BzLmlzRGlzYWJsZWQ/XCJcIjpcImVuYWJsZWRcIil9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlciA9IHJlcXVpcmUoJy4vUGFnZXInKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1BhZ2VyVmlldycsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VJbmRleDogMSxcblx0XHRcdHBhZ2VTaXplOiAxMCxcblx0XHRcdHZpc2libGVQYWdlOiA1LFxuXHRcdFx0ZGF0YUZpeGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXhcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIF9faGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIChuZXdQYWdlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KG5ld1BhZ2UpO1xuXHRcdH1cblx0fSxcblx0c2V0UGFnZUluZGV4OiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblx0fSxcblx0X192aWV3UmVuZGVyOiBmdW5jdGlvbiAocmVzcG9uc2Upe1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0dmFyIF92aWV3ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy52aWV3IHx8IHRoaXMucHJvcHMudmlld1JlbmRlciwgem4uZXh0ZW5kKHtcblx0XHRcdFx0cmVzcG9uc2U6IHJlc3BvbnNlLFxuXHRcdFx0XHRwYWdlclZpZXc6IHRoaXNcblx0XHRcdH0sIHRoaXMuc3RhdGUpKTtcblxuXHRcdFx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGVudFwiPntfdmlld308L2Rpdj4pO1xuXHRcdH1cblx0XHRyZXR1cm4gKDxkaXY+5Yqg6L295LitLi4uPC9kaXY+KTtcblx0fSxcblx0X19vbkRhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuZGF0YUhhbmRsZXIgJiYgdGhpcy5wcm9wcy5kYXRhSGFuZGxlcihkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih6bi5pcyhfcmV0dXJuLCAnb2JqZWN0Jykpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoX3JldHVybik7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLmNvZGUpIHtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLmNvZGUgIT0gMjAwKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoZGF0YS5kZXRhaWwpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLmNvZGUgPT0gMjAwKXtcblx0XHRcdFx0ZGF0YSA9IGRhdGEucmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0aWYoIXpuLmlzKGRhdGEsICdhcnJheScpKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJUYWJsZVBhZ2VyIENvbXBvbmVudCBEYXRhIFR5cGUgRXJyb3IuXCIpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGFbMF0sXG5cdFx0XHRcdF9wYWdlckNvdW50ID0gZGF0YVsxXVswXS5jb3VudDtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGEsXG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfcGFnZXJDb3VudC90aGlzLnN0YXRlLnBhZ2VTaXplKSxcblx0XHRcdFx0XHRjb3VudDogX3BhZ2VyQ291bnQsXG5cdFx0XHRcdFx0Y3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdhcnJheScpKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSBkYXRhIGlzIGFycmF5LCBidXQgaXQgbmVlZCByZXR1cm4gb2JqZWN0JyksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YS5kYXRhO1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMuZGF0YV0sXG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMuc3RhdGUucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vbkRhdGFMb2FkaW5nOiBmdW5jdGlvbiAoZGF0YSwgbGlmeWN5Y2xlKXtcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXG5cdFx0XHRfcGFyYW1zID0ge30sXG5cdFx0XHRfa2V5TWFwcyA9IHpuLmRlZXBBc3NpZ24oe1xuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxuXHRcdFx0XHRwYWdlSW5kZXg6ICdwYWdlSW5kZXgnLFxuXHRcdFx0XHRwYWdlU2l6ZTogJ3BhZ2VTaXplJyxcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmtleU1hcHMpO1xuXG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMDtcblxuXHRcdGlmKF9tZXRob2QgPT0gJ2dldCcpe1xuXHRcdFx0ZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuXHRcdFx0XHRwYXJhbXM6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0ZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuXHRcdFx0XHRkYXRhOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHM7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmeWN5Y2xlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fbG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9J0xvYWRpbmcuLi4nIC8+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBhZ2VyLXZpZXdcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZGF0YUZpeGVkfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YSAmJiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9e3RoaXMuX192aWV3UmVuZGVyfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nUmVuZGVyPXsoKT0+dGhpcy5fX2xvYWRpbmdSZW5kZXIoKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vbkRhdGFMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkRhdGFDcmVhdGVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vbkRhdGFMb2FkZWR9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWV3LXBhZ2VyXCI+XG5cdFx0XHRcdFx0PFBhZ2VyIHRvdGFsPXtNYXRoLmNlaWwodGhpcy5zdGF0ZS5jb3VudC90aGlzLnByb3BzLnBhZ2VTaXplKX1cblx0XHRcdFx0XHRcdGNvdW50PXt0aGlzLnN0YXRlLmNvdW50fVxuXHRcdFx0XHRcdFx0Y3VycmVudD17dGhpcy5zdGF0ZS5wYWdlSW5kZXh9XG5cdFx0XHRcdFx0XHRwYWdlU2l6ZT17dGhpcy5wcm9wcy5wYWdlU2l6ZX1cblx0XHRcdFx0XHRcdHZpc2libGVQYWdlcz17dGhpcy5wcm9wcy52aXNpYmxlUGFnZXN9XG5cdFx0XHRcdFx0XHRvblBhZ2VDaGFuZ2VkPXt0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWR9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2UgPSByZXF1aXJlKCcuL1BhZ2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidTaW1wbGVQYWdlcicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIHRleHRzOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogJ+mhtScsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiAn5p2hJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgZmlyc3Q6ICdmYVN0ZXBCYWNrd2FyZCcsIFxuICAgICAgICAgICAgICAgIHByZXY6ICdmYUFycm93TGVmdCcsXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhQXJyb3dSaWdodCcsXG4gICAgICAgICAgICAgICAgbGFzdDogJ2ZhU3RlcEZvcndhcmQnXG4gICAgICAgICAgICB9XG5cdFx0fTtcblx0fSxcblx0aGFuZGxlRmlyc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKDEpO1xuICAgIH0sXG4gICAgaGFuZGxlUHJldmlvdXNQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTmV4dFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50ICsgMSk7XG4gICAgfSxcbiAgICBoYW5kbGVMYXN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy50b3RhbCk7XG4gICAgfSxcbiAgICBoYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKCBwYWdlSW5kZXggKSB7XG5cdFx0dGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChwYWdlSW5kZXgpO1xuICAgIH0sXG4gICAgaXNQcmV2RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA8PSAxO1xuICAgIH0sXG4gICAgaXNOZXh0RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA+PSB0aGlzLnByb3BzLnRvdGFsO1xuICAgIH0sXG4gICAgX19yZW5kZXJJY29uOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICBzd2l0Y2godmFsdWUpe1xuICAgICAgICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzdGVwLWJhY2t3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zdGVwLWJhY2t3YXJkIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02NCA0NjhWNDRjMC02LjYgNS40LTEyIDEyLTEyaDQ4YzYuNiAwIDEyIDUuNCAxMiAxMnYxNzYuNGwxOTUuNS0xODFDMzUyLjEgMjIuMyAzODQgMzYuNiAzODQgNjR2Mzg0YzAgMjcuNC0zMS45IDQxLjctNTIuNSAyNC42TDEzNiAyOTIuN1Y0NjhjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1sZWZ0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1sZWZ0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTcuNSA0NDUuMWwtMjIuMiAyMi4yYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEw3IDI3M2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMMjAxLjQgNDQuN2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi4yIDIyLjJjOS41IDkuNSA5LjMgMjUtLjQgMzQuM0wxMzYuNiAyMTZINDI0YzEzLjMgMCAyNCAxMC43IDI0IDI0djMyYzAgMTMuMy0xMC43IDI0LTI0IDI0SDEzNi42bDEyMC41IDExNC44YzkuOCA5LjMgMTAgMjQuOC40IDM0LjN6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZTZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmYXN0LWJhY2t3YXJkXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1mYXN0LWJhY2t3YXJkIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0wIDQzNlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjE1MS45TDIzNS41IDcxLjRDMjU2LjEgNTQuMyAyODggNjguNiAyODggOTZ2MTMxLjlMNDU5LjUgNzEuNEM0ODAuMSA1NC4zIDUxMiA2OC42IDUxMiA5NnYzMjBjMCAyNy40LTMxLjkgNDEuNy01Mi41IDI0LjZMMjg4IDI4NS4zVjQxNmMwIDI3LjQtMzEuOSA0MS43LTUyLjUgMjQuNkw2NCAyODUuM1Y0MzZjMCA2LjYtNS40IDEyLTEyIDEySDEyYy02LjYgMC0xMi01LjQtMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjtcbiAgICAgICAgICAgIGNhc2UgJ25leHRTZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmYXN0LWZvcndhcmRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZhc3QtZm9yd2FyZCBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTEyIDc2djM2MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJWMjg0LjFMMjc2LjUgNDQwLjZjLTIwLjYgMTcuMi01Mi41IDIuOC01Mi41LTI0LjZWMjg0LjFMNTIuNSA0NDAuNkMzMS45IDQ1Ny44IDAgNDQzLjQgMCA0MTZWOTZjMC0yNy40IDMxLjktNDEuNyA1Mi41LTI0LjZMMjI0IDIyNi44Vjk2YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDQ0OCAyMjYuOFY3NmMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYXJyb3ctcmlnaHRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXJpZ2h0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTAuNSA2Ni45bDIyLjItMjIuMmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMEw0NDEgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0Ni42IDQ2Ny4zYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuMi0yMi4yYy05LjUtOS41LTkuMy0yNSAuNC0zNC4zTDMxMS40IDI5NkgyNGMtMTMuMyAwLTI0LTEwLjctMjQtMjR2LTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0aDI4Ny40TDE5MC45IDEwMS4yYy05LjgtOS4zLTEwLTI0LjgtLjQtMzQuM3pcIj48L3BhdGg+PC9zdmc+O1xuICAgICAgICAgICAgY2FzZSAnbGFzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0ZXAtZm9yd2FyZFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc3RlcC1mb3J3YXJkIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODQgNDR2NDI0YzAgNi42LTUuNCAxMi0xMiAxMmgtNDhjLTYuNiAwLTEyLTUuNC0xMi0xMlYyOTEuNmwtMTk1LjUgMTgxQzk1LjkgNDg5LjcgNjQgNDc1LjQgNjQgNDQ4VjY0YzAtMjcuNCAzMS45LTQxLjcgNTIuNS0yNC42TDMxMiAyMTkuM1Y0NGMwLTYuNiA1LjQtMTIgMTItMTJoNDhjNi42IDAgMTIgNS40IDEyIDEyelwiPjwvcGF0aD48L3N2Zz47XG4gICAgICAgIH1cbiAgICB9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e1wienItc2ltcGxlLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignZmlyc3QnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ3ByZXYnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLnRvdGFsICYmICg8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlclwiPnt0aGlzLnByb3BzLmN1cnJlbnR9IC8ge3RoaXMucHJvcHMudG90YWx9IHt0aGlzLnByb3BzLnRleHRzLnBhZ2V9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMuY291bnQgJiYgKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50LW51bWJlclwiPnt0aGlzLnByb3BzLmNvdW50fSB7dGhpcy5wcm9wcy50ZXh0cy5yZWNvcmR9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fX3JlbmRlckljb24oJ25leHQnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxhc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxhc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9fcmVuZGVySWNvbignbGFzdCcpfVxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L25hdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQYWdlOiByZXF1aXJlKCcuL1BhZ2UnKSxcbiAgICBQYWdlcjogcmVxdWlyZSgnLi9QYWdlcicpLFxuICAgIFBhZ2VyQmFyOiByZXF1aXJlKCcuL1BhZ2VyQmFyJyksXG4gICAgUGFnZXJWaWV3OiByZXF1aXJlKCcuL1BhZ2VyVmlldycpLFxuICAgIFNpbXBsZVBhZ2VyOiByZXF1aXJlKCcuL1NpbXBsZVBhZ2VyJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9