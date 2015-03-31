import DS from 'ember-data';

var HoleStatLog = DS.Model.extend({
  bestShooting: DS.attr('number'),
  worstShooting: DS.attr('number'),
  number: DS.attr('number'),
  averageScore: DS.attr('number'),
  averagePar: DS.attr('number'),
  averageShooting: DS.attr('number'),
  ranking: DS.attr('number'),
});

export default HoleStatLog;
