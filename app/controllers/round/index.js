import Ember from 'ember';

var RoundIndexController = Ember.Controller.extend({
  columnWidth: function() {
    var scorecardColumns = this.get('model.scorecards.length');
    var scorecardColumnPercentage = 100 / scorecardColumns;

    return 'width: ' + scorecardColumnPercentage + '%;';
  }.property('model.scorecards.length'),

  holeNumbers: function() {
    var turnsCount = this.get('model.scorecards.firstObject.turns.length');
    var holeNumbers = new Array(turnsCount)
      .join().split(',')
      .map(function(item, index){ return ++index; });

    return holeNumbers;
  }.property('model.scorecards.firstObject.turns.length')

});

export default RoundIndexController;
