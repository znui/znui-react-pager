require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var pager = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <pager.Pager total={120} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
        <pager.SimplePager total={120} count={200} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
    </div>
});