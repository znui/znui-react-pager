require('./index.less');
require('znui-react');
require('../src/index.less');
var React = require('react');
var ReactDOM = require('react-dom');
var pager = require('../src/index.js');

ReactDOM.render(
    <div>
        <pager.Pager total={120} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
        <pager.PagerView pageIndex={1} pageSize={10} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
        <pager.SimplePager total={120} count={200} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
    </div>,
    document.getElementById('container'),
);

