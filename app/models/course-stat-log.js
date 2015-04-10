import DS from 'ember-data';

var CourseStatLog = DS.Model.extend({
  totalScorecardsPlayed: DS.attr('number'),
  completedScorecardsPlayed: DS.attr('number'),
  averageStrokes: DS.attr('number'),
  bestStrokes: DS.attr('number'),
  averageScore: DS.attr('number'),
  bestScore: DS.attr('number'),
  totalBogeys: DS.attr('number'),
  totalPars: DS.attr('number'),
  totalBirdies: DS.attr('number'),
  totalEagles: DS.attr('number'),
  totalDoublesOrWorse: DS.attr('number'),

  displayAverageStrokes: function() {
    return Number(this.get('averageStrokes')).toFixed(3);
  }.property('averageStrokes'),

  displayAverageScore: function() {
    return Number(this.get('averageScore')).toFixed(3);
  }.property('averageScore'),
});

export default CourseStatLog;
