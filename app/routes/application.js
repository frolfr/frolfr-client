import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    logout: function() {
      this.controllerFor('sessions').reset();
      window.location = "/sessions";
    }
  }
});

export default ApplicationRoute;
