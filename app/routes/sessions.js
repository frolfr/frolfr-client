import Ember from 'ember';

var SessionsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.reset();
  }
});

export default SessionsRoute;
