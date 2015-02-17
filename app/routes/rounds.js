import AuthenticatedRoute from './authenticated';
import Ember from 'ember';

var RoundsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('user', 'current').then(function(model) {
      return model.get('scorecards');
    });
  },

  afterModel: function(scorecards) {
    return Ember.Promise.all(scorecards.map(function(s) { return s.get('round'); }));
  }
});

export default RoundsRoute;
