import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  actions: {
    toggleMenu: function() {
      Ember.$(".main-wrapper").toggleClass("toggled");
    }
  }
});

export default ApplicationController;
