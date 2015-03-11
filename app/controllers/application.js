import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
    needs: ['currentUser'],
    currentUser: Ember.computed.alias('controllers.currentUser'),
    currentRound: null
});

export default ApplicationController;
