import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentHole: Ember.computed.alias('controllers.application.currentHole'),
  selectedPlayer: null,
  query: null,

  noPlayerSelected: function() {
    return Ember.isEmpty(this.get('selectedPlayer'));
  }.property('selectedPlayer'),

  roundPlayers: function() {
    return this.get('model.scorecards').map(function(scorecard){
      return scorecard.get('user');
    });
  }.property('model.scorecards.@each.user'),

  potentialPlayers: function() {
    var friends = this.get('friends');
    var player_ids = this.get('roundPlayers').getEach("id");

    return friends.filter(function(friend) {
      return !player_ids.contains(friend.get("id"));
    });
  }.property('roundPlayers.@each', 'friends.@each'),

  actions: {
    addPlayer: function() {
      var self = this,
          currentRound = this.get('model'),
          currentHole = this.get('currentHole');

      var scorecard = this.store.createRecord('scorecard', {
        round: currentRound,
        user: self.get('selectedPlayer')
      });

      scorecard.save().then(function(scorecard) {
        self.set('selectedPlayer', null);
        self.set('query', null);
        currentRound.get('scorecards').addObject(scorecard);
        self.transitionToRoute('round', currentRound);
      });
    }
  }
});
