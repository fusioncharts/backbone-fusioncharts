window.loadApp = function (data) {
  const fc = new BackboneFusionCharts({
    renderAt: 'chart-container',
    type: 'pie3d',
    width: '100%',
    height: '100%',
    dataSource: data
  });
};
