import { expect } from 'chai';
import Backbone from 'backbone';
import Controller from '../src/controller';
import dataSource from './data.json';

const FusionCharts = function FusionCharts() { };
FusionCharts.prototype.render = () => { };
FusionCharts.prototype.dispose = () => { };
FusionCharts.prototype.resizeTo = () => { };
FusionCharts.prototype.chartType = () => { };
FusionCharts.prototype.setChartData = () => { };
FusionCharts.prototype.addEventListener = () => { };
FusionCharts.prototype.removeEventListener = () => { };

beforeEach(() => {
  global.FusionCharts = FusionCharts;
});

const chartOptions = {
  type: 'column2d',
  width: 400,
  height: 300,
  dataFormat: 'json',
  dataSource,
};

describe('Controller', () => {
  it('should create model and view as expected', () => {
    const ctrl = new Controller(chartOptions);
    expect(ctrl.model instanceof Backbone.Model).to.equal(true);
    expect(ctrl.view instanceof Backbone.View).to.equal(true);
  });
});
