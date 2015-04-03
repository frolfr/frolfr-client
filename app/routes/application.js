import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    logout: function() {
      this.controllerFor('sessions').reset();
      this.controllerFor('application').set('currentRound', null);
      this.controllerFor('application').set('currentHole', null);
      window.location = "/sessions";
    }
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    var _this = this;

    this.store.find('round', 'current').then(function(round) {
      _this.controllerFor('application').set('currentRound', round);

      var nextUnplayedHole = round.get('scorecards.firstObject.nextUnplayedTurn.holeNumber');
      _this.controllerFor('application').set('currentHole', nextUnplayedHole);
    });
  }
});

export default ApplicationRoute;
