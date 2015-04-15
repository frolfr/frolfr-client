import Ember from 'ember';

var TurnsController = Ember.ArrayController.extend({
  holeNumber: Ember.computed.alias('model.firstObject.holeNumber'),

  holePar: Ember.computed.alias('model.firstObject.par'),

  isFirstHole: function() {
    return this.get('holeNumber') === "1";
  }.property('holeNumber'),

  isLastHole: function() {
    return this.get('holeNumber') === this.get('holeCount');
  }.property('holeNumber', 'finalHoleNumber'),

  isPar3: function() { return this.get('holePar') === 3; }.property('holePar'),
  isPar4: function() { return this.get('holePar') === 4; }.property('holePar'),
  isPar5: function() { return this.get('holePar') === 5; }.property('holePar'),

  finishRound: function() {
    var roundId = this.get('roundId');

    this.controllerFor('application').set('currentRound', null);
    this.controllerFor('application').set('currentHole', null);
    this.transitionToRoute('round', roundId);
  },

  actions: {
    previousHole: function() {
      var holeNumber = parseInt(this.get('holeNumber')) - 1,
          roundId = this.get('roundId');

      this.send('saveAll');
      this.controllerFor('application').set('currentHole', holeNumber);

      Ember.$("html, body").animate({ scrollTop: 0 });
      this.transitionToRoute('turns', roundId, holeNumber);
    },

    nextHole: function() {
      var holeNumber = parseInt(this.get('holeNumber')) + 1,
          roundId = this.get('roundId'),
          _this = this;

      this.send('saveAll');
      this.controllerFor('application').set('currentHole', holeNumber);

      Ember.$("html, body").animate({ scrollTop: 0 });
      if (this.get('isLastHole')) {
        _this.finishRound();
      } else {
        _this.transitionToRoute('turns', roundId, holeNumber);
      }
    },

    addOne: function(turn) {
      var strokes = parseInt(turn.get('strokes') || 0),
          maximumTurnStrokes = 8;

      turn.set('strokes', Math.min(maximumTurnStrokes, strokes + 1));
    },

    subtractOne: function(turn) {
      var strokes = parseInt(turn.get('strokes') || 0),
          minimumTurnStrokes = 1,
          newStrokes = strokes - 1;

      if (newStrokes < minimumTurnStrokes) {
        turn.set('strokes', null);
      } else {
        turn.set('strokes', newStrokes);
      }
    },

    changePar: function(par) {
      var changedPar = parseInt(par);

      this.get('model').forEach(function(turn) {
        turn.set('par', changedPar);
      });
    },

    // Private
    saveAll: function() {
      this.get('model').forEach(function(turn) {
        if (turn.get('isDirty')) {
          turn.save();
        }
      });
    }
  }
});

export default TurnsController;
