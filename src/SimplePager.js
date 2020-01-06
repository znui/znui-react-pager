var React = znui.React || require('react');
var Page = require('./Page');
var SVGIcon = require('znui-react-icon').SVGIcon;

module.exports = React.createClass({
	displayName:'SimplePager',
	getDefaultProps: function (){
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
	render:function(){
		return (
			<nav className={"zr-simple-pager " + this.props.className}>
				<ul className="pages">
                    {
                        this.props.icons['first'] && <Page
                            className="btn-first-page"
                            isDisabled={this.isPrevDisabled()}
                            onClick={this.handleFirstPage}>
                            <SVGIcon icon={this.props.icons['first']} />
                        </Page>
                    }
                    
                    {
                        this.props.icons['prev'] && <Page
                            className="btn-prev-page"
                            isDisabled={this.isPrevDisabled()}
                            onClick={this.handlePreviousPage}>
                            <SVGIcon icon={this.props.icons['prev']} />
                        </Page>
                    }

                    <li className="number">
                        { !!this.props.total && (<span className="page-number">{this.props.current} / {this.props.total} {this.props.texts.page}</span>) }
                        { !!this.props.count && (<span className="count-number">{this.props.count} {this.props.texts.record}</span>) }
                    </li>
                    
                    {
                        this.props.icons['next'] && <Page
                            className="btn-next-page"
                            isDisabled={this.isNextDisabled()}
                            onClick={this.handleNextPage}>
                            <SVGIcon icon={this.props.icons['next']} />
                        </Page>
                    }

                    {
                        this.props.icons['last'] && <Page
                            className="btn-last-page"
                            isDisabled={this.isNextDisabled()}
                            onClick={this.handleLastPage}>
                            <SVGIcon icon={this.props.icons['last']} />
                        </Page>
                    }
				</ul>
			</nav>
		);
	}
});