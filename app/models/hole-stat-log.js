import DS from 'ember-data';

var HoleStatLog = DS.Model.extend({
  bestShooting: DS.attr('number'),
  worstShooting: DS.attr('number'),
  number: DS.attr('number'),
  averageScore: DS.attr('number'),
  averagePar: DS.attr('number'),
  averageShooting: DS.attr('number'),
  ranking: DS.attr('number'),

  displayAverageScore: function() {
    return Number(this.get('averageScore')).toFixed(3);
  }.property('averageScore'),

  displayAverageShooting: function() {
    return Number(this.get('averageShooting')).toFixed(3);
  }.property('averageShooting'),
});

export default HoleStatLog;
