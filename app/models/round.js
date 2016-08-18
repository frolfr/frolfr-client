import DS from 'ember-data';

var Round = DS.Model.extend({
  courseName: DS.attr('string'),
  createdAt: DS.attr('date'),
  scorecards: DS.hasMany('scorecard', {async: true}),
  course: DS.belongsTo('course', {async: true}),
  holeCount: DS.attr('string'),

  isStarted: function() {
    return this.get('scorecards').any(function (scorecard) {
      return scorecard.get('isStarted');
    });
  }.property('scorecards.@each.isStarted'),

  // only used for creating new rounds
  players: DS.hasMany('friend', {async: true}),
});

export default Round;
