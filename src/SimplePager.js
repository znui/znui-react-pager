var React = znui.React || require('react');
var Page = require('./Page');

module.exports = React.createClass({
	displayName:'SimplePager',
	getDefaultProps: function (){
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
	handleFirstPage: function () {
        if(this.isPrevDisabled()) return;
        this.handlePageChanged(1);
    },
    handlePreviousPage: function () {
        if(this.isPrevDisabled()) return;
        this.handlePageChanged(this.props.current - 1);
    },
    handleNextPage: function () {
        if(this.isNextDisabled()) return;
        this.handlePageChanged(this.props.current + 1);
    },
    handleLastPage: function () {
        if (this.isNextDisabled()) return;
        this.handlePageChanged(this.props.total);
    },
    handlePageChanged: function ( pageIndex ) {
		this.props.onPageChanged && this.props.onPageChanged(pageIndex);
    },
    isPrevDisabled: function () {
        return this.props.current <= 1;
    },
    isNextDisabled: function () {
        return this.props.current >= this.props.total;
    },
    __renderIcon: function (value){
        switch(value){
            case 'first':
                return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-backward" className="icon svg-inline--fa fa-step-backward fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"></path></svg>;
            case 'prev':
                return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="icon svg-inline--fa fa-arrow-left fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>;
            case 'prevSet':
                return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fast-backward" className="icon svg-inline--fa fa-fast-backward fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"></path></svg>;
            case 'nextSet':
                return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fast-forward" className="icon svg-inline--fa fa-fast-forward fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"></path></svg>;
            case 'next':
                return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="icon svg-inline--fa fa-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>;
            case 'last':
                return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-forward" className="icon svg-inline--fa fa-step-forward fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"></path></svg>;
        }
    },
	render:function(){
		return (
			<nav className={"zr-simple-pager " + this.props.className}>
				<ul className="pages">
                    <Page
                        className="btn-first-page"
                        isDisabled={this.isPrevDisabled()}
                        onClick={this.handleFirstPage}>
                        {this.__renderIcon('first')}
                    </Page>
                    <Page
                        className="btn-prev-page"
                        isDisabled={this.isPrevDisabled()}
                        onClick={this.handlePreviousPage}>
                        {this.__renderIcon('prev')}
                    </Page>

                    <li className="number">
                        { !!this.props.total && (<span className="page-number">{this.props.current} / {this.props.total} {this.props.texts.page}</span>) }
                        { !!this.props.count && (<span className="count-number">{this.props.count} {this.props.texts.record}</span>) }
                    </li>
                    
                    <Page
                        className="btn-next-page"
                        isDisabled={this.isNextDisabled()}
                        onClick={this.handleNextPage}>
                        {this.__renderIcon('next')}
                    </Page>
                    <Page
                        className="btn-last-page"
                        isDisabled={this.isNextDisabled()}
                        onClick={this.handleLastPage}>
                        {this.__renderIcon('last')}
                    </Page>
				</ul>
			</nav>
		);
	}
});