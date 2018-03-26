import BackboneFusionCharts from '../dist/backbone-fusioncharts';

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
  renderAt: 'fusioncharts',
  type: 'Pie2d',
  dataSource,
});

setTimeout(() => {
  fc.model.set('renderAt', 'fusioncharts2');
}, 3000);

console.log(fc);
