import Ember from 'ember';

var CurrentUserController = Ember.ObjectController.extend({
  isAuthenticated: function() {
    return this.get('model.isLoaded');
  }.property('model.isLoaded')
});

export default CurrentUserController;
