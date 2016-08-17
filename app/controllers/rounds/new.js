import Ember from 'ember';

var RoundsNewController = Ember.Controller.extend({
  selectedPlayer: null,
  query: null,
  nearestCourses: false,

  potentialPlayers: function() {
    var friends = this.get('friends');
    var players = this.get('model.players');
    players.forEach(function(p) { friends.removeObject(p); });

    return friends;
  }.property('friends.@each', 'model.players.@each'),


  noPlayerSelected: function() {
    return Ember.isEmpty(this.get('selectedPlayer'));
  }.property('selectedPlayer'),

  actions: {
    addPlayer: function() {
      this.get('model.players').addObject(this.get('selectedPlayer'));
      this.set('selectedPlayer', null);
      this.set('query', null);
    },

    removePlayer: function(player) {
      this.get('model.players').removeObject(player);
    },

    updateCourseInput: function(nearestCourse) {
      var course = this.get('courses').find(function(course) {
        return course.id === nearestCourse.id;
      });
      this.get('model').set('course', course);
    },

    createRound: function() {
      var _this = this;
      this.set('model.course', this.get('model.course.content'));
      this.get('model').save().then(function(round) {
        _this.controllerFor('application').set('currentRound', round);
        _this.controllerFor('application').set('currentHole', '1');
        _this.transitionToRoute('turns', round, 1);
      });
    }
  }
});

export default RoundsNewController;
