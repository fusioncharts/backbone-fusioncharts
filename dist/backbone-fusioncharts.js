(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BackboneFusionCharts"] = factory();
	else
		root["BackboneFusionCharts"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");

var utils = _interopRequireWildcard(_utils);

var _view = __webpack_require__(/*! ./view */ "./src/view.js");

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackboneFusionCharts = function BackboneFusionCharts(options) {
  _classCallCheck(this, BackboneFusionCharts);

  var modelProps = utils.deepCopyOf(options);
  delete modelProps.el;
  this.model = new Backbone.Model(modelProps);

  this.view = new _view2.default({
    el: options.el,
    model: this.model
  });
};

module.exports = BackboneFusionCharts;

/***/ }),

/***/ "./src/utils/options.js":
/*!******************************!*\
  !*** ./src/utils/options.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['type', 'id', 'width', 'height', 'dataFormat', 'dataSource', 'events', 'link', 'showDataLoadingMessage', 'showChartLoadingMessage', 'baseChartMessageFont', 'baseChartMessageFontSize', 'baseChartMessageColor', 'dataLoadStartMessage', 'dataLoadErrorMessage', 'dataInvalidMessage', 'dataEmptyMessage', 'typeNotSupportedMessage', 'loadMessage', 'renderErrorMessage', 'containerBackgroundColor', 'containerBackgroundOpacity', 'containerClassName', 'baseChartMessageImageHAlign', 'baseChartMessageImageVAlign', 'baseChartMessageImageAlpha', 'baseChartMessageImageScale', 'typeNotSupportedMessageImageHAalign', 'typeNotSupportedMessageImageVAlign', 'typeNotSupportedMessageImageAlpha', 'typeNotSupportedMessageImageScale', 'dataLoadErrorMessageImageHAlign', 'dataLoadErrorMessageImageVAlign', 'dataLoadErrorMessageImageAlpha', 'dataLoadErrorMessageImageScale', 'dataLoadStartMessageImageHAlign', 'dataLoadStartMessageImageVAlign', 'dataLoadStartMessageImageAlpha', 'dataLoadStartMessageImageScale', 'dataInvalidMessageImageHAlign', 'dataInvalidMessageImageVAlign', 'dataInvalidMessageImageAlpha', 'dataInvalidMessageImageScale', 'dataEmptyMessageImageHAlign', 'dataEmptyMessageImageVAlign', 'dataEmptyMessageImageAlpha', 'dataEmptyMessageImageScale', 'renderErrorMessageImageHAlign', 'renderErrorMessageImageVAlign', 'renderErrorMessageImageAlpha', 'renderErrorMessageImageScale', 'loadMessageImageHAlign', 'loadMessageImageVAlign', 'loadMessageImageAlpha', 'loadMessageImageScale'];
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.isCallable = isCallable;
exports.isSameObjectContent = isSameObjectContent;
exports.isUndefined = isUndefined;
exports.deepCopyOf = deepCopyOf;
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

function isCallable(value) {
  return typeof value === 'function';
}

function isSameObjectContent(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  var keys = Object.keys(obj1);

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (!isSameObjectContent(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function isUndefined(value) {
  // eslint-disable-next-line no-void
  var UNDEFINED = void 0;
  return value === UNDEFINED;
}

function deepCopyOf(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options = __webpack_require__(/*! ./utils/options */ "./src/utils/options.js");

var _options2 = _interopRequireDefault(_options);

var _utils = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-prototype-builtins, no-plusplus, no-param-reassign */

