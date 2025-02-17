"use strict";

var React = znui.React || require('react');
var Pager = require('./Pager');
var loader = require('znui-react-loader');
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