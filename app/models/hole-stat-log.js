import Ember from "ember";
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
    if (Ember.isPresent(this.get('averageStrokes'))) {
      return Number(this.get('averageStrokes')).toFixed(3);
    } else {
      return "-";
    }
  }.property('averageStrokes'),

  displayAverageScore: function() {
    if (Ember.isPresent(this.get('averageScore'))) {
      return Number(this.get('averageScore')).toFixed(3);
    } else {
      return "-";
    }
  }.property('averageScore'),

  displayRanking: function() {
    if (Ember.isPresent(this.get('ranking'))) {
      return this.get('ranking');
    } else {
      return "-";
    }
  }.property('ranking'),
});

export default HoleStatLog;
