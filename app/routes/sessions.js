import Ember from 'ember';

var SessionsRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    controller.reset();
  }
});

export default SessionsRoute;
