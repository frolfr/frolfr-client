import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
    needs: ['currentUser'],
    currentUser: Ember.computed.alias('controllers.currentUser'),
    currentRound: null,
    currentHole: null,

    currentRoundLinkText: function() {
      return 'Current Round ' + '(Hole ' + this.get('currentHole') + ')';
    }.property('currentHole'),

    actions: {
      toggleMenu: function() {
        Ember.$(".main-wrapper").toggleClass("toggled");
      }
    }
});

export default ApplicationController;
