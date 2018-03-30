const value = document.getElementById('value');
const fc = new BackboneFusionCharts({
  renderAt: 'chart-container',
  type: 'column2d',
  dataSource: { /* see data tab */ },
  events: {
    dataplotRollOver: function dataplotRollOver(eventObj, dataObj) {
      value.innerHTML = dataObj.dataValue;
    }
  },
});
