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

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/DataLoader.js":
/*!****************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/DataLoader.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRDataLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'primary',
      size: 'size-large',
      className: 'primary'
    };
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-data-loader", this.props.className, this.props.color, this.props.size),
      style: this.props.style
    }, React.createElement("div", {
      className: "loader-loading",
      "data-loader": this.props.loader
    }), !!this.props.title && React.createElement("span", {
      className: "title"
    }, this.props.title));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/Loader.js":
/*!************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/Loader.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var DataLoader = __webpack_require__(/*! ./DataLoader */ "../node_modules/znui-react-loader/__/build/DataLoader.js");

module.exports = React.createClass({
  displayName: 'ZRLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'white',
      content: 'Loading...',
      className: 'white-background',
      size: 'size-large',
      layout: 'flex-row'
    };
  },
  render: function render() {
    return React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname("zr-loader", this.props.className, this.props.color, this.props.layout)
    }, React.createElement(DataLoader, {
      className: this.props.dataLoaderClassName,
      loader: this.props.loader,
      color: this.props.color,
      size: this.props.size
    }), React.createElement("div", {
      className: "content"
    }, this.props.content));
  }
});

/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/Loading.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/Loading.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var Loader = __webpack_require__(/*! ./Loader */ "../node_modules/znui-react-loader/__/build/Loader.js");

module.exports = React.createClass({
  displayName: 'ZRLoading',
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      loader: 'timer',
      content: 'Loading...'
    };
  },
  render: function render() {
    if (this.props.data) {
      return this.props.children;
    } else {
      return React.createElement(Loader, this.props);
    }
  }
});

/***/ }),

/***/ "../node_modules/znui-react-loader/__/build/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/znui-react-loader/__/build/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'DataLoader': __webpack_require__(/*! ./DataLoader */ "../node_modules/znui-react-loader/__/build/DataLoader.js"),
  'Loader': __webpack_require__(/*! ./Loader */ "../node_modules/znui-react-loader/__/build/Loader.js"),
  'Loading': __webpack_require__(/*! ./Loading */ "../node_modules/znui-react-loader/__/build/Loading.js")
};

/***/ }),

/***/ "../node_modules/znui-react-loader/__/dist/development/index.style.bundle.css":
/*!************************************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/dist/development/index.style.bundle.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-loader/__/dist/production/index.bundle.js":
/*!****************************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/dist/production/index.bundle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(e,t){for(var r in t)e[r]=t[r]})(this,function(r){var a={};function o(e){if(a[e]){return a[e].exports}var t=a[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,o);t.l=true;return t.exports}o.m=r;o.c=a;o.d=function(e,t,r){if(!o.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(t,e){if(e&1)t=o(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);o.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r};o.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};o.d(e,"a",e);return e};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="";return o(o.s=3)}([function(e,t){(function(){e.exports=this["React"]})()},function(e,t,r){var a=znui.React||r(0);e.exports=a.createClass({displayName:"ZRDataLoader",getDefaultProps:function e(){return{loader:"timer",color:"primary",size:"size-large",className:"primary"}},render:function e(){return a.createElement("div",{className:znui.react.classname("zr-data-loader",this.props.className,this.props.color,this.props.size),style:this.props.style},a.createElement("div",{className:"loader-loading","data-loader":this.props.loader}),!!this.props.title&&a.createElement("span",{className:"title"},this.props.title))}})},function(e,t,r){var a=znui.React||r(0);var o=r(1);e.exports=a.createClass({displayName:"ZRLoader",getDefaultProps:function e(){return{loader:"timer",color:"white",content:"Loading...",className:"white-background",size:"size-large",layout:"flex-row"}},render:function e(){return a.createElement("div",{style:this.props.style,className:znui.react.classname("zr-loader",this.props.className,this.props.color,this.props.layout)},a.createElement(o,{className:this.props.dataLoaderClassName,loader:this.props.loader,color:this.props.color,size:this.props.size}),a.createElement("div",{className:"content"},this.props.content))}})},function(e,t,r){e.exports={DataLoader:r(1),Loader:r(2),Loading:r(4)}},function(e,t,r){var a=znui.React||r(0);var o=r(2);e.exports=a.createClass({displayName:"ZRLoading",getDefaultProps:function e(){return{data:null,loader:"timer",content:"Loading..."}},render:function e(){if(this.props.data){return this.props.children}else{return a.createElement(o,this.props)}}})}]));

/***/ }),

