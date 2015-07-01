import Ember from 'ember';

var ScorecardsTableCell = Ember.Component.extend({
  text: function() {
    return this.get('turn.displayStrokes');
  }.property('turn.displayStrokes'),

  className: function() {
    return this.get('turn.parStatus');
  }.property('turn.parStatus'),

  turn: function() {
    var holeNumber = this.get('holeNumber').toString();

    return this.get('scorecard').get('turns').find(function(turn) {
      return turn.get('holeNumber') === holeNumber;
    });
  }.property('scorecard.turns.@each', 'holeNumber')
});

export default ScorecardsTableCell;
