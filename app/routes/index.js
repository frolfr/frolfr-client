import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);

    // TODO: Revisit with https://github.com/frolfr/frolfr-server/issues/152
    if (this.controllerFor('sessions').get('token')) {
      this.transitionTo('courses');
    }
  }
});

export default IndexRoute;
