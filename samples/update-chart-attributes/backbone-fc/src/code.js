const fc = new BackboneFusionCharts({
  renderAt: 'chart-container',
  type: 'column2d',
  dataSource: { /* see data tab */ }
});

const changeBackgroundColorButton = document.getElementById('changeBackgroundColor');
changeBackgroundColorButton.onclick = function changeBackgroundColor() {
  const prevDs = JSON.parse(JSON.stringify(fc.model.get('dataSource')));
  prevDs.chart.bgColor = '#efefef';
  fc.model.set({ dataSource: prevDs });
}

const changeCaptionTextAlignmentButton = document.getElementById('changeCaptionTextAlignment');
changeCaptionTextAlignmentButton.onclick = function changeCaptionTextAlignment() {
  const prevDs = JSON.parse(JSON.stringify(fc.model.get('dataSource')));
  prevDs.chart.captionAlignment = 'left';
  fc.model.set({ dataSource: prevDs });
}