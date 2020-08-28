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

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

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
        page: 'Pages',
        record: 'Records'
      },
      icons: {
        first: 'faStepBackward',
        prev: 'faArrowLeft',
        prevSet: 'faFastBackward',
        nextSet: 'faFastForward',
        next: 'faArrowRight',
        last: 'faStepForward'
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
  render: function render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, this.props.icons['first'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['first']
    })), this.props.icons['prev'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['prev']
    })), this.props.icons['prevSet'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-more",
      isHidden: this.isPrevMoreHidden(),
      onClick: this.handleMorePrevPages
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['prevSet']
    })), this.renderPages(this.visibleRange()), this.props.icons['nextSet'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-more",
      isHidden: this.isNextMoreHidden(),
      onClick: this.handleMoreNextPages
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['nextSet']
    })), this.props.icons['next'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['next']
    })), this.props.icons['last'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['last']
    }))), /*#__PURE__*/React.createElement("div", {
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

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

module.exports = React.createClass({
  displayName: 'SimplePager',
  getDefaultProps: function getDefaultProps() {
    return {
      total: 0,
      count: 0,
      current: 0,
      className: '',
      texts: {
        page: 'Pages',
        record: 'Records'
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
  render: function render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-simple-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, this.props.icons['first'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['first']
    })), this.props.icons['prev'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['prev']
    })), /*#__PURE__*/React.createElement("li", {
      className: "number"
    }, !!this.props.total && /*#__PURE__*/React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && /*#__PURE__*/React.createElement("span", {
      className: "count-number"
    }, this.props.count, " ", this.props.texts.record)), this.props.icons['next'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['next']
    })), this.props.icons['last'] && /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icons['last']
    }))));
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

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiX19vbkNsaWNrIiwicHJvcHMiLCJpc0Rpc2FibGVkIiwib25DbGljayIsInJlbmRlciIsImlzSGlkZGVuIiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsIlBhZ2UiLCJTVkdJY29uIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsInJlcyIsImkiLCJwdXNoIiwiZ2V0RGVmYXVsdFByb3BzIiwidG90YWwiLCJjb3VudCIsImN1cnJlbnQiLCJ2aXNpYmxlUGFnZXMiLCJ0ZXh0cyIsInBhZ2UiLCJyZWNvcmQiLCJpY29ucyIsImZpcnN0IiwicHJldiIsInByZXZTZXQiLCJuZXh0U2V0IiwibmV4dCIsImxhc3QiLCJnZXRJbml0aWFsU3RhdGUiLCJoYW5kbGVGaXJzdFBhZ2UiLCJpc1ByZXZEaXNhYmxlZCIsImhhbmRsZVBhZ2VDaGFuZ2VkIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJpc05leHREaXNhYmxlZCIsImhhbmRsZUxhc3RQYWdlIiwiaGFuZGxlTW9yZVByZXZQYWdlcyIsImhhbmRsZU1vcmVOZXh0UGFnZXMiLCJibG9ja3MiLCJjYWxjQmxvY2tzIiwic2l6ZSIsInBhZ2VJbmRleCIsIm9uUGFnZUNoYW5nZWQiLCJNYXRoIiwiY2VpbCIsImlzUHJldk1vcmVIaWRkZW4iLCJpc05leHRNb3JlSGlkZGVuIiwidmlzaWJsZVJhbmdlIiwiZGVsdGEiLCJyZW5kZXJQYWdlcyIsInBhaXIiLCJtYXAiLCJpbmRleCIsImJpbmQiLCJQYWdlciIsImxvYWRlciIsInBhZ2VTaXplIiwidmlzaWJsZVBhZ2UiLCJkYXRhRml4ZWQiLCJkYXRhIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJfcmV0dXJuIiwic2V0UGFnZUluZGV4Iiwic3RhdGUiLCJyZWZyZXNoIiwiX192aWV3UmVuZGVyIiwicmVzcG9uc2UiLCJfdmlldyIsInJlYWN0IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwidmlldyIsInZpZXdSZW5kZXIiLCJ6biIsImV4dGVuZCIsInBhZ2VyVmlldyIsIl9fb25EYXRhTG9hZGVkIiwiZGF0YUhhbmRsZXIiLCJzZXRTdGF0ZSIsIl9fb25EYXRhTG9hZGluZyIsImxpZnljeWNsZSIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJkZWVwQXNzaWduIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25EYXRhQ3JlYXRlZCIsIm9uRGF0YUNyZWF0ZWQiLCJfX2xvYWRpbmdSZW5kZXIiLCJjbGFzc25hbWUiLCJzdHlsZSIsIlBhZ2VyQmFyIiwiUGFnZXJWaWV3IiwiU2ltcGxlUGFnZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7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IjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1BhZ2UnLFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNEaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBjbGFzc05hbWU9eyd6ci1wYWdlci1wYWdlICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKSArICcgJysgKHRoaXMucHJvcHMuaXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwiKSArICcgJysgKHRoaXMucHJvcHMuaXNEaXNhYmxlZD9cIlwiOlwiZW5hYmxlZFwiKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xuXG5mdW5jdGlvbiByYW5nZSAoIHN0YXJ0LCBlbmQgKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAoIHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKyApIHtcbiAgICAgICAgcmVzLnB1c2goIGkgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1BhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2aXNpYmxlUGFnZXM6IDUsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAnUGFnZXMnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogJ1JlY29yZHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhU3RlcEJhY2t3YXJkJywgXG4gICAgICAgICAgICAgICAgcHJldjogJ2ZhQXJyb3dMZWZ0JyxcbiAgICAgICAgICAgICAgICBwcmV2U2V0OiAnZmFGYXN0QmFja3dhcmQnLFxuICAgICAgICAgICAgICAgIG5leHRTZXQ6ICdmYUZhc3RGb3J3YXJkJyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmFBcnJvd1JpZ2h0JyxcbiAgICAgICAgICAgICAgICBsYXN0OiAnZmFTdGVwRm9yd2FyZCdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cblx0XHR9XG5cdH0sXG5cdGhhbmRsZUZpcnN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgICB9LFxuICAgIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuICAgIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCArIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3JlUHJldlBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vcmVOZXh0UGFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKChibG9ja3MuY3VycmVudCAqIGJsb2Nrcy5zaXplKSArIDEpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKCBwYWdlSW5kZXggKSB7XG5cdFx0dGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChwYWdlSW5kZXgpO1xuICAgIH0sXG5cbiAgICBjYWxjQmxvY2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogTWF0aC5jZWlsKHRoaXMucHJvcHMudG90YWwvdGhpcy5wcm9wcy52aXNpYmxlUGFnZXMpLFxuICAgICAgICAgICAgY3VycmVudDogTWF0aC5jZWlsKHRoaXMucHJvcHMuY3VycmVudC90aGlzLnByb3BzLnZpc2libGVQYWdlcyksXG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLnZpc2libGVQYWdlc1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcblxuICAgIGlzTmV4dERpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICB9LFxuXG4gICAgaXNQcmV2TW9yZUhpZGRlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHJldHVybiAoIGJsb2Nrcy50b3RhbCA9PT0gMSApIHx8ICggYmxvY2tzLmN1cnJlbnQgPT09IDEgKTtcbiAgICB9LFxuXG4gICAgaXNOZXh0TW9yZUhpZGRlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHJldHVybiAoIGJsb2Nrcy50b3RhbCA9PT0gMCApIHx8ICggYmxvY2tzLmN1cnJlbnQgPT09IGJsb2Nrcy50b3RhbCApO1xuICAgIH0sXG5cbiAgICB2aXNpYmxlUmFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyAgPSB0aGlzLmNhbGNCbG9ja3MoKSxcblx0XHRcdHN0YXJ0ICAgPSAoYmxvY2tzLmN1cnJlbnQgLSAxKSAqIGJsb2Nrcy5zaXplLFxuXHRcdFx0ZGVsdGEgICA9IHRoaXMucHJvcHMudG90YWwgLSBzdGFydCxcblx0XHRcdGVuZCAgICAgPSBzdGFydCArICggKGRlbHRhID4gYmxvY2tzLnNpemUpID8gYmxvY2tzLnNpemUgOiBkZWx0YSApO1xuXG4gICAgICAgIHJldHVybiBbIHN0YXJ0ICsgMSwgZW5kICsgMSBdO1xuICAgIH0sXG5cblx0LyoqXG4gICAgICogIyMjIHJlbmRlclBhZ2VzKClcbiAgICAgKiBSZW5kZXJzIGJsb2NrIG9mIHBhZ2VzJyBidXR0b25zIHdpdGggbnVtYmVycy5cbiAgICAgKiBAcGFyYW0ge051bWJlcltdfSByYW5nZSAtIHBhaXIgb2YgW3N0YXJ0LCBmcm9tXSwgYGZyb21gIC0gbm90IGluY2x1c2l2ZS5cbiAgICAgKiBAcmV0dXJuIHtSZWFjdC5FbGVtZW50W119IC0gYXJyYXkgb2YgUmVhY3Qgbm9kZXMuXG4gICAgICovXG4gICAgcmVuZGVyUGFnZXM6IGZ1bmN0aW9uICggcGFpciApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKCBwYWlyWzBdLCBwYWlyWzFdICkubWFwKGZ1bmN0aW9uICggcGFnZUluZGV4LCBpbmRleCApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG5cdFx0XHRcdDxQYWdlIGtleT17aW5kZXh9XG5cdFx0XHRcdFx0aXNBY3RpdmU9e3RoaXMucHJvcHMuY3VycmVudCA9PT0gcGFnZUluZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbnVtYmVyZWQtcGFnZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KCk9PnRoaXMuaGFuZGxlUGFnZUNoYW5nZWQocGFnZUluZGV4KX0+e3BhZ2VJbmRleH08L1BhZ2U+XG5cdFx0XHQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17XCJ6ci1wYWdlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlyc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydmaXJzdCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydwcmV2J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydwcmV2U2V0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbj17dGhpcy5pc1ByZXZNb3JlSGlkZGVuKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlUHJldlBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydwcmV2U2V0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlclBhZ2VzKCB0aGlzLnZpc2libGVSYW5nZSgpICl9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbmV4dFNldCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW49e3RoaXMuaXNOZXh0TW9yZUhpZGRlbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9yZU5leHRQYWdlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snbmV4dFNldCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWyduZXh0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snbmV4dCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbGFzdCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxhc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2xhc3QnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQ8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLnRvdGFsICYmICg8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlclwiPnt0aGlzLnByb3BzLmN1cnJlbnR9IC8ge3RoaXMucHJvcHMudG90YWx9IHt0aGlzLnByb3BzLnRleHRzLnBhZ2V9PC9zcGFuPikgfVxuXHRcdFx0XHQgICAgeyAhIXRoaXMucHJvcHMuY291bnQgJiYgKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50LW51bWJlclwiPnt0aGlzLnByb3BzLmNvdW50fSB7dGhpcy5wcm9wcy50ZXh0cy5yZWNvcmR9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1BhZ2VyQmFyJyxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzRGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnenItcGFnZXItYmFyICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKSArICcgJysgKHRoaXMucHJvcHMuaXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwiKSArICcgJysgKHRoaXMucHJvcHMuaXNEaXNhYmxlZD9cIlwiOlwiZW5hYmxlZFwiKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2VyID0gcmVxdWlyZSgnLi9QYWdlcicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnUGFnZXJWaWV3JyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUluZGV4OiAxLFxuXHRcdFx0cGFnZVNpemU6IDEwLFxuXHRcdFx0dmlzaWJsZVBhZ2U6IDUsXG5cdFx0XHRkYXRhRml4ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXhcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIF9faGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIChuZXdQYWdlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KG5ld1BhZ2UpO1xuXHRcdH1cblx0fSxcblx0c2V0UGFnZUluZGV4OiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblx0fSxcblx0X192aWV3UmVuZGVyOiBmdW5jdGlvbiAocmVzcG9uc2Upe1xuXHRcdHZhciBfdmlldyA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMudmlldyB8fCB0aGlzLnByb3BzLnZpZXdSZW5kZXIsIHpuLmV4dGVuZCh7XG5cdFx0XHRyZXNwb25zZTogcmVzcG9uc2UsXG5cdFx0XHRwYWdlclZpZXc6IHRoaXNcblx0XHR9LCB0aGlzLnN0YXRlKSk7XG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250ZW50XCI+e192aWV3fTwvZGl2Pjtcblx0fSxcblx0X19vbkRhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuZGF0YUhhbmRsZXIgJiYgdGhpcy5wcm9wcy5kYXRhSGFuZGxlcihkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0aWYodHlwZW9mIF9yZXR1cm4gPT0gJ29iamVjdCcpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKF9yZXR1cm4pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vVE9ETzogXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uRGF0YUxvYWRpbmc6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblxuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZUluZGV4XSA9IHRoaXMuc3RhdGUucGFnZUluZGV4IHx8IDE7XG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlU2l6ZV0gPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwO1xuXG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcztcblxuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0aGlzKTtcblx0fSxcblx0X19sb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPGxvYWRlci5EYXRhTG9hZGVyIGxvYWRlcj1cIndhdmVcIiB0aXRsZT0nTG9hZGluZy4uLicgLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZXItdmlld1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5kYXRhRml4ZWR9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhICYmIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3ZpZXdSZW5kZXJ9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9eygpPT50aGlzLl9fbG9hZGluZ1JlbmRlcigpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uRGF0YUxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRGF0YUxvYWRlZH0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXctcGFnZXJcIj5cblx0XHRcdFx0XHQ8UGFnZXIgdG90YWw9e01hdGguY2VpbCh0aGlzLnN0YXRlLmNvdW50L3RoaXMucHJvcHMucGFnZVNpemUpfVxuXHRcdFx0XHRcdFx0Y291bnQ9e3RoaXMuc3RhdGUuY291bnR9XG5cdFx0XHRcdFx0XHRjdXJyZW50PXt0aGlzLnN0YXRlLnBhZ2VJbmRleH1cblx0XHRcdFx0XHRcdHBhZ2VTaXplPXt0aGlzLnByb3BzLnBhZ2VTaXplfVxuXHRcdFx0XHRcdFx0dmlzaWJsZVBhZ2VzPXt0aGlzLnByb3BzLnZpc2libGVQYWdlc31cblx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZWQ9e3RoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1NpbXBsZVBhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAnUGFnZXMnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogJ1JlY29yZHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhU3RlcEJhY2t3YXJkJywgXG4gICAgICAgICAgICAgICAgcHJldjogJ2ZhQXJyb3dMZWZ0JyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmFBcnJvd1JpZ2h0JyxcbiAgICAgICAgICAgICAgICBsYXN0OiAnZmFTdGVwRm9yd2FyZCdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gICAgfSxcbiAgICBoYW5kbGVQcmV2aW91c1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcbiAgICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgICB9LFxuICAgIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgICB9LFxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcbiAgICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50ID49IHRoaXMucHJvcHMudG90YWw7XG4gICAgfSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXNpbXBsZS1wYWdlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlyc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydmaXJzdCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydwcmV2J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLnRvdGFsICYmICg8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlclwiPnt0aGlzLnByb3BzLmN1cnJlbnR9IC8ge3RoaXMucHJvcHMudG90YWx9IHt0aGlzLnByb3BzLnRleHRzLnBhZ2V9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMuY291bnQgJiYgKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50LW51bWJlclwiPnt0aGlzLnByb3BzLmNvdW50fSB7dGhpcy5wcm9wcy50ZXh0cy5yZWNvcmR9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbmV4dCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ25leHQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ2xhc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sYXN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxhc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydsYXN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2U6IHJlcXVpcmUoJy4vUGFnZScpLFxuICAgIFBhZ2VyOiByZXF1aXJlKCcuL1BhZ2VyJyksXG4gICAgUGFnZXJCYXI6IHJlcXVpcmUoJy4vUGFnZXJCYXInKSxcbiAgICBQYWdlclZpZXc6IHJlcXVpcmUoJy4vUGFnZXJWaWV3JyksXG4gICAgU2ltcGxlUGFnZXI6IHJlcXVpcmUoJy4vU2ltcGxlUGFnZXInKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9