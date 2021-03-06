#### [Demos and Documentation](https://fusioncharts.github.io/backbone-fusioncharts/)

# backbone-fusioncharts

A simple and lightweight Backbone wrapper which provides bindings for FusionCharts JavaScript Charting Library. It easily adds rich and interactive charts to any Backbone Project.

## Installation from npm

To install `backbone-fusioncharts`, run:

```bash
$ npm install backbone-fusioncharts --save
```

To install `backbone`, run:

```bash
$ npm install backbone --save
```

To install `fusioncharts`, run:

```bash
$ npm install fusioncharts --save
```

Import `backbone-fusioncharts` in your Backbone web application using any of the CommonJS, ES6 or AMD include style.

**CommonJS**
```js
const BackboneFusionCharts = require('backbone-fusioncharts');
```

**ES6**
```js
import BackboneFusionCharts from 'backbone-fusioncharts';
```

**AMD**
```js
define(['backbone-fusioncharts'], (BackboneFusionCharts) => {

});
```

## Installation from bower

To install `backbone-fusioncharts`, run:

```bash
$ bower install backbone-fusioncharts --save
```

To install `backbone`, run:

```bash
$ bower install backbone --save
```

To install `fusioncharts`, run:

```bash
$ bower install fusioncharts --save
```

Import `backbone-fusioncharts` in your Backbone web application through HTML script tag.

**HTML**
```html
<script src="bower_components/backbone-fusioncharts/dist/backbone-fusioncharts.min.js" type="text/javascript"></script>
```

## Getting Started

For rendering a simple chart use the following code 

```js
const dataSource = {
  chart: {
    caption: 'Backbone FusionCharts Sample',
    theme: 'fint',
  },
  data: [
    { value: 1.9 },
    { value: 2.3 },
    { value: 2.1 },
  ],
};

const fc = new BackboneFusionCharts({
  renderAt: 'chart-container',
  type: 'Pie2d',
  dataSource,
});


fc.model // This is the model

fc.view // This is the view

fc.view.chart // This is the FusionCharts instance
```

Here's the HTML template for the above example

```html
<div id="chart-container"></div>
```

## Test

```sh
$ npm test
```

## Contributing

* Clone the repository
* Install dependencies
* Build the library
* Build the sample script
* Open the sample template in your browser 

```sh
$ git clone https://github.com/fusioncharts/backbone-fusioncharts.git
$ cd backbone-fusioncharts
$ npm i
$ npm run build 
$ npm run build:example
```

To build, run:

```sh
$ npm run build
```

### [Demos and Documentation](https://fusioncharts.github.io/backbone-fusioncharts/)
