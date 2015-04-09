import DS from 'ember-data';

var CourseStatLog = DS.Model.extend({
  totalScorecardsPlayed: DS.attr('number'),
  completedScorecardsPlayed: DS.attr('number'),
  averageStrokesOnCompletedScorecards: DS.attr('number'),
  bestStrokesOnCompletedScorecards: DS.attr('number'),
  averageScoreOnCompletedScorecards: DS.attr('number'),
  bestScoreOnCompletedScorecards: DS.attr('number'),
  totalBogeys: DS.attr('number'),
  totalPars: DS.attr('number'),
  totalBirdies: DS.attr('number'),
  totalEagles: DS.attr('number'),
  totalDoublesOrWorse: DS.attr('number'),

  displayAverageStrokes: function() {
    return Number(this.get('averageStrokesOnCompletedScorecards')).toFixed(3);
  }.property('averageStrokesOnCompletedScorecards'),

  displayAverageScore: function() {
    return Number(this.get('averageScoreOnCompletedScorecards')).toFixed(3);
  }.property('averageScoreOnCompletedScorecards'),
});

export default CourseStatLog;
