require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var pager = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <pager.Pager total={120} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
        <pager.SimplePager total={120} count={200} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
        <pager.PagerView 
            data={{
                method: 'post',
                url: 'http://127.0.0.1:8100/freeorder.merchant/order.bill/pagingCustomerOrderBills/5f0cbbee-8f84-4f1b-89fd-f5225fc53ef1',
                data: {

                }
            }}
            pageSize={2}
            viewRender={function (argv){
                console.log(argv);
            }} />
        <pager.PagerView 
            data={{
                method: "get",
                url: "https://devnet-testing.cisco.com/v1/taglib/project"
            }}
            dataHandler={function (response, pagerView){
                var _data = response.data;
                return {
                    data: _data.items,
                    pageSize: _data.pageSize,
                    count: _data.total
                };
            }}
            keyMaps={{
                total: "total",
				pageIndex: 'pageNum',
				pageSize: 'pageSize',
				data: 'data'
            }}
            pageSize={2}
            viewRender={function (argv){
                console.log(argv);
            }} />
    </div>
});