window.loadApp = function (data) {
  const fc = new BackboneFusionCharts({
    renderAt: 'chart-container',
    type: 'column2d',
    width: '100%',
    height: '100%',
    dataFormat: 'xmlurl',
    dataSource: '../../data.xml'
  });
};
