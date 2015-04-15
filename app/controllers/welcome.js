import Ember from 'ember';

var WelcomeController = Ember.Controller.extend({
  needs: ['currentUser'],
  currentUser: Ember.computed.alias('controllers.currentUser')
});

export default WelcomeController;
