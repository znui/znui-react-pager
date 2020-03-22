"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var Pager = require('./Pager');

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