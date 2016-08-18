import Ember from 'ember';

// TODO: Update to simply 'Controller' after getting rid of janky auth
var CurrentUserController = Ember.ObjectController.extend({
  isAuthenticated: function() {
    return this.get('model.isLoaded');
  }.property('model.isLoaded')
});

export default CurrentUserController;
