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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var Pager = __webpack_require__(/*! ./Pager */ "./Pager.js");

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
      total: 0,
      count: 0,
      current: this.props.pageIndex
    };
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);

    if (_return !== false) {
      if (this.props.data) {
        if (this.props.data._argv) {
          this.props.data._argv.data.pageIndex = newPage;
        }

        this.props.data.refresh();
      }

      this.setState({
        current: newPage
      });
    }
  },
  __dataHandler: function __dataHandler(data) {
    var _return = this.props.onPagerDataHandler && this.props.onPagerDataHandler(data, this);

    if (_return !== false) {
      if (data.result[1] && data.result[1][0]) {
        this.setCount(data.result[1][0]);
      }
    }
  },
  setPageIndex: function setPageIndex(pageIndex) {
    this.setState({
      current: pageIndex
    });
  },
  setCount: function setCount(count) {
    this.setState({
      count: count,
      total: Math.ceil(count / this.props.pageSize)
    });
  },
  render: function render() {
    var _this = this;

    var View = zn.path(window, this.props.view);

    if (!View) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-pager-view", this.props.className),
      "data-fixed": this.props.dataFixed
    }, /*#__PURE__*/React.createElement("div", {
      className: "view-content"
    }, /*#__PURE__*/React.createElement(View, _extends({}, this.props, {
      onCallReset: function onCallReset() {
        return _this.setState({
          current: 1
        });
      },
      className: this.props.viewClassName,
      dataHandler: this.__dataHandler
    }))), /*#__PURE__*/React.createElement("div", {
      className: "view-pager"
    }, /*#__PURE__*/React.createElement(Pager, {
      total: this.state.total,
      count: this.state.count,
      current: this.state.current,
      visiblePages: this.props.visiblePage,
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

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiX19vbkNsaWNrIiwicHJvcHMiLCJpc0Rpc2FibGVkIiwib25DbGljayIsInJlbmRlciIsImlzSGlkZGVuIiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsIlBhZ2UiLCJTVkdJY29uIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsInJlcyIsImkiLCJwdXNoIiwiZ2V0RGVmYXVsdFByb3BzIiwidG90YWwiLCJjb3VudCIsImN1cnJlbnQiLCJ2aXNpYmxlUGFnZXMiLCJ0ZXh0cyIsInBhZ2UiLCJyZWNvcmQiLCJpY29ucyIsImZpcnN0IiwicHJldiIsInByZXZTZXQiLCJuZXh0U2V0IiwibmV4dCIsImxhc3QiLCJnZXRJbml0aWFsU3RhdGUiLCJoYW5kbGVGaXJzdFBhZ2UiLCJpc1ByZXZEaXNhYmxlZCIsImhhbmRsZVBhZ2VDaGFuZ2VkIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJpc05leHREaXNhYmxlZCIsImhhbmRsZUxhc3RQYWdlIiwiaGFuZGxlTW9yZVByZXZQYWdlcyIsImhhbmRsZU1vcmVOZXh0UGFnZXMiLCJibG9ja3MiLCJjYWxjQmxvY2tzIiwic2l6ZSIsInBhZ2VJbmRleCIsIm9uUGFnZUNoYW5nZWQiLCJNYXRoIiwiY2VpbCIsImlzUHJldk1vcmVIaWRkZW4iLCJpc05leHRNb3JlSGlkZGVuIiwidmlzaWJsZVJhbmdlIiwiZGVsdGEiLCJyZW5kZXJQYWdlcyIsInBhaXIiLCJtYXAiLCJpbmRleCIsImJpbmQiLCJQYWdlciIsInBhZ2VTaXplIiwidmlzaWJsZVBhZ2UiLCJkYXRhRml4ZWQiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIl9yZXR1cm4iLCJkYXRhIiwiX2FyZ3YiLCJyZWZyZXNoIiwic2V0U3RhdGUiLCJfX2RhdGFIYW5kbGVyIiwib25QYWdlckRhdGFIYW5kbGVyIiwicmVzdWx0Iiwic2V0Q291bnQiLCJzZXRQYWdlSW5kZXgiLCJWaWV3Iiwiem4iLCJwYXRoIiwid2luZG93IiwidmlldyIsInJlYWN0IiwiY2xhc3NuYW1lIiwidmlld0NsYXNzTmFtZSIsInN0YXRlIiwiUGFnZXJCYXIiLCJQYWdlclZpZXciLCJTaW1wbGVQYWdlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUFLdEMsS0FBTCxDQUFXd0IsS0FBWCxDQUFpQixNQUFqQjtBQUFmLE1BSndCLENBbENoRCxDQURELENBREQ7QUE4Q0E7QUE1RmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSkE3QixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYlksTUFBSSxFQUFFZCxtQkFBTyxDQUFDLHlCQUFELENBREE7QUFFYitELE9BQUssRUFBRS9ELG1CQUFPLENBQUMsMkJBQUQsQ0FGRDtBQUdid0YsVUFBUSxFQUFFeEYsbUJBQU8sQ0FBQyxpQ0FBRCxDQUhKO0FBSWJ5RixXQUFTLEVBQUV6RixtQkFBTyxDQUFDLG1DQUFELENBSkw7QUFLYjBGLGFBQVcsRUFBRTFGLG1CQUFPLENBQUMsdUNBQUQ7QUFMUCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdQYWdlJyxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzRGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0hpZGRlbil7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gY2xhc3NOYW1lPXsnenItcGFnZXItcGFnZSAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lfHwnJykgKyAnICcrICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikgKyAnICcrICh0aGlzLnByb3BzLmlzRGlzYWJsZWQ/XCJcIjpcImVuYWJsZWRcIil9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2UgPSByZXF1aXJlKCcuL1BhZ2UnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxuZnVuY3Rpb24gcmFuZ2UgKCBzdGFydCwgZW5kICkge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKysgKSB7XG4gICAgICAgIHJlcy5wdXNoKCBpICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidQYWdlcicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmlzaWJsZVBhZ2VzOiA1LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIHRleHRzOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogJ1BhZ2VzJyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6ICdSZWNvcmRzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgZmlyc3Q6ICdmYVN0ZXBCYWNrd2FyZCcsIFxuICAgICAgICAgICAgICAgIHByZXY6ICdmYUFycm93TGVmdCcsXG4gICAgICAgICAgICAgICAgcHJldlNldDogJ2ZhRmFzdEJhY2t3YXJkJyxcbiAgICAgICAgICAgICAgICBuZXh0U2V0OiAnZmFGYXN0Rm9yd2FyZCcsXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhQXJyb3dSaWdodCcsXG4gICAgICAgICAgICAgICAgbGFzdDogJ2ZhU3RlcEZvcndhcmQnXG4gICAgICAgICAgICB9XG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXG5cdFx0fVxuXHR9LFxuXHRoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gICAgfSxcbiAgICBoYW5kbGVQcmV2aW91c1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcbiAgICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgICB9LFxuICAgIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlTW9yZVByZXZQYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNb3JlTmV4dFBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgoYmxvY2tzLmN1cnJlbnQgKiBibG9ja3Muc2l6ZSkgKyAxKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uICggcGFnZUluZGV4ICkge1xuXHRcdHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQocGFnZUluZGV4KTtcbiAgICB9LFxuXG4gICAgY2FsY0Jsb2NrczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IE1hdGguY2VpbCh0aGlzLnByb3BzLnRvdGFsL3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzKSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IE1hdGguY2VpbCh0aGlzLnByb3BzLmN1cnJlbnQvdGhpcy5wcm9wcy52aXNpYmxlUGFnZXMpLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy52aXNpYmxlUGFnZXNcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgaXNQcmV2RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA8PSAxO1xuICAgIH0sXG5cbiAgICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50ID49IHRoaXMucHJvcHMudG90YWw7XG4gICAgfSxcblxuICAgIGlzUHJldk1vcmVIaWRkZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICByZXR1cm4gKCBibG9ja3MudG90YWwgPT09IDEgKSB8fCAoIGJsb2Nrcy5jdXJyZW50ID09PSAxICk7XG4gICAgfSxcblxuICAgIGlzTmV4dE1vcmVIaWRkZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuY2FsY0Jsb2NrcygpO1xuICAgICAgICByZXR1cm4gKCBibG9ja3MudG90YWwgPT09IDAgKSB8fCAoIGJsb2Nrcy5jdXJyZW50ID09PSBibG9ja3MudG90YWwgKTtcbiAgICB9LFxuXG4gICAgdmlzaWJsZVJhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgID0gdGhpcy5jYWxjQmxvY2tzKCksXG5cdFx0XHRzdGFydCAgID0gKGJsb2Nrcy5jdXJyZW50IC0gMSkgKiBibG9ja3Muc2l6ZSxcblx0XHRcdGRlbHRhICAgPSB0aGlzLnByb3BzLnRvdGFsIC0gc3RhcnQsXG5cdFx0XHRlbmQgICAgID0gc3RhcnQgKyAoIChkZWx0YSA+IGJsb2Nrcy5zaXplKSA/IGJsb2Nrcy5zaXplIDogZGVsdGEgKTtcblxuICAgICAgICByZXR1cm4gWyBzdGFydCArIDEsIGVuZCArIDEgXTtcbiAgICB9LFxuXG5cdC8qKlxuICAgICAqICMjIyByZW5kZXJQYWdlcygpXG4gICAgICogUmVuZGVycyBibG9jayBvZiBwYWdlcycgYnV0dG9ucyB3aXRoIG51bWJlcnMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gcmFuZ2UgLSBwYWlyIG9mIFtzdGFydCwgZnJvbV0sIGBmcm9tYCAtIG5vdCBpbmNsdXNpdmUuXG4gICAgICogQHJldHVybiB7UmVhY3QuRWxlbWVudFtdfSAtIGFycmF5IG9mIFJlYWN0IG5vZGVzLlxuICAgICAqL1xuICAgIHJlbmRlclBhZ2VzOiBmdW5jdGlvbiAoIHBhaXIgKSB7XG4gICAgICAgIHJldHVybiByYW5nZSggcGFpclswXSwgcGFpclsxXSApLm1hcChmdW5jdGlvbiAoIHBhZ2VJbmRleCwgaW5kZXggKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuXHRcdFx0XHQ8UGFnZSBrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGlzQWN0aXZlPXt0aGlzLnByb3BzLmN1cnJlbnQgPT09IHBhZ2VJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW51bWJlcmVkLXBhZ2VcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCl9PntwYWdlSW5kZXh9PC9QYWdlPlxuXHRcdFx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e1wienItcGFnZXIgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJwYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydmaXJzdCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZpcnN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpcnN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snZmlyc3QnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1sncHJldiddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJldmlvdXNQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydwcmV2J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1sncHJldlNldCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByZXYtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW49e3RoaXMuaXNQcmV2TW9yZUhpZGRlbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9yZVByZXZQYWdlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1sncHJldlNldCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJQYWdlcyggdGhpcy52aXNpYmxlUmFuZ2UoKSApfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ25leHRTZXQnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuPXt0aGlzLmlzTmV4dE1vcmVIaWRkZW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vcmVOZXh0UGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ25leHRTZXQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbmV4dCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ25leHQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ2xhc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sYXN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxhc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydsYXN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0PC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy50b3RhbCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1udW1iZXJcIj57dGhpcy5wcm9wcy5jdXJyZW50fSAvIHt0aGlzLnByb3BzLnRvdGFsfSB7dGhpcy5wcm9wcy50ZXh0cy5wYWdlfTwvc3Bhbj4pIH1cblx0XHRcdFx0ICAgIHsgISF0aGlzLnByb3BzLmNvdW50ICYmICg8c3BhbiBjbGFzc05hbWU9XCJjb3VudC1udW1iZXJcIj57dGhpcy5wcm9wcy5jb3VudH0ge3RoaXMucHJvcHMudGV4dHMucmVjb3JkfTwvc3Bhbj4pIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdQYWdlckJhcicsXG5cdF9fb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0Rpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J3pyLXBhZ2VyLWJhciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lfHwnJykgKyAnICcrICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikgKyAnICcrICh0aGlzLnByb3BzLmlzRGlzYWJsZWQ/XCJcIjpcImVuYWJsZWRcIil9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlciA9IHJlcXVpcmUoJy4vUGFnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQYWdlclZpZXcnLFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlSW5kZXg6IDEsXG5cdFx0XHRwYWdlU2l6ZTogMTAsXG5cdFx0XHR2aXNpYmxlUGFnZTogNSxcblx0XHRcdGRhdGFGaXhlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB7XG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogdGhpcy5wcm9wcy5wYWdlSW5kZXhcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIF9faGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIChuZXdQYWdlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2UpIHtcblx0XHRcdGlmKHRoaXMucHJvcHMuZGF0YSl7XG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuZGF0YS5fYXJndikge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5fYXJndi5kYXRhLnBhZ2VJbmRleCA9IG5ld1BhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLnJlZnJlc2goKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGN1cnJlbnQ6IG5ld1BhZ2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19kYXRhSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VyRGF0YUhhbmRsZXIgJiYgdGhpcy5wcm9wcy5vblBhZ2VyRGF0YUhhbmRsZXIoZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2UpIHtcblx0XHRcdGlmKGRhdGEucmVzdWx0WzFdICYmIGRhdGEucmVzdWx0WzFdWzBdKXtcblx0XHRcdFx0dGhpcy5zZXRDb3VudChkYXRhLnJlc3VsdFsxXVswXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZXRQYWdlSW5kZXg6IGZ1bmN0aW9uIChwYWdlSW5kZXgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogcGFnZUluZGV4XG5cdFx0fSk7XG5cdH0sXG5cdHNldENvdW50OiBmdW5jdGlvbiAoY291bnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y291bnQ6IGNvdW50LFxuXHRcdFx0dG90YWw6IE1hdGguY2VpbCggY291bnQgLyB0aGlzLnByb3BzLnBhZ2VTaXplKVxuXHRcdH0pO1xuXHR9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIFZpZXcgPSB6bi5wYXRoKHdpbmRvdywgdGhpcy5wcm9wcy52aWV3KTtcblx0XHRpZighVmlldyl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG4gICAgICAgIHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlci12aWV3XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gZGF0YS1maXhlZD17dGhpcy5wcm9wcy5kYXRhRml4ZWR9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGVudFwiPlxuXHRcdFx0XHRcdDxWaWV3IHsuLi50aGlzLnByb3BzfSBvbkNhbGxSZXNldD17KCk9PnRoaXMuc2V0U3RhdGUoe2N1cnJlbnQ6IDF9KX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnZpZXdDbGFzc05hbWV9IGRhdGFIYW5kbGVyPXt0aGlzLl9fZGF0YUhhbmRsZXJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZXctcGFnZXJcIj5cblx0XHRcdFx0XHQ8UGFnZXIgdG90YWw9e3RoaXMuc3RhdGUudG90YWx9XG5cdFx0XHRcdFx0XHRjb3VudD17dGhpcy5zdGF0ZS5jb3VudH1cblx0XHRcdFx0XHRcdGN1cnJlbnQ9e3RoaXMuc3RhdGUuY3VycmVudH1cblx0XHRcdFx0XHRcdHZpc2libGVQYWdlcz17dGhpcy5wcm9wcy52aXNpYmxlUGFnZX1cblx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZWQ9e3RoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuICAgIH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonU2ltcGxlUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICdQYWdlcycsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiAnUmVjb3JkcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIGZpcnN0OiAnZmFTdGVwQmFja3dhcmQnLCBcbiAgICAgICAgICAgICAgICBwcmV2OiAnZmFBcnJvd0xlZnQnLFxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYUFycm93UmlnaHQnLFxuICAgICAgICAgICAgICAgIGxhc3Q6ICdmYVN0ZXBGb3J3YXJkJ1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdH0sXG5cdGhhbmRsZUZpcnN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgICB9LFxuICAgIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuICAgIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCArIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICAgIH0sXG4gICAgaGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uICggcGFnZUluZGV4ICkge1xuXHRcdHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQocGFnZUluZGV4KTtcbiAgICB9LFxuICAgIGlzUHJldkRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgICB9LFxuICAgIGlzTmV4dERpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICB9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e1wienItc2ltcGxlLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snZmlyc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1sncHJldiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWyduZXh0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snbmV4dCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbGFzdCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxhc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2xhc3QnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZTogcmVxdWlyZSgnLi9QYWdlJyksXG4gICAgUGFnZXI6IHJlcXVpcmUoJy4vUGFnZXInKSxcbiAgICBQYWdlckJhcjogcmVxdWlyZSgnLi9QYWdlckJhcicpLFxuICAgIFBhZ2VyVmlldzogcmVxdWlyZSgnLi9QYWdlclZpZXcnKSxcbiAgICBTaW1wbGVQYWdlcjogcmVxdWlyZSgnLi9TaW1wbGVQYWdlcicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=