const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'controller.js'),
  output: {
    library: 'BackboneFusionCharts',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'backbone-fusioncharts.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
};
