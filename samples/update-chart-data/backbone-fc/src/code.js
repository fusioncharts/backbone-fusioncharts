const fc = new BackboneFusionCharts({
  renderAt: 'chart-container',
  type: 'column2d',
  dataSource: { /* see data tab */ }
});

const updateDataButton = document.getElementById('updateData');
updateDataButton.onclick = function updateData() {
  const prevDs = JSON.parse(JSON.stringify(data));
  prevDs.data[2].label = 'Art Supply Store';
  prevDs.data[2].value = '420000';
  prevDs.data[3].label = 'P.C. Richard & Son';
  prevDs.data[3].value = '210000';

  fc.model.set({ dataSource: prevDs });
}