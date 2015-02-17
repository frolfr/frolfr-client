import Ember from 'ember';

var UsersNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields', {});
    controller.set('showPasswordError', false);
  }
});

export default UsersNewRoute;
