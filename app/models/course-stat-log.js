import DS from 'ember-data';

var CourseStatLog = DS.Model.extend({
  totalScorecardsPlayed: DS.attr('number'),
  completedScorecardsPlayed: DS.attr('number'),
  averageScoreOnCompletedScorecards: DS.attr('number'),
  bestScoreOnCompletedScorecards: DS.attr('number'),
  averageShootingOnCompletedScorecards: DS.attr('number'),
  bestShootingOnCompletedScorecards: DS.attr('number'),
  totalBogeys: DS.attr('number'),
  totalPars: DS.attr('number'),
  totalBirdies: DS.attr('number'),
  totalEagles: DS.attr('number'),
  totalDoublesOrWorse: DS.attr('number'),

  displayAverageScore: function() {
    return Number(this.get('averageScoreOnCompletedScorecards')).toFixed(3);
  }.property('averageScoreOnCompletedScorecards'),

  displayAverageShooting: function() {
    return Number(this.get('averageShootingOnCompletedScorecards')).toFixed(3);
  }.property('averageShootingOnCompletedScorecards'),
});

export default CourseStatLog;
