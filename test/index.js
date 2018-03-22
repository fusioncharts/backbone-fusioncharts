const dataSource = {
  chart: {
    caption: 'Vue FusionCharts Sample',
    theme: 'fint',
  },
  data: [
    { value: 1.9 },
    { value: 2.3 },
    { value: 2.1 },
  ],
};

const fc = new BackboneFusionCharts({
  el: '#fusioncharts',
  type: 'Pie2D',
  dataSource,
});

setTimeout(() => {
  fc.model.set('type', {
    chart: {
      caption: 'Vue FusionCharts Sample',
      theme: 'fint',
    },
    data: [
      { value: 1.9 },
      { value: 3 },
      { value: 2.1 },
    ],
  });
}, 3000);

