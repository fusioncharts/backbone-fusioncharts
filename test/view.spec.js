/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import Controller from '../src/controller';
import * as utils from '../src/utils/utils';
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
  renderAt: 'fusioncharts',
  type: 'column2d',
  width: 400,
  height: 300,
  dataFormat: 'json',
  dataSource,
};

describe('View', () => {
  it('should create FusionCharts instance as expected', () => {
    const ctrl = new Controller(chartOptions);
    expect(ctrl.view.chart instanceof FusionCharts).to.be.true;
  });

  it('should update the chart when chart data is changed', () => {
    const ctrl = new Controller(chartOptions);

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.dataFormat).to.equal('jsonurl');
      expect(ctrl.view.oldOptions.dataSource).to.equal('data.json');
    });
    ctrl.model.set({ dataFormat: 'jsonurl', dataSource: 'data.json' });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.dataFormat).to.be.undefined;
    });
    ctrl.model.set({ dataFormat: undefined });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.dataSource).to.equal('data2.json');
    });
    ctrl.model.set({ dataSource: 'data2.json' });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.dataFormat).to.equal('json');
      expect(ctrl.view.oldOptions.dataSource).to.deep.equal(dataSource);
    });
    ctrl.model.set({ dataFormat: 'json', dataSource });

    const newDataSource = utils.deepCopyOf(dataSource);
    newDataSource.chart.caption = 'New caption';
    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.dataSource).to.deep.equal(newDataSource);
    });
    ctrl.model.set({ dataSource: newDataSource });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.dataSource).to.be.undefined;
    });
    ctrl.model.set({ chartConfig: { dataSource: undefined } });
  });

  it('should update the chart when chart event is changed', () => {
    const mockedChartOptions = Object.assign({}, chartOptions, {
      events: {
        event1() { },
        event2() { },
      },
    });

    const ctrl = new Controller(chartOptions);

    ctrl.model.once('change', () => {
      expect(Object.keys(ctrl.view.oldOptions.events).sort()).to.deep.equal(['event1', 'event2', 'event3'].sort());
    });
    ctrl.model.set({ events: { event1: () => { }, event2: () => { }, event3: () => { } } });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.events).to.be.undefined;
    });
    ctrl.model.set({ events: undefined });

    ctrl.model.once('change', () => {
      expect(Object.keys(ctrl.view.oldOptions.events).sort()).to.deep.equal(['event1', 'event2'].sort());
    });
    ctrl.model.set({ events: mockedChartOptions.events });

    ctrl.model.once('change', () => {
      expect(Object.keys(ctrl.view.oldOptions.events).sort()).to.deep.equal(['event1'].sort());
    });
    ctrl.model.set({ events: { event1: mockedChartOptions.events.event1 } });

    ctrl.model.once('change', () => {
      expect(Object.keys(ctrl.view.oldOptions.events).sort()).to.deep.equal(['event1'].sort());
    });
    ctrl.model.set({ events: { event1: mockedChartOptions.events.event1 } });

    ctrl.model.once('change', () => {
      expect(Object.keys(ctrl.view.oldOptions.events).sort()).to.deep.equal(['event1'].sort());
    });
    ctrl.model.set({ events: { event1: mockedChartOptions.events.event2 } });
  });

  it('should update the chart when non native chart configurations are changed', () => {
    const mockedChartOptions = Object.assign({}, chartOptions, {
      containerBackgroundColor: 'transparent',
      link: {},
    });

    const ctrl = new Controller(mockedChartOptions);

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.containerBackgroundColor).to.equal('#000000');
      expect(ctrl.view.oldOptions.link).to.deep.equal({});
    });
    ctrl.model.set({ containerBackgroundColor: '#000000' });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.containerBackgroundColor).to.equal('#000000');
      expect(ctrl.view.oldOptions.link).to.deep.equal({ link1: 'mocked_value' });
    });
    ctrl.model.set({ link: { link1: 'mocked_value' } });

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.containerBackgroundColor).to.be.undefined;
      expect(ctrl.view.oldOptions.link).to.deep.equal({ link1: 'mocked_value' });
    });
    ctrl.model.set({ containerBackgroundColor: undefined });

    ctrl.view.chart.options = { ...ctrl.view.oldOptions };
    ctrl.model.once('change', () => {
      expect(ctrl.view.chart.options.containerBackgroundColor).to.equal('#ffffff');
    });
    ctrl.model.set({ containerBackgroundColor: '#ffffff' });
  });

  it('should update the chart when chart dimensions are changed', () => {
    const ctrl = new Controller(chartOptions);

    const resizeTo = sinon.spy();
    ctrl.view.chart.resizeTo = resizeTo;

    ctrl.model.once('change', () => {
      expect(resizeTo.calledWith(100, 500)).to.be.true;
    });
    ctrl.model.set({ width: 100, height: 500 });

    ctrl.model.once('change', () => {
      expect(resizeTo.calledWith({ w: 10 })).to.be.true;
    });
    ctrl.model.set({ width: 10, height: undefined });

    ctrl.model.once('change', () => {
      expect(resizeTo.calledWith({ h: 400 })).to.be.true;
    });
    ctrl.model.set({ width: undefined, height: 400 });
  });

  it('should update the chart when chart type is changed', () => {
    const ctrl = new Controller(chartOptions);

    const chartType = sinon.spy();
    ctrl.view.chart.chartType = chartType;

    ctrl.model.once('change', () => {
      expect(chartType.calledWith('bar2d')).to.be.true;
    });
    ctrl.model.set({ type: 'bar2d' });

    chartType.resetHistory();
    ctrl.model.once('change', () => {
      expect(chartType.notCalled).to.be.true;
    });
    ctrl.model.set({ type: undefined });
  });

  it('should update the chart container when renderAt is changed', () => {
    const ctrl = new Controller(chartOptions);

    const dispose = sinon.spy();
    ctrl.view.chart.dispose = dispose;

    ctrl.model.once('change', () => {
      expect(ctrl.view.oldOptions.renderAt).to.equal('fusioncharts2');
      expect(dispose.called).to.be.true;
    });
    ctrl.model.set({ renderAt: 'fusioncharts2' });
  });

  it('should not update the chart container when events are same', () => {
    const ctrl = new Controller(chartOptions);

    const listener = () => {};
    const event1 = { evt: listener };
    const event2 = { evt: listener };

    expect(ctrl.view.isSameChartEvents(event1, event2)).to.be.true;
  });
});
