import Backbone from 'backbone';
import FCView from './view';

class BackboneFusionCharts {
  constructor(options) {
    this.model = new Backbone.Model(options);

    this.view = new FCView({
      model: this.model,
    });
  }
}

module.exports = BackboneFusionCharts;
