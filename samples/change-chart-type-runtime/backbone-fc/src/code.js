const fc = new BackboneFusionCharts({
  renderAt: 'chart-container',
  type: 'column2d',
  dataSource: { /* see data tab */ }
});

const typeSelector = document.getElementById('typeSelector');
typeSelector.onchange = (evt) => {
  const target = evt.target;
  const chartType = target.options[target.selectedIndex].value;
  fc.model.set({ type: chartType });
}