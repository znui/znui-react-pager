var React = znui.React || require('react');

module.exports = React.createClass({
	displayName: 'Page',
	__onClick: function (){
		if(this.props.isDisabled){
			return false;
		}
		this.props.onClick && this.props.onClick();
	},
	render: function (){
		if(this.props.isHidden){
			return null;
		}
		return (
			<li onClick={this.__onClick} className={'zr-pager-page ' + (this.props.className||'') + ' '+ (this.props.isActive?"active":"") + ' '+ (this.props.isDisabled?"":"enabled")}>
				{this.props.children}
			</li>
		);
	}
});