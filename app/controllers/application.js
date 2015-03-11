import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
    needs: ['currentUser', 'currentRound'],
    currentUser: Ember.computed.alias('controllers.currentUser'),
    currentRound: Ember.computed.alias('controllers.currentRound')
});

export default ApplicationController;
