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

    return React.createElement("li", {
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

      return React.createElement(Page, {
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
    return React.createElement("nav", {
      className: "zr-pager " + this.props.className
    }, React.createElement("ul", {
      className: "pages"
    }, this.props.icons['first'] && React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['first']
    })), this.props.icons['prev'] && React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['prev']
    })), this.props.icons['prevSet'] && React.createElement(Page, {
      className: "btn-prev-more",
      isHidden: this.isPrevMoreHidden(),
      onClick: this.handleMorePrevPages
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['prevSet']
    })), this.renderPages(this.visibleRange()), this.props.icons['nextSet'] && React.createElement(Page, {
      className: "btn-next-more",
      isHidden: this.isNextMoreHidden(),
      onClick: this.handleMoreNextPages
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['nextSet']
    })), this.props.icons['next'] && React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['next']
    })), this.props.icons['last'] && React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['last']
    }))), React.createElement("div", {
      className: "number"
    }, !!this.props.total && React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && React.createElement("span", {
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
    return React.createElement("div", {
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

    return React.createElement("div", {
      className: znui.react.classname("zr-pager-view", this.props.className),
      "data-fixed": this.props.dataFixed
    }, React.createElement("div", {
      className: "view-content"
    }, React.createElement(View, _extends({}, this.props, {
      onCallReset: function onCallReset() {
        return _this.setState({
          current: 1
        });
      },
      className: this.props.viewClassName,
      dataHandler: this.__dataHandler
    }))), React.createElement("div", {
      className: "view-pager"
    }, React.createElement(Pager, {
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
    return React.createElement("nav", {
      className: "zr-simple-pager " + this.props.className
    }, React.createElement("ul", {
      className: "pages"
    }, this.props.icons['first'] && React.createElement(Page, {
      className: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['first']
    })), this.props.icons['prev'] && React.createElement(Page, {
      className: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['prev']
    })), React.createElement("li", {
      className: "number"
    }, !!this.props.total && React.createElement("span", {
      className: "page-number"
    }, this.props.current, " / ", this.props.total, " ", this.props.texts.page), !!this.props.count && React.createElement("span", {
      className: "count-number"
    }, this.props.count, " ", this.props.texts.record)), this.props.icons['next'] && React.createElement(Page, {
      className: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, React.createElement(SVGIcon, {
      icon: this.props.icons['next']
    })), this.props.icons['last'] && React.createElement(Page, {
      className: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, React.createElement(SVGIcon, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiX19vbkNsaWNrIiwicHJvcHMiLCJpc0Rpc2FibGVkIiwib25DbGljayIsInJlbmRlciIsImlzSGlkZGVuIiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsIlBhZ2UiLCJTVkdJY29uIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsInJlcyIsImkiLCJwdXNoIiwiZ2V0RGVmYXVsdFByb3BzIiwidG90YWwiLCJjb3VudCIsImN1cnJlbnQiLCJ2aXNpYmxlUGFnZXMiLCJ0ZXh0cyIsInBhZ2UiLCJyZWNvcmQiLCJpY29ucyIsImZpcnN0IiwicHJldiIsInByZXZTZXQiLCJuZXh0U2V0IiwibmV4dCIsImxhc3QiLCJnZXRJbml0aWFsU3RhdGUiLCJoYW5kbGVGaXJzdFBhZ2UiLCJpc1ByZXZEaXNhYmxlZCIsImhhbmRsZVBhZ2VDaGFuZ2VkIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJpc05leHREaXNhYmxlZCIsImhhbmRsZUxhc3RQYWdlIiwiaGFuZGxlTW9yZVByZXZQYWdlcyIsImhhbmRsZU1vcmVOZXh0UGFnZXMiLCJibG9ja3MiLCJjYWxjQmxvY2tzIiwic2l6ZSIsInBhZ2VJbmRleCIsIm9uUGFnZUNoYW5nZWQiLCJNYXRoIiwiY2VpbCIsImlzUHJldk1vcmVIaWRkZW4iLCJpc05leHRNb3JlSGlkZGVuIiwidmlzaWJsZVJhbmdlIiwiZGVsdGEiLCJyZW5kZXJQYWdlcyIsInBhaXIiLCJtYXAiLCJpbmRleCIsImJpbmQiLCJwYWdlU2l6ZSIsInZpc2libGVQYWdlIiwiZGF0YUZpeGVkIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJfcmV0dXJuIiwiZGF0YSIsIl9hcmd2IiwicmVmcmVzaCIsInNldFN0YXRlIiwiX19kYXRhSGFuZGxlciIsIm9uUGFnZXJEYXRhSGFuZGxlciIsInJlc3VsdCIsInNldENvdW50Iiwic2V0UGFnZUluZGV4IiwiVmlldyIsInpuIiwicGF0aCIsIndpbmRvdyIsInZpZXciLCJyZWFjdCIsImNsYXNzbmFtZSIsInZpZXdDbGFzc05hbWUiLCJzdGF0ZSIsIlBhZ2VyIiwiUGFnZXJCYXIiLCJQYWdlclZpZXciLCJTaW1wbGVQYWdlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUFqQixDOzs7Ozs7Ozs7OztBQ0pBN0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JZLE1BQUksRUFBRWQsbUJBQU8sQ0FBQyx5QkFBRCxDQURBO0FBRWJ1RixPQUFLLEVBQUV2RixtQkFBTyxDQUFDLDJCQUFELENBRkQ7QUFHYndGLFVBQVEsRUFBRXhGLG1CQUFPLENBQUMsaUNBQUQsQ0FISjtBQUlieUYsV0FBUyxFQUFFekYsbUJBQU8sQ0FBQyxtQ0FBRCxDQUpMO0FBS2IwRixhQUFXLEVBQUUxRixtQkFBTyxDQUFDLHVDQUFEO0FBTFAsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsK0JBQStCLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZScsXG5cdF9fb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0Rpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgb25DbGljaz17dGhpcy5fX29uQ2xpY2t9IGNsYXNzTmFtZT17J3pyLXBhZ2VyLXBhZ2UgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbmZ1bmN0aW9uIHJhbmdlICggc3RhcnQsIGVuZCApIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrICkge1xuICAgICAgICByZXMucHVzaCggaSApO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICdQYWdlcycsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiAnUmVjb3JkcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIGZpcnN0OiAnZmFTdGVwQmFja3dhcmQnLCBcbiAgICAgICAgICAgICAgICBwcmV2OiAnZmFBcnJvd0xlZnQnLFxuICAgICAgICAgICAgICAgIHByZXZTZXQ6ICdmYUZhc3RCYWNrd2FyZCcsXG4gICAgICAgICAgICAgICAgbmV4dFNldDogJ2ZhRmFzdEZvcndhcmQnLFxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYUFycm93UmlnaHQnLFxuICAgICAgICAgICAgICAgIGxhc3Q6ICdmYVN0ZXBGb3J3YXJkJ1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblxuXHRcdH1cblx0fSxcblx0aGFuZGxlRmlyc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKDEpO1xuICAgIH0sXG4gICAgaGFuZGxlUHJldmlvdXNQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTmV4dFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50ICsgMSk7XG4gICAgfSxcbiAgICBoYW5kbGVMYXN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy50b3RhbCk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vcmVQcmV2UGFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlTW9yZU5leHRQYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoKGJsb2Nrcy5jdXJyZW50ICogYmxvY2tzLnNpemUpICsgMSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcblxuICAgIGNhbGNCbG9ja3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsOiBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbC90aGlzLnByb3BzLnZpc2libGVQYWdlcyksXG4gICAgICAgICAgICBjdXJyZW50OiBNYXRoLmNlaWwodGhpcy5wcm9wcy5jdXJyZW50L3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzKSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMucHJvcHMudmlzaWJsZVBhZ2VzXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGlzUHJldkRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgICB9LFxuXG4gICAgaXNOZXh0RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA+PSB0aGlzLnByb3BzLnRvdGFsO1xuICAgIH0sXG5cbiAgICBpc1ByZXZNb3JlSGlkZGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgcmV0dXJuICggYmxvY2tzLnRvdGFsID09PSAxICkgfHwgKCBibG9ja3MuY3VycmVudCA9PT0gMSApO1xuICAgIH0sXG5cbiAgICBpc05leHRNb3JlSGlkZGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgcmV0dXJuICggYmxvY2tzLnRvdGFsID09PSAwICkgfHwgKCBibG9ja3MuY3VycmVudCA9PT0gYmxvY2tzLnRvdGFsICk7XG4gICAgfSxcblxuICAgIHZpc2libGVSYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzICA9IHRoaXMuY2FsY0Jsb2NrcygpLFxuXHRcdFx0c3RhcnQgICA9IChibG9ja3MuY3VycmVudCAtIDEpICogYmxvY2tzLnNpemUsXG5cdFx0XHRkZWx0YSAgID0gdGhpcy5wcm9wcy50b3RhbCAtIHN0YXJ0LFxuXHRcdFx0ZW5kICAgICA9IHN0YXJ0ICsgKCAoZGVsdGEgPiBibG9ja3Muc2l6ZSkgPyBibG9ja3Muc2l6ZSA6IGRlbHRhICk7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhcnQgKyAxLCBlbmQgKyAxIF07XG4gICAgfSxcblxuXHQvKipcbiAgICAgKiAjIyMgcmVuZGVyUGFnZXMoKVxuICAgICAqIFJlbmRlcnMgYmxvY2sgb2YgcGFnZXMnIGJ1dHRvbnMgd2l0aCBudW1iZXJzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IHJhbmdlIC0gcGFpciBvZiBbc3RhcnQsIGZyb21dLCBgZnJvbWAgLSBub3QgaW5jbHVzaXZlLlxuICAgICAqIEByZXR1cm4ge1JlYWN0LkVsZW1lbnRbXX0gLSBhcnJheSBvZiBSZWFjdCBub2Rlcy5cbiAgICAgKi9cbiAgICByZW5kZXJQYWdlczogZnVuY3Rpb24gKCBwYWlyICkge1xuICAgICAgICByZXR1cm4gcmFuZ2UoIHBhaXJbMF0sIHBhaXJbMV0gKS5tYXAoZnVuY3Rpb24gKCBwYWdlSW5kZXgsIGluZGV4ICkge1xuICAgICAgICAgICAgcmV0dXJuIChcblx0XHRcdFx0PFBhZ2Uga2V5PXtpbmRleH1cblx0XHRcdFx0XHRpc0FjdGl2ZT17dGhpcy5wcm9wcy5jdXJyZW50ID09PSBwYWdlSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1udW1iZXJlZC1wYWdlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVQYWdlQ2hhbmdlZChwYWdlSW5kZXgpfT57cGFnZUluZGV4fTwvUGFnZT5cblx0XHRcdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snZmlyc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1sncHJldiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ3ByZXZTZXQnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuPXt0aGlzLmlzUHJldk1vcmVIaWRkZW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vcmVQcmV2UGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ3ByZXZTZXQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyUGFnZXMoIHRoaXMudmlzaWJsZVJhbmdlKCkgKX1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWyduZXh0U2V0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbj17dGhpcy5pc05leHRNb3JlSGlkZGVuKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlTmV4dFBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWyduZXh0U2V0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ25leHQnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWyduZXh0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydsYXN0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGFzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMYXN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snbGFzdCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG5cdFx0XHRcdCAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L25hdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZXJCYXInLFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNEaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyd6ci1wYWdlci1iYXIgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnUGFnZXJWaWV3JyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUluZGV4OiAxLFxuXHRcdFx0cGFnZVNpemU6IDEwLFxuXHRcdFx0dmlzaWJsZVBhZ2U6IDUsXG5cdFx0XHRkYXRhRml4ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRjb3VudDogMCxcblx0XHRcdGN1cnJlbnQ6IHRoaXMucHJvcHMucGFnZUluZGV4XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHRpZih0aGlzLnByb3BzLmRhdGEpe1xuXHRcdFx0XHRpZih0aGlzLnByb3BzLmRhdGEuX2FyZ3YpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEuX2FyZ3YuZGF0YS5wYWdlSW5kZXggPSBuZXdQYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjdXJyZW50OiBuZXdQYWdlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cdF9fZGF0YUhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlckRhdGFIYW5kbGVyICYmIHRoaXMucHJvcHMub25QYWdlckRhdGFIYW5kbGVyKGRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHRpZihkYXRhLnJlc3VsdFsxXSAmJiBkYXRhLnJlc3VsdFsxXVswXSl7XG5cdFx0XHRcdHRoaXMuc2V0Q291bnQoZGF0YS5yZXN1bHRbMV1bMF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0c2V0UGFnZUluZGV4OiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnQ6IHBhZ2VJbmRleFxuXHRcdH0pO1xuXHR9LFxuXHRzZXRDb3VudDogZnVuY3Rpb24gKGNvdW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvdW50OiBjb3VudCxcblx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoIGNvdW50IC8gdGhpcy5wcm9wcy5wYWdlU2l6ZSlcblx0XHR9KTtcblx0fSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBWaWV3ID0gem4ucGF0aCh3aW5kb3csIHRoaXMucHJvcHMudmlldyk7XG5cdFx0aWYoIVZpZXcpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuICAgICAgICByZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZXItdmlld1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZGF0YUZpeGVkfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8VmlldyB7Li4udGhpcy5wcm9wc30gb25DYWxsUmVzZXQ9eygpPT50aGlzLnNldFN0YXRlKHtjdXJyZW50OiAxfSl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy52aWV3Q2xhc3NOYW1lfSBkYXRhSGFuZGxlcj17dGhpcy5fX2RhdGFIYW5kbGVyfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWV3LXBhZ2VyXCI+XG5cdFx0XHRcdFx0PFBhZ2VyIHRvdGFsPXt0aGlzLnN0YXRlLnRvdGFsfVxuXHRcdFx0XHRcdFx0Y291bnQ9e3RoaXMuc3RhdGUuY291bnR9XG5cdFx0XHRcdFx0XHRjdXJyZW50PXt0aGlzLnN0YXRlLmN1cnJlbnR9XG5cdFx0XHRcdFx0XHR2aXNpYmxlUGFnZXM9e3RoaXMucHJvcHMudmlzaWJsZVBhZ2V9XG5cdFx0XHRcdFx0XHRvblBhZ2VDaGFuZ2VkPXt0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWR9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcbiAgICB9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZSA9IHJlcXVpcmUoJy4vUGFnZScpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1NpbXBsZVBhZ2VyJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAnUGFnZXMnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogJ1JlY29yZHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhU3RlcEJhY2t3YXJkJywgXG4gICAgICAgICAgICAgICAgcHJldjogJ2ZhQXJyb3dMZWZ0JyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnZmFBcnJvd1JpZ2h0JyxcbiAgICAgICAgICAgICAgICBsYXN0OiAnZmFTdGVwRm9yd2FyZCdcbiAgICAgICAgICAgIH1cblx0XHR9O1xuXHR9LFxuXHRoYW5kbGVGaXJzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoMSk7XG4gICAgfSxcbiAgICBoYW5kbGVQcmV2aW91c1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50IC0gMSk7XG4gICAgfSxcbiAgICBoYW5kbGVOZXh0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgKyAxKTtcbiAgICB9LFxuICAgIGhhbmRsZUxhc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV4dERpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLnRvdGFsKTtcbiAgICB9LFxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcbiAgICBpc1ByZXZEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50IDw9IDE7XG4gICAgfSxcbiAgICBpc05leHREaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50ID49IHRoaXMucHJvcHMudG90YWw7XG4gICAgfSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXNpbXBsZS1wYWdlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlyc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydmaXJzdCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydwcmV2J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJldi1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgISF0aGlzLnByb3BzLnRvdGFsICYmICg8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlclwiPnt0aGlzLnByb3BzLmN1cnJlbnR9IC8ge3RoaXMucHJvcHMudG90YWx9IHt0aGlzLnByb3BzLnRleHRzLnBhZ2V9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMuY291bnQgJiYgKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50LW51bWJlclwiPnt0aGlzLnByb3BzLmNvdW50fSB7dGhpcy5wcm9wcy50ZXh0cy5yZWNvcmR9PC9zcGFuPikgfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbmV4dCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW5leHQtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ25leHQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ2xhc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sYXN0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxhc3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWydsYXN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2U6IHJlcXVpcmUoJy4vUGFnZScpLFxuICAgIFBhZ2VyOiByZXF1aXJlKCcuL1BhZ2VyJyksXG4gICAgUGFnZXJCYXI6IHJlcXVpcmUoJy4vUGFnZXJCYXInKSxcbiAgICBQYWdlclZpZXc6IHJlcXVpcmUoJy4vUGFnZXJWaWV3JyksXG4gICAgU2ltcGxlUGFnZXI6IHJlcXVpcmUoJy4vU2ltcGxlUGFnZXInKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9