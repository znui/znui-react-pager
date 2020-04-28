var React = znui.React || require('react');
var Pager = require('./Pager');
var loader = require('znui-react-loader');

module.exports = React.createClass({
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
			count: 0,
			current: 1,
			data: [],
			total: 0,
			pageIndex: this.props.pageIndex
        };
    },
    __handlePageChanged: function (newPage){
		var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);
		if(_return !== false) {
			this.setPageIndex(newPage);
		}
	},
	setPageIndex: function (pageIndex){
		if(this.data){
			this.state.pageIndex = pageIndex;
			this.data.refresh();
		}
	},
	__viewRender: function (response){
		var _view = znui.react.createReactElement(this.props.view || this.props.viewRender, zn.extend({
			response: response,
			pagerView: this
		}, this.state));
		return <div className="view-content">{_view}</div>;
	},
	__onDataLoaded: function (data){
		var _return = this.props.dataHandler && this.props.dataHandler(data, this);
		if(_return !== false) {
			if(typeof _return == 'object'){
				this.setState(_return);
			}else{
				//TODO: 
			}
		}
	},
	__onDataLoading: function (data, lifycycle){
		var _method = data.method||'post',
			_params = {},
			_keyMaps = zn.deepAssign({
				total: "total",
				pageIndex: 'pageIndex',
				pageSize: 'pageSize',
				data: 'data'
			}, this.props.keyMaps);


		_params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
		_params[_keyMaps.pageSize] = this.props.pageSize || 10;

		if(_method == 'get'){
			data = zn.deepAssign(data, {
				params: _params
			});
		}else{
			data = zn.deepAssign(data, {
				data: _params
			});
		}
		this.state.keyMaps = _keyMaps;

		return data;
	},
	__onDataCreated: function (data, lifycycle){
		this.data = data;
		this.props.onDataCreated && this.props.onDataCreated(data, this);
	},
	__loadingRender: function (){
		return <loader.DataLoader loader="wave" title='Loading...' />;
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-pager-view", this.props.className)} 
				style={znui.react.style(this.props.style)}
				data-fixed={this.props.dataFixed}>
				{
					this.props.data && <znui.react.DataLifecycle 
											data={this.props.data}
											render={this.__viewRender} 
											loadingRender={()=>this.__loadingRender()}
											onLoading={this.__onDataLoading}
											onDataCreated={this.__onDataCreated}
											onFinished={this.__onDataLoaded} />
				}
				<div className="view-pager">
					<Pager total={Math.ceil(this.state.count/this.props.pageSize)}
						count={this.state.count}
						current={this.state.pageIndex}
						pageSize={this.props.pageSize}
						visiblePages={this.props.visiblePages}
						onPageChanged={this.__handlePageChanged} />
				</div>
			</div>
		);
	}
});