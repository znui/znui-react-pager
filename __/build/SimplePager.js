"use strict";

var React = znui.React || require('react');

var Page = require('./Page');

var SVGIcon = require('znui-react-icon').SVGIcon;

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