import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    logout: function() {
      this.controllerFor('sessions').reset();
      this.controllerFor('currentRound').set('model', null);
      window.location = "/sessions";
    }
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    var _this = this;

    this.store.find('round', 'current').then(function(round) {
      _this.controllerFor('currentRound').set('model', round);
    });
  }
});

export default ApplicationRoute;
