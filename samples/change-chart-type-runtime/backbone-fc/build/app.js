window.loadApp = function (data) {
  const fc = new BackboneFusionCharts({
    renderAt: 'chart-container',
    type: 'column2d',
    width: '100%',
    height: '85%',
    dataSource: data
  });

  const typeSelector = document.getElementById('typeSelector');
  typeSelector.onchange = (evt) => {
    const target = evt.target;
    const chartType = target.options[target.selectedIndex].value;
    fc.model.set({ type: chartType });
  }
};
