var React = znui.React || require('react');

module.exports = React.createClass({
	displayName: 'PagerBar',
	__onClick: function (){
		if(this.props.isDisabled){
			return false;
		}
		this.props.onClick && this.props.onClick();
	},
	render: function (){
		return (
			<div className={'zr-pager-bar ' + (this.props.className||'') + ' '+ (this.props.isActive?"active":"") + ' '+ (this.props.isDisabled?"":"enabled")}>
				{this.props.children}
			</div>
		);
	}
});