import Ember from 'ember';

var UsersNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('showPasswordError', false);
  }
});

export default UsersNewRoute;
