import Ember from 'ember';

var RoundsNewController = Ember.ObjectController.extend({
  selectedPlayer: null,
  query: null,

  potentialPlayers: function() {
    var friends = this.get('friends');
    var players = this.get('players');
    players.forEach(function(p) { friends.removeObject(p); });

    return friends;
  }.property('friends.@each', 'players.@each'),


  noPlayerSelected: function() {
    return Ember.isEmpty(this.get('selectedPlayer'));
  }.property('selectedPlayer'),

  actions: {
    addPlayer: function() {
      this.get('players').addObject(this.get('selectedPlayer'));
      this.set('selectedPlayer', null);
      this.set('query', null);
    },

    removePlayer: function(player) {
      this.get('players').removeObject(player);
    },

    createRound: function() {
      var _this = this;
      this.set('model.course', this.get('model.course.content'));
      this.get('model').save().then(function(round) {
        _this.transitionToRoute('turns', round, 1);
      });
    }
  }
});

export default RoundsNewController;
