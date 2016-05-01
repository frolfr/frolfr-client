import Ember from "ember";
import DS from 'ember-data';

var Turn = DS.Model.extend({
  strokes: DS.attr('number'),
  par: DS.attr('number'),
  holeNumber: DS.attr('string'),
  scorecard: DS.belongsTo('scorecard', { async: true }),

  parStatus: function () {
    var shooting = this.get('shooting');

    if (0 < shooting - 1) {
      return 'multipleAbovePar';
    } else if (0 < shooting) {
      return 'abovePar';
    } else if (shooting === 0 || !this.get('isPlayed')) {
      return 'atPar';
    } else if (shooting + 1 === 0) {
      return 'belowPar';
    } else {
      return 'multipleBelowPar';
    }
  }.property('shooting', 'isPlayed'),

  shooting: function () {
    return this.get('strokes') - this.get('par');
  }.property('strokes', 'par'),

  isPlayed: function() {
    return Ember.isPresent(this.get('strokes'));
  }.property('strokes'),

  displayStrokes: function() {
    if (this.get('isPlayed')) {
      return this.get('strokes');
     } else {
      return '-';
    }
  }.property('isPlayed', 'strokes')
});

export default Turn;
