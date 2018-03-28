#### [Demos and Documentation](https://fusioncharts.github.io/backbone-fusioncharts/)

# backbone-fusioncharts

A simple and lightweight Backbone wrapper which provides bindings for FusionCharts JavaScript Charting Library. It easily adds rich and interactive charts to any Backbone Project.

## Installation

To install `backbone-fusioncharts`, run:

```bash
$ npm install backbone-fusioncharts --save
```

Also install `fusioncharts`, if it is not already installed:

```bash
$ npm install fusioncharts --save
```

## Getting Started

After installing `backbone-fusioncharts`, import it in your Backbone app:

Include the controller either through HTML script tag or using any of the CommonJS, ES6 or AMD include style.

HTML
```html
<script src="./node_modules/backbone-fusioncharts/dist/backbone-fusioncharts.min.js" type="text/javascript"></script>
```

CommonJS
```js
const BackboneFusionCharts = require('backbone-fusioncharts');
```

ES6
```js
import BackboneFusionCharts from 'backbone-fusioncharts';
```

AMD
```js
define(['backbone-fusioncharts'], (BackboneFusionCharts) => {

});
```

For rendering a simple chart

```js
import BackboneFusionCharts from 'backbone-fusioncharts';

const dataSource = {
  chart: {
    caption: 'Vue FusionCharts Sample',
    theme: 'fint',
  },
  data: [
    { value: 1.9 },
    { value: 2.3 },
    { value: 2.1 },
  ],
};

const fc = new BackboneFusionCharts({
  renderAt: 'fusioncharts',
  type: 'Pie2d',
  dataSource,
});


fc.model // This is the model

fc.view // This is the view

fc.view.chart // This is the FusionCharts instance
```

Here's the HTML template for the above example

```html
<div id="fusioncharts"></div>
```

## Test

```sh
$ npm test
```

## Contributing

* Clone the repository.
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
