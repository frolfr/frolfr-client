import Ember from 'ember';

var ScorecardsTable = Ember.Component.extend({
  didInsertElement: function() {
    this._super();
    Ember.$('.sticky-header').floatThead({
      scrollingTop: 40
    });
  }
});

export default ScorecardsTable;
