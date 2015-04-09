import DS from 'ember-data';

var HoleStatLog = DS.Model.extend({
  bestShooting: DS.attr('number'),
  worstShooting: DS.attr('number'),
  number: DS.attr('number'),
  averageStrokes: DS.attr('number'),
  averagePar: DS.attr('number'),
  averageScore: DS.attr('number'),
  ranking: DS.attr('number'),

  displayAverageStrokes: function() {
    return Number(this.get('averageStrokes')).toFixed(3);
  }.property('averageStrokes'),

  displayAverageScore: function() {
    return Number(this.get('averageScore')).toFixed(3);
  }.property('averageScore'),
});

export default HoleStatLog;
