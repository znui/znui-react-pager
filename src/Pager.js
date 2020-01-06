var React = znui.React || require('react');
var Page = require('./Page');
var SVGIcon = require('znui-react-icon').SVGIcon;

function range ( start, end ) {
    var res = [];
    for ( var i = start; i < end; i++ ) {
        res.push( i );
    }

    return res;
}

module.exports = React.createClass({
	displayName:'Pager',
	getDefaultProps: function (){
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
	getInitialState: function (){
		return {

		}
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

    handleMorePrevPages: function () {
        this.handlePageChanged(this.props.current - 1);
    },

    handleMoreNextPages: function () {
        var blocks = this.calcBlocks();
        this.handlePageChanged((blocks.current * blocks.size) + 1);
    },

    handlePageChanged: function ( pageIndex ) {
		this.props.onPageChanged && this.props.onPageChanged(pageIndex);
    },

    calcBlocks: function () {
        return {
            total: Math.ceil(this.props.total/this.props.visiblePages),
            current: Math.ceil(this.props.current/this.props.visiblePages),
            size: this.props.visiblePages
        };
    },

    isPrevDisabled: function () {
        return this.props.current <= 1;
    },

    isNextDisabled: function () {
        return this.props.current >= this.props.total;
    },

    isPrevMoreHidden: function () {
        var blocks = this.calcBlocks();
        return ( blocks.total === 1 ) || ( blocks.current === 1 );
    },

    isNextMoreHidden: function () {
        var blocks = this.calcBlocks();
        return ( blocks.total === 0 ) || ( blocks.current === blocks.total );
    },

    visibleRange: function () {
        var blocks  = this.calcBlocks(),
			start   = (blocks.current - 1) * blocks.size,
			delta   = this.props.total - start,
			end     = start + ( (delta > blocks.size) ? blocks.size : delta );

        return [ start + 1, end + 1 ];
    },

	/**
     * ### renderPages()
     * Renders block of pages' buttons with numbers.
     * @param {Number[]} range - pair of [start, from], `from` - not inclusive.
     * @return {React.Element[]} - array of React nodes.
     */
    renderPages: function ( pair ) {
        return range( pair[0], pair[1] ).map(function ( pageIndex, index ) {
            return (
				<Page key={index}
					isActive={this.props.current === pageIndex}
                    className="btn-numbered-page"
					onClick={()=>this.handlePageChanged(pageIndex)}>{pageIndex}</Page>
			);
        }.bind(this));
    },
	render:function(){
		return (
			<nav className={"zr-pager " + this.props.className}>
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
                    {
                        this.props.icons['prevSet'] && <Page
                            className="btn-prev-more"
                            isHidden={this.isPrevMoreHidden()}
                            onClick={this.handleMorePrevPages}>
                            <SVGIcon icon={this.props.icons['prevSet']} />
                        </Page>
                    }

					{this.renderPages( this.visibleRange() )}

                    {
                        this.props.icons['nextSet'] && <Page
                            className="btn-next-more"
                            isHidden={this.isNextMoreHidden()}
                            onClick={this.handleMoreNextPages}>
                            <SVGIcon icon={this.props.icons['nextSet']} />
                        </Page>
                    }
                    
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
                <div className="number">
                    { !!this.props.total && (<span className="page-number">{this.props.current} / {this.props.total} {this.props.texts.page}</span>) }
				    { !!this.props.count && (<span className="count-number">{this.props.count} {this.props.texts.record}</span>) }
                </div>
			</nav>
		);
	}
});
