import DS from 'ember-data';
import Ember from 'ember';

var Scorecard = DS.Model.extend({
  round: DS.belongsTo('round', { async: true }),
  courseName: DS.attr('string'),
  courseId: DS.attr('number'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', { async: true }),
  userInitials: DS.attr('string'),
  turns: DS.hasMany('turn', { async: true }),

  userFullName: Ember.computed.alias('user.fullName'),
  hasUserAvatar: Ember.computed.alias('user.hasAvatar'),
  userAvatarUrl: Ember.computed.alias('user.avatarUrl'),

  isStarted: function() {
    return this.get('turns').any(function (turn) {
      return turn.get('isPlayed');
    });
  }.property('turns.@each.isPlayed'),

  isAllTurnsPlayed: function() {
    return this.get('turns').every(function (turn) {
      return turn.get('isPlayed');
    });
  }.property('turns.@each.isPlayed'),

  isFinished: function() {
    return this.get('isMoreThanOneDayOld') || this.get('isAllTurnsPlayed');
  }.property('isMoreThanOneDayOld', 'isAllTurnsPlayed'),

  isMoreThanOneDayOld: function() {
    var today = new Date().getTime(),
        datePlayed = new Date(this.get('createdAt')).getTime(),
        oneDayInMilliseconds = 86400000;

    return (today - datePlayed) > oneDayInMilliseconds;
  }.property('createdAt'),

  playedTurns: function() {
    return this.get('turns').filter(function (turn) {
      return turn.get('isPlayed');
    });
  }.property('turns.@each.isPlayed'),

  nextUnplayedTurn: function() {
    return this.get('turns').find(function (turn) {
      return !turn.get('isPlayed');
    });
  }.property('turns.@each.isPlayed'),

  totalStrokes: function () {
    return this.get('playedTurns').reduce(function (acc, turn) {
      return acc + turn.get('strokes');
    }, 0);
  }.property('playedTurns.@each.strokes'),

  totalPar: function () {
    return this.get('playedTurns').reduce(function (acc, turn) {
      return acc + turn.get('par');
    }, 0);
  }.property('playedTurns.@each.par'),

  totalScore: function () {
    return this.get('totalStrokes') - this.get('totalPar');
  }.property('totalStrokes', 'totalPar'),

  formattedTotals: function () {
    var totalStrokes = this.get('totalStrokes'),
        formattedShooting = this.get('formattedShooting');

    return totalStrokes + ' (' + formattedShooting + ')';
  }.property('totalStrokes', 'formattedShooting'),

  formattedShooting: function () {
    var totalStrokes = this.get('totalStrokes'),
        totalPar   = this.get('totalPar'),
        totalScore = this.get('totalScore'),
        sign = '';

    if (totalPar < totalStrokes) {
      sign = "+";
    } else if (totalScore === 0) {
      totalScore = "Even";
    }

    return sign + totalScore;
  }.property('totalStrokes', 'totalPar', 'totalScore')
});

export default Scorecard;