/***/ "../node_modules/znui-react-loader/__/dist/production/index.style.bundle.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/znui-react-loader/__/dist/production/index.style.bundle.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-loader/index.js":
/*!**************************************************!*\
  !*** ../node_modules/znui-react-loader/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__(/*! znui-react */ "znui-react");
if(process && process.env && "development") {
    if(true) {
        __webpack_require__(/*! ./__/dist/development/index.style.bundle.css */ "../node_modules/znui-react-loader/__/dist/development/index.style.bundle.css");
        module.exports = __webpack_require__(/*! ./__/build/index */ "../node_modules/znui-react-loader/__/build/index.js");
    }else{}
}else {
    __webpack_require__(/*! ./__/dist/production/index.style.bundle.css */ "../node_modules/znui-react-loader/__/dist/production/index.style.bundle.css");
    module.exports = __webpack_require__(/*! ./__/dist/production/index.bundle.js */ "../node_modules/znui-react-loader/__/dist/production/index.bundle.js");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

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

var loader = __webpack_require__(/*! znui-react-loader */ "../node_modules/znui-react-loader/index.js");

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

/***/ "znui-react":
/*!*********************!*\
  !*** external "zr" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zr"]; }());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LWxvYWRlci9fXy9idWlsZC9EYXRhTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vYnVpbGQvTG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vYnVpbGQvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtbG9hZGVyL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtbG9hZGVyL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU2ltcGxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImljb25cIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJfX29uQ2xpY2siLCJwcm9wcyIsImlzRGlzYWJsZWQiLCJvbkNsaWNrIiwicmVuZGVyIiwiaXNIaWRkZW4iLCJjbGFzc05hbWUiLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiUGFnZSIsIlNWR0ljb24iLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwicmVzIiwiaSIsInB1c2giLCJnZXREZWZhdWx0UHJvcHMiLCJ0b3RhbCIsImNvdW50IiwiY3VycmVudCIsInZpc2libGVQYWdlcyIsInRleHRzIiwicGFnZSIsInJlY29yZCIsImljb25zIiwiZmlyc3QiLCJwcmV2IiwicHJldlNldCIsIm5leHRTZXQiLCJuZXh0IiwibGFzdCIsImdldEluaXRpYWxTdGF0ZSIsImhhbmRsZUZpcnN0UGFnZSIsImlzUHJldkRpc2FibGVkIiwiaGFuZGxlUGFnZUNoYW5nZWQiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImlzTmV4dERpc2FibGVkIiwiaGFuZGxlTGFzdFBhZ2UiLCJoYW5kbGVNb3JlUHJldlBhZ2VzIiwiaGFuZGxlTW9yZU5leHRQYWdlcyIsImJsb2NrcyIsImNhbGNCbG9ja3MiLCJzaXplIiwicGFnZUluZGV4Iiwib25QYWdlQ2hhbmdlZCIsIk1hdGgiLCJjZWlsIiwiaXNQcmV2TW9yZUhpZGRlbiIsImlzTmV4dE1vcmVIaWRkZW4iLCJ2aXNpYmxlUmFuZ2UiLCJkZWx0YSIsInJlbmRlclBhZ2VzIiwicGFpciIsIm1hcCIsImluZGV4IiwiYmluZCIsIlBhZ2VyIiwibG9hZGVyIiwicGFnZVNpemUiLCJ2aXNpYmxlUGFnZSIsImRhdGFGaXhlZCIsImRhdGEiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIl9yZXR1cm4iLCJzZXRQYWdlSW5kZXgiLCJzdGF0ZSIsInJlZnJlc2giLCJfX3ZpZXdSZW5kZXIiLCJyZXNwb25zZSIsIl92aWV3IiwicmVhY3QiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJ2aWV3Iiwidmlld1JlbmRlciIsInpuIiwiZXh0ZW5kIiwicGFnZXJWaWV3IiwiX19vbkRhdGFMb2FkZWQiLCJkYXRhSGFuZGxlciIsInNldFN0YXRlIiwiX19vbkRhdGFMb2FkaW5nIiwibGlmeWN5Y2xlIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsImRlZXBBc3NpZ24iLCJrZXlNYXBzIiwicGFyYW1zIiwiX19vbkRhdGFDcmVhdGVkIiwib25EYXRhQ3JlYXRlZCIsIl9fbG9hZGluZ1JlbmRlciIsImNsYXNzbmFtZSIsInN0eWxlIiwiUGFnZXJCYXIiLCJQYWdlclZpZXciLCJTaW1wbGVQYWdlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFD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QUFFLEtBQUthLGNBQUwsRUFGWTtBQUd4QixhQUFPLEVBQUUsS0FBS0M7QUFIVSxvQkFJeEIsb0JBQUMsT0FBRDtBQUFTLFVBQUksRUFBRSxLQUFLdEMsS0FBTCxDQUFXd0IsS0FBWCxDQUFpQixNQUFqQjtBQUFmLE1BSndCLENBbENoRCxDQURELENBREQ7QUE4Q0E7QUE1RmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSkE3QixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYlksTUFBSSxFQUFFZCxtQkFBTyxDQUFDLHlCQUFELENBREE7QUFFYitELE9BQUssRUFBRS9ELG1CQUFPLENBQUMsMkJBQUQsQ0FGRDtBQUdic0csVUFBUSxFQUFFdEcsbUJBQU8sQ0FBQyxpQ0FBRCxDQUhKO0FBSWJ1RyxXQUFTLEVBQUV2RyxtQkFBTyxDQUFDLG1DQUFELENBSkw7QUFLYndHLGFBQVcsRUFBRXhHLG1CQUFPLENBQUMsdUNBQUQ7QUFMUCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSw2QkFBNkIsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E1QyxhQUFhLCtCQUErQixFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJEYXRhTG9hZGVyJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRlcjogJ3RpbWVyJyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBzaXplOiAnc2l6ZS1sYXJnZScsXG4gICAgICBjbGFzc05hbWU6ICdwcmltYXJ5J1xuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1kYXRhLWxvYWRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5jb2xvciwgdGhpcy5wcm9wcy5zaXplKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwibG9hZGVyLWxvYWRpbmdcIixcbiAgICAgIFwiZGF0YS1sb2FkZXJcIjogdGhpcy5wcm9wcy5sb2FkZXJcbiAgICB9KSwgISF0aGlzLnByb3BzLnRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSkpO1xuICB9XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRGF0YUxvYWRlciA9IHJlcXVpcmUoJy4vRGF0YUxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkxvYWRlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkZXI6ICd0aW1lcicsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJyxcbiAgICAgIGNsYXNzTmFtZTogJ3doaXRlLWJhY2tncm91bmQnLFxuICAgICAgc2l6ZTogJ3NpemUtbGFyZ2UnLFxuICAgICAgbGF5b3V0OiAnZmxleC1yb3cnXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwienItbG9hZGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLmNvbG9yLCB0aGlzLnByb3BzLmxheW91dClcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGFMb2FkZXIsIHtcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5kYXRhTG9hZGVyQ2xhc3NOYW1lLFxuICAgICAgbG9hZGVyOiB0aGlzLnByb3BzLmxvYWRlcixcbiAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yLFxuICAgICAgc2l6ZTogdGhpcy5wcm9wcy5zaXplXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIlxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpO1xuICB9XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9Mb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJMb2FkaW5nJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBsb2FkZXI6ICd0aW1lcicsXG4gICAgICBjb250ZW50OiAnTG9hZGluZy4uLidcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgJ0RhdGFMb2FkZXInOiByZXF1aXJlKCcuL0RhdGFMb2FkZXInKSxcbiAgJ0xvYWRlcic6IHJlcXVpcmUoJy4vTG9hZGVyJyksXG4gICdMb2FkaW5nJzogcmVxdWlyZSgnLi9Mb2FkaW5nJylcbn07IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIoZnVuY3Rpb24oZSx0KXtmb3IodmFyIHIgaW4gdCllW3JdPXRbcl19KSh0aGlzLGZ1bmN0aW9uKHIpe3ZhciBhPXt9O2Z1bmN0aW9uIG8oZSl7aWYoYVtlXSl7cmV0dXJuIGFbZV0uZXhwb3J0c312YXIgdD1hW2VdPXtpOmUsbDpmYWxzZSxleHBvcnRzOnt9fTtyW2VdLmNhbGwodC5leHBvcnRzLHQsdC5leHBvcnRzLG8pO3QubD10cnVlO3JldHVybiB0LmV4cG9ydHN9by5tPXI7by5jPWE7by5kPWZ1bmN0aW9uKGUsdCxyKXtpZighby5vKGUsdCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6dHJ1ZSxnZXQ6cn0pfX07by5yPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBTeW1ib2whPT1cInVuZGVmaW5lZFwiJiZTeW1ib2wudG9TdHJpbmdUYWcpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSl9O28udD1mdW5jdGlvbih0LGUpe2lmKGUmMSl0PW8odCk7aWYoZSY4KXJldHVybiB0O2lmKGUmNCYmdHlwZW9mIHQ9PT1cIm9iamVjdFwiJiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtvLnIocik7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6dHJ1ZSx2YWx1ZTp0fSk7aWYoZSYyJiZ0eXBlb2YgdCE9XCJzdHJpbmdcIilmb3IodmFyIGEgaW4gdClvLmQocixhLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsYSkpO3JldHVybiByfTtvLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uIGUoKXtyZXR1cm4gdFtcImRlZmF1bHRcIl19OmZ1bmN0aW9uIGUoKXtyZXR1cm4gdH07by5kKGUsXCJhXCIsZSk7cmV0dXJuIGV9O28ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX07by5wPVwiXCI7cmV0dXJuIG8oby5zPTMpfShbZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24oKXtlLmV4cG9ydHM9dGhpc1tcIlJlYWN0XCJdfSkoKX0sZnVuY3Rpb24oZSx0LHIpe3ZhciBhPXpudWkuUmVhY3R8fHIoMCk7ZS5leHBvcnRzPWEuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJEYXRhTG9hZGVyXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uIGUoKXtyZXR1cm57bG9hZGVyOlwidGltZXJcIixjb2xvcjpcInByaW1hcnlcIixzaXplOlwic2l6ZS1sYXJnZVwiLGNsYXNzTmFtZTpcInByaW1hcnlcIn19LHJlbmRlcjpmdW5jdGlvbiBlKCl7cmV0dXJuIGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1kYXRhLWxvYWRlclwiLHRoaXMucHJvcHMuY2xhc3NOYW1lLHRoaXMucHJvcHMuY29sb3IsdGhpcy5wcm9wcy5zaXplKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSxhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwibG9hZGVyLWxvYWRpbmdcIixcImRhdGEtbG9hZGVyXCI6dGhpcy5wcm9wcy5sb2FkZXJ9KSwhIXRoaXMucHJvcHMudGl0bGUmJmEuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwidGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSkpfX0pfSxmdW5jdGlvbihlLHQscil7dmFyIGE9em51aS5SZWFjdHx8cigwKTt2YXIgbz1yKDEpO2UuZXhwb3J0cz1hLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSTG9hZGVyXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uIGUoKXtyZXR1cm57bG9hZGVyOlwidGltZXJcIixjb2xvcjpcIndoaXRlXCIsY29udGVudDpcIkxvYWRpbmcuLi5cIixjbGFzc05hbWU6XCJ3aGl0ZS1iYWNrZ3JvdW5kXCIsc2l6ZTpcInNpemUtbGFyZ2VcIixsYXlvdXQ6XCJmbGV4LXJvd1wifX0scmVuZGVyOmZ1bmN0aW9uIGUoKXtyZXR1cm4gYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnRoaXMucHJvcHMuc3R5bGUsY2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItbG9hZGVyXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUsdGhpcy5wcm9wcy5jb2xvcix0aGlzLnByb3BzLmxheW91dCl9LGEuY3JlYXRlRWxlbWVudChvLHtjbGFzc05hbWU6dGhpcy5wcm9wcy5kYXRhTG9hZGVyQ2xhc3NOYW1lLGxvYWRlcjp0aGlzLnByb3BzLmxvYWRlcixjb2xvcjp0aGlzLnByb3BzLmNvbG9yLHNpemU6dGhpcy5wcm9wcy5zaXplfSksYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImNvbnRlbnRcIn0sdGhpcy5wcm9wcy5jb250ZW50KSl9fSl9LGZ1bmN0aW9uKGUsdCxyKXtlLmV4cG9ydHM9e0RhdGFMb2FkZXI6cigxKSxMb2FkZXI6cigyKSxMb2FkaW5nOnIoNCl9fSxmdW5jdGlvbihlLHQscil7dmFyIGE9em51aS5SZWFjdHx8cigwKTt2YXIgbz1yKDIpO2UuZXhwb3J0cz1hLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSTG9hZGluZ1wiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbiBlKCl7cmV0dXJue2RhdGE6bnVsbCxsb2FkZXI6XCJ0aW1lclwiLGNvbnRlbnQ6XCJMb2FkaW5nLi4uXCJ9fSxyZW5kZXI6ZnVuY3Rpb24gZSgpe2lmKHRoaXMucHJvcHMuZGF0YSl7cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW59ZWxzZXtyZXR1cm4gYS5jcmVhdGVFbGVtZW50KG8sdGhpcy5wcm9wcyl9fX0pfV0pKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsInJlcXVpcmUoJ3pudWktcmVhY3QnKTtcbmlmKHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJlcXVpcmUoJy4vX18vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9idWlsZC9pbmRleCcpO1xuICAgIH1lbHNle1xuICAgICAgICByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguYnVuZGxlLmpzJyk7XG4gICAgfVxufWVsc2Uge1xuICAgIHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LmJ1bmRsZS5qcycpO1xufSIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZScsXG5cdF9fb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0Rpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgb25DbGljaz17dGhpcy5fX29uQ2xpY2t9IGNsYXNzTmFtZT17J3pyLXBhZ2VyLXBhZ2UgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbmZ1bmN0aW9uIHJhbmdlICggc3RhcnQsIGVuZCApIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICggdmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrICkge1xuICAgICAgICByZXMucHVzaCggaSApO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICdQYWdlcycsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiAnUmVjb3JkcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIGZpcnN0OiAnZmFTdGVwQmFja3dhcmQnLCBcbiAgICAgICAgICAgICAgICBwcmV2OiAnZmFBcnJvd0xlZnQnLFxuICAgICAgICAgICAgICAgIHByZXZTZXQ6ICdmYUZhc3RCYWNrd2FyZCcsXG4gICAgICAgICAgICAgICAgbmV4dFNldDogJ2ZhRmFzdEZvcndhcmQnLFxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYUFycm93UmlnaHQnLFxuICAgICAgICAgICAgICAgIGxhc3Q6ICdmYVN0ZXBGb3J3YXJkJ1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblxuXHRcdH1cblx0fSxcblx0aGFuZGxlRmlyc3RQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKDEpO1xuICAgIH0sXG4gICAgaGFuZGxlUHJldmlvdXNQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCAtIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTmV4dFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy5jdXJyZW50ICsgMSk7XG4gICAgfSxcbiAgICBoYW5kbGVMYXN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc05leHREaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQodGhpcy5wcm9wcy50b3RhbCk7XG4gICAgfSxcblxuICAgIGhhbmRsZU1vcmVQcmV2UGFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlTW9yZU5leHRQYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5jYWxjQmxvY2tzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZWQoKGJsb2Nrcy5jdXJyZW50ICogYmxvY2tzLnNpemUpICsgMSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAoIHBhZ2VJbmRleCApIHtcblx0XHR0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKHBhZ2VJbmRleCk7XG4gICAgfSxcblxuICAgIGNhbGNCbG9ja3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsOiBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbC90aGlzLnByb3BzLnZpc2libGVQYWdlcyksXG4gICAgICAgICAgICBjdXJyZW50OiBNYXRoLmNlaWwodGhpcy5wcm9wcy5jdXJyZW50L3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzKSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMucHJvcHMudmlzaWJsZVBhZ2VzXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGlzUHJldkRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgICB9LFxuXG4gICAgaXNOZXh0RGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3VycmVudCA+PSB0aGlzLnByb3BzLnRvdGFsO1xuICAgIH0sXG5cbiAgICBpc1ByZXZNb3JlSGlkZGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgcmV0dXJuICggYmxvY2tzLnRvdGFsID09PSAxICkgfHwgKCBibG9ja3MuY3VycmVudCA9PT0gMSApO1xuICAgIH0sXG5cbiAgICBpc05leHRNb3JlSGlkZGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmNhbGNCbG9ja3MoKTtcbiAgICAgICAgcmV0dXJuICggYmxvY2tzLnRvdGFsID09PSAwICkgfHwgKCBibG9ja3MuY3VycmVudCA9PT0gYmxvY2tzLnRvdGFsICk7XG4gICAgfSxcblxuICAgIHZpc2libGVSYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmxvY2tzICA9IHRoaXMuY2FsY0Jsb2NrcygpLFxuXHRcdFx0c3RhcnQgICA9IChibG9ja3MuY3VycmVudCAtIDEpICogYmxvY2tzLnNpemUsXG5cdFx0XHRkZWx0YSAgID0gdGhpcy5wcm9wcy50b3RhbCAtIHN0YXJ0LFxuXHRcdFx0ZW5kICAgICA9IHN0YXJ0ICsgKCAoZGVsdGEgPiBibG9ja3Muc2l6ZSkgPyBibG9ja3Muc2l6ZSA6IGRlbHRhICk7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhcnQgKyAxLCBlbmQgKyAxIF07XG4gICAgfSxcblxuXHQvKipcbiAgICAgKiAjIyMgcmVuZGVyUGFnZXMoKVxuICAgICAqIFJlbmRlcnMgYmxvY2sgb2YgcGFnZXMnIGJ1dHRvbnMgd2l0aCBudW1iZXJzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IHJhbmdlIC0gcGFpciBvZiBbc3RhcnQsIGZyb21dLCBgZnJvbWAgLSBub3QgaW5jbHVzaXZlLlxuICAgICAqIEByZXR1cm4ge1JlYWN0LkVsZW1lbnRbXX0gLSBhcnJheSBvZiBSZWFjdCBub2Rlcy5cbiAgICAgKi9cbiAgICByZW5kZXJQYWdlczogZnVuY3Rpb24gKCBwYWlyICkge1xuICAgICAgICByZXR1cm4gcmFuZ2UoIHBhaXJbMF0sIHBhaXJbMV0gKS5tYXAoZnVuY3Rpb24gKCBwYWdlSW5kZXgsIGluZGV4ICkge1xuICAgICAgICAgICAgcmV0dXJuIChcblx0XHRcdFx0PFBhZ2Uga2V5PXtpbmRleH1cblx0XHRcdFx0XHRpc0FjdGl2ZT17dGhpcy5wcm9wcy5jdXJyZW50ID09PSBwYWdlSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1udW1iZXJlZC1wYWdlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVQYWdlQ2hhbmdlZChwYWdlSW5kZXgpfT57cGFnZUluZGV4fTwvUGFnZT5cblx0XHRcdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtcInpyLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snZmlyc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1sncHJldiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ3ByZXZTZXQnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuPXt0aGlzLmlzUHJldk1vcmVIaWRkZW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vcmVQcmV2UGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ3ByZXZTZXQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyUGFnZXMoIHRoaXMudmlzaWJsZVJhbmdlKCkgKX1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWyduZXh0U2V0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbj17dGhpcy5pc05leHRNb3JlSGlkZGVuKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3JlTmV4dFBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWyduZXh0U2V0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ25leHQnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1uZXh0LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNOZXh0RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb25zWyduZXh0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWydsYXN0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGFzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMYXN0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snbGFzdCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG5cdFx0XHRcdCAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L25hdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnUGFnZXJCYXInLFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNEaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyd6ci1wYWdlci1iYXIgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZXx8JycpICsgJyAnKyAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpICsgJyAnKyAodGhpcy5wcm9wcy5pc0Rpc2FibGVkP1wiXCI6XCJlbmFibGVkXCIpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZXIgPSByZXF1aXJlKCcuL1BhZ2VyJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQYWdlclZpZXcnLFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlSW5kZXg6IDEsXG5cdFx0XHRwYWdlU2l6ZTogMTAsXG5cdFx0XHR2aXNpYmxlUGFnZTogNSxcblx0XHRcdGRhdGFGaXhlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB7XG5cdFx0XHRjb3VudDogMCxcblx0XHRcdGN1cnJlbnQ6IDEsXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHRvdGFsOiAwLFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX19oYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKG5ld1BhZ2Upe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChuZXdQYWdlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgobmV3UGFnZSk7XG5cdFx0fVxuXHR9LFxuXHRzZXRQYWdlSW5kZXg6IGZ1bmN0aW9uIChwYWdlSW5kZXgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3ZpZXdSZW5kZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG5cdFx0dmFyIF92aWV3ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy52aWV3IHx8IHRoaXMucHJvcHMudmlld1JlbmRlciwgem4uZXh0ZW5kKHtcblx0XHRcdHJlc3BvbnNlOiByZXNwb25zZSxcblx0XHRcdHBhZ2VyVmlldzogdGhpc1xuXHRcdH0sIHRoaXMuc3RhdGUpKTtcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRlbnRcIj57X3ZpZXd9PC9kaXY+O1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5kYXRhSGFuZGxlciAmJiB0aGlzLnByb3BzLmRhdGFIYW5kbGVyKGRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoX3JldHVybik7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly9UT0RPOiBcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhTG9hZGluZzogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dmFyIF9tZXRob2QgPSBkYXRhLm1ldGhvZHx8J3Bvc3QnLFxuXHRcdFx0X3BhcmFtcyA9IHt9LFxuXHRcdFx0X2tleU1hcHMgPSB6bi5kZWVwQXNzaWduKHtcblx0XHRcdFx0dG90YWw6IFwidG90YWxcIixcblx0XHRcdFx0cGFnZUluZGV4OiAncGFnZUluZGV4Jyxcblx0XHRcdFx0cGFnZVNpemU6ICdwYWdlU2l6ZScsXG5cdFx0XHRcdGRhdGE6ICdkYXRhJ1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5rZXlNYXBzKTtcblxuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMucHJvcHMucGFnZVNpemUgfHwgMTA7XG5cblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUua2V5TWFwcyA9IF9rZXlNYXBzO1xuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX2xvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPSdMb2FkaW5nLi4uJyAvPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlci12aWV3XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmRhdGFGaXhlZH0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEgJiYgPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXt0aGlzLl9fdmlld1JlbmRlcn0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX19sb2FkaW5nUmVuZGVyKCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLl9fb25EYXRhTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlldy1wYWdlclwiPlxuXHRcdFx0XHRcdDxQYWdlciB0b3RhbD17TWF0aC5jZWlsKHRoaXMuc3RhdGUuY291bnQvdGhpcy5wcm9wcy5wYWdlU2l6ZSl9XG5cdFx0XHRcdFx0XHRjb3VudD17dGhpcy5zdGF0ZS5jb3VudH1cblx0XHRcdFx0XHRcdGN1cnJlbnQ9e3RoaXMuc3RhdGUucGFnZUluZGV4fVxuXHRcdFx0XHRcdFx0cGFnZVNpemU9e3RoaXMucHJvcHMucGFnZVNpemV9XG5cdFx0XHRcdFx0XHR2aXNpYmxlUGFnZXM9e3RoaXMucHJvcHMudmlzaWJsZVBhZ2VzfVxuXHRcdFx0XHRcdFx0b25QYWdlQ2hhbmdlZD17dGhpcy5fX2hhbmRsZVBhZ2VDaGFuZ2VkfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQYWdlID0gcmVxdWlyZSgnLi9QYWdlJyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonU2ltcGxlUGFnZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0ZXh0czoge1xuICAgICAgICAgICAgICAgIHBhZ2U6ICdQYWdlcycsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiAnUmVjb3JkcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIGZpcnN0OiAnZmFTdGVwQmFja3dhcmQnLCBcbiAgICAgICAgICAgICAgICBwcmV2OiAnZmFBcnJvd0xlZnQnLFxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYUFycm93UmlnaHQnLFxuICAgICAgICAgICAgICAgIGxhc3Q6ICdmYVN0ZXBGb3J3YXJkJ1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdH0sXG5cdGhhbmRsZUZpcnN0UGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCgxKTtcbiAgICB9LFxuICAgIGhhbmRsZVByZXZpb3VzUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmlzUHJldkRpc2FibGVkKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlQ2hhbmdlZCh0aGlzLnByb3BzLmN1cnJlbnQgLSAxKTtcbiAgICB9LFxuICAgIGhhbmRsZU5leHRQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMuY3VycmVudCArIDEpO1xuICAgIH0sXG4gICAgaGFuZGxlTGFzdFBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2VkKHRoaXMucHJvcHMudG90YWwpO1xuICAgIH0sXG4gICAgaGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uICggcGFnZUluZGV4ICkge1xuXHRcdHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQocGFnZUluZGV4KTtcbiAgICB9LFxuICAgIGlzUHJldkRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPD0gMTtcbiAgICB9LFxuICAgIGlzTmV4dERpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnQgPj0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICB9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e1wienItc2ltcGxlLXBhZ2VyIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snZmlyc3QnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maXJzdC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzUHJldkRpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGaXJzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2ZpcnN0J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWNvbnNbJ3ByZXYnXSAmJiA8UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmV2LXBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuaXNQcmV2RGlzYWJsZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1sncHJldiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhIXRoaXMucHJvcHMudG90YWwgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyXCI+e3RoaXMucHJvcHMuY3VycmVudH0gLyB7dGhpcy5wcm9wcy50b3RhbH0ge3RoaXMucHJvcHMudGV4dHMucGFnZX08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICEhdGhpcy5wcm9wcy5jb3VudCAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtbnVtYmVyXCI+e3RoaXMucHJvcHMuY291bnR9IHt0aGlzLnByb3BzLnRleHRzLnJlY29yZH08L3NwYW4+KSB9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25zWyduZXh0J10gJiYgPFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbmV4dC1wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLmlzTmV4dERpc2FibGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29uc1snbmV4dCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pY29uc1snbGFzdCddICYmIDxQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxhc3QtcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5pc05leHREaXNhYmxlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdFBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbnNbJ2xhc3QnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZTogcmVxdWlyZSgnLi9QYWdlJyksXG4gICAgUGFnZXI6IHJlcXVpcmUoJy4vUGFnZXInKSxcbiAgICBQYWdlckJhcjogcmVxdWlyZSgnLi9QYWdlckJhcicpLFxuICAgIFBhZ2VyVmlldzogcmVxdWlyZSgnLi9QYWdlclZpZXcnKSxcbiAgICBTaW1wbGVQYWdlcjogcmVxdWlyZSgnLi9TaW1wbGVQYWdlcicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ6clwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImljb25cIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==