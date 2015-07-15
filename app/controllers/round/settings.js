import Ember from 'ember';

export default Ember.Controller.extend({
  selectedPlayer: null,
  query: null,

  roundPlayers: function() {
    return this.get('model.scorecards').map(function(scorecard){
      return scorecard.get('user');
    });
  }.property('model.scorecards.@each.user'),

  potentialPlayers: function() {
    var friends = this.get('friends');
    var players = this.get('roundPlayers');

    // TODO FIX THIS
    return friends.filter(function(friend) {
      return players.every(function(player) {
        return player.get('id') !== friend.get('id');
      });
    });
  }.property('roundPlayers.@each', 'friends.@each'),

  noPlayerSelected: function() {
    return Ember.isEmpty(this.get('selectedPlayer'));
  }.property('selectedPlayer'),

  actions: {
    addPlayer: function() {
      var self = this,
          currentRound = this.get('model');

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
