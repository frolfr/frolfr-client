import Ember from 'ember';

var PublicRoundRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('publicRound', params.id)
  }
});

export default PublicRoundRoute;
