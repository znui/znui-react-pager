# znui-react-pager
React Pager Component


[![npm](https://img.shields.io/npm/v/znui-react-pager.svg)](https://www.npmjs.com/package/znui-react-pager)
[![npm](https://img.shields.io/npm/dm/znui-react-pager.svg)](https://www.npmjs.com/package/znui-react-pager)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-pager/example/www/index.html)

## Installation

```bash
npm install znui-react-pager -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var pager = require('znui-react-pager');

znui.react.createApplication({
    render: <div>
        <pager.Pager total={120} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
        <pager.SimplePager total={120} count={200} current={17} onPageChanged={(a, b, c)=>console.log(a, b, c)} />
    </div>
});

```

## License

MIT