exports.default = Backbone.View.extend({
  initialize: function initialize() {
    this.model.bind('change', this.onChange.bind(this));

    this.chartConfig = this.model.toJSON();
    this.chartConfig.renderAt = this.el;

    this.render();
  },
  onChange: function onChange(nextProps) {
    var currentOptions = this.resolveChartOptions(nextProps.toJSON());
    var oldOptions = this.chartConfig;
    var optionsUpdatedNatively = ['width', 'height', 'type', 'dataFormat', 'dataSource', 'events'];

    this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
    this.checkAndUpdateChartType(currentOptions, oldOptions);
    this.checkAndUpdateChartData(currentOptions, oldOptions);
    this.checkAndUpdateEvents(currentOptions, oldOptions);
    this.checkAndUpdateRestOptions(_options2.default.filter(function (option) {
      return optionsUpdatedNatively.indexOf(option) === -1;
    }), currentOptions, oldOptions);

    this.oldOptions = currentOptions;
  },
  checkAndUpdateChartDimensions: function checkAndUpdateChartDimensions(currentOptions, oldOptions) {
    var currWidth = currentOptions.width;
    var currHeight = currentOptions.height;
    var oldWidth = oldOptions.width;
    var oldHeight = oldOptions.height;

    if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
      if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
        this.chart.resizeTo(currWidth, currHeight);
      } else {
        if (!utils.isUndefined(currWidth)) {
          this.chart.resizeTo({
            w: currWidth
          });
        }
        if (!utils.isUndefined(currHeight)) {
          this.chart.resizeTo({
            h: currHeight
          });
        }
      }
    }
  },
  checkAndUpdateChartType: function checkAndUpdateChartType(currentOptions, oldOptions) {
    var currType = currentOptions.type;
    var oldType = oldOptions.type;

    if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
      if (!utils.isUndefined(currType)) {
        this.chart.chartType(String(currType).toLowerCase());
      }
    }
  },
  checkAndUpdateChartData: function checkAndUpdateChartData(currentOptions, oldOptions) {
    var currDataFormat = currentOptions.dataFormat;
    var currData = currentOptions.dataSource;
    var oldDataFormat = oldOptions.dataFormat;
    var oldData = oldOptions.dataSource;

    if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
      if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
        this.chart.setChartData(currData, String(currDataFormat).toLowerCase());
        // If the chart dataFormat is changed then
        // animate the chart to show the changes
        this.chart.render();
      }
    } else if (!this.isSameChartData(currData, oldData)) {
      if (!utils.isUndefined(currData)) {
        this.chart.setChartData(currData,
        // When dataFormat is not given, but data is changed,
        // then use 'json' as default dataFormat
        currDataFormat ? String(currDataFormat).toLowerCase() : 'json');
      }
    }
  },
  isSameChartData: function isSameChartData(currData, oldData) {
    if (utils.isObject(currData) && utils.isObject(oldData)) {
      return utils.isSameObjectContent(currData, oldData);
    }
    return currData === oldData;
  },
  checkAndUpdateEvents: function checkAndUpdateEvents(currentOptions, oldOptions) {
    var _this = this;

    var currEvents = currentOptions.events;
    var oldEvents = oldOptions.events;
    var temp1 = void 0;
    var temp2 = void 0;

    if (this.detectChartEventsChange(currEvents, oldEvents)) {
      if (!utils.isUndefined(currEvents)) {
        temp1 = Object.assign({}, currEvents);
        temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
        Object.keys(temp2).forEach(function (eventName) {
          if (temp2[eventName] === temp1[eventName]) {
            temp1[eventName] = undefined;
          } else {
            _this.chart.removeEventListener(eventName, temp2[eventName]);
          }
        });
        Object.keys(temp1).forEach(function (eventName) {
          if (temp1[eventName]) {
            _this.chart.addEventListener(eventName, temp1[eventName]);
          }
        });
      }
    }
  },
  detectChartEventsChange: function detectChartEventsChange(currEvents, oldEvents) {
    if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
      return !this.isSameChartEvents(currEvents, oldEvents);
    }
    return !(currEvents === oldEvents);
  },
  isSameChartEvents: function isSameChartEvents(currEvents, oldEvents) {
    if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) {
      return false;
    }
    var currEventNames = Object.keys(currEvents);
    for (var i = 0; i < currEventNames.length; ++i) {
      var evName = currEventNames[i];
      if (currEvents[evName] !== oldEvents[evName]) {
        return false;
      }
    }
    return true;
  },
  checkAndUpdateRestOptions: function checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
    var _this2 = this;

    var optionsUpdated = false;

    restOptions.forEach(function (optionName) {
      var currValue = currentOptions[optionName];
      var oldValue = oldOptions[optionName];

      if (!_this2.isSameOptionValue(currValue, oldValue)) {
        if (!utils.isUndefined(currValue)) {
          if (_this2.chart.options && _this2.chart.options.hasOwnProperty(optionName)) {
            _this2.chart.options[optionName] = currValue;
            optionsUpdated = true;
          }
        }
      }
    });

    if (optionsUpdated) {
      this.chart.render(); // re-render the chart to reflect the changes
    }
  },
  isSameOptionValue: function isSameOptionValue(currValue, oldValue) {
    if (utils.isObject(currValue) && utils.isObject(oldValue)) {
      return utils.isSameObjectContent(currValue, oldValue);
    }
    return String(currValue) === String(oldValue);
  },
  resolveChartOptions: function resolveChartOptions(props) {
    var chartConfig = props.chartConfig ? props.chartConfig : {};
    var inlineOptions = _options2.default.reduce(function (options, optionName) {
      options[optionName] = props[optionName];
      return options;
    }, {});
    Object.assign(inlineOptions, chartConfig);

    if (utils.isObject(inlineOptions.dataSource)) {
      inlineOptions.dataSource = utils.deepCopyOf(inlineOptions.dataSource);
    }
    if (utils.isObject(inlineOptions.link)) {
      inlineOptions.link = utils.deepCopyOf(inlineOptions.link);
    }
    if (utils.isObject(inlineOptions.events)) {
      inlineOptions.events = Object.assign({}, inlineOptions.events);
    }
    return inlineOptions;
  },
  render: function render() {
    this.chart = new FusionCharts(this.chartConfig);
    this.chart.render();

    return this;
  }
});
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=backbone-fusioncharts.js.map