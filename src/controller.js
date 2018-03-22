import * as utils from './utils/utils';
import FCView from './view';

class BackboneFusionCharts {
  constructor(options) {
    const modelProps = utils.deepCopyOf(options);
    delete modelProps.el;
    this.model = new Backbone.Model(modelProps);

    this.view = new FCView({
      el: options.el,
      model: this.model,
    });
  }
}

module.exports = BackboneFusionCharts;
