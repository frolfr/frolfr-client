import Ember from 'ember';
import App from "./app";

var ApplicationRoute = Ember.Route.extend({
  actions: {
    logout: function() {
      this.controllerFor('sessions').reset();
      App.reset();
    }
  }
});

export default ApplicationRoute;
