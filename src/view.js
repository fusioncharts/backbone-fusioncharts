/* eslint-disable no-prototype-builtins, no-plusplus, no-param-reassign */

import fusionChartsOptions from './utils/options';
import * as utils from './utils/utils';

export default Backbone.View.extend({
  initialize() {
    this.model.bind('change', this.onChange.bind(this));
    this.chartConfig = this.model.toJSON();
    this.render();
  },

  onChange(nextProps) {
    const currentOptions = this.resolveChartOptions(nextProps.toJSON());
    const oldOptions = this.chartConfig;
    const optionsUpdatedNatively = [
      'width',
      'height',
      'type',
      'dataFormat',
      'dataSource',
      'events',
    ];

    this.checkAndUpdateChartRenderAt(currentOptions, oldOptions);
    this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
    this.checkAndUpdateChartType(currentOptions, oldOptions);
    this.checkAndUpdateChartData(currentOptions, oldOptions);
    this.checkAndUpdateEvents(currentOptions, oldOptions);
    this.checkAndUpdateRestOptions(
      fusionChartsOptions.filter(option => optionsUpdatedNatively.indexOf(option) === -1),
      currentOptions,
      oldOptions,
    );

    this.oldOptions = currentOptions;
  },

  checkAndUpdateChartRenderAt(currentOptions, oldOptions) {
    const currRenderAt = currentOptions.renderAt;
    const oldRenderAt = oldOptions.renderAt;

    if (String(currRenderAt) !== String(oldRenderAt)) {
      this.chart.dispose();

      this.chartConfig.renderAt = currRenderAt;
      this.render();
    }
  },

  checkAndUpdateChartDimensions(currentOptions, oldOptions) {
    const currWidth = currentOptions.width;
    const currHeight = currentOptions.height;
    const oldWidth = oldOptions.width;
    const oldHeight = oldOptions.height;

    if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
      if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
        this.chart.resizeTo(currWidth, currHeight);
      } else {
        if (!utils.isUndefined(currWidth)) {
          this.chart.resizeTo({
            w: currWidth,
          });
        }
        if (!utils.isUndefined(currHeight)) {
          this.chart.resizeTo({
            h: currHeight,
          });
        }
      }
    }
  },

  checkAndUpdateChartType(currentOptions, oldOptions) {
    const currType = currentOptions.type;
    const oldType = oldOptions.type;

    if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
      if (!utils.isUndefined(currType)) {
        this.chart.chartType(String(currType).toLowerCase());
      }
    }
  },

  checkAndUpdateChartData(currentOptions, oldOptions) {
    const currDataFormat = currentOptions.dataFormat;
    const currData = currentOptions.dataSource;
    const oldDataFormat = oldOptions.dataFormat;
    const oldData = oldOptions.dataSource;

    if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
      if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
        this.chart.setChartData(currData, String(currDataFormat).toLowerCase());
        // If the chart dataFormat is changed then
        // animate the chart to show the changes
        this.chart.render();
      }
    } else if (!this.isSameChartData(currData, oldData)) {
      if (!utils.isUndefined(currData)) {
        this.chart.setChartData(
          currData,
          // When dataFormat is not given, but data is changed,
          // then use 'json' as default dataFormat
          currDataFormat ? String(currDataFormat).toLowerCase() : 'json',
        );
      }
    }
  },

  isSameChartData(currData, oldData) {
    if (utils.isObject(currData) && utils.isObject(oldData)) {
      return utils.isSameObjectContent(currData, oldData);
    }
    return currData === oldData;
  },

  checkAndUpdateEvents(currentOptions, oldOptions) {
    const currEvents = currentOptions.events;
    const oldEvents = oldOptions.events;
    let temp1;
    let temp2;

    if (this.detectChartEventsChange(currEvents, oldEvents)) {
      if (!utils.isUndefined(currEvents)) {
        temp1 = Object.assign({}, currEvents);
        temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
        Object.keys(temp2).forEach((eventName) => {
          if (temp2[eventName] === temp1[eventName]) {
            temp1[eventName] = undefined;
          } else {
            this.chart.removeEventListener(eventName, temp2[eventName]);
          }
        });
        Object.keys(temp1).forEach((eventName) => {
          if (temp1[eventName]) {
            this.chart.addEventListener(eventName, temp1[eventName]);
          }
        });
      }
    }
  },

  detectChartEventsChange(currEvents, oldEvents) {
    if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
      return !(this.isSameChartEvents(currEvents, oldEvents));
    }
    return !(currEvents === oldEvents);
  },

  isSameChartEvents(currEvents, oldEvents) {
    if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) { return false; }
    const currEventNames = Object.keys(currEvents);
    for (let i = 0; i < currEventNames.length; ++i) {
      const evName = currEventNames[i];
      if (currEvents[evName] !== oldEvents[evName]) {
        return false;
      }
    }
    return true;
  },

  checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
    let optionsUpdated = false;

    restOptions.forEach((optionName) => {
      const currValue = currentOptions[optionName];
      const oldValue = oldOptions[optionName];

      if (!this.isSameOptionValue(currValue, oldValue)) {
        if (!utils.isUndefined(currValue)) {
          if (this.chart.options && this.chart.options.hasOwnProperty(optionName)) {
            this.chart.options[optionName] = currValue;
            optionsUpdated = true;
          }
        }
      }
    });

    if (optionsUpdated) {
      this.chart.render(); // re-render the chart to reflect the changes
    }
  },

  isSameOptionValue(currValue, oldValue) {
    if (utils.isObject(currValue) && utils.isObject(oldValue)) {
      return utils.isSameObjectContent(currValue, oldValue);
    }
    return String(currValue) === String(oldValue);
  },

  resolveChartOptions(props) {
    const chartConfig = props.chartConfig ? props.chartConfig : {};
    const inlineOptions = fusionChartsOptions.reduce((options, optionName) => {
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

  render() {
    this.chart = new FusionCharts(this.chartConfig);
    this.chart.render();

    return this;
  },
});
