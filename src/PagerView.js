var React = znui.React || require('react');

var PagerView = React.createClass({
    displayName: 'PagerView',
    getDefaultProps: function (){
        return {
            pageIndex: 1,
			pageSize: 10,
			visiblePage: 5,
			dataFixed: false
        };
    },
    getInitialState: function (){
        return {
			total: 0,
			count: 0,
			current: this.props.pageIndex
        };
    },
    __handlePageChanged: function (newPage){
		var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);
		if(_return !== false) {
			if(this.props.data){
				if(this.props.data._argv) {
					this.props.data._argv.data.pageIndex = newPage;
				}
				this.props.data.refresh();
			}

			this.setState({
				current: newPage
			});
		}
	},
	__dataHandler: function (data){
		var _return = this.props.onPagerDataHandler && this.props.onPagerDataHandler(data, this);
		if(_return !== false) {
			if(data.result[1] && data.result[1][0]){
				this.setCount(data.result[1][0]);
			}
		}
	},
	setPageIndex: function (pageIndex){
		this.setState({
			current: pageIndex
		});
	},
	setCount: function (count){
		this.setState({
			count: count,
			total: Math.ceil( count / this.props.pageSize)
		});
	},
    render: function (){
		var View = PagerView.getKey(this.props.view);
		if(!View){
			return null;
		}
        return (
			<div className={znui.react.classname("zr-pager-view", this.props.className)} data-fixed={this.props.dataFixed}>
				<div className="view-content">
					<View {...this.props} onCallReset={()=>this.setState({current: 1})} className={this.props.viewClassName} dataHandler={this.__dataHandler} />
				</div>
				<div className="view-pager">
					<Pager total={this.state.total}
						count={this.state.count}
						current={this.state.current}
						visiblePages={this.props.visiblePage}
						onPageChanged={this.__handlePageChanged} />
				</div>
			</div>
		);
    }
});

znui.react.generateRegister(PagerView);

module.exports = PagerView;