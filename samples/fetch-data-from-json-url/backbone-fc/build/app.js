window.loadApp = function () {
  const fc = new BackboneFusionCharts({
    renderAt: 'chart-container',
    type: 'column2d',
    width: '100%',
    height: '100%',
    dataFormat: 'jsonurl',
    dataSource: '../../data.json'
  });
};
