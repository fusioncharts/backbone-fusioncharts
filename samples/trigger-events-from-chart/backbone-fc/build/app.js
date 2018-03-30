window.loadApp = function (data) {
  const value = document.getElementById('value');
  const fc = new BackboneFusionCharts({
    renderAt: 'chart-container',
    type: 'column2d',
    width: '100%',
    height: '85%',
    dataSource: data,
    events: {
      dataplotRollOver: function dataplotRollOver(eventObj, dataObj) {
        value.innerHTML = dataObj.dataValue;
      }
    },
  });
};
