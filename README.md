# Backbone FusionCharts

## Quick Start

### Step 1: Install the `backbone-fusioncharts` wrapper

In the terminal run the following command:

```
$ npm install backbone-fusioncharts --save
```

### Step 2: Include the `BackboneFusionCharts` controller

You can include the controller either through browser script tag or using any of the CommonJS, ES6 or AMD include style.

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

### Step 3: Render your chart

